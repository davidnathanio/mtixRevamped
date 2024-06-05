import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Pressable, withTheme } from '@draftbit/ui';
import { Image, Text, View } from 'react-native';

const HistoryItemlistBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
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
              {props.label ?? ''}
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
            <View style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}>
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
  );
};

export default withTheme(HistoryItemlistBlock);
