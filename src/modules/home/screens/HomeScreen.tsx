import React from 'react';

import {
  ScrollView,
  View,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import { HeroBanner } from '../components/HeroBanner';
import { MovieRow } from '../components/MovieRow';

export function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-black">
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <HeroBanner />

        <MovieRow
          title="Must-See Hits"
        />

        <MovieRow
          title="Trending Now"
        />

        <MovieRow
          title="Action Movies"
        />
      </ScrollView>
    </SafeAreaView>
  );
}

// To make it look really close to the Apple TV screenshot

// I would add:

// react-native-reanimated-carousel for the hero slider.
// Gradient overlay (react-native-linear-gradient) from bottom to transparent.
// Blur tab bar (@react-native-community/blur).
// Fast image loading (react-native-fast-image).
// Dynamic hero height:
// const HERO_HEIGHT = Dimensions.get('window').height * 0.75;
// Hero slider data from API:
// const { data: featuredMovies } =
//   useFeaturedMovies();

// and render the banner as a carousel instead of a single image.