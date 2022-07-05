// import sanitizeHtml from 'sanitize-html';
// import { ExpressMiddlewareInterface } from 'routing-controllers';

// const CONFIG = {
//   allowedTags: [
//     'p',
//     'div',
//     'h4',
//     'h5',
//     'h6',
//     'ul',
//     'ol',
//     'li',
//     'a',
//     'em',
//     'strong',
//     'br',
//     'span',
//     'b',
//     'i'
//   ],
//   allowedAttributesByTags: {
//     a: ['href', 'title', 'target'],
//     img: ['src', 'alt', 'title']
//   },
//   allowedSchemas: ['http', 'https']
// };

// export class XssFilter implements ExpressMiddlewareInterface {
//   async use(
//     req: any,
//     response: Response,
//     next: (err?: any) => Promise<any>
//   ): Promise<void> {
//     for (const i in req.body) {
//       if (req.body[i] && typeof req.body[i] === 'string') {
//         req.body[i] = this.sanitize_values(req.body[i]);
//       }
//     }
//     for (const i in req.headers) {
//       if (req.headers[i] && typeof req.headers[i] === 'string') {
//         req.headers[i] = this.sanitize_values(req.headers[i]);
//       }
//     }
//     return next();
//   }

//   sanitize_values = (input: string): string => {
//     if (input) {
//       const clean_code = sanitizeHtml(input, CONFIG);
//       return this.htmlspecialchars_decode(clean_code);
//     }
//     return this.htmlspecialchars_decode(input);
//   };

//   htmlspecialchars_decode = (str: string): string => {
//     const map: { [k: string]: any } = {
//       '&amp;': '&',
//       '&lt;': '<',
//       '&gt;': '>',
//       '&quot;': '"',
//       '&#39;': "'"
//     };
//     return str.replace(/(&amp;|&lt;|&gt;|&quot;|&#39;)/g, function(m) {
//       return map[m];
//     });
//   };
// }
