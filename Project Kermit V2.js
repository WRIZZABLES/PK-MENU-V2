<!DOCTYPE html>
<html>
<head>
	<title>Movable Menu GUI</title>
	<style>
		#menu {
			position: absolute;
			top: 100px;
			left: 100px;
			width: 200px;
			height: 150px;
			background-color: #f0f0f0;
			border: 1px solid black;
			cursor: move;
			user-select: none;
		}
		.button {
			display: block;
			margin: 10px;
			padding: 5px;
			background-color: #ccc;
			border: 1px solid black;
			cursor: pointer;
		}
	</style>
	<script>
		window.onload = function() {
			var menu = document.getElementById('menu');
			var dragging = false;
			var offset = {x: 0, y: 0};

			menu.addEventListener('mousedown', function(e) {
				dragging = true;
				offset.x = e.offsetX;
				offset.y = e.offsetY;
			});

			document.addEventListener('mousemove', function(e) {
				if (dragging) {
					menu.style.top = (e.clientY - offset.y) + 'px';
					menu.style.left = (e.clientX - offset.x) + 'px';
				}
			});

			document.addEventListener('mouseup', function() {
				dragging = false;
			});

			var button1 = document.getElementById('button1');
			var button2 = document.getElementById('button2');

			button1.addEventListener('click', function() {
				alert('Button 1 was clicked!');
			});

			button2.addEventListener('click', function() {
				alert('Button 2 was clicked!');
			});
		};
	</script>
</head>
<body>
	<div id="menu">
		<button id="button1" class="button">Button 1</button>
		<button id="button2" class="button">Button 2</button>
	</div>
</body>
</html>
