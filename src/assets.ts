/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-var-requires */

const ASSETS = {
  car: {
    "jaguar-e_type": require("../assets/js/car/jaguar-e_type.png") as number,
    "land-rover-defender":
      require("../assets/js/car/land-rover-defender.png") as number,
    "land-rover-discovery":
      require("../assets/js/car/land-rover-discovery.png") as number,
    "morgan-td": require("../assets/js/car/morgan-td.png") as number,
    morgan: require("../assets/js/car/morgan.png") as number,
    porsche: require("../assets/js/car/porsche.png") as number,
  },
  maneuver: {
    MANEUVER_UNSPECIFIED:
      require("../assets/js/maneuver/MANEUVER_UNSPECIFIED.png") as number,
    TURN_SLIGHT_LEFT:
      require("../assets/js/maneuver/TURN_SLIGHT_LEFT.png") as number,
    TURN_SHARP_LEFT:
      require("../assets/js/maneuver/TURN_SHARP_LEFT.png") as number,
    UTURN_LEFT: require("../assets/js/maneuver/UTURN_LEFT.png") as number,
    TURN_LEFT: require("../assets/js/maneuver/TURN_LEFT.png") as number,
    TURN_SLIGHT_RIGHT:
      require("../assets/js/maneuver/TURN_SLIGHT_RIGHT.png") as number,
    TURN_SHARP_RIGHT:
      require("../assets/js/maneuver/TURN_SHARP_RIGHT.png") as number,
    UTURN_RIGHT: require("../assets/js/maneuver/UTURN_RIGHT.png") as number,
    TURN_RIGHT: require("../assets/js/maneuver/TURN_RIGHT.png") as number,
    STRAIGHT: require("../assets/js/maneuver/STRAIGHT.png") as number,
    RAMP_LEFT: require("../assets/js/maneuver/RAMP_LEFT.png") as number,
    RAMP_RIGHT: require("../assets/js/maneuver/RAMP_RIGHT.png") as number,
    MERGE: require("../assets/js/maneuver/MERGE.png") as number,
    FORK_LEFT: require("../assets/js/maneuver/FORK_LEFT.png") as number,
    FORK_RIGHT: require("../assets/js/maneuver/FORK_RIGHT.png") as number,
    FERRY: require("../assets/js/maneuver/FERRY.png") as number,
    FERRY_TRAIN: require("../assets/js/maneuver/FERRY_TRAIN.png") as number,
    ROUNDABOUT_LEFT:
      require("../assets/js/maneuver/ROUNDABOUT_LEFT.png") as number,
    ROUNDABOUT_RIGHT:
      require("../assets/js/maneuver/ROUNDABOUT_RIGHT.png") as number,
    DEPART: require("../assets/js/maneuver/DEPART.png") as number,
    NAME_CHANGE: require("../assets/js/maneuver/NAME_CHANGE.png") as number,
  },
} as const;

export { ASSETS };
