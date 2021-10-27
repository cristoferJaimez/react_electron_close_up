import express from "express";
const app = express();
import panelRoutes from "./routes/panel";
const cors = require("cors");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}



app.set("port", process.env.PORT || 4002);


//middlewares
app.use(cors({
    origin: ["http://localhost:3000", "http://localhost:4002"],
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

//server listering
const server = app.listen(app.get("port"), () => {
  console.log(">>>server EXPESS on port  is connected!", app.get("port"));
});

//routers
app.use(panelRoutes);