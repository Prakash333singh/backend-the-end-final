//const http = require("http");

const express = require("express");
const morgan = require("morgan");
const server = express();
const productRouter = require("./routes/product");
const userRouter = require("./routes/user");

//bodyParser
server.use(express.json());
//server.use(express.urlencoded)

server.use(express.static("public"));
server.use("/products", productRouter.router);
server.use("/users", userRouter.router);

//MVC model-view-controller

server.listen(8000, () => {
  console.log("server started");
});

// //logger middleware
// server.use((req, res, next) => {
//   console.log(
//     req.method,
//     req.ip,
//     req.hostname,
//     new Date(),
//     req.get("user-Agent")
//   );
//   next();
// });

// const auth = (req, res, next) => {
//   console.log(req.query);

//   if (req.query.password == "123") {
//     next();
//   } else {
//     res.sendStatus(401);
//   }
// };

// server.use(auth);

//api -endpoint -route-

// server.get("/", (req, res) => {
//   res.json({ type: "GET" });
// });

// server.post("/", auth, (req, res) => {
//   res.json({ type: "POST" });
// });

// server.put("/", (req, res) => {
//   res.json({ type: "PUT" });
// });

// server.delete("/", (req, res) => {
//   res.json({ type: "DELETE" });
// });

// server.patch("/", (req, res) => {
//   res.json({ type: "PATCH" });
// });

// server.get("/", (req, res) => {
//   res.json(products);
//   //res.send('<h1>hello</h1>')
//   //res.sendfile('absolute path');
// });

//node js
// const server = http.createServer((req, res) => {
//   console.log(req.url, req.method);

//   if (req.url.startsWith("/product")) {
//     const id = req.url.split("/")[2];
//     const product = products.find((p) => p.id === +id);
//     console.log(product);
//     res.setHeader("Content-Type", "text/html");
//     let modifiedIndex = index
//       .replace("**title**", product.title)
//       .replace("**url**", product.thumbnail)
//       .replace("**price**", product.price)
//       .replace("**rating**", product.rating);
//     res.end(modifiedIndex);
//     return;
//   }
//   //   '/product':
//   //       res.setHeader('Content-Type', 'text/html');
//   //       let modifiedIndex = index.replace('**title**', product.title)
//   //       .replace('**url**', product.thumbnail)
//   //       .replace('**price**' , product.price)
//   //       .replace('**rating**', product.rating)
//   //       res.end(modifiedIndex);
//   //       break;

//   switch (req.url) {
//     case "/":
//       res.setHeader("Content-Type", "text/html");
//       res.end(index);
//       break;
//     case "/api":
//       res.setHeader("Content-Type", "application/json");
//       res.end(JSON.stringify(data));
//       break;

//     default:
//       res.writeHead(404);
//       res.end();
//   }

//   console.log("server started  ");
//   //   res.setHeader('Dummy', 'DummyValue');

//   //
// });

// server.listen(8080);
