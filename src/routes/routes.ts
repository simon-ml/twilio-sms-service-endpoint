import express from "express";
import controller from "../controllers/post";
const router = express.Router();
const version = "v1";

router.post("/sms", controller.postMessageRequest);

export = router;
