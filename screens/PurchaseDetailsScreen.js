import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import selectedSeatsToAdminFee from '../global-functions/selectedSeatsToAdminFee';
import selectedSeatsToPrice from '../global-functions/selectedSeatsToPrice';
import selectedSeatsToString from '../global-functions/selectedSeatsToString';
import selectedSeatsToTotalPrice from '../global-functions/selectedSeatsToTotalPrice';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  Divider,
  Icon,
  Pressable,
  ScreenContainer,
  withTheme,
} from '@draftbit/ui';
import { Image, Text, View } from 'react-native';

const PurchaseDetailsScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const [selected_filter, setSelected_filter] = React.useState('');

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
          {'Purchase Details'}
        </Text>
      </View>

      <View
        style={StyleSheet.applyWidth(
          { alignItems: 'center' },
          dimensions.width
        )}
      >
        <Image
          resizeMode={'cover'}
          source={{
            uri: 'https://static.draftbit.com/images/placeholder-image.png',
          }}
          {...GlobalStyles.ImageStyles(theme)['Image'].props}
          style={StyleSheet.applyWidth(
            GlobalStyles.ImageStyles(theme)['Image'].style,
            dimensions.width
          )}
        />
      </View>

      <Text
        accessible={true}
        {...GlobalStyles.TextStyles(theme)['Poppins'].props}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(GlobalStyles.TextStyles(theme)['Poppins'].style, {
            textAlign: 'left',
          }),
          dimensions.width
        )}
      >
        {'Transaction Date: '}
        {Constants['selected_history']?.transaction_date}
      </Text>
      {/* history itemlist */}
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
            StyleSheet.compose(GlobalStyles.ImageStyles(theme)['Image'].style, {
              borderRadius: 10,
              height: 175,
              width: 114,
            }),
            dimensions.width
          )}
        />
        {/* Keterangan */}
        <View style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}>
          {/* View 2 */}
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
                {Constants['selected_history']?.booking_code}
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
            <View style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}>
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
            <View style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}>
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
              style={StyleSheet.applyWidth({ width: 100 }, dimensions.width)}
            >
              {/* View 3 */}
              <View
                style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}
              >
                <Text
                  accessible={true}
                  {...GlobalStyles.TextStyles(theme)['Poppins'].props}
                  style={StyleSheet.applyWidth(
                    GlobalStyles.TextStyles(theme)['Poppins'].style,
                    dimensions.width
                  )}
                >
                  {'Success'}
                </Text>
              </View>
            </Pressable>
          </View>
        </View>
      </View>
      {/* transaction_details */}
      <View style={StyleSheet.applyWidth({ gap: 10 }, dimensions.width)}>
        <Text
          accessible={true}
          {...GlobalStyles.TextStyles(theme)['Poppins'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.TextStyles(theme)['Poppins'].style,
              {
                fontFamily: 'Poppins_700Bold',
                fontSize: 16,
                marginBottom: 10,
                textAlign: 'left',
              }
            ),
            dimensions.width
          )}
        >
          {'Detail Transaksi'}
        </Text>

        <View
          style={StyleSheet.applyWidth(
            { flexDirection: 'row', justifyContent: 'space-between' },
            dimensions.width
          )}
        >
          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['Poppins'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.TextStyles(theme)['Poppins'].style,
                { fontSize: 16 }
              ),
              dimensions.width
            )}
          >
            {'Transaction Ref'}
          </Text>
          {/* Text 2 */}
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
            {'Awuren'}
          </Text>
        </View>
        {/* View 5 */}
        <View
          style={StyleSheet.applyWidth(
            { flexDirection: 'row', justifyContent: 'space-between' },
            dimensions.width
          )}
        >
          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['Poppins'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.TextStyles(theme)['Poppins'].style,
                { fontSize: 16 }
              ),
              dimensions.width
            )}
          >
            {'Seats'}
          </Text>
          {/* Text 2 */}
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
            {selectedSeatsToString(
              Constants['selected_history']?.selected_tickets
            )}
          </Text>
        </View>
        {/* View 7 */}
        <View
          style={StyleSheet.applyWidth(
            { flexDirection: 'row', justifyContent: 'space-between' },
            dimensions.width
          )}
        >
          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['Poppins'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.TextStyles(theme)['Poppins'].style,
                { fontSize: 16 }
              ),
              dimensions.width
            )}
          >
            {'Studio'}
          </Text>
          {/* Text 2 */}
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
            {'Awuren'}
          </Text>
        </View>
        {/* View 2 */}
        <View
          style={StyleSheet.applyWidth(
            { flexDirection: 'row', justifyContent: 'space-between' },
            dimensions.width
          )}
        >
          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['Poppins'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.TextStyles(theme)['Poppins'].style,
                { fontSize: 16 }
              ),
              dimensions.width
            )}
          >
            {'Total Tickets'}
          </Text>
          {/* Text 2 */}
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
            {Constants['selected_history']?.selected_tickets?.length}
          </Text>
        </View>
        {/* View 3 */}
        <View
          style={StyleSheet.applyWidth(
            { flexDirection: 'row', justifyContent: 'space-between' },
            dimensions.width
          )}
        >
          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['Poppins'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.TextStyles(theme)['Poppins'].style,
                { fontSize: 16 }
              ),
              dimensions.width
            )}
          >
            {'Ticket Price'}
          </Text>
          {/* Text 2 */}
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
            {'Rp'}
            {selectedSeatsToPrice(
              Constants['selected_history']?.selected_tickets
            )}
          </Text>
        </View>
        {/* View 6 */}
        <View
          style={StyleSheet.applyWidth(
            { flexDirection: 'row', justifyContent: 'space-between' },
            dimensions.width
          )}
        >
          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['Poppins'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.TextStyles(theme)['Poppins'].style,
                { fontSize: 16 }
              ),
              dimensions.width
            )}
          >
            {'Admin Fee'}
          </Text>
          {/* Text 2 */}
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
            {' Rp'}
            {selectedSeatsToAdminFee(
              Constants['selected_history']?.selected_tickets
            )}
          </Text>
        </View>
        {/* View 8 */}
        <View
          style={StyleSheet.applyWidth(
            { flexDirection: 'row', justifyContent: 'space-between' },
            dimensions.width
          )}
        >
          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['Poppins'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.TextStyles(theme)['Poppins'].style,
                { fontSize: 16 }
              ),
              dimensions.width
            )}
          >
            {'Total Order'}
          </Text>
          {/* Text 2 */}
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
            {' Rp'}
            {selectedSeatsToTotalPrice(
              Constants['selected_history']?.selected_tickets
            )}
          </Text>
        </View>
        {/* View 4 */}
        <View
          style={StyleSheet.applyWidth(
            { flexDirection: 'row', justifyContent: 'space-between' },
            dimensions.width
          )}
        >
          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['Poppins'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.TextStyles(theme)['Poppins'].style,
                { fontSize: 16 }
              ),
              dimensions.width
            )}
          >
            {'Payment Method'}
          </Text>
          {/* Text 2 */}
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
            {'Gopay'}
          </Text>
        </View>
      </View>
      <Divider
        {...GlobalStyles.DividerStyles(theme)['Divider'].props}
        color={theme.colors['Medium']}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(
            GlobalStyles.DividerStyles(theme)['Divider'].style,
            { height: 6 }
          ),
          dimensions.width
        )}
      />
      {/* View 4 */}
      <View
        style={StyleSheet.applyWidth(
          { flexDirection: 'row', justifyContent: 'space-between' },
          dimensions.width
        )}
      >
        <Text
          accessible={true}
          {...GlobalStyles.TextStyles(theme)['Poppins'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.TextStyles(theme)['Poppins'].style,
              { fontSize: 16 }
            ),
            dimensions.width
          )}
        >
          {'Total Payment'}
        </Text>
        {/* Text 2 */}
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
          {'Rp'}
          {selectedSeatsToTotalPrice(
            Constants['selected_history']?.selected_tickets
          )}
        </Text>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(PurchaseDetailsScreen);
