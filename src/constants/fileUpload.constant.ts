// export const FILE_UPLOAD_CONSTANT: { [k: string]: any } = {
//   UPLOAD_TYPES: [
//     'PROFILE',
//     'COVER_IMAGE',
//     'USER_PROFILE_FIELD',
//     'FEED_VIDEO',
//     'FEED_VIDEO_THUMB',
//     'FEED_IMAGE',
//     'SURVEY_ANSWER_IMAGE',
//     'EXHIBITOR_PROFILE_IMAGE',
//     'EXHIBITOR_PRODUCT',
//     'EXHIBITOR_SPOTLIGHT_BANNER',
//     'EXHIBITOR_LIST_BANNER_IMAGE_LARGE',
//     'EXHIBITOR_LIST_BANNER_IMAGE_MEDIUM',
//     'EXHIBITOR_LIST_BANNER_IMAGE_SMALL',
//     'BROCHURE',
//     'CONTEST_IMAGE',
//     'CONTEST_VIDEO',
//     'CONTEST_VIDEO_THUMB',
//     'HBS_LOGO',
//     'HBS_BACKGROUND_IMAGE',
//     'HBS_OVERLAY_IMAGE',
//     'HBS_BANNER',
//     'DEFAULT_OVERLAY',
//     'DEFAULT_BACKGROUND',
//     'DEFAULT_LOGO',
//     'HBS_VIDEO'
//   ],
//   PROFILE: {
//     uploadProps: [
//       {
//         path: 'profile',
//         height: 200,
//         width: 200
//       }
//     ],
//     allowedFileType: ['png', 'jpg', 'jpeg'],
//     expiry: 300 //in sec
//   },
//   COVER_IMAGE: {
//     uploadProps: [
//       {
//         path: 'cover_image/:eventId',
//         height: 400,
//         width: 1200
//       }
//     ],
//     allowedFileType: ['png', 'jpg', 'jpeg'],
//     expiry: 300 //in sec
//   },
//   USER_PROFILE_FIELD: {
//     uploadProps: [
//       {
//         path: 'user_profile/:organiserId'
//       }
//     ],
//     allowedFileType: [
//       'vnd.openxmlformats-officedocument.wordprocessingml.document',
//       'msword',
//       'vnd.ms-powerpoint',
//       'vnd.openxmlformats-officedocument.presentationml.presentation',
//       'png',
//       'jpg',
//       'jpeg',
//       'vnd.ms-excel',
//       'vnd.openxmlformats-officedocument.spreadsheetml.sheet',
//       'pdf'
//     ],
//     expiry: 600 //in sec
//   },
//   FEED_VIDEO: {
//     uploadProps: [
//       {
//         path: 'feed/:eventId/videos'
//       }
//     ],
//     expiry: 1200 //in sec
//   },
//   FEED_VIDEO_THUMB: {
//     uploadProps: [
//       {
//         path: 'feed/:eventId/videos/thumb',
//         width: 800
//       }
//     ],
//     expiry: 300 //in sec
//   },
//   FEED_IMAGE: {
//     uploadProps: [
//       {
//         path: 'feed/:eventId',
//         width: 800
//       }
//     ],
//     expiry: 300 //in sec
//   },
//   SURVEY_ANSWER_IMAGE: {
//     uploadProps: [
//       {
//         path: 'survey/:organiserId'
//       }
//     ],
//     expiry: 300 //in sec
//   },
//   EXHIBITOR_PROFILE_IMAGE: {
//     uploadProps: [
//       {
//         path: 'exhibitor/:organiserId/:width',
//         width: 300
//       }
//       // {
//       //   path: 'exhibitor/:organiserId/:width',
//       //   width: 150
//       // },
//       // {
//       //   path: 'exhibitor/:organiserId/:width',
//       //   width: 60
//       // }
//     ],
//     allowedFileType: ['png', 'jpg', 'jpeg'],
//     expiry: 300 //in sec
//   },
//   EXHIBITOR_PRODUCT: {
//     uploadProps: [
//       {
//         path: 'exhibitor/products/:organiserId/400',
//         width: 1024
//       }
//     ],
//     allowedFileType: ['png', 'jpg', 'jpeg'],
//     expiry: 300 //in sec
//   },
//   EXHIBITOR_SPOTLIGHT_BANNER: {
//     uploadProps: [
//       {
//         path: 'banner/exhibitor_spotlight_banner/:organiserId/1036',
//         width: 1920,
//         height: 400
//       }
//     ],
//     allowedFileType: ['png', 'jpg', 'jpeg'],
//     expiry: 300 //in sec
//   },
//   EXHIBITOR_LIST_BANNER_IMAGE_LARGE: {
//     uploadProps: [
//       {
//         path: 'banner/exhibitor_list_banner_image/:organiserId/1036',
//         width: 1200,
//         height: 250
//       }
//     ],
//     allowedFileType: ['png', 'jpg', 'jpeg'],
//     expiry: 300 //in sec
//   },
//   EXHIBITOR_LIST_BANNER_IMAGE_MEDIUM: {
//     uploadProps: [
//       {
//         path: 'banner/exhibitor_list_banner_image/:organiserId/1036',
//         width: 590,
//         height: 250
//       }
//     ],
//     allowedFileType: ['png', 'jpg', 'jpeg'],
//     expiry: 300 //in sec
//   },
//   EXHIBITOR_LIST_BANNER_IMAGE_SMALL: {
//     uploadProps: [
//       {
//         path: 'banner/exhibitor_list_banner_image/:organiserId/1036',
//         width: 385,
//         height: 250
//       }
//     ],
//     allowedFileType: ['png', 'jpg', 'jpeg'],
//     expiry: 300 //in sec
//   },
//   BROCHURE: {
//     uploadProps: [
//       {
//         path: 'brochure/:organiserId'
//       }
//     ],
//     allowedFileType: [
//       'vnd.openxmlformats-officedocument.wordprocessingml.document',
//       'msword',
//       'vnd.ms-powerpoint',
//       'vnd.openxmlformats-officedocument.presentationml.presentation',
//       'png',
//       'jpg',
//       'jpeg',
//       'vnd.ms-excel',
//       'vnd.openxmlformats-officedocument.spreadsheetml.sheet',
//       'pdf'
//     ],
//     expiry: 600 //in sec
//   },
//   CONTEST_IMAGE: {
//     uploadProps: [
//       {
//         path: 'contest/:eventId',
//         // height: 1200,
//         width: 800
//       }
//     ],
//     allowedFileType: ['png', 'jpg', 'jpeg'],
//     expiry: 300 //in sec
//   },
//   CONTEST_VIDEO: {
//     uploadProps: [
//       {
//         path: 'contest/:eventId/videos'
//       }
//     ],
//     expiry: 1200 //in sec
//   },
//   CONTEST_VIDEO_THUMB: {
//     uploadProps: [
//       {
//         path: 'contest/:eventId/videos/thumb',
//         width: 800
//       }
//     ],
//     allowedFileType: ['png', 'jpg', 'jpeg'],
//     expiry: 300 //in sec
//   },
//   HBS_LOGO: {
//     uploadProps: [
//       {
//         path: 'hbs/:eventId/logo'
//       }
//     ],
//     allowedFileType: ['png', 'jpg', 'jpeg'],
//     expiry: 300
//   },
//   HBS_OVERLAY_IMAGE: {
//     uploadProps: [
//       {
//         path: 'hbs/:eventId/overlay',
//         height: 624,
//         width: 1112
//       }
//     ],
//     allowedFileType: ['png', 'jpg', 'jpeg'],
//     expiry: 300
//   },
//   HBS_BACKGROUND_IMAGE: {
//     uploadProps: [
//       {
//         path: 'hbs/:eventId/background',
//         height: 624,
//         width: 1112
//       }
//     ],
//     allowedFileType: ['png', 'jpg', 'jpeg'],
//     expiry: 600
//   },
//   HBS_BANNER: {
//     uploadProps: [
//       {
//         path: 'hbs/:eventId/banner'
//       }
//     ],
//     allowedFileType: ['png', 'jpg', 'jpeg'],
//     expiry: 300
//   },
//   DEFAULT_OVERLAY: {
//     uploadProps: [
//       {
//         path: 'hbs/default/overlay'
//       }
//     ],
//     allowedFileType: ['png', 'jpg', 'jpeg'],
//     expiry: 300
//   },
//   DEFAULT_BACKGROUND: {
//     uploadProps: [
//       {
//         path: 'hbs/default/background'
//       }
//     ],
//     allowedFileType: ['png', 'jpg', 'jpeg'],
//     expiry: 300
//   },
//   DEFAULT_LOGO: {
//     uploadProps: [
//       {
//         path: 'hbs/default/logo'
//       }
//     ],
//     allowedFileType: ['png', 'jpg', 'jpeg'],
//     expiry: 300
//   },
//   HBS_VIDEO: {
//     uploadProps: [
//       {
//         path: 'hbs/:eventId/:agendaId/videos'
//       }
//     ],
//     expiry: 1200
//   }
// };
