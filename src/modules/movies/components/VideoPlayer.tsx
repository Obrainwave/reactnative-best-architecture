import React from 'react';

import {
  View,
  TouchableOpacity,
} from 'react-native';

import Video from 'react-native-video';

import Ionicons from
'react-native-vector-icons/Ionicons';

export function VideoPlayer() {
  return (
    <View className="relative h-64">

      <Video
        source={{
          uri: 'movie-url',
        }}
        paused
        resizeMode="cover"
        className="h-full w-full"
      />

      <TouchableOpacity
        className="
          absolute
          left-4
          top-4
          h-10
          w-10
          items-center
          justify-center
          rounded-full
          bg-black/50
        "
      >
        <Ionicons
          name="chevron-back"
          size={22}
          color="#fff"
        />
      </TouchableOpacity>

      <TouchableOpacity
        className="
          absolute
          right-4
          top-4
          h-10
          w-10
          items-center
          justify-center
          rounded-full
          bg-black/50
        "
      >
        <Ionicons
          name="settings-outline"
          size={20}
          color="#fff"
        />
      </TouchableOpacity>

      <TouchableOpacity
        className="
          absolute
          left-1/2
          top-1/2
          h-16
          w-16
          -translate-x-8
          -translate-y-8
          items-center
          justify-center
          rounded-full
          bg-black/60
        "
      >
        <Ionicons
          name="play"
          size={32}
          color="#fff"
        />
      </TouchableOpacity>

    </View>
  );
}