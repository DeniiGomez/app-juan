import SQLite from 'react-native-sqlite-storage'
import { BaseModel, types } from 'react-native-sqlite-orm'


export default class ActivityModel extends BaseModel {
  constructor(obj) {
    super(obj)
  }
 
  static get database() {
    return async () => SQLite.openDatabase({ name: 'career.db', location: '~persistences/career.db'},)
  }

  static get tableName() {
    return 'actividades'
  }

  static customQuery(id) {
    const sql = 'SELECT * FROM actividades WHERE idCarrera = ?'
    const params = [id]
    return this.repository.databaseLayer.executeSql(sql, params).then(({ rows }) => rows)
  }

  static get columnMapping() {
    return {
      id: { type: types.INTEGER },
      nombre: { type: types.TEXT },
      idCarrera: { type: types.INTEGER },
    }
  }
}