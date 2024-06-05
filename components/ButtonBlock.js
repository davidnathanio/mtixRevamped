import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Pressable, withTheme } from '@draftbit/ui';
import { Text, View } from 'react-native';

const ButtonBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const selectedFilterColor = (value, selected_filter) => {
    // Type the code for the body of your function or hook here.
    // Functions can be triggered via Button/Touchable actions.
    // Hooks are run per ReactJS rules.

    /* String line breaks are accomplished with backticks ( example: `line one
line two` ) and will not work with special characters inside of quotes ( example: "line one line two" ) */

    if (value != selected_filter) {
      return '#FFFFFF';
    } else {
      return '#BD9759';
    }
  };

  const selectedFilterTextColor = (value, selected_filter) => {
    // Type the code for the body of your function or hook here.
    // Functions can be triggered via Button/Touchable actions.
    // Hooks are run per ReactJS rules.

    /* String line breaks are accomplished with backticks ( example: `line one
line two` ) and will not work with special characters inside of quotes ( example: "line one line two" ) */
    if (value != selected_filter) {
      return '#BD9759';
    } else {
      return '#FFFFFF';
    }
  };

  const updateFilter = (allReviews, selectedFilter) => {
    // Type the code for the body of your function or hook here.
    // Functions can be triggered via Button/Touchable actions.
    // Hooks are run per ReactJS rules.

    /* String line breaks are accomplished with backticks ( example: `line one
line two` ) and will not work with special characters inside of quotes ( example: "line one line two" ) */
    return allReviews.filter(review => {
      const star = review.star;
      switch (selectedFilter) {
        case 'semua':
          return true;
        case '5_star':
          return star >= 4.5 && star <= 5;
        case '4_star':
          return star >= 3.5 && star < 4.5;
        case '3_star':
          return star >= 2.5 && star < 3.5;
        case '2_star':
          return star >= 1.5 && star < 2.5;
        case '1_star':
          return star >= 0.5 && star < 1.5;
        default:
          return false;
      }
    });
  };

  const submitReview = (all_review, star, text) => {
    const newReview = {
      date: new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      }),
      star: star,
      text: text,
      user: 'usermtix',
    };

    return [...all_review, newReview];
  };

  const countAverageRating = allReviews => {
    // Type the code for the body of your function or hook here.
    // Functions can be triggered via Button/Touchable actions.
    // Hooks are run per ReactJS rules.

    /* String line breaks are accomplished with backticks ( example: `line one
line two` ) and will not work with special characters inside of quotes ( example: "line one line two" ) */
    if (allReviews.length == 0) {
      return 0;
    }

    const totalStars = allReviews.reduce((sum, review) => sum + review.star, 0);
    return totalStars / allReviews.length;
  };

  return (
    <View
      style={StyleSheet.applyWidth(
        {
          height: 100,
          paddingBottom: 16,
          paddingLeft: 27,
          paddingRight: 27,
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
            {'Rate Movie'}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default withTheme(ButtonBlock);
