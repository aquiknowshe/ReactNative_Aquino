import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Pressable,
} from "react-native";

interface Question {
  id: number;
  category: string;
  question: string;
  options: string[];
  correctAnswer: number;
}

interface QuizOptionProps {
  option: string;
  index: number;
  isCorrect: boolean;
  isWrong: boolean;
  disabled: boolean;
  onPress: () => void;
}

const questions: Question[] = [
  {
    id: 1,
    category: "INTRODUCTION TO REACT NATIVE",
    question:
      "How does React Native render user interface elements components on mobile devices?",
    options: [
      "It compiles entirely into a standard website embedded inside a WebView.",
      "It bridges JavaScript code to invoke native platform UI views.",
      "It bypasses mobile OS architectures and draws pixels directly via Canvas.",
      "It translates everything into C++ binary files before execution.",
    ],
    correctAnswer: 1,
  },
  {
    id: 2,
    category: "SETUP & ENVIRONMENT",
    question:
      "Which tool allows you to build and run React Native projects quickly without installing Android Studio or Xcode configurations locally?",
    options: [
      "Metro Bundler",
      "Expo Go",
      "React Native CLI",
      "Cocoapods",
    ],
    correctAnswer: 1,
  },
  {
    id: 3,
    category: "CORE COMPONENTS",
    question:
      "Which core React Native component maps directly to a native wrapper that displays plaintext on screen?",
    options: [
      "<View>",
      "<ScrollView>",
      "<Text>",
      "<SafeAreaView>",
    ],
    correctAnswer: 2,
  },
  {
    id: 4,
    category: "PROPS & CUSTOMIZATION",
    question:
      "Which of the following best describes 'Props' in React Native?",
    options: [
      "Data managed internally within a component that can change over time.",
      "Global application values that cannot be accessed by child components.",
      "Immutable configuration arguments passed down from parent to child components.",
      "Functions used exclusively to run network requests.",
    ],
    correctAnswer: 2,
  },
  {
    id: 5,
    category: "STATE MANAGEMENT",
    question:
      "When dealing with local component state via the useState hook, what happens automatically when the state updater function is called?",
    options: [
      "The component triggers a re-render to update the user interface.",
      "The application completely restarts its bundle execution.",
      "The data is immediately stored permanently inside the device storage.",
      "The state freezes and becomes a read-only prop property.",
    ],
    correctAnswer: 0,
  },
];

function QuizOption({
  option,
  isCorrect,
  isWrong,
  disabled,
  onPress,
}: QuizOptionProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      disabled={disabled}
      onPress={onPress}
      style={[
        styles.optionCard,
        isCorrect && styles.correctCard,
        isWrong && styles.incorrectCard,
      ]}
    >
      <Text style={styles.optionText}>
        {isCorrect && "✅ "}
        {isWrong && "❌ "}
        {option}
      </Text>
    </TouchableOpacity>
  );
}

export default function Index() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);

  const [timeLeft, setTimeLeft] = useState(30);

  const [showAnswer, setShowAnswer] = useState(false);

  const [warningShown, setWarningShown] = useState(false);

  const [showToast, setShowToast] = useState(false);

  const [isExamFinished, setIsExamFinished] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

    useEffect(() => {
    if (isExamFinished || showAnswer) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === 6 && !warningShown) {
          setWarningShown(true);
          setShowToast(true);
        }

        if (prev <= 1) {
        setShowToast(false);
        setShowAnswer(true);
        return 0;
}

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [showAnswer, isExamFinished, warningShown]);

  const handleSelectOption = (index: number) => {
    if (showAnswer) return;

    setSelectedOption(index);
    setShowAnswer(true);

    if (index === currentQuestion.correctAnswer) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex === questions.length - 1) {
      setIsExamFinished(true);
      return;
    }

    setCurrentQuestionIndex((prev) => prev + 1);
    setSelectedOption(null);
    setShowAnswer(false);
   setWarningShown(false);
   setShowToast(false);
   setShowAnswer(false);
setSelectedOption(null);
setTimeLeft(30);
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setScore(0);
    setTimeLeft(30);
    setShowAnswer(false);
    setWarningShown(false);
    setShowToast(false);
    setIsExamFinished(false);
  };

  if (isExamFinished) {
    const percentage = Math.round(
      (score / questions.length) * 100
    );

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.resultContainer}>

          <Text style={styles.resultIcon}>🎓</Text>

          <Text style={styles.resultTitle}>
            Exam Results
          </Text>

          <Text style={styles.resultSubtitle}>
            Score: {score} / {questions.length} Correct
          </Text>

          <Text style={styles.resultPercentage}>
            {percentage}%
          </Text>

          <Text style={styles.resultMessage}>
            Review the core fundamentals and try again.
          </Text>

          <TouchableOpacity
            style={styles.restartButton}
            onPress={handleRestart}
          >
            <Text style={styles.restartButtonText}>
              🔄 Restart Laboratory Exam
            </Text>
          </TouchableOpacity>

        </View>
      </SafeAreaView>
    );
  }

  const progress =
    ((currentQuestionIndex + 1) / questions.length) * 100;

  return (
    <SafeAreaView style={styles.container}>

      {showToast && (
        <Pressable
          style={styles.toast}
          onPress={() => setShowToast(false)}
        >
          <Text style={styles.toastText}>
            ⏱️ Time is running out!
          </Text>
        </Pressable>
      )}

      <ScrollView
        contentContainerStyle={{
          padding: 18,
          paddingBottom: 150,
        }}
        showsVerticalScrollIndicator={false}
      >

        <View style={styles.card}>

          <View style={styles.headerRow}>

            <View>

              <Text style={styles.category}>
                {currentQuestion.category}
              </Text>

              <Text style={styles.questionCounter}>
                Question {currentQuestionIndex + 1} of {questions.length}
              </Text>

            </View>

            <View
              style={[
                styles.timerBadge,
                timeLeft <= 5 && styles.timerDangerBadge,
              ]}
            >
              <Text style={styles.timerText}>
                ⏱ {timeLeft}s
              </Text>
            </View>

          </View>

          <View style={styles.progressTrack}>
            <View
              style={[
                styles.progressFill,
                {
                  width: `${progress}%`,
                },
              ]}
            />
          </View>

          <Text style={styles.questionText}>
            {currentQuestion.question}
          </Text>

          {currentQuestion.options.map((option, index) => {

            const isCorrect =
              showAnswer &&
              index === currentQuestion.correctAnswer;

            const isWrong =
              showAnswer &&
              selectedOption === index &&
              index !== currentQuestion.correctAnswer;

            return (
              <QuizOption
                key={index}
                option={option}
                index={index}
                isCorrect={isCorrect}
                isWrong={isWrong}
                disabled={showAnswer}
                onPress={() => handleSelectOption(index)}
              />
            );

          })}

        </View>

      </ScrollView>

      <View style={styles.fixedButtonContainer}>
        <TouchableOpacity
          disabled={!showAnswer}
          style={[
            styles.nextButton,
            !showAnswer && styles.disabledButton,
          ]}
          onPress={handleNextQuestion}
        >
          <Text style={styles.nextButtonText}>
            {currentQuestionIndex === questions.length - 1
              ? "Finish Exam"
              : "Proceed to Next Question"}
          </Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },

  toast: {
    position: "absolute",
    bottom: 150,
    alignSelf: "center",
    backgroundColor: "#323232",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    zIndex: 999,
    elevation: 5,
  },

  toastText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "600",
  },

  card: {
    backgroundColor: "#FFFFFF",
  borderRadius: 18,
  paddingHorizontal: 14,
  paddingBottom: 14,
  paddingTop: 40,
  },

  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  category: {
    color: "#3B82F6",
    fontWeight: "800",
    fontSize: 14,
    letterSpacing: 1,
    marginBottom: 5,
  },

  questionCounter: {
    color: "#64748B",
    fontSize: 13,
    fontWeight: "600",
  },

  timerBadge: {
    backgroundColor: "#F1F5F9",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 14,
  },

  timerDangerBadge: {
    backgroundColor: "#FEF2F2",
  },

  timerText: {
    fontSize: 13,
    fontWeight: "700",
    color: "#334155",
  },

  progressTrack: {
    height: 6,
    backgroundColor: "#E2E8F0",
    borderRadius: 20,
    marginTop: 15,
    marginBottom: 18,
  },

  progressFill: {
    height: 6,
    backgroundColor: "#3B82F6",
    borderRadius: 20,
  },

  questionText: {
    color: "#0F172A",
    fontSize: 17,
    lineHeight: 25,
    fontWeight: "700",
    marginBottom: 18,
  },

  optionCard: {
    borderWidth: 1,
    borderColor: "#E2E8F0",
    borderRadius: 14,
    padding: 14,
    marginBottom: 10,
    backgroundColor: "#FFFFFF",
  },

  optionText: {
    color: "#334155",
    fontSize: 14,
    lineHeight: 21,
  },

  correctCard: {
    backgroundColor: "#F0FDF4",
    borderColor: "#22C55E",
    borderWidth: 2,
  },

  incorrectCard: {
    backgroundColor: "#FEF2F2",
    borderColor: "#EF4444",
    borderWidth: 2,
  },

  fixedButtonContainer: {
    position: "absolute",
    left: 16,
    right: 16,
    bottom: 85,
  },

  nextButton: {
    backgroundColor: "#3B82F6",
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: "center",
  },

  disabledButton: {
    backgroundColor: "#93C5FD",
  },

  nextButtonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "700",
  },

  resultContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 25,
  },

  resultIcon: {
    fontSize: 70,
    marginBottom: 10,
  },

  resultTitle: {
    fontSize: 26,
    fontWeight: "800",
    color: "#0F172A",
  },

  resultSubtitle: {
    marginTop: 10,
    color: "#64748B",
    fontSize: 15,
  },

  resultPercentage: {
    fontSize: 64,
    fontWeight: "900",
    color: "#3B82F6",
    marginTop: 20,
  },

  resultMessage: {
    marginTop: 12,
    textAlign: "center",
    color: "#64748B",
    fontSize: 14,
  },

  restartButton: {
    marginTop: 30,
    backgroundColor: "#1E293B",
    paddingHorizontal: 26,
    paddingVertical: 14,
    borderRadius: 12,
  },

  restartButtonText: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 15,
  },
});