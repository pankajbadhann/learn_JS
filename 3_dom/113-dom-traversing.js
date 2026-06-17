// rootNode : #document
// console.log(document.getRootNode());

// htmlElementNode : NodeList [html]
// const rootNode = document.getRootNode();
// console.log(rootNode.childNodes);

// htmlChildNode : NodeList(3) [head, text, body]
// const rootNode = document.getRootNode();
// const htmlElementNode = rootNode.childNodes[0];
// console.log(htmlElementNode.childNodes);

// childNodes of htmlElement
// const rootNode = document.getRootNode();
// const htmlElementNode = rootNode.childNodes[0];
// const headElementNode = htmlElementNode.childNodes[0];  // <head>...</head>
// const textNode1 = htmlElementNode.childNodes[1];        // #text
// const bodyElementNode = htmlElementNode.childNodes[2];  // <body>...</body>
// console.log(bodyElementNode);

// sibling relation 
// const h1 = document.querySelector("h1");
// const body = h1.parentNode.parentNode;
// body.style.color = "#efefef";
// body.style.backgroundColor = "#333"
// const body = document.body
// body.style.color = "#efefef";
// body.style.backgroundColor = "#333"
// const head = document.querySelector("head");
// // console.log(head);
// const title = head.querySelector("title");
// console.log(title.childNodes);
// const container = document.querySelector(".container");
// console.log(container.children);