import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { withTheme } from '@draftbit/ui';
import { Image } from 'react-native';

const MtixLogoBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const searchAndFilter = (allTheaters, searchValue, filterValue) => {
    // Type the code for the body of your function or hook here.
    // Functions can be triggered via Button/Touchable actions.
    // Hooks are run per ReactJS rules.

    /* String line breaks are accomplished with backticks ( example: `line one
line two` ) and will not work with special characters inside of quotes ( example: "line one line two" ) */

    let searchedTheater = allTheaters.filter(theaters =>
      theaters.theater.toLowerCase().includes(searchValue.toLowerCase())
    );

    return searchedTheater.filter(
      theaters => filterValue == 'semua' || theaters.type == filterValue
    );
  };

  return (
    <Image
      resizeMode={'cover'}
      {...GlobalStyles.ImageStyles(theme)['Image'].props}
      source={Images.Image20}
      style={StyleSheet.applyWidth(
        StyleSheet.compose(GlobalStyles.ImageStyles(theme)['Image'].style, {
          height: 35,
          width: 35,
        }),
        dimensions.width
      )}
    />
  );
};

export default withTheme(MtixLogoBlock);
