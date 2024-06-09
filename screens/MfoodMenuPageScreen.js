import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import intToPrice from '../global-functions/intToPrice';
import selectedFilterColorGlobal from '../global-functions/selectedFilterColorGlobal';
import selectedFilterTextColorGlobal from '../global-functions/selectedFilterTextColorGlobal';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  Icon,
  IconButton,
  Pressable,
  ScreenContainer,
  SimpleStyleFlatList,
  SimpleStyleScrollView,
  withTheme,
} from '@draftbit/ui';
import { Image, Text, View } from 'react-native';

const MfoodMenuPageScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();
  const [selected_filter, setSelected_filter] = React.useState('semua');
  const [shown_food, setShown_food] = React.useState(Constants['all_food']);
  const addFood = (allFood, foodName) => {
    // Type the code for the body of your function or hook here.
    // Functions can be triggered via Button/Touchable actions.
    // Hooks are run per ReactJS rules.

    /* String line breaks are accomplished with backticks ( example: `line one
line two` ) and will not work with special characters inside of quotes ( example: "line one line two" ) */
    return allFood.map(item => {
      if (item.title === foodName) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
  };

  const minusFood = (allFood, foodName) => {
    // Type the code for the body of your function or hook here.
    // Functions can be triggered via Button/Touchable actions.
    // Hooks are run per ReactJS rules.

    /* String line breaks are accomplished with backticks ( example: `line one
line two` ) and will not work with special characters inside of quotes ( example: "line one line two" ) */

    return allFood.map(item => {
      if (item.title === foodName && item.quantity > 0) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
  };

  const filterFood = (allFood, selectedFilter) => {
    // Type the code for the body of your function or hook here.
    // Functions can be triggered via Button/Touchable actions.
    // Hooks are run per ReactJS rules.

    /* String line breaks are accomplished with backticks ( example: `line one
line two` ) and will not work with special characters inside of quotes ( example: "line one line two" ) */

    if (selectedFilter === 'semua') {
      return allFood;
    }
    return allFood.filter(item => item.type === selectedFilter);
  };

  const countQuantities = allFood => {
    // Type the code for the body of your function or hook here.
    // Functions can be triggered via Button/Touchable actions.
    // Hooks are run per ReactJS rules.

    /* String line breaks are accomplished with backticks ( example: `line one
line two` ) and will not work with special characters inside of quotes ( example: "line one line two" ) */
    return allFood.reduce((sum, item) => sum + item.quantity, 0);
  };

  const countPrice = allFood => {
    // Type the code for the body of your function or hook here.
    // Functions can be triggered via Button/Touchable actions.
    // Hooks are run per ReactJS rules.

    /* String line breaks are accomplished with backticks ( example: `line one
line two` ) and will not work with special characters inside of quotes ( example: "line one line two" ) */
    const totalPrice = allFood.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    const formattedCost = new Intl.NumberFormat('id-ID').format(totalPrice);
    return totalPrice ? formattedCost : '-';
  };

  return (
    <ScreenContainer
      hasSafeArea={false}
      scrollable={false}
      hasTopSafeArea={true}
    >
      <SimpleStyleScrollView
        bounces={true}
        horizontal={false}
        keyboardShouldPersistTaps={'never'}
        nestedScrollEnabled={false}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
      >
        {/* header */}
        <View
          style={StyleSheet.applyWidth(
            {
              backgroundColor: theme.colors['Primary Color'],
              gap: 8,
              paddingBottom: 50,
            },
            dimensions.width
          )}
        >
          {/* teratas header */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignContent: 'center',
                alignItems: 'flex-start',
                alignSelf: 'auto',
                backgroundColor: 'rgba(0, 0, 0, 0)',
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
                { position: 'absolute', zIndex: 1 },
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
                style={StyleSheet.applyWidth(
                  { marginTop: 15 },
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
                      position: 'relative',
                      zIndex: 0,
                    },
                    dimensions.width
                  )}
                >
                  <Icon
                    size={24}
                    color={theme.colors['Surface']}
                    name={'MaterialIcons/arrow-back'}
                  />
                </View>
              </Pressable>
            </View>
            {/* Daftar Film */}
            <Text
              accessible={true}
              {...GlobalStyles.TextStyles(theme)['Text'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Text'].style,
                  {
                    alignSelf: 'center',
                    color: theme.colors['Surface'],
                    flex: 1,
                    fontFamily: 'Poppins_700Bold',
                    fontSize: 22,
                    textAlign: 'center',
                  }
                ),
                dimensions.width
              )}
            >
              {'BRAGA XXI'}
            </Text>
          </View>
          {/* alamat header */}
          <View
            style={StyleSheet.applyWidth(
              {
                backgroundColor: 'rgba(0, 0, 0, 0)',
                flexDirection: 'row',
                flexWrap: 'wrap',
                gap: 15,
              },
              dimensions.width
            )}
          >
            <Icon
              size={24}
              color={theme.colors['Surface']}
              name={'Ionicons/ios-location-sharp'}
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: theme.colors['Primary Color'],
                  marginLeft: 16,
                },
                dimensions.width
              )}
            />
            <Text
              accessible={true}
              {...GlobalStyles.TextStyles(theme)['Poppins'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Poppins'].style,
                  { color: theme.colors['Surface'] }
                ),
                dimensions.width
              )}
            >
              {'Braga City Walk Lt.2, Jl. Braga 99-101'}
            </Text>
          </View>
          {/* alamat header 2 */}
          <View
            style={StyleSheet.applyWidth(
              {
                backgroundColor: 'rgba(0, 0, 0, 0)',
                flexDirection: 'row',
                flexWrap: 'wrap',
                gap: 15,
              },
              dimensions.width
            )}
          >
            <Icon
              size={24}
              color={theme.colors['Surface']}
              name={'FontAwesome/phone'}
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: theme.colors['Primary Color'],
                  marginLeft: 16,
                },
                dimensions.width
              )}
            />
            <Text
              accessible={true}
              {...GlobalStyles.TextStyles(theme)['Poppins'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Poppins'].style,
                  { color: theme.colors['Surface'] }
                ),
                dimensions.width
              )}
            >
              {'(022) 844 60121'}
            </Text>
          </View>
        </View>
        {/* Floating Banner */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignContent: 'flex-start',
              alignSelf: 'center',
              backgroundColor: theme.colors['Surface'],
              borderColor: theme.colors['Secondary Color'],
              borderRadius: 10,
              borderWidth: 2,
              flexDirection: 'row',
              gap: 5,
              paddingBottom: 6,
              paddingLeft: 11,
              paddingRight: 11,
              paddingTop: 6,
              position: 'relative',
              top: -30,
              width: '90%',
              zIndex: 1,
            },
            dimensions.width
          )}
        >
          <View
            style={StyleSheet.applyWidth(
              { flex: 1, gap: 5, paddingLeft: 9 },
              dimensions.width
            )}
          >
            <Text
              accessible={true}
              {...GlobalStyles.TextStyles(theme)['Poppins'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Poppins'].style,
                  { textAlign: 'left' }
                ),
                dimensions.width
              )}
            >
              {'Open Hours'}
            </Text>
            {/* Text 2 */}
            <Text
              accessible={true}
              {...GlobalStyles.TextStyles(theme)['Poppins'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Poppins'].style,
                  { fontFamily: 'Poppins_700Bold', textAlign: 'left' }
                ),
                dimensions.width
              )}
            >
              {'11:30 - 21:00'}
            </Text>
          </View>
          {/* divider */}
          <View
            style={StyleSheet.applyWidth(
              { borderColor: theme.colors['Light'], borderWidth: 1 },
              dimensions.width
            )}
          />
          {/* View 2 */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                alignSelf: 'center',
                borderColor: 'rgba(0, 0, 0, 0)',
                flex: 1,
                flexDirection: 'row',
                gap: 0,
              },
              dimensions.width
            )}
          >
            {/* Icon 2 */}
            <Icon
              size={24}
              color={theme.colors['Secondary Color']}
              name={'Ionicons/location'}
              style={StyleSheet.applyWidth(
                { backgroundColor: 'rgba(0, 0, 0, 0)', marginLeft: 0 },
                dimensions.width
              )}
            />
            <Text
              accessible={true}
              {...GlobalStyles.TextStyles(theme)['Poppins'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Poppins'].style,
                  {
                    color: theme.colors['Secondary Color'],
                    fontFamily: 'Poppins_700Bold',
                  }
                ),
                dimensions.width
              )}
            >
              {'View Theater Location'}
            </Text>
          </View>
        </View>
        {/* Category Buttons */}
        <SimpleStyleScrollView
          bounces={true}
          keyboardShouldPersistTaps={'never'}
          nestedScrollEnabled={false}
          showsVerticalScrollIndicator={true}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              flexDirection: 'row',
              gap: 6,
              marginBottom: 20,
              paddingLeft: 16,
              paddingRight: 16,
            },
            dimensions.width
          )}
        >
          {/* Semua */}
          <Pressable
            onPress={() => {
              try {
                setSelected_filter('semua');
                setShown_food(filterFood(Constants['all_food'], 'semua'));
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
                      value: selectedFilterColorGlobal(
                        'semua',
                        selected_filter
                      ),
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
                          value: selectedFilterTextColorGlobal(
                            'semua',
                            selected_filter
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
          {/* Promo */}
          <Pressable
            onPress={() => {
              try {
                setSelected_filter('promo');
                setShown_food(filterFood(Constants['all_food'], 'promo'));
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
                      value: selectedFilterColorGlobal(
                        'promo',
                        selected_filter
                      ),
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
                          value: selectedFilterTextColorGlobal(
                            'promo',
                            selected_filter
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
                {'Promo\n'}
              </Text>
            </View>
          </Pressable>
          {/* Combo */}
          <Pressable
            onPress={() => {
              try {
                setSelected_filter('combo');
                setShown_food(filterFood(Constants['all_food'], 'combo'));
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
                      value: selectedFilterColorGlobal(
                        'combo',
                        selected_filter
                      ),
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
                          value: selectedFilterTextColorGlobal(
                            'combo',
                            selected_filter
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
                {'Combo\n'}
              </Text>
            </View>
          </Pressable>
          {/* Popcorn */}
          <Pressable
            onPress={() => {
              try {
                setSelected_filter('popcorn');
                setShown_food(filterFood(Constants['all_food'], 'popcorn'));
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
                      value: selectedFilterColorGlobal(
                        'popcorn',
                        selected_filter
                      ),
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
                          value: selectedFilterTextColorGlobal(
                            'popcorn',
                            selected_filter
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
                {'Popcorn'}
              </Text>
            </View>
          </Pressable>
          {/* Fritters */}
          <Pressable
            onPress={() => {
              try {
                setSelected_filter('fritters');
                setShown_food(filterFood(Constants['all_food'], 'fritters'));
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
                      value: selectedFilterColorGlobal(
                        'fritters',
                        selected_filter
                      ),
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
                          value: selectedFilterTextColorGlobal(
                            'fritters',
                            selected_filter
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
                {'Fritters\n'}
              </Text>
            </View>
          </Pressable>
          {/* Light Meal */}
          <Pressable
            onPress={() => {
              try {
                setSelected_filter('light meal');
                setShown_food(filterFood(Constants['all_food'], 'light meal'));
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
                      value: selectedFilterColorGlobal(
                        'light meal',
                        selected_filter
                      ),
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
                          value: selectedFilterTextColorGlobal(
                            'light meal',
                            selected_filter
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
                {'Light Meal\n'}
              </Text>
            </View>
          </Pressable>
          {/* Bakery & Pastry */}
          <Pressable
            onPress={() => {
              try {
                setSelected_filter('bakery & pastry');
                setShown_food(
                  filterFood(Constants['all_food'], 'bakery & pastry')
                );
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
                      value: selectedFilterColorGlobal(
                        'bakery & pastry',
                        selected_filter
                      ),
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
                          value: selectedFilterTextColorGlobal(
                            'bakery & pastry',
                            selected_filter
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
                {'Bakery & Pastry\n'}
              </Text>
            </View>
          </Pressable>
          {/* Drinks */}
          <Pressable
            onPress={() => {
              try {
                setSelected_filter('drinks');
                setShown_food(filterFood(Constants['all_food'], 'drinks'));
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
                      value: selectedFilterColorGlobal(
                        'drinks',
                        selected_filter
                      ),
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
                          value: selectedFilterTextColorGlobal(
                            'drinks',
                            selected_filter
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
                {'Drinks\n'}
              </Text>
            </View>
          </Pressable>
        </SimpleStyleScrollView>
        <SimpleStyleFlatList
          data={shown_food}
          horizontal={false}
          inverted={false}
          keyExtractor={(listData, index) =>
            listData?.id ?? listData?.uuid ?? index.toString()
          }
          keyboardShouldPersistTaps={'never'}
          listKey={'xE2C5scj'}
          nestedScrollEnabled={false}
          numColumns={1}
          onEndReachedThreshold={0.5}
          renderItem={({ item, index }) => {
            const listData = item;
            return (
              <>
                {/* food Details */}
                <View
                  style={StyleSheet.applyWidth(
                    {
                      backgroundColor: theme.colors['Surface'],
                      flexDirection: 'row',
                      gap: 0,
                      marginRight: 0,
                      paddingBottom: 10,
                      paddingTop: 10,
                    },
                    dimensions.width
                  )}
                >
                  <Image
                    resizeMode={'cover'}
                    {...GlobalStyles.ImageStyles(theme)['Image'].props}
                    source={{ uri: `${listData?.imgUrl}` }}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.ImageStyles(theme)['Image'].style,
                        {
                          borderRadius: 20,
                          height: 121,
                          marginLeft: 16,
                          marginRight: 13,
                          width: 80,
                        }
                      ),
                      dimensions.width
                    )}
                  />
                  <View
                    style={StyleSheet.applyWidth(
                      { flex: 1, gap: 5, paddingRight: 16 },
                      dimensions.width
                    )}
                  >
                    {/* title */}
                    <Text
                      accessible={true}
                      {...GlobalStyles.TextStyles(theme)['Text'].props}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TextStyles(theme)['Text'].style,
                          { fontFamily: 'Poppins_600SemiBold', fontSize: 16 }
                        ),
                        dimensions.width
                      )}
                    >
                      {listData?.title}
                    </Text>
                    {/* desc */}
                    <Text
                      accessible={true}
                      {...GlobalStyles.TextStyles(theme)['Text'].props}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TextStyles(theme)['Text'].style,
                          {
                            alignSelf: 'flex-start',
                            color: 'rgb(132, 132, 132)',
                            fontSize: 14,
                          }
                        ),
                        dimensions.width
                      )}
                    >
                      {listData?.description}
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
                              fontSize: 16,
                              textAlign: 'center',
                            }
                          ),
                          dimensions.width
                        )}
                      >
                        {listData?.estimatedTime}
                      </Text>
                    </View>
                    {/* terbawah */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          alignItems: 'center',
                          flexDirection: 'row',
                          marginTop: 10,
                        },
                        dimensions.width
                      )}
                    >
                      {/* harga */}
                      <View
                        style={StyleSheet.applyWidth(
                          { width: '60%' },
                          dimensions.width
                        )}
                      >
                        <Text
                          accessible={true}
                          {...GlobalStyles.TextStyles(theme)['Poppins'].props}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.TextStyles(theme)['Poppins'].style,
                              {
                                color: theme.colors['Primary Color'],
                                fontFamily: 'Poppins_700Bold',
                                fontSize: 18,
                                textAlign: 'left',
                              }
                            ),
                            dimensions.width
                          )}
                        >
                          {'Rp '}
                          {intToPrice(listData?.price)}
                        </Text>
                      </View>
                      {/* tombol */}
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            flex: 1,
                            flexDirection: 'row',
                            justifyContent: 'space-evenly',
                          },
                          dimensions.width
                        )}
                      >
                        <View>
                          <IconButton
                            onPress={() => {
                              try {
                                setGlobalVariableValue({
                                  key: 'all_food',
                                  value: minusFood(
                                    Constants['all_food'],
                                    listData?.title
                                  ),
                                });
                                setShown_food(
                                  filterFood(
                                    minusFood(
                                      Constants['all_food'],
                                      listData?.title
                                    ),
                                    selected_filter
                                  )
                                );
                              } catch (err) {
                                console.error(err);
                              }
                            }}
                            color={theme.colors['Primary Color']}
                            icon={'FontAwesome/minus-circle'}
                            size={24}
                          />
                        </View>

                        <Text
                          accessible={true}
                          {...GlobalStyles.TextStyles(theme)['Poppins'].props}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.TextStyles(theme)['Poppins'].style,
                              {
                                alignSelf: 'flex-end',
                                color: theme.colors['Primary Color'],
                                flex: 1,
                                fontFamily: 'Poppins_700Bold',
                                fontSize: 20,
                              }
                            ),
                            dimensions.width
                          )}
                        >
                          {listData?.quantity}
                        </Text>
                        {/* View 2 */}
                        <View>
                          <IconButton
                            onPress={() => {
                              try {
                                setGlobalVariableValue({
                                  key: 'all_food',
                                  value: addFood(
                                    Constants['all_food'],
                                    listData?.title
                                  ),
                                });
                                setShown_food(
                                  filterFood(
                                    addFood(
                                      Constants['all_food'],
                                      listData?.title
                                    ),
                                    selected_filter
                                  )
                                );
                              } catch (err) {
                                console.error(err);
                              }
                            }}
                            color={theme.colors['Primary Color']}
                            icon={'Entypo/circle-with-plus'}
                            size={24}
                          />
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </>
            );
          }}
          showsHorizontalScrollIndicator={true}
          showsVerticalScrollIndicator={true}
          scrollEnabled={false}
          style={StyleSheet.applyWidth(
            {
              backgroundColor: theme.colors['Custom Color_7'],
              gap: 6,
              marginBottom: 200,
            },
            dimensions.width
          )}
        />
      </SimpleStyleScrollView>

      <View
        style={StyleSheet.applyWidth(
          {
            backgroundColor: 'rgb(255, 255, 255)',
            bottom: 0,
            position: 'absolute',
            width: '100%',
          },
          dimensions.width
        )}
      >
        {/* Summary */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignContent: 'space-between',
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingBottom: 10,
              paddingLeft: 43,
              paddingRight: 43,
              paddingTop: 10,
            },
            dimensions.width
          )}
        >
          {/* quantity */}
          <View>
            <Text
              accessible={true}
              {...GlobalStyles.TextStyles(theme)['Poppins'].props}
              style={StyleSheet.applyWidth(
                GlobalStyles.TextStyles(theme)['Poppins'].style,
                dimensions.width
              )}
            >
              {'Item Dipilih'}
            </Text>
            {/* Text 2 */}
            <Text
              accessible={true}
              {...GlobalStyles.TextStyles(theme)['Poppins'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Poppins'].style,
                  {
                    color: theme.colors['Primary Color'],
                    fontFamily: 'Poppins_700Bold',
                    fontSize: 18,
                  }
                ),
                dimensions.width
              )}
            >
              {countQuantities(Constants['all_food'])}
              {' Item'}
            </Text>
          </View>
          {/* price */}
          <View>
            <Text
              accessible={true}
              {...GlobalStyles.TextStyles(theme)['Poppins'].props}
              style={StyleSheet.applyWidth(
                GlobalStyles.TextStyles(theme)['Poppins'].style,
                dimensions.width
              )}
            >
              {'Total Harga'}
            </Text>
            {/* Text 2 */}
            <Text
              accessible={true}
              {...GlobalStyles.TextStyles(theme)['Poppins'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Poppins'].style,
                  {
                    color: theme.colors['Primary Color'],
                    fontFamily: 'Poppins_700Bold',
                    fontSize: 18,
                  }
                ),
                dimensions.width
              )}
            >
              {'Rp '}
              {countPrice(Constants['all_food'])}
            </Text>
          </View>
        </View>
        {/* Button */}
        <View
          style={StyleSheet.applyWidth(
            {
              height: 100,
              paddingBottom: 16,
              paddingLeft: 27,
              paddingRight: 27,
              paddingTop: 16,
            },
            dimensions.width
          )}
        >
          <Pressable
            onPress={() => {
              try {
                if (countQuantities(Constants['all_food']) > 0) {
                  navigation.navigate('MfoodConfirmOrderScreen');
                }
              } catch (err) {
                console.error(err);
              }
            }}
          >
            <View
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: [
                    { minWidth: Breakpoints.Mobile, value: 'rgb(1, 83, 81)' },
                    {
                      minWidth: Breakpoints.Mobile,
                      value:
                        countQuantities(Constants['all_food']) > 0
                          ? theme.colors['Primary Color']
                          : theme.colors['Light'],
                    },
                  ],
                  borderRadius: 10,
                  paddingBottom: 14,
                  paddingTop: 14,
                },
                dimensions.width
              )}
            >
              <Text
                accessible={true}
                {...GlobalStyles.TextStyles(theme)['Poppins'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.TextStyles(theme)['Poppins'].style,
                    {
                      color: 'rgb(255, 255, 255)',
                      fontFamily: 'Poppins_700Bold',
                    }
                  ),
                  dimensions.width
                )}
              >
                {'Confirm Order'}
              </Text>
            </View>
          </Pressable>
        </View>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(MfoodMenuPageScreen);
