
var canvas = new fabric.Canvas('myCanvas');
 blockY=1;
 blockX=1;

blockImageWidth = 350;
blockImageHeight = 430;

var blockImageObject= "";

function newImage(getImage)
{
    fabric.Image.fromURL(get_image, funcition(img){
		block_image_object = img;

		block_image_object.scaleToWidth(block_image_object);
		block_image_object.scaleToHeight(block_image_object);
		block_image_object.set({
			top:block_y
		    top:block_x
		});
		canvas.add(block_image_object);
	});
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82') // adicione os códigos adequados às teclas
	{
		new_image(rr1.jpg);
		console.log(r);
	}
	if(keyPressed == '86')
	{
		blockX = 200;
		new_image(gr.png);
		console.log(r);
	}
	
	if(keyPressed == '65')
	{
		blockX =350;
		new_image(yr.png);
		console.log(r);
	}
	if(keyPressed == '82')
	{
		blockX = 600;
		new_image(pr.png);
		console.log(r);
	}
	if(keyPressed == '73')
	{
		blockX = 700;
		new_image(br.png);
		console.log(r);
	}
	
}

