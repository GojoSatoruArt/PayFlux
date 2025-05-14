module.exports = {
    purge: ["./src/**/*.{svelte,js,ts}"],

    // or 'media' or 'class'
    darkMode: false,

    theme: {
        extend: {}
    },

    variants: {
        extend: {}
    },

    plugins: []
};

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,svelte,ts}"],

    theme: {
        extend: {}
    },

    plugins: []
};