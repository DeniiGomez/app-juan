import SQLite from 'react-native-sqlite-storage'
import { BaseModel, types } from 'react-native-sqlite-orm'
import DatabaseLayer from 'react-native-sqlite-orm/src/DatabaseLayer'


export default class CareerModel extends BaseModel {
  constructor(obj) {
    super(obj)
  }
 
  static get database() {
    return async () => SQLite.openDatabase({ name: 'db.db', location: '/persintences/'})
  }

  static get tableName() {
    return 'prueba'
  }

  static customQuery() {
    try {
    const dblayer = new DatabaseLayer(async() => SQLite.openDatabase({ name: 'db.db', location: '~persintences/db.db' }))
    dblayer.executeSql('SELECT * FROM prueba;').then(response => console.log(response))
    } catch (err) {
      console.log(err.message)
    }
  }

  static get columnMapping() {
    return {
      id: { type: types.INTEGER, primary_key: true },
      name: { type: types.TEXT, }
    }
  }
}
