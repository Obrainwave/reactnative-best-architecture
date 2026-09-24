import { useAuthStore } from '../store/auth.store';

export function ProfileScreen() {
  const user = useAuthStore(state => state.user);
  const authenticated = useAuthStore(state => state.authenticated);

  if (!user) return null;

  return (
    <View>
      <Text>{user.name}</Text>
      <Text>{user.email}</Text>
    </View>
  );
}