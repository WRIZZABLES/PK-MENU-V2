<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>My Resizable and Draggable GUI</title>
    <style>
      #myGUI {
        position: absolute;
        top: 100px;
        left: 100px;
        width: 300px;
        height: 200px;
        background-color: lightgray;
        border-radius: 10px;
        cursor: move;
        overflow: hidden;
      }

      #buttonContainer {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        height: 50%;
      }

      #cheatsMenu, #othersMenu {
        display: none;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 80%;
        height: 80%;
        background-color: lightblue;
        border-radius: 10px;
        cursor: default;
        overflow: auto;
      }

      .button {
        display: block;
        margin: 10px;
        padding: 5px 10px;
        font-size: 16px;
        font-weight: bold;
        color: white;
        background-color: blue;
        border: none;
        border-radius: 5px;
        cursor: pointer;
      }

      #resizeHandle {
        position: absolute;
        bottom: 0;
        right: 0;
        width: 20px;
        height: 20px;
        background-color: gray;
        border-bottom-right-radius: 10px;
        cursor: se-resize;
      }

      #text {
        position: absolute;
        bottom: 5px;
        left: 5px;
        font-size: 12px;
        font-style: italic;
        color: gray;
      }
    </style>
  </head>
  <body>
    <div id="myGUI">
      <div id="buttonContainer">
        <button class="button" onclick="toggleMenu('cheatsMenu')">Cheats</button>
        <button class="button" onclick="toggleMenu('othersMenu')">Others</button>
      </div>
      <div id="cheatsMenu">
        <button class="button" onclick="alert('Cheats Button 1 clicked!')">Cheats Button 1</button>
        <button class="button" onclick="alert('Cheats Button 2 clicked!')">Cheats Button 2</button>
        <button class="button" onclick="alert('Cheats Button 3 clicked!')">Cheats Button 3</button>
      </div>
      <div id="othersMenu">
        <button class="button" onclick="alert('Others Button 1 clicked!')">Others Button 1</button>
        <button class="button" onclick="alert('Others Button 2 clicked!')">Others Button 2</button>
        <button class="button" onclick="alert('Others Button 3 clicked!')">Others Button 3</button>
      </div>
      <div id="resizeHandle"></div>
      <div id="text">You can hide/show this with "h"</div>
    </div>

    <script>
      var isDragging = false;
      var isResizing = false;
      var startX, startY;
      var startWidth, startHeight;
      var minWidth = 200, minHeight = 150;
      var mouseX, mouseY;
      var offsetX
