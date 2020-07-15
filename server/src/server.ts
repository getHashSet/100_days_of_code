import express, { NextFunction } from "express";
import todoRoutes from "./routes/todo.routes";
import { json } from "body-parser";

const app = express();

app.use(json());

app.use("/todos", todoRoutes);

app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: NextFunction
  ) => {
    res.status(500).send({
      msg: err.message,
    });
  }
);

app.listen(8080);
console.log('------------');
console.log('Server on PORT 8080')
console.log('------------');