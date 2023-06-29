import express from "express";
import controller from "../ressources/smsAPI";
const router = express.Router();

router.post("/v1/sms", controller.post_send_sms);

export = router;
