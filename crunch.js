$(document).ready(function(){
$('#saveBox').hide();
var img_node = document.createElement('img');
var image_div = document.getElementById('Image');
image_div.appendChild(img_node);
var lastQuality = 70;

function jpegEncodeNewImage(imgToLoad,quality) {
	var myEncoder = new JPEGEncoder([quality]);
	
    var canvas = document.createElement("canvas");
//	image_div.appendChild(canvas);

    canvas.width = imgToLoad.width;
    canvas.height = imgToLoad.height;

    var ctx = canvas.getContext("2d");
    ctx.drawImage(imgToLoad, 0, 0);

	var JPEGImage = myEncoder.encode(ctx.getImageData(0, 0, canvas.width, canvas.height),[quality]);
	return JPEGImage;
}

	var img_src = 'data:image/jpeg;base64,' +
			'/9j/4AAQSkZJRgABAQEASABIAAD/4QCARXhpZgAATU0AKgAAAAgABQESAAMAAAABAAEAAAEaAAUAAAAB' +
			'AAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAIAAIdpAAQAAAABAAAAWgAAAAAAAABIAAAAAQAAAEgAAAAB' +
			'AAKgAgAEAAAAAQAAAHigAwAEAAAAAQAAAHgAAAAA/9sAQwACAQECAQECAgECAgICAgMFAwMDAwMGBAQD' +
			'BQcGBwcHBgYGBwgLCQcICggGBgkNCQoLCwwMDAcJDQ4NDA4LDAwL/9sAQwECAgIDAgMFAwMFCwgGCAsL' +
			'CwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsL/8AAEQgAeAB4AwEi' +
			'AAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAAB' +
			'fQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNE' +
			'RUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1' +
			'tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEA' +
			'AAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRC' +
			'kaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpz' +
			'dHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ' +
			'2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A/fyiiigAooooAKKKKACiisc+PdJHjgeHDeR/' +
			'2w1r9sFvnkx7tufr3x1xzQBsUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAYnxI8f6f8LfA2p+IPFM' +
			'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';



String.prototype.replaceAt=function(index, charat) {
     return this.substr(0, index) + charat + this.substr(index+charat.length);
};
   
function emptyDiv (divToClear){
	var i;
	while (i=divToClear.childNodes[0]){
		if (i.nodeType == 1 || i.nodeType == 3){
			divToClear.removeChild(i);
		}
	}
}

function crunch(image64) {
	 offset = parseInt($("#offset").val());
	 newChar = $("#char").val();
	$('#offset').attr("max",image64.length);
    image64 = image64.replaceAt(offset,newChar);
	img_node.src = image64;

}

function reGlitch(){
	console.log(img_src.length);
	img_src = img_node.src;
	console.log(img_src.length);
}

function store(){
	$('#saveBox').show();
	var saveBox = document.getElementById('saveBox');
	var storeme = document.createElement('img');
	storeme.src = img_node.src;
	saveBox.appendChild(storeme);
	console.log("stored");
}

$("#offset").change(function() { crunch(img_src); });
$("#char").keyup(function()   { crunch(img_src); });
$('#reglitch').click(function() { reGlitch(); });
$('#store').click(function() { store(); });
// $('#loadImg').click(function() {
// 	var imageURL = prompt("Load an image:","URL");
// 	var quality = prompt("JPEG Encode quality:",lastQuality);
// 	lastQuality = quality;
// 	var imgToLoad = new Image();
// 	imgToLoad.src = imageURL;
// 	img_src = jpegEncodeNewImage(imgToLoad,quality);
// });


var options = {
  dragClass: "drag",
  readAsDefault: 'DataURL',
  on: {
    load: function(e, file) { 
	  console.log("Dropped!");
      img_src = e.target.result;
	  crunch(img_src);
	}
  }
};


$("#dropzone").fileReaderJS(options);



$('#reEncode').click(function() {
	var imgToLoad = new Image();
	imgToLoad.src = img_node.src;
	var quality = prompt("JPEG Encode quality:",lastQuality);
	lastQuality = quality;
	img_src = jpegEncodeNewImage(imgToLoad,quality); 
	img_node.src = img_src;
});
$('#random').click(function() {
	$("#offset").attr("value",Math.floor(Math.random()*$("#offset").attr("max")+10));
	crunch(img_src);
	reGlitch();
});

crunch(img_src);

});