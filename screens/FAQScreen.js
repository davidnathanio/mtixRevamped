import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Icon, Pressable, ScreenContainer, withTheme } from '@draftbit/ui';
import { Image, Text, View } from 'react-native';

const FAQScreen = props => {
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
            justifyContent: 'flex-start',
            paddingBottom: 12,
            paddingTop: 13,
          },
          dimensions.width
        )}
      >
        <View
          style={StyleSheet.applyWidth(
            { position: 'absolute', top: 16, zIndex: 1 },
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
          {'Frequently Asked Questions'}
        </Text>
      </View>

      <View
        style={StyleSheet.applyWidth(
          { gap: 20, marginTop: 30 },
          dimensions.width
        )}
      >
        {/* accSettings */}
        <View
          style={StyleSheet.applyWidth(
            { paddingLeft: 16, paddingRight: 16 },
            dimensions.width
          )}
        >
          {/* Sub Judul */}
          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['Poppins'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.TextStyles(theme)['Poppins'].style,
                {
                  fontFamily: 'Poppins_700Bold',
                  fontSize: 16,
                  paddingLeft: 0,
                  textAlign: 'left',
                }
              ),
              dimensions.width
            )}
          >
            {'Info Umum m.tix'}
          </Text>

          <Pressable>
            {/* Menu 1 */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingBottom: 15,
                  paddingTop: 15,
                },
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  { alignItems: 'center', flexDirection: 'row', gap: 12 },
                  dimensions.width
                )}
              >
                <Image
                  resizeMode={'cover'}
                  {...GlobalStyles.ImageStyles(theme)['Image'].props}
                  source={{
                    uri: 'https://m.21cineplex.com/images/mtixcontactus.png',
                  }}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.ImageStyles(theme)['Image'].style,
                      { height: 16, width: 52 }
                    ),
                    dimensions.width
                  )}
                />
                {/* Tiket */}
                <Text
                  accessible={true}
                  {...GlobalStyles.TextStyles(theme)['Poppins'].props}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.TextStyles(theme)['Poppins'].style,
                      { fontSize: 16, textAlign: 'left' }
                    ),
                    dimensions.width
                  )}
                >
                  {'Change Genre Preferences'}
                </Text>
              </View>
              {/* Icon 2 */}
              <Icon name={'Entypo/chevron-right'} size={24} />
            </View>
          </Pressable>
          {/* Pressable 2 */}
          <Pressable>
            {/* Menu 1 */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingBottom: 15,
                  paddingTop: 15,
                },
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  { alignItems: 'center', flexDirection: 'row', gap: 12 },
                  dimensions.width
                )}
              >
                <Image
                  resizeMode={'cover'}
                  {...GlobalStyles.ImageStyles(theme)['Image'].props}
                  source={Images.Image53}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.ImageStyles(theme)['Image'].style,
                      { height: 16, width: 52 }
                    ),
                    dimensions.width
                  )}
                />
                {/* Tiket */}
                <Text
                  accessible={true}
                  {...GlobalStyles.TextStyles(theme)['Poppins'].props}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.TextStyles(theme)['Poppins'].style,
                      { fontSize: 16, textAlign: 'left' }
                    ),
                    dimensions.width
                  )}
                >
                  {'m.food (makanan dan minuman)'}
                </Text>
              </View>
              {/* Icon 2 */}
              <Icon name={'Entypo/chevron-right'} size={24} />
            </View>
          </Pressable>
          {/* Pressable 3 */}
          <Pressable>
            {/* Menu 1 */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingBottom: 15,
                  paddingTop: 15,
                },
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  { alignItems: 'center', flexDirection: 'row', gap: 12 },
                  dimensions.width
                )}
              >
                <Image
                  resizeMode={'cover'}
                  {...GlobalStyles.ImageStyles(theme)['Image'].props}
                  source={Images.Image52}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.ImageStyles(theme)['Image'].style,
                      { height: 16, width: 52 }
                    ),
                    dimensions.width
                  )}
                />
                {/* Tiket */}
                <Text
                  accessible={true}
                  {...GlobalStyles.TextStyles(theme)['Poppins'].props}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.TextStyles(theme)['Poppins'].style,
                      { fontSize: 16, textAlign: 'left' }
                    ),
                    dimensions.width
                  )}
                >
                  {'Akun m.tix'}
                </Text>
              </View>
              {/* Icon 2 */}
              <Icon name={'Entypo/chevron-right'} size={24} />
            </View>
          </Pressable>
        </View>
        {/* accSettings 2 */}
        <View
          style={StyleSheet.applyWidth(
            { paddingLeft: 16, paddingRight: 16 },
            dimensions.width
          )}
        >
          {/* Sub Judul */}
          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['Poppins'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.TextStyles(theme)['Poppins'].style,
                {
                  fontFamily: 'Poppins_700Bold',
                  fontSize: 16,
                  paddingLeft: 0,
                  textAlign: 'left',
                }
              ),
              dimensions.width
            )}
          >
            {'Info Pembayaran dan Saldo'}
          </Text>

          <Pressable>
            {/* Menu 1 */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingBottom: 15,
                  paddingTop: 15,
                },
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  { alignItems: 'center', flexDirection: 'row', gap: 12 },
                  dimensions.width
                )}
              >
                <Image
                  resizeMode={'cover'}
                  {...GlobalStyles.ImageStyles(theme)['Image'].props}
                  source={{
                    uri: 'https://www.itcshoppingfestival.com/wp-content/uploads/2018/06/sakuku.png',
                  }}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.ImageStyles(theme)['Image'].style,
                      { height: 16, width: 52 }
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
                      { fontSize: 16, textAlign: 'left' }
                    ),
                    dimensions.width
                  )}
                >
                  {'Sakuku'}
                </Text>
              </View>
              {/* Icon 2 */}
              <Icon name={'Entypo/chevron-right'} size={24} />
            </View>
          </Pressable>
          {/* Pressable 2 */}
          <Pressable>
            {/* Menu 1 */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingBottom: 15,
                  paddingTop: 15,
                },
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  { alignItems: 'center', flexDirection: 'row', gap: 12 },
                  dimensions.width
                )}
              >
                <Image
                  resizeMode={'cover'}
                  {...GlobalStyles.ImageStyles(theme)['Image'].props}
                  source={{
                    uri: 'https://i.pinimg.com/736x/94/3c/97/943c971903518e53ffd324dd51e46a90.jpg',
                  }}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.ImageStyles(theme)['Image'].style,
                      { height: 16, width: 52 }
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
                      { fontSize: 16, textAlign: 'left' }
                    ),
                    dimensions.width
                  )}
                >
                  {'GoPay'}
                </Text>
              </View>
              {/* Icon 2 */}
              <Icon name={'Entypo/chevron-right'} size={24} />
            </View>
          </Pressable>
          {/* Pressable 3 */}
          <Pressable>
            {/* Menu 1 */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingBottom: 15,
                  paddingTop: 15,
                },
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  { alignItems: 'center', flexDirection: 'row', gap: 12 },
                  dimensions.width
                )}
              >
                <Image
                  resizeMode={'cover'}
                  {...GlobalStyles.ImageStyles(theme)['Image'].props}
                  source={{
                    uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Bank_Mandiri_logo_2016.svg/2560px-Bank_Mandiri_logo_2016.svg.png',
                  }}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.ImageStyles(theme)['Image'].style,
                      { height: 16, width: 52 }
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
                      { fontSize: 16, textAlign: 'left' }
                    ),
                    dimensions.width
                  )}
                >
                  {'Mandiri VA'}
                </Text>
              </View>
              {/* Icon 2 */}
              <Icon name={'Entypo/chevron-right'} size={24} />
            </View>
          </Pressable>
          {/* Pressable 4 */}
          <Pressable>
            {/* Menu 1 */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingBottom: 15,
                  paddingTop: 15,
                },
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  { alignItems: 'center', flexDirection: 'row', gap: 12 },
                  dimensions.width
                )}
              >
                <Image
                  resizeMode={'cover'}
                  {...GlobalStyles.ImageStyles(theme)['Image'].props}
                  source={{
                    uri: 'https://t4.ftcdn.net/jpg/04/06/75/39/360_F_406753914_SFSBhjhp6kbHblNiUFZ1MXHcuEKe7e7P.jpg',
                  }}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.ImageStyles(theme)['Image'].style,
                      { height: 16, width: 52 }
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
                      { fontSize: 16, textAlign: 'left' }
                    ),
                    dimensions.width
                  )}
                >
                  {'Kartu Kredit atau Debit'}
                </Text>
              </View>
              {/* Icon 2 */}
              <Icon name={'Entypo/chevron-right'} size={24} />
            </View>
          </Pressable>
          {/* Pressable 5 */}
          <Pressable>
            {/* Menu 1 */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingBottom: 15,
                  paddingTop: 15,
                },
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  { alignItems: 'center', flexDirection: 'row', gap: 12 },
                  dimensions.width
                )}
              >
                <Image
                  resizeMode={'cover'}
                  {...GlobalStyles.ImageStyles(theme)['Image'].props}
                  source={{
                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRllS5dofJJZS0RDNrwqUWPd9gH02BiTCt-Jg&s',
                  }}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.ImageStyles(theme)['Image'].style,
                      { height: 16, width: 52 }
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
                      { fontSize: 16, textAlign: 'left' }
                    ),
                    dimensions.width
                  )}
                >
                  {'Allo Bank'}
                </Text>
              </View>
              {/* Icon 2 */}
              <Icon name={'Entypo/chevron-right'} size={24} />
            </View>
          </Pressable>
          {/* Pressable 6 */}
          <Pressable>
            {/* Menu 1 */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingBottom: 15,
                  paddingTop: 15,
                },
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  { alignItems: 'center', flexDirection: 'row', gap: 12 },
                  dimensions.width
                )}
              >
                <Image
                  resizeMode={'cover'}
                  {...GlobalStyles.ImageStyles(theme)['Image'].props}
                  source={{
                    uri: 'https://m.21cineplex.com/images/mtixcontactus.png',
                  }}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.ImageStyles(theme)['Image'].style,
                      { height: 16, width: 52 }
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
                      { fontSize: 16, textAlign: 'left' }
                    ),
                    dimensions.width
                  )}
                >
                  {'m.tix'}
                </Text>
              </View>
              {/* Icon 2 */}
              <Icon name={'Entypo/chevron-right'} size={24} />
            </View>
          </Pressable>
        </View>
        {/* Button */}
        <View
          style={StyleSheet.applyWidth(
            {
              gap: 15,
              marginTop: 50,
              paddingBottom: 16,
              paddingLeft: 9,
              paddingRight: 9,
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
                { textAlign: 'left' }
              ),
              dimensions.width
            )}
          >
            {
              'Apakah Anda tidak dapat menemukan yang Anda cari? \nSilahkan hubungi kami.'
            }
          </Text>

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
                {'Contact Us'}
              </Text>
            </View>
          </Pressable>
        </View>
        {/* View 2 */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 50,
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
                { color: theme.colors['Light'], fontSize: 12 }
              ),
              dimensions.width
            )}
          >
            {
              'Direktorat Jenderal Perlindungan Konsumen dan Tertib Niaga\nKementrian Perdagangan Republik Indonesia\nWhatsApp Ditjen PTKN : 0853 1111 1010'
            }
          </Text>
        </View>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(FAQScreen);
