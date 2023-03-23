// ==UserScript==
// @name         Project Kermit Major
// @namespace    http://tampermonkey.net/
// @version      1.50.00
// @description  Project Kermit Mission Ago.
// @author       Kermit
// @match        http://*/*
// @icon         None
// @grant        none
// ==/UserScript==

(function() {
    <!DOCTYPE html>
<html>
<head>
  <title>Movable GUI Example</title>
  <style>
    #gui-container {
      position: fixed;
      top: 100px;
      left: 100px;
      width: 200px;
      height: 150px;
      background-color: #fff;
      border: 1px solid #ccc;
      border-radius: 10px;
      z-index: 999;
      transition: all 0.3s ease;
    }

    #gui-header {
      padding: 5px;
      background-color: #eee;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      cursor: move;
    }

    #gui-title {
      font-weight: bold;
      font-size: 14px;
    }

    #gui-hide {
      float: right;
    }

    #gui-content {
      padding: 10px;
    }

    #gui-container.hidden {
      display: none;
    }
  </style>
</head>
<body>
  <div id="gui-container">
    <div id="gui-header">
      <span id="gui-title">GUI Title</span>
    </div>
    <div id="gui-content">
      <button id="gui-button1">Button 1</button>
      <button id="gui-button2">Button 2</button>
    </div>
  </div>

  <script>
    var guiContainer = document.getElementById("gui-container");
    var guiHeader = document.getElementById("gui-header");
    var isDragging = false;
    var mouseX = 0, mouseY = 0, guiX = 0, guiY = 0;

    guiHeader.addEventListener("mousedown", function(event) {
      isDragging = true;
      mouseX = event.clientX;
      mouseY = event.clientY;
      guiX = guiContainer.offsetLeft;
      guiY = guiContainer.offsetTop;
    });

    document.addEventListener("mousemove", function(event) {
      if (isDragging) {
        var deltaX = event.clientX - mouseX;
        var deltaY = event.clientY - mouseY;
        guiContainer.style.left = guiX + deltaX + "px";
        guiContainer.style.top = guiY + deltaY + "px";
      }
    });

    document.addEventListener("mouseup", function(event) {
      isDragging = false;
    });

    var guiButton1 = document.getElementById("gui-button1");
    var guiButton2 = document.getElementById("gui-button2");

    guiButton1.addEventListener("click", function() {
      // Code to run when button 1 is clicked
      alert("Button 1 clicked!");
    });

    guiButton2.addEventListener("click", function() {
      // Code to run when button 2 is clicked
      alert("Button 2 clicked!");
    });

    document.addEventListener("keydown", function(event) {
      if (event.key === "h") {
        guiContainer.classList.toggle("hidden");
      }
    });

    function hideGUI() {
      guiContainer.classList.add("hidden");
    }

    function showGUI() {
      guiContainer.classList.remove("hidden");
    }
  </script>
</body>
</html>

})();