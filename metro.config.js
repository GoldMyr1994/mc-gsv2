const { withNativeWind: withNativeWind } = require("nativewind/metro");

/* eslint-env node */
require("ts-node/register");
module.exports = require("./metro.config.ts");
