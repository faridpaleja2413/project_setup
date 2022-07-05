import { API_MS_KEY_NODE_DASH } from "../config";
import { Response } from "express";
import { verifyToken } from "../utils/token";

export default async function checkAuth(
  req: any,
  response: Response,
  next: () => Promise<void>
): Promise<Response | void> {
  const api_token = req.headers.authorization || "";

  const checkToken = await verifyToken(api_token);

  if (checkToken) {
    return next();
  } else {
    return response.status(401).send({
      status: false,
      error: {
        code: "AUTH-001",
        message: "Please provide authorization token",
      },
    });
  }
}
