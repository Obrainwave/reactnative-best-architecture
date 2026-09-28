import React from 'react';

import {
  View,
  Text,
} from 'react-native';

export function MovieMeta() {
  return (
    <View className="px-4 pt-4">

      <Text
        className="
          text-2xl
          font-bold
          text-white
        "
      >
        The Lincoln Lawyer
      </Text>

      <View
        className="
          mt-2
          flex-row
          items-center
        "
      >
        <Text className="text-zinc-300">
          2024
        </Text>

        <View className="mx-2 rounded bg-zinc-700 px-1">
          <Text className="text-xs text-white">
            13+
          </Text>
        </View>

        <Text className="text-zinc-300">
          3 Seasons
        </Text>

        <View className="ml-2 rounded bg-red-600 px-1">
          <Text className="text-xs text-white">
            83%
          </Text>
        </View>
      </View>

      <TouchableOpacity
        className="
          mt-4
          flex-row
          items-center
          justify-center
          rounded-lg
          bg-white
          py-3
        "
      >
        <Text
          className="
            font-semibold
            text-black
          "
        >
          ▶ Play
        </Text>
      </TouchableOpacity>

      <Text
        className="
          mt-5
          text-lg
          font-semibold
          text-white
        "
      >
        S3:E1 La Culebra
      </Text>

      <Text
        className="
          mt-2
          leading-6
          text-zinc-400
        "
      >
        Successful Los Angeles lawyer
        Mickey Haller, sidelined after
        an accident, takes on a murder
        case to get back on...
      </Text>

    </View>
  );
}