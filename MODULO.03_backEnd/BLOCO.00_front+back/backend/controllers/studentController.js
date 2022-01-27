const { listStudents, createStudent } = require('../services/studentService');

const list = async (req, res, next) => {
  try {
    const students = await listStudents();

    return res.status(200).json(students);
  } catch (err) {
    console.log('erro list students: ', err.message);
    return next(err);
  }
};

const registerStudent = async (req, res, next) => {
  try {
    const student = req.body;

    const newStudent = await createStudent(student);

    return res.status(201).json(newStudent);
  } catch (err) {
    console.log('erro add students: ', err.message);
    return next(err);
  }
};

module.exports = {
  list,
  registerStudent,
};
