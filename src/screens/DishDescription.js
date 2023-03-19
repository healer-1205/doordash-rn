import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  StatusBar,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import {useRoute, useNavigation} from '@react-navigation/native';
import {Shadow} from 'react-native-shadow-2';

import {COLORS, SIZES, dishes, FONTS} from '../constants';
import {
  HomeSvg,
  ProfileSvg,
  HeartSvg,
  BagSvg,
  PlaceSvg,
  MinusSvg,
  ArrowSvg,
} from '../svg';

export default function DishDescription() {
  navigation = useNavigation();

  const tabs = [
    {
      id: '1',
      screen: 'Home',
      icon: <HomeSvg color={COLORS.gray} />,
    },
    {
      id: '2',
      screen: 'Places',
      icon: <PlaceSvg color={COLORS.gray} />,
    },
    {
      id: '3',
      screen: 'CartIsEmpty',
      icon: (
        <View
          style={{
            width: 76,
            height: 76,
            backgroundColor: COLORS.white,
            top: -30,
            borderRadius: 40,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: 64,
              height: 64,
              backgroundColor: COLORS.green,
              borderRadius: 35,
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 1,
            }}>
            <BagSvg />
            <View
              style={{
                width: 22,
                height: 22,
                backgroundColor: COLORS.white,
                borderRadius: 11,
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                right: 11,
                bottom: 11,
              }}>
              <Text
                style={{
                  fontSize: 12,
                  color: COLORS.golden,
                  ...FONTS.Lato_900Black,
                  color: COLORS.green,
                }}>
                5
              </Text>
            </View>
          </View>
          <Text
            style={{
              fontSize: 12,
              fontFamily: 'Lato-Regular',
              textAlign: 'center',
              color: COLORS.green,
              position: 'absolute',
              bottom: -15,
            }}>
            $48.93
          </Text>
        </View>
      ),
    },
    {
      id: '4',
      screen: 'Favorite',
      icon: <HeartSvg color={COLORS.gray} />,
    },
    {
      id: '5',
      screen: 'Profile',
      icon: <ProfileSvg color={COLORS.gray} />,
    },
  ];

  const route = useRoute();
  const {dish} = route.params;

  function renderSlider() {
    return (
      <View
        style={{
          width: SIZES.width,
          flex: 1,
        }}>
        <Image
          source={{uri: 'https://via.placeholder.com/375x624'}}
          style={{width: '100%', height: '100%'}}
        />
      </View>
    );
  }

  function renderDishInfo() {
    return (
      <View
        style={{
          paddingTop: 23,
          paddingHorizontal: 16,
          paddingBottom: 30,
        }}>
        <Text
          style={{
            ...FONTS.H2,
            marginBottom: 10,
            textTransform: 'capitalize',
            color: COLORS.black,
          }}>
          {dish.name}
        </Text>
        <Text
          style={{
            ...FONTS.Lato_400Regular,
            fontSize: 14,
            color: COLORS.gray,
            lineHeight: 14 * 1.5,
            marginBottom: 10,
          }}>
          {dish.description}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                ...FONTS.Lato_400Regular,
                fontSize: 20,
                color: COLORS.carrot,
              }}>
              ${dish.price}
              {'  '}
            </Text>
            <Text
              style={{
                ...FONTS.Lato_400Regular,
                fontSize: 14,
                color: COLORS.gray,
              }}>
              {dish.weight}g
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={{
                width: 36,
                height: 36,
                backgroundColor: COLORS.lightBlue,
                borderRadius: 18,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <MinusSvg />
            </TouchableOpacity>
            <Text style={{marginHorizontal: 10}}>1</Text>
            <TouchableOpacity
              style={{
                width: 36,
                height: 36,
                backgroundColor: COLORS.lightBlue,
                borderRadius: 18,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <MinusSvg />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  function renderTabs() {
    return (
      <Shadow
        offset={[0, 0]}
        distance={15}
        startColor={'rgba(6, 38, 100, 0.06)'}
        finalColor={'rgba(6, 38, 100, 0.0)'}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 22,
            backgroundColor: COLORS.white,
            paddingBottom: 4,
            paddingTop: 2,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            width: SIZES.width,
          }}>
          {tabs.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() =>
                  item.screen === 'CartIsEmpty' && dishes.length !== 0
                    ? navigation.navigate('Order')
                    : navigation.navigate('MainLayout', {
                        screen: item.screen,
                      })
                }
                activeOpacity={0.8}>
                <View>
                  <View
                    style={{
                      alignSelf: 'center',
                      height: item.screen !== 'CartIsEmpty' ? 24 : 80,
                      width: item.screen !== 'CartIsEmpty' ? 24 : 78,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    {item.icon}
                  </View>
                  {item.screen !== 'CartIsEmpty' && (
                    <View style={{alignItems: 'center'}}>
                      <View
                        style={{
                          width: 4,
                          height: 4,
                          borderRadius: 2,
                          backgroundColor: COLORS.transparent,
                          marginTop: 4,
                        }}
                      />
                      <Text
                        style={{
                          textAlign: 'center',
                          lineHeight: 16 * 1,
                          fontSize: 12,
                          fontFamily: 'Lato-Regular',
                          color: COLORS.gray,
                        }}>
                        {item.screen}
                      </Text>
                    </View>
                  )}
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </Shadow>
    );
  }

  return (
    <View style={{flex: 1, backgroundColor: COLORS.white}}>
      <StatusBar barStyle="black-content" />
      <TouchableOpacity
        style={{
          position: 'absolute',
          left: 0,
          paddingHorizontal: 16,
          zIndex: 9999,
          height: 42,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 24,
        }}
        onPress={() => navigation.goBack()}>
        <ArrowSvg />
      </TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          height: 42,
          position: 'absolute',
          zIndex: 9,
          width: '100%',
          marginTop: 24,
        }}>
        <Text
          style={{
            fontSize: 18,
            ...FONTS.H3,
            color: COLORS.black,
            textTransform: 'capitalize',
            textAlign: 'center',
          }}>
          {dish.name}
        </Text>
      </View>
      {renderSlider()}
      {renderDishInfo()}
      {renderTabs()}
    </View>
  );
}
