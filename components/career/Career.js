import React, { useEffect, useState } from 'react'

import SQLite from 'react-native-sqlite-storage'
import { BaseModel } from 'react-native-sqlite-orm'

import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  TextInput,
  Image,
} from 'react-native'

//import ModelCareer from '../../models/Career'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import { BackNavigation } from '../navbar/BackNavigation'
import { colors, sizes } from '../../styles/index'

const imgCareer = require('resources/images/img-career.png')

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.red,
    flex: 1,
  },
  title: {
    color: colors.white,
    fontFamily: 'Lato-Regular',
    fontSize: sizes.title3
  },
  wrapper: {
    backgroundColor: colors.white,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    flex: 1,
  },
  search: {
    marginTop: 30,
    marginHorizontal: 20,
    backgroundColor: colors.gray3,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  inputField: {
    flex: 1,
    paddingVertical: 10,
    color: colors.gray,
    fontSize: sizes.title3,
    fontFamily: 'Lato-Bold',
  },
  card: {
    borderRadius: 8,
    backgroundColor: colors.white,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {width:0, height:2},
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 7,
  },
  titleCard: {
    fontSize: sizes.title2,
    fontFamily: 'Lato-Bold',
    color: colors.gray,
    marginBottom: 10,
  },
  link: {
    fontSize: sizes.body,
    fontFamily: 'Lato-Regular',
    color: colors.gray,
    textDecorationLine: 'underline'
  }
})

//const db = openDatabase({ name: 'db', createFromLocation: '~www/db.db'})
const db = SQLite.openDatabase({name: 'db', readOnly: true, createFromLocation: '/persistences/db.db'})

export const Career = ({ navigation }) => {

  const [items, setItems] = useState([])
  
  useEffect(() => {

    db.transaction((tx) => {
      tx.executeSql('SELECT * FROM prueba;', [], (tx, res) => {
        console.log('query complete')
        for(let i = 0; i < res.rows.length; i++) {
          console.log(res.rows.item(i))
        }
      })
    })
  },[])

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar 
        barStyle='light-content' 
        backgroundColor={colors.red}
      />
      <BackNavigation title="Carreras" color={colors.white}/>
      <View
        style={{
          paddingHorizontal: 20,
          marginBottom: 30,
        }}
      >
        <Text
          style={styles.title}
        >
          Encuentra una carrera que quieras estudiar.
          {items.length}
        </Text>
      </View>
      <View
        style={styles.wrapper}
      >
        <View
          style={styles.search}
        >
          <TextInput
            style={styles.inputField}
            placeholderTextColor={colors.gray2}
            placeholder="Buscar..."
          />
          <FontAwesomeIcon 
            icon={faSearch} 
            color={colors.gray2}
            size={sizes.title3}
          />
        </View>
        <ScrollView
          contentContainerStyle={{padding: 20, }}
        >
          <View
            style={styles.card}
          >
            <Image
              source={imgCareer}
              style={{height: 200,}}
              resizeMode='contain'
            />
            <View
              style={{padding: 15,}}
            >
              <Text
                style={styles.titleCard}
              >
                Odontologia
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('Information', {name: "Odontologia"})}
              >
                <Text
                  style={styles.link}
                >
                  Conocer más
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}
