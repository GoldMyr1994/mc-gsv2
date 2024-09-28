import { Drawer } from "expo-router/drawer";

import { DrawerContent, DrawerHeaderLeft } from "@/components";

export default function Layout() {
  return (
    <Drawer drawerContent={DrawerContent}>
      <Drawer.Screen
        name="tours"
        options={{
          drawerLabel: "Tour",
          headerLeft: DrawerHeaderLeft,
          headerTitle: "Tour",
        }}
      />
      <Drawer.Screen
        name="points-of-interest"
        options={{
          drawerLabel: "Punti di Interesse",
          headerLeft: DrawerHeaderLeft,
          headerTitle: "Punti di Interesse",
        }}
      />
      <Drawer.Screen
        name="settings"
        options={{
          drawerLabel: "Impostazioni",
          headerLeft: DrawerHeaderLeft,
          headerTitle: "Impostazioni",
        }}
      />
    </Drawer>
  );
}
