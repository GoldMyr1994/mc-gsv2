import { useCallback, useRef } from "react";
import MapView from "react-native-maps";

function useMapViewRef() {
  const mapViewRef = useRef<MapView>();

  const setMapViewRef = useCallback(
    (ref: Nullable<MapView>, onSetRef?: (ref: MapView) => void) => {
      mapViewRef.current = ref ?? undefined;
      if (ref && onSetRef) {
        onSetRef(ref);
      }
    },
    [],
  );

  return { mapViewRef, setMapViewRef };
}

export { useMapViewRef };
