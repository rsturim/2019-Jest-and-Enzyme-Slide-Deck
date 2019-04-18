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

    // font: 'Roboto, sans-serif',
    // font: '"Avenir Next", system-ui, sans-serif',
    css: {
        fontSize: '1.4em',
    },

    font: '"Roboto Condensed", system-ui, sans-serif',
    weights: [400, 700],
    monospace: '"Roboto Mono", monospace',
    googleFont:
        'https://fonts.googleapis.com/css?family=Roboto+Condensed:400,700|Roboto+Mono',
    colors: {
        text: 'orange',
        background: '#000',
        link: '#9AD38B',
    },

    li: {},
    //   h1: {
    //     fontSize: "3em",
    //     letterSpacing: "0.1em",
    //     fontWeight: 100
    //   },
    blockquote: {
        fontSize: '18px',
        // letterSpacing: "0.1em"
    },
    Appear: {
        fontSize: '32px',
    },
    ul: {
        fontSize: '32px',
    },
};
