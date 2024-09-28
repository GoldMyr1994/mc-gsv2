import { LatLng } from "react-native-maps";

const intlDistanceFormatter = new Intl.NumberFormat("it-IT", {
  style: "unit",
  unit: "meter",
  unitDisplay: "short",
});

class DurationFormatter {
  format(n: number) {
    const totalSeconds = n;
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60) + 1;
    return `${hours}h ${minutes}m`;
  }
}

class DistanceFormatter {
  format(n: number) {
    return intlDistanceFormatter.format(n);
  }
}

class SpeedFormatter {
  format(n: number) {
    return (n * 3.6).toFixed(0);
  }
}

class LatLngFormatter {
  format(ll: LatLng, fractionDigits = 4) {
    return `${ll.latitude.toFixed(fractionDigits)}, ${ll.longitude.toFixed(fractionDigits)}`;
  }
}

const durationFormatter = new DurationFormatter();
const distanceFormatter = new DistanceFormatter();
const speedFormatter = new SpeedFormatter();
const latLngFormatter = new LatLngFormatter();

export {
  distanceFormatter,
  durationFormatter,
  speedFormatter,
  latLngFormatter,
};
