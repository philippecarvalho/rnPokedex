import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/styles/theme';

const Stack = createStackNavigator();

const client = new ApolloClient({
  uri: 'https://beta.pokeapi.co/graphql/v1beta',
  cache: new InMemoryCache({ addTypename: false }),
});

const Home = () => {
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <Text>Pokedex</Text>
      </SafeAreaView>
    </>
  );
};

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <ThemeProvider theme={theme}>
          <MyStack />
        </ThemeProvider>
      </NavigationContainer>
    </ApolloProvider>
  );
}
