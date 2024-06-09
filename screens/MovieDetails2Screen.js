import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  Button,
  Divider,
  Icon,
  Pressable,
  ScreenContainer,
  SimpleStyleScrollView,
  YoutubePlayer,
  withTheme,
} from '@draftbit/ui';
import { Image, Text, View } from 'react-native';

const MovieDetails2Screen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const [ButtonText, setButtonText] = React.useState('Show More');
  const [showModal, setShowModal] = React.useState(false);
  const [showText, setShowText] = React.useState(false);
  const [starRatingValue, setStarRatingValue] = React.useState(3.5);

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
        style={StyleSheet.applyWidth(
          { backgroundColor: 'rgb(237, 237, 237)', gap: 6 },
          dimensions.width
        )}
      >
        {/* Content 1 */}
        <View
          style={StyleSheet.applyWidth(
            {
              backgroundColor: theme.colors['Surface'],
              gap: 20,
              paddingBottom: 10,
            },
            dimensions.width
          )}
        >
          {/* Video */}
          <View>
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  borderRadius: 50,
                  borderWidth: 0,
                  justifyContent: 'center',
                  marginLeft: 15,
                  minHeight: 30,
                  minWidth: 30,
                  paddingBottom: 5,
                  paddingLeft: 5,
                  paddingRight: 5,
                  paddingTop: 5,
                  position: 'absolute',
                  top: 10,
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
              >
                <Icon
                  size={24}
                  color={theme.colors['Strong Inverse']}
                  name={'MaterialIcons/arrow-back'}
                />
              </Pressable>
            </View>
            <YoutubePlayer
              autoplay={false}
              {...GlobalStyles.YoutubePlayerStyles(theme)['Youtube Player']
                .props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.YoutubePlayerStyles(theme)['Youtube Player']
                    .style,
                  { width: '100%' }
                ),
                dimensions.width
              )}
              videoId={'DGcJFwFMj9Q'}
            />
          </View>
          {/* moviedetails */}
          <View
            style={StyleSheet.applyWidth(
              {
                flexDirection: 'row',
                gap: 20,
                marginLeft: 16,
                marginRight: 16,
              },
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
                  { borderRadius: 10, height: 240, width: 157 }
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
                    {
                      alignSelf: 'center',
                      flex: 0,
                      fontFamily: 'Poppins_700Bold',
                      fontSize: 18,
                      textAlign: 'center',
                    }
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
                      paddingBottom: 20,
                    }
                  ),
                  dimensions.width
                )}
              >
                {'Horror, Drama'}
              </Text>
              {/* Details */}
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'stretch',
                    flex: 1,
                    flexDirection: 'column',
                    gap: 15,
                    justifyContent: 'flex-start',
                  },
                  dimensions.width
                )}
              >
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignSelf: 'flex-start',
                      flex: 0,
                      flexDirection: 'row',
                      gap: 0,
                      justifyContent: 'flex-start',
                    },
                    dimensions.width
                  )}
                >
                  {/* Parent */}
                  <Text
                    accessible={true}
                    {...GlobalStyles.TextStyles(theme)['Text'].props}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Text'].style,
                        {
                          fontFamily: 'Poppins_700Bold',
                          fontSize: 16,
                          textAlign: 'center',
                        }
                      ),
                      dimensions.width
                    )}
                  >
                    {'Producer'}
                  </Text>
                  {/* Child */}
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
                    {'Dheeraj Kalwani'}
                  </Text>
                </View>
                {/* View 2 */}
                <View
                  style={StyleSheet.applyWidth(
                    {
                      flex: 0,
                      flexDirection: 'row',
                      gap: 0,
                      justifyContent: 'flex-start',
                    },
                    dimensions.width
                  )}
                >
                  {/* Parent */}
                  <Text
                    accessible={true}
                    {...GlobalStyles.TextStyles(theme)['Text'].props}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Text'].style,
                        {
                          fontFamily: 'Poppins_700Bold',
                          fontSize: 16,
                          textAlign: 'center',
                        }
                      ),
                      dimensions.width
                    )}
                  >
                    {'Director'}
                  </Text>
                  {/* Child */}
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
                    {'Dheeraj Kalwani'}
                  </Text>
                </View>
                {/* View 3 */}
                <View
                  style={StyleSheet.applyWidth(
                    {
                      flex: 0,
                      flexDirection: 'row',
                      gap: 0,
                      justifyContent: 'flex-start',
                    },
                    dimensions.width
                  )}
                >
                  {/* Parent */}
                  <Text
                    accessible={true}
                    {...GlobalStyles.TextStyles(theme)['Text'].props}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Text'].style,
                        {
                          fontFamily: 'Poppins_700Bold',
                          fontSize: 16,
                          textAlign: 'center',
                        }
                      ),
                      dimensions.width
                    )}
                  >
                    {'Writer'}
                  </Text>
                  {/* Child */}
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
                    {'Dheeraj Kalwani'}
                  </Text>
                </View>
                {/* View 4 */}
                <View
                  style={StyleSheet.applyWidth(
                    {
                      flex: 0,
                      flexDirection: 'row',
                      gap: 0,
                      justifyContent: 'flex-start',
                    },
                    dimensions.width
                  )}
                >
                  {/* Parent */}
                  <Text
                    accessible={true}
                    {...GlobalStyles.TextStyles(theme)['Text'].props}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Text'].style,
                        {
                          fontFamily: 'Poppins_700Bold',
                          fontSize: 16,
                          textAlign: 'center',
                        }
                      ),
                      dimensions.width
                    )}
                  >
                    {'Writer'}
                  </Text>
                  {/* Child */}
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
                    {'Dheeraj Kalwani'}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        {/* Review */}
        <View
          style={StyleSheet.applyWidth(
            {
              backgroundColor: theme.colors['Surface'],
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginLeft: 0,
              marginRight: 0,
              paddingBottom: 10,
              paddingLeft: 16,
              paddingRight: 16,
              paddingTop: 10,
            },
            dimensions.width
          )}
        >
          <View
            style={StyleSheet.applyWidth(
              { alignItems: 'stretch', flexDirection: 'row', gap: 10 },
              dimensions.width
            )}
          >
            <View
              style={StyleSheet.applyWidth(
                { justifyContent: 'center' },
                dimensions.width
              )}
            >
              <Icon
                color={theme.colors['Rating']}
                name={'FontAwesome/star'}
                size={36}
              />
            </View>

            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center', gap: 0 },
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
                      alignSelf: 'flex-start',
                      color: theme.colors['Strong'],
                      fontFamily: 'Poppins_700Bold',
                    }
                  ),
                  dimensions.width
                )}
              >
                {'Rating'}
              </Text>
              {/* Text 2 */}
              <Text
                accessible={true}
                {...GlobalStyles.TextStyles(theme)['Poppins'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.TextStyles(theme)['Poppins'].style,
                    {
                      alignSelf: 'center',
                      color: theme.colors['Rating'],
                      fontFamily: 'Poppins_700Bold',
                      fontSize: 20,
                    }
                  ),
                  dimensions.width
                )}
              >
                {'4,5'}
              </Text>
            </View>
            {/* View 2 */}
            <View
              style={StyleSheet.applyWidth(
                { justifyContent: 'flex-end' },
                dimensions.width
              )}
            >
              <Pressable
                onPress={() => {
                  try {
                    navigation.navigate('ReviewPageScreen');
                  } catch (err) {
                    console.error(err);
                  }
                }}
              >
                <Text
                  accessible={true}
                  {...GlobalStyles.TextStyles(theme)['Poppins'].props}
                  style={StyleSheet.applyWidth(
                    GlobalStyles.TextStyles(theme)['Poppins'].style,
                    dimensions.width
                  )}
                >
                  {'See Reviews'}
                </Text>
              </Pressable>
            </View>
          </View>
          {/* View 2 */}
          <View />
          {/* View 2 */}
          <View
            style={StyleSheet.applyWidth(
              { justifyContent: 'center' },
              dimensions.width
            )}
          >
            <Pressable
              onPress={() => {
                try {
                  navigation.navigate('MovieScheduleScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    alignSelf: 'auto',
                    flexDirection: 'row',
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
                        color: theme.colors['Secondary Color'],
                        fontFamily: 'Poppins_700Bold',
                        fontSize: 18,
                      }
                    ),
                    dimensions.width
                  )}
                >
                  {'Playing At'}
                </Text>
                <Icon
                  size={24}
                  color={theme.colors['Secondary Color']}
                  name={'Entypo/chevron-right'}
                />
              </View>
            </Pressable>
          </View>
        </View>
        {/* Content 2 */}
        <View
          style={StyleSheet.applyWidth(
            {
              backgroundColor: theme.colors['Surface'],
              gap: 10,
              paddingBottom: 10,
              paddingLeft: 16,
              paddingRight: 16,
              paddingTop: 10,
            },
            dimensions.width
          )}
        >
          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['Text'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
                fontFamily: 'Poppins_700Bold',
                fontSize: 16,
              }),
              dimensions.width
            )}
          >
            {'Synopsis'}
          </Text>

          <View>
            <>
              {showText ? null : (
                <Text
                  accessible={true}
                  {...GlobalStyles.TextStyles(theme)['Text'].props}
                  ellipsizeMode={'tail'}
                  numberOfLines={3}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.TextStyles(theme)['Text'].style,
                      { fontFamily: 'Poppins_400Regular' }
                    ),
                    dimensions.width
                  )}
                >
                  {
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                  }
                </Text>
              )}
            </>
            {/* Text 2 */}
            <>
              {!showText ? null : (
                <Text
                  accessible={true}
                  {...GlobalStyles.TextStyles(theme)['Text'].props}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.TextStyles(theme)['Text'].style,
                      { fontFamily: 'Poppins_400Regular' }
                    ),
                    dimensions.width
                  )}
                >
                  {
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                  }
                </Text>
              )}
            </>
            <>
              {showText ? null : (
                <Button
                  iconPosition={'left'}
                  onPress={() => {
                    try {
                      setShowText(!showText);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  {...GlobalStyles.ButtonStyles(theme)['Button'].props}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.ButtonStyles(theme)['Button'].style,
                      {
                        backgroundColor: 'rgba(0, 0, 0, 0)',
                        color: theme.colors['Primary Color'],
                        fontFamily: 'Poppins_700Bold',
                        fontSize: 16,
                      }
                    ),
                    dimensions.width
                  )}
                  title={'READ MORE'}
                />
              )}
            </>
            {/* Button 2 */}
            <>
              {!showText ? null : (
                <Button
                  iconPosition={'left'}
                  onPress={() => {
                    try {
                      setShowText(!showText);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  {...GlobalStyles.ButtonStyles(theme)['Button'].props}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.ButtonStyles(theme)['Button'].style,
                      {
                        backgroundColor: 'rgba(0, 0, 0, 0)',
                        color: theme.colors['Primary Color'],
                        fontFamily: 'Poppins_700Bold',
                        fontSize: 16,
                      }
                    ),
                    dimensions.width
                  )}
                  title={'SHOW LESS'}
                />
              )}
            </>
          </View>
        </View>
        {/* Content 3 */}
        <View
          style={StyleSheet.applyWidth(
            {
              backgroundColor: theme.colors['Surface'],
              gap: 10,
              paddingBottom: 10,
              paddingLeft: 16,
              paddingRight: 16,
              paddingTop: 10,
            },
            dimensions.width
          )}
        >
          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['Text'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
                fontFamily: 'Poppins_700Bold',
                fontSize: 16,
              }),
              dimensions.width
            )}
          >
            {'Cast'}
          </Text>
          {/* Actor List */}
          <SimpleStyleScrollView
            bounces={true}
            keyboardShouldPersistTaps={'never'}
            nestedScrollEnabled={false}
            showsHorizontalScrollIndicator={true}
            showsVerticalScrollIndicator={true}
            horizontal={true}
            style={StyleSheet.applyWidth(
              { flexDirection: 'row' },
              dimensions.width
            )}
          >
            {/* Actor  */}
            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center', gap: 5, width: 100 },
                dimensions.width
              )}
            >
              <Image
                resizeMode={'cover'}
                {...GlobalStyles.ImageStyles(theme)['Image'].props}
                source={{
                  uri: 'https://ffis3.is3.cloudhost.id/profile/photo/416/Anggy-Umbara.jpg',
                }}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ImageStyles(theme)['Image'].style,
                    { borderRadius: 5, height: 85, width: 70 }
                  ),
                  dimensions.width
                )}
              />
              {/* Anggy Umbara */}
              <Text
                accessible={true}
                {...GlobalStyles.TextStyles(theme)['Poppins'].props}
                style={StyleSheet.applyWidth(
                  GlobalStyles.TextStyles(theme)['Poppins'].style,
                  dimensions.width
                )}
              >
                {'Anggy Umbara'}
              </Text>
            </View>
            <Divider
              color={theme.colors.divider}
              {...GlobalStyles.DividerStyles(theme)['Divider'].props}
              style={StyleSheet.applyWidth(
                GlobalStyles.DividerStyles(theme)['Divider'].style,
                dimensions.width
              )}
            />
            {/* Actor  2 */}
            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center', gap: 5, width: 100 },
                dimensions.width
              )}
            >
              <Image
                resizeMode={'cover'}
                {...GlobalStyles.ImageStyles(theme)['Image'].props}
                source={{
                  uri: 'https://ffis3.is3.cloudhost.id/profile/photo/416/Anggy-Umbara.jpg',
                }}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ImageStyles(theme)['Image'].style,
                    { borderRadius: 5, height: 85, width: 70 }
                  ),
                  dimensions.width
                )}
              />
              {/* Anggy Umbara */}
              <Text
                accessible={true}
                {...GlobalStyles.TextStyles(theme)['Poppins'].props}
                style={StyleSheet.applyWidth(
                  GlobalStyles.TextStyles(theme)['Poppins'].style,
                  dimensions.width
                )}
              >
                {'Anggy Umbara'}
              </Text>
            </View>
            {/* Actor  3 */}
            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center', gap: 5, width: 100 },
                dimensions.width
              )}
            >
              <Image
                resizeMode={'cover'}
                {...GlobalStyles.ImageStyles(theme)['Image'].props}
                source={{
                  uri: 'https://ffis3.is3.cloudhost.id/profile/photo/416/Anggy-Umbara.jpg',
                }}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ImageStyles(theme)['Image'].style,
                    { borderRadius: 5, height: 85, width: 70 }
                  ),
                  dimensions.width
                )}
              />
              {/* Anggy Umbara */}
              <Text
                accessible={true}
                {...GlobalStyles.TextStyles(theme)['Poppins'].props}
                style={StyleSheet.applyWidth(
                  GlobalStyles.TextStyles(theme)['Poppins'].style,
                  dimensions.width
                )}
              >
                {'Anggy Umbara'}
              </Text>
            </View>
            {/* Actor  4 */}
            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center', gap: 5, width: 100 },
                dimensions.width
              )}
            >
              <Image
                resizeMode={'cover'}
                {...GlobalStyles.ImageStyles(theme)['Image'].props}
                source={{
                  uri: 'https://ffis3.is3.cloudhost.id/profile/photo/416/Anggy-Umbara.jpg',
                }}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ImageStyles(theme)['Image'].style,
                    { borderRadius: 5, height: 85, width: 70 }
                  ),
                  dimensions.width
                )}
              />
              {/* Anggy Umbara */}
              <Text
                accessible={true}
                {...GlobalStyles.TextStyles(theme)['Poppins'].props}
                style={StyleSheet.applyWidth(
                  GlobalStyles.TextStyles(theme)['Poppins'].style,
                  dimensions.width
                )}
              >
                {'Anggy Umbara'}
              </Text>
            </View>
            {/* Actor  5 */}
            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center', gap: 5, width: 100 },
                dimensions.width
              )}
            >
              <Image
                resizeMode={'cover'}
                {...GlobalStyles.ImageStyles(theme)['Image'].props}
                source={{
                  uri: 'https://ffis3.is3.cloudhost.id/profile/photo/416/Anggy-Umbara.jpg',
                }}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ImageStyles(theme)['Image'].style,
                    { borderRadius: 5, height: 85, width: 70 }
                  ),
                  dimensions.width
                )}
              />
              {/* Anggy Umbara */}
              <Text
                accessible={true}
                {...GlobalStyles.TextStyles(theme)['Poppins'].props}
                style={StyleSheet.applyWidth(
                  GlobalStyles.TextStyles(theme)['Poppins'].style,
                  dimensions.width
                )}
              >
                {'Anggy Umbara'}
              </Text>
            </View>
          </SimpleStyleScrollView>
        </View>
      </SimpleStyleScrollView>
      {/* CTA Button */}
      <View
        style={StyleSheet.applyWidth(
          {
            height: 100,
            paddingBottom: 16,
            paddingLeft: 9,
            paddingRight: 9,
            paddingTop: 16,
          },
          dimensions.width
        )}
      >
        <Pressable
          onPress={() => {
            try {
              navigation.navigate('MovieScheduleScreen');
            } catch (err) {
              console.error(err);
            }
          }}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                backgroundColor: 'rgb(1, 83, 81)',
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
                  { color: 'rgb(255, 255, 255)', fontFamily: 'Poppins_700Bold' }
                ),
                dimensions.width
              )}
            >
              {'Buy Ticket'}
            </Text>
          </View>
        </Pressable>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(MovieDetails2Screen);
