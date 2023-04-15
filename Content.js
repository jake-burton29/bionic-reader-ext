// const bionicFont = "OpenDyslexic, sans-serif" || "sans-serif";

// function processTextNode(textNode) {
//   const wordRegExp = /(\b\w+)/g;

//   let textContent = textNode.textContent.trim();

//   textContent = textContent.replace(wordRegExp, function (match) {
//     const length = match.length;
//     const midpoint = Math.floor(length / 2);
//     const firstHalf = match.substring(0, midpoint);
//     const secondHalf = match.substring(midpoint, length);

//     return `<b>\${firstHalf}</b>\${secondHalf}`;
//   });

//   const tempElement = document.createElement("span");
//   tempElement.innerHTML = textContent;
//   textNode.replaceWith(...tempElement.childNodes);
// }

// function traverseDOM(element) {
//   const stack = [element];

//   while (stack.length > 0) {
//     const currentNode = stack.pop();

//     for (const child of currentNode.childNodes) {
//       if (child.nodeType === Node.TEXT_NODE) {
//         processTextNode(child);
//       } else {
//         stack.push(child);
//       }
//     }
//   }
// }

// traverseDOM(document.body);
