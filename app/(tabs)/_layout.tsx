import { Tabs } from 'expo-router';
import { Sparkles, List } from 'lucide-react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#1a0b3d',
          borderTopColor: '#6b46c1',
          borderTopWidth: 1,
        },
        tabBarActiveTintColor: '#c084fc',
        tabBarInactiveTintColor: '#8b5cf6',
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Magic',
          tabBarIcon: ({ size, color }) => (
            <Sparkles size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="categories"
        options={{
          title: 'Categories',
          tabBarIcon: ({ size, color }) => (
            <List size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}