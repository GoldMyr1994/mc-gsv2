import { VStack } from "@/gluestack/components/ui/vstack";
import { Text } from "@/gluestack/components/ui/text";
import {
  Radio,
  RadioGroup,
  RadioIcon,
  RadioIndicator,
} from "@/gluestack/components/ui/radio";
import { Heading } from "@/gluestack/components/ui/heading";
import { HStack } from "@/gluestack/components/ui/hstack";
import { CircleIcon } from "@/gluestack/components/ui/icon";
import { Image } from "expo-image";
import React, { useCallback } from "react";

import { ASSETS } from "@/assets";
import { actions, selectors, useAppDispatch, useAppSelector } from "@/store";
import { isAssetCarName } from "@/utils";
import { useUserId } from "@/context/authentication/hooks";

function SettingsCar() {
  const userId = useUserId();

  const selectedCarIcon = useAppSelector(selectors.settings.selectSettingsCar)(
    userId,
  );

  const dispatch = useAppDispatch();

  const handleChange = useCallback(
    (v: unknown) => {
      if (!isAssetCarName(v)) {
        console.log("WARN: invalid car icon asset name", v);
        return;
      }
      if (!userId) {
        console.log("WARN: user uid is not set");
        return;
      }
      dispatch(
        actions.persistent.settings.setCarIconAssetName({
          car: v,
          uid: userId,
        }),
      );
    },
    [dispatch, userId],
  );

  return (
    <VStack space="lg">
      <HStack>
        <Heading>ICONA MACCHINA</Heading>
      </HStack>
      <RadioGroup
        value={selectedCarIcon}
        onChange={handleChange}
        className="flex-row flex-wrap gap-4 justify-around"
      >
        {Object.entries(ASSETS.car).map(([assetKey, asset]) => (
          <VStack key={assetKey}>
            <Text isTruncated>{assetKey}</Text>
            <Radio value={assetKey} size="md" className="flex-1">
              <RadioIndicator className="mr-2">
                <RadioIcon as={CircleIcon} />
              </RadioIndicator>
              <Image source={asset} style={{ width: 100, height: 100 }} />
            </Radio>
          </VStack>
        ))}
      </RadioGroup>
    </VStack>
  );
}

export { SettingsCar };
