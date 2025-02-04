import { View, Text, StyleSheet, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import type { Course } from "@/data/mockCourses";
import { colors } from "@/config/colors";

interface CourseCardProps {
  course: Course;
  onPress: (course: Course) => void;
}

export function CourseCard({ course, onPress }: CourseCardProps) {
  return (
    <Pressable style={styles.card} onPress={() => onPress(course)}>
      <View style={styles.header}>
        <View>
          <Text style={styles.name}>{course.name}</Text>
          <Text style={styles.code}>{course.courseCode}</Text>
        </View>
        <View style={styles.creditsContainer}>
          <Text style={styles.creditsNumber}>{course.credits}</Text>
          <Text style={styles.creditsText}>Credits</Text>
        </View>
      </View>

      <View style={styles.progressContainer}>
        <View style={styles.progressBar}>
          <View
            style={[styles.progressFill, { width: course.progress ? `${course.progress}%` : '0%' }]}
          />
        </View>
        <Text style={styles.progressText}>{course.progress}% Complete</Text>
      </View>

      <View style={styles.footer}>
        <View style={styles.department}>
          <AntDesign name="folder1" size={16} color={colors.dark.main.base} />
          <Text style={styles.departmentText}>{course.department}</Text>
        </View>
        <View style={styles.nextClass}>
          <AntDesign name="calendar" size={16} color={colors.dark.main.base} />
          <Text style={styles.nextClassText}>{course.nextClass}</Text>
        </View>
      </View>

      {course.teachers.length > 0 && (
        <View style={styles.teachers}>
          <Text style={styles.teachersLabel}>Teachers: </Text>
          <Text style={styles.teachersText}>
            {course.teachers.map((t) => t.name).join(", ")}
          </Text>
        </View>
      )}
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
  code: {
    fontSize: 14,
    color: "#666",
  },
  creditsContainer: {
    alignItems: "center",
    backgroundColor: colors.light.main.base,
    borderRadius: 8,
    padding: 8,
  },
  creditsNumber: {
    fontSize: 18,
    fontWeight: "700",
    color: "#fff",
  },
  creditsText: {
    fontSize: 12,
    color: "#fff",
  },
  progressContainer: {
    marginBottom: 16,
  },
  progressBar: {
    height: 6,
    backgroundColor: "#E0E0E0",
    borderRadius: 3,
    marginBottom: 8,
  },
  progressFill: {
    height: "100%",
    backgroundColor: colors.light.main.base,
    borderRadius: 3,
  },
  progressText: {
    fontSize: 12,
    color: "#666",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  department: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  departmentText: {
    fontSize: 14,
    color: colors.dark.main.base,
  },
  nextClass: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  nextClassText: {
    fontSize: 14,
    color: colors.dark.main.base,
  },
  teachers: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  teachersLabel: {
    fontSize: 14,
    color: "#666",
    marginRight: 4,
  },
  teachersText: {
    fontSize: 14,
    color: "#666",
    flex: 1,
  },
});
