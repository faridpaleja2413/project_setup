// import path from 'path';

// export interface IMapper {
//   langCode: string;
//   messageCode: string;
// }

// export async function mapMessageLang(mapper: IMapper): Promise<string> {
//   const basePath = path.resolve(__dirname, '../../../', 'locales', 'i18n'),
//     url = path.resolve(`${basePath}/${mapper.langCode}.json`);
//   const data = await import(`${url}`);
//   return await data.default[mapper.messageCode];
// }
