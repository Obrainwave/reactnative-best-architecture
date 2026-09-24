import React from 'react';
import { useEffect, useState } from 'react';
import BootSplash from 'react-native-bootsplash';

import { AppProvider } from './app/providers/AppProvider';
import { RootNavigator } from './app/navigation/RootNavigator';
import { AuthStorage } from './storage/async-storage';
import { useAuthStore } from './modules/auth/store/auth.store';

export default function App() {
  const [initializing, setInitializing] = useState(true);
  const setAuth = useAuthStore(state => state.setAuth);

  useEffect(() => {
    AuthStorage.load()
      .then(session => {
        if (session) {
          setAuth(session.accessToken, session.refreshToken, session.user);
        }
      })
      .catch(() => {
        // Keychain read failed or the session is corrupted, fall through
        // to the logged-out state rather than hanging on the splash forever
      })
      .finally(() => setInitializing(false));
  }, []);

  if (initializing) return null;
  return (
    <AppProvider onReady={() => BootSplash.hide({ fade: true })}>
      <RootNavigator />
    </AppProvider>
  );
}

// npm install react-native-bootsplash

// npx react-native-bootsplash generate assets/logo.png \
//   --platforms=android,ios \
//   --background=000000 \
//   --logo-width=120

// The generator writes the Android drawable XML and iOS storyboard and, 
// for a bare RN project, edits AndroidManifest.xml and styles.xml for you, 
// so there's no manual native wiring beyond running that command.