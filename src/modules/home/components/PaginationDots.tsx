import React from 'react';

import { View } from 'react-native';

interface PaginationDotsProps {
  total: number;
  activeIndex: number;
}

export function PaginationDots({
  total,
  activeIndex,
}: PaginationDotsProps) {
  return (
    <View className="mt-8 flex-row justify-center">
      {Array.from({ length: total }).map(
        (_, index) => (
          <View
            key={index}
            className={`mx-1 rounded-full ${
              activeIndex === index
                ? 'h-2 w-8 bg-white'
                : 'h-2 w-2 bg-white/40'
            }`}
          />
        ),
      )}
    </View>
  );
}

// If you're using:

// npm install react-native-reanimated-carousel

// Then:

// <PaginationDots
//   total={featuredMovies.length}
//   activeIndex={currentIndex}
// />

// where:

// const [currentIndex, setCurrentIndex] =
//   useState(0);

// updates automatically from the carousel.