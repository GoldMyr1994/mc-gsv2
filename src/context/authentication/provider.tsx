import { FirebaseAuthTypes } from "@react-native-firebase/auth";
import { noop } from "lodash";
import {
  PropsWithChildren,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { AuthenticationContext } from "./context";
import { SplashScreen } from "expo-router";

function AuthenticationContextProvider(props: PropsWithChildren) {
  const { children } = props;

  const unsubscribe = useRef(noop);
  const [user, setUser] = useState<Nullable<FirebaseAuthTypes.User>>(null);
  const userId = user?.uid;

  const [isLoading, setLoading] = useState<boolean>(false);
  const [confirmationResult, setConfirmationResult] =
    useState<Nullable<FirebaseAuthTypes.ConfirmationResult>>(null);

  // useEffect(() => {
  //   void analytics().setUserId(userId ?? null);
  //   console.log(`INFO: analytics().setUserId(${userId ?? null})`);
  //   if (userId) {
  //     console.log(`INFO: crashlytics().setUserId(${userId})`);
  //     void crashlytics().setUserId(userId);
  //   }
  // }, [userId]);

  useEffect(() => {
    console.log("INFO: onUserChanged subscribe");
    void SplashScreen.hideAsync();
    // unsubscribe.current = auth().onUserChanged((user) => {
    //   setUser(user);
    //   setLoading(false);
    // });
    return function cleanup() {
      console.log("INFO: onUserChanged unsubscribe");
      unsubscribe.current();
    };
  }, []);

  const signIn = useCallback(
    (
      data:
        | string
        | {
            prefix: string;
            phoneNumber: string;
          },
    ) => {
      let fullPhoneNumber = "";
      if (typeof data === "string") {
        fullPhoneNumber = data;
      } else {
        const { prefix, phoneNumber } = data;
        fullPhoneNumber = (prefix + phoneNumber).replace(/\s/g, "");
      }
      return new Promise<FirebaseAuthTypes.ConfirmationResult>((r) => {
        r({} as unknown as FirebaseAuthTypes.ConfirmationResult);
      });
      // return auth().signInWithPhoneNumber(fullPhoneNumber);
    },
    [],
  );
  const signOut = useCallback(
    () =>
      new Promise<void>((r) => {
        r();
      }),
    [],
  );
  const confirmOtp = useCallback(
    (otp: string) => {
      if (!confirmationResult) {
        throw new Error("confirmationResult is not set");
      }
      return confirmationResult.confirm(otp);
    },
    [confirmationResult],
  );

  return (
    <AuthenticationContext.Provider
      value={{
        confirmationResult,
        isLoading,
        user,
        setConfirmationResult,
        setLoading,
        setUser,
        signIn,
        signOut,
        confirmOtp,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
}

export { AuthenticationContextProvider };
