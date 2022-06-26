import {
  CourseSemesterData,
  DegreeProgramData,
  DepartmentData,
  GradeData,
  HighestEducationLevelData,
  LanguageData,
  PreviousDegreeSubjectData,
  SpecializationData,
  UserRoleData,
} from './seedData.entity';

export const courseSemesterData: CourseSemesterData[] = [
  { code: 'sp', term: 1, name: 'Spring' },
  { code: 'sm', term: 2, name: 'Summer' },
  { code: 'f', term: 3, name: 'Fall' },
];

export const degreeProgramData: DegreeProgramData[] = [
  { code: 'a', name: 'Analytics', url: 'https://pe.gatech.edu/degrees/analytics' },
  { code: 'cs', name: 'Computer Science', url: 'https://pe.gatech.edu/degrees/computer-science' },
  { code: 'cy', name: 'Cybersecurity', url: 'https://pe.gatech.edu/degrees/cybersecurity' },
];

export const departmentData: DepartmentData[] = [
  { code: 'CS', name: 'Computer Science' },
  { code: 'CSE', name: 'Computational Science and Engineering' },
  { code: 'ECE', name: 'Electrical and Computer Engineering' },
  { code: 'INTA', name: 'International Affairs' },
  { code: 'ISYE', name: 'Industrial and Systems Engineering' },
  { code: 'MGT', name: 'Management' },
  { code: 'PUBP', name: 'Public Policy' },
];

export const gradeData: GradeData[] = [
  { code: 'unk', name: 'Prefer not to say' },
  { code: 'w', name: 'W' },
  { code: 'f', name: 'F' },
  { code: 'd', name: 'D' },
  { code: 'c', name: 'C' },
  { code: 'b', name: 'B' },
  { code: 'a', name: 'A' },
];

export const highestEducationLevelData: HighestEducationLevelData[] = [
  { code: 'bach', name: 'Bachelor' },
  { code: 'mast', name: 'Master' },
  { code: 'phd', name: 'Doctor of Philosophy (PhD)' },
];

export const languageData: LanguageData[] = [
  { code: 'c', name: 'C' },
  { code: 'cpp', name: 'C++' },
  { code: 'cs', name: 'C#' },
  { code: 'go', name: 'Golang' },
  { code: 'java', name: 'Java' },
  { code: 'js', name: 'JavaScript' },
  { code: 'kt', name: 'Kotlin' },
  { code: 'php', name: 'PHP' },
  { code: 'py', name: 'Python' },
  { code: 'rs', name: 'Rust' },
  { code: 'r', name: 'R' },
  { code: 'scala', name: 'Scala' },
  { code: 'sql', name: 'SQL' },
  { code: 'ts', name: 'TypeScript' },
];

export const previousDegreeSubjectData: PreviousDegreeSubjectData[] = [
  { code: 'act', name: 'Actuarial Science' },
  { code: 'bus', name: 'Business - Other/General (Accounting, etc.)' },
  { code: 'cs', name: 'Computer Science' },
  { code: 'econ', name: 'Economics' },
  { code: 'engr_elec', name: 'Electrical Engineering' },
  { code: 'engr_cmp', name: 'Computer Engineering' },
  { code: 'engr_ind', name: 'Industrial Engineering' },
  { code: 'engr_other', name: 'Other Engineering' },
  { code: 'fin', name: 'Finance' },
  { code: 'hlt', name: 'Health or Healthcare-Related (PA, Dentistry, etc.)' },
  { code: 'human', name: 'Humanities' },
  { code: 'it', name: 'Information Technology' },
  { code: 'law', name: 'Law/Legal' },
  { code: 'lib_arts', name: 'Liberal Arts' },
  { code: 'med', name: 'Medicine or Premed' },
  { code: 'mis', name: 'Management Information Systems' },
  { code: 'math', name: 'Mathematics' },
  { code: 'nat_sci', name: 'Natural Sciences (Biology, Chemistry, etc.)' },
  { code: 'stats', name: 'Statistics' },
  { code: 'or', name: 'Operations Research' },
  { code: 'phil', name: 'Philosophy' },
  { code: 'phys', name: 'Physics' },
  { code: 'zz_other', name: 'Other / Not Listed' },
];

export const specializationData: SpecializationData[] = [
  { code: 'at', name: 'Analytical Tools' },
  { code: 'ba', name: 'Business Analytics' },
  { code: 'cda', name: 'Computational Data Analytics' },
  { code: 'cpr', name: 'Computational Perception & Robotics' },
  { code: 'cs', name: 'Computing Systems' },
  { code: 'ii', name: 'Interactive Intelligence' },
  { code: 'ml', name: 'Machine Learning' },
  { code: 'es', name: 'Energy Systems' },
  { code: 'is', name: 'Information Security' },
  { code: 'p', name: 'Policy' },
];

export const userRoleData: UserRoleData[] = [
  { code: 'admin', name: 'Admin' },
  { code: 'user', name: 'User' },
];
