$(document).ready(function() {

  $("#mainProgress").slider({
    min: 0,
    max: 100,
    value: 0,
		range: "min",
		animate: true,
    slide: function(event, ui) {
      // setVolume((ui.value) / 100);
      // console.log(event);
    }
  });

    $("#volumeSlider").slider({
      min: 0,
      max: 100,
      value: 0,
      range: "min",
      animate: true,
      slide: function(event, ui) {
        // setVolume((ui.value) / 100);
        // console.log(event);
      }
    });

    $(function() {

      //Store frequently elements in variables
      var slider  = $('#volumeSlider'),
        tooltip = $('.volumeTooltip');

      //Hide the Tooltip at first
      tooltip.hide();

      //Call the Slider
      slider.slider({
        //Config
        range: "min",
        min: 1,
        value: 35,

        start: function(event,ui) {
            tooltip.fadeIn('fast');
        },

        //Slider Event
        slide: function(event, ui) { //When the slider is sliding

          var value  = slider.slider('value'),
            volume = $('.volume');

          tooltip.css('left', value).text(ui.value);  //Adjust the tooltip accordingly

          if(value <= 5) { 
            volume.css('background-position', '0 0');
          } 
          else if (value <= 25) {
            volume.css('background-position', '0 -25px');
          } 
          else if (value <= 75) {
            volume.css('background-position', '0 -50px');
          } 
          else {
            volume.css('background-position', '0 -75px');
          };

        },

        stop: function(event,ui) {
            tooltip.fadeOut('fast');
        },
      });

    });

 //  var myMedia = document.createElement('audio');
 //  $('#player').append(myMedia);
 //  myMedia.id = "myMedia";
	// playAudio('audio/ViewSource', 0);
});

