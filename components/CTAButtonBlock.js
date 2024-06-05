import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Pressable, withTheme } from '@draftbit/ui';
import { Text, View } from 'react-native';

const CTAButtonBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
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
      <Pressable>
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
            {'Continue'}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default withTheme(CTAButtonBlock);
