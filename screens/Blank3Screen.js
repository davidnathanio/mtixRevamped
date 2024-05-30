import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  Button,
  Icon,
  Pressable,
  ScreenContainer,
  SimpleStyleScrollView,
  VideoPlayer,
  withTheme,
} from '@draftbit/ui';
import { Image, Text, View } from 'react-native';

const Blank3Screen = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const [ButtonText, setButtonText] = React.useState('Show More');
  const [showText, setShowText] = React.useState(false);

  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
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
            { backgroundColor: theme.colors['Surface'], paddingBottom: 10 },
            dimensions.width
          )}
        >
          {/* Video */}
          <View>
            <Pressable>
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    alignSelf: 'flex-start',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    marginLeft: 16,
                    position: 'absolute',
                    top: 0,
                    zIndex: 1,
                  },
                  dimensions.width
                )}
              >
                <Icon
                  size={24}
                  color={theme.colors['Error']}
                  name={'MaterialIcons/arrow-back'}
                />
              </View>
            </Pressable>
            <VideoPlayer
              isLooping={false}
              isMuted={false}
              posterResizeMode={'cover'}
              rate={1}
              resizeMode={'cover'}
              shouldPlay={false}
              source={{
                uri: 'https://static.draftbit.com/videos/intro-to-draftbit.mp4',
              }}
              useNativeControls={true}
              usePoster={false}
              volume={0.5}
              {...GlobalStyles.VideoPlayerStyles(theme)['Video'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.VideoPlayerStyles(theme)['Video'].style,
                  { marginBottom: 20 }
                ),
                dimensions.width
              )}
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
                        color: theme.colors['Custom Color_10'],
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
                        color: theme.colors['Custom Color_10'],
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
    </ScreenContainer>
  );
};

export default withTheme(Blank3Screen);
