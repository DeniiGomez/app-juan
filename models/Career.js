import SQLite from 'react-native-sqlite-storage'
import { BaseModel, types } from 'react-native-sqlite-orm'
import DatabaseLayer from 'react-native-sqlite-orm/src/DatabaseLayer'


export default class CareerModel extends BaseModel {
  constructor(obj) {
    super(obj)
  }
 
  static get database() {
    //return async () => SQLite.deleteDatabase({ name: 'career.db', createFromLocation: '~persistences/career.db'}, (data) => {console.log(data)}, err => console.log(err))
    return async () => SQLite.openDatabase({ name: 'career.db', location: '~persistences/career.db', createFromLocation: 1}, (data) => {console.log(data)}, err => console.log(err))
  }

  static get tableName() {
    return 'carreras'
  }


  static get columnMapping() {
    return {
      id: { type: types.INTEGER },
      nombre: { type: types.TEXT },
      definicion: { type: types.TEXT },
    }
  }
}
