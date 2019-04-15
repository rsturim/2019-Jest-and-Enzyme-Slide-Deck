import { hack as theme } from 'mdx-deck/themes';

// export default {
//   ...theme,
//   h1: {
//     textTransform: "uppercase",
//     letterSpacing: "0.1em"
//   },
//   color: {
//     background: "red"
//   },
//   blockquote: {
//     fontStyle: "italic"
//   }
// };

export default {
    // extends the default theme
    ...theme,

    font: 'Roboto, sans-serif',
    css: {
        fontSize: '1em',
    },

    colors: {
        text: 'orange',
        background: '#000',
        link: '#9AD38B',
    },

    //   li: {
    //     lineHeight: "600px"
    //   },
    //   h1: {
    //     fontSize: "3em",
    //     letterSpacing: "0.1em",
    //     fontWeight: 100
    //   },
    blockquote: {
        fontSize: '18px',
        // letterSpacing: "0.1em"
    },
    ul: {
        fontSize: '18px',
    },
};
