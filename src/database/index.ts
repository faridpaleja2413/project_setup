import { createConnection, Connection } from 'typeorm';

import mySqlTypeormConfig from '../mySqlTypeorm';
export default class Database {
  static #instance: Database;

  #connection?: Connection;

  constructor() {
    if (Database.#instance instanceof Database) {
      return Database.#instance;
    }
    Database.#instance = this;
  }

  get connection(): Connection | undefined {
    return this.#connection;
  }

  async connect(): Promise<Connection> {
    [this.#connection] = await Promise.all([createConnection(mySqlTypeormConfig)]);
    return this.#connection;
  }

  async disConnect(): Promise<void> {
    if (this.#connection) {
      await this.#connection.close();
    }
  }
}
