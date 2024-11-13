import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Routes } from './src/Routes';
import { Anunciar } from './src/pages/Anunciar';
import { Namebar } from './src/pages/NameBar';
import { Description } from './src/pages/Description';
import { Selectyourimage } from './src/pages/SelectYourImage';
import { ChoiseImage } from './src/pages/ChoiseImage';
import { CameraScreen } from './src/pages/Camera';
import { Location } from './src/pages/Location';
import { SendModal } from './src/components/SendModal';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={Routes} options={{ headerShown: false }} />
        <Stack.Screen name="anunciar" component={Anunciar} options={{ headerShown: false }} />
        <Stack.Screen name="nomebar" component={Namebar} options={{ headerShown: false }} />
        <Stack.Screen name="description" component={Description} options={{ headerShown: false }} />
        <Stack.Screen name="selectyourimage" component={Selectyourimage} options={{ headerShown: false }} />
        <Stack.Screen name="choiseImage" component={ChoiseImage} options={{ headerShown: false }} />
        <Stack.Screen name="camerascreen" component={CameraScreen} options={{ headerShown: false }} />
        <Stack.Screen name="location" component={Location} options={{ headerShown: false }} />
        <Stack.Screen name="sendmodal" component={SendModal} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
