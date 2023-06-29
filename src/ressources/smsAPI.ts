import { Request, Response, NextFunction } from "express";
import sms_controller from "../controllers/sms_controller";

interface MessageSendRequest {
  input: {};
  context: {};
}

// adding a post
const post_send_sms = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // check input data
  if (!req.body) {
    return res.status(400).json({
      error: "Empty request body.",
    });
  }

  const input_data = req.body.input;
  if (!input_data) {
    return res.status(400).json({
      error: "Missing reqired field 'input' in request body.",
    });
  }

  if (
    !input_data.account_sid ||
    !input_data.auth_token ||
    !input_data.auth_user ||
    !input_data.sms_to
  ) {
    return res.status(400).json({
      error: "You are missing one of the variables you need to send a sms.",
    });
  }
  if (!input_data.sms_from && !input_data.messaging_service_sid) {
    return res.status(400).json({
      error:
        "You need to provide either a 'sms_from' number or a " +
        "'messaging_service_sid' to send a sms.",
    });
  }

  // handle request
  const send_result = await sms_controller.send_sms(req.body.input);

  const result_branch = send_result ? "success" : "fail";

  return res.status(200).json({
    choice: result_branch,
  });
};

export default { post_send_sms };
