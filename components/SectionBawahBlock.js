import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { withTheme } from '@draftbit/ui';
import { Text, View } from 'react-native';

const SectionBawahBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const filterFood = (allFood, selectedFilter) => {
    // Type the code for the body of your function or hook here.
    // Functions can be triggered via Button/Touchable actions.
    // Hooks are run per ReactJS rules.

    /* String line breaks are accomplished with backticks ( example: `line one
line two` ) and will not work with special characters inside of quotes ( example: "line one line two" ) */

    if (selectedFilter === 'semua') {
      return allFood;
    }
    return allFood.filter(item => item.title === selectedFilter);
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
    return totalPrice ? Math.round(totalPrice).toString() : '-';
  };

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

  const countQuantities = allFood => {
    // Type the code for the body of your function or hook here.
    // Functions can be triggered via Button/Touchable actions.
    // Hooks are run per ReactJS rules.

    /* String line breaks are accomplished with backticks ( example: `line one
line two` ) and will not work with special characters inside of quotes ( example: "line one line two" ) */
    return allFood.reduce((sum, item) => sum + item.quantity, 0);
  };

  return (
    <View
      style={StyleSheet.applyWidth(
        {
          alignContent: 'space-between',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingBottom: 10,
          paddingLeft: 43,
          paddingRight: 43,
          paddingTop: 10,
        },
        dimensions.width
      )}
    >
      {/* quantity */}
      <View>
        <Text
          accessible={true}
          {...GlobalStyles.TextStyles(theme)['Poppins'].props}
          style={StyleSheet.applyWidth(
            GlobalStyles.TextStyles(theme)['Poppins'].style,
            dimensions.width
          )}
        >
          {'Item Dipilih'}
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
          {countQuantities(Constants['all_food'])}
          {' Item'}
        </Text>
      </View>
      {/* price */}
      <View>
        <Text
          accessible={true}
          {...GlobalStyles.TextStyles(theme)['Poppins'].props}
          style={StyleSheet.applyWidth(
            GlobalStyles.TextStyles(theme)['Poppins'].style,
            dimensions.width
          )}
        >
          {'Item Dipilih'}
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
          {'Rp '}
          {countPrice(Constants['all_food'])}
        </Text>
      </View>
    </View>
  );
};

export default withTheme(SectionBawahBlock);
