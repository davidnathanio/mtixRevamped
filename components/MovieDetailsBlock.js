import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Icon, withTheme } from '@draftbit/ui';
import { Text, View } from 'react-native';

const MovieDetailsBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  // Milih warna bg filter
  const selectedFilterColor = (value, selected_filter) => {
    // Type the code for the body of your function or hook here.
    // Functions can be triggered via Button/Touchable actions.
    // Hooks are run per ReactJS rules.

    console.log(selected_filter, value);
    if (value != selected_filter) {
      return '#ABCDEF';
    } else {
      return '#AB5100';
    }
  };

  return (
    <View style={StyleSheet.applyWidth({ gap: 5 }, dimensions.width)}>
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
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
                color: theme.colors['Surface'],
                fontFamily: 'Poppins_700Bold',
                fontSize: 12,
              }),
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
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
                color: theme.colors['Surface'],
                fontFamily: 'Poppins_700Bold',
                fontSize: 12,
              }),
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
          StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
            alignSelf: 'center',
            color: 'rgb(132, 132, 132)',
            fontSize: 10,
          }),
          dimensions.width
        )}
      >
        {'Horror, Drama'}
      </Text>
      {/* Rating */}
      <Text
        accessible={true}
        {...GlobalStyles.TextStyles(theme)['Text'].props}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
            alignSelf: 'center',
            color: 'rgb(248, 193, 0)',
            fontFamily: 'Poppins_700Bold',
            fontSize: 12,
          }),
          dimensions.width
        )}
      >
        {'★ 3,7'}
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
          color={theme.colors['Custom Color_10']}
          name={'MaterialCommunityIcons/clock-time-four'}
          size={16}
        />
        <Text
          accessible={true}
          {...GlobalStyles.TextStyles(theme)['Text'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
              fontFamily: 'Poppins_400Regular',
              fontSize: 10,
              textAlign: 'center',
            }),
            dimensions.width
          )}
        >
          {'1 Hour 34 Minutes\n'}
        </Text>
      </View>
    </View>
  );
};

export default withTheme(MovieDetailsBlock);
