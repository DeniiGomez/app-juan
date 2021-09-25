import React, {useContext} from 'react'

import { CareerContext } from '../../context/career/CareerContext'

import {
  View, 
  Text,
} from 'react-native'

import { colors, sizes } from '../../styles'

export const Definition = () => {
  
  const { career } = useContext(CareerContext)

  return (
    <View 
      style={{
        backgroundColor: colors.white,
        paddingTop: 15,
        flex: 1,
      }}
    >
      <Text
        style={{
          fontSize: sizes.body,
          fontFamily: 'Lato-Regular'
        }}
      >
        {career && career.definicion}
      </Text>
    </View>
  )
}
