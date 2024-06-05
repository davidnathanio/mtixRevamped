import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Icon, IconButton, withTheme } from '@draftbit/ui';
import { Image, Text, View } from 'react-native';

const FoodDetailsBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();
  const [selected_filter, setSelected_filter] = React.useState('');
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
    return allFood.filter(item => item.title === selectedFilter);
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
    return Math.round(totalPrice);
  };

  return (
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
        source={{ uri: `${props.url ?? ''}` }}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(GlobalStyles.ImageStyles(theme)['Image'].style, {
            borderRadius: 20,
            height: 121,
            marginLeft: 16,
            marginRight: 13,
            width: 80,
          }),
          dimensions.width
        )}
      />
      <View
        style={StyleSheet.applyWidth(
          { flex: 1, gap: 5, paddingRight: 16 },
          dimensions.width
        )}
      >
        {/* title */}
        <Text
          accessible={true}
          {...GlobalStyles.TextStyles(theme)['Text'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
              fontFamily: 'Poppins_700Bold',
              fontSize: 14,
            }),
            dimensions.width
          )}
        >
          {props.title ?? ''}
        </Text>
        {/* desc */}
        <Text
          accessible={true}
          {...GlobalStyles.TextStyles(theme)['Text'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
              alignSelf: 'flex-start',
              color: 'rgb(132, 132, 132)',
              fontSize: 12,
            }),
            dimensions.width
          )}
        >
          {props.desc ?? ''}
        </Text>
        {/* Duration */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'stretch',
              flexDirection: 'row',
              gap: 10,
              justifyContent: 'flex-start',
            },
            dimensions.width
          )}
        >
          <Icon
            color={theme.colors['Primary Color']}
            name={'MaterialCommunityIcons/clock-time-four'}
            size={22}
          />
          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['Text'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
                fontFamily: 'Poppins_400Regular',
                fontSize: 14,
                textAlign: 'center',
              }),
              dimensions.width
            )}
          >
            {props.waktu ?? ''}
          </Text>
        </View>
        {/* terbawah */}
        <View
          style={StyleSheet.applyWidth(
            { alignItems: 'center', flexDirection: 'row' },
            dimensions.width
          )}
        >
          {/* harga */}
          <View
            style={StyleSheet.applyWidth({ width: '60%' }, dimensions.width)}
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
              {'Rp.'}
              {props.harga ?? ''}
            </Text>
          </View>
          {/* tombol */}
          <View
            style={StyleSheet.applyWidth(
              { flex: 1, flexDirection: 'row', justifyContent: 'space-evenly' },
              dimensions.width
            )}
          >
            <View>
              <IconButton
                onPress={() => {
                  try {
                    setGlobalVariableValue({
                      key: 'all_food',
                      value: minusFood(Constants['all_food'], undefined),
                    });
                  } catch (err) {
                    console.error(err);
                  }
                }}
                icon={'FontAwesome/minus-circle'}
                size={24}
              />
            </View>

            <Text
              accessible={true}
              {...GlobalStyles.TextStyles(theme)['Poppins'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Poppins'].style,
                  { alignSelf: 'flex-end', flex: 1 }
                ),
                dimensions.width
              )}
            >
              {props.quantity ?? ''}
            </Text>
            {/* View 2 */}
            <View>
              <IconButton
                onPress={() => {
                  try {
                    setGlobalVariableValue({
                      key: 'all_food',
                      value: addFood(Constants['all_food'], undefined),
                    });
                  } catch (err) {
                    console.error(err);
                  }
                }}
                icon={'Entypo/circle-with-plus'}
                size={24}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default withTheme(FoodDetailsBlock);
