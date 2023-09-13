// import { ThemeConfig, extendTheme } from '@chakra-ui/react';

// const lightColors = {
//   primary: 'tail.500',
//   secondary: 'tail.200',
//   // styles: {
//   //   global: {
//   //     // styles for the `body`
//   //     body: {
//   //       bg: 'gray.400',
//   //       color: 'white',
//   //     },
//   //   },
//   // }
// };

// const darkColors = {
//   primary: 'orange.500',
//   secondary: 'orange.200',
// };

// // const config: ThemeConfig = {
// //   initialColorMode: 'dark', // 'dark' | 'light'
// //   useSystemColorMode: true,
// // };

// const lightTheme = extendTheme({
//   colors: lightColors,
//   // config,
// });

// const darkTheme = extendTheme({
//   // colors: { ...darkColors },
//   styles: {
//     global: {
//       // styles for the `body`
//       body: {
//         bg: 'gray.700',
//         color: 'white',
//       },
//     },
//   },
//   // config,
// });

// export { lightTheme, darkTheme };
// 1. import `extendTheme` function
import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const components = {
  Button: {
    variants: {
      outline: (props: any) => {
        const color = props.colorScheme;
        return {
          borderColor: `${color}.500`,
          color: `${color}.500`,
          _hover: {
            borderColor: `${color}.700`,
            color: `${color}.700`,
          },
        };
      },
    },
  },
};

// 3. extend the theme
const customTheme = extendTheme({ config, components });

export default customTheme;
