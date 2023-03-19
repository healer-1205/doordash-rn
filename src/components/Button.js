import {Text, TouchableOpacity} from 'react-native';
import React from 'react';

import {COLORS} from '../constants';

export default function Button({title, containerStyle, onPress, textStyle}) {
  return (
    <TouchableOpacity
      style={{
        height: 50,
        backgroundColor: COLORS.green,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        ...containerStyle,
      }}
      onPress={onPress}>
      <Text
        style={{
          color: COLORS.white,
          textAlign: 'center',
          fontSize: 14,
          textTransform: 'uppercase',
          ...textStyle,
          fontFamily: 'Lato-Regular',
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
