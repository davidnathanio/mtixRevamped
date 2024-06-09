import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import intToPrice from '../global-functions/intToPrice';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  Divider,
  Icon,
  Pressable,
  ScreenContainer,
  SimpleStyleFlatList,
  withTheme,
} from '@draftbit/ui';
import { Image, Modal, Text, View } from 'react-native';

const MfoodConfirmOrderScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const [selected_filter, setSelected_filter] = React.useState('');
  const [showConfirmationModal, setShowConfirmationModal] =
    React.useState(false);
  const [showReviewModal, setShowReviewModal] = React.useState(false);
  const [starRatingValue2, setStarRatingValue2] = React.useState(0);
  const [textAreaValue, setTextAreaValue] = React.useState('');
  const multiply = (quantity, price) => {
    // Type the code for the body of your function or hook here.
    // Functions can be triggered via Button/Touchable actions.
    // Hooks are run per ReactJS rules.

    /* String line breaks are accomplished with backticks ( example: `line one
line two` ) and will not work with special characters inside of quotes ( example: "line one line two" ) */
    return Math.round(quantity * price);
  };

  const boughtFood = allFood => {
    return allFood.filter(item => item.quantity > 0);
  };

  const countPrice = allFood => {
    // Type the code for the body of your function or hook here.
    // Functions can be triggered via Button/Touchable actions.
    // Hooks are run per ReactJS rules.

    const totalPrice = allFood.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    return Math.round(totalPrice);
  };

  return (
    <ScreenContainer
      hasSafeArea={false}
      scrollable={false}
      hasTopSafeArea={true}
    >
      {/* header */}
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
            { position: 'absolute', zIndex: 2 },
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
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  alignSelf: 'flex-start',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  marginLeft: 16,
                  position: 'relative',
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
          {'Order Confirmation'}
        </Text>
      </View>
      <SimpleStyleFlatList
        data={boughtFood(Constants['all_food'])}
        horizontal={false}
        inverted={false}
        keyExtractor={(listData, index) =>
          listData?.id ?? listData?.uuid ?? index.toString()
        }
        keyboardShouldPersistTaps={'never'}
        listKey={'cHz6UZGS'}
        nestedScrollEnabled={false}
        numColumns={1}
        onEndReachedThreshold={0.5}
        renderItem={({ item, index }) => {
          const listData = item;
          return (
            <>
              {/* food details */}
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
                  <View
                    style={StyleSheet.applyWidth(
                      { flexDirection: 'row', justifyContent: 'space-between' },
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
                    {/* quantity */}
                    <Text
                      accessible={true}
                      {...GlobalStyles.TextStyles(theme)['Poppins'].props}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TextStyles(theme)['Poppins'].style,
                          {
                            color: theme.colors['Medium'],
                            fontFamily: 'Poppins_700Bold',
                            fontSize: 16,
                            marginLeft: 10,
                          }
                        ),
                        dimensions.width
                      )}
                    >
                      {'x'}
                      {listData?.quantity}
                    </Text>
                  </View>
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
                  {/* harga */}
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        flexDirection: 'row',
                        marginTop: 45,
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
                            color: theme.colors['Primary Color'],
                            fontFamily: 'Poppins_700Bold',
                            fontSize: 18,
                          }
                        ),
                        dimensions.width
                      )}
                    >
                      {'Rp '}
                      {intToPrice(
                        multiply(listData?.quantity, listData?.price)
                      )}
                    </Text>
                  </View>
                </View>
              </View>
            </>
          );
        }}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        style={StyleSheet.applyWidth(
          {
            backgroundColor: theme.colors['Custom Color_7'],
            gap: 6,
            maxHeight: '70%',
          },
          dimensions.width
        )}
      />
      <Divider
        {...GlobalStyles.DividerStyles(theme)['Divider'].props}
        color={theme.colors['Custom Color_7']}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(
            GlobalStyles.DividerStyles(theme)['Divider'].style,
            { height: 6 }
          ),
          dimensions.width
        )}
      />
      {/* Section bawah */}
      <View
        style={StyleSheet.applyWidth(
          {
            backgroundColor: theme.colors['Surface'],
            bottom: 0,
            marginTop: 16,
            paddingLeft: 16,
            paddingRight: 16,
            paddingTop: 10,
            position: 'absolute',
            width: '100%',
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
              { alignSelf: 'flex-start', fontFamily: 'Poppins_700Bold' }
            ),
            dimensions.width
          )}
        >
          {'Pay With'}
        </Text>

        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'stretch',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 25,
            },
            dimensions.width
          )}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flexDirection: 'row',
                gap: 10,
                justifyContent: 'flex-start',
                width: '75%',
              },
              dimensions.width
            )}
          >
            {/* mtix logo */}
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
            <View
              style={StyleSheet.applyWidth(
                {
                  flexDirection: 'column',
                  gap: 0,
                  justifyContent: 'flex-start',
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
                    { fontFamily: 'Poppins_700Bold', textAlign: 'left' }
                  ),
                  dimensions.width
                )}
              >
                {'m.tix POINT'}
              </Text>
              {/* Text 2 */}
              <Text
                accessible={true}
                {...GlobalStyles.TextStyles(theme)['Poppins'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.TextStyles(theme)['Poppins'].style,
                    { color: theme.colors['Custom Color_6'], textAlign: 'left' }
                  ),
                  dimensions.width
                )}
              >
                {'Balance: 70.500'}
              </Text>
            </View>
          </View>
          {/* View 2 */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignContent: 'flex-start',
                alignItems: 'stretch',
                borderColor: theme.colors['Secondary Color'],
                borderRadius: 5,
                borderWidth: 2,
                justifyContent: 'center',
                paddingLeft: 10,
                paddingRight: 10,
              },
              dimensions.width
            )}
          >
            <Pressable>
              {/* Change */}
              <Text
                accessible={true}
                {...GlobalStyles.TextStyles(theme)['Poppins'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.TextStyles(theme)['Poppins'].style,
                    {
                      alignSelf: 'auto',
                      color: theme.colors['Secondary Color'],
                      fontFamily: 'Poppins_700Bold',
                    }
                  ),
                  dimensions.width
                )}
              >
                {'Change'}
              </Text>
            </Pressable>
          </View>
        </View>
        {/* View 2 */}
        <View
          style={StyleSheet.applyWidth(
            { flexDirection: 'row', justifyContent: 'space-between' },
            dimensions.width
          )}
        >
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
            {countPrice(boughtFood(Constants['all_food']))}
          </Text>
        </View>
        {/* Button */}
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
                setShowConfirmationModal(true);
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
                    {
                      color: 'rgb(255, 255, 255)',
                      fontFamily: 'Poppins_700Bold',
                    }
                  ),
                  dimensions.width
                )}
              >
                {'Continue'}
              </Text>
            </View>
          </Pressable>
        </View>
      </View>

      <Modal
        animationType={'none'}
        supportedOrientations={['portrait', 'landscape']}
        {...GlobalStyles.ModalStyles(theme)['paymentStylesheet'].props}
        presentationStyle={'formSheet'}
        style={StyleSheet.applyWidth(
          GlobalStyles.ModalStyles(theme)['paymentStylesheet'].style,
          dimensions.width
        )}
        transparent={true}
        visible={showConfirmationModal}
      >
        {/* For Padding (transparent) */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              backgroundColor: '"rgba(0, 0, 0, 0.3)"',
              gap: 10,
              height: '100%',
              justifyContent: 'center',
            },
            dimensions.width
          )}
        >
          {/* Modal Square */}
          <View
            style={StyleSheet.applyWidth(
              {
                backgroundColor: 'rgb(255, 255, 255)',
                marginBottom: 10,
                paddingLeft: 16,
                paddingRight: 16,
                paddingTop: 20,
              },
              dimensions.width
            )}
          >
            {/* Text 2 */}
            <Text
              accessible={true}
              {...GlobalStyles.TextStyles(theme)['Text'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Text'].style,
                  {
                    fontFamily: 'Poppins_400Regular',
                    fontSize: 16,
                    marginBottom: 30,
                  }
                ),
                dimensions.width
              )}
            >
              {
                'm.food purchase must be picked up on the same day within 15 minutes after order, in outlet xxi cafe CIWALK XXI.\n\nDo you want to confirm your order and continue the transaction?'
              }
            </Text>
            {/* Action Buttons */}
            <View
              style={StyleSheet.applyWidth(
                { flexDirection: 'row', justifyContent: 'space-around' },
                dimensions.width
              )}
            >
              {/* Cancel */}
              <View
                style={StyleSheet.applyWidth(
                  {
                    height: 100,
                    paddingBottom: 16,
                    paddingLeft: 11,
                    paddingRight: 11,
                    paddingTop: 16,
                  },
                  dimensions.width
                )}
              >
                <Pressable
                  onPress={() => {
                    try {
                      setShowConfirmationModal(false);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                >
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        backgroundColor: theme.colors['Surface'],
                        borderColor: theme.colors['Primary Color'],
                        borderRadius: 10,
                        borderWidth: 3,
                        paddingBottom: 14,
                        paddingLeft: 25,
                        paddingRight: 25,
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
                            color: theme.colors['Primary Color'],
                            fontFamily: 'Poppins_700Bold',
                          }
                        ),
                        dimensions.width
                      )}
                    >
                      {'Cancel'}
                    </Text>
                  </View>
                </Pressable>
              </View>
              {/* Yes */}
              <View
                style={StyleSheet.applyWidth(
                  {
                    height: 100,
                    paddingBottom: 16,
                    paddingLeft: 11,
                    paddingRight: 11,
                    paddingTop: 16,
                  },
                  dimensions.width
                )}
              >
                <Pressable
                  onPress={() => {
                    try {
                      setShowConfirmationModal(false);
                      navigation.navigate('BottomTabNavigator', {
                        screen: 'HomepageScreen',
                      });
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
                        paddingBottom: 16,
                        paddingLeft: 38,
                        paddingRight: 38,
                        paddingTop: 16,
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
                      {'Yes'}
                    </Text>
                  </View>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </ScreenContainer>
  );
};

export default withTheme(MfoodConfirmOrderScreen);
