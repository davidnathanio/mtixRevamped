import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import selectedSeatsToPrice from '../global-functions/selectedSeatsToPrice';
import selectedSeatsToString from '../global-functions/selectedSeatsToString';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  Divider,
  Icon,
  Pressable,
  ScreenContainer,
  SimpleStyleFlatList,
  SimpleStyleScrollView,
  withTheme,
} from '@draftbit/ui';
import { Text, View } from 'react-native';

const ChooseSeatsPageScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();
  const [seats, setSeats] = React.useState([
    { type: 'available', label: 'A1' },
    { type: 'available', label: 'A2' },
    { type: 'available', label: 'A3' },
    { type: 'available', label: 'A4' },
    { type: 'available', label: 'A5' },
    { type: 'available', label: 'A6' },
    { type: 'label', label: 'A' },
    { type: 'occupied', label: 'A7' },
    { type: 'occupied', label: 'A8' },
    { type: 'occupied', label: 'A9' },
    { type: 'occupied', label: 'A10' },
    { type: 'occupied', label: 'A11' },
    { type: 'occupied', label: 'A12' },
    { type: 'available', label: 'B1' },
    { type: 'available', label: 'B2' },
    { type: 'available', label: 'B3' },
    { type: 'available', label: 'B4' },
    { type: 'available', label: 'B5' },
    { type: 'available', label: 'B6' },
    { type: 'label', label: 'B' },
    { type: 'occupied', label: 'B7' },
    { type: 'occupied', label: 'B8' },
    { type: 'occupied', label: 'B9' },
    { type: 'occupied', label: 'B10' },
    { type: 'occupied', label: 'B11' },
    { type: 'occupied', label: 'B12' },
    { type: 'available', label: 'C1' },
    { type: 'available', label: 'C2' },
    { type: 'available', label: 'C3' },
    { type: 'available', label: 'C4' },
    { type: 'available', label: 'C5' },
    { type: 'available', label: 'C6' },
    { type: 'label', label: 'C' },
    { type: 'occupied', label: 'C7' },
    { type: 'occupied', label: 'C8' },
    { type: 'occupied', label: 'C9' },
    { type: 'occupied', label: 'C10' },
    { type: 'occupied', label: 'C11' },
    { type: 'occupied', label: 'C12' },
    { type: 'available', label: 'D1' },
    { type: 'available', label: 'D2' },
    { type: 'available', label: 'D3' },
    { type: 'available', label: 'D4' },
    { type: 'available', label: 'D5' },
    { type: 'available', label: 'D6' },
    { type: 'label', label: 'D' },
    { type: 'occupied', label: 'D7' },
    { type: 'occupied', label: 'D8' },
    { type: 'occupied', label: 'D9' },
    { type: 'occupied', label: 'D10' },
    { type: 'occupied', label: 'D11' },
    { type: 'occupied', label: 'D12' },
    { type: 'available', label: 'E1' },
    { type: 'available', label: 'E2' },
    { type: 'available', label: 'E3' },
    { type: 'available', label: 'E4' },
    { type: 'available', label: 'E5' },
    { type: 'available', label: 'E6' },
    { type: 'label', label: 'E' },
    { type: 'occupied', label: 'E7' },
    { type: 'occupied', label: 'E8' },
    { type: 'occupied', label: 'E9' },
    { type: 'occupied', label: 'E10' },
    { type: 'occupied', label: 'E11' },
    { type: 'occupied', label: 'E12' },
    { type: 'available', label: 'F1' },
    { type: 'available', label: 'F2' },
    { type: 'available', label: 'F3' },
    { type: 'available', label: 'F4' },
    { type: 'available', label: 'F5' },
    { type: 'available', label: 'F6' },
    { type: 'label', label: 'F' },
    { type: 'occupied', label: 'F7' },
    { type: 'occupied', label: 'F8' },
    { type: 'occupied', label: 'F9' },
    { type: 'occupied', label: 'F10' },
    { type: 'occupied', label: 'F11' },
    { type: 'occupied', label: 'F12' },
    { type: 'available', label: 'G1' },
    { type: 'available', label: 'G2' },
    { type: 'available', label: 'G3' },
    { type: 'available', label: 'G4' },
    { type: 'available', label: 'G5' },
    { type: 'available', label: 'G6' },
    { type: 'label', label: 'G' },
    { type: 'occupied', label: 'G7' },
    { type: 'occupied', label: 'G8' },
    { type: 'occupied', label: 'G9' },
    { type: 'occupied', label: 'G10' },
    { type: 'occupied', label: 'G11' },
    { type: 'occupied', label: 'G12' },
    { type: 'available', label: 'H1' },
    { type: 'available', label: 'H2' },
    { type: 'available', label: 'H3' },
    { type: 'available', label: 'H4' },
    { type: 'available', label: 'H5' },
    { type: 'available', label: 'H6' },
    { type: 'label', label: 'H' },
    { type: 'occupied', label: 'H7' },
    { type: 'occupied', label: 'H8' },
    { type: 'occupied', label: 'H9' },
    { type: 'occupied', label: 'H10' },
    { type: 'occupied', label: 'H11' },
    { type: 'occupied', label: 'H12' },
  ]);
  // ngecek apakah seatnya selected apa ga
  const seatIncluded = (seatsSelected, seat) => {
    // Type the code for the body of your function or hook here.
    // Functions can be triggered via Button/Touchable actions.
    // Hooks are run per ReactJS rules.

    /* String line breaks are accomplished with backticks ( example: `line one
line two` ) and will not work with special characters inside of quotes ( example: "line one line two" ) */
    let included = selectedSeats.includes(seat);

    if (included) {
      return 'AB5100';
    } else {
      return 'FFFFFF';
    }
  };

  const selectSeat = (selectedSeats, allSeatings, seat) => {
    // Type the code for the body of your function or hook here.
    // Functions can be triggered via Button/Touchable actions.
    // Hooks are run per ReactJS rules.

    /* String line breaks are accomplished with backticks ( example: `line one
line two` ) and will not work with special characters inside of quotes ( example: "line one line two" ) */

    // Find the seat object in seatings
    const seatObject = allSeatings.find(s => s.label === seat);

    // Check if the seat is available
    if (seatObject && seatObject.type === 'available') {
      // Check if the seat is already in the selectedSeats array
      const seatIndex = selectedSeats.indexOf(seat);

      if (seatIndex > -1) {
        // Seat is already selected, so remove it
        selectedSeats.splice(seatIndex, 1);
      } else {
        // Seat is not selected, so add it
        selectedSeats.push(seat);
      }
    }
    console.log('ini di selectSeat', selectedSeats);
    return selectedSeats;
  };

  const selectedSeatsColor = (selectedSeats, allSeats, seat) => {
    // Type the code for the body of your function or hook here.
    // Functions can be triggered via Button/Touchable actions.
    // Hooks are run per ReactJS rules.

    /* String line breaks are accomplished with backticks ( example: `line one
line two` ) and will not work with special characters inside of quotes ( example: "line one line two" ) */

    const seatObject = allSeats.find(s => s.label === seat);

    if (!seatObject) {
      return '#000000'; // Return black if seat not found (optional handling)
    }

    // Check seat status and return corresponding color code
    if (seatObject.type === 'unavailable') {
      return '#797777'; // Gray
    } else if (seatObject.type === 'occupied') {
      return '#BC0E0E'; // Red
    } else if (selectedSeats.includes(seat)) {
      return '#BD9759'; // Yellow
    } else {
      return '#015351'; // Available
    }
  };

  return (
    <ScreenContainer
      hasSafeArea={false}
      scrollable={false}
      hasTopSafeArea={true}
    >
      {/* header fix */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignContent: 'flex-start',
            alignItems: 'center',
            alignSelf: 'auto',
            backgroundColor: 'rgb(1, 83, 81)',
            flexDirection: 'row',
            flexWrap: 'nowrap',
            justifyContent: 'space-between',
            paddingBottom: 16,
            paddingLeft: 16,
            paddingRight: 16,
            paddingTop: 16,
          },
          dimensions.width
        )}
      >
        {/* Kiri Header */}
        <View
          style={StyleSheet.applyWidth(
            { flexDirection: 'row', gap: 8 },
            dimensions.width
          )}
        >
          {/* View Pressable */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'flex-start',
                alignSelf: 'center',
                flexDirection: 'column',
              },
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
                    position: 'relative',
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
          {/* View Judul */}
          <View>
            {/* Judul */}
            <Text
              accessible={true}
              {...GlobalStyles.TextStyles(theme)['Poppins'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Poppins'].style,
                  {
                    color: theme.colors['Surface'],
                    fontFamily: 'Poppins_700Bold',
                    fontSize: 16,
                  }
                ),
                dimensions.width
              )}
            >
              {'VINA: SEBELUM 7 HARI'}
            </Text>
            {/* Lokasi */}
            <Text
              accessible={true}
              {...GlobalStyles.TextStyles(theme)['Poppins'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Poppins'].style,
                  {
                    color: theme.colors['Surface'],
                    fontFamily: 'Poppins_600SemiBold',
                    fontSize: 16,
                    textAlign: 'left',
                  }
                ),
                dimensions.width
              )}
            >
              {'BRAGA XXI'}
            </Text>
          </View>
        </View>
        {/* Kanan Header */}
        <View>
          {/* View Keteragan */}
          <View>
            {/* Studio */}
            <Text
              accessible={true}
              {...GlobalStyles.TextStyles(theme)['Poppins'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Poppins'].style,
                  {
                    alignSelf: 'flex-end',
                    color: theme.colors['Surface'],
                    fontFamily: 'Poppins_700Bold',
                    fontSize: 16,
                  }
                ),
                dimensions.width
              )}
            >
              {'Studio 4'}
            </Text>
            {/* Tanggal */}
            <Text
              accessible={true}
              {...GlobalStyles.TextStyles(theme)['Poppins'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Poppins'].style,
                  { color: theme.colors['Surface'] }
                ),
                dimensions.width
              )}
            >
              {'May 2nd, 21:00'}
            </Text>
          </View>
        </View>
      </View>
      {/* Seat Types */}
      <View
        style={StyleSheet.applyWidth(
          {
            flexDirection: 'row',
            justifyContent: 'space-around',
            paddingBottom: 16,
            paddingLeft: 8,
            paddingRight: 8,
            paddingTop: 16,
          },
          dimensions.width
        )}
      >
        {/* Available */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              gap: 8,
              justifyContent: 'flex-start',
            },
            dimensions.width
          )}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                backgroundColor: theme.colors['Primary Color'],
                height: 16,
                width: 16,
              },
              dimensions.width
            )}
          />
          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['Poppins'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.TextStyles(theme)['Poppins'].style,
                { fontSize: 12 }
              ),
              dimensions.width
            )}
          >
            {'Available'}
          </Text>
        </View>
        {/* Available 4 */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              gap: 8,
              justifyContent: 'flex-start',
            },
            dimensions.width
          )}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                backgroundColor: theme.colors['Rating'],
                height: 16,
                width: 16,
              },
              dimensions.width
            )}
          />
          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['Poppins'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.TextStyles(theme)['Poppins'].style,
                { fontSize: 12 }
              ),
              dimensions.width
            )}
          >
            {'Selected'}
          </Text>
        </View>
        {/* Available 3 */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              gap: 8,
              justifyContent: 'flex-start',
            },
            dimensions.width
          )}
        >
          <View
            style={StyleSheet.applyWidth(
              { backgroundColor: theme.colors['Alert'], height: 16, width: 16 },
              dimensions.width
            )}
          />
          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['Poppins'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.TextStyles(theme)['Poppins'].style,
                { fontSize: 12 }
              ),
              dimensions.width
            )}
          >
            {'Occupied'}
          </Text>
        </View>
        {/* Available 2 */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              gap: 8,
              justifyContent: 'flex-start',
            },
            dimensions.width
          )}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                backgroundColor: theme.colors['Custom Color_2'],
                height: 16,
                width: 16,
              },
              dimensions.width
            )}
          />
          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['Poppins'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.TextStyles(theme)['Poppins'].style,
                { fontSize: 12 }
              ),
              dimensions.width
            )}
          >
            {'Unavailable'}
          </Text>
        </View>
      </View>
      <View
        style={StyleSheet.applyWidth(
          { flexDirection: 'row', flexWrap: 'wrap', width: '50%' },
          dimensions.width
        )}
      />
      <SimpleStyleScrollView
        keyboardShouldPersistTaps={'never'}
        nestedScrollEnabled={false}
        bounces={true}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={true}
        style={StyleSheet.applyWidth(
          { flexDirection: 'row', flexWrap: 'wrap', width: '100%' },
          dimensions.width
        )}
      >
        {/* View 2 */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignContent: 'flex-start',
              flexDirection: 'column',
              flexWrap: 'wrap',
              width: 580,
            },
            dimensions.width
          )}
        >
          <SimpleStyleFlatList
            data={seats}
            inverted={false}
            keyExtractor={(listData, index) =>
              listData?.id ?? listData?.uuid ?? index.toString()
            }
            keyboardShouldPersistTaps={'never'}
            listKey={'B98h5q9v'}
            nestedScrollEnabled={false}
            numColumns={1}
            onEndReachedThreshold={0.5}
            renderItem={({ item, index }) => {
              const listData = item;
              return (
                <>
                  <>
                    {!(listData?.type !== 'label') ? null : (
                      <Pressable
                        onPress={() => {
                          try {
                            setGlobalVariableValue({
                              key: 'selected_seats',
                              value: selectSeat(
                                Constants['selected_seats'],
                                seats,
                                listData?.label
                              ),
                            });
                          } catch (err) {
                            console.error(err);
                          }
                        }}
                      >
                        {/* View 2 */}
                        <View
                          style={StyleSheet.applyWidth(
                            {
                              backgroundColor: [
                                {
                                  minWidth: Breakpoints.Mobile,
                                  value: theme.colors['Primary Color'],
                                },
                                {
                                  minWidth: Breakpoints.Mobile,
                                  value: selectedSeatsColor(
                                    Constants['selected_seats'],
                                    seats,
                                    listData?.label
                                  ),
                                },
                              ],
                              height: 32,
                              justifyContent: 'center',
                              width: 32,
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
                                { color: theme.colors['Surface'], fontSize: 14 }
                              ),
                              dimensions.width
                            )}
                          >
                            {listData?.label}
                          </Text>
                        </View>
                      </Pressable>
                    )}
                  </>
                  {/* Seats Label */}
                  <>
                    {!(listData?.type === 'label') ? null : (
                      <View
                        style={StyleSheet.applyWidth(
                          { paddingLeft: 20, paddingRight: 20 },
                          dimensions.width
                        )}
                      >
                        <Text
                          accessible={true}
                          {...GlobalStyles.TextStyles(theme)['Poppins'].props}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.TextStyles(theme)['Poppins'].style,
                              { fontFamily: 'Poppins_700Bold', fontSize: 16 }
                            ),
                            dimensions.width
                          )}
                        >
                          {listData?.label}
                        </Text>
                      </View>
                    )}
                  </>
                </>
              );
            }}
            showsHorizontalScrollIndicator={true}
            showsVerticalScrollIndicator={true}
            horizontal={false}
            style={StyleSheet.applyWidth(
              {
                alignContent: 'flex-start',
                alignItems: 'stretch',
                flexDirection: 'row',
                flexWrap: 'wrap',
                gap: 8,
                marginBottom: 30,
                paddingLeft: 16,
                paddingRight: 16,
              },
              dimensions.width
            )}
          />
        </View>
      </SimpleStyleScrollView>
      {/* Divider 2 */}
      <Divider
        {...GlobalStyles.DividerStyles(theme)['Divider'].props}
        color={theme.colors['Light']}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(
            GlobalStyles.DividerStyles(theme)['Divider'].style,
            { height: 6 }
          ),
          dimensions.width
        )}
      />
      {/* Screen Area */}
      <Text
        accessible={true}
        {...GlobalStyles.TextStyles(theme)['Poppins'].props}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(GlobalStyles.TextStyles(theme)['Poppins'].style, {
            fontFamily: 'Poppins_700Bold',
            fontSize: 18,
            paddingBottom: 24,
            paddingTop: 24,
          }),
          dimensions.width
        )}
      >
        {'SCREEN AREA'}
      </Text>
      <Divider
        {...GlobalStyles.DividerStyles(theme)['Divider'].props}
        color={theme.colors['Light']}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(
            GlobalStyles.DividerStyles(theme)['Divider'].style,
            { height: 6 }
          ),
          dimensions.width
        )}
      />
      {/* Sticky Bawah */}
      <View
        style={StyleSheet.applyWidth(
          { bottom: 0, position: 'absolute', width: '100%' },
          dimensions.width
        )}
      >
        {/* Section Bawah */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignContent: 'space-between',
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingBottom: 10,
              paddingLeft: 43,
              paddingRight: 43,
              paddingTop: 10,
            },
            dimensions.width
          )}
        >
          {/* quantity */}
          <View>
            <Text
              accessible={true}
              {...GlobalStyles.TextStyles(theme)['Poppins'].props}
              style={StyleSheet.applyWidth(
                GlobalStyles.TextStyles(theme)['Poppins'].style,
                dimensions.width
              )}
            >
              {'Total Harga'}
            </Text>
            {/* Text 2 */}
            <Text
              accessible={true}
              {...GlobalStyles.TextStyles(theme)['Poppins'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Poppins'].style,
                  {
                    color: theme.colors['Primary Color'],
                    fontFamily: 'Poppins_700Bold',
                    fontSize: 18,
                  }
                ),
                dimensions.width
              )}
            >
              {'Rp '}
              {selectedSeatsToPrice(Constants['selected_seats'])}
            </Text>
          </View>
          {/* price */}
          <View>
            <Text
              accessible={true}
              {...GlobalStyles.TextStyles(theme)['Poppins'].props}
              style={StyleSheet.applyWidth(
                GlobalStyles.TextStyles(theme)['Poppins'].style,
                dimensions.width
              )}
            >
              {'Tempat Duduk'}
            </Text>
            {/* Text 2 */}
            <Text
              accessible={true}
              {...GlobalStyles.TextStyles(theme)['Poppins'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Poppins'].style,
                  {
                    color: theme.colors['Primary Color'],
                    fontFamily: 'Poppins_700Bold',
                    fontSize: 16,
                  }
                ),
                dimensions.width
              )}
            >
              {selectedSeatsToString(Constants['selected_seats'])}
            </Text>
          </View>
        </View>
        {/* Button */}
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
                if (Constants['selected_seats']?.length > 0) {
                  navigation.navigate('TicketConfirmOrderScreen');
                }
              } catch (err) {
                console.error(err);
              }
            }}
          >
            <View
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: [
                    { minWidth: Breakpoints.Mobile, value: 'rgb(1, 83, 81)' },
                    {
                      minWidth: Breakpoints.Mobile,
                      value:
                        Constants['selected_seats']?.length > 0
                          ? theme.colors['Primary Color']
                          : theme.colors['Light'],
                    },
                  ],
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
                {'Buy Ticket'}
              </Text>
            </View>
          </Pressable>
        </View>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(ChooseSeatsPageScreen);
