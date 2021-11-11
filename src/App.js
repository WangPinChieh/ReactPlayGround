import React, {useContext} from 'react';
import { format } from 'date-fns';
const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

const ThemeContext = React.createContext(themes.light);
export default function App() {
  return (
    <ThemeContext.Provider value={themes.dark}>
      <>
      
      {format(new Date('2021-11-11T13:14:12'), 'yyyy-MM-dd HH:mm:ss')}
      </>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      I am styled by theme context!
    </button>
  );
}