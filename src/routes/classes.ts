import { createClass, createStream, getBriefClasses, getClasses, getStreams } from "@/controllers/classes";
import express from "express";
const classRouter = express.Router();

// Class Routes
classRouter.post("/classes", createClass);
classRouter.get("/classes", getClasses);
classRouter.get("/classes/brief", getBriefClasses);

// Stream Routes
classRouter.post("/streams", createStream);
classRouter.get("/streams", getStreams);


export default classRouter;
