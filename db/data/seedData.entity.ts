interface CanonicalFieldsData {
  code: string;
  name: string;
}

export interface CourseSemesterData extends CanonicalFieldsData {
  term: number;
}

export interface DegreeProgramData extends CanonicalFieldsData {
  url: string;
}

export type DepartmentData = CanonicalFieldsData;

export type GradeData = CanonicalFieldsData;

export type HighestEducationLevelData = CanonicalFieldsData;

export type LanguageData = CanonicalFieldsData;

export type PreviousDegreeSubjectData = CanonicalFieldsData;

export type SpecializationData = CanonicalFieldsData;

export type UserRoleData = CanonicalFieldsData;

export interface CourseAliasData {
  course_id: number;
  name: string;
}

export interface DegreeProgramSpecializationData {
  degree_program_id: number;
  specialization_id: number;
  code: string;
}

export interface CourseData {
  department_id: number;
  course_number: string;
  name: string;
  is_deprecated: boolean;
  is_foundational: boolean;
}

export interface CourseReviewData {
  review_date: number;
  is_legacy: boolean;
  course_id: number;
  course_semester_id: number;
  course_year: number;
  workload: number;
  difficulty: number;
  overall: number;
  body: string;
}
