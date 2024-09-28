import { FirebaseAnalyticsTypes } from "@react-native-firebase/analytics";
import { ReactNativeFirebase } from "@react-native-firebase/app";
import { FirebaseAuthTypes } from "@react-native-firebase/auth";
import { FirebaseCrashlyticsTypes } from "@react-native-firebase/crashlytics";
import { FirebasePerformanceTypes } from "@react-native-firebase/perf";

type FBAuth = ReactNativeFirebase.FirebaseModuleWithStaticsAndApp<
  FirebaseAuthTypes.Module,
  FirebaseAuthTypes.Statics
>;

type FBAnalytics = ReactNativeFirebase.FirebaseModuleWithStaticsAndApp<
  FirebaseAnalyticsTypes.Module,
  FirebaseAnalyticsTypes.Statics
>;

type FBCrashlytics = ReactNativeFirebase.FirebaseModuleWithStaticsAndApp<
  FirebaseCrashlyticsTypes.Module,
  FirebaseCrashlyticsTypes.Statics
>;

type FBPerformance = ReactNativeFirebase.FirebaseModuleWithStaticsAndApp<
  FirebasePerformanceTypes.Module,
  FirebasePerformanceTypes.Statics
>;

export type { FBAuth, FBAnalytics, FBCrashlytics, FBPerformance };
