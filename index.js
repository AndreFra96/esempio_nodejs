import http from "http";

const users = [
  { name: "Mario", surname: "Rossi", age: 25 },
  { name: "Luigi", surname: "Verdi", age: 30 },
  { name: "Silvia", surname: "Neri", age: 28 },
];

const server = http.createServer((req, res) => {
  if (req.url === "/api/users") {
    console.log(req.method);
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify(users));
    res.end();
    return;
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.write("Pagina non trovata");
    res.end();
    return;
  }
});

server.listen(3000, () => {
  console.log("server is listening on port 3000");
});
