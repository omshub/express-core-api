interface CanonicalFieldsData {
  code: string;
  name: string;
}

/* ------------------------ simple/single-entity ------------------------ */

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

/* ------------------------ complex/multi-entity ------------------------ */

export interface CourseDataRaw {
  departmentCode: string;
  courseNumber: string;
  name: string;
  url: string | null;
  isDeprecated: boolean;
  isFoundational: boolean;
}

export interface CourseAliasDataRaw {
  departmentCode: string;
  courseNumber: string;
  aliases: string[];
}

export interface DegreeProgramSpecializationDataRaw {
  degreeProgramCode: string;
  specializationCode: string;
  degreeProgramSpecializationCode: string;
}

export interface LegacyCourseReviewDataRaw {
  departmentCode: string;
  courseNumber: string;
  reviewDate: number;
  courseYear: number | '0000';
  semesterTerm: number;
  overall: number | null;
  difficulty: number | null;
  workload: number | null;
  body: string;
}
