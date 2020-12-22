import express from "express";
import path from "path";
import bodyParser from "body-parser";
import compress from "compression";
import cors from "cors";
import helmet from "helmet";

const CURRENT_WORKING_DIR = process.cwd();
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use(compress());
app.use(helmet());
app.use(cors());

app.use("/dist", express.static(path.join(CURRENT_WORKING_DIR, "dist")));

// TEMP, move to router declaration
const router = express.Router();
router.route("/").get((req, res) => {
  res.send("GET RESPONSE");
});

app.use("/api", router);

export default app;
