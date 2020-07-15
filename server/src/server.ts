// Loading evnironmental variables here
if (process.env.NODE_ENV !== "production") {
  // console.log('loading dev environments')
  require("dotenv").config(); // @types already provided by dotenv package
}

// ======================= //
// ===== Dependencies ==== //
// ======================= //

import express, { NextFunction } from "express";
import enforce from "express-sslify"; // Note: force https
import path from "path";
import { json } from "body-parser";
import todoRoutes from "./routes/todo.routes"; // Note: this was built to test the server and is not the best spot for it

// ======================= //
// ===== Force HTTPS ===== //
// ======================= //

const app = express();
app.use(enforce.HTTPS({ trustProtoHeader: true })); // Note: trustProtoHeader is for Heroku and is not needed for all hosts.

// ======================= //
// ======== Ports ======== //
// ======================= //


const PORT = process.env.PORT || 8080;
app.use(json());


// ====================================== //
// ======== Poorly Placed Routes ======== //
// ====================================== //


app.use("/todos", todoRoutes);


// ======================= //
// ======== Error ======== //
// ======================= //

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

// ======================= //
// ====== React App ====== //
// ======================= //


app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});


// ========================== //
// ==== Starting Server ===== //
// ========================== //

app.listen(PORT, () => {
  console.log("---------------------------------------");
  console.log(`---   App listening on PORT: ${PORT}   ---`);
  console.log("---------------------------------------");
});
