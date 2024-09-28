import { LocationObject } from "expo-location";
import { UserLocationChangeEvent } from "react-native-maps";

function transformNativeEventCoordinates(
  e: UserLocationChangeEvent,
): Optional<LocationObject> {
  if (e.nativeEvent.error) {
    return;
  }

  const { coordinate } = e.nativeEvent;
  if (!coordinate || coordinate.accuracy === 0) {
    return;
  }

  const {
    altitudeAccuracy = null,
    isFromMockProvider,
    timestamp,
    ...rest
  } = coordinate;

  return {
    coords: {
      ...rest,
      altitudeAccuracy,
    },
    timestamp,
    mocked: !!isFromMockProvider,
  };
}

export { transformNativeEventCoordinates };
