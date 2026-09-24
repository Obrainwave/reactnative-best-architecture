import React from 'react';
import { AppProvider } from './app/providers/AppProvider';
import { RootNavigator } from './app/navigation/RootNavigator';
import { AuthStorage } from '@/storage/async-storage';
import { useAuthStore } from '../store/auth.store';

export default function App() {
    const [ready, setReady] = useState(false);
  const setAuth = useAuthStore(state => state.setAuth);

  useEffect(() => {
    AuthStorage.load().then(session => {
      if (session) {
        setAuth(session.accessToken, session.refreshToken, session.user);
      }
      setReady(true);
    });
  }, []);

  if (!ready) return <SplashScreen />;
  return (
    <AppProvider>
      <RootNavigator />
    </AppProvider>
  );
}