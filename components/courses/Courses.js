import React from 'react'
import {
  View, 
  Text
} from 'react-native'

import { colors, sizes } from '../../styles'

export const Courses = () => {
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
          fontFamily: 'Lato-Bold'
        }}
      >
        Cursos
      </Text>
    </View>
  )
}
