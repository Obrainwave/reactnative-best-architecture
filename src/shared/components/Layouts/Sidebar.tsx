import React from 'react';

import { View, Text, Pressable, Dimensions } from 'react-native';

import Animated, { useAnimatedStyle, withTiming, withSpring } from 'react-native-reanimated';

import { useSidebarStore } from '../../store/sidebar.store';

// const WIDTH =
//   Dimensions.get('window').width * 0.5;

const WIDTH =
  Math.min(
    Dimensions.get('window').width * 0.75,
    350,
  );

export function Sidebar() {
  const isOpen =
    useSidebarStore(
      state => state.isOpen,
    );

  const close =
    useSidebarStore(
      state => state.close,
    );

  const sidebarStyle =
    useAnimatedStyle(() => ({
      transform: [
        {
          // translateX: withTiming(
          //   isOpen ? 0 : -WIDTH,
          // ),
          translateX: withSpring(
            isOpen ? 0 : -WIDTH,
          ),
        },
      ],
    }));

  if (!isOpen) {
    return null;
  }

  return (
    <>
      {/* Overlay */}

      <Pressable
        className="
          absolute
          inset-0
          bg-black/60
          z-40
        "
        onPress={close}
      />

      {/* Sidebar */}

      <Animated.View
        style={[
          {
            width: WIDTH,
          },
          sidebarStyle,
        ]}
        className="
          absolute
          left-0
          top-0
          bottom-0
          bg-zinc-900
          z-50
          px-6
          pt-20
        "
      >
        <Text className="mb-8 text-2xl font-bold text-white">
          MuvieLive
        </Text>

        <Text className="mb-6 text-white">
          Dashboard
        </Text>

        <Text className="mb-6 text-white">
          Movies
        </Text>

        <Text className="mb-6 text-white">
          Series
        </Text>

        <Text className="mb-6 text-white">
          Downloads
        </Text>

        <Text className="mb-6 text-white">
          Settings
        </Text>
      </Animated.View>
    </>
  );
}


// Menu Button

// Inside your custom BottomTabBar:

// import Ionicons from
// 'react-native-vector-icons/Ionicons';

// const toggle =
//   useSidebarStore(
//     state => state.toggle,
//   );

// <TouchableOpacity
//   onPress={toggle}
// >
//   <Ionicons
//     name="menu"
//     size={26}
//     color="white"
//   />
// </TouchableOpacity>
// Render Sidebar Globally

// Put it inside your main layout.

// export function MainLayout() {
//   return (
//     <>
//       <MainTabs />

//       <Sidebar />
//     </>
//   );
// }

// This allows the sidebar to appear on top of every screen.