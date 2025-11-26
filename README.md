<!-- # EasyHtmlToPdf-Browser

A super-simple browser library to print any HTML element as a PDF using the browser's native print dialog (Ctrl+P style). No jsPDF, no html2canvas, no rasterization—just true, selectable, copyable text and perfect layout.

## Features
- Print any HTML element as a PDF (or paper) using the browser's print dialog
- Supports LTR and RTL content (English, Urdu, Arabic, etc.)
- Selectable/copyable text, real tables, and CSS styling
- Full CSS support, including external stylesheets 
- No dependencies
- Works in all modern browsers

## Installation
Just include the built JS file in your page:

```html
<script src="dist/easyhtml2pdf-browser.js"></script>
```

## Usage

```html
<button onclick="printPDF()">Print PDF</button>
<div id="report"> ... your HTML ... </div>
<script>
function printPDF() {
    EasyHtmlToPdf.print({
        element: document.getElementById("report"),
        styles: "body{margin:0;padding:0;font-family:'Arial',sans-serif;}div{background:#fff;padding:40px;}"
    });
}
</script>
```

## Example Templates
See `examples/example-english.html`, `examples/example-urdu.html`, and `examples/example-arabic.html` for ready-to-use demos.

## API

```js
EasyHtmlToPdf.print({
    element: HTMLElement, // required
    styles: string        // optional CSS to inject
});
```

## License
MIT -->


# Print-Html-2-Pdf

A super-simple browser library to print any HTML element as a PDF using the browser's native print dialog (Ctrl+P style). No jsPDF, no html2canvas, no rasterization—just true, selectable, copyable text and perfect layout.

## Features

* Print any HTML element as a PDF (or paper) using the browser's print dialog
* 100% real text (no images)
* Selectable/copyable text
* Full CSS support
* RTL support (Urdu, Arabic, Persian)
* Full CSS support, including external stylesheets 
* No dependencies
* Works in all modern browsers

## Installation

You can include this library in multiple ways depending on your project setup.

### **Option 1 — CDN / Script Tag**

Simply include the JS file in your HTML page:

```html
<script src="https://print-html-2-pdf.pages.dev/print-html-2-pdf.js"></script>
```

### **Option 2 — NPM / Frontend Frameworks**

Install via NPM:

```bash
npm install print-html-2-pdf
```

Then import in your project:

**React / Vue / Angular / Modern JS:**

```js
import PrintHtmlToPdf from 'print-html-2-pdf';
```

**CommonJS / Node.js:**

```js
const PrintHtmlToPdf = require('print-html-2-pdf');
```

Now you can use it to print any DOM element or HTML string.

## Basic Usage

```html
<button onclick="printPDF()">Print PDF</button>
<div id="report">... your HTML ...</div>
<script>
function printPDF() {
    PrintHtmlToPdf.print({
        element: document.getElementById("report"),
        styles: "body{margin:0;padding:0;font-family:'Arial',sans-serif;}div{background:#fff;padding:40px;}"
    });
}
</script>
```

## Usage With HTML Stored Inside a Variable

You can store your template as a string and print it directly:

```js
const myTemplate = `
    <div style="padding:40px;font-family:Arial">
        <h1>Invoice #1029</h1>
        <p>Customer: John Doe</p>
        <table border="1" cellspacing="0" cellpadding="8">
            <tr>
                <th>Item</th><th>Qty</th><th>Price</th>
            </tr>
            <tr>
                <td>Product A</td><td>2</td><td>$40</td>
            </tr>
        </table>
    </div>
`;

PrintHtmlToPdf.print({
    html: myTemplate,
    styles: "table{width:100%;border-collapse:collapse;} th,td{text-align:left;}"
});

```
## Using External CSS Files

You can include external CSS files to style your PDF content using the cssFiles option:

```html
<link rel="stylesheet" href="ss.css">
<button onclick="printWithCss()">Print with CSS</button>

<script>
function printWithCss() {
    PrintHtmlToPdf.print({
        element: document.getElementById("report"),
        styles: "body{margin:0;padding:0;}" // optional inline styles
        cssFiles: ["styles.css"],   // array of external CSS files
    });
}
</script>

```

## Advanced Example – Static HTML + Template Stored in JS

```html
<div style="display:flex;gap:20px;">
    <div style="flex:1;border:1px solid #ddd;padding:20px;">
        <h2>Static Preview</h2>
        <div id="previewTemplate">
            <h1>Employee Card</h1>
            <p>Name: <strong>Ali</strong></p>
            <p>Department: IT</p>
        </div>
    </div>

    <div style="flex:1;border:1px solid #ddd;padding:20px;">
        <h2>Download PDF</h2>
        <button onclick="downloadCardPdf()">Save as PDF</button>
    </div>
</div>

<script>
const cardTemplate = `
    <div style="padding:20px;font-family:Arial;border:2px solid #000;">
        <h1>Employee Card</h1>
        <p>Name: <strong>Ali</strong></p>
        <p>Department: IT</p>
    </div>
`;

function downloadCardPdf() {
    PrintHtmlToPdf.print({ 
        html: cardTemplate 
        styles: "body{margin:0;padding:0;}" // optional inline styles
        cssFiles: ["styles.css"], // external CSS
    });
}
</script>
```

## API

```js
PrintHtmlToPdf.print({
    element: HTMLElement, // print an existing DOM element
    html: string,         // OR print HTML stored in JS variable
    styles: string        // optional CSS to inject
    cssFiles: array       // optional array of external CSS file URLs
});
```

## Examples Included

* English Template
* Urdu Template
* Arabic Template
* Invoice Template
* Employee Card Template
* Variable-based HTML Template

## License

MIT
