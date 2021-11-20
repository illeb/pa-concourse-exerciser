const CHECK_TABLE_EXIST = `SELECT name
  FROM sqlite_master
  WHERE type='table' and name=?;`;

const CREATE_TABLE_CATEGORIES = `CREATE TABLE IF NOT EXISTS CATEGORIES (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT);`
const CREATE_TABLE_QUIZ = `CREATE TABLE IF NOT EXISTS QUIZ (id INTEGER PRIMARY KEY AUTOINCREMENT, question TEXT, fk_category INTEGER, FOREIGN KEY(fk_category) REFERENCES CATEGORIES(id));`
const CREATE_TABLE_ANSWERS = `CREATE TABLE IF NOT EXISTS ANSWERS (id INTEGER PRIMARY KEY AUTOINCREMENT, answer TEXT, isCorrect BOOLEAN, fk_quiz INTEGER, FOREIGN KEY(fk_quiz) REFERENCES QUIZ(id));`
const GET_CATEGORIES = `SELECT * FROM CATEGORIES`;
const GET_QUIZ_BY_CATEGORY = `SELECT id, question FROM QUIZ WHERE fk_category = ?`;
const GET_QUIZ_BY_CATEGORIES = `SELECT id, question FROM QUIZ WHERE fk_category in ?`;
const GET_ANSWERS_BY_QUIZ = `SELECT id, answer, isCorrect FROM ANSWERS WHERE fk_quiz = ?`;
const INSERT_CATEGORY = `INSERT INTO CATEGORIES (id, name) VALUES (?, ?)`;
const INSERT_QUIZ = `INSERT INTO QUIZ (id, question, fk_category) VALUES (?, ?, ?)`;
const INSERT_ANSWER = `INSERT INTO ANSWERS (id, answer, isCorrect, fk_quiz) VALUES (?, ?, ?, ?)`;

export { 
   CHECK_TABLE_EXIST,
   CREATE_TABLE_CATEGORIES,
   CREATE_TABLE_QUIZ,
   CREATE_TABLE_ANSWERS,
   GET_CATEGORIES,
   GET_QUIZ_BY_CATEGORY,
   GET_QUIZ_BY_CATEGORIES,
   GET_ANSWERS_BY_QUIZ,
   INSERT_CATEGORY,
   INSERT_QUIZ,
   INSERT_ANSWER 
}