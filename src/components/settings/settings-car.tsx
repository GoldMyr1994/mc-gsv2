import {
  CircleIcon,
  HStack,
  Heading,
  Radio,
  RadioGroup,
  RadioIcon,
  RadioIndicator,
  Text,
  VStack,
} from "@gluestack-ui/themed";
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
        flexDirection="row"
        flexWrap="wrap"
        gap="$4"
        justifyContent="space-around"
        onChange={handleChange}
      >
        {Object.entries(ASSETS.car).map(([assetKey, asset]) => (
          <VStack key={assetKey}>
            <Text isTruncated>{assetKey}</Text>
            <Radio flex={1} value={assetKey} size="md">
              <RadioIndicator mr="$2">
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
