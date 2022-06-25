import { Knex } from 'knex';
import log from '../../src/utils/logger';
import { tableNames, canonicalFields, foreignKeys, actions } from '../data/tableData';
import {
  courseSemesterData,
  degreeProgramData,
  departmentData,
  gradeData,
  highestEducationLevelData,
  languageData,
  previousDegreeSubjectData,
  specializationData,
  userRoleData,
} from '../data/seedDataSimple';
import { courseAliasDataRaw, courseDataRaw } from '../data/seedDataComplex';

const {
  COURSE,
  COURSE_ALIAS,
  COURSE_DEGREE_PROGRAM_SPECIALIZATION,
  COURSE_REVIEW,
  COURSE_REVIEW_LANGUAGE,
  COURSE_SEMESTER,
  DEGREE_PROGRAM,
  DEGREE_PROGRAM_SPECIALIZATION,
  DEPARTMENT,
  GRADE,
  HIGHEST_EDUCATION_LEVEL,
  LANGUAGE,
  PREVIOUS_DEGREE_SUBJECT,
  SPECIALIZATION,
  USER,
  USER_ROLE,
} = tableNames;

const { ID, CODE, NAME, URL, CREATED_AT, UPDATED_AT } = canonicalFields;

const {
  COURSE_ID,
  COURSE_REVIEW_ID,
  COURSE_SEMESTER_ID,
  DEGREE_PROGRAM_ID,
  DEGREE_PROGRAM_SPECIALIZATION_ID,
  DEPARTMENT_ID,
  GRADE_ACHIEVED_ID,
  HIGHEST_EDUCATION_LEVEL_ID,
  LANGUAGE_ID,
  PREVIOUS_DEGREE_SUBJECT_ID,
  REVIEWER_ID,
  SPECIALIZATION_ID,
  USER_ROLE_ID,
} = foreignKeys;

const { CASCADE, SET_NULL } = actions;

const { NODE_ENV } = process.env;

export const seed = async (knex: Knex): Promise<void> => {
  // do not seed if server is in production environment or environment is not defined
  if (NODE_ENV === 'prod' || !NODE_ENV) {
    log.error('NODE_ENV is either missing or set to `prod`, no seeding was performed.');
    return;
  }

  /* ------------------------ drop existing tables ------------------------ */
  await knex.schema.raw(
    `DROP TABLE IF EXISTS
        "${COURSE}",
        "${COURSE_ALIAS}",
        "${COURSE_DEGREE_PROGRAM_SPECIALIZATION}",
        "${COURSE_REVIEW}",
        "${COURSE_REVIEW_LANGUAGE}",
        "${COURSE_SEMESTER}",
        "${DEGREE_PROGRAM}",
        "${DEGREE_PROGRAM_SPECIALIZATION}",
        "${DEPARTMENT}",
        "${GRADE}",
        "${HIGHEST_EDUCATION_LEVEL}",
        "${LANGUAGE}",
        "${PREVIOUS_DEGREE_SUBJECT}",
        "${SPECIALIZATION}",
        "${USER}",
        "${USER_ROLE}",
      CASCADE`
  );

  /* ------------------------ create new tables ------------------------ */
  await knex.schema
    .createTable(COURSE, (table) => {
      table.increments(ID).primary();
      table.string(NAME).notNullable();
      table.integer(DEPARTMENT_ID).notNullable();
      table.string('course_number').notNullable();
      table.string(URL).nullable();
      table.boolean('is_deprecated').notNullable();
      table.boolean('is_foundational').notNullable();
      table.timestamp(CREATED_AT).defaultTo(knex.fn.now());
      table.timestamp(UPDATED_AT).defaultTo(knex.fn.now());
    })
    .createTable(COURSE_ALIAS, (table) => {
      table.increments(ID).primary();
      table.integer(COURSE_ID).notNullable();
      table.string(NAME).notNullable();
      table.timestamp(CREATED_AT).defaultTo(knex.fn.now());
      table.timestamp(UPDATED_AT).defaultTo(knex.fn.now());
    })
    .createTable(COURSE_REVIEW, (table) => {
      table.increments(ID).primary();
      table.integer(REVIEWER_ID).nullable();
      table.boolean('is_legacy').notNullable().defaultTo(false);
      table.integer(COURSE_ID).notNullable();
      table.integer(COURSE_SEMESTER_ID).notNullable();
      table.integer('course_year').notNullable();
      table.bigint('review_date').notNullable();
      table.integer('workload').notNullable();
      table.integer('difficulty').notNullable();
      table.integer('overall').notNullable();
      table.integer('staff_support').nullable();
      table.boolean('is_recommended').nullable();
      table.boolean('is_good_first_course').nullable();
      table.boolean('is_pairable').nullable();
      table.boolean('has_group_projects').nullable();
      table.boolean('has_writing_assignments').nullable();
      table.boolean('has_exam_quizzes').nullable();
      table.boolean('has_mandatory_readings').nullable();
      table.boolean('has_mandatory_attendance').nullable();
      table.boolean('has_programming_assignments').nullable();
      table.boolean('has_provided_dev_env').nullable();
      table.integer('preparation').nullable();
      table.integer('num_oms_courses_taken').nullable();
      table.integer('has_relevant_work_experience').nullable();
      table.integer('experience_level').nullable();
      table.integer(GRADE_ACHIEVED_ID).nullable();
      table.integer('upvotes').notNullable().defaultTo(0);
      table.integer('downvotes').notNullable().defaultTo(0);
      table.text('body').nullable();
      table.timestamp(CREATED_AT).defaultTo(knex.fn.now());
      table.timestamp(UPDATED_AT).defaultTo(knex.fn.now());
    })
    .createTable(COURSE_REVIEW_LANGUAGE, (table) => {
      table.increments(ID).primary();
      table.integer(COURSE_ID).notNullable();
      table.integer(LANGUAGE_ID).notNullable();
      table.integer(COURSE_REVIEW_ID).notNullable();
      table.timestamp(CREATED_AT).defaultTo(knex.fn.now());
      table.timestamp(UPDATED_AT).defaultTo(knex.fn.now());
    })
    .createTable(COURSE_SEMESTER, (table) => {
      table.increments(ID).primary();
      table.string(CODE).notNullable().unique();
      table.string(NAME).notNullable().unique();
      table.integer('term').notNullable().unique();
      table.timestamp(CREATED_AT).defaultTo(knex.fn.now());
      table.timestamp(UPDATED_AT).defaultTo(knex.fn.now());
    })
    .createTable(DEGREE_PROGRAM, (table) => {
      table.increments(ID).primary();
      table.string(CODE).notNullable().unique();
      table.string(NAME).notNullable().unique();
      table.string(URL).notNullable();
      table.timestamp(CREATED_AT).defaultTo(knex.fn.now());
      table.timestamp(UPDATED_AT).defaultTo(knex.fn.now());
    })
    .createTable(DEGREE_PROGRAM_SPECIALIZATION, (table) => {
      table.increments(ID).primary();
      table.string(CODE).notNullable().unique();
      table.integer(DEGREE_PROGRAM_ID).notNullable();
      table.integer(SPECIALIZATION_ID).notNullable();
      table.timestamp(CREATED_AT).defaultTo(knex.fn.now());
      table.timestamp(UPDATED_AT).defaultTo(knex.fn.now());
    })
    .createTable(DEPARTMENT, (table) => {
      table.increments(ID).primary();
      table.string(CODE).notNullable().unique();
      table.string(NAME).notNullable().unique();
      table.timestamp(CREATED_AT).defaultTo(knex.fn.now());
      table.timestamp(UPDATED_AT).defaultTo(knex.fn.now());
    })
    .createTable(GRADE, (table) => {
      table.increments(ID).primary();
      table.string(CODE).notNullable().unique();
      table.string(NAME).notNullable().unique();
      table.timestamp(CREATED_AT).defaultTo(knex.fn.now());
      table.timestamp(UPDATED_AT).defaultTo(knex.fn.now());
    })
    .createTable(HIGHEST_EDUCATION_LEVEL, (table) => {
      table.increments(ID).primary();
      table.string(CODE).notNullable().unique();
      table.string(NAME).notNullable().unique();
      table.timestamp(CREATED_AT).defaultTo(knex.fn.now());
      table.timestamp(UPDATED_AT).defaultTo(knex.fn.now());
    })
    .createTable(LANGUAGE, (table) => {
      table.increments(ID).primary();
      table.string(CODE).notNullable().unique();
      table.string(NAME).notNullable().unique();
      table.timestamp(CREATED_AT).defaultTo(knex.fn.now());
      table.timestamp(UPDATED_AT).defaultTo(knex.fn.now());
    })
    .createTable(PREVIOUS_DEGREE_SUBJECT, (table) => {
      table.increments(ID).primary();
      table.string(CODE).notNullable().unique();
      table.string(NAME).notNullable().unique();
      table.timestamp(CREATED_AT).defaultTo(knex.fn.now());
      table.timestamp(UPDATED_AT).defaultTo(knex.fn.now());
    })
    .createTable(SPECIALIZATION, (table) => {
      table.increments(ID).primary();
      table.string(CODE).notNullable().unique();
      table.string(NAME).notNullable().unique();
      table.timestamp(CREATED_AT).defaultTo(knex.fn.now());
      table.timestamp(UPDATED_AT).defaultTo(knex.fn.now());
    })
    .createTable(USER, (table) => {
      table.increments(ID).primary();
      table.string('account_id').notNullable().unique();
      table.integer(USER_ROLE_ID).notNullable();
      table.boolean('is_student_email').notNullable().defaultTo(false);
      table.integer('work_experience_years').nullable();
      table.integer(HIGHEST_EDUCATION_LEVEL_ID).nullable();
      table.integer(PREVIOUS_DEGREE_SUBJECT_ID).nullable();
      table.integer(DEGREE_PROGRAM_SPECIALIZATION_ID).nullable();
      table.timestamp(CREATED_AT).defaultTo(knex.fn.now());
      table.timestamp(UPDATED_AT).defaultTo(knex.fn.now());
    })
    .createTable(USER_ROLE, (table) => {
      table.increments(ID).primary();
      table.string(CODE).notNullable().unique();
      table.string(NAME).notNullable().unique();
      table.timestamp(CREATED_AT).defaultTo(knex.fn.now());
      table.timestamp(UPDATED_AT).defaultTo(knex.fn.now());
    });

  /* ------------------------ add foreign keys ------------------------ */
  await knex.schema.table(USER, (table) => {
    table.foreign(USER_ROLE_ID).references(ID).inTable(USER_ROLE).onDelete(CASCADE).onUpdate(CASCADE);
    table
      .foreign(HIGHEST_EDUCATION_LEVEL_ID)
      .references(ID)
      .inTable(HIGHEST_EDUCATION_LEVEL)
      .onDelete(SET_NULL)
      .onUpdate(CASCADE);
    table
      .foreign(PREVIOUS_DEGREE_SUBJECT_ID)
      .references(ID)
      .inTable(PREVIOUS_DEGREE_SUBJECT)
      .onDelete(SET_NULL)
      .onUpdate(CASCADE);
    table
      .foreign(DEGREE_PROGRAM_SPECIALIZATION_ID)
      .references(ID)
      .inTable(DEGREE_PROGRAM_SPECIALIZATION)
      .onDelete(SET_NULL)
      .onUpdate(CASCADE);
  });
  await knex.schema.table(COURSE_ALIAS, (table) => {
    table.foreign(COURSE_ID).references(ID).inTable(COURSE).onDelete(CASCADE).onUpdate(CASCADE);
  });
  await knex.schema.table(COURSE, (table) => {
    table.foreign(DEPARTMENT_ID).references(ID).inTable(DEPARTMENT).onDelete(CASCADE).onUpdate(CASCADE);
  });
  await knex.schema.table(COURSE_REVIEW, (table) => {
    table.foreign(REVIEWER_ID).references(ID).inTable(USER).onDelete(CASCADE).onUpdate(CASCADE);
    table.foreign(COURSE_ID).references(ID).inTable(COURSE).onDelete(CASCADE).onUpdate(CASCADE);
    table.foreign(COURSE_SEMESTER_ID).references(ID).inTable(COURSE_SEMESTER).onDelete(CASCADE).onUpdate(CASCADE);
    table.foreign(GRADE_ACHIEVED_ID).references(ID).inTable(GRADE).onDelete(CASCADE).onUpdate(CASCADE);
  });
  await knex.schema.table(COURSE_REVIEW_LANGUAGE, (table) => {
    table.foreign(COURSE_ID).references(ID).inTable(COURSE).onDelete(CASCADE).onUpdate(CASCADE);
    table.foreign(LANGUAGE_ID).references(ID).inTable(LANGUAGE).onDelete(CASCADE).onUpdate(CASCADE);
  });
  await knex.schema.table(DEGREE_PROGRAM_SPECIALIZATION, (table) => {
    table.foreign(DEGREE_PROGRAM_ID).references(ID).inTable(DEGREE_PROGRAM).onDelete(CASCADE).onUpdate(CASCADE);
    table.foreign(SPECIALIZATION_ID).references(ID).inTable(SPECIALIZATION).onDelete(CASCADE).onUpdate(CASCADE);
  });

  /* ------------------------ add indexes ------------------------ */
  await knex.schema.table(USER_ROLE, (table) => {
    table.index([ID, CODE]);
    table.index(CODE);
  });
  await knex.schema.table(HIGHEST_EDUCATION_LEVEL, (table) => {
    table.index([ID, CODE]);
    table.index(CODE);
  });
  await knex.schema.table(PREVIOUS_DEGREE_SUBJECT, (table) => {
    table.index([ID, CODE]);
    table.index(CODE);
  });
  await knex.schema.table(COURSE_SEMESTER, (table) => {
    table.index([ID, CODE]);
    table.index(CODE);
  });
  await knex.schema.table(DEPARTMENT, (table) => {
    table.index([ID, CODE]);
    table.index(CODE);
  });
  await knex.schema.table(COURSE, (table) => {
    table.index([ID, DEPARTMENT_ID, 'course_number']);
    table.index([DEPARTMENT_ID, 'course_number']);
  });
  await knex.schema.table(COURSE_ALIAS, (table) => {
    table.index([ID, COURSE_ID, NAME]);
    table.index([COURSE_ID, NAME]);
  });
  await knex.schema.table(COURSE_REVIEW, (table) => {
    table.index([ID, REVIEWER_ID, COURSE_ID, COURSE_SEMESTER_ID, 'course_year']);
    table.index([REVIEWER_ID, COURSE_ID, COURSE_SEMESTER_ID, 'course_year']);
  });
  await knex.schema.table(GRADE, (table) => {
    table.index([ID, CODE]);
    table.index(CODE);
  });
  await knex.schema.table(LANGUAGE, (table) => {
    table.index([ID, CODE]);
    table.index(CODE);
  });
  await knex.schema.table(COURSE_REVIEW_LANGUAGE, (table) => {
    table.index([ID, COURSE_ID, LANGUAGE_ID]);
    table.index([COURSE_ID, LANGUAGE_ID]);
  });
  await knex.schema.table(DEGREE_PROGRAM, (table) => {
    table.index([ID, CODE]);
    table.index(CODE);
  });
  await knex.schema.table(SPECIALIZATION, (table) => {
    table.index([ID, CODE]);
    table.index(CODE);
  });
  await knex.schema.table(DEGREE_PROGRAM_SPECIALIZATION, (table) => {
    table.index([ID, CODE, DEGREE_PROGRAM_ID, SPECIALIZATION_ID]);
    table.index(CODE);
    table.index([CODE, DEGREE_PROGRAM_ID, SPECIALIZATION_ID]);
    table.index([DEGREE_PROGRAM_ID, SPECIALIZATION_ID]);
  });

  /* ------------------------ seed static data (simple/single-entity) ------------------------ */

  await Promise.all(
    courseSemesterData.map(async ({ code, name, term }) => knex(COURSE_SEMESTER).insert({ code, name, term }))
  );

  await Promise.all(
    degreeProgramData.map(async ({ code, name, url }) => knex(DEGREE_PROGRAM).insert({ code, name, url }))
  );

  await Promise.all(departmentData.map(async ({ code, name }) => knex(DEPARTMENT).insert({ code, name })));

  await Promise.all(gradeData.map(async ({ code, name }) => knex(GRADE).insert({ code, name })));

  await Promise.all(
    highestEducationLevelData.map(async ({ code, name }) => knex(HIGHEST_EDUCATION_LEVEL).insert({ code, name }))
  );

  await Promise.all(languageData.map(async ({ code, name }) => knex(LANGUAGE).insert({ code, name })));

  await Promise.all(
    previousDegreeSubjectData.map(async ({ code, name }) => knex(PREVIOUS_DEGREE_SUBJECT).insert({ code, name }))
  );

  await Promise.all(specializationData.map(async ({ code, name }) => knex(SPECIALIZATION).insert({ code, name })));

  await Promise.all(userRoleData.map(async ({ code, name }) => knex(USER_ROLE).insert({ code, name })));

  /* ------------------------ seed static data (complex/multi-entity) ------------------------ */

  // N.B. Order of insertion for this data is significant/inter-dependent

  const courseData = courseDataRaw.map(
    async ({ departmentCode, courseNumber, name, url, isDeprecated, isFoundational }) =>
      knex.schema.raw(
        `INSERT INTO ${COURSE}
        (${DEPARTMENT_ID}, course_number, ${NAME}, ${URL}, is_deprecated, is_foundational)
        VALUES
        (
          (SELECT ${ID} FROM ${DEPARTMENT} WHERE ${CODE} = '${departmentCode}' LIMIT 1)
          , '${courseNumber}'
          , '${name}'
          , '${url}'
          , ${isDeprecated}
          , ${isFoundational}
        )`
      )
  );
  await Promise.all(courseData);

  const courseAliasData = courseAliasDataRaw.map(({ departmentCode, courseNumber, aliases }) =>
    aliases.map(async (alias) =>
      knex.schema.raw(
        `INSERT INTO ${COURSE_ALIAS}
        (${COURSE_ID}, ${NAME})
        VALUES
        (
          (
            SELECT ${ID} FROM ${COURSE}
            WHERE course_number = '${courseNumber}'
              AND ${DEPARTMENT_ID}=(SELECT ${ID} FROM ${DEPARTMENT} WHERE ${CODE} = '${departmentCode}' LIMIT 1)
            LIMIT 1
          )
          , '${alias}'
        )`
      )
    )
  );
  await Promise.all(courseAliasData.map(async (aliasDataRow) => Promise.all(aliasDataRow)));

  // TODO: degree_program_specialization, course_review_data

  log.info('Seeded database successfully!');
};

export default seed;
