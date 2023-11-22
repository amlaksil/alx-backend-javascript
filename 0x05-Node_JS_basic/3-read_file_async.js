const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
        return;
      }

      // Split the data into individual lines
      const lines = data.split('\n');
      lines.shift();
      lines.pop();

      // Split the data into individual lines
      console.log('Number of students:', lines.length);

      const CSStudents = [];
      const SWEStudents = [];
      for (let i = 0; i < lines.length; i += 1) {
      // Split the line into individual fields
        const fields = lines[i].split(',');

        if (fields[fields.length - 1] === 'CS') {
          CSStudents.push(fields[0]);
        } else {
          SWEStudents.push(fields[0]);
        }
      }
      console.log(`Number of students in CS: ${CSStudents.length}. List: ${CSStudents.join(', ')}`);
      console.log(`Number of students in SWE: ${SWEStudents.length}. List: ${SWEStudents.join(', ')}`);
      resolve();
    });
  });
}
module.exports = countStudents;
