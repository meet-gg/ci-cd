import express from 'express';
const app = express();
const port = 8080;
app.get('/', (req, res) => {
  res.send('Hello World from ec2!');
});  
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
}); 