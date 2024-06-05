import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  Divider,
  Icon,
  Pressable,
  ScreenContainer,
  SimpleStyleFlatList,
  withTheme,
} from '@draftbit/ui';
import { Image, Text, View } from 'react-native';

const PurchaseHistoryScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();

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
          {'Purchase History'}
        </Text>
      </View>

      <View
        style={StyleSheet.applyWidth(
          { flexDirection: 'row' },
          dimensions.width
        )}
      >
        {/* View 2 */}
        <View style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}>
          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['Poppins'].props}
            style={StyleSheet.applyWidth(
              GlobalStyles.TextStyles(theme)['Poppins'].style,
              dimensions.width
            )}
          >
            {'Ticket'}
          </Text>
        </View>
        {/* View 3 */}
        <View style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}>
          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['Poppins'].props}
            style={StyleSheet.applyWidth(
              GlobalStyles.TextStyles(theme)['Poppins'].style,
              dimensions.width
            )}
          >
            {'XXI Cafe'}
          </Text>
        </View>
      </View>
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
      <SimpleStyleFlatList
        data={Constants['purchase_history']}
        horizontal={false}
        inverted={false}
        keyExtractor={(listData, index) =>
          listData?.id ?? listData?.uuid ?? index.toString()
        }
        keyboardShouldPersistTaps={'never'}
        listKey={'Pu51W9Bn'}
        nestedScrollEnabled={false}
        numColumns={1}
        onEndReachedThreshold={0.5}
        renderItem={({ item, index }) => {
          const listData = item;
          return (
            <>
              {/* movie detai */}
              <View
                style={StyleSheet.applyWidth(
                  { flexDirection: 'row', gap: 35 },
                  dimensions.width
                )}
              >
                <Image
                  resizeMode={'cover'}
                  {...GlobalStyles.ImageStyles(theme)['Image'].props}
                  source={{
                    uri: 'https://cdn0-production-images-kly.akamaized.net/xCJgLGq2Sh43x0oVBpfGK9xlv6Y=/800x1066/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4788070/original/025926800_1711640349-428258907_18296664022157327_6175042479492571650_n.jpg',
                  }}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.ImageStyles(theme)['Image'].style,
                      { borderRadius: 10, height: 175, width: 114 }
                    ),
                    dimensions.width
                  )}
                />
                {/* Keterangan */}
                <View
                  style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}
                >
                  {/* View 2 */}
                  <View
                    style={StyleSheet.applyWidth(
                      { flexDirection: 'row' },
                      dimensions.width
                    )}
                  >
                    {/* View 2 */}
                    <View
                      style={StyleSheet.applyWidth(
                        { flex: 1 },
                        dimensions.width
                      )}
                    >
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
                        {'Vina'}
                      </Text>
                    </View>
                    {/* View 3 */}
                    <View
                      style={StyleSheet.applyWidth(
                        { flex: 1, justifyContent: 'center' },
                        dimensions.width
                      )}
                    >
                      <Text
                        accessible={true}
                        {...GlobalStyles.TextStyles(theme)['Poppins'].props}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.TextStyles(theme)['Poppins'].style,
                            { fontSize: 10 }
                          ),
                          dimensions.width
                        )}
                      >
                        {'Booking Code: '}
                        {listData?.booking_code}
                      </Text>
                    </View>
                  </View>
                  {/* View 3 */}
                  <View
                    style={StyleSheet.applyWidth(
                      { flexDirection: 'row' },
                      dimensions.width
                    )}
                  >
                    {/* View 2 */}
                    <View
                      style={StyleSheet.applyWidth(
                        { flex: 1 },
                        dimensions.width
                      )}
                    >
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
                        {'Braga XXI'}
                      </Text>
                    </View>
                    {/* View 3 */}
                    <View
                      style={StyleSheet.applyWidth(
                        { flex: 1 },
                        dimensions.width
                      )}
                    >
                      <Text
                        accessible={true}
                        {...GlobalStyles.TextStyles(theme)['Poppins'].props}
                        style={StyleSheet.applyWidth(
                          GlobalStyles.TextStyles(theme)['Poppins'].style,
                          dimensions.width
                        )}
                      >
                        {'Success\n'}
                      </Text>
                    </View>
                  </View>

                  <Text
                    accessible={true}
                    {...GlobalStyles.TextStyles(theme)['Poppins'].props}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Poppins'].style,
                        { alignSelf: 'flex-start', textAlign: 'left' }
                      ),
                      dimensions.width
                    )}
                  >
                    {'Tiket (x)'}
                  </Text>
                  {/* View 4 */}
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        bottom: 0,
                        flexDirection: 'row',
                        position: 'absolute',
                        width: '100%',
                      },
                      dimensions.width
                    )}
                  >
                    {/* View 2 */}
                    <View
                      style={StyleSheet.applyWidth(
                        { flex: 1 },
                        dimensions.width
                      )}
                    >
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
                        {'May 7th 2024, 14:20'}
                      </Text>
                    </View>

                    <Pressable
                      onPress={() => {
                        try {
                          setGlobalVariableValue({
                            key: 'selected_history',
                            value: listData,
                          });
                          navigation.navigate('PurchaseDetailsScreen');
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                      style={StyleSheet.applyWidth(
                        { width: 100 },
                        dimensions.width
                      )}
                    >
                      {/* View 3 */}
                      <View
                        style={StyleSheet.applyWidth(
                          { flex: 1 },
                          dimensions.width
                        )}
                      >
                        <Text
                          accessible={true}
                          {...GlobalStyles.TextStyles(theme)['Poppins'].props}
                          style={StyleSheet.applyWidth(
                            GlobalStyles.TextStyles(theme)['Poppins'].style,
                            dimensions.width
                          )}
                        >
                          {'View\n'}
                        </Text>
                      </View>
                    </Pressable>
                  </View>
                </View>
              </View>
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
            </>
          );
        }}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
      />
    </ScreenContainer>
  );
};

export default withTheme(PurchaseHistoryScreen);
