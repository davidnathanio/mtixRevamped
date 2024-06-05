import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Icon, Pressable, withTheme } from '@draftbit/ui';
import { Text, View } from 'react-native';

const HeaderBlock = props => {
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
      <Pressable>
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              alignSelf: 'flex-start',
              flexDirection: 'column',
              justifyContent: 'center',
              marginLeft: 16,
              position: 'absolute',
              top: 0,
              zIndex: 1,
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
  );
};

export default withTheme(HeaderBlock);
