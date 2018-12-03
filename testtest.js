// const express = require("express");
// // is a router a item in the library
// const router = express.Router();
// // is a querie in a library
// const queries = require("./queries.js");
// // this router is connecting to a page/fille?
// router.get("/", (req, res, next) => {
//   next("Please try a valid route");
// });
// // the router goes into the routing file author and convert responce to jspn to make it useabl data
// router.get("/authors", (req, res, next) => {
//   queries.listAuthors().then(authors => res.json(authors));
// });
// // this router performing a search in the author library  and looking for the id called name then sort by size.
// router.get("/authors/:name", (req, res, next) => {
//   // a request to split names up
//   let nameArr = req.params.name.split(" ");
//   //  capNAme create an array instance
//   let capNameArr = [];
//   //   if 0 index is a cap push name slice name fro
//   nameArr.map(name =>
//     capNameArr.push(name.charAt(0).toUpperCase() + name.slice(1))
//   );
//   if (nameArr.length == 3) {
//     //  need some one to explain this to me i suck???? dont understand how this is working
//     let nameA = `${capNameArr[0]} ${capNameArr[1]}`;
//     let nameB = capNameArr[2];
//     queries.findAuthor(nameA, nameB).then(author => {
//       res.json({ author: author });
//     });
//   } else if (nameArr.length == 2) {
//     let nameA = capNameArr[0];
//     let nameB = capNameArr[1];
//     queries.findAuthor(nameA, nameB).then(author => {
//       res.json({ author: author });
//     });
//   } else {
//     let name = capNameArr[0];
//     queries.findAuthor(name).then(author => {
//       res.json({ author: author });
//     });
//   }
// });
// // route to connect to book  list see below

// router.get("/books", (req, res, next) => {
//   queries.listBooks().then(books => res.json(books));
// });
// // get title by file name
// router.get("/books/:title", (req, res, next) => {
//   queries.findBook(req.params.title).then(book => res.json({ result: book }));
// });
// // get title by author
// router.get("/bookauthors/:title", (req, res, next) => {
//   queries
//     .getBookAuthors(req.params.title)
//     .then(author => res.json({ result: author }));
// });
// // get author name by book then select book via author
// router.get("/authorbooks/:name", (req, res, next) => {
//   let nameArr = req.params.name.split(" ");
//   if (nameArr.length === 3) {
//     let nameA = `${nameArr[0]} ${nameArr[1]}`;
//     queries
//       .getAuthorBooks(nameA, nameArr[2])
//       .then(books => res.json({ result: books[0] }));
//   } else if (nameArr.length == 2) {
//     queries
//       .getAuthorBooks(nameArr[0], nameArr[1])
//       .then(books => res.json({ result: books[0] }));
//   }
// });
// router.get("/search/:terms", (req, res, next) => {
//   let authRes = [];
//   let bookRes = [];
//   let searchArr = req.params.terms.split(" ");
//   queries.listAuthors().then(authors => {
//     searchArr.map(term => {
//       let test = new RegExp(term, "i");
//       authors.map(author => {
//         if (test.test(author.first) || test.test(author.last)) {
//           if (!authRes.includes(author)) {
//             authRes.push(author);
//           }
//         }
//       });
//     });
//   });
//   queries
//     .findBook(req.params.terms)
//     .then(res => {
//       bookRes = res;
//       return bookRes;
//     })
//     .then(books =>
//       res.json({
//         authors: authRes,
//         books: books
//       })
//     );
// });

// module.exports = router;
// kubernets dns