import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Feed" />
      <Drawer.Screen name="Article" />
    </Drawer.Navigator>
  );
}