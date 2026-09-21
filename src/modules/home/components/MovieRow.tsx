import React from 'react';

import {
  View,
  Text,
  FlatList,
} from 'react-native';

import { MovieCard } from './MovieCard';

interface Props {
  title: string;
}

const movies = [
  { id: '1' },
  { id: '2' },
  { id: '3' },
  { id: '4' },
];

export function MovieRow({
  title,
}: Props) {
  return (
    <View className="mt-8">

      <View
        className="
          mb-4
          flex-row
          items-center
          px-4
        "
      >
        <Text
          className="
            text-4xl
            font-bold
            text-white
          "
        >
          {title}
        </Text>

        <Text
          className="
            ml-2
            text-4xl
            text-white
          "
        >
          ›
        </Text>
      </View>

      <FlatList
        horizontal
        data={movies}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        renderItem={() => (
          <MovieCard />
        )}
      />
    </View>
  );
}