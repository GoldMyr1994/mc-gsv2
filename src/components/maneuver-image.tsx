import { Image } from "expo-image";

import { ASSETS } from "@/assets";
import { Maneuver } from "@/types";

interface Props {
  maneuver: Maneuver;
}

function ManeuverImage({ maneuver }: Props) {
  return (
    <Image
      style={{
        width: 64,
        height: 64,
      }}
      source={ASSETS.maneuver[maneuver]}
    />
  );
}

export { ManeuverImage };
