import { Image } from "expo-image";
import { memo, useEffect, useRef } from "react";
import MapView, { type MapMarker, Marker } from "react-native-maps";

import { ASSETS } from "@/assets";
import { selectors, useAppSelector } from "@/store";
import { LatLng } from "@/types";
import { StyleSheet } from "react-native";
import { throttle } from "lodash";
import { useUserId } from "@/context/authentication/hooks";

interface Props {
  mapView: MapView;
  coordinate: LatLng;
  inhibit?: boolean;
}

const markerAnchor = { x: 0.5, y: 0.5 };
const markerRotation = 0;
const markerProps = { anchor: markerAnchor, rotation: markerRotation };

const styles = StyleSheet.create({
  image: {
    width: 92,
    height: 92,
  },
});

function animateMarkerToCoordinate(
  mapView: MapView,
  marker: MapMarker,
  coordinate: LatLng,
  duration = 100,
) {
  if (!mapView.state.isReady) {
    return;
  }
  marker.animateMarkerToCoordinate(coordinate, duration);
}
const throttleAnimateMarkerToCoordinate = throttle(
  animateMarkerToCoordinate,
  150,
);

function MarkerImage() {
  const userId = useUserId();
  const selectedCarIcon = useAppSelector(selectors.settings.selectSettingsCar)(
    userId,
  );
  const source = ASSETS.car[selectedCarIcon];

  return <Image source={source} style={styles.image} />;
}

function MarkerCarRenderer(props: Props) {
  const { coordinate, inhibit, mapView } = props;
  const initialCoordinate = useRef(coordinate);
  const markerRef = useRef<Nullable<MapMarker>>(null);

  useEffect(() => {
    if (!mapView.state.isReady || !markerRef.current || inhibit) {
      return;
    }
    throttleAnimateMarkerToCoordinate(
      mapView,
      markerRef.current,
      coordinate,
      500,
    );
  }, [coordinate, inhibit, mapView]);

  return (
    <Marker.Animated
      key="marker-car"
      id={"marker-car"}
      identifier={"marker-car"}
      ref={markerRef}
      coordinate={initialCoordinate.current}
      {...markerProps}
    >
      <MarkerImage />
    </Marker.Animated>
  );
}

function propsAreEqual(prev: Props, next: Props) {
  return (
    prev.coordinate.latitude === next.coordinate.latitude &&
    prev.coordinate.longitude === next.coordinate.longitude &&
    prev.inhibit === next.inhibit
  );
}

const MarkerCar = memo(MarkerCarRenderer, propsAreEqual);

export { MarkerCar };
