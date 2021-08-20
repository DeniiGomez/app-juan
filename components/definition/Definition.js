import React from 'react'
import {
  View, 
  Text,
} from 'react-native'

import { colors, sizes } from '../../styles'

export const Definition = () => {
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
        El dentista, también denominado odontólogo , es el especialista que se dedica profesionalmente al cuidado y tratamiento de las enfermedades de los dientes como ser las caries, por nombrar una de las más regulares y extendidas.
      </Text>
    </View>
  )
}
