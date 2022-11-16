import 'react-native-gesture-handler';
import * as React from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/styles/theme';
import { LogoTitle } from './src/Components/LogoTitle';
import { ArrowBack } from './src/Components/Atoms/ArrowBack';
import { List } from './src/Components/List';
import { PokemonDetails } from './src/Components/PokemonDetails';

const Stack = createStackNavigator();

const client = new ApolloClient({
  uri: 'https://beta.pokeapi.co/graphql/v1beta',
  cache: new InMemoryCache({
    addTypename: false,
    typePolicies: {
      Query: {
        fields: {
          pokemon_v2_pokemon: {
            keyArgs: false,
            merge(existing = [], incoming) {
              return [...existing, ...incoming];
            },
          },
        },
      },
    },
  }),
});

const Home = () => {
  return (
    <>
      <SafeAreaView style={{ flex: 1, marginTop: 10 }}>
        <List />
      </SafeAreaView>
    </>
  );
};

function MyStack() {
  React.useEffect(() => {
    StatusBar.setBarStyle('light-content');
  }, []);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerTitle: () => <LogoTitle />,
        headerStyle: {
          backgroundColor: theme.colors.darkBlue,
          height: 110,
          borderBottomEndRadius: 15,
          borderBottomLeftRadius: 15,
        },
        headerTintColor: theme.colors.white,
        headerBackTitleVisible: false,
        headerBackImage: () => <ArrowBack />,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="PokemonDetails" component={PokemonDetails} />
    </Stack.Navigator>
  );
}

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff',
  },
};

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer theme={MyTheme}>
        <ThemeProvider theme={theme}>
          <MyStack />
        </ThemeProvider>
      </NavigationContainer>
    </ApolloProvider>
  );
}
