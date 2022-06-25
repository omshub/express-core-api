export const tableNames = {
  COURSE: 'course',
  COURSE_ALIAS: 'course_alias',
  COURSE_DEGREE_PROGRAM_SPECIALIZATION: 'course_degree_program_specialization',
  COURSE_REVIEW: 'course_review',
  COURSE_REVIEW_LANGUAGE: 'course_review_language',
  COURSE_SEMESTER: 'course_semester',
  DEGREE_PROGRAM: 'degree_program',
  DEGREE_PROGRAM_SPECIALIZATION: 'degree_program_specialization',
  DEPARTMENT: 'department',
  GRADE: 'grade',
  HIGHEST_EDUCATION_LEVEL: 'highest_education_level',
  LANGUAGE: 'language',
  PREVIOUS_DEGREE_SUBJECT: 'previous_degree_subject',
  SPECIALIZATION: 'specialization',
  USER: 'user',
  USER_ROLE: 'user_role',
};

export const canonicalFields = {
  ID: 'id',
  CODE: 'code',
  NAME: 'name',
  URL: 'url',
  CREATED_AT: 'created_at',
  UPDATED_AT: 'updated_at',
};

export const foreignKeys = {
  COURSE_ID: 'course_id',
  COURSE_REVIEW_ID: 'course_review_id',
  COURSE_SEMESTER_ID: 'course_semester_id',
  DEGREE_PROGRAM_ID: 'degree_program_id',
  DEGREE_PROGRAM_SPECIALIZATION_ID: 'degree_program_specialization_id',
  DEPARTMENT_ID: 'department_id',
  GRADE_ACHIEVED_ID: 'grade_achieved_id',
  HIGHEST_EDUCATION_LEVEL_ID: 'highest_education_level_id',
  LANGUAGE_ID: 'language_id',
  PREVIOUS_DEGREE_SUBJECT_ID: 'previous_degree_subject_id',
  REVIEWER_ID: 'reviewer_id',
  SPECIALIZATION_ID: 'specialization_id',
  USER_ROLE_ID: 'user_role_id',
};

export const actions = {
  CASCADE: 'CASCADE',
  SET_NULL: 'SET NULL',
};
