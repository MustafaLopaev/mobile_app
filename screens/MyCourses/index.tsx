import { View, StyleSheet, ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CourseCard } from "@/components/CourseCard";
import { mockCourses, type Course } from "@/data/mockCourses";
import { colors } from "@/config/colors";
import { router } from "expo-router";

export default function MyCoursesScreen() {
  const handleCoursePress = (course: Course) => {
    router.push({
      pathname: "/exams",
      params: { courseId: course.id, courseName: course.name },
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My Courses</Text>
        <Text style={styles.subtitle}>{mockCourses.length} Active Courses</Text>
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {mockCourses.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            onPress={handleCoursePress}
          />
        ))}
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
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: "#fff",
    opacity: 0.8,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 16,
  },
});
