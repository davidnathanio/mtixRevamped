import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Icon, Pressable, withTheme } from '@draftbit/ui';
import { Text, View } from 'react-native';

const AccSettingsBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
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
          StyleSheet.compose(GlobalStyles.TextStyles(theme)['Poppins'].style, {
            fontFamily: 'Poppins_700Bold',
            fontSize: 16,
            paddingLeft: 0,
            textAlign: 'left',
          }),
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
  );
};

export default withTheme(AccSettingsBlock);
