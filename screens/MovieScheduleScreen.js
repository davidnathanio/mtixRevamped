import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  Icon,
  Pressable,
  ScreenContainer,
  SimpleStyleFlatList,
  SimpleStyleScrollView,
  withTheme,
} from '@draftbit/ui';
import { Image, Text, View } from 'react-native';

const MovieScheduleScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const [all_schedules, setAll_schedules] = React.useState([
    {
      id: 1,
      date: 'April 12 2024',
      type: 'XXI',
      price: 'Rp. 30.000',
      cinema: 'BRAGA XXI',
    },
    {
      id: 2,
      date: 'March 12 2024',
      type: 'IMAX',
      price: 'Rp. 40.000',
      cinema: 'CIWALK XXI',
    },
  ]);
  const [selected_filter, setSelected_filter] = React.useState('semua');
  const [shown_schedules, setShown_schedules] = React.useState([
    {
      id: 1,
      date: 'April 12 2024',
      type: 'XXI',
      price: 'Rp. 30.000',
      cinema: 'BRAGA XXI',
    },
    {
      id: 2,
      date: 'March 12 2024',
      type: 'IMAX',
      price: 'Rp. 40.000',
      cinema: 'CIWALK XXI',
    },
  ]);
  // Milih warna bg filter
  const selectedFilterColor = (value, selected_filter) => {
    if (value != selected_filter) {
      return '#FFFFFF';
    } else {
      return '#BD9759';
    }
  };

  const selectedFilterTextColor = (selected_filter, value) => {
    if (value != selected_filter) {
      return '#BD9759';
    } else {
      return '#FFFFFF';
    }
  };

  const updateFilter = (allCinemas, selectedFilter) => {
    // Type the code for the body of your function or hook here.
    // Functions can be triggered via Button/Touchable actions.
    // Hooks are run per ReactJS rules.

    /* String line breaks are accomplished with backticks ( example: `line one
line two` ) and will not work with special characters inside of quotes ( example: "line one line two" ) */
    return allCinemas.filter(
      cinema =>
        selectedFilter == 'semua' ||
        cinema.type.toLowerCase() == selectedFilter.toLowerCase()
    );
  };

  return (
    <ScreenContainer
      hasSafeArea={false}
      scrollable={false}
      hasTopSafeArea={true}
      style={StyleSheet.applyWidth({ gap: 10 }, dimensions.width)}
    >
      {/* Content */}
      <View
        style={StyleSheet.applyWidth(
          {
            backgroundColor: 'rgb(237, 237, 237)',
            gap: 6,
            marginLeft: 16,
            marginRight: 16,
          },
          dimensions.width
        )}
      />
      {/* Header */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignContent: 'flex-start',
            alignItems: 'flex-start',
            alignSelf: 'auto',
            backgroundColor: 'rgb(1, 83, 81)',
            flexDirection: 'row',
            flexWrap: 'nowrap',
            height: 49,
            justifyContent: 'flex-start',
            paddingBottom: 12,
            paddingTop: 13,
          },
          dimensions.width
        )}
      >
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              alignSelf: 'flex-start',
              flexDirection: 'column',
              justifyContent: 'center',
              marginLeft: 16,
              position: 'absolute',
              zIndex: 1,
            },
            dimensions.width
          )}
        >
          <Pressable
            onPress={() => {
              try {
                navigation.goBack();
              } catch (err) {
                console.error(err);
              }
            }}
            style={StyleSheet.applyWidth({ minHeight: 30 }, dimensions.width)}
          >
            <Icon
              size={24}
              color={theme.colors['Surface']}
              name={'MaterialIcons/arrow-back'}
            />
          </Pressable>
        </View>
        {/* Daftar Film */}
        <Text
          accessible={true}
          {...GlobalStyles.TextStyles(theme)['Text'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
              alignSelf: 'center',
              color: theme.colors['Surface'],
              flex: 1,
              fontFamily: 'Poppins_700Bold',
              fontSize: 22,
              textAlign: 'center',
            }),
            dimensions.width
          )}
        >
          {'Movie Schedule'}
        </Text>
      </View>

      <SimpleStyleScrollView
        bounces={true}
        horizontal={false}
        keyboardShouldPersistTaps={'never'}
        nestedScrollEnabled={false}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        style={StyleSheet.applyWidth(
          { gap: 6, marginLeft: 16, marginRight: 16 },
          dimensions.width
        )}
      >
        {/* Movie Details */}
        <View
          style={StyleSheet.applyWidth(
            { flexDirection: 'row', gap: 35 },
            dimensions.width
          )}
        >
          <Image
            resizeMode={'cover'}
            {...GlobalStyles.ImageStyles(theme)['Image'].props}
            source={{
              uri: 'https://cdn0-production-images-kly.akamaized.net/xCJgLGq2Sh43x0oVBpfGK9xlv6Y=/800x1066/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4788070/original/025926800_1711640349-428258907_18296664022157327_6175042479492571650_n.jpg',
            }}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.ImageStyles(theme)['Image'].style,
                { borderRadius: 10, height: 175, width: 114 }
              ),
              dimensions.width
            )}
          />
          <View style={StyleSheet.applyWidth({ gap: 5 }, dimensions.width)}>
            <Text
              accessible={true}
              {...GlobalStyles.TextStyles(theme)['Text'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Text'].style,
                  { fontFamily: 'Poppins_700Bold', fontSize: 18 }
                ),
                dimensions.width
              )}
            >
              {'VINA: SEBELUM 7 HARI'}
            </Text>
            {/* Category */}
            <View
              style={StyleSheet.applyWidth(
                { flexDirection: 'row', gap: 10, justifyContent: 'center' },
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  {
                    backgroundColor: 'rgb(189, 151, 89)',
                    borderBottomLeftRadius: 5,
                    borderBottomRightRadius: 5,
                    borderTopLeftRadius: 5,
                    borderTopRightRadius: 5,
                    paddingBottom: 1,
                    paddingLeft: 10,
                    paddingRight: 10,
                    paddingTop: 1,
                  },
                  dimensions.width
                )}
              >
                <Text
                  accessible={true}
                  {...GlobalStyles.TextStyles(theme)['Text'].props}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.TextStyles(theme)['Text'].style,
                      {
                        color: theme.colors['Surface'],
                        fontFamily: 'Poppins_700Bold',
                        fontSize: 16,
                      }
                    ),
                    dimensions.width
                  )}
                >
                  {'2D'}
                </Text>
              </View>
              {/* View 2 */}
              <View
                style={StyleSheet.applyWidth(
                  {
                    backgroundColor: 'rgb(189, 151, 89)',
                    borderBottomLeftRadius: 5,
                    borderBottomRightRadius: 5,
                    borderTopLeftRadius: 5,
                    borderTopRightRadius: 5,
                    paddingBottom: 1,
                    paddingLeft: 5,
                    paddingRight: 5,
                    paddingTop: 1,
                  },
                  dimensions.width
                )}
              >
                <Text
                  accessible={true}
                  {...GlobalStyles.TextStyles(theme)['Text'].props}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.TextStyles(theme)['Text'].style,
                      {
                        color: theme.colors['Surface'],
                        fontFamily: 'Poppins_700Bold',
                        fontSize: 16,
                      }
                    ),
                    dimensions.width
                  )}
                >
                  {'D17+'}
                </Text>
              </View>
            </View>
            {/* Genre */}
            <Text
              accessible={true}
              {...GlobalStyles.TextStyles(theme)['Text'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Text'].style,
                  {
                    alignSelf: 'center',
                    color: 'rgb(132, 132, 132)',
                    fontSize: 16,
                  }
                ),
                dimensions.width
              )}
            >
              {'Horror, Drama'}
            </Text>
            {/* Rating */}
            <Text
              accessible={true}
              {...GlobalStyles.TextStyles(theme)['Text'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Text'].style,
                  {
                    alignSelf: 'center',
                    color: 'rgb(248, 193, 0)',
                    fontFamily: 'Poppins_700Bold',
                    fontSize: 18,
                  }
                ),
                dimensions.width
              )}
            >
              {'★ 3,7'}
            </Text>
            {/* Duration */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'stretch',
                  flexDirection: 'row',
                  gap: 10,
                  justifyContent: 'flex-start',
                },
                dimensions.width
              )}
            >
              <Icon
                color={theme.colors['Primary Color']}
                name={'MaterialCommunityIcons/clock-time-four'}
                size={22}
              />
              <Text
                accessible={true}
                {...GlobalStyles.TextStyles(theme)['Text'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.TextStyles(theme)['Text'].style,
                    {
                      fontFamily: 'Poppins_400Regular',
                      fontSize: 14,
                      textAlign: 'center',
                    }
                  ),
                  dimensions.width
                )}
              >
                {'1 Hour 34 Minutes\n'}
              </Text>
            </View>
          </View>
        </View>
        {/* Cinema Filter */}
        <View
          style={StyleSheet.applyWidth(
            { flexDirection: 'row', flexWrap: 'wrap', gap: 5 },
            dimensions.width
          )}
        >
          <Pressable
            onPress={() => {
              try {
                setSelected_filter('semua');
                setShown_schedules(updateFilter(all_schedules, 'semua'));
              } catch (err) {
                console.error(err);
              }
            }}
          >
            <View
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: [
                    {
                      minWidth: Breakpoints.Mobile,
                      value: 'rgb(255, 255, 255)',
                    },
                    {
                      minWidth: Breakpoints.Mobile,
                      value: selectedFilterColor('semua', selected_filter),
                    },
                  ],
                  borderColor: 'rgb(189, 151, 89)',
                  borderRadius: 5,
                  borderWidth: 1,
                  paddingBottom: 1,
                  paddingLeft: 9,
                  paddingRight: 9,
                  paddingTop: 1,
                },
                dimensions.width
              )}
            >
              {/* Semua */}
              <Text
                accessible={true}
                {...GlobalStyles.TextStyles(theme)['Text'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.TextStyles(theme)['Text'].style,
                    {
                      alignSelf: 'center',
                      color: [
                        {
                          minWidth: Breakpoints.Mobile,
                          value: 'rgb(189, 151, 89)',
                        },
                        {
                          minWidth: Breakpoints.Mobile,
                          value: selectedFilterTextColor(
                            selected_filter,
                            'semua'
                          ),
                        },
                      ],
                      fontFamily: 'Poppins_400Regular',
                      fontSize: 14,
                    }
                  ),
                  dimensions.width
                )}
              >
                {'Semua'}
              </Text>
            </View>
          </Pressable>
          {/* Pressable 2 */}
          <Pressable
            onPress={() => {
              try {
                setSelected_filter('xxi');
                setShown_schedules(updateFilter(all_schedules, 'xxi'));
              } catch (err) {
                console.error(err);
              }
            }}
          >
            <View
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: selectedFilterColor('xxi', selected_filter),
                  borderColor: 'rgb(189, 151, 89)',
                  borderRadius: 5,
                  borderWidth: 1,
                  paddingBottom: 1,
                  paddingLeft: 9,
                  paddingRight: 9,
                  paddingTop: 1,
                },
                dimensions.width
              )}
            >
              <Text
                accessible={true}
                {...GlobalStyles.TextStyles(theme)['Text'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.TextStyles(theme)['Text'].style,
                    {
                      alignSelf: 'center',
                      color: [
                        {
                          minWidth: Breakpoints.Mobile,
                          value: theme.colors['Background'],
                        },
                        {
                          minWidth: Breakpoints.Mobile,
                          value: selectedFilterTextColor(
                            selected_filter,
                            'xxi'
                          ),
                        },
                      ],
                      fontFamily: 'Poppins_400Regular',
                      fontSize: 14,
                    }
                  ),
                  dimensions.width
                )}
              >
                {'XXI'}
              </Text>
            </View>
          </Pressable>
          {/* Pressable 4 */}
          <Pressable
            onPress={() => {
              try {
                setSelected_filter('the premiere');
                setShown_schedules(updateFilter(all_schedules, 'the premiere'));
              } catch (err) {
                console.error(err);
              }
            }}
          >
            <View
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: selectedFilterColor(
                    'the premiere',
                    selected_filter
                  ),
                  borderColor: 'rgb(189, 151, 89)',
                  borderRadius: 5,
                  borderWidth: 1,
                  paddingBottom: 1,
                  paddingLeft: 9,
                  paddingRight: 9,
                  paddingTop: 1,
                },
                dimensions.width
              )}
            >
              <Text
                accessible={true}
                {...GlobalStyles.TextStyles(theme)['Text'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.TextStyles(theme)['Text'].style,
                    {
                      alignSelf: 'center',
                      color: [
                        {
                          minWidth: Breakpoints.Mobile,
                          value: theme.colors['Background'],
                        },
                        {
                          minWidth: Breakpoints.Mobile,
                          value: selectedFilterTextColor(
                            selected_filter,
                            'the premiere'
                          ),
                        },
                      ],
                      fontFamily: 'Poppins_400Regular',
                      fontSize: 14,
                    }
                  ),
                  dimensions.width
                )}
              >
                {'The Premiere'}
              </Text>
            </View>
          </Pressable>
          {/* Pressable 3 */}
          <Pressable
            onPress={() => {
              try {
                setSelected_filter('imax');
                setShown_schedules(updateFilter(all_schedules, 'imax'));
              } catch (err) {
                console.error(err);
              }
            }}
          >
            <View
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: selectedFilterColor('imax', selected_filter),
                  borderColor: 'rgb(189, 151, 89)',
                  borderRadius: 5,
                  borderWidth: 1,
                  paddingBottom: 1,
                  paddingLeft: 9,
                  paddingRight: 9,
                  paddingTop: 1,
                },
                dimensions.width
              )}
            >
              <Text
                accessible={true}
                {...GlobalStyles.TextStyles(theme)['Text'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.TextStyles(theme)['Text'].style,
                    {
                      alignSelf: 'center',
                      color: [
                        {
                          minWidth: Breakpoints.Mobile,
                          value: theme.colors['Surface'],
                        },
                        {
                          minWidth: Breakpoints.Mobile,
                          value: selectedFilterTextColor(
                            selected_filter,
                            'imax'
                          ),
                        },
                      ],
                      fontFamily: 'Poppins_400Regular',
                      fontSize: 14,
                    }
                  ),
                  dimensions.width
                )}
              >
                {'IMAX'}
              </Text>
            </View>
          </Pressable>
        </View>
        <SimpleStyleFlatList
          data={shown_schedules}
          horizontal={false}
          inverted={false}
          keyExtractor={(listData, index) =>
            listData?.id ?? listData?.uuid ?? index.toString()
          }
          keyboardShouldPersistTaps={'never'}
          listKey={'PQwHjIu8'}
          nestedScrollEnabled={false}
          numColumns={1}
          onEndReachedThreshold={0.5}
          renderItem={({ item, index }) => {
            const listData = item;
            return (
              <>
                {/* View 2 */}
                <View
                  style={StyleSheet.applyWidth(
                    {
                      backgroundColor: theme.colors['Surface'],
                      gap: 0,
                      paddingBottom: 10,
                      paddingTop: 10,
                    },
                    dimensions.width
                  )}
                >
                  <View
                    style={StyleSheet.applyWidth(
                      { flexDirection: 'row', justifyContent: 'space-between' },
                      dimensions.width
                    )}
                  >
                    <Text
                      accessible={true}
                      {...GlobalStyles.TextStyles(theme)['Text'].props}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TextStyles(theme)['Text'].style,
                          {
                            alignSelf: 'center',
                            fontFamily: 'Poppins_700Bold',
                            fontSize: 20,
                          }
                        ),
                        dimensions.width
                      )}
                    >
                      {listData?.cinema}
                    </Text>

                    <View
                      style={StyleSheet.applyWidth(
                        {
                          borderColor: 'rgb(1, 83, 81)',
                          borderRadius: 10,
                          borderWidth: 1,
                          flexDirection: 'row',
                          gap: 15,
                          paddingBottom: 5,
                          paddingLeft: 14,
                          paddingRight: 14,
                          paddingTop: 5,
                        },
                        dimensions.width
                      )}
                    >
                      <Icon
                        color={theme.colors['Primary Color']}
                        name={'MaterialCommunityIcons/food'}
                        size={18}
                      />
                      <Text
                        accessible={true}
                        {...GlobalStyles.TextStyles(theme)['Text'].props}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.TextStyles(theme)['Text'].style,
                            {
                              alignSelf: 'center',
                              color: 'rgb(1, 83, 81)',
                              fontFamily: 'Poppins_500Medium',
                              fontSize: 14,
                            }
                          ),
                          dimensions.width
                        )}
                      >
                        {'Order m.food'}
                      </Text>
                    </View>
                  </View>
                  {/* View 2 */}
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: 20,
                      },
                      dimensions.width
                    )}
                  >
                    <Text
                      accessible={true}
                      {...GlobalStyles.TextStyles(theme)['Text'].props}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TextStyles(theme)['Text'].style,
                          { fontFamily: 'Poppins_400Regular', fontSize: 16 }
                        ),
                        dimensions.width
                      )}
                    >
                      {'March 12th, 2024'}
                    </Text>
                    {/* Text 2 */}
                    <Text
                      accessible={true}
                      {...GlobalStyles.TextStyles(theme)['Text'].props}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TextStyles(theme)['Text'].style,
                          {
                            color: theme.colors['Primary Color'],
                            fontFamily: 'Poppins_700Bold',
                            fontSize: 16,
                          }
                        ),
                        dimensions.width
                      )}
                    >
                      {'Rp30.000'}
                    </Text>
                  </View>
                  {/* View Button Jadwal */}
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        columnGap: 20,
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        gap: 15,
                        marginTop: 5,
                        rowGap: 15,
                      },
                      dimensions.width
                    )}
                  >
                    {/* Button Jadwal */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          alignSelf: 'center',
                          backgroundColor: 'rgb(217, 217, 217)',
                          borderRadius: 5,
                          flex: 0,
                          flexDirection: 'column',
                          justifyContent: 'flex-start',
                          paddingBottom: 4,
                          paddingLeft: 20,
                          paddingRight: 20,
                          paddingTop: 4,
                        },
                        dimensions.width
                      )}
                    >
                      <Text
                        accessible={true}
                        {...GlobalStyles.TextStyles(theme)['Text'].props}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.TextStyles(theme)['Text'].style,
                            {
                              color: 'rgb(128, 128, 128)',
                              fontFamily: 'Poppins_600SemiBold',
                              fontSize: 16,
                              textAlign: 'auto',
                            }
                          ),
                          dimensions.width
                        )}
                      >
                        {'12:00'}
                      </Text>
                    </View>
                    {/* Button Jadwal 2 */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          backgroundColor: 'rgb(217, 217, 217)',
                          borderRadius: 5,
                          paddingBottom: 4,
                          paddingLeft: 20,
                          paddingRight: 20,
                          paddingTop: 4,
                        },
                        dimensions.width
                      )}
                    >
                      <Text
                        accessible={true}
                        {...GlobalStyles.TextStyles(theme)['Text'].props}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.TextStyles(theme)['Text'].style,
                            {
                              color: 'rgb(128, 128, 128)',
                              fontFamily: 'Poppins_600SemiBold',
                              fontSize: 16,
                            }
                          ),
                          dimensions.width
                        )}
                      >
                        {'12:00'}
                      </Text>
                    </View>
                    {/* Button Jadwal 3 */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          backgroundColor: 'rgb(217, 217, 217)',
                          borderRadius: 5,
                          paddingBottom: 4,
                          paddingLeft: 20,
                          paddingRight: 20,
                          paddingTop: 4,
                        },
                        dimensions.width
                      )}
                    >
                      <Text
                        accessible={true}
                        {...GlobalStyles.TextStyles(theme)['Text'].props}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.TextStyles(theme)['Text'].style,
                            {
                              color: 'rgb(128, 128, 128)',
                              fontFamily: 'Poppins_600SemiBold',
                              fontSize: 16,
                            }
                          ),
                          dimensions.width
                        )}
                      >
                        {'12:00'}
                      </Text>
                    </View>
                    {/* Button Jadwal 4 */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          backgroundColor: 'rgb(217, 217, 217)',
                          borderRadius: 5,
                          paddingBottom: 4,
                          paddingLeft: 20,
                          paddingRight: 20,
                          paddingTop: 4,
                        },
                        dimensions.width
                      )}
                    >
                      <Text
                        accessible={true}
                        {...GlobalStyles.TextStyles(theme)['Text'].props}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.TextStyles(theme)['Text'].style,
                            {
                              color: 'rgb(128, 128, 128)',
                              fontFamily: 'Poppins_600SemiBold',
                              fontSize: 16,
                            }
                          ),
                          dimensions.width
                        )}
                      >
                        {'12:00'}
                      </Text>
                    </View>
                    {/* Button Jadwal 5 */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          backgroundColor: 'rgb(217, 217, 217)',
                          borderRadius: 5,
                          paddingBottom: 4,
                          paddingLeft: 20,
                          paddingRight: 20,
                          paddingTop: 4,
                        },
                        dimensions.width
                      )}
                    >
                      <Text
                        accessible={true}
                        {...GlobalStyles.TextStyles(theme)['Text'].props}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.TextStyles(theme)['Text'].style,
                            {
                              color: 'rgb(128, 128, 128)',
                              fontFamily: 'Poppins_600SemiBold',
                              fontSize: 16,
                            }
                          ),
                          dimensions.width
                        )}
                      >
                        {'12:00'}
                      </Text>
                    </View>
                    {/* Button Jadwal 6 */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          backgroundColor: 'rgb(217, 217, 217)',
                          borderRadius: 5,
                          paddingBottom: 4,
                          paddingLeft: 20,
                          paddingRight: 20,
                          paddingTop: 4,
                        },
                        dimensions.width
                      )}
                    >
                      <Text
                        accessible={true}
                        {...GlobalStyles.TextStyles(theme)['Text'].props}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.TextStyles(theme)['Text'].style,
                            {
                              color: 'rgb(128, 128, 128)',
                              fontFamily: 'Poppins_600SemiBold',
                              fontSize: 16,
                            }
                          ),
                          dimensions.width
                        )}
                      >
                        {'12:00'}
                      </Text>
                    </View>
                    {/* Button Jadwal 7 */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          backgroundColor: 'rgb(217, 217, 217)',
                          borderRadius: 5,
                          paddingBottom: 4,
                          paddingLeft: 20,
                          paddingRight: 20,
                          paddingTop: 4,
                        },
                        dimensions.width
                      )}
                    >
                      <Text
                        accessible={true}
                        {...GlobalStyles.TextStyles(theme)['Text'].props}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.TextStyles(theme)['Text'].style,
                            {
                              color: 'rgb(128, 128, 128)',
                              fontFamily: 'Poppins_600SemiBold',
                              fontSize: 16,
                            }
                          ),
                          dimensions.width
                        )}
                      >
                        {'12:00'}
                      </Text>
                    </View>
                    {/* Button Jadwal 8 */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          backgroundColor: 'rgb(217, 217, 217)',
                          borderRadius: 5,
                          paddingBottom: 4,
                          paddingLeft: 20,
                          paddingRight: 20,
                          paddingTop: 4,
                        },
                        dimensions.width
                      )}
                    >
                      <Text
                        accessible={true}
                        {...GlobalStyles.TextStyles(theme)['Text'].props}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.TextStyles(theme)['Text'].style,
                            {
                              color: 'rgb(128, 128, 128)',
                              fontFamily: 'Poppins_600SemiBold',
                              fontSize: 16,
                            }
                          ),
                          dimensions.width
                        )}
                      >
                        {'12:00'}
                      </Text>
                    </View>
                  </View>
                </View>
              </>
            );
          }}
          showsHorizontalScrollIndicator={true}
          showsVerticalScrollIndicator={true}
          scrollEnabled={false}
        />
      </SimpleStyleScrollView>
    </ScreenContainer>
  );
};

export default withTheme(MovieScheduleScreen);
