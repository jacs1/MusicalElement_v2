$(document).ready(function() {



// $(document).ready(function() {
//     window.addEvent("domready", function(){
//         colors = ["#730046", "#BFBB11", "#FFC200", "#E88801", "#C93C00"];
//         var mywall = new Wall("wall", {
//                         "draggable":true,
//                         "width":200,
//                         "height":200,
//                         "printCoordinates":true,
//                         "rangex":[-40,40],
//                         "rangey":[-40,40],
//                         callOnUpdate: function(items){
//                             items.each(function(e, i){
//                                 // If use concole log
//                                 // console.log("x:" + e.x + "\t y:"+e.y);
//                                 // On Update set different color background
//                                 e.node.setStyle("background",colors[ Math.floor(Math.random()*colors.length) ]);
//                   e.node.fade("hide").fade("in")
//                             }.bind(this));
//                         }
//                     });
//         // Init Wall
//         mywall.initWall();
//     });


// ****************************************************************

// test = $('.tile')

// mytile = test[0]

// $(mytile).mouseover(function(){
// console.log("mose overd");
// });

















// ***********************************************************************

//     // On window load. This waits until images have loaded which is essential
//     $(window).load(function(){
        
//         // Fade in images so there isn't a color "pop" document load and then on window load
//         $(".item img").fadeIn(500);
        
//         // clone image
//         $('.item img').each(function(){
//             var el = $(this);
//             el.css({"position":"absolute"}).wrap("<div class='img_wrapper' style='display: inline-block'>").clone().addClass('img_grayscale').css({"position":"absolute","z-index":"998","opacity":"0"}).insertBefore(el).queue(function(){
//                 var el = $(this);
//                 el.parent().css({"width":this.width,"height":this.height});
//                 el.dequeue();
//             });
//             this.src = grayscale(this.src);
//         });
        
//         // Fade image 
//         $('.item img').mouseover(function(){
//             $(this).parent().find('img:first').stop().animate({opacity:1}, 1000);
//         })
//         $('.img_grayscale').mouseout(function(){
//             $(this).stop().animate({opacity:0}, 1000);
//         });     
//     });
    
//     // Grayscale w canvas method
//     function grayscale(src){
//         var canvas = document.createElement('canvas');
//         var ctx = canvas.getContext('2d');
//         var imgObj = new Image();
//         imgObj.src = src;
//         canvas.width = imgObj.width;
//         canvas.height = imgObj.height; 
//         ctx.drawImage(imgObj, 0, 0); 
//         var imgPixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
//         for(var y = 0; y < imgPixels.height; y++){
//             for(var x = 0; x < imgPixels.width; x++){
//                 var i = (y * 4) * imgPixels.width + x * 4;
//                 var avg = (imgPixels.data[i] + imgPixels.data[i + 1] + imgPixels.data[i + 2]) / 3;
//                 imgPixels.data[i] = avg; 
//                 imgPixels.data[i + 1] = avg; 
//                 imgPixels.data[i + 2] = avg;
//             }
//         }
//         ctx.putImageData(imgPixels, 0, 0, 0, 0, imgPixels.width, imgPixels.height);
//         return canvas.toDataURL();
//     }
        
});