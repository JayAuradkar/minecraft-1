var canvas = new fabric.Canvas("myCanvas")
var player_x = 0;
var player_Y = 0;
var block_height = 30;
var block_width = 30;
var player_object = ""
var block_object = ""
function player_update(){
    fabrick.Image.fromURL("player.png",function(Img){
        player_object = Img;
        player_object.scaleToWidth(150)
        player_object.scaleToHeight(150)
        player_object.set({
            top:player_Y,
            left:player_x
        })
        canvas.add(player_object)
    })
}
function block_update(get_image){
    fabrick.Image.fromURL(get_image,function(Img){
        block_object = Img;
        block_object.scaleToWidth(block_width)
        block_object.scaleToHeight(block_height)
        block_object.set({
            top:player_Y,
            left:player_x
        })
        canvas.add(block_object)
    })
}