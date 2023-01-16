const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
    mode: "jit",
    purge: {
        content: [
            "./src/**/*.{js,ts,jsx,tsx}",
        ],
        safelist: [
            ...["primary", "black", "white", "green", "yellow", "magenta", "blueUA", "yellowUA"].flatMap(
                (variant) => [
                    `hover:text-${variant}-200`,
                    `text-${variant}-500`,
                    `bg-${variant}-500`,
                    `active:bg-${variant}-500`,
                    `active:bg-${variant}-600`,
                    `checked:bg-${variant}-200`,
                    `checked:bg-${variant}-500`,
                    `focus:bg-${variant}-500`,
                    `hover:bg-${variant}-500`,
                    `ring-${variant}-100`,
                    `focus:ring-${variant}-50`,
                ]
            ),
        ],
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        screens: {
            s: "1px",
            t: "768px",
            d: "1380px",
        },
        extend: {
            rotate: {
                "firulete-down": "-235deg",
            },
            fontFamily: {
                sans: ["Poppins", ...defaultTheme.fontFamily.sans],
                hand: ["January Handwriting"],
            },
            fontSize: {},
            inset: {"28%": "28%"},
            borderRadius: {
                "full-i": "999px !important",
            },
            borderWidth: {},
            lineHeight: {
                128: "1.56rem",
                "13px": "13px",
                "14px": "14px",
                "14-4px": "14.4px",
                "15px": "15px",
                "15-6px": "15.6px",
                "16px": "16px",
                "16-9px": "16.9px",
                "17px": "17px",
                "18px": "18px",
                "18-2px": "18.2px",
                "19px": "19px",
                "19-5px": "19.5px",
                "20px": "20px",
                "20-8px": "20.8px",
                "21px": "21px",
                "21-6px": "21.6px",
                "22px": "22px",
                "22-5px": "22.5px",
                "23px": "23px",
                "23-4px": "23.4px",
                "24px": "24px",
                "25px": "25px",
                "26px": "26px",
                "27px": "27px",
                "28-5px": "28.5px",
                "28-8px": "28.8px",
                "30px": "30px",
                "31-2px": "31.2px",
                "32-2px": "32.2px",
                "33px": "33px",
                "33-6px": "33.6px",
                "34px": "34px",
                "35-5px": "35.5px",
                "36px": "36px",
                "38px": "38px",
                "40-8px": "40.8px",
                "41px": "41px",
                "51-6px": "51.6px",
                "52px": "52px",
                "56px": "56px",
                "57-6px": "57.6px",
                "65px": "65px",
            },
            boxShadow: {
                "0-6-24": "0 6px 24px rgba(0, 0, 0, 0.12)",
                "0-6-24_06": "0 6px 24px rgba(0, 0, 0, 0.06)",
                "2-5-15": "2px 5px 15px rgba(0, 0, 0, 0.28)",
                "0-2-5": "0px 2px 5px rgba(0, 0, 0, 0.25)",
                "4-10-24-8": "4px 10px 24px 8px rgba(0, 0, 0, 0.35)",
                "0-3-16": "0px 3px 16px rgba(0, 0, 0, 0.06)",
                "0-5-15": "0px 5px 15px rgba(0, 0, 0, 0.10)",
                "0-6-24_18": "0px 6px 24px rgba(0, 0, 0, 0.18)",
            },
            spacing: {},
            width: {},
            height: {
                "1539px": "1539px",
            },
            minWidth: {},
            maxWidth: {},
            minHeight: {},
            maxHeight: {},

            colors: {
                primary: {
                    DEFAULT: "#E84300",
                    50: "#FFDDCF",
                    100: "#FFCAB5",
                    200: "#FFA682",
                    300: "#FF824F",
                    400: "#FF5E1C",
                    500: "#E84300",
                    600: "#B53400",
                    700: "#822600",
                    800: "#4F1700",
                    900: "#1C0800",
                },
                black: {
                    DEFAULT: "#000000",
                    50: "#737373",
                    100: "#666666",
                    200: "#4D4D4D",
                    300: "#333333",
                    400: "#1A1A1A",
                    500: "#000000",
                    600: "#000000",
                    700: "#000000",
                    800: "#000000",
                    900: "#000000",
                },
                white: {
                    DEFAULT: "#FFFFFF",
                    50: "#FFFFFF",
                    100: "#FFFFFF",
                    200: "#FFFFFF",
                    300: "#FFFFFF",
                    400: "#FFFFFF",
                    500: "#FFFFFF",
                    600: "#E6E6E6",
                    700: "#CCCCCC",
                    800: "#B3B3B3",
                    900: "#999999",
                },
                green: {
                    DEFAULT: "#38C058",
                    50: "#C2EDCC",
                    100: "#B3E9BF",
                    200: "#93DFA5",
                    300: "#73D68B",
                    400: "#54CD70",
                    500: "#38C058",
                    600: "#2B9544",
                    700: "#1F6930",
                    800: "#123E1C",
                    900: "#051208",
                },
                "magenta": {
                    DEFAULT: "#8C3C92",
                    50: "#D8AADC",
                    100: "#D29BD6",
                    200: "#C57ECA",
                    300: "#B861BE",
                    400: "#A848AF",
                    500: "#8C3C92",
                    600: "#662C6A",
                    700: "#401B42",
                    800: "#1A0B1B",
                    900: "#000000",
                },
                "blueUA": {
                    DEFAULT: '#035BB9',
                    '50': '#77B8FD',
                    '100': '#63ADFC',
                    '200': '#3B98FC',
                    '300': '#1283FB',
                    '400': '#046FE1',
                    '500': '#035BB9',
                    '600': '#024082',
                    '700': '#01254B',
                    '800': '#000A13',
                    '900': '#000000'
                },
                'yellowUA': {
                    DEFAULT: '#FED63D',
                    '50': '#FFFDF4',
                    '100': '#FFF8DF',
                    '200': '#FFF0B7',
                    '300': '#FEE78E',
                    '400': '#FEDF66',
                    '500': '#FED63D',
                    '600': '#FECA05',
                    '700': '#CAA001',
                    '800': '#927401',
                    '900': '#5A4800'
                },
                secondary: defaultTheme.colors.black,
                footer: "#F0F3F8",
                "we-connect-charities-bg-right": "#10143c",
                "looking-for-a-cause": "#F7F9FC",
                "nonprofit-step2": "#2D75F8",
                cream: "#FEF4F0",
                "blue-darker": "#080719",
                "blue-dark": "#0A173C",
                "form-contact": "#FFFFFF",
                "blue-darkest": "#091023",
                "yellow-border": "#FBBC1B",
                "secondary-yellow": "#FDF8F1",
                "red-select-border": "#E8430033",
                "secondary-gray-1": "#DAE0E9",
                "secondary-gray-2": "#D3D9E1",
                "secondary-gray-3": "#A1AAAF",
                "secondary-gray-4": "#E5E9EF",
                "secondary-gray-5": "#7C7C7C",
                "secondary-gray-6": "#F1F3F4",
                "secondary-gray-7": "#FFD5C3",
                "search-border": "#E84300",
                input: "#D3D9E1",
                "nonprofit-logo": "#E3E4E580",
                "input-border": "#C6CACC",
                "secondary-violet": "#531dc6",
                "active-fundraiser": "#E5E5E5",
                "graph-option-cyan": "#419296",
                "bright-orange": "#F0AD42",
                // "secondary-green-1": "#38C058", // reemplazado por green-500
                // gray, red, green son nombres de colores reservados, usar otro nombre
                // https://tailwindcss.com/docs/customizing-colors
            },
        },
    },
    variants: {
        extend: {
            backgroundColor: ["checked"],
            borderColor: ["checked"],
        },
    },
};

const range = (start, end, step = 1) =>
    Array.from({length: (end - start) / step + 1}, (_, i) => i + start);

range(6, 50).forEach((i) => {
    module.exports.theme.extend.fontSize[`${i}px`] = `${i}px`;
});
range(1, 1000).forEach((i) => {
    module.exports.theme.extend.spacing[`${i}px`] = `${i}px`;
});
range(1, 1380).forEach((i) => {
    module.exports.theme.extend.width[`${i}px`] = `${i}px`;
    module.exports.theme.extend.minWidth[`${i}px`] = `${i}px`;
    module.exports.theme.extend.maxWidth[`${i}px`] = `${i}px`;
});
range(1, 1000).forEach((i) => {
    module.exports.theme.extend.height[`${i}px`] = `${i}px`;
    module.exports.theme.extend.minHeight[`${i}px`] = `${i}px`;
    module.exports.theme.extend.maxHeight[`${i}px`] = `${i}px`;
});
range(1, 10).forEach((i) => {
    module.exports.theme.extend.borderWidth[`${i}px`] = `${i}px`;
    module.exports.theme.extend.borderWidth[`${i}pxi`] = `${i}px !important`;
});
range(1, 100).forEach((i) => {
    module.exports.theme.extend.height[`${i}vh`] = `${i}vh`;
    module.exports.theme.extend.minHeight[`${i}vh`] = `${i}vh`;
    module.exports.theme.extend.maxHeight[`${i}vh`] = `${i}vh`;
    module.exports.theme.extend.width[`${i}vw`] = `${i}vw`;
    module.exports.theme.extend.minWidth[`${i}vw`] = `${i}vw`;
    module.exports.theme.extend.maxWidth[`${i}vw`] = `${i}vw`;
});
range(1, 50).forEach((i) => {
    module.exports.theme.extend.borderRadius[`${i}px`] = `${i}px`;
    module.exports.theme.extend.borderRadius[`${i}pxi`] = `${i}px !important`;
});
