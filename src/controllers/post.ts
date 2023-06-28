import { Request, Response, NextFunction } from "express";

interface MessageSendRequest {
  input: {};
  context: {};
}

// adding a post
const postMessageRequest = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(req.body);
  // get the data from the request
  let body = req.body;
  // return response
  return res.status(200).json({
    input: body,
  });
};

export default { postMessageRequest };
