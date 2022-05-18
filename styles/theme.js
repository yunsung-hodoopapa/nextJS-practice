import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { deepPurple, amber } from "@mui/material/colors";

// theme 인스턴스 생성합니다.
// primary와 secondary는 여러분이 원하는대로 바꿔도 됩니다.
let theme = createTheme({
  palette: {
    primary: deepPurple,
    secondary: amber,
  },
});

// 화면 크기에 따라 MUI 반응형 글꼴을 설정합니다.
theme = responsiveFontSizes(theme);

export default theme;
