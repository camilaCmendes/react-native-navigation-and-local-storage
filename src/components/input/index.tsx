import { TextInput, TextInputProps } from "react-native";
import * as S from "./styles";
type InputProps = TextInputProps & {
  inputRef?: React.RefObject<TextInput>;
};

export const Input: React.FC<InputProps> = ({ inputRef, ...rest }) => {
  return <S.Container ref={inputRef} {...rest} />;
};
