const http = require('http');
const countStudents = require('./3-read_file_async');

const port = 1245;
const databasePath = process.argv[2];

const app = http.createServer((req, res) => {
  const { method, url } = req;

  if (method === 'GET') {
    if (url === '/') {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Hello Holberton School!');
    } else if (url === '/students') {
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
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end(error.message);
        });
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not found\n');
    }
  } else {
    res.writeHead(405, { 'Content-Type': 'text/plain' });
    res.end('Method not allowed\n');
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = app;
