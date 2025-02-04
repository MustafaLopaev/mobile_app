export interface Exam {
  id: string;
  name: string;
  courseId: string;
  courseName: string;
  startDate: string;
  endDate: string;
  openedAt?: string;
  completedAt?: string;
  status: "not-started" | "in-progress" | "completed" | "missed";
  score?: number;
  totalQuestions: number;
  timeLimit: number; // in minutes
}

export const mockExams: Exam[] = [
  // Current Exams
  {
    id: "1",
    name: "Linear Algebra Mid-term",
    courseId: "1",
    courseName: "Linear Algebra",
    startDate: "2024-02-01T13:52:00Z",
    endDate: "2024-02-07T14:52:00Z",
    openedAt: "2024-02-03T17:02:00Z",
    status: "in-progress",
    totalQuestions: 50,
    timeLimit: 120,
  },
  {
    id: "2",
    name: "Probability Quiz 1",
    courseId: "4",
    courseName: "Probability and Statistics",
    startDate: "2024-02-04T09:00:00Z",
    endDate: "2024-02-05T09:00:00Z",
    status: "not-started",
    totalQuestions: 20,
    timeLimit: 45,
  },

  // Completed Exams
  {
    id: "3",
    name: "Calculus Practice Test",
    courseId: "3",
    courseName: "Calculus",
    startDate: "2024-01-25T07:53:00Z",
    endDate: "2024-01-26T08:53:00Z",
    openedAt: "2024-01-25T09:00:00Z",
    completedAt: "2024-01-26T08:53:00Z",
    status: "completed",
    score: 92,
    totalQuestions: 30,
    timeLimit: 60,
  },
  {
    id: "4",
    name: "Statistics Final Exam",
    courseId: "4",
    courseName: "Statistics",
    startDate: "2024-01-29T19:13:00Z",
    endDate: "2024-01-30T19:15:00Z",
    openedAt: "2024-01-29T19:15:00Z",
    completedAt: "2024-01-30T19:15:00Z",
    status: "completed",
    score: 88,
    totalQuestions: 25,
    timeLimit: 45,
  },

  // Missed Exams
  {
    id: "5",
    name: "Algebra Quiz 1",
    courseId: "1",
    courseName: "Algebra",
    startDate: "2024-01-20T10:00:00Z",
    endDate: "2024-01-21T10:00:00Z",
    status: "missed",
    totalQuestions: 15,
    timeLimit: 30,
  },
  {
    id: "6",
    name: "Geometry Practice Test",
    courseId: "2",
    courseName: "Geometry",
    startDate: "2024-01-22T14:00:00Z",
    endDate: "2024-01-23T14:00:00Z",
    status: "missed",
    totalQuestions: 40,
    timeLimit: 90,
  },
  {
    id: "7",
    name: "Calculus Final Exam",
    courseId: "2",
    courseName: "Calculus",
    startDate: "2024-02-10T10:00:00Z",
    endDate: "2024-02-10T12:00:00Z",
    status: "not-started",
    totalQuestions: 40,
    timeLimit: 120,
  },
  {
    id: "8",
    name: "Trigonometry Mid-term",
    courseId: "3",
    courseName: "Trigonometry",
    startDate: "2024-02-15T13:00:00Z",
    endDate: "2024-02-15T15:00:00Z",
    status: "not-started",
    totalQuestions: 35,
    timeLimit: 90,
  },

  // Additional Completed Exams
  {
    id: "9",
    name: "Algebra Quiz 2",
    courseId: "1",
    courseName: "Algebra",
    startDate: "2024-01-18T09:00:00Z",
    endDate: "2024-01-18T10:00:00Z",
    openedAt: "2024-01-18T09:05:00Z",
    completedAt: "2024-01-18T10:00:00Z",
    status: "completed",
    score: 85,
    totalQuestions: 20,
    timeLimit: 60,
  },
  {
    id: "10",
    name: "Discrete Math Practice Test",
    courseId: "4",
    courseName: "Discrete Math",
    startDate: "2024-01-20T14:00:00Z",
    endDate: "2024-01-20T15:30:00Z",
    openedAt: "2024-01-20T14:05:00Z",
    completedAt: "2024-01-20T15:30:00Z",
    status: "completed",
    score: 90,
    totalQuestions: 50,
    timeLimit: 90,
  },

  // Additional Missed Exams
  {
    id: "11",
    name: "Number Theory Quiz 1",
    courseId: "3",
    courseName: "Number Theory",
    startDate: "2024-01-22T08:00:00Z",
    endDate: "2024-01-22T09:00:00Z",
    status: "missed",
    totalQuestions: 25,
    timeLimit: 60,
  },
  {
    id: "12",
    name: "Topology Mid-term",
    courseId: "2",
    courseName: "Topology",
    startDate: "2024-01-24T11:00:00Z",
    endDate: "2024-01-24T12:30:00Z",
    status: "missed",
    totalQuestions: 30,
    timeLimit: 90,
  },
];
// Additional Current Exams
