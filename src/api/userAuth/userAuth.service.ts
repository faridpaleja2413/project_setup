import { Users } from "../../model/Users";
import { getManager, getRepository, Repository } from "typeorm";
import { InjectRepository } from "typeorm-typedi-extensions";
import { Service } from "typedi";

@Service()
export class UserAuthService {
  //Injected Users Repository
  constructor(
    @InjectRepository(Users)
    private _model: Repository<Users>
  ) {}

  /**for find one user
   * parameter => Id : string
   * */
  async findUser(query) {
    console.log("query", query);
    return await this._model.findOne({
      where: query,
    });
  }

  // /**for find one user
  //  * parameter => Id : string
  //  * */
  // async findOne(id: string) {
  //   return await this._model.findOne(id);
  // }

  // /**for create new user
  //  * parameter => payload(Object)
  //  * */
  // async createUser(data: any) {
  //   let user = this._model.create({
  //     ...data,
  //   });
  //   return await this._model.save(user);
  // }

  // /**for update user
  //  * parameter => id: string & payload: Object
  //  * */
  // async updateUser(id: string, data: any) {
  //   return await this._model.update(id, data);
  // }

  // /**for get all user
  //  * */
  // async getAllUser() {
  //   return await this._model.find();
  // }

  // /**for soft delete user
  //  * parameter => id: string
  //  * */
  // async deleteUser(id: any) {
  //   return await getManager().transaction(async (em) => {
  //     await em.softDelete(Users, id);
  //   });
  // }

  // /**for restore user
  //  * parameter => id: string
  //  * */
  // async restoreUser(id: any) {
  //   return await getManager().transaction(async (em) => {
  //     await em.restore(Users, id);
  //   });
  // }
}
