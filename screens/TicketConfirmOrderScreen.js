import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import intToPrice from '../global-functions/intToPrice';
import selectedSeatsToPrice from '../global-functions/selectedSeatsToPrice';
import selectedSeatsToString from '../global-functions/selectedSeatsToString';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  Icon,
  Pressable,
  ScreenContainer,
  SimpleStyleScrollView,
  withTheme,
} from '@draftbit/ui';
import { Image, Text, View } from 'react-native';

const TicketConfirmOrderScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();
  const [selected_filter, setSelected_filter] = React.useState('');
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

  const confirmOrder = (transactionHistory, selectedSeats) => {
    // Type the code for the body of your function or hook here.
    // Functions can be triggered via Button/Touchable actions.
    // Hooks are run per ReactJS rules.

    /* String line breaks are accomplished with backticks ( example: `line one
line two` ) and will not work with special characters inside of quotes ( example: "line one line two" ) */
    const bookingCode = Math.floor(10000 + Math.random() * 90000); // Generates a random code between 10000 and 99999

    const date = new Date();
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    };
    const transactionDate = new Intl.DateTimeFormat('en-US', options).format(
      date
    );

    const newTransaction = {
      booking_code: bookingCode,
      selected_tickets: selectedSeats,
      transaction_date: transactionDate,
    };
    transactionHistory.push(newTransaction);
    return transactionHistory;
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

      <SimpleStyleScrollView
        bounces={true}
        horizontal={false}
        keyboardShouldPersistTaps={'never'}
        nestedScrollEnabled={false}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        style={StyleSheet.applyWidth(
          {
            gap: 20,
            maxHeight: '75%',
            paddingLeft: 16,
            paddingRight: 16,
            paddingTop: 20,
          },
          dimensions.width
        )}
      >
        {/* movie detai */}
        <View
          style={StyleSheet.applyWidth(
            { flexDirection: 'row', gap: 25 },
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
                { borderRadius: 10, height: 208, width: 135 }
              ),
              dimensions.width
            )}
          />
          <View
            style={StyleSheet.applyWidth(
              { alignItems: 'flex-start', gap: 10 },
              dimensions.width
            )}
          >
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
              {/* Rating */}
              <Text
                accessible={true}
                {...GlobalStyles.TextStyles(theme)['Text'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.TextStyles(theme)['Text'].style,
                    {
                      alignSelf: 'flex-start',
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
                    alignSelf: 'flex-start',
                    color: 'rgb(132, 132, 132)',
                    fontSize: 16,
                    marginBottom: 20,
                  }
                ),
                dimensions.width
              )}
            >
              {'Horror, Drama'}
            </Text>

            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'flex-start' },
                dimensions.width
              )}
            >
              <Text
                accessible={true}
                {...GlobalStyles.TextStyles(theme)['Poppins'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.TextStyles(theme)['Poppins'].style,
                    { fontFamily: 'Poppins_700Bold', fontSize: 16 }
                  ),
                  dimensions.width
                )}
              >
                {'BRAGA XXI'}
              </Text>
              {/* Text 2 */}
              <Text
                accessible={true}
                {...GlobalStyles.TextStyles(theme)['Poppins'].props}
                style={StyleSheet.applyWidth(
                  GlobalStyles.TextStyles(theme)['Poppins'].style,
                  dimensions.width
                )}
              >
                {'REGULAR 2D, STUDIO 4'}
              </Text>
            </View>
            {/* Text 2 */}
            <Text
              accessible={true}
              {...GlobalStyles.TextStyles(theme)['Poppins'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Poppins'].style,
                  { color: theme.colors['Light'] }
                ),
                dimensions.width
              )}
            >
              {'May 2nd, 21:00'}
            </Text>
          </View>
        </View>
        {/* Transaction Details */}
        <View style={StyleSheet.applyWidth({ gap: 10 }, dimensions.width)}>
          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['Poppins'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.TextStyles(theme)['Poppins'].style,
                {
                  fontFamily: 'Poppins_700Bold',
                  fontSize: 16,
                  marginBottom: 10,
                  textAlign: 'left',
                }
              ),
              dimensions.width
            )}
          >
            {'Detail Transaksi'}
          </Text>

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
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Poppins'].style,
                  { fontSize: 16 }
                ),
                dimensions.width
              )}
            >
              {'Seats'}
            </Text>
            {/* Text 2 */}
            <Text
              accessible={true}
              {...GlobalStyles.TextStyles(theme)['Poppins'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Poppins'].style,
                  { fontFamily: 'Poppins_700Bold', fontSize: 16 }
                ),
                dimensions.width
              )}
            >
              {selectedSeatsToString(Constants['selected_seats'])}
            </Text>
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
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Poppins'].style,
                  { fontSize: 16 }
                ),
                dimensions.width
              )}
            >
              {'Ticket'}
            </Text>
            {/* Text 2 */}
            <Text
              accessible={true}
              {...GlobalStyles.TextStyles(theme)['Poppins'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Poppins'].style,
                  { fontFamily: 'Poppins_700Bold', fontSize: 16 }
                ),
                dimensions.width
              )}
            >
              {Constants['selected_seats']?.length}
              {' x Rp30.000'}
            </Text>
          </View>
          {/* View 3 */}
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
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Poppins'].style,
                  { fontSize: 16 }
                ),
                dimensions.width
              )}
            >
              {'Admin Fee'}
            </Text>
            {/* Text 2 */}
            <Text
              accessible={true}
              {...GlobalStyles.TextStyles(theme)['Poppins'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Poppins'].style,
                  { fontFamily: 'Poppins_700Bold', fontSize: 16 }
                ),
                dimensions.width
              )}
            >
              {Constants['selected_seats']?.length}
              {' x Rp3.000'}
            </Text>
          </View>
          {/* View 4 */}
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
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Poppins'].style,
                  { fontSize: 16 }
                ),
                dimensions.width
              )}
            >
              {'Promo'}
            </Text>
            {/* Text 2 */}
            <Text
              accessible={true}
              {...GlobalStyles.TextStyles(theme)['Poppins'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Poppins'].style,
                  { fontFamily: 'Poppins_700Bold', fontSize: 16 }
                ),
                dimensions.width
              )}
            >
              {'Rp 0'}
            </Text>
          </View>
          {/* View 5 */}
          <View
            style={StyleSheet.applyWidth(
              { alignSelf: 'auto' },
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
                    color: theme.colors['Error'],
                    fontSize: 12,
                    textAlign: 'left',
                  }
                ),
                dimensions.width
              )}
            >
              {
                '*Tickets that have been purchased cannot be exchanged or refunded.'
              }
            </Text>
            {/* Text 2 */}
            <Text
              accessible={true}
              {...GlobalStyles.TextStyles(theme)['Poppins'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Poppins'].style,
                  {
                    color: theme.colors['Error'],
                    fontSize: 12,
                    textAlign: 'left',
                  }
                ),
                dimensions.width
              )}
            >
              {
                '*Children (2 years old or above) are required to purchase a ticket.'
              }
            </Text>
          </View>
        </View>
        {/* Pay With */}
        <View style={StyleSheet.applyWidth({ gap: 10 }, dimensions.width)}>
          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['Poppins'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.TextStyles(theme)['Poppins'].style,
                {
                  alignSelf: 'flex-start',
                  fontFamily: 'Poppins_700Bold',
                  fontSize: 16,
                }
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
                      {
                        color: theme.colors['Custom Color_6'],
                        textAlign: 'left',
                      }
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
        </View>
        {/* Voucher Selection */}
        <View style={StyleSheet.applyWidth({ gap: 10 }, dimensions.width)}>
          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['Poppins'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.TextStyles(theme)['Poppins'].style,
                {
                  alignSelf: 'flex-start',
                  fontFamily: 'Poppins_700Bold',
                  fontSize: 16,
                }
              ),
              dimensions.width
            )}
          >
            {'Voucher'}
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
                source={Images.MdiVoucher}
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
                {/* Text 2 */}
                <Text
                  accessible={true}
                  {...GlobalStyles.TextStyles(theme)['Poppins'].props}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.TextStyles(theme)['Poppins'].style,
                      {
                        color: theme.colors['Custom Color_6'],
                        textAlign: 'left',
                      }
                    ),
                    dimensions.width
                  )}
                >
                  {'Promo: Rp0'}
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
                <Text
                  accessible={true}
                  {...GlobalStyles.TextStyles(theme)['Poppins'].props}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.TextStyles(theme)['Poppins'].style,
                      {
                        alignSelf: 'center',
                        color: theme.colors['Secondary Color'],
                        fontFamily: 'Poppins_700Bold',
                      }
                    ),
                    dimensions.width
                  )}
                >
                  {'See All\n'}
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </SimpleStyleScrollView>
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
            {intToPrice(
              multiply(Constants['selected_seats']?.length, parseInt(33000, 10))
            )}
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
                setGlobalVariableValue({
                  key: 'purchase_history',
                  value: confirmOrder(
                    Constants['purchase_history'],
                    Constants['selected_seats']
                  ),
                });
                navigation.navigate('PurchaseHistoryScreen');
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
                {'Confirm Order'}
              </Text>
            </View>
          </Pressable>
        </View>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(TicketConfirmOrderScreen);
