import React from 'react';

import {
  ScrollView,
  View,
} from 'react-native';

import { SafeAreaView }
from 'react-native-safe-area-context';

import { VideoPlayer } from '../components/VideoPlayer';
import { MovieMeta } from '../components/MovieMeta';
import { ActionButtons } from '../components/ActionButtons';
import { EpisodeTabs } from '../components/EpisodeTabs';
import { RecommendationRow } from '../components/RecommendationRow';

export function MovieDetailsScreen() {
  return (
    <SafeAreaView className="flex-1 bg-black">

      <VideoPlayer />

      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
      >
        <MovieMeta />

        <ActionButtons />

        <EpisodeTabs />

        <RecommendationRow />
      </ScrollView>

    </SafeAreaView>
  );
}