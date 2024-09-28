import { ReactNode, useEffect, useState } from "react";
import { InteractionManager } from "react-native";

interface Props {
  children: ReactNode;
  placeholder?: ReactNode;
}

function OptimizedScreen({ children, placeholder = null }: Props) {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    void InteractionManager.runAfterInteractions(() => {
      setLoading(false);
    });
  }, []);

  return isLoading ? placeholder : children;
}

export { OptimizedScreen };
