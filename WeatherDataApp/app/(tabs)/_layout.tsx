import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

export default function Index() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formattedTime = time.toLocaleTimeString("en-US", {
    hour12: true,
  });

  const formattedDate = time.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <LinearGradient
      colors={["#4A0E17", "#2A080C"]}
      style={styles.container}
    >
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >

        <View style={styles.locationBadge}>
          <Ionicons
            name="location"
            size={13}
            color="#D4AF37"
          />

          <Text style={styles.locationText}>
            NASUGBU BATANGAS, PH
          </Text>
        </View>

        <View style={styles.card}>
          <View style={styles.labelRow}>
            <Ionicons
              name="time-outline"
              size={13}
              color="#D4AF37"
            />

            <Text style={styles.label}>
              CURRENT TIME
            </Text>
          </View>

          <Text style={styles.bigTime}>
            {formattedTime}
          </Text>

          <View style={styles.dateRow}>
            <Ionicons
              name="calendar-outline"
              size={11}
              color="#FFFFFF"
            />

            <Text style={styles.date}>
              {formattedDate}
            </Text>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.labelRow}>
            <Ionicons
              name="help-circle-outline"
              size={13}
              color="#D4AF37"
            />

            <Text style={styles.label}>
              WEATHER UPDATE
            </Text>
          </View>

          <Text style={styles.temperature}>
            31°C
          </Text>

          <Text style={styles.weather}>
            Partly Cloudy
          </Text>

          <View style={styles.weatherInfo}>
            <View style={styles.infoBlock}>
              <Text style={styles.infoTitle}>
                HUMIDITY
              </Text>

              <Text style={styles.infoValue}>
                65%
              </Text>
            </View>

            <View style={styles.divider} />

            <View style={styles.infoBlock}>
              <Text style={styles.infoTitle}>
                WIND
              </Text>

              <Text style={styles.infoValue}>
                12 km/h
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.labelRow}>
            <Ionicons
              name="logo-react"
              size={13}
              color="#D4AF37"
            />

            <Text style={styles.label}>
              REACT NATIVE
            </Text>
          </View>

          <Text style={styles.sheeesh}>
            SHEEESH
          </Text>
        </View>

        <View style={styles.footerContainer}>
          <View style={styles.footerLine} />

          <View style={styles.footerRow}>
            <Ionicons
              name="logo-react"
              size={10}
              color="#D4AF37"
            />

            <Text style={styles.footer}>
              REACT NATIVE • LIVE MONITOR
            </Text>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
    paddingVertical: 40,
  },

  locationBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.07)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.12)",
    borderRadius: 999,
    paddingHorizontal: 14,
    paddingVertical: 8,
    marginBottom: 18,
  },

  locationText: {
    color: "#FFFFFF",
    fontWeight: "700",
    letterSpacing: 1,
    fontSize: 12,
    marginLeft: 6,
  },

  card: {
    width: "88%",
    maxWidth: 380,
    backgroundColor: "rgba(255,255,255,0.07)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.12)",
    borderRadius: 22,
    padding: 20,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 3,
    },

    elevation: 2,
  },

  labelRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },

  label: {
    color: "#D4AF37",
    fontWeight: "700",
    letterSpacing: 1,
    fontSize: 11,
    marginLeft: 7,
  },

  bigTime: {
    color: "#FFFFFF",
    fontSize: 38,
    fontWeight: "800",
  },

  dateRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },

  date: {
    color: "#FFFFFF",
    opacity: 0.9,
    fontSize: 11,
    marginLeft: 6,
    fontWeight: "500",
  },

  temperature: {
    fontSize: 54,
    fontWeight: "800",
    color: "#FFFFFF",
    lineHeight: 60,
  },

  weather: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
    marginTop: 2,
  },

  weatherInfo: {
    flexDirection: "row",
    backgroundColor: "rgba(0,0,0,0.22)",
    borderRadius: 10,
    paddingVertical: 12,
    marginTop: 16,
  },

  infoBlock: {
    flex: 1,
    alignItems: "center",
  },

  divider: {
    width: 1,
    backgroundColor: "rgba(255,255,255,0.15)",
  },

  infoTitle: {
    color: "#A3A3A3",
    fontSize: 9,
    fontWeight: "700",
    letterSpacing: 1,
  },

  infoValue: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "800",
    marginTop: 4,
  },

  sheeesh: {
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: 34,
    fontWeight: "900",
    letterSpacing: 0.5,
  },

  footerContainer: {
    alignItems: "center",
    marginTop: 6,
    marginBottom: 20,
  },

  footerLine: {
    width: 55,
    height: 2,
    backgroundColor: "#D4AF37",
    borderRadius: 999,
    opacity: 0.8,
    marginBottom: 12,
  },

  footerRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  footer: {
    color: "#D4AF37",
    fontWeight: "700",
    fontSize: 10,
    letterSpacing: 1,
    marginLeft: 6,
  },
});