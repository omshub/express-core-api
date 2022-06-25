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
