export interface Teacher {
  name: string;
  id: string;
}

export interface Course {
  id: string;
  name: string;
  courseCode: string;
  credits: number;
  teachers: Teacher[];
  department: string;
  progress?: number; // Added for visual interest
  nextClass?: string; // Added for visual interest
}

export const mockCourses: Course[] = [
  {
    id: "1",
    name: "Linear Algebra",
    courseCode: "121",
    credits: 1,
    teachers: [
      { name: "Karishma Teacher", id: "1" },
      { name: "Berk Teacher", id: "2" },
      { name: "Himaja Teacher", id: "3" },
      { name: "Architha Teacher", id: "4" },
      { name: "Aimly", id: "5" },
    ],
    department: "Mathematics",
    progress: 65,
    nextClass: "Tomorrow at 10:00 AM",
  },
  {
    id: "2",
    name: "Test1",
    courseCode: "T1",
    credits: 4,
    teachers: [{ name: "Karishma Teacher", id: "1" }],
    department: "Engineering Math",
    progress: 30,
    nextClass: "Today at 2:30 PM",
  },
  {
    id: "3",
    name: "Testing",
    courseCode: "test",
    credits: 0,
    teachers: [],
    department: "Engineering Math",
    progress: 0,
    nextClass: "Not scheduled",
  },
  {
    id: "4",
    name: "Probability and Statistics",
    courseCode: "0001",
    credits: 5,
    teachers: [
      { name: "Himaja Teacher", id: "3" },
      { name: "MRUTeacher1 Demo", id: "6" },
      { name: "MRUTeacher2 Demo", id: "7" },
    ],
    department: "Engineering Math",
    progress: 85,
    nextClass: "Wednesday at 11:15 AM",
  },
];
