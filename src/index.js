/**
 * Print a DOM element or HTML string using browser's native print dialog (iframe approach).
 * @param {object} params
 *   - element: DOM Element or HTML string (required)
 *   - styles: string, optional CSS to inject into print document
 */

export function print({ element, html, styles = "", cssFiles = [] }) {
  const content = element || html;
  if (!content) throw new Error("`element` or `html` is required");

  const iframe = document.createElement("iframe");
  iframe.style.position = "fixed";
  iframe.style.right = "0";
  iframe.style.bottom = "0";
  iframe.style.width = "0";
  iframe.style.height = "0";
  iframe.style.border = "0";
  iframe.style.zIndex = "-1";
  document.body.appendChild(iframe);

  const doc = iframe.contentDocument || iframe.contentWindow.document;

  // Create head and body
  const head = doc.head || doc.createElement("head");
  const body = doc.body || doc.createElement("body");
  doc.documentElement.appendChild(head);
  doc.documentElement.appendChild(body);

  // Add CSS files
  cssFiles.forEach(f => {
    const link = doc.createElement("link");
    link.rel = "stylesheet";
    link.href = f;
    head.appendChild(link);
  });

  // Add styles including print margin reset
  const styleEl = doc.createElement("style");
  styleEl.textContent = `
    // @page { margin: 0; size: auto; }
    // body { margin: 0; padding: 0; }
    ${styles}
  `;
  head.appendChild(styleEl);

  // Add content
  body.innerHTML = typeof content === "string" ? content : content.innerHTML;

  // Wait for images/fonts to load
  setTimeout(() => {
    iframe.contentWindow.focus();
    iframe.contentWindow.print();
    setTimeout(() => document.body.removeChild(iframe), 500);
  }, 250);
}

