


// change the header text which says "Let's modify the DOM" to "New DOM Layout" 
var title = document.querySelectorAll(".title")
console.log(title)

console.log(document.getElementById("main-heading"))
let mainHeading = document.getElementById("main-heading")
console.log(mainHeading)
mainHeading.textContent = "New DOM Layout"

// // Change Background Color

mainHeading.style.backgroundColor = "green"

// // PARA 1
console.log(document.getElementById("para1"))
let para1 = document.getElementById("para1")

console.log(para1)
para1.textContent = "The document The Document Object Model (DOM) is a cross-platform and language-independent interface that treatsan XML or HTML document as a tree structure."

// PARA 
console.log(document.getElementById("para2"))
let para2 = document.getElementById("para2")

console.log(para2)
para2.textContent = "The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page."

// button evnet

document.getElementById("btn").addEventListener("click", () => {
    document.getElementById("para4").textContent = "The Document Object Model is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure wherein each node is an object representing a part of the document."
    }) 

    // Change backround color ‹box1 
  
    document.getElementById("red").classList.add("bg-danger")
   
    document.getElementById("red").classList.remove("bg-white")

    // Chage background coloor blue
    document.getElementById("blue").classList.add("bg-primary")
   
    document.getElementById("blue").classList.remove("bg-white")

    // / Chage background coloor blue
    document.getElementById("yellow").classList.add("bg-warning")
   
    document.getElementById("yellow").classList.remove("bg-white")

    // / Chage background coloor blue
    document.getElementById("green").classList.add("bg-success")
   
    document.getElementById("green").classList.remove("bg-white")
   
    // / Chage background coloor blue
    document.getElementById("black").classList.add("bg-dark")
   
    document.getElementById("black").classList.remove("bg-white")
