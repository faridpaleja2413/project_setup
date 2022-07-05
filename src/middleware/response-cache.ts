// import { YEAR_IN_SECONDS } from "@constants/common";
import { ContextualRequest } from "../utils/common-types";
// import redisHelper from "@utils/redis-helper";
// import safePromise from "@utils/safe-promise";
import { NextFunction, Request, Response } from "express";
// // import 'queue/cache-replacement.queue';
// // import 'queue/consumers/cache-replacement.consumer';
// // import { updateCache } from '../../queue/producers/cache-replacement.producer';
import { logger as parentLogger } from "../utils/get-logger";
const logger = parentLogger.child({
  filepath: "src/middleware/response-cache"
});

// const getRequestDetailsForCache = (request: Request) => ({
//   path: request.path,
//   query: request.query,
//   params: request.params,
//   body: request.body as Buffer
// });

// const getSmartCacheKeyName = (request: ContextualRequest): string => {
//   const requestDetails = getRequestDetailsForCache(request);
//   return `request:${Buffer.from(
//     `${JSON.stringify({
//       ...requestDetails,
//       userId: request.context?.user?._id,
//       eventId: request.context?.event?.event_id,
//       orgId: request.context?.event?.organiser_id
//     })}`
//   ).toString("base64")}`;
// };

// interface IGetCacheKeyName {
//   (_request: ContextualRequest, _response?: Response): string;
// }

export async function onResponseEnd(
  request: ContextualRequest,
  response: Response
): Promise<void> {
  if (response.locals.isCache) {
    response.locals.isCache = false;
    logger.info("Response cached failed as its already cached!");
    return;
  }
  if (!response.locals?.body?.success) {
    logger.info("Response cached failed as error responses are not cached!");
    return;
  }
  // if (!redisHelper.isConnected()) {
  //   logger.info("Response cached failed as redis is not connected!");
  //   return;
  // }
  logger.info("Response cached successfully!");
  const responseData = {
    statusCode: response.statusCode,
    headers: {
      "Content-Type": response.getHeader("Content-Type")
    },
    body: response.locals.body
  };
  // replaceCache({
  //   responseData,
  //   cacheKeyName: response.locals.cacheKeyName
  // });
  // redisHelper.save({
  //   keyName: response.locals.cacheKeyName,
  //   value: responseData,
  //   expiryTime: YEAR_IN_SECONDS
  // });
}

// export default (getCacheKeyName: IGetCacheKeyName = getSmartCacheKeyName) =>
//   async function responseCache(
//     request: ContextualRequest,
//     response: Response,
//     next: NextFunction
//   ): Promise<void | Response<never>> {
//     const cacheKeyName = getCacheKeyName(request);
//     response.locals.cacheKeyName = cacheKeyName;
//     if (!redisHelper.isConnected()) {
//       response.on("finish", () => onResponseEnd(request, response));
//       return next();
//     }
//     const [cacheError, cache] = (await safePromise(
//       redisHelper.fetch(cacheKeyName)
//     )) as [Error, Record<string, string | number>];
//     if (cacheError) {
//       response.on("finish", () => onResponseEnd(request, response));
//       return next();
//     }
//     if (!cache) {
//       response.on("finish", () => onResponseEnd(request, response));
//       return next();
//     }
//     const { headers, body, statusCode = 200 } = cache;
//     if (headers) {
//       response.set(headers);
//     }
//     // updateCache({
//     //   ...request.body,
//     //   endpoint: request.path
//     // });
//     return response
//       .status(statusCode as number)
//       .json(body)
//       .end(async function cachedResponseEnd() {
//         response.locals.isCache = true;
//         await onResponseEnd(request, response);
//         next();
//       });
//   };
