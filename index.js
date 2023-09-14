import express from "express";

const users = [
  { name: "Mario", surname: "Rossi", age: 25 },
  { name: "Luigi", surname: "Verdi", age: 30 },
  { name: "Silvia", surname: "Neri", age: 28 },
];

const app = express();

app.use(express.json()); //Senza questo req.body è undefined

app.listen(3000, () => {
  console.log("server is listening on port 3000");
});

app.get("/api/users", (req, res) => {
  res.json(users);
});

app.post("/api/users", (req, res) => {
  console.log(req);
  users.push(req.body);
  res.json(users);
});
