import React from 'react'

import {
  View, 
  Text
} from 'react-native'

import { colors, sizes } from '../../styles'

export const List = ({ list }) => {

  return (
    <View
      style={{
        backgroundColor: colors.white,
        paddingTop: 15,
        flex: 1,
      }}
    >
      {list.map((item, index) => (
        <Text
          key={index}
          style={{
            fontSize: sizes.body,
            fontFamily: 'Lato-Bold'
          }}
        >
          {item.nombre}
        </Text>
      ))}
    </View>
  )
}
