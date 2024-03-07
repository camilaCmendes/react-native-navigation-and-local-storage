import "styled-components/native";
import { ThemeInterface } from "../themes/theme.interface";

declare module "styled-components/native" {
  export interface DefaultTheme extends ThemeInterface {}
}
