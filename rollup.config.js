const terser = require('@rollup/plugin-terser').default;

module.exports = {
    input: "src/index.js",
    output: {
        file: "dist/easyhtml2pdf-browser.js",
        format: "umd",
        name: "easyhtml2pdfBrowser",
        globals: {
            jspdf: "jspdf",
            html2canvas: "html2canvas"
        }
    },
    external: ["jspdf", "html2canvas"],
    plugins: [terser()],
};