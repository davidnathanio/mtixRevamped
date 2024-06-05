import React from 'react';
import * as GlobalVariables from '../config/GlobalVariableContext';
import useWindowDimensions from '../utils/useWindowDimensions';
import { withTheme } from '@draftbit/ui';
import { View } from 'react-native';

const NavigatorTestBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const pressMovie = movieName => {
    if (movieName == 'DILAN 1983 WO AI NI') {
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

  return <View />;
};

export default withTheme(NavigatorTestBlock);
