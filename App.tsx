import { Groups } from "@/screens/groups";
import "intl-pluralrules";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components/native";
import * as S from "./App.styles";
import "./i18n";
import { theme } from "./src/themes/theme";
import { Routes } from "@/routes";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={"transparent"}
        translucent
      />
      <S.Container>
        <Routes />
      </S.Container>
    </ThemeProvider>
  );
}
