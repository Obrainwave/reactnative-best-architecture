import React from 'react';

import {
  ImageBackground,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import Ionicons from
'react-native-vector-icons/Ionicons';

export function HeroBanner() {
  return (
    <ImageBackground
      source={{
        uri: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c',
      }}
      className="h-[760px] w-full"
      resizeMode="cover"
    >
      <View className="flex-1 bg-black/40">

        {/* HEADER */}

        <View className="flex-row items-center justify-between px-6 pt-4">

          <Text className="text-5xl font-bold text-white">
            M
          </Text>

          <TouchableOpacity
            className="h-12 w-12 items-center justify-center rounded-full bg-white/20"
          >
            <Ionicons
              name="person"
              size={22}
              color="#fff"
            />
          </TouchableOpacity>

        </View>

        <View className="flex-1 justify-end pb-10">

          {/* TITLE */}

          <Text
            className="
              text-center
              text-7xl
              font-extrabold
              tracking-[20px]
              text-white
            "
          >
            SILO
          </Text>

          {/* META */}

          <View
            className="
              mt-4
              flex-row
              items-center
              justify-center
            "
          >
            <Text className="text-white">
              TV Show
            </Text>

            <Text className="mx-2 text-white">
              •
            </Text>

            <Text className="text-white">
              Sci-Fi
            </Text>

            <Text className="mx-2 text-white">
              •
            </Text>

            <Text className="text-white">
              Adventure
            </Text>

            <Text className="mx-2 text-white">
              •
            </Text>

            <Text className="text-white">
              18
            </Text>
          </View>

          {/* TAGLINE */}

          <Text
            className="
              mt-4
              text-center
              text-2xl
              font-semibold
              text-white
            "
          >
            Another Season Is Coming
          </Text>

          {/* BUTTON */}

          <TouchableOpacity
            className="
              mx-10
              mt-8
              flex-row
              items-center
              justify-center
              rounded-full
              bg-white
              py-4
            "
          >
            <Ionicons
              name="add"
              size={26}
              color="#000"
            />

            <Text
              className="
                ml-2
                text-xl
                font-semibold
                text-black
              "
            >
              Add to Watchlist
            </Text>
          </TouchableOpacity>

          {/* DOTS */}

          <View
            className="
              mt-8
              flex-row
              justify-center
            "
          >
            {[1,2,3,4,5,6,7].map(
              (item,index) => (
                <View
                  key={item}
                  className={`
                    mx-1
                    h-2
                    rounded-full
                    ${
                      index === 1
                        ? 'w-8 bg-white'
                        : 'w-2 bg-white/40'
                    }
                  `}
                />
              ),
            )}
          </View>

        </View>

      </View>
    </ImageBackground>
  );
}