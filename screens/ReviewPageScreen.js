import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  Divider,
  Icon,
  IconButton,
  Pressable,
  ScreenContainer,
  SimpleStyleFlatList,
  SimpleStyleScrollView,
  StarRating,
  TextInput,
  withTheme,
} from '@draftbit/ui';
import { Modal, Text, View } from 'react-native';

const ReviewPageScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();
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
  const [averageRating, setAverageRating] = React.useState(
    countAverageRating(Constants['all_review'])
  );
  const [selected_filter, setSelected_filter] = React.useState('semua');
  const [showReviewModal, setShowReviewModal] = React.useState(false);
  const [shown_reviews, setShown_reviews] = React.useState(
    Constants['all_review']
  );
  const [starRatingValue, setStarRatingValue] = React.useState(3.2);
  const [starRatingValue2, setStarRatingValue2] = React.useState(0);
  const [textAreaValue, setTextAreaValue] = React.useState('');
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

  return (
    <ScreenContainer
      scrollable={false}
      hasSafeArea={false}
      hasTopSafeArea={true}
    >
      {/* header fix */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignContent: 'flex-start',
            alignItems: 'flex-start',
            alignSelf: 'auto',
            backgroundColor: 'rgb(1, 83, 81)',
            flexDirection: 'row',
            flexWrap: 'nowrap',
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
                  top: 15,
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
          {'Movie Reviews'}
        </Text>
      </View>

      <SimpleStyleScrollView
        bounces={true}
        horizontal={false}
        keyboardShouldPersistTaps={'never'}
        nestedScrollEnabled={false}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        style={StyleSheet.applyWidth({ gap: 10 }, dimensions.width)}
      >
        {/* Movie Details */}
        <View
          style={StyleSheet.applyWidth(
            {
              gap: 5,
              paddingBottom: 20,
              paddingLeft: 15,
              paddingRight: 15,
              paddingTop: 20,
            },
            dimensions.width
          )}
        >
          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['Text'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
                fontFamily: 'Poppins_700Bold',
                fontSize: 20,
              }),
              dimensions.width
            )}
          >
            {'VINA: SEBELUM 7 HARI'}
          </Text>
          {/* Category */}
          <View
            style={StyleSheet.applyWidth(
              { flexDirection: 'row', gap: 10, justifyContent: 'flex-start' },
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
                  StyleSheet.compose(
                    GlobalStyles.TextStyles(theme)['Text'].style,
                    {
                      color: theme.colors['Surface'],
                      fontFamily: 'Poppins_700Bold',
                      fontSize: 16,
                    }
                  ),
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
                  StyleSheet.compose(
                    GlobalStyles.TextStyles(theme)['Text'].style,
                    {
                      color: theme.colors['Surface'],
                      fontFamily: 'Poppins_700Bold',
                      fontSize: 16,
                    }
                  ),
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
                alignSelf: 'flex-start',
                color: 'rgb(132, 132, 132)',
                fontSize: 14,
              }),
              dimensions.width
            )}
          >
            {'Horror, Drama'}
          </Text>
          {/* Average Rating */}
          <View>
            {/* Average Rating Text */}
            <Text
              accessible={true}
              {...GlobalStyles.TextStyles(theme)['Poppins'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Poppins'].style,
                  { fontFamily: 'Poppins_800ExtraBold', fontSize: 40 }
                ),
                dimensions.width
              )}
            >
              {averageRating}
            </Text>
            {/* Average Star View */}
            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center' },
                dimensions.width
              )}
            >
              {/* Average Star Rating */}
              <StarRating
                maxStars={5}
                activeColor={theme.colors['Custom Color_2']}
                defaultValue={averageRating}
                inactiveColor={'rgba(0, 0, 0, 0)'}
                isEditable={false}
                starSize={24}
              />
            </View>
          </View>
        </View>
        {/* Reviews Section */}
        <View
          style={StyleSheet.applyWidth(
            { gap: 10, paddingLeft: 15, paddingRight: 15 },
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
                  fontSize: 18,
                  textAlign: 'left',
                }
              ),
              dimensions.width
            )}
          >
            {'Reviews'}
          </Text>
          {/* Filters */}
          <View
            style={StyleSheet.applyWidth(
              { flexDirection: 'row', flexWrap: 'wrap', gap: 5 },
              dimensions.width
            )}
          >
            <Pressable
              onPress={() => {
                try {
                  setSelected_filter('semua');
                  setShown_reviews(
                    updateFilter(Constants['all_reviews'], 'semua')
                  );
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
                        value: 'rgb(255, 255, 255)',
                      },
                      {
                        minWidth: Breakpoints.Mobile,
                        value: selectedFilterColor('semua', selected_filter),
                      },
                    ],
                    borderColor: 'rgb(189, 151, 89)',
                    borderRadius: 5,
                    borderWidth: 1,
                    paddingBottom: 1,
                    paddingLeft: 9,
                    paddingRight: 9,
                    paddingTop: 1,
                  },
                  dimensions.width
                )}
              >
                {/* Semua */}
                <Text
                  accessible={true}
                  {...GlobalStyles.TextStyles(theme)['Text'].props}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.TextStyles(theme)['Text'].style,
                      {
                        alignSelf: 'center',
                        color: [
                          {
                            minWidth: Breakpoints.Mobile,
                            value: 'rgb(189, 151, 89)',
                          },
                          {
                            minWidth: Breakpoints.Mobile,
                            value: selectedFilterTextColor(
                              'semua',
                              selected_filter
                            ),
                          },
                        ],
                        fontFamily: 'Poppins_400Regular',
                        fontSize: 14,
                      }
                    ),
                    dimensions.width
                  )}
                >
                  {'Semua'}
                </Text>
              </View>
            </Pressable>
            {/* Pressable 2 */}
            <Pressable
              onPress={() => {
                try {
                  setSelected_filter('5_star');
                  setShown_reviews(
                    updateFilter(Constants['all_reviews'], '5_star')
                  );
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              <View
                style={StyleSheet.applyWidth(
                  {
                    backgroundColor: selectedFilterColor(
                      '5_star',
                      selected_filter
                    ),
                    borderColor: 'rgb(189, 151, 89)',
                    borderRadius: 5,
                    borderWidth: 1,
                    paddingBottom: 1,
                    paddingLeft: 9,
                    paddingRight: 9,
                    paddingTop: 1,
                  },
                  dimensions.width
                )}
              >
                <Text
                  accessible={true}
                  {...GlobalStyles.TextStyles(theme)['Text'].props}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.TextStyles(theme)['Text'].style,
                      {
                        alignSelf: 'center',
                        color: [
                          {
                            minWidth: Breakpoints.Mobile,
                            value: theme.colors['Background'],
                          },
                          {
                            minWidth: Breakpoints.Mobile,
                            value: selectedFilterTextColor(
                              '5_star',
                              selected_filter
                            ),
                          },
                        ],
                        fontFamily: 'Poppins_400Regular',
                        fontSize: 14,
                      }
                    ),
                    dimensions.width
                  )}
                >
                  {'★ 5'}
                </Text>
              </View>
            </Pressable>
            {/* Pressable 4 */}
            <Pressable
              onPress={() => {
                try {
                  setSelected_filter('4_star');
                  setShown_reviews(
                    updateFilter(Constants['all_reviews'], '4_star')
                  );
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              <View
                style={StyleSheet.applyWidth(
                  {
                    backgroundColor: selectedFilterColor(
                      '4_star',
                      selected_filter
                    ),
                    borderColor: 'rgb(189, 151, 89)',
                    borderRadius: 5,
                    borderWidth: 1,
                    paddingBottom: 1,
                    paddingLeft: 9,
                    paddingRight: 9,
                    paddingTop: 1,
                  },
                  dimensions.width
                )}
              >
                <Text
                  accessible={true}
                  {...GlobalStyles.TextStyles(theme)['Text'].props}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.TextStyles(theme)['Text'].style,
                      {
                        alignSelf: 'center',
                        color: [
                          {
                            minWidth: Breakpoints.Mobile,
                            value: theme.colors['Background'],
                          },
                          {
                            minWidth: Breakpoints.Mobile,
                            value: selectedFilterTextColor(
                              '4_star',
                              selected_filter
                            ),
                          },
                        ],
                        fontFamily: 'Poppins_400Regular',
                        fontSize: 14,
                      }
                    ),
                    dimensions.width
                  )}
                >
                  {'★ 4'}
                </Text>
              </View>
            </Pressable>
            {/* Pressable 3 */}
            <Pressable
              onPress={() => {
                try {
                  setSelected_filter('3_star');
                  setShown_reviews(
                    updateFilter(Constants['all_reviews'], '3_star')
                  );
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              <View
                style={StyleSheet.applyWidth(
                  {
                    backgroundColor: selectedFilterColor(
                      '3_star',
                      selected_filter
                    ),
                    borderColor: 'rgb(189, 151, 89)',
                    borderRadius: 5,
                    borderWidth: 1,
                    paddingBottom: 1,
                    paddingLeft: 9,
                    paddingRight: 9,
                    paddingTop: 1,
                  },
                  dimensions.width
                )}
              >
                <Text
                  accessible={true}
                  {...GlobalStyles.TextStyles(theme)['Text'].props}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.TextStyles(theme)['Text'].style,
                      {
                        alignSelf: 'center',
                        color: [
                          {
                            minWidth: Breakpoints.Mobile,
                            value: theme.colors['Surface'],
                          },
                          {
                            minWidth: Breakpoints.Mobile,
                            value: selectedFilterTextColor(
                              '3_star',
                              selected_filter
                            ),
                          },
                        ],
                        fontFamily: 'Poppins_400Regular',
                        fontSize: 14,
                      }
                    ),
                    dimensions.width
                  )}
                >
                  {'★ 3'}
                </Text>
              </View>
            </Pressable>
            {/* Pressable 5 */}
            <Pressable
              onPress={() => {
                try {
                  setSelected_filter('2_star');
                  setShown_reviews(
                    updateFilter(Constants['all_reviews'], '2_star')
                  );
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              <View
                style={StyleSheet.applyWidth(
                  {
                    backgroundColor: selectedFilterColor(
                      '2_star',
                      selected_filter
                    ),
                    borderColor: 'rgb(189, 151, 89)',
                    borderRadius: 5,
                    borderWidth: 1,
                    paddingBottom: 1,
                    paddingLeft: 9,
                    paddingRight: 9,
                    paddingTop: 1,
                  },
                  dimensions.width
                )}
              >
                <Text
                  accessible={true}
                  {...GlobalStyles.TextStyles(theme)['Text'].props}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.TextStyles(theme)['Text'].style,
                      {
                        alignSelf: 'center',
                        color: [
                          {
                            minWidth: Breakpoints.Mobile,
                            value: theme.colors['Surface'],
                          },
                          {
                            minWidth: Breakpoints.Mobile,
                            value: selectedFilterTextColor(
                              '2_star',
                              selected_filter
                            ),
                          },
                        ],
                        fontFamily: 'Poppins_400Regular',
                        fontSize: 14,
                      }
                    ),
                    dimensions.width
                  )}
                >
                  {'★ 2'}
                </Text>
              </View>
            </Pressable>
            {/* Pressable 6 */}
            <Pressable
              onPress={() => {
                try {
                  setSelected_filter('1_star');
                  setShown_reviews(
                    updateFilter(Constants['all_reviews'], '1_star')
                  );
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              <View
                style={StyleSheet.applyWidth(
                  {
                    backgroundColor: selectedFilterColor(
                      '1_star',
                      selected_filter
                    ),
                    borderColor: 'rgb(189, 151, 89)',
                    borderRadius: 5,
                    borderWidth: 1,
                    paddingBottom: 1,
                    paddingLeft: 9,
                    paddingRight: 9,
                    paddingTop: 1,
                  },
                  dimensions.width
                )}
              >
                <Text
                  accessible={true}
                  {...GlobalStyles.TextStyles(theme)['Text'].props}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.TextStyles(theme)['Text'].style,
                      {
                        alignSelf: 'center',
                        color: [
                          {
                            minWidth: Breakpoints.Mobile,
                            value: theme.colors['Surface'],
                          },
                          {
                            minWidth: Breakpoints.Mobile,
                            value: selectedFilterTextColor(
                              '1_star',
                              selected_filter
                            ),
                          },
                        ],
                        fontFamily: 'Poppins_400Regular',
                        fontSize: 14,
                      }
                    ),
                    dimensions.width
                  )}
                >
                  {'★ 1'}
                </Text>
              </View>
            </Pressable>
          </View>
        </View>
        <SimpleStyleFlatList
          data={shown_reviews}
          horizontal={false}
          inverted={false}
          keyExtractor={(listData, index) =>
            listData?.id ?? listData?.uuid ?? index.toString()
          }
          keyboardShouldPersistTaps={'never'}
          listKey={'Pelam8MM'}
          nestedScrollEnabled={false}
          numColumns={1}
          onEndReachedThreshold={0.5}
          renderItem={({ item, index }) => {
            const listData = item;
            return (
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'stretch',
                    backgroundColor: 'rgb(255, 255, 255)',
                    gap: 10,
                    paddingBottom: 10,
                    paddingLeft: 16,
                    paddingRight: 16,
                    paddingTop: 10,
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
                      {
                        fontFamily: 'Poppins_700Bold',
                        fontSize: 16,
                        textAlign: 'left',
                      }
                    ),
                    dimensions.width
                  )}
                >
                  {listData?.user}
                </Text>
                {/* List Star View */}
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignContent: 'space-between',
                      alignItems: 'center',
                      flexDirection: 'row',
                      flexWrap: 'nowrap',
                      justifyContent: 'space-between',
                    },
                    dimensions.width
                  )}
                >
                  {/* List Star */}
                  <StarRating
                    inactiveColor={theme.colors.divider}
                    maxStars={5}
                    activeColor={theme.colors['Custom Color_2']}
                    defaultValue={listData?.star}
                    isEditable={false}
                    starSize={24}
                    style={StyleSheet.applyWidth(
                      { width: '45%' },
                      dimensions.width
                    )}
                  />
                  <View
                    style={StyleSheet.applyWidth(
                      { width: '45%' },
                      dimensions.width
                    )}
                  >
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
                      {listData?.date}
                    </Text>
                  </View>
                </View>

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
                  {listData?.text}
                </Text>
              </View>
            );
          }}
          showsHorizontalScrollIndicator={true}
          showsVerticalScrollIndicator={true}
          style={StyleSheet.applyWidth(
            { backgroundColor: 'rgb(236, 235, 235)', gap: 6 },
            dimensions.width
          )}
        />
      </SimpleStyleScrollView>
      <Divider
        color={theme.colors.divider}
        {...GlobalStyles.DividerStyles(theme)['Divider'].props}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(
            GlobalStyles.DividerStyles(theme)['Divider'].style,
            { height: 6 }
          ),
          dimensions.width
        )}
      />
      {/* Rate Movie Button */}
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
        <Pressable
          onPress={() => {
            try {
              setShowReviewModal(true);
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
                style={StyleSheet.applyWidth(
                  { width: '80%' },
                  dimensions.width
                )}
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
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Text'].style,
                  { fontFamily: 'Poppins_700Bold', fontSize: 16 }
                ),
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
                    setShown_reviews(
                      updateFilter(
                        submitReview(
                          Constants['all_review'],
                          starRatingValue2,
                          textAreaValue
                        ),
                        selected_filter
                      )
                    );
                    setAverageRating(
                      countAverageRating(
                        submitReview(
                          Constants['all_review'],
                          starRatingValue2,
                          textAreaValue
                        )
                      )
                    );
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
    </ScreenContainer>
  );
};

export default withTheme(ReviewPageScreen);
