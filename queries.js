// grab data from knex postgress local host this is where the table lives 
const database = require("./connection");
// The module export is used to grab specified data 
module.exports = {
  listAll() {
    return database("students");
  },
  selectStudentByID(id) {
    return database("students").where("id", id);
  },
  createStudent(newStudent) {
    return database("students").insert(newStudent);
  },
  deleteStudent(id) {
    return database("students")
      .where("id", id)
      .delete();
  },
  updateStudent(id, updatedStudentInfo) {
    return database("student"), where("id", id);
  }
};
3