import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  IconButton,
  Pressable,
  StarRating,
  TextInput,
  withTheme,
} from '@draftbit/ui';
import { Modal, Text, View } from 'react-native';

const ModalBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();
  const [selected_filter, setSelected_filter] = React.useState('');
  const [showReviewModal, setShowReviewModal] = React.useState(false);
  const [starRatingValue2, setStarRatingValue2] = React.useState(0);
  const [textAreaValue, setTextAreaValue] = React.useState('');
  const [starRatingValue, setStarRatingValue] = React.useState(undefined);
  const [textInputValue, setTextInputValue] = React.useState('');
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
    <Modal
      animationType={'none'}
      supportedOrientations={['portrait', 'landscape']}
      {...GlobalStyles.ModalStyles(theme)['paymentStylesheet'].props}
      presentationStyle={'formSheet'}
      style={StyleSheet.applyWidth(
        GlobalStyles.ModalStyles(theme)['paymentStylesheet'].style,
        dimensions.width
      )}
      transparent={true}
      visible={showReviewModal}
    >
      {/* For Padding (transparent) */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            backgroundColor: '"rgba(0, 0, 0, 0.3)"',
            gap: 10,
            height: '100%',
            justifyContent: 'center',
          },
          dimensions.width
        )}
      >
        {/* Modal Square */}
        <View
          style={StyleSheet.applyWidth(
            {
              backgroundColor: 'rgb(255, 255, 255)',
              marginBottom: 10,
              paddingLeft: 16,
              paddingRight: 16,
              paddingTop: 10,
            },
            dimensions.width
          )}
        >
          {/* Create a view and Icon */}
          <View
            style={StyleSheet.applyWidth(
              { flexDirection: 'row', justifyContent: 'space-between' },
              dimensions.width
            )}
          >
            <View
              style={StyleSheet.applyWidth({ width: '80%' }, dimensions.width)}
            >
              <Text
                accessible={true}
                {...GlobalStyles.TextStyles(theme)['Text'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.TextStyles(theme)['Text'].style,
                    { fontFamily: 'Poppins_700Bold', fontSize: 20 }
                  ),
                  dimensions.width
                )}
              >
                {'Create a Review'}
              </Text>
            </View>
            <IconButton
              onPress={() => {
                try {
                  setShowReviewModal(false);
                } catch (err) {
                  console.error(err);
                }
              }}
              color={theme.colors['Light']}
              icon={'AntDesign/closecircle'}
              size={24}
            />
          </View>
          {/* Star View */}
          <View
            style={StyleSheet.applyWidth(
              { alignItems: 'center', marginBottom: 30, marginTop: 30 },
              dimensions.width
            )}
          >
            <StarRating
              isEditable={true}
              maxStars={5}
              onPress={newStarRatingValue => {
                const starRatingValue = newStarRatingValue;
                try {
                  setStarRatingValue2(newStarRatingValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              activeColor={theme.colors['Rating']}
              inactiveColor={theme.colors['Light']}
              rating={starRatingValue2}
              starSize={50}
            />
          </View>
          {/* Text 2 */}
          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['Text'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
                fontFamily: 'Poppins_700Bold',
                fontSize: 16,
              }),
              dimensions.width
            )}
          >
            {'Leave a Review'}
          </Text>
          <TextInput
            autoCorrect={true}
            changeTextDelay={500}
            numberOfLines={4}
            onChangeText={newTextAreaValue => {
              const textInputValue = newTextAreaValue;
              try {
                setTextAreaValue(newTextAreaValue);
              } catch (err) {
                console.error(err);
              }
            }}
            textAlignVertical={'top'}
            webShowOutline={true}
            {...GlobalStyles.TextInputStyles(theme)['Text Area'].props}
            keyboardAppearance={'dark'}
            multiline={true}
            placeholder={'Leave a Review'}
            placeholderTextColor={theme.colors['Custom Color_2']}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.TextInputStyles(theme)['Text Area'].style,
                { backgroundColor: 'rgb(237, 237, 237)', height: 192 }
              ),
              dimensions.width
            )}
            value={textAreaValue}
          />
          {/* Rate Movie Button 2 */}
          <View
            style={StyleSheet.applyWidth(
              {
                height: 100,
                paddingBottom: 16,
                paddingLeft: 11,
                paddingRight: 11,
                paddingTop: 16,
              },
              dimensions.width
            )}
          >
            <Pressable
              onPress={() => {
                try {
                  setShowReviewModal(false);
                  setGlobalVariableValue({
                    key: 'all_review',
                    value: submitReview(
                      Constants['all_review'],
                      starRatingValue2,
                      textAreaValue
                    ),
                  });
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
                  {'Submit Review'}
                </Text>
              </View>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default withTheme(ModalBlock);
