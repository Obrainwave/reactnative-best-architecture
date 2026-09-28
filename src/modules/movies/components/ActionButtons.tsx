import React from 'react';

import {
  View,
  TouchableOpacity,
  Text,
} from 'react-native';

import Ionicons from
'react-native-vector-icons/Ionicons';

export function ActionButtons() {
  return (
    <View
      className="
        mx-4
        mt-5
        flex-row
        justify-between
      "
    >
      <ActionItem
        icon="add"
        label="My List"
      />

      <ActionItem
        icon="thumbs-up-outline"
        label="Rate"
      />

      <ActionItem
        icon="share-social-outline"
        label="Share"
      />
    </View>
  );
}

function ActionItem({
  icon,
  label,
}: any) {
  return (
    <TouchableOpacity
      className="
        flex-1
        items-center
        rounded-xl
        bg-zinc-900
        py-4
        mx-1
      "
    >
      <Ionicons
        name={icon}
        size={22}
        color="#fff"
      />

      <Text
        className="
          mt-2
          text-xs
          text-white
        "
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}