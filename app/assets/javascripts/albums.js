$(document).ready(function(){

      var slider    = $('.slider'),
          song_vol  = $('.volcontrol'),
          tooltip   = $('.tooltip');

      //Hide the Tooltip at first
      tooltip.hide();
      song_vol.hide();

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

          tooltip.css('left', value - 11).text(ui.value);  //Adjust the tooltip accordingly

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

  $('.btn').click(function() {
     var className = $(this).attr('class');
     _this = $(this);
     switch(className){
      case 'btn btn-mini icon-play':
      playing_track();
      break;
      case 'btn btn-mini icon-pause':
      paused_track();
      break
      case 'btn btn-mini icon-volume-up':
      volume_track();
      break
      case 'btn btn-mini icon-trash':
      delete_track();
      break
     }
  });


    function playing_track() {
      console.log('change to paused icon....');
      _this.removeClass('btn btn-mini icon-play');
      _this.addClass('btn btn-mini icon-pause');
      // $(_this).closest('tr').insertAfter($(_this).parents("tr").eq(0)).attr('id', "cur_pl_tr");
      $("<tr>").insertAfter($(_this).parents("tr").eq(0)).attr('id', "cur_pl_tr");
      $(_this).closest('tr').next().append('<div style="position: absolute;width: 65%;" class="progress progress-small progress-striped active"><div class="bar" style="width: 0%;"></div></div>');
      // $("#cur_pl_tr").append('<div style="position: absolute;width: 91%;" class="progress progress-small progress-striped active"><div class="bar" style="width: 0%;"></div></div>');

       var playing = _this.parent();

       soundManager.createSound({
         id: 'mySound-' + playing.data("id"),
         url: playing.data("url"),
         autoLoad: true,
         autoPlay: false,
         onfinish: function() {
          // fix this to remove the right element when the song is done playing.
            $(_this).closest('tbody').find("#cur_pl_tr").fadeOut('slow', function() {$(this).remove()});
            // $("#cur_pl_tr").fadeOut('slow', function() {$(this).remove()});
            $(_this).closest('tbody').find('#time').children().remove();
             // $('#time').children().remove();
            paused_track();
            soundManager.destroySound("mySound-" + $(_this).closest('tr').find("[data-id]").eq(1).data('id'));
           },
         onload: function() {
           // alert('The sound '+this.id+' loaded!');
         },
         whileplaying: function() {
          var curr_vol    = parseFloat($(_this).closest('td').find('.ui-slider-range')[0].style.width),
            // vox           = Math.ceil(curr_vol),
            track_time    = $('#time').html(),
            seconds       = Math.round(this.position/1000),
            r             = seconds % 60,
            m             = Math.floor(seconds / 60),
            voltest       = _this.parent().find('.icon-volume-up'),
            duration      = (m < 10 ? '0' + m : m) + ":" + (r < 10 ? '0' + r : r);
          this.setVolume(Math.ceil(curr_vol));
          _this.closest('tr').next().find('.bar').eq(0).width(((this.position/this.duration) * 100) + '%');
          // $(".progress").first().find('.bar').width(((this.position/this.duration) * 100) + '%');

          _this.parent().find('.icon-volume-up').on({
            mouseenter: function(){
              $(this).parent().hide()
              $(this).parents().eq(1).find('.volcontrol').on({
                mouseleave: function(){
                  $(this).hide();
                  // console.log("mouse left slider");
                }
              })
              $(this).parents().eq(1).find('.volcontrol').show().fadeTo('fast',1)
              // console.log("mouse entered volume");
            }
            // mouseleave: function(){
            //   // $(this).parents().eq(1).find('.volcontrol').hide();
            //   console.log("mouse left volume");
            // }
          });

           _this.closest('td').prev().prev().find('.duration').fadeTo('slow',2).html( duration + " / ");

           $('.progress').click(function(e) {
             var playingSound = soundManager.getSoundById("mySound-" + $(_this).closest('tr').find("[data-id]").eq(1).data('id')),
              x               = e.pageX - $(this).offset().left,
              width           = $(this).width(),
              duration        = playingSound.durationEstimate;
             playingSound.setPosition((x / width) * duration);
           });

         },
         // volume: 50
       });
         soundManager.play('mySound-'+playing.data("id"));
         
    }

    function paused_track() {
      var currently_playing = _this.parent();
      console.log('change to playing icon....');
      _this.removeClass('btn btn-mini icon-pause');
      _this.addClass('btn btn-mini icon-play');
      soundManager.pause('mySound-'+currently_playing.data("id"));
    }

    function volume_track() {
      var currently_playing = _this.parent();
      console.log('clicked volume icon....');
    }

    function delete_track() {
      var currently_playing = _this.parent();
      console.log('clicked delete icon....');
    }

    $('.btn-group-hover').hide()
    $('tr').on({
    mouseenter: function(){
      $(this)
        .find('.btn-group-hover').stop().fadeTo('fast',1)
        .find('.icon-white').addClass('icon-white-temp').removeClass('icon-white');
    },
    mouseleave: function(){
      $(this)
        .find('.btn-group-hover').stop().fadeTo('fast',0);
    }
  });

    $('.btn-group-hover').on({
    mouseenter: function(){
      $(this).removeClass('btn-group-hover')
        .find('.icon-white-temp').addClass('icon-white');
    },
    mouseleave: function(){
      $(this).addClass('btn-group-hover')
        .find('.icon-white').addClass('icon-white-temp').removeClass('icon-white');
    }
  });
})