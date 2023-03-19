import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Svg, {Path} from 'react-native-svg';

import {AndroidSafeArea, FONTS, COLORS, dummyData} from '../constants';

export default function Favorite() {
  const [favorite, setFavorite] = useState('Places');

  function Star() {
    return (
      <Svg
        width={12}
        height={12}
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <Path
          d="m6 1 1.545 3.13L11 4.635 8.5 7.07l.59 3.44L6 8.885 2.91 10.51l.59-3.44L1 4.635l3.455-.505L6 1Z"
          stroke="#222"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    );
  }

  function MapPin() {
    return (
      <Svg
        width={12}
        height={12}
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <Path
          d="M10.5 5c0 3.5-4.5 6.5-4.5 6.5S1.5 8.5 1.5 5a4.5 4.5 0 0 1 9 0Z"
          stroke="#222"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M6 6.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
          stroke="#222"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    );
  }

  function Arrow() {
    return (
      <Svg
        width={11}
        height={12}
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <Path
          d="M10.53 5.47a.75.75 0 0 1 0 1.06l-4.773 4.773a.75.75 0 1 1-1.06-1.06L8.939 6 4.697 1.757a.75.75 0 0 1 1.06-1.06L10.53 5.47ZM0 5.25h10v1.5H0v-1.5Z"
          fill="#7D849A"
        />
      </Svg>
    );
  }

  function renderContent() {
    return (
      <ScrollView
        contentContainerStyle={{paddingHorizontal: 16, flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
        <Text style={{...FONTS.H1, marginBottom: 20, marginTop: 24}}>
          Favorite
        </Text>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            marginBottom: 28,
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: favorite === 'Places' ? COLORS.green : '#F3F7FF',
              borderRadius: 50,
              marginHorizontal: 5,
            }}
            onPress={() => setFavorite('Places')}>
            <Text
              style={{
                paddingHorizontal: 36,
                paddingVertical: 4,
                lineHeight: 14 * 1.5,
                color: favorite === 'Places' ? COLORS.white : COLORS.gray,
                fontFamily: 'Lato-Regular',
                fontSize: 14,
              }}>
              Places
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: favorite === 'Food' ? COLORS.green : '#F3F7FF',
              borderRadius: 50,
              marginHorizontal: 5,
            }}
            onPress={() => setFavorite('Food')}>
            <Text
              style={{
                paddingHorizontal: 36,
                paddingVertical: 4,
                lineHeight: 14 * 1.5,
                color: favorite === 'Food' ? COLORS.white : COLORS.gray,
                fontFamily: 'Lato-Regular',
                fontSize: 14,
              }}>
              Food
            </Text>
          </TouchableOpacity>
        </View>
        {dummyData.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={{
                width: '100%',
                height: 93,
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 20,
                paddingBottom: 20,
                borderBottomWidth: 1,
                borderBottomColor: '#E2E2E2',
              }}>
              <Image
                source={item.photo_219x219}
                style={{
                  width: 73,
                  height: 73,
                  borderRadius: 20,
                  marginRight: 16,
                }}
              />
              <View style={{flex: 1}}>
                <Text
                  style={{
                    ...FONTS.H4,
                    lineHeight: 24 * 1,
                    color: COLORS.black,
                    textTransform: 'capitalize',
                  }}
                  numberOfLines={1}>
                  {item.name}
                </Text>
                <Text
                  style={{
                    color: COLORS.gray,
                    fontFamily: 'Lato-Regular',
                    fontSize: 14,
                    marginBottom: 5,
                    lineHeight: 14 * 1.4,
                  }}>
                  {item.type}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Star />
                  <Text
                    style={{
                      marginLeft: 4,
                      marginRight: 5,
                      ...FONTS.Lato_400Regular,
                      fontSize: 12,
                      color: COLORS.black,
                    }}>
                    {item.rating}
                  </Text>
                  <MapPin />
                  <Text
                    style={{
                      marginLeft: 4,
                      marginRight: 5,
                      ...FONTS.Lato_400Regular,
                      fontSize: 12,
                      color: COLORS.black,
                    }}>
                    {item.distance}
                  </Text>
                </View>
              </View>
              <Arrow />
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    );
  }

  return (
    <SafeAreaView style={{...AndroidSafeArea.AndroidSafeArea}}>
      {renderContent()}
    </SafeAreaView>
  );
}
