import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import CityLocationBlock from '../components/CityLocationBlock';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import selectedFilterColorGlobal from '../global-functions/selectedFilterColorGlobal';
import selectedFilterTextColorGlobal from '../global-functions/selectedFilterTextColorGlobal';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  Icon,
  Pressable,
  ScreenContainer,
  SimpleStyleFlatList,
  SimpleStyleScrollView,
  TextInput,
  withTheme,
} from '@draftbit/ui';
import { Image, Text, View } from 'react-native';

const MfoodScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const [allTheaters, setAllTheaters] = React.useState([
    { id: 1, type: 'xxi', theater: 'BRAGA XXI' },
    { id: 2, type: 'xxi', theater: 'CIWALK XXI' },
    { id: 3, type: 'the premiere', theater: 'CIWALK PREMIERE' },
    { id: 4, type: 'xxi', theater: "D'BOTANICA XXI" },
    { id: 5, type: 'xxi', theater: 'SUMMARECON MALL BANDUNG XXI' },
    {
      id: 6,
      type: 'the premiere',
      theater: 'SUMMARECON MALL BANDUNG PREMIERE',
    },
    { id: 7, type: 'imax', theater: 'SUMMARECON MALL BANDUNG IMAX' },
  ]);
  const [all_schedules, setAll_schedules] = React.useState([]);
  const [selected_filter, setSelected_filter] = React.useState('semua');
  const [shownTheaters, setShownTheaters] = React.useState([
    { id: 1, type: 'xxi', theater: 'BRAGA XXI' },
    { id: 2, type: 'xxi', theater: 'CIWALK XXI' },
    { id: 3, type: 'the premiere', theater: 'CIWALK PREMIERE' },
    { id: 4, type: 'xxi', theater: "D'BOTANICA XXI" },
    { id: 5, type: 'xxi', theater: 'SUMMARECON MALL BANDUNG XXI' },
    {
      id: 6,
      type: 'the premiere',
      theater: 'SUMMARECON MALL BANDUNG PREMIERE',
    },
    { id: 7, type: 'imax', theater: 'SUMMARECON MALL BANDUNG IMAX' },
  ]);
  const [textInputValue, setTextInputValue] = React.useState('');
  const searchAndFilter = (allTheaters, searchValue, filterValue) => {
    // Type the code for the body of your function or hook here.
    // Functions can be triggered via Button/Touchable actions.
    // Hooks are run per ReactJS rules.

    /* String line breaks are accomplished with backticks ( example: `line one
line two` ) and will not work with special characters inside of quotes ( example: "line one line two" ) */

    let searchedTheater = allTheaters.filter(theaters =>
      theaters.theater.toLowerCase().includes(searchValue.toLowerCase())
    );

    return searchedTheater.filter(
      theaters => filterValue == 'semua' || theaters.type == filterValue
    );
  };

  const pressTheater = theaterName => {
    if (theaterName == 'BRAGA XXI') {
      return true;
    } else {
      return false;
    }
  };

  return (
    <ScreenContainer
      hasSafeArea={false}
      scrollable={false}
      hasTopSafeArea={true}
    >
      {/* Header with Search */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            alignSelf: 'stretch',
            backgroundColor: theme.colors['Primary Color'],
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: 20,
            justifyContent: 'flex-start',
            paddingBottom: 13,
            paddingLeft: 16,
            paddingRight: 16,
            paddingTop: 13,
          },
          dimensions.width
        )}
      >
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              alignSelf: 'auto',
              backgroundColor: theme.colors['Surface'],
              borderColor: 'rgb(189, 151, 89)',
              borderRadius: 10,
              borderWidth: 2,
              flex: 1,
              flexDirection: 'row',
              gap: 5,
              height: 44,
              justifyContent: 'flex-start',
              width: 244,
            },
            dimensions.width
          )}
        >
          <Image
            resizeMode={'cover'}
            {...GlobalStyles.ImageStyles(theme)['Image'].props}
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6gygHHDsC7919ePjh5d_0qP1UG1gn26TQpA&s',
            }}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.ImageStyles(theme)['Image'].style,
                { height: 24, marginLeft: 10, width: 46 }
              ),
              dimensions.width
            )}
          />
          <TextInput
            autoCapitalize={'none'}
            autoCorrect={true}
            changeTextDelay={500}
            onChangeText={newTextInputValue => {
              const textInputValue = newTextInputValue;
              try {
                setTextInputValue(newTextInputValue);
                setShownTheaters(
                  searchAndFilter(allTheaters, textInputValue, selected_filter)
                );
              } catch (err) {
                console.error(err);
              }
            }}
            webShowOutline={true}
            {...GlobalStyles.TextInputStyles(theme)['Text Input'].props}
            placeholder={'Cari Bioskop'}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.TextInputStyles(theme)['Text Input'].style,
                {
                  alignSelf: 'stretch',
                  borderBottomWidth: 0,
                  borderLeftWidth: 0,
                  borderRadius: null,
                  borderRightWidth: 0,
                  borderTopWidth: 0,
                  borderWidth: 0,
                  color: theme.colors['Custom Color_6'],
                  fontFamily: 'Poppins_400Regular',
                  fontSize: 16,
                  textAlign: 'left',
                }
              ),
              dimensions.width
            )}
            value={textInputValue}
          />
        </View>
      </View>
      <CityLocationBlock />
      {/* CinemaFilter */}
      <View
        style={StyleSheet.applyWidth(
          {
            flexDirection: 'row',
            flexWrap: 'nowrap',
            gap: 5,
            marginBottom: 10,
            marginLeft: 16,
            marginTop: 10,
          },
          dimensions.width
        )}
      >
        {/* Favorites */}
        <Pressable
          onPress={() => {
            try {
              setSelected_filter('favorites');
            } catch (err) {
              console.error(err);
            }
          }}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                backgroundColor: [
                  { minWidth: Breakpoints.Mobile, value: 'rgb(255, 255, 255)' },
                  {
                    minWidth: Breakpoints.Mobile,
                    value: selectedFilterColorGlobal(
                      'favorites',
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
                          'favorites',
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
              {'Favorites'}
            </Text>
          </View>
        </Pressable>
        {/* Semua */}
        <Pressable
          onPress={() => {
            try {
              setSelected_filter('semua');
              setShownTheaters(
                searchAndFilter(allTheaters, textInputValue, 'semua')
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
                  { minWidth: Breakpoints.Mobile, value: 'rgb(255, 255, 255)' },
                  {
                    minWidth: Breakpoints.Mobile,
                    value: selectedFilterColorGlobal('semua', selected_filter),
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
        {/* XXI */}
        <Pressable
          onPress={() => {
            try {
              setSelected_filter('xxi');
              setShownTheaters(
                searchAndFilter(allTheaters, textInputValue, 'xxi')
              );
            } catch (err) {
              console.error(err);
            }
          }}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                backgroundColor: selectedFilterColorGlobal(
                  'xxi',
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
                        value: selectedFilterTextColorGlobal(
                          'xxi',
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
              {'XXI'}
            </Text>
          </View>
        </Pressable>
        {/* The Premiere */}
        <Pressable
          onPress={() => {
            try {
              setSelected_filter('the premiere');
              setShownTheaters(
                searchAndFilter(allTheaters, textInputValue, 'the premiere')
              );
            } catch (err) {
              console.error(err);
            }
          }}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                backgroundColor: selectedFilterColorGlobal(
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
                        value: selectedFilterTextColorGlobal(
                          'the premiere',
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
              {'The Premiere'}
            </Text>
          </View>
        </Pressable>
        {/* IMAX */}
        <Pressable
          onPress={() => {
            try {
              setSelected_filter('imax');
              setShownTheaters(
                searchAndFilter(allTheaters, textInputValue, 'imax')
              );
            } catch (err) {
              console.error(err);
            }
          }}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                backgroundColor: selectedFilterColorGlobal(
                  'imax',
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
                        value: theme.colors['Surface'],
                      },
                      {
                        minWidth: Breakpoints.Mobile,
                        value: selectedFilterTextColorGlobal(
                          'imax',
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
              {'IMAX'}
            </Text>
          </View>
        </Pressable>
      </View>

      <SimpleStyleScrollView
        bounces={true}
        horizontal={false}
        keyboardShouldPersistTaps={'never'}
        nestedScrollEnabled={false}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        style={StyleSheet.applyWidth(
          { paddingLeft: 16, paddingRight: 16 },
          dimensions.width
        )}
      >
        <SimpleStyleFlatList
          data={shownTheaters}
          horizontal={false}
          inverted={false}
          keyExtractor={(listData, index) =>
            listData?.id ?? listData?.uuid ?? index.toString()
          }
          keyboardShouldPersistTaps={'never'}
          listKey={'AJGOkg7s'}
          nestedScrollEnabled={false}
          numColumns={1}
          onEndReachedThreshold={0.5}
          renderItem={({ item, index }) => {
            const listData = item;
            return (
              <Pressable
                onPress={() => {
                  try {
                    if (pressTheater(listData?.theater)) {
                      navigation.navigate('MfoodMenuPageScreen');
                    }
                  } catch (err) {
                    console.error(err);
                  }
                }}
              >
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      borderBottomWidth: 1,
                      flexDirection: 'row',
                      gap: 25,
                      paddingBottom: 15,
                      paddingTop: 15,
                    },
                    dimensions.width
                  )}
                >
                  <Image
                    resizeMode={'cover'}
                    {...GlobalStyles.ImageStyles(theme)['Image'].props}
                    source={Images.Image20}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.ImageStyles(theme)['Image'].style,
                        { height: 35, width: 35 }
                      ),
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
                          color: theme.colors['Text'],
                          flex: 1,
                          fontFamily: 'Poppins_500Medium',
                          fontSize: 18,
                          textAlign: 'left',
                        }
                      ),
                      dimensions.width
                    )}
                  >
                    {listData?.theater}
                  </Text>
                  <Icon
                    size={24}
                    color={theme.colors['Text']}
                    name={'Entypo/chevron-right'}
                  />
                </View>
              </Pressable>
            );
          }}
          showsHorizontalScrollIndicator={true}
          showsVerticalScrollIndicator={true}
        />
      </SimpleStyleScrollView>
    </ScreenContainer>
  );
};

export default withTheme(MfoodScreen);
