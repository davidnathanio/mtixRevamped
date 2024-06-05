import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Icon, TextInput, withTheme } from '@draftbit/ui';
import { Image, View } from 'react-native';

const HeaderWithSearchBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const [allMovies, setAllMovies] = React.useState([]);
  const [textInputValue, setTextInputValue] = React.useState('');
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
          alignItems: 'center',
          alignSelf: 'stretch',
          backgroundColor: theme.colors['Primary Color'],
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: 20,
          justifyContent: 'flex-start',
          paddingBottom: 13,
          paddingLeft: 16,
          paddingRight: 16,
          paddingTop: 13,
        },
        dimensions.width
      )}
    >
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            alignSelf: 'auto',
            backgroundColor: theme.colors['Surface'],
            borderColor: 'rgb(189, 151, 89)',
            borderRadius: 10,
            borderWidth: 2,
            flex: 1,
            flexDirection: 'row',
            gap: 10,
            height: 34,
            justifyContent: 'flex-start',
            width: 244,
          },
          dimensions.width
        )}
      >
        <Image
          resizeMode={'cover'}
          {...GlobalStyles.ImageStyles(theme)['Image'].props}
          source={Images.XXIsvg1}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.ImageStyles(theme)['Image'].style, {
              height: 14,
              marginLeft: 10,
              width: 36,
            }),
            dimensions.width
          )}
        />
        <TextInput
          autoCapitalize={'none'}
          autoCorrect={true}
          changeTextDelay={500}
          onChangeText={newTextInputValue => {
            const textInputValue = newTextInputValue;
            try {
              setTextInputValue(newTextInputValue);
            } catch (err) {
              console.error(err);
            }
          }}
          webShowOutline={true}
          {...GlobalStyles.TextInputStyles(theme)['Text Input'].props}
          placeholder={'Cari Film'}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.TextInputStyles(theme)['Text Input'].style,
              {
                alignSelf: 'stretch',
                borderBottomWidth: 0,
                borderLeftWidth: 0,
                borderRadius: null,
                borderRightWidth: 0,
                borderTopWidth: 0,
                borderWidth: 0,
                color: theme.colors['Custom Color_6'],
                fontFamily: 'Poppins_400Regular',
                fontSize: 16,
                textAlign: 'left',
              }
            ),
            dimensions.width
          )}
          value={textInputValue}
        />
      </View>
      <Icon size={24} color={theme.colors['Surface']} name={'AntDesign/mail'} />
      <Image
        resizeMode={'cover'}
        {...GlobalStyles.ImageStyles(theme)['Image'].props}
        source={Images.MdiVoucherOutline}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(GlobalStyles.ImageStyles(theme)['Image'].style, {
            height: 25,
            width: 28,
          }),
          dimensions.width
        )}
      />
    </View>
  );
};

export default withTheme(HeaderWithSearchBlock);
