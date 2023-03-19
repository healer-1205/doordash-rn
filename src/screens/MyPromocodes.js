import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import {Header} from '../components';
import {AndroidSafeArea, COLORS, FONTS} from '../constants';
import {CopySvg} from '../svg';

const promocodes = [
  {
    id: '1',
    name: 'Mcdonalds',
    discount: '50%',
    color: '#FD5252',
    code: 'ABC123',
    time: 'Valid until June 30, 2021',
  },
  {
    id: '2',
    name: 'KFC',
    discount: '30%',
    color: '#FFD205',
    code: 'ABC123',
    time: 'Valid until June 30, 2021',
  },
  {
    id: '3',
    name: 'Burger king',
    discount: '50%',
    color: '#00824B',
    code: 'ABC123',
    time: 'Valid until June 30, 2021',
  },
  {
    id: '4',
    name: 'Domino’s pizza',
    discount: '25%',
    color: '#FD5252',
    code: 'ABC123',
    time: 'Valid until June 30, 2021',
  },
  {
    id: '5',
    name: 'El Pollo Loco',
    discount: '30%',
    color: '#FFD205',
    code: 'ABC123',
    time: 'Valid until June 30, 2021',
  },
];

export default function MyPromocodes() {
  const navigation = useNavigation();

  const [favorite, setFavorite] = useState('Current');

  function renderHeader() {
    return <Header title="My promocodes" onPress={() => navigation.goBack()} />;
  }

  function renderContent() {
    return (
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: 16,
          paddingTop: 16,
          paddingBottom: 30,
        }}
        showsVerticalScrollIndicator={false}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            marginBottom: 12,
          }}>
          <TouchableOpacity
            style={{
              backgroundColor:
                favorite === 'Current' ? COLORS.green : '#F3F7FF',
              borderRadius: 50,
              marginHorizontal: 5,
            }}
            onPress={() => setFavorite('Current')}>
            <Text
              style={{
                paddingHorizontal: 36,
                paddingVertical: 6,
                lineHeight: 14 * 1.5,
                color: favorite === 'Current' ? COLORS.white : COLORS.gray,
                fontFamily: 'Lato-Regular',
                fontSize: 14,
              }}>
              Current
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: favorite === 'Used' ? COLORS.green : '#F3F7FF',
              borderRadius: 50,
              marginHorizontal: 5,
            }}
            onPress={() => setFavorite('Used')}>
            <Text
              style={{
                paddingHorizontal: 36,
                paddingVertical: 6,
                lineHeight: 14 * 1.5,
                color: favorite === 'Used' ? COLORS.white : COLORS.gray,
                fontFamily: 'Lato-Regular',
                fontSize: 14,
              }}>
              Used
            </Text>
          </TouchableOpacity>
        </View>
        {promocodes.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={{
                width: '100%',
                height: 113,
                borderBottomWidth: 1,
                borderBottomColor: '#E2E2E2',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                style={{
                  width: 73,
                  height: 73,
                  borderRadius: 20,
                }}
                source={{
                  uri: 'https://via.placeholder.com/219x219',
                }}
              />
              <View style={{paddingLeft: 16, flex: 1}}>
                <Text style={{...FONTS.H4, color: COLORS.black}}>
                  {item.name}
                </Text>
                <Text
                  style={{
                    ...FONTS.Lato_400Regular,
                    fontSize: 22,
                    marginBottom: 4,
                    color: item.color,
                  }}>
                  {item.discount}
                </Text>
                <Text
                  style={{
                    ...FONTS.Lato_400Regular,
                    fontSize: 12,
                    color: COLORS.gray,
                  }}>
                  {item.time}
                </Text>
              </View>
              <CopySvg />
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    );
  }

  return (
    <SafeAreaView style={{...AndroidSafeArea.AndroidSafeArea}}>
      {renderHeader()}
      {renderContent()}
    </SafeAreaView>
  );
}
