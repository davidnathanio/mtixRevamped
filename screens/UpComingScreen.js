import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
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

const UpComingScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const [allUpcomingMovies, setAllUpcomingMovies] = React.useState([
    {
      id: 1,
      URL: 'https://m.media-amazon.com/images/M/MV5BMjQyZTVjZWQtM2VjNC00ZTgwLTk3MzktNzZkM2UxNzkzZjkxXkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_FMjpg_UX1000_.jpg',
      ats: false,
      name: 'DILAN 1983 WO AI NI',
      genre: 'Drama, Keluarga',
      rating: 'No Rating',
      studio: '2D',
      ageGroup: 'SU',
    },
    {
      id: 2,
      URL: 'https://media.21cineplex.com/webcontent/gallery/pictures/168680232744876_405x594.jpg',
      ats: false,
      name: 'GANGNAM ZOMBIE',
      genre: 'Horror',
      rating: 'No Rating',
      studio: '2D',
      ageGroup: 'R13+',
    },
    {
      id: 3,
      URL: 'https://asset.tix.id/wp-content/uploads/2024/06/cfe7ad72-3d6e-4700-83d4-314f0dd7343f.webp',
      ats: false,
      name: 'HARTA TAHTA RAISA',
      genre: 'No Genre',
      rating: 'No Rating',
      studio: '2D',
      ageGroup: 'SU',
    },
    {
      id: 4,
      URL: 'https://m.media-amazon.com/images/M/MV5BNWFmYTQ5ZGYtYmUzZS00MzE4LWJjYmYtMjQ5NmI3NDUwZmE1XkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_.jpg',
      ats: false,
      name: 'IPAR ADALAH MAUT',
      genre: 'No Genre',
      rating: 'No Rating',
      studio: '2D',
      ageGroup: 'SU',
    },
  ]);
  const [shownUpcomingMovies, setShownUpcomingMovies] = React.useState([
    {
      id: 1,
      URL: 'https://m.media-amazon.com/images/M/MV5BMjQyZTVjZWQtM2VjNC00ZTgwLTk3MzktNzZkM2UxNzkzZjkxXkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_FMjpg_UX1000_.jpg',
      ats: false,
      name: 'DILAN 1983 WO AI NI',
      genre: 'Drama, Keluarga',
      rating: 'No Rating',
      studio: '2D',
      ageGroup: 'SU',
    },
    {
      id: 2,
      URL: 'https://media.21cineplex.com/webcontent/gallery/pictures/168680232744876_405x594.jpg',
      ats: false,
      name: 'GANGNAM ZOMBIE',
      genre: 'Horror',
      rating: 'No Rating',
      studio: '2D',
      ageGroup: 'R13+',
    },
    {
      id: 3,
      URL: 'https://asset.tix.id/wp-content/uploads/2024/06/cfe7ad72-3d6e-4700-83d4-314f0dd7343f.webp',
      ats: false,
      name: 'HARTA TAHTA RAISA',
      genre: 'No Genre',
      rating: 'No Rating',
      studio: '2D',
      ageGroup: 'SU',
    },
    {
      id: 4,
      URL: 'https://m.media-amazon.com/images/M/MV5BNWFmYTQ5ZGYtYmUzZS00MzE4LWJjYmYtMjQ5NmI3NDUwZmE1XkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_.jpg',
      ats: false,
      name: 'IPAR ADALAH MAUT',
      genre: 'No Genre',
      rating: 'No Rating',
      studio: '2D',
      ageGroup: 'SU',
    },
  ]);
  const [textAreaValue, setTextAreaValue] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');
  const pressMovie = movieName => {
    if (movieName == 'DILAN 1983 WO AI NI') {
      return true;
    } else {
      return false;
    }
  };

  const searchMovie = (allData, searchText) => {
    return allData.filter(movie =>
      movie.name.toLowerCase().includes(searchText.toLowerCase())
    );
  };

  return (
    <ScreenContainer
      scrollable={false}
      hasSafeArea={true}
      hasTopSafeArea={true}
    >
      <View />
      <SimpleStyleScrollView
        bounces={true}
        horizontal={false}
        keyboardShouldPersistTaps={'never'}
        nestedScrollEnabled={false}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        style={StyleSheet.applyWidth({ flexWrap: 'nowrap' }, dimensions.width)}
      >
        {/* Header */}
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
                gap: 10,
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
              source={Images.XXIsvg1}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.ImageStyles(theme)['Image'].style,
                  { height: 14, marginLeft: 10, width: 36 }
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
                  setShownUpcomingMovies(
                    searchMovie(allUpcomingMovies, textInputValue)
                  );
                } catch (err) {
                  console.error(err);
                }
              }}
              webShowOutline={true}
              {...GlobalStyles.TextInputStyles(theme)['Text Input'].props}
              placeholder={'Cari Film'}
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
        {/* City Location */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignContent: 'flex-start',
              alignItems: 'center',
              alignSelf: 'auto',
              flexDirection: 'row',
              paddingBottom: 10,
              paddingLeft: 16,
              paddingRight: 16,
              paddingTop: 10,
            },
            dimensions.width
          )}
        >
          <Icon
            color={theme.colors['Primary Color']}
            name={'Ionicons/location-sharp'}
            size={16}
          />
          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['Text'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
                alignSelf: 'flex-start',
                color: theme.colors['Primary Color'],
                flex: 0,
                fontFamily: 'Poppins_600SemiBold',
                fontSize: 16,
                marginLeft: 14,
                marginRight: 10,
              }),
              dimensions.width
            )}
          >
            {'BANDUNG'}
          </Text>
          {/* Icon 2 */}
          <Icon
            color={theme.colors['Primary Color']}
            name={'Entypo/chevron-down'}
            size={16}
          />
        </View>
        {/* View 2 */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'flex-start',
              flex: 1,
              flexDirection: 'row',
              flexWrap: 'wrap',
              gap: 0,
              justifyContent: 'space-around',
              marginLeft: 16,
              marginRight: 16,
              marginTop: 20,
              paddingLeft: 0,
              paddingRight: 0,
            },
            dimensions.width
          )}
        />
        <SimpleStyleFlatList
          data={shownUpcomingMovies}
          horizontal={false}
          inverted={false}
          keyExtractor={(listData, index) =>
            listData?.id ?? listData?.uuid ?? index.toString()
          }
          keyboardShouldPersistTaps={'never'}
          listKey={'bgS1WJSZ'}
          nestedScrollEnabled={false}
          numColumns={1}
          onEndReachedThreshold={0.5}
          renderItem={({ item, index }) => {
            const listData = item;
            return (
              <Pressable
                onPress={() => {
                  try {
                    if (pressMovie(listData?.name)) {
                      navigation.navigate('MovieDetailsUpcomingScreen');
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
                      alignSelf: 'center',
                      flex: 1,
                      flexDirection: 'column',
                      justifyContent: 'flex-start',
                    },
                    dimensions.width
                  )}
                >
                  <Image
                    resizeMode={'cover'}
                    {...GlobalStyles.ImageStyles(theme)['Image'].props}
                    source={{ uri: `${listData?.URL}` }}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.ImageStyles(theme)['Image'].style,
                        { borderRadius: 10, height: 265, width: 174 }
                      ),
                      dimensions.width
                    )}
                  />
                  {/* Movie Details */}
                  <View
                    style={StyleSheet.applyWidth(
                      { gap: 5, maxWidth: 180 },
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
                            fontFamily: 'Poppins_700Bold',
                            fontSize: 18,
                            textAlign: 'center',
                          }
                        ),
                        dimensions.width
                      )}
                    >
                      {listData?.name}
                    </Text>
                    {/* Category */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          flexDirection: 'row',
                          gap: 10,
                          justifyContent: 'center',
                        },
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
                          {'SU'}
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
                            fontSize: 14,
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
                            fontSize: 16,
                          }
                        ),
                        dimensions.width
                      )}
                    >
                      {'★ 3,7'}
                    </Text>
                    {/* View 3 */}
                    <>
                      {!listData?.ats ? null : (
                        <View
                          style={StyleSheet.applyWidth(
                            {
                              alignContent: 'flex-start',
                              alignItems: 'center',
                              alignSelf: 'center',
                              backgroundColor: 'rgb(246, 53, 53)',
                              borderBottomLeftRadius: 5,
                              borderBottomRightRadius: 5,
                              borderTopLeftRadius: 5,
                              borderTopRightRadius: 5,
                              flexWrap: 'nowrap',
                              justifyContent: 'flex-start',
                              paddingBottom: 3,
                              paddingLeft: 10,
                              paddingRight: 10,
                              paddingTop: 3,
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
                                  fontSize: 12,
                                }
                              ),
                              dimensions.width
                            )}
                          >
                            {'ADVANCED TICKET SALES'}
                          </Text>
                        </View>
                      )}
                    </>
                  </View>
                </View>
              </Pressable>
            );
          }}
          showsHorizontalScrollIndicator={true}
          showsVerticalScrollIndicator={true}
          style={StyleSheet.applyWidth(
            {
              flexDirection: 'row',
              flexWrap: 'wrap',
              gap: 20,
              justifyContent: 'space-between',
              marginLeft: 16,
              marginRight: 16,
            },
            dimensions.width
          )}
        />
      </SimpleStyleScrollView>
    </ScreenContainer>
  );
};

export default withTheme(UpComingScreen);
