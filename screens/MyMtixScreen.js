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
  SimpleStyleScrollView,
  withTheme,
} from '@draftbit/ui';
import { Text, View } from 'react-native';

const MyMtixScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
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
        style={StyleSheet.applyWidth({ gap: 15 }, dimensions.width)}
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
                paddingLeft: 16,
                paddingTop: 13,
              },
              dimensions.width
            )}
          >
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
                    textAlign: 'left',
                  }
                ),
                dimensions.width
              )}
            >
              {'Hello, Nama User!'}
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
                paddingLeft: 16,
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
                  { color: theme.colors['Surface'], fontSize: 16 }
                ),
                dimensions.width
              )}
            >
              {'namaemail@example.com'}
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
                paddingLeft: 16,
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
                  { color: theme.colors['Surface'], fontSize: 16 }
                ),
                dimensions.width
              )}
            >
              {'+62 812 1111 1111'}
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
              marginBottom: -20,
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
                  {
                    color: theme.colors['Medium'],
                    fontSize: 16,
                    textAlign: 'left',
                  }
                ),
                dimensions.width
              )}
            >
              {'m.tix Points'}
            </Text>
            {/* Text 2 */}
            <Text
              accessible={true}
              {...GlobalStyles.TextStyles(theme)['Poppins'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Poppins'].style,
                  {
                    fontFamily: 'Poppins_700Bold',
                    fontSize: 16,
                    textAlign: 'left',
                  }
                ),
                dimensions.width
              )}
            >
              {'70.500'}
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
                alignItems: 'flex-start',
                alignSelf: 'center',
                borderColor: 'rgba(0, 0, 0, 0)',
                flex: 1,
                flexDirection: 'column',
                gap: 5,
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
                  { color: theme.colors['Medium'], fontSize: 16 }
                ),
                dimensions.width
              )}
            >
              {'Sakuku'}
            </Text>

            <Text
              accessible={true}
              {...GlobalStyles.TextStyles(theme)['Poppins'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Poppins'].style,
                  {
                    color: theme.colors['Secondary Color'],
                    fontFamily: 'Poppins_700Bold',
                    fontSize: 16,
                  }
                ),
                dimensions.width
              )}
            >
              {'Activate Sakuku'}
            </Text>
          </View>
        </View>
        {/* View Transaction Hist */}
        <View
          style={StyleSheet.applyWidth(
            { paddingLeft: 16, paddingRight: 16, paddingTop: 0 },
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
                    {
                      minWidth: Breakpoints.Mobile,
                      value: theme.colors['Primary Color'],
                    },
                    {
                      minWidth: Breakpoints.Mobile,
                      value: props.route?.params?.none ?? null,
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
                {'View Transaction History'}
              </Text>
            </View>
          </Pressable>
        </View>
        {/* View Balance Hist */}
        <View
          style={StyleSheet.applyWidth(
            { paddingLeft: 16, paddingRight: 16, paddingTop: 0 },
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
                  backgroundColor: theme.colors['Primary Color'],
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
                {'View Balance History'}
              </Text>
            </View>
          </Pressable>
        </View>
        {/* View Topup Hist */}
        <View
          style={StyleSheet.applyWidth(
            { paddingLeft: 16, paddingRight: 16, paddingTop: 0 },
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
                {'View Topup History'}
              </Text>
            </View>
          </Pressable>
        </View>

        <View
          style={StyleSheet.applyWidth(
            { paddingLeft: 16, paddingRight: 16 },
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
                  fontFamily: 'Poppins_700Bold',
                  fontSize: 16,
                  paddingLeft: 0,
                  textAlign: 'left',
                }
              ),
              dimensions.width
            )}
          >
            {'Account Settings\n'}
          </Text>

          <Pressable>
            {/* Menu 1 */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingBottom: 10,
                  paddingTop: 10,
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
                <Icon
                  color={theme.colors['Primary Color']}
                  name={'Foundation/play-video'}
                  size={32}
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
                  {'Change Genre Preferences'}
                </Text>
              </View>
              {/* Icon 2 */}
              <Icon name={'Entypo/chevron-right'} size={24} />
            </View>
          </Pressable>
          {/* Pressable 2 */}
          <Pressable>
            {/* Menu 2 */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingBottom: 10,
                  paddingTop: 10,
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
                <Icon
                  color={theme.colors['Primary Color']}
                  name={'MaterialCommunityIcons/credit-card-outline'}
                  size={32}
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
                  {'Payment Method'}
                </Text>
              </View>
              {/* Icon 2 */}
              <Icon name={'Entypo/chevron-right'} size={24} />
            </View>
          </Pressable>
          {/* Pressable 3 */}
          <Pressable>
            {/* Menu 3 */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingBottom: 10,
                  paddingTop: 10,
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
                <Icon
                  color={theme.colors['Primary Color']}
                  name={'Entypo/price-tag'}
                  size={32}
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
                  {'e-Voucher'}
                </Text>
              </View>
              {/* Icon 2 */}
              <Icon name={'Entypo/chevron-right'} size={24} />
            </View>
          </Pressable>
          {/* Pressable 4 */}
          <Pressable>
            {/* Menu 4 */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingBottom: 10,
                  paddingTop: 10,
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
                <Icon
                  color={theme.colors['Primary Color']}
                  name={'MaterialIcons/loyalty'}
                  size={32}
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
                  {"Partner's Loyalty Redemption"}
                </Text>
              </View>
              {/* Icon 2 */}
              <Icon name={'Entypo/chevron-right'} size={24} />
            </View>
          </Pressable>
          {/* Pressable 5 */}
          <Pressable>
            {/* Menu 5 */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingBottom: 10,
                  paddingTop: 10,
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
                <Icon
                  color={theme.colors['Primary Color']}
                  name={'MaterialCommunityIcons/account-details-outline'}
                  size={32}
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
                  {'Update Profile'}
                </Text>
              </View>
              {/* Icon 2 */}
              <Icon name={'Entypo/chevron-right'} size={24} />
            </View>
          </Pressable>
          {/* Pressable 6 */}
          <Pressable>
            {/* Menu 6 */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingBottom: 10,
                  paddingTop: 10,
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
                <Icon
                  color={theme.colors['Primary Color']}
                  name={'FontAwesome/lock'}
                  size={32}
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
                  {'Change PIN / Password'}
                </Text>
              </View>
              {/* Icon 2 */}
              <Icon name={'Entypo/chevron-right'} size={24} />
            </View>
          </Pressable>
          {/* Pressable 7 */}
          <Pressable>
            {/* Menu 7 */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingBottom: 10,
                  paddingTop: 10,
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
                <Icon
                  color={theme.colors['Primary Color']}
                  name={'AntDesign/deleteuser'}
                  size={32}
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
                  {'Delete Account'}
                </Text>
              </View>
              {/* Icon 2 */}
              <Icon name={'Entypo/chevron-right'} size={24} />
            </View>
          </Pressable>
        </View>
        {/* View 2 */}
        <View
          style={StyleSheet.applyWidth(
            { marginBottom: 50, paddingLeft: 16, paddingRight: 16 },
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
                  fontFamily: 'Poppins_700Bold',
                  fontSize: 16,
                  marginTop: 10,
                  paddingLeft: 0,
                  textAlign: 'left',
                }
              ),
              dimensions.width
            )}
          >
            {'Other Settings'}
          </Text>

          <Pressable>
            {/* Menu 1 */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingBottom: 10,
                  paddingTop: 10,
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
                <Icon
                  color={theme.colors['Primary Color']}
                  name={'FontAwesome/question-circle-o'}
                  size={32}
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
                  {'Frequently Asked Questions'}
                </Text>
              </View>
              {/* Icon 2 */}
              <Icon name={'Entypo/chevron-right'} size={24} />
            </View>
          </Pressable>

          <Pressable>
            {/* Menu 2 */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingBottom: 10,
                  paddingTop: 10,
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
                <Icon
                  color={theme.colors['Primary Color']}
                  name={'FontAwesome/phone'}
                  size={32}
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
                  {'Contact Us'}
                </Text>
              </View>
              {/* Icon 2 */}
              <Icon name={'Entypo/chevron-right'} size={24} />
            </View>
          </Pressable>
          {/* Pressable 2 */}
          <Pressable>
            {/* Menu 3 */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingBottom: 10,
                  paddingTop: 10,
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
                <Icon
                  color={theme.colors['Primary Color']}
                  name={'MaterialIcons/rule'}
                  size={32}
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
                  {'Terms of Services / Disclaimer'}
                </Text>
              </View>
              {/* Icon 2 */}
              <Icon name={'Entypo/chevron-right'} size={24} />
            </View>
          </Pressable>
          {/* Pressable 3 */}
          <Pressable>
            {/* Menu 4 */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingBottom: 10,
                  paddingTop: 10,
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
                <Icon
                  color={theme.colors['Primary Color']}
                  name={'Ionicons/exit-outline'}
                  size={32}
                />
                <Text
                  accessible={true}
                  {...GlobalStyles.TextStyles(theme)['Poppins'].props}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.TextStyles(theme)['Poppins'].style,
                      {
                        color: theme.colors['Error'],
                        fontSize: 16,
                        textAlign: 'left',
                      }
                    ),
                    dimensions.width
                  )}
                >
                  {'Log Out'}
                </Text>
              </View>
              {/* Icon 2 */}
              <Icon name={'Entypo/chevron-right'} size={24} />
            </View>
          </Pressable>
        </View>
      </SimpleStyleScrollView>
    </ScreenContainer>
  );
};

export default withTheme(MyMtixScreen);
