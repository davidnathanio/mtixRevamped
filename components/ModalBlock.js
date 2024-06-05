import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { SimpleStyleScrollView, withTheme } from '@draftbit/ui';
import { Image, Modal, Text, View } from 'react-native';

const ModalBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <Modal
      animationType={'none'}
      supportedOrientations={['portrait', 'landscape']}
      {...GlobalStyles.ModalStyles(theme)['paymentStylesheet'].props}
      presentationStyle={'formSheet'}
      style={StyleSheet.applyWidth(
        GlobalStyles.ModalStyles(theme)['paymentStylesheet'].style,
        dimensions.width
      )}
      transparent={true}
      visible={true}
    >
      {/* Content 4 */}
      <View
        style={StyleSheet.applyWidth(
          {
            backgroundColor: 'rgba(0, 0, 0, 0)',
            gap: 10,
            justifyContent: 'flex-end',
            minHeight: '60%',
            paddingBottom: 10,
            paddingLeft: 16,
            paddingRight: 16,
            paddingTop: 10,
          },
          dimensions.width
        )}
      >
        <Text
          accessible={true}
          {...GlobalStyles.TextStyles(theme)['Text'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
              fontFamily: 'Poppins_700Bold',
              fontSize: 16,
            }),
            dimensions.width
          )}
        >
          {'Cast'}
        </Text>
        {/* Actor List */}
        <SimpleStyleScrollView
          bounces={true}
          keyboardShouldPersistTaps={'never'}
          nestedScrollEnabled={false}
          showsHorizontalScrollIndicator={true}
          showsVerticalScrollIndicator={true}
          horizontal={true}
          style={StyleSheet.applyWidth(
            {
              backgroundColor: 'rgb(222, 32, 32)',
              flexDirection: 'row',
              paddingBottom: 100,
              paddingTop: 100,
            },
            dimensions.width
          )}
        >
          {/* Actor  */}
          <View
            style={StyleSheet.applyWidth(
              { alignItems: 'center', gap: 5, width: 100 },
              dimensions.width
            )}
          >
            <Image
              resizeMode={'cover'}
              {...GlobalStyles.ImageStyles(theme)['Image'].props}
              source={{
                uri: 'https://ffis3.is3.cloudhost.id/profile/photo/416/Anggy-Umbara.jpg',
              }}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.ImageStyles(theme)['Image'].style,
                  { borderRadius: 5, height: 85, width: 70 }
                ),
                dimensions.width
              )}
            />
            {/* Anggy Umbara */}
            <Text
              accessible={true}
              {...GlobalStyles.TextStyles(theme)['Poppins'].props}
              style={StyleSheet.applyWidth(
                GlobalStyles.TextStyles(theme)['Poppins'].style,
                dimensions.width
              )}
            >
              {'Anggy Umbara'}
            </Text>
          </View>
          {/* Actor  2 */}
          <View
            style={StyleSheet.applyWidth(
              { alignItems: 'center', gap: 5, width: 100 },
              dimensions.width
            )}
          >
            <Image
              resizeMode={'cover'}
              {...GlobalStyles.ImageStyles(theme)['Image'].props}
              source={{
                uri: 'https://ffis3.is3.cloudhost.id/profile/photo/416/Anggy-Umbara.jpg',
              }}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.ImageStyles(theme)['Image'].style,
                  { borderRadius: 5, height: 85, width: 70 }
                ),
                dimensions.width
              )}
            />
            {/* Anggy Umbara */}
            <Text
              accessible={true}
              {...GlobalStyles.TextStyles(theme)['Poppins'].props}
              style={StyleSheet.applyWidth(
                GlobalStyles.TextStyles(theme)['Poppins'].style,
                dimensions.width
              )}
            >
              {'Anggy Umbara'}
            </Text>
          </View>
          {/* Actor  3 */}
          <View
            style={StyleSheet.applyWidth(
              { alignItems: 'center', gap: 5, width: 100 },
              dimensions.width
            )}
          >
            <Image
              resizeMode={'cover'}
              {...GlobalStyles.ImageStyles(theme)['Image'].props}
              source={{
                uri: 'https://ffis3.is3.cloudhost.id/profile/photo/416/Anggy-Umbara.jpg',
              }}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.ImageStyles(theme)['Image'].style,
                  { borderRadius: 5, height: 85, width: 70 }
                ),
                dimensions.width
              )}
            />
            {/* Anggy Umbara */}
            <Text
              accessible={true}
              {...GlobalStyles.TextStyles(theme)['Poppins'].props}
              style={StyleSheet.applyWidth(
                GlobalStyles.TextStyles(theme)['Poppins'].style,
                dimensions.width
              )}
            >
              {'Anggy Umbara'}
            </Text>
          </View>
          {/* Actor  4 */}
          <View
            style={StyleSheet.applyWidth(
              { alignItems: 'center', gap: 5, width: 100 },
              dimensions.width
            )}
          >
            <Image
              resizeMode={'cover'}
              {...GlobalStyles.ImageStyles(theme)['Image'].props}
              source={{
                uri: 'https://ffis3.is3.cloudhost.id/profile/photo/416/Anggy-Umbara.jpg',
              }}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.ImageStyles(theme)['Image'].style,
                  { borderRadius: 5, height: 85, width: 70 }
                ),
                dimensions.width
              )}
            />
            {/* Anggy Umbara */}
            <Text
              accessible={true}
              {...GlobalStyles.TextStyles(theme)['Poppins'].props}
              style={StyleSheet.applyWidth(
                GlobalStyles.TextStyles(theme)['Poppins'].style,
                dimensions.width
              )}
            >
              {'Anggy Umbara'}
            </Text>
          </View>
          {/* Actor  5 */}
          <View
            style={StyleSheet.applyWidth(
              { alignItems: 'center', gap: 5, width: 100 },
              dimensions.width
            )}
          >
            <Image
              resizeMode={'cover'}
              {...GlobalStyles.ImageStyles(theme)['Image'].props}
              source={{
                uri: 'https://ffis3.is3.cloudhost.id/profile/photo/416/Anggy-Umbara.jpg',
              }}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.ImageStyles(theme)['Image'].style,
                  { borderRadius: 5, height: 85, width: 70 }
                ),
                dimensions.width
              )}
            />
            {/* Anggy Umbara */}
            <Text
              accessible={true}
              {...GlobalStyles.TextStyles(theme)['Poppins'].props}
              style={StyleSheet.applyWidth(
                GlobalStyles.TextStyles(theme)['Poppins'].style,
                dimensions.width
              )}
            >
              {'Anggy Umbara'}
            </Text>
          </View>
        </SimpleStyleScrollView>
      </View>
    </Modal>
  );
};

export default withTheme(ModalBlock);
