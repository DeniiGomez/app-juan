import SQLite from 'react-native-sqlite-storage'
import { BaseModel, types } from 'react-native-sqlite-orm'


// SQLite.DEBUG(true);
// SQLite.enablePromise(true);
export default class CourseModel extends BaseModel {
  constructor(obj) {
    super(obj)
  }
 
  static get database() {
    return async () => SQLite.openDatabase({ name: 'career.db', location: '~persistences/career.db'},)
  }

  static get tableName() {
    return 'cursos'
  }

  static customQuery(id) {
    const sql = 'SELECT * FROM cursos WHERE idCarrera = ?'
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