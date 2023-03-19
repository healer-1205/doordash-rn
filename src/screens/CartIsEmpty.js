import {View, Text, ScrollView} from 'react-native';
import React from 'react';

import {EmptySvg} from '../svg';
import {COLORS, FONTS} from '../constants';

export default function CartIsEmpty() {
  function renderContent() {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'center',
          paddingVertical: 30,
        }}>
        <View style={{alignSelf: 'center'}}>
          <EmptySvg />
        </View>

        <View style={{top: -30}}>
          <Text
            style={{
              textAlign: 'center',
              ...FONTS.H1,
              lineHeight: 40 * 1,
              marginBottom: 10,
            }}>
            Your cart is empty!
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontFamily: 'Lato-Regular',
              fontSize: 16,
              color: COLORS.gray,
              lineHeight: 16 * 1.5,
            }}>
            Please find the restaurant and choose your {'\n'} favorite food.
          </Text>
        </View>
      </ScrollView>
    );
  }

  return <View style={{flex: 1}}>{renderContent()}</View>;
}
