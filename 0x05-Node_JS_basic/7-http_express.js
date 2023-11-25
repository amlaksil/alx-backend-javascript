const express = require('express');
const countStudents = require('./3-read_file_async');

const port = 1245;
const databasePath = process.argv[2] || 'database.csv';
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(databasePath)
    .then((result) => {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.write('This is the list of our students\n');
      res.write(`Number of students: ${result.numberOfStudents}\n`);
      let count = 0;
      Object.entries(result.studentsByField).forEach(([field, names]) => {
        count += 1;
        res.write(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
        if (count !== 2) {
          res.write('\n');
        }
      });
      res.end();
    })
    .catch((error) => {
      res.status(500).send(error.message);
    });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = app;
