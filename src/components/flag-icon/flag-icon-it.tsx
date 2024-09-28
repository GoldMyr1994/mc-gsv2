import { Defs, G, LinearGradient, Path, Stop, Svg } from "react-native-svg";

function FlagIconIT() {
  return (
    <Svg viewBox="0 0 21 15" width={24} height={24}>
      <Defs>
        <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a">
          <Stop stopColor="#FFF" offset="0%" />
          <Stop stopColor="#F0F0F0" offset="100%" />
        </LinearGradient>
        <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b">
          <Stop stopColor="#E43D4C" offset="0%" />
          <Stop stopColor="#CC2E3C" offset="100%" />
        </LinearGradient>
        <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c">
          <Stop stopColor="#1BB65D" offset="0%" />
          <Stop stopColor="#139149" offset="100%" />
        </LinearGradient>
      </Defs>
      <G fill="none" fillRule="evenodd">
        <Path fill="url(#a)" d="M0 0h21v15H0z" />
        <Path fill="url(#b)" d="M10 0h11v15H10z" />
        <Path fill="url(#c)" d="M0 0h7v15H0z" />
        <Path fill="url(#a)" d="M7 0h7v15H7z" />
      </G>
    </Svg>
  );
}

export { FlagIconIT };
