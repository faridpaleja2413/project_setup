// import { IVerifyToken } from "@common/interfaces/verify-token-response.interface";
import Jwt from "jsonwebtoken";
import { pick } from "lodash";
import { JWT_KEY, JWT_KEY_COMMUNITY_V1, JWT_KEY_DASHBOARD_V1 } from "../config";

const key = JWT_KEY;

// export interface DecodedToken {
//   user: {
//     _id: number;
//     email: string;
//     firstName: string;
//     lastName: string;
//     user_id: string;
//     profilePictures: any;
//     designation: string;
//     organisation_name: string;
//     isBlocked: boolean;
//     user_id_sql: string;
//   };
//   event: {
//     event_id: string;
//     api_key: string;
//     organiser_id: string;
//     device_type: string;
//     timezone_id: number;
//     name: string;
//     start_time_milli: string;
//     end_time_milli: string;
//     is_deactive: boolean;
//   };
//   community: {
//     _id: string;
//     userId: string;
//     groups: [];
//     exhibitor_id: number;
//     broadcastStudioAgendaIds: [];
//     guestAgendaIds: [];
//     speaker_id: number;
//     host_id: number;
//     isActive: number;
//     isBlocked: number;
//   };
//   auth: boolean;
//   // language_meta_id: number;
//   // timestamp: string;
// }

export interface InvalidToken {
  auth: boolean;
}

export function createToken(tokenData: string) {
  return new Promise((resolve, reject) => {
    const _data = tokenData;
    return Jwt.sign(
      _data,
      key,
      { algorithm: "HS256" },
      // {
      //   // expiresIn: "10h", // it will be expired after 10 hours
      //   //expiresIn: "20d" // it will be expired after 20 days
      //   //expiresIn: 120 // it will be expired after 120ms
      //   expiresIn: "120s" // it will be expired after 120s
      // },
      function (err, token) {
        if (err) reject(err);
        return resolve(token);
      }
    );
  });
}
export function verifyToken(token: string) {
  return new Promise((resolve) => {
    Jwt.verify(token, key, function (err) {
      if (err) return resolve(false);
      return resolve(true);
    });
  });
}

// export function decodeToken(
//   token: string
// ): Promise<DecodedToken | InvalidToken> {
//   return new Promise((resolve) => {
//     Jwt.verify(token, key, function (err, decodedData) {
//       if (err) return resolve({ auth: false });
//       return resolve({ ...decodedData, auth: true });
//     });
//   });
// }

// export function decodeTokenCommunityV1(
//   token: string
// ): Promise<DecodedToken | InvalidToken> {
//   return new Promise((resolve) => {
//     Jwt.verify(token, JWT_KEY_COMMUNITY_V1, function (err, decodedData) {
//       if (err) return resolve({ auth: false });
//       return resolve({ ...decodedData, auth: true });
//     });
//   });
// }

// export function decodeTokenDashboardV1(
//   token: string
// ): Promise<DecodedToken | InvalidToken> {
//   return new Promise((resolve) => {
//     Jwt.verify(token, JWT_KEY_DASHBOARD_V1, function (err, decodedData) {
//       if (err) return resolve({ auth: false });
//       return resolve({ ...decodedData, auth: true });
//     });
//   });
// }
