const terser = require('@rollup/plugin-terser').default;

module.exports = {
    input: "src/index.js",
    output: {
        file: "dist/print-html-2-pdf.js",
        format: "umd",
        name: "PrintHtmlToPdf",
        sourcemap: false
    },
    // Removed jspdf and html2canvas, no external dependencies
    plugins: [terser()]
};
