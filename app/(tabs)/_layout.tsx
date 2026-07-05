import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Modal,
  SafeAreaView,
  Image,
} from 'react-native';

const PROFILE = {
  name: 'SHEKAINAH SANDY L. AQUINO',
  tagline:
    '.𖥔 ݁ Life is short, but it is enormous. This too shall pass. 𖥔 ݁˖',
  email: 'shaynee.12@gmail.com',
  phone: '0935-852-3637',
};

const SKILLS = [
  'React Native',
  'TypeScript',
  'Java',
  'PHP',
  'MySQL',
  'HTML/CSS',
  'UI/UX Design',
  'Digital Art',
  'Graphic Design',
  'Git',
];

const PROJECTS = [
  {
    id: 1,
    title: 'SJR Luxe Lounge • 2024',
    description:
      'A beauty and wellness management platform showcasing premium services while providing clients with a seamless and engaging digital experience.',
  },
  {
    id: 2,
    title: "She's GiftBox • 2025",
    description:
      'An online gift shop platform offering thoughtfully curated gifts for every occasion, helping users celebrate meaningful moments with loved ones.',
  },
  {
    id: 3,
    title: 'SkillHive • 2026',
    description:
      'An internship management platform for Batangas State University students that streamlines applications, tracks progress, and connects students with opportunities.',
  },
  {
    id: 4,
    title: 'BaryoConnect • 2026',
    description:
      'A barangay digital services portal that allows residents to request documents and access community services efficiently and conveniently.',
  },
];

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        
        <View style={styles.headerCard}>
          <Image
            source={require('MobileApp/assets/images/formal_picture.jpg')}
            style={styles.profileImage}
            resizeMode="cover"
          />

          <Text style={styles.name}>
            {PROFILE.name}
          </Text>

          <Text style={styles.tagline}>
            {PROFILE.tagline}
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>
            🌷 ABOUT ME
          </Text>

          <Text style={styles.aboutText}>
            I am a 21-year-old Bachelor of Science in Information
            Technology (BSIT) student from section BA 3302. I am
            passionate about technology, software development,
            creative design, and digital innovation. As both a
            traditional and digital artist, I enjoy combining
            creativity with technical expertise to develop
            meaningful and user-friendly digital solutions.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>
            💻 SKILLS MATRIX
          </Text>

          <View style={styles.skillsContainer}>
            {SKILLS.map((skill) => (
              <View key={skill} style={styles.skillChip}>
                <Text style={styles.skillText}>
                  {skill}
                </Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>
            📁 PROJECTS
          </Text>

          {PROJECTS.map((project) => (
            <View
              key={project.id}
              style={styles.projectCard}
            >
              <Text style={styles.projectTitle}>
                {project.title}
              </Text>

              <Text style={styles.projectDescription}>
                {project.description}
              </Text>
            </View>
          ))}
        </View>

        <TouchableOpacity
          style={styles.contactButton}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.contactButtonText}>
            📞 CONTACT ME
          </Text>
        </TouchableOpacity>
      </ScrollView>

      <Modal
        visible={modalVisible}
        transparent
        animationType="fade"
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>
              Contact Information
            </Text>

            <Text style={styles.modalLabel}>
              📧 Email Address
            </Text>

            <Text style={styles.modalInfo}>
              {PROFILE.email}
            </Text>

            <Text style={styles.modalLabel}>
              📱 Mobile Number
            </Text>

            <Text style={styles.modalInfo}>
              {PROFILE.phone}
            </Text>

            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>
                Close
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const COLORS = {
  background: '#FAF4F2',
  card: '#FFFFFF',
  primary: '#D7A6B6',
  primaryLight: '#F6E9ED',
  text: '#2D3748',
  textLight: '#6B7280',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },

  headerCard: {
    backgroundColor: COLORS.primaryLight,
    borderRadius: 25,
    padding: 24,
    alignItems: 'center',
    marginBottom: 18,
    elevation: 3,
  },

  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 12,
    borderWidth: 3,
    borderColor: COLORS.primary,
  },

  name: {
    fontSize: 24,
    fontWeight: '800',
    letterSpacing: 1.5,
    textAlign: 'center',
    color: COLORS.text,
  },

  tagline: {
    marginTop: 10,
    textAlign: 'center',
    fontStyle: 'italic',
    fontSize: 15,
    color: COLORS.primary,
    lineHeight: 24,
  },

  card: {
    backgroundColor: COLORS.card,
    borderRadius: 20,
    padding: 18,
    marginBottom: 18,
    elevation: 2,
  },

  sectionTitle: {
    fontSize: 17,
    fontWeight: '700',
    marginBottom: 12,
    color: COLORS.text,
    letterSpacing: 1,
  },

  aboutText: {
    fontSize: 14,
    lineHeight: 24,
    color: COLORS.textLight,
  },

  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  skillChip: {
    backgroundColor: COLORS.primaryLight,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    margin: 5,
  },

  skillText: {
    fontSize: 12,
    fontWeight: '600',
    color: COLORS.text,
  },

  projectCard: {
    backgroundColor: COLORS.primaryLight,
    borderRadius: 14,
    padding: 14,
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: COLORS.primary,
  },

  projectTitle: {
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 6,
    color: COLORS.text,
  },

  projectDescription: {
    fontSize: 13,
    lineHeight: 20,
    color: COLORS.textLight,
  },

  contactButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: 'center',
  },

  contactButtonText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 15,
    letterSpacing: 1,
  },

  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.35)',
  },

  modalContent: {
    width: '85%',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
  },

  modalTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 15,
    color: COLORS.text,
  },

  modalLabel: {
    marginTop: 10,
    fontWeight: '700',
    color: COLORS.text,
  },

  modalInfo: {
    marginTop: 5,
    fontSize: 15,
    color: COLORS.textLight,
  },

  closeButton: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 20,
    marginTop: 20,
  },

  closeButtonText: {
    color: '#FFFFFF',
    fontWeight: '700',
  },
});