import { Tabs } from "expo-router";
import { Image, ImageSourcePropType, Text, View } from "react-native";
import { icons } from "@/constants";
import { Icons } from "@/lib/types";
import { cn } from "@/lib/utils";

const screens: Icons[] = ["home", "bookmark", "create", "profile"];

export default function _layout() {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#ffa001",
          tabBarInactiveTintColor: "#cdcde0",
          tabBarStyle: {
            backgroundColor: "#161622",
            borderTopWidth: 1,
            borderTopColor: "#232533",
            height: 84,
          },
        }}
      >
        {screens.map((screen) => (
          <Tabs.Screen
            name={screen}
            key={screen}
            options={{
              title: `${screen[0].toUpperCase()}${screen.slice(1)}`,
              headerShown: false,
              tabBarIcon: ({ color, focused }) => (
                <TabIcon
                  icon={icons[screen]}
                  color={color}
                  name={`${screen[0].toUpperCase()}${screen.slice(1)}`}
                  focused={focused}
                />
              ),
            }}
          />
        ))}
      </Tabs>
    </>
  );
}

type TabIconProps = {
  icon: ImageSourcePropType;
  color: string;
  name: string;
  focused: boolean;
};

const TabIcon = ({ icon, color, name, focused }: TabIconProps) => {
  return (
    <View className="items-center justify-center gap-2">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="h-6 w-6"
      />
      <Text
        className={cn(focused ? "font-psemibold" : "font-pregular", "text-xs")}
        style={{
          color,
        }}
      >
        {name}
      </Text>
    </View>
  );
};
