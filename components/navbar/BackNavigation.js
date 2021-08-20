import React from 'react'
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import { useNavigation } from '@react-navigation/native'
import { colors, sizes } from '../../styles/index'

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
  }, 
  title: {
    marginStart: 20,
    fontFamily: 'Lato-Bold',
    fontSize: sizes.title2,
    textAlign: 'center',
  }
})

export const BackNavigation = ({ title, color }) => {
  
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
      >
        <FontAwesomeIcon 
          icon={faArrowLeft} 
          color={color}
          size={sizes.title2}
        />
      </TouchableOpacity>
      <Text style={[styles.title, {color: color}]}>{title}</Text>
    </View>
  )
}
