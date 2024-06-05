import * as StyleSheet from './utils/StyleSheet';

import Breakpoints from './utils/Breakpoints';

export const TextInputStyles = theme =>
  StyleSheet.create({
    'Text Area': {
      style: {
        borderBottomWidth: 1,
        borderColor: theme.colors.divider,
        borderLeftWidth: 1,
        borderRadius: 8,
        borderRightWidth: 1,
        borderTopWidth: 1,
        paddingBottom: 8,
        paddingLeft: 8,
        paddingRight: 8,
        paddingTop: 8,
      },
      props: {},
    },
    'Text Input': {
      style: {
        borderBottomWidth: 1,
        borderColor: theme.colors.divider,
        borderLeftWidth: 1,
        borderRadius: 8,
        borderRightWidth: 1,
        borderTopWidth: 1,
        paddingBottom: 8,
        paddingLeft: 8,
        paddingRight: 8,
        paddingTop: 8,
      },
      props: {},
    },
  });

export const SwipeableItemStyles = theme =>
  StyleSheet.create({
    'Swipeable Item': { style: { overflow: 'hidden' }, props: {} },
  });

export const SwiperStyles = theme =>
  StyleSheet.create({
    Swiper: {
      style: { borderStyle: 'solid', height: 300 },
      props: {
        dotActiveColor: theme.colors['Custom Color_10'],
      },
    },
  });

export const VideoPlayerStyles = theme =>
  StyleSheet.create({ Video: { style: { height: 215 }, props: {} } });

export const DeckSwiperStyles = theme =>
  StyleSheet.create({
    'Deck Swiper': { style: { position: 'absolute' }, props: {} },
  });

export const WebViewStyles = theme =>
  StyleSheet.create({ 'Web View': { style: { flex: 1 }, props: {} } });

export const DeckSwiperCardStyles = theme =>
  StyleSheet.create({
    'Deck Swiper Card': {
      style: {
        alignItems: 'center',
        borderWidth: 2,
        justifyContent: 'center',
        padding: 20,
      },
      props: {},
    },
  });

export const DividerStyles = theme =>
  StyleSheet.create({ Divider: { style: { height: 1 }, props: {} } });

export const YoutubePlayerStyles = theme =>
  StyleSheet.create({
    'Youtube Player': { style: { height: 250 }, props: {} },
  });

export const AccordionGroupStyles = theme =>
  StyleSheet.create({
    Accordion: {
      style: {
        fontSize: 16,
        paddingBottom: 8,
        paddingLeft: 8,
        paddingRight: 8,
        paddingTop: 8,
      },
      props: {},
    },
  });

export const ButtonStyles = theme =>
  StyleSheet.create({
    Button: {
      style: {
        backgroundColor: theme.colors.primary,
        borderRadius: 8,
        fontFamily: 'System',
        fontWeight: '700',
        textAlign: 'center',
      },
      props: {},
    },
  });

export const TextStyles = theme =>
  StyleSheet.create({
    Poppins: {
      style: {
        color: theme.colors.strong,
        fontFamily: 'Poppins_400Regular',
        textAlign: 'center',
      },
      props: {},
    },
    Text: { style: { color: theme.colors.strong }, props: {} },
  });

export const TableStyles = theme =>
  StyleSheet.create({ Table: { style: { flex: 1 }, props: {} } });

export const TableCellStyles = theme =>
  StyleSheet.create({
    'Table Cell': { style: { flex: 1, flexDirection: 'row' }, props: {} },
  });

export const BottomSheetStyles = theme =>
  StyleSheet.create({
    'Bottom Sheet': {
      style: {
        paddingBottom: 10,
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 10,
      },
      props: {},
    },
  });

export const ModalStyles = theme =>
  StyleSheet.create({ paymentStylesheet: { style: {}, props: {} } });

export const FetchStyles = theme =>
  StyleSheet.create({ Fetch: { style: { minHeight: 40 }, props: {} } });

export const ImageStyles = theme =>
  StyleSheet.create({
    Image: { style: { height: 100, width: 100 }, props: {} },
  });
