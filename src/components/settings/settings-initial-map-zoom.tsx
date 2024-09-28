import {
  VStack,
  HStack,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Text,
} from "@gluestack-ui/themed";

import { actions, selectors, useAppDispatch, useAppSelector } from "@/store";
import { useGetDeviceLocation, useMapViewRef } from "@/hooks";

import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { useCallback, useEffect, useMemo } from "react";
import { MarkerCar } from "../marker-car";
import { ScreenLoading } from "../screen-loading";
import { pick } from "lodash";
import { useUserId } from "@/context/authentication/hooks";

function SettingsInitialMapZoom() {
  useGetDeviceLocation();

  const { location } = useAppSelector(selectors.location.selectUserLocation);
  const acceptOnlyMockedLocation = useAppSelector(
    selectors.settings.selectSettingsAcceptOnlyMockedLocation,
  );
  const userId = useUserId();

  const initialZoom = useAppSelector(
    selectors.settings.selectSettingInitialZoom,
  )(userId);

  const dispatch = useAppDispatch();

  const handleChangeInitialZoom = (value: number) => {
    if (!userId) {
      return;
    }
    dispatch(
      actions.persistent.settings.setInitialZoom({
        uid: userId,
        initialZoom: value,
      }),
    );
  };

  const centerObject = useMemo(
    () =>
      location
        ? { center: pick(location.coords, ["latitude", "longitude"]) }
        : {},
    [location],
  );

  const { mapViewRef, setMapViewRef } = useMapViewRef();

  useEffect(() => {
    if (!mapViewRef.current) {
      return;
    }
    mapViewRef.current.animateCamera({
      zoom: initialZoom,
      ...centerObject,
    });
  }, [centerObject, initialZoom, mapViewRef]);

  function onMapReady() {
    mapViewRef.current?.setCamera({
      zoom: initialZoom,
    });
  }

  const onMapViewRef = useCallback(
    (ref: Nullable<MapView>) => {
      setMapViewRef(ref, (r) => {
        r.setCamera({
          ...centerObject,
          zoom: initialZoom,
        });
      });
    },
    [centerObject, initialZoom, setMapViewRef],
  );

  if (!location) {
    return (
      <ScreenLoading
        children={
          acceptOnlyMockedLocation ? (
            <Text>waiting for mocked location data</Text>
          ) : null
        }
      />
    );
  }

  return (
    <VStack space="lg" flex={1}>
      <HStack space="lg">
        <Slider
          minValue={15}
          maxValue={20}
          step={0.05}
          defaultValue={initialZoom}
          size="md"
          orientation="horizontal"
          isDisabled={!userId}
          isReversed={false}
          onChange={handleChangeInitialZoom}
          flex={1}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
        <Text>{initialZoom}</Text>
      </HStack>
      <VStack flex={1}>
        <MapView
          onMapReady={onMapReady}
          ref={onMapViewRef}
          provider={PROVIDER_GOOGLE}
          style={{ flex: 1 }}
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 10,
            longitudeDelta: 10,
          }}
        >
          {!!mapViewRef.current && (
            <MarkerCar
              mapView={mapViewRef.current}
              coordinate={{
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
              }}
            />
          )}
        </MapView>
      </VStack>
    </VStack>
  );
}

export { SettingsInitialMapZoom };
