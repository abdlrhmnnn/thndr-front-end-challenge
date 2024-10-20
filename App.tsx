import React, {createContext, useState, useMemo} from 'react';
import {useColorScheme} from 'react-native';
import {Provider as ReduxProvider} from 'react-redux';
import {store} from './src/redux/store';
import {Provider as PaperProvider} from 'react-native-paper';
import {CustomDarkTheme, CustomLightTheme} from './src/utils/theme';
import RootStack from './src/navigation /RootStack';

interface ThemeContextType {
  toggleTheme: () => void;
  isDarkTheme: boolean;
}

export const ThemeContext = createContext<ThemeContextType>({
  toggleTheme: () => {},
  isDarkTheme: false,
});

function App(): React.JSX.Element {
  const systemScheme = useColorScheme();
  const [isDarkTheme, setIsDarkTheme] = useState(systemScheme === 'dark');

  const toggleTheme = () => {
    setIsDarkTheme(prevTheme => !prevTheme);
  };

  const theme = useMemo(
    () => (isDarkTheme ? CustomDarkTheme : CustomLightTheme),
    [isDarkTheme],
  );

  const themeContextValue = useMemo(
    () => ({
      toggleTheme,
      isDarkTheme,
    }),
    [isDarkTheme],
  );

  return (
    <ReduxProvider store={store}>
      <ThemeContext.Provider value={themeContextValue}>
        <PaperProvider theme={theme}>
          <RootStack />
        </PaperProvider>
      </ThemeContext.Provider>
    </ReduxProvider>
  );
}

export default App;
