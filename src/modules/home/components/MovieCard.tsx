import React from 'react';

import {
  View,
  Image,
} from 'react-native';

export function MovieCard() {
  return (
    <View
      className="
        ml-4
        h-56
        w-40
        overflow-hidden
        rounded-3xl
      "
    >
      <Image
        source={{
          uri: 'https://picsum.photos/300/450',
        }}
        className="h-full w-full"
      />
    </View>
  );
}