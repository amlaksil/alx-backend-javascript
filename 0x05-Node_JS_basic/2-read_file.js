const fs = require('fs');

function countStudents(path) {
  try {
    // Read the database file synchronously
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n');

    // Remove empty lines
    const validLines = lines.filter((line) => line.trim() !== '');

    // Calculate the number of students
    const numberOfStudents = validLines.length - 1; // Subtract 1 for the header line

    // Log the total number of students
    console.log(`Number of students: ${numberOfStudents}`);

    // Count the number of students in each field
    const fieldCounts = {};
    for (let i = 1; i < validLines.length; i += 1) {
      const fields = validLines[i].split(',');
      const field = fields[3].trim();

      if (Object.prototype.hasOwnProperty.call(fieldCounts, field)) {
        fieldCounts[field] += 1;
      } else {
        fieldCounts[field] = 1;
      }
    }

    // Log the number of students in each field and the list of first names
    Object.keys(fieldCounts).forEach((field) => {
      const count = fieldCounts[field];
      const students = validLines
        .slice(1) // Exclude the header line
        .filter((line) => line.includes(field))
        .map((line) => line.split(',')[0].trim());

      console.log(`Number of students in ${field}: ${count}. List: ${students.join(', ')}`);
    });
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
