const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.trim().split('\n');
      const students = lines.map((line) => line.split(','));

      const studentsByField = {};
      students.forEach(([firstname, lastname, age, field]) => {
        if (!firstname || !lastname || !age || !field) {
          return; // Skip empty or invalid lines
        }

        if (!studentsByField[field]) {
          studentsByField[field] = [];
        }

        studentsByField[field].push(firstname);
      });
      const numberOfStudents = students.length - 1; // Subtract 1 to exclude the header line

      delete studentsByField.field;
      console.log(`Number of students: ${numberOfStudents}`);
      Object.entries(studentsByField).forEach(([field, names]) => {
        console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
      });

      resolve({ numberOfStudents, studentsByField });
    });
  });
}

module.exports = countStudents;
