import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Icon, Pressable, withTheme } from '@draftbit/ui';
import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';

const HeaderFixBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const navigation = useNavigation();
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
  );
};

export default withTheme(HeaderFixBlock);
