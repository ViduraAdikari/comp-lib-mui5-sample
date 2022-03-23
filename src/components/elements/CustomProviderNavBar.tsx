import React, {PropsWithChildren} from 'react';
import Stack from "@mui/material/Stack";
import ThemeSwitch from "../elements/switch/ThemeSwitch";

type CustomProviderNavBarProps = {
  onThemeChange: (isDarkTheme: boolean) => void
  prefersDarkMode: boolean
}

const CustomProviderNavBar: React.FC<CustomProviderNavBarProps> =
  (props: PropsWithChildren<CustomProviderNavBarProps>) => {

  const {prefersDarkMode} = props;

  return (
    <Stack direction='row'
      sx={{
        justifyContent: 'flex-end',
        paddingBottom: '.5em',
        marginBottom: '.5em',
        borderBottom: '1px solid #78909C',
      }}>
      <ThemeSwitch onChange={props.onThemeChange} defaultChecked={prefersDarkMode}/>
    </Stack>
  )
};

export default CustomProviderNavBar;