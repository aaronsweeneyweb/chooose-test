import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: '#F6F7F9',
      },
    }),
  },
});

export default theme;