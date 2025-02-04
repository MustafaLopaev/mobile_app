import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import type { Exam } from "@/data/mockExams";
import { colors } from "@/config/colors";

interface ExamCardProps {
  exam: Exam;
  onPress: (exam: Exam) => void;
}

export function ExamCard({ exam, onPress }: ExamCardProps) {
  const getStatusColor = (status: Exam["status"]) => {
    switch (status) {
      case "completed":
        return "#4CAF50";
      case "in-progress":
        return "#2196F3";
      case "missed":
        return "#F44336";
      default:
        return "#FFA000";
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    });
  };

  return (
    <Pressable style={styles.card} onPress={() => onPress(exam)}>
      <View style={styles.header}>
        <View>
          <Text style={styles.name}>{exam.name}</Text>
          <Text style={styles.courseName}>{exam.courseName}</Text>
        </View>
        <View
          style={[
            styles.status,
            { backgroundColor: getStatusColor(exam.status) },
          ]}
        >
          <Text style={styles.statusText}>
            {exam.status.charAt(0).toUpperCase() + exam.status.slice(1)}
          </Text>
        </View>
      </View>

      <View style={styles.details}>
        <View style={styles.detailItem}>
          <AntDesign name="calendar" size={16} color={colors.dark.main.base} />
          <Text style={styles.detailText}>
            Start: {formatDate(exam.startDate)}
          </Text>
        </View>
        <View style={styles.detailItem}>
          <AntDesign
            name="clockcircle"
            size={16}
            color={colors.dark.main.base}
          />
          <Text style={styles.detailText}>End: {formatDate(exam.endDate)}</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <View style={styles.footerItem}>
          <AntDesign
            name="questioncircle"
            size={16}
            color={colors.dark.main.base}
          />
          <Text style={styles.footerText}>{exam.totalQuestions} Questions</Text>
        </View>
        <View style={styles.footerItem}>
          <AntDesign
            name="clockcircle"
            size={16}
            color={colors.dark.main.base}
          />
          <Text style={styles.footerText}>{exam.timeLimit} Minutes</Text>
        </View>
        {exam.score !== undefined && (
          <View style={styles.footerItem}>
            <AntDesign name="Trophy" size={16} color={colors.dark.main.base} />
            <Text style={styles.footerText}>Score: {exam.score}%</Text>
          </View>
        )}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.dark.main.base,
    marginBottom: 4,
  },
  courseName: {
    fontSize: 14,
    color: "#666",
  },
  status: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  statusText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
  },
  details: {
    marginBottom: 16,
    gap: 8,
  },
  detailItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  detailText: {
    fontSize: 14,
    color: "#666",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 16,
  },
  footerItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  footerText: {
    fontSize: 14,
    color: colors.dark.main.base,
  },
});
