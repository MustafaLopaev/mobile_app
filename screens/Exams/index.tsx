import { useState, useCallback } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ExamCard } from "@/components/ExamCard";
import { mockExams, type Exam } from "@/data/mockExams";
import { colors } from "@/config/colors";
import { useLocalSearchParams, router } from "expo-router";
import { AntDesign } from "@expo/vector-icons";

type ExamSection = "current" | "completed" | "missed";

export default function ExamsScreen() {
  const params = useLocalSearchParams<{
    courseId?: string;
    courseName?: string;
  }>();
  const [activeSection, setActiveSection] = useState<ExamSection>("current");

  const filteredExams = useCallback(() => {
    let exams = mockExams;

    // Filter by courseId if provided
    if (params.courseId) {
      exams = exams.filter((exam) => exam.courseId === params.courseId);
    }

    // Then filter by section
    switch (activeSection) {
      case "current":
        return exams.filter(
          (exam) =>
            exam.status === "not-started" || exam.status === "in-progress"
        );
      case "completed":
        return exams.filter((exam) => exam.status === "completed");
      case "missed":
        return exams.filter((exam) => exam.status === "missed");
      default:
        return [];
    }
  }, [activeSection, params.courseId]);

  const handleExamPress = (exam: Exam) => {
    // Handle navigation to exam details/taking page
    console.log("Navigate to exam:", exam.name);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTop}>
          {params.courseId && (
            <TouchableOpacity
              onPress={() => router.back()}
              style={styles.backButton}
            >
              <AntDesign name="arrowleft" size={24} color="#fff" />
            </TouchableOpacity>
          )}
          <Text style={styles.title}>
            {params.courseName ? `${params.courseName} Exams` : "My Exams"}
          </Text>
        </View>
        <View style={styles.tabs}>
          {(["current", "completed", "missed"] as ExamSection[]).map(
            (section) => (
              <Pressable
                key={section}
                style={[
                  styles.tab,
                  activeSection === section && styles.activeTab,
                ]}
                onPress={() => setActiveSection(section)}
              >
                <Text
                  style={[
                    styles.tabText,
                    activeSection === section && styles.activeTabText,
                  ]}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Text>
              </Pressable>
            )
          )}
        </View>
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {filteredExams().map((exam) => (
          <ExamCard key={exam.id} exam={exam} onPress={handleExamPress} />
        ))}
        {filteredExams().length === 0 && (
          <Text style={styles.emptyText}>No {activeSection} exams found</Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  header: {
    padding: 20,
    backgroundColor: colors.dark.main.base,
  },
  headerTop: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  backButton: {
    marginRight: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    flex: 1,
  },
  tabs: {
    flexDirection: "row",
    gap: 12,
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
  activeTab: {
    backgroundColor: "#fff",
  },
  tabText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
  activeTabText: {
    color: colors.dark.main.base,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 16,
  },
  emptyText: {
    textAlign: "center",
    color: "#666",
    fontSize: 16,
    marginTop: 32,
  },
});
