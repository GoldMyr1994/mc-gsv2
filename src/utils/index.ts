import { ASSETS } from "@/assets";

export * from "./formatter";
export * from "./abort-on-unmount";
export * from "./native-event-coordinates";
export * from "./lat-lng-projection";
export * from "./distance";

function pickErrorMessageFromUnknown(
  o: unknown,
  defaultValue = "Something went wrong"
): string {
  let errorMessage = defaultValue;
  if (
    o &&
    typeof o === "object" &&
    "message" in o &&
    typeof o.message === "string"
  ) {
    errorMessage = o.message;
  }
  return errorMessage;
}

function isAssetCarName(v: unknown): v is keyof typeof ASSETS.car {
  if (typeof v !== "string") {
    return false;
  }
  return Object.keys(ASSETS.car).includes(v);
}

export { pickErrorMessageFromUnknown, isAssetCarName };
