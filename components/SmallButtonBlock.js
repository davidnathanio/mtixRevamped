import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Icon, withTheme } from '@draftbit/ui';
import { Text, View } from 'react-native';

const SmallButtonBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  // Milih warna bg filter
  const selectedFilterColor = (value, selected_filter) => {
    if (value != selected_filter) {
      return '#FFFFFF';
    } else {
      return '#BD9759';
    }
  };

  const selectedFilterTextColor = (selected_filter, value) => {
    if (value != selected_filter) {
      return '#BD9759';
    } else {
      return '#FFFFFF';
    }
  };

  const updateFilter = (allCinemas, selectedFilter) => {
    // Type the code for the body of your function or hook here.
    // Functions can be triggered via Button/Touchable actions.
    // Hooks are run per ReactJS rules.

    /* String line breaks are accomplished with backticks ( example: `line one
line two` ) and will not work with special characters inside of quotes ( example: "line one line two" ) */
    return allCinemas.filter(
      cinema =>
        selectedFilter == 'semua' ||
        cinema.type.toLowerCase() == selectedFilter.toLowerCase()
    );
  };

  return (
    <View
      style={StyleSheet.applyWidth(
        {
          borderColor: 'rgb(1, 83, 81)',
          borderRadius: 10,
          borderWidth: 1,
          flexDirection: 'row',
          gap: 15,
          paddingBottom: 5,
          paddingLeft: 14,
          paddingRight: 14,
          paddingTop: 5,
        },
        dimensions.width
      )}
    >
      <Icon
        color={theme.colors['Primary Color']}
        name={'MaterialCommunityIcons/food'}
        size={18}
      />
      <Text
        accessible={true}
        {...GlobalStyles.TextStyles(theme)['Text'].props}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
            alignSelf: 'center',
            color: 'rgb(1, 83, 81)',
            fontFamily: 'Poppins_500Medium',
            fontSize: 14,
          }),
          dimensions.width
        )}
      >
        {'Order m.food'}
      </Text>
    </View>
  );
};

export default withTheme(SmallButtonBlock);
