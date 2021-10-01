import SQLite from 'react-native-sqlite-storage'
import { BaseModel, types } from 'react-native-sqlite-orm'

SQLite.DEBUG(true)
SQLite.enablePromise(true)
export default class CareerModel extends BaseModel {
  constructor(obj) {
    super(obj)
  }
 
   static get database() {
    //return async () => SQLite.deleteDatabase({ name: 'career.db', createFromLocation: '~career.db'}, (data) => {console.log(data)}, err => console.log(err))
    return async () => SQLite.openDatabase({ name: 'career.db', createFromLocation: '~www/career.db'}, (data) => console.log(data), err => alert(err.message))
    //return async () => SQLite.openDatabase({ name: 'career.db', createFromLocation: 1},)
  }

  static get tableName() {
    return 'carreras'
  }

  static customQuery() {
    const query = `
      SELECT c.id, c.nombre, i.ruta 
      FROM carreras c 
      LEFT JOIN imagenes i 
      ON i.idCarrera = c.id;
    `
    //const sql = "SELECT * FROM imagenes;"
    return this.repository.databaseLayer.executeSql(query).then(({ rows }) => rows)
  }

  static customQueryImage(id) {
    const query = `
      SELECT c.id, c.nombre, c.definicion, i.ruta
      FROM carreras c INNER JOIN imagenes i ON i.idCarrera = c.id WHERE i.idCarrera = ?;
    `
    const params = [id]
    //const sql = "SELECT * FROM carreras where id = ?;"
    return this.repository.databaseLayer.executeSql(query, params).then(({ rows }) => rows)
  }

  static get columnMapping() {
    return {
      id: { type: types.INTEGER },
      nombre: { type: types.TEXT },
      definicion: { type: types.TEXT },
    }
  }
}
