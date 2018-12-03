const express = require("express");
//  require is not apart of javascript... but it is apart of node.js and other forms of web sockets. Nooe/sockets allow you computer to connect to open a tcp/ip
// Middleware server helps /servers to connect databases to clients.
// Middle where has the capablities to provide services, diagnostic ,security ,transactions, databases, clustering.
// once express has been required by an app it can provide services.
const app = express();
// what ports are you making information viewable to?
const port = process.env.PORT || 3001;
//  parsers through data and converts to json
const bodyparser = require("body-parser");
//  cors's is a cross orgin resource sharing
const cors = require("cors");
//
const queriers = require("./queries");
// knex is used for the migration of data moving from one databased be use by server to push data to said client.
const knex = require("knex");
const db = require("./database-connection");
app.use(bodyparser.json());

app.get("/2", (req, res) => {
  console.log("hey there");
  res.send("hey");
});
// app.get("/:id", (request, response) => {
//   console.log(request.params.id).then(students => res.send(response));
// });
//  get is read within the c r ud
app.get("/", (req, res) => {
  queries
    .selectStudentById(req.params.id)
    .then(students => res.send("you posted." + req.body));
});
// post is the create part in the crud app
app.post("/", (req, res) => {
  queries.createStudent(req.body).then(res.status(201));
});

app.delete("/:id", (req, res) => {
  queries.deleteStudent(req.params.id).then(res.sendStatus(204));
});
app.put("/:id", (req, res) => {
  queries
    .updateStudent(request.params.id, req.body)
    .then(updatedStudent => res.send(updatedStudent));
});
app.listen(port, () => {
  console.log(`listening on ${port}`);
});

// module.exports={
//   getALL(){
//     return db("students")
//   },
//   getById(id){return db("students".where("id",id))},
//   getById(id){return db("students").where({id:id}).first()}
