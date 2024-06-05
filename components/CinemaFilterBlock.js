import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Pressable, withTheme } from '@draftbit/ui';
import { Text, View } from 'react-native';

const CinemaFilterBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const [all_schedules, setAll_schedules] = React.useState([]);
  const [selected_filter, setSelected_filter] = React.useState('');
  // Milih warna bg filter
  const selectedFilterColor = (value, selected_filter) => {
    // Type the code for the body of your function or hook here.
    // Functions can be triggered via Button/Touchable actions.
    // Hooks are run per ReactJS rules.

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
        { flexDirection: 'row', flexWrap: 'wrap', gap: 5 },
        dimensions.width
      )}
    >
      <Pressable
        onPress={() => {
          try {
            setSelected_filter('semua');
          } catch (err) {
            console.error(err);
          }
        }}
      >
        <View
          style={StyleSheet.applyWidth(
            {
              backgroundColor: [
                { minWidth: Breakpoints.Mobile, value: 'rgb(255, 255, 255)' },
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
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
                alignSelf: 'center',
                color: [
                  { minWidth: Breakpoints.Mobile, value: 'rgb(189, 151, 89)' },
                  {
                    minWidth: Breakpoints.Mobile,
                    value: selectedFilterTextColor(selected_filter, 'semua'),
                  },
                ],
                fontFamily: 'Poppins_400Regular',
                fontSize: 14,
              }),
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
            setSelected_filter('xxi');
          } catch (err) {
            console.error(err);
          }
        }}
      >
        <View
          style={StyleSheet.applyWidth(
            {
              backgroundColor: selectedFilterColor('xxi', selected_filter),
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
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
                alignSelf: 'center',
                color: [
                  {
                    minWidth: Breakpoints.Mobile,
                    value: theme.colors['Background'],
                  },
                  {
                    minWidth: Breakpoints.Mobile,
                    value: selectedFilterTextColor(selected_filter, 'xxi'),
                  },
                ],
                fontFamily: 'Poppins_400Regular',
                fontSize: 14,
              }),
              dimensions.width
            )}
          >
            {'XXI'}
          </Text>
        </View>
      </Pressable>
      {/* Pressable 4 */}
      <Pressable
        onPress={() => {
          try {
            setSelected_filter('the premiere');
          } catch (err) {
            console.error(err);
          }
        }}
      >
        <View
          style={StyleSheet.applyWidth(
            {
              backgroundColor: selectedFilterColor(
                'the premiere',
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
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
                alignSelf: 'center',
                color: [
                  {
                    minWidth: Breakpoints.Mobile,
                    value: theme.colors['Background'],
                  },
                  {
                    minWidth: Breakpoints.Mobile,
                    value: selectedFilterTextColor(
                      selected_filter,
                      'the premiere'
                    ),
                  },
                ],
                fontFamily: 'Poppins_400Regular',
                fontSize: 14,
              }),
              dimensions.width
            )}
          >
            {'The Premiere'}
          </Text>
        </View>
      </Pressable>
      {/* Pressable 3 */}
      <Pressable
        onPress={() => {
          try {
            setSelected_filter('imax');
          } catch (err) {
            console.error(err);
          }
        }}
      >
        <View
          style={StyleSheet.applyWidth(
            {
              backgroundColor: selectedFilterColor('imax', selected_filter),
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
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
                alignSelf: 'center',
                color: [
                  {
                    minWidth: Breakpoints.Mobile,
                    value: theme.colors['Surface'],
                  },
                  {
                    minWidth: Breakpoints.Mobile,
                    value: selectedFilterTextColor(selected_filter, 'imax'),
                  },
                ],
                fontFamily: 'Poppins_400Regular',
                fontSize: 14,
              }),
              dimensions.width
            )}
          >
            {'IMAX'}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default withTheme(CinemaFilterBlock);
