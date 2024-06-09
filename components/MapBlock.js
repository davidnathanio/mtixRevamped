import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { MapMarker, MapView } from '@draftbit/maps';
import { withTheme } from '@draftbit/ui';
import { View } from 'react-native';

const MapBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <View
      style={StyleSheet.applyWidth(
        {
          backgroundColor: theme.colors['Custom Color'],
          bottom: 0,
          flex: 1,
          height: 170,
          justifyContent: 'flex-end',
          left: 0,
          position: 'absolute',
          right: 0,
          top: 0,
        },
        dimensions.width
      )}
    >
      {/* Map */}
      <MapView
        apiKey={'AIzaSyBzktToWosjNgrrUawZnbslB9NSXSXCkwo'}
        autoClusterMarkers={false}
        autoClusterMarkersDistanceMeters={10000}
        customMapStyle={'Beautiful West Coast Villa'}
        loadingEnabled={true}
        moveOnMarkerPress={true}
        rotateEnabled={true}
        scrollEnabled={true}
        showsCompass={false}
        showsPointsOfInterest={true}
        showsUserLocation={false}
        zoomEnabled={true}
        {...GlobalStyles.MapViewStyles(theme)['Map View'].props}
        latitude={-6.9171}
        longitude={107.6086}
        mapType={'standard'}
        style={StyleSheet.applyWidth(
          GlobalStyles.MapViewStyles(theme)['Map View'].style,
          dimensions.width
        )}
        zoom={20}
      >
        <MapMarker
          androidUseDefaultIconImplementation={false}
          flat={false}
          pinImageSize={50}
          tracksViewChanges={true}
          latitude={-6.9171}
          longitude={107.6086}
          pinColor={theme.colors['Custom Color_4']}
          title={'Braga XXI'}
        />
      </MapView>
    </View>
  );
};

export default withTheme(MapBlock);
