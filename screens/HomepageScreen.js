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
  Swiper,
  SwiperItem,
  TextInput,
  withTheme,
} from '@draftbit/ui';
import { Image, Text, View } from 'react-native';

const HomepageScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const [allMovies, setAllMovies] = React.useState([
    {
      id: 1,
      URL: 'https://www.garfield.movie/images/synopsis_poster.jpg',
      ats: true,
      name: 'THE GARFIELD MOVIE',
      genre: 'Horror, Drama',
      rating: '5',
      studio: '2D',
      ageGroup: 'SU',
    },
    {
      id: 2,
      URL: 'https://m.media-amazon.com/images/M/MV5BNjJkYmI1NTgtMzljNi00YTVmLTlmNDctNjY5Nzg3OWQzNjlkXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_UX140_CR0,0,140,209_AL_.jpg',
      ats: true,
      name: 'HAIKYUU! THE DUMPSTER BATTLE',
      genre: 'Animation',
      rating: '4',
      studio: '2D',
      ageGroup: 'SU',
    },
    {
      id: 3,
      URL: 'https://cdn.rri.co.id/berita/Pusat_Pemberitaan/o/1717359224195-q5zuer3yiy8ostd/ovvbq346px86nqm.jpeg',
      ats: true,
      name: 'VINA: SEBELUM 7 HARI',
      genre: 'Horror',
      rating: '4',
      studio: '2D',
      ageGroup: 'D17+',
    },
    {
      id: 4,
      URL: 'https://www.telkomsel.com/sites/default/files/2024-06/9.png',
      ats: true,
      name: 'HOW TO MAKE MILLIONS BEFORE GRANDMA DIES',
      genre: 'Drama, Family',
      rating: '5',
      studio: '2D',
      ageGroup: 'SU',
    },
  ]);
  const [shownMovies, setShownMovies] = React.useState([
    {
      id: 1,
      URL: 'https://www.garfield.movie/images/synopsis_poster.jpg',
      ats: true,
      name: 'THE GARFIELD MOVIE',
      genre: 'Horror, Drama',
      rating: '5',
      studio: '2D',
      ageGroup: 'SU',
    },
    {
      id: 2,
      URL: 'https://m.media-amazon.com/images/M/MV5BNjJkYmI1NTgtMzljNi00YTVmLTlmNDctNjY5Nzg3OWQzNjlkXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_UX140_CR0,0,140,209_AL_.jpg',
      ats: true,
      name: 'HAIKYUU! THE DUMPSTER BATTLE',
      genre: 'Animation',
      rating: '4',
      studio: '2D',
      ageGroup: 'SU',
    },
    {
      id: 3,
      URL: 'https://cdn.rri.co.id/berita/Pusat_Pemberitaan/o/1717359224195-q5zuer3yiy8ostd/ovvbq346px86nqm.jpeg',
      ats: true,
      name: 'VINA: SEBELUM 7 HARI',
      genre: 'Horror',
      rating: '4',
      studio: '2D',
      ageGroup: 'D17+',
    },
    {
      id: 4,
      URL: 'https://www.telkomsel.com/sites/default/files/2024-06/9.png',
      ats: true,
      name: 'HOW TO MAKE MILLIONS BEFORE GRANDMA DIES',
      genre: 'Drama, Family',
      rating: '5',
      studio: '2D',
      ageGroup: 'SU',
    },
  ]);
  const [textAreaValue, setTextAreaValue] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');
  const pressMovie = movieName => {
    if (movieName == 'VINA: SEBELUM 7 HARI') {
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
      <SimpleStyleScrollView
        bounces={true}
        horizontal={false}
        keyboardShouldPersistTaps={'never'}
        nestedScrollEnabled={false}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        style={StyleSheet.applyWidth(
          { flexWrap: 'nowrap', marginBottom: 50 },
          dimensions.width
        )}
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
                  setShownMovies(searchMovie(allMovies, textInputValue));
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
          <Icon
            size={24}
            color={theme.colors['Surface']}
            name={'AntDesign/mail'}
          />
          <Image
            resizeMode={'cover'}
            {...GlobalStyles.ImageStyles(theme)['Image'].props}
            source={Images.MdiVoucherOutline}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.ImageStyles(theme)['Image'].style,
                { height: 25, width: 28 }
              ),
              dimensions.width
            )}
          />
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

        <Swiper
          dotActiveColor={theme.colors.primary}
          dotColor={theme.colors.light}
          dotsTouchable={true}
          timeout={0}
          {...GlobalStyles.SwiperStyles(theme)['Swiper'].props}
          loop={true}
          minDistanceForAction={0.2}
          minDistanceToCapture={5}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.SwiperStyles(theme)['Swiper'].style,
              { borderStyle: null, height: 250 }
            ),
            dimensions.width
          )}
          vertical={false}
        >
          <SwiperItem>
            <View>
              <Image
                resizeMode={'cover'}
                {...GlobalStyles.ImageStyles(theme)['Image'].props}
                source={Images._165209081845156925x527}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ImageStyles(theme)['Image'].style,
                    { height: 250, width: '100%' }
                  ),
                  dimensions.width
                )}
              />
            </View>
          </SwiperItem>
          {/* Swiper Item 2 */}
          <SwiperItem>
            <View>
              {/* Image 2 */}
              <Image
                resizeMode={'cover'}
                {...GlobalStyles.ImageStyles(theme)['Image'].props}
                source={Images._163611499868136925x527}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ImageStyles(theme)['Image'].style,
                    { height: 250, width: '100%' }
                  ),
                  dimensions.width
                )}
              />
            </View>
          </SwiperItem>
          {/* Swiper Item 3 */}
          <SwiperItem>
            <View>
              {/* Image 2 */}
              <Image
                resizeMode={'cover'}
                {...GlobalStyles.ImageStyles(theme)['Image'].props}
                source={Images._163713930880381926x528}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ImageStyles(theme)['Image'].style,
                    { height: 250, width: '100%' }
                  ),
                  dimensions.width
                )}
              />
            </View>
          </SwiperItem>
        </Swiper>
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
          data={shownMovies}
          horizontal={false}
          inverted={false}
          keyExtractor={(listData, index) =>
            listData?.id ?? listData?.uuid ?? index.toString()
          }
          keyboardShouldPersistTaps={'never'}
          listKey={'aBR0dX1d'}
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
                      navigation.navigate('MovieDetails2Screen');
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
                      { gap: 5, maxWidth: 200 },
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

export default withTheme(HomepageScreen);
