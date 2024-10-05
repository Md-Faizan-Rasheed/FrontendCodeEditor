
let flipped = false; // State to keep track of layout

function run(){

    let htmlcode = document.getElementById("html").value;
    // console.log(htmlcode);
    let csscode = document.getElementById("css").value;
    let jscode = document.getElementById("js").value;
    let output = document.getElementById("output");
    
    output.contentDocument.body.innerHTML = htmlcode +"<style>"+csscode+"</style>";

    output.contentWindow.eval(jscode);    
}
let box = document.getElementsByClassName('box')[0];

document.addEventListener("mousemove",function(e){

    if(flipped == true){
        
    }
    box.style.display="block";
    box.style.left =e.pageX + "px";
    box.style.right =e.pageX +"px";
    box.style.top=e.pageY +"px";
    box.style.bottom =e.pageY+"px";
    box.style.cursor ="pointer"

})

let line = document.getElementsByClassName("line")[0];
let leftcontainer = document.getElementsByClassName("left-Container")[0];
let rightcontainer = document.getElementsByClassName("right-Container")[0];
console.log(window.innerWidth);


line.addEventListener("mousedown", function(e) {

    const drag = (e) => {
        if (flipped == true) {
            // When flipped, adjust vertical resizing (height)
            line.style.top = e.pageY + "px";
            leftcontainer.style.height = e.pageY + "px";
            rightcontainer.style.height = (window.innerHeight - e.pageY) + "px";
            line.style.backgroundColor = "transparent";
        } else {
            // When not flipped, adjust horizontal resizing (width)
            line.style.left = e.pageX + "px";
            leftcontainer.style.width = e.pageX + "px";
            rightcontainer.style.width = (window.innerWidth - e.pageX) + "px";
        }
    }

    const End = (e) => {
        document.removeEventListener("mousemove", drag);  // Remove from document
        document.removeEventListener("mouseup", End);     // Remove from document
    }

    document.addEventListener("mousemove", drag); // Attach to document
    document.addEventListener("mouseup", End);    // Attach to document
});


const computeWidth = window.getComputedStyle(leftcontainer).width;
console.log(computeWidth);

//************ */ Try to handle the case of resposiveness***************
// window.addEventListener("change",function(){
//     const computeWidth = window.getComputedStyle(leftcontainer).width;
//     console.log(computeWidth);
// })

const currentwidth = parseFloat(computeWidth);

const percentagewidth = (currentwidth / leftcontainer.parentElement.clientWidth)*100;
console.log(percentagewidth);

let container = document.getElementsByClassName("container")[0];
let htmlContainer = document.getElementsByClassName("htmlContainer")[0];
let cssContainer = document.getElementsByClassName("cssContainer")[0];
let jsContainer = document.getElementsByClassName("jsContainer")[0];
let flipbtn = document.getElementsByClassName("flip")[0];
// flipbtn.addEventListener("click",function(){
//     // container.style.flexDirection = container.style.flexDirection === "row" ? "column" : "row";
    
//     container.style.flexDirection = "column"; 
//      leftcontainer.style.flexDirection="row";
//     //  output.style.width="100vw";
//      line.style.width="100vw";
//      line.style.height="10px";
//      line.style.left ="0";

//      line.style.top="48.5%"
//      line.style.cursor="row-resize";   //cursor: col-resize
//      leftcontainer.style.width="100%";
//      leftcontainer.style.height="50%"; ///
//      htmlContainer.style.height="100%";
//      cssContainer.style.height="100%";
//      jsContainer.style.height="100%";
//      rightcontainer.style.height="50%"; ////
//      rightcontainer.style.width="100%";

// })


// flipbtn.addEventListener("click", function () {
//     if (!flipped) {
//         // Apply the modified styles (first click)
//         container.style.flexDirection = "column"; 
//         leftcontainer.style.flexDirection = "row";
//         line.style.width = "100vw";
//         line.style.height = "10px";
//         line.style.left = "0";
//         line.style.top = "50.5%";
//         container.style.justifyContent = "space-between";
//         line.style.cursor = "row-resize"; 
//         leftcontainer.style.width = "100%";
//         leftcontainer.style.height = "48%";
//         htmlContainer.style.height = "111%";
//         cssContainer.style.height = "100%";
//         jsContainer.style.height = "100%";
//         rightcontainer.style.height = "48%";
//         rightcontainer.style.width = "100%";
//         rightcontainer.style.overflow = "hidden"; // Apply the overflow style

//         flipped = true; // Update the state to indicate layout is modified
//     } else {
//         // Reset to original styles (second click)
//         container.style.flexDirection = ""; // Reset to default (original)
//         leftcontainer.style.flexDirection = "";
//         line.style.width = "";
//         line.style.height = "";
//         line.style.left = "";
//         line.style.top = "";
//         line.style.cursor = ""; 
//         leftcontainer.style.width = "";
//         leftcontainer.style.height = "";
//         htmlContainer.style.height = "";
//         cssContainer.style.height = "";
//         jsContainer.style.height = "";
//         rightcontainer.style.height = "";
//         rightcontainer.style.width = "";

//         flipped = false; // Reset the state
//     }
// });


let clickCount = 0; // Variable to count clicks
let clickTimeout; // Variable to handle the timeout

// Function to handle flipping the container
function flip() {
    if (!flipped) {
        // Apply the modified styles (first click)
        container.style.flexDirection = "column"; 
        leftcontainer.style.flexDirection = "row";
        line.style.width = "100vw";
        line.style.height = "10px";
        line.style.left = "0";
        line.style.top = "50.5%";
        container.style.justifyContent = "space-between";
        line.style.cursor = "row-resize"; 
        leftcontainer.style.width = "100%";
        leftcontainer.style.height = "48%";
        htmlContainer.style.height = "111%";
        cssContainer.style.height = "100%";
        jsContainer.style.height = "100%";
        rightcontainer.style.height = "48%";
        rightcontainer.style.width = "100%";
        rightcontainer.style.overflow = "hidden"; // Apply the overflow style

        flipped = true; // Update the state to indicate layout is modified
    } else {
        // Reset to original styles (second click)
        container.style.flexDirection = ""; // Reset to default (original)
        leftcontainer.style.flexDirection = "";
        line.style.width = "";
        line.style.height = "";
        line.style.left = "";
        line.style.top = "";
        line.style.cursor = ""; 
        leftcontainer.style.width = "";
        leftcontainer.style.height = "";
        htmlContainer.style.height = "";
        cssContainer.style.height = "";
        jsContainer.style.height = "";
        rightcontainer.style.height = "";
        rightcontainer.style.width = "";

        flipped = false; // Reset the state
    }
}

// Add event listener for the flip button
flipbtn.addEventListener("click", flip);

// Add event listener for triple-click detection
document.addEventListener("click", function () {
    clickCount++; // Increment the click count

    // Clear the previous timeout if it exists
    clearTimeout(clickTimeout);

    // Set a timeout to reset the click count after 300 milliseconds
    clickTimeout = setTimeout(() => {
        clickCount = 0; // Reset click count
    }, 300);

    // Check if the user has clicked three times
    if (clickCount === 3) {
        flip(); // Call the flip function
        clickCount = 0; // Reset click count after the flip action
    }
});



// *******************************************************
// document.addEventListener("DOMContentLoaded", function() {
//     const htmlEditor = CodeMirror.fromTextArea(document.getElementById("html"), {
//         lineNumbers: true,
//         mode: "text/html",
//         theme: "material",
//         extraKeys: {"Ctrl-Space": "autocomplete"},
//     });

//     const cssEditor = CodeMirror.fromTextArea(document.getElementById("css"), {
//         lineNumbers: true,
//         mode: "text/css",
//         theme: "material",
//         extraKeys: {"Ctrl-Space": "autocomplete"},
//     });

//     const jsEditor = CodeMirror.fromTextArea(document.getElementById("js"), {
//         lineNumbers: true,
//         mode: "text/javascript",
//         theme: "material",
//         extraKeys: {"Ctrl-Space": "autocomplete"},
//     });

//     // Run function to update output
//     function run() {
//         const output = document.getElementById("output");
//         const htmlCode = htmlEditor.getValue();
//         const cssCode = cssEditor.getValue();
//         const jsCode = jsEditor.getValue();
        
//         output.contentDocument.body.innerHTML = htmlCode + "<style>" + cssCode + "</style>";
//         output.contentWindow.eval(jsCode);
//     }

//     // Add event listener to run the code when the user types or on a button click
//     htmlEditor.on("change", run);
//     cssEditor.on("change", run);
//     jsEditor.on("change", run);
// });
