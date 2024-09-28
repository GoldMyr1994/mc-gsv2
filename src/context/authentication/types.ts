import { FirebaseAuthTypes } from "@react-native-firebase/auth";
import { Dispatch, SetStateAction } from "react";

interface AuthenticationContextState {
  user: Nullable<FirebaseAuthTypes.User>;
  setUser: (v: Nullable<FirebaseAuthTypes.User>) => void;
  isLoading: boolean;
  confirmationResult: Nullable<FirebaseAuthTypes.ConfirmationResult>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setConfirmationResult: (
    v: Nullable<FirebaseAuthTypes.ConfirmationResult>,
  ) => void;
  signIn: (
    phoneNumber: string | { prefix: string; phoneNumber: string },
  ) => Promise<FirebaseAuthTypes.ConfirmationResult>;
  signOut: () => Promise<void>;
  confirmOtp: (
    otp: string,
  ) => Promise<Nullable<FirebaseAuthTypes.UserCredential>>;
}

export type { AuthenticationContextState };
