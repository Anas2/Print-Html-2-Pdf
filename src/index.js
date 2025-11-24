/**
 * Print a DOM element or HTML string using browser's native print dialog (iframe approach).
 * @param {object} params
 *   - element: DOM Element or HTML string (required)
 *   - styles: string, optional CSS to inject into print document
 */
export function print({ element, styles = "" }) {
  if (!element) throw new Error("`element` is required to print");

  let htmlContent;
  if (typeof element === "string") {
    htmlContent = element;
  } else if (element instanceof Element) {
    htmlContent = element.innerHTML;
  } else {
    throw new Error("`element` must be a DOM Element or HTML string");
  }

  const iframe = document.createElement("iframe");
  iframe.style.position = "fixed";
  iframe.style.right = "0";
  iframe.style.bottom = "0";
  iframe.style.width = "0";
  iframe.style.height = "0";
  iframe.style.border = "0";
  document.body.appendChild(iframe);

  const doc = iframe.contentDocument || iframe.contentWindow.document;

  // Clear existing content
  doc.body.innerHTML = "";

  // Add styles
  if (styles) {
    const styleEl = doc.createElement("style");
    styleEl.textContent = styles;
    doc.head.appendChild(styleEl);
  }

  // Add content
  const container = doc.createElement("div");
  container.innerHTML = htmlContent;
  doc.body.appendChild(container);

  // Print once iframe is ready
  iframe.onload = () => {
    iframe.contentWindow.focus();
    iframe.contentWindow.print();
    setTimeout(() => document.body.removeChild(iframe), 1000);
  };

  // Trigger onload manually in case content is already loaded
  iframe.onload();
}
