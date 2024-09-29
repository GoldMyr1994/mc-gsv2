import { VStack } from "@/gluestack/components/ui/vstack";
import { Spinner } from "@/gluestack/components/ui/spinner";
import { Center } from "@/gluestack/components/ui/center";
import { ReactNode, useMemo } from "react";

interface Props {
  size?: "large" | "small";
  animating?: boolean;
  children?: ReactNode;
  childrenPlacement?: "top" | "bottom";
  gap?: number;
  absolute?: boolean;
}

function ScreenLoading({
  size = "large",
  animating = true,
  children = null,
  childrenPlacement = "bottom",
  gap = 4,
  absolute = false,
}: Props) {
  const absoluteStyle = useMemo(() => {
    if (!absolute) return {};
    return {
      position: "absolute" as const,
      top: "$0" as const,
      bottom: "$0" as const,
      left: "$0" as const,
      right: "$0" as const,
      bg: "$blackO70" as const,
    };
  }, [absolute]);

  return (
    <Center {...absoluteStyle} className="flex-1">
      <VStack className={` gap-${String(gap)} `}>
        {childrenPlacement === "top" && children}
        <Spinner animating={animating} size={size} />
        {childrenPlacement === "bottom" && children}
      </VStack>
    </Center>
  );
}

export { ScreenLoading };
