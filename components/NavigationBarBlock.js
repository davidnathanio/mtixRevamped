import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Icon, Pressable, withTheme } from '@draftbit/ui';
import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';

const NavigationBarBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const navigation = useNavigation();
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

  return (
    <View
      style={StyleSheet.applyWidth(
        {
          backgroundColor: theme.colors['Surface'],
          bottom: 0,
          flexDirection: 'row',
          justifyContent: 'space-around',
          paddingLeft: 10,
          paddingRight: 10,
          position: 'absolute',
          width: '100%',
        },
        dimensions.width
      )}
    >
      {/* Playing */}
      <Pressable
        onPress={() => {
          try {
            navigation.navigate('BottomTabNavigator');
          } catch (err) {
            console.error(err);
          }
        }}
      >
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              paddingBottom: 5,
              paddingLeft: 10,
              paddingRight: 10,
              paddingTop: 5,
            },
            dimensions.width
          )}
        >
          <Icon
            size={24}
            color={theme.colors['Text']}
            name={'MaterialCommunityIcons/movie-outline'}
          />
          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['Poppins'].props}
            selectionColor={theme.colors['Text']}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.TextStyles(theme)['Poppins'].style,
                {
                  color: theme.colors['Text'],
                  fontFamily: 'Poppins_500Medium',
                  fontSize: 14,
                }
              ),
              dimensions.width
            )}
          >
            {'Playing'}
          </Text>
        </View>
      </Pressable>
      {/* UpComing */}
      <Pressable
        onPress={() => {
          try {
            navigation.navigate('BottomTabNavigator');
          } catch (err) {
            console.error(err);
          }
        }}
      >
        {/* View 2 */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              paddingBottom: 5,
              paddingLeft: 10,
              paddingRight: 10,
              paddingTop: 5,
            },
            dimensions.width
          )}
        >
          <Icon
            size={24}
            color={theme.colors['Secondary Color']}
            name={'MaterialCommunityIcons/calendar-clock'}
          />
          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['Poppins'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.TextStyles(theme)['Poppins'].style,
                {
                  color: theme.colors['Secondary Color'],
                  fontFamily: 'Poppins_500Medium',
                  fontSize: 14,
                }
              ),
              dimensions.width
            )}
          >
            {'UpComing'}
          </Text>
        </View>
      </Pressable>
      {/* Theater */}
      <Pressable
        onPress={() => {
          try {
            navigation.navigate('TheaterScreen');
          } catch (err) {
            console.error(err);
          }
        }}
      >
        {/* View 3 */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              paddingBottom: 5,
              paddingLeft: 10,
              paddingRight: 10,
              paddingTop: 5,
            },
            dimensions.width
          )}
        >
          <Icon
            size={24}
            color={theme.colors['Text']}
            name={'MaterialCommunityIcons/theater'}
          />
          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['Poppins'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.TextStyles(theme)['Poppins'].style,
                {
                  color: theme.colors['Text'],
                  fontFamily: 'Poppins_500Medium',
                  fontSize: 14,
                }
              ),
              dimensions.width
            )}
          >
            {'Theater'}
          </Text>
        </View>
      </Pressable>
      {/* m.food */}
      <Pressable
        onPress={() => {
          try {
            navigation.navigate('MfoodScreen');
          } catch (err) {
            console.error(err);
          }
        }}
      >
        {/* View 4 */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              paddingBottom: 5,
              paddingLeft: 10,
              paddingRight: 10,
              paddingTop: 5,
            },
            dimensions.width
          )}
        >
          <Icon
            size={24}
            color={theme.colors['Text']}
            name={'MaterialCommunityIcons/popcorn'}
          />
          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['Poppins'].props}
            selectionColor={theme.colors['Text']}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.TextStyles(theme)['Poppins'].style,
                { fontFamily: 'Poppins_500Medium', fontSize: 14 }
              ),
              dimensions.width
            )}
          >
            {'m.food'}
          </Text>
        </View>
      </Pressable>
      {/* My m.tix */}
      <Pressable
        onPress={() => {
          try {
            navigation.navigate('MyMtixScreen');
          } catch (err) {
            console.error(err);
          }
        }}
      >
        {/* View 5 */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              paddingBottom: 5,
              paddingLeft: 10,
              paddingRight: 10,
              paddingTop: 5,
            },
            dimensions.width
          )}
        >
          <Icon
            size={24}
            color={theme.colors['Text']}
            name={'MaterialCommunityIcons/account-circle-outline'}
          />
          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['Poppins'].props}
            selectionColor={theme.colors['Text']}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.TextStyles(theme)['Poppins'].style,
                { fontFamily: 'Poppins_500Medium', fontSize: 14 }
              ),
              dimensions.width
            )}
          >
            {'My m.tix'}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default withTheme(NavigationBarBlock);
