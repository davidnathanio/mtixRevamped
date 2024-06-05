import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Icon, withTheme } from '@draftbit/ui';
import { Text, View } from 'react-native';

const CityLocationBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const pressMovie = movieName => {
    if (movieName == 'VINA: SEBELUM 7 HARI') {
      return true;
    } else {
      return false;
    }
  };

  const searchMovie = (allData, searchText) => {
    return allData.filter(movie =>
      movie.name.toLowerCase().includes(searchText.toLowerCase())
    );
  };

  return (
    <View
      style={StyleSheet.applyWidth(
        {
          alignContent: 'flex-start',
          alignItems: 'center',
          alignSelf: 'auto',
          flexDirection: 'row',
          paddingBottom: 10,
          paddingLeft: 16,
          paddingRight: 16,
          paddingTop: 10,
        },
        dimensions.width
      )}
    >
      <Icon
        color={theme.colors['Primary Color']}
        name={'Ionicons/location-sharp'}
        size={16}
      />
      <Text
        accessible={true}
        {...GlobalStyles.TextStyles(theme)['Text'].props}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
            alignSelf: 'flex-start',
            color: theme.colors['Primary Color'],
            flex: 0,
            fontFamily: 'Poppins_600SemiBold',
            fontSize: 16,
            marginLeft: 14,
            marginRight: 10,
          }),
          dimensions.width
        )}
      >
        {'BANDUNG'}
      </Text>
      {/* Icon 2 */}
      <Icon
        color={theme.colors['Primary Color']}
        name={'Entypo/chevron-down'}
        size={16}
      />
    </View>
  );
};

export default withTheme(CityLocationBlock);
