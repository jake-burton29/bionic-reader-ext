async function enhanceTextContent() {
  const bionicFont = "OpenDyslexic, sans-serif";

  async function processTextNode(textNode) {
    const wordRegExp = /(\b\w+)/g;

    let textContent = textNode.textContent.trim();

    textContent = textContent.replace(wordRegExp, function (match) {
      const length = match.length;
      const midpoint = Math.floor(length / 2);
      const firstHalf = match.substring(0, midpoint);
      const secondHalf = match.substring(midpoint, length);

      return `<b>${firstHalf}</b>${secondHalf}`;
    });

    const tempElement = document.createElement("span");
    tempElement.innerHTML = textContent;
    textNode.parentNode.replaceChild(tempElement, textNode);
  }

  async function traverseDOM(element) {
    const stack = [element];

    while (stack.length > 0) {
      const currentNode = stack.pop();

      for (const child of currentNode.childNodes) {
        if (child.nodeType === Node.ELEMENT_NODE) {
          stack.push(child);
        } else if (child.nodeType === Node.TEXT_NODE) {
          await processTextNode(child);
          console.log(child);
        }
      }
    }
  }

  try {
    await document.fonts.load(`${bionicFont}`);
  } catch (error) {
    console.error(`Failed to load font: ${bionicFont}`);
  }

  await traverseDOM(document.body);
}

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: enhanceTextContent,
    files: ["bionic.css"],
  });
});
