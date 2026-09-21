import React from 'react';

import {
  View,
  TouchableOpacity,
  Text,
} from 'react-native';

import Ionicons from
'react-native-vector-icons/Ionicons';

interface Props {
  activeTab: string;

  onChange: (
    tab: string,
  ) => void;
}

export function BottomTabBar({
  activeTab,
  onChange,
}: Props) {
  return (
    <View
      className="
        absolute
        bottom-4
        left-4
        right-4
        flex-row
        justify-around
        rounded-full
        bg-zinc-900
        py-3
      "
    >
      <TouchableOpacity
        className="items-center"
        onPress={() =>
          onChange('home')
        }
      >
        <Ionicons
          name={
            activeTab === 'home'
              ? 'tv'
              : 'tv-outline'
          }
          size={24}
          color="white"
        />

        <Text className="mt-1 text-white">
          TV
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="items-center"
        onPress={() =>
          onChange('downloads')
        }
      >
        <Ionicons
          name={
            activeTab === 'downloads'
              ? 'download'
              : 'download-outline'
          }
          size={24}
          color="white"
        />

        <Text className="mt-1 text-white">
          Downloads
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="items-center"
        onPress={() =>
          onChange('search')
        }
      >
        <Ionicons
          name={
            activeTab === 'search'
              ? 'search'
              : 'search-outline'
          }
          size={24}
          color="white"
        />

        <Text className="mt-1 text-white">
          Search
        </Text>
      </TouchableOpacity>
    </View>
  );
}

// Usage:
// const [tab, setTab] =
//   useState('home');

// return (
//   <>
//     <ScrollView>
//       ...
//     </ScrollView>

//     <BottomTabBar
//       activeTab={tab}
//       onChange={setTab}
//     />
//   </>
// );