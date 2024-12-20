import express from "express";
import booksRouter from "./routes/book.js";
import bodyParser from "body-parser";
import authRouter from "./routes/auth.js";
import methodOverride from "method-override";
import cookieParser from "cookie-parser";
import sequelize from "./config/database.js";
import Book from "./models/Book.js";
import User from "./models/User.js";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(methodOverride("_method"));
app.use(express.static("public"));
app.set("view engine", "pug");

async function initializeDatabase() {
  try {
    await sequelize.authenticate();
    console.log("Database connected successfully.");

    await sequelize.sync({ alter: true });
    console.log("Models synchronized successfully.");

    // let usr = await User.findOne();
    // if (usr)
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

await initializeDatabase();

app.use("/", booksRouter);
app.use("/auth", authRouter);

const PORT = process.env.PORT || 3000;

const startServer = (port) => {
  app
    .listen(port)
    .on("listening", () => {
      console.log(`Server is running on http://localhost:${port}`);
    })
    .on("error", (err) => {
      if (err.code === "EADDRINUSE") {
        console.log(`Port ${port} is busy, trying ${port + 1}`);
        startServer(port + 1);
      } else {
        console.error("Server error:", err);
      }
    });
};

startServer(PORT);
