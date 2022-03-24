// Component to be exported and used by consumer app
// Project: https://github.com/ViduraAdikari/comp-lib-mui5-sample.git
// Author: Vidura Adikari
// Website: https://www.viduraadikari.com/

import React, {PropsWithChildren, useEffect, useState} from 'react';
import {Theme, ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import {getTheme} from "../../util/theme/Theme";
import CustomProviderNavBar from "../elements/CustomProviderNavBar";

import '../../App.css';
import ElementsContainer from "../container/ElementsContainer";

type DashboardProps = {
  prefersDarkMode: boolean
}

const Dashboard: React.FC<DashboardProps> = (props: PropsWithChildren<DashboardProps>) => {
  const {prefersDarkMode} = props;

  const [isDark, setIsDark] = useState(prefersDarkMode);

  useEffect(() => {
    setIsDark(prefersDarkMode);
  }, [prefersDarkMode]);

  const handleOnThemeChange = (isDarkTheme: boolean) => {
    setIsDark(isDarkTheme);
  }

  const theme: Theme = React.useMemo(() => {
    return getTheme(isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <CustomProviderNavBar onThemeChange={handleOnThemeChange} prefersDarkMode={isDark}/>

      <ElementsContainer/>
    </ThemeProvider>
  )
};

export default Dashboard;