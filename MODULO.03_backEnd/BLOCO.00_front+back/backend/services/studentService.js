/* eslint-disable no-throw-literal */
const { findAll, addStudent } = require('../models/studentModel');

const listStudents = async () => {
  const students = await findAll();

  return students;
};

const createStudent = async (student) => {
  const { name, favoriteProject } = student;

  if (!name || !favoriteProject) throw { message: 'Name and Favorite Project are required.' };

  const studentId = await addStudent(student);

  return {
    id: studentId,
    name,
    favoriteProject,
  };
};

module.exports = {
  listStudents,
  createStudent,
};
