// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery-migrate-1.2.1
//= require jquery_ujs
//= require bootstrap-slider
//= require jquery.maskedinput
//= require parsley
//= require jquery.uniform
//= require select2
//= require dataTables/jquery.dataTables
//= require id3-minimized
//= require jquery-fileupload
//= require mootools-core-1.4.5
//= require mootools-more-1.4.0.1
//= require wall
//= require underscore
//= require backbone
//= require backbone-pageable
//= require backgrid
//= require backgrid-paginator
//= require bootstrap
//= require app
//= require settings
//= require forms.js
//= require_tree .

// needed to fix bootstrap carousel and mootool framework
jQuery(document).ready(function(){
    jQuery('.carousel').each(function(index, element) {
        jQuery(this)[index].slide = null;
    });
    jQuery('.carousel').carousel('cycle');
// fix end

  // $('.playlist').css('marginLeft', '220px');
  $('#slideright').click(function() {
    var $slideRight = $('#plspan');
    // if the playlist is onscreen, 'right' will be 25px and it will slide off screen to -170px
    $slideRight.animate({
      right: parseInt($slideRight.css('right')) == -170 ? 25 : -170
       });

      if($(this).attr("class") == "btn btn-transparent btn-mini icon-arrow-right") {
        $(this).parent().css("left", 0);
        $(this).removeClass("icon-arrow-right").addClass("icon-arrow-left");
        $(this).parent().siblings().css("margin-left", '40px')
        // $(this).children().text("Show");

      } else {

        $(this).removeClass("icon-arrow-left").addClass("icon-arrow-right");
        $(this).parent().siblings().css("margin-left", 0);
        $(this).parent().removeAttr('style');
        // $(this).children().text("Hide");

      };
    // var $hidebutton = $('#slideleft');
    //     $hidebutton.animate({
    //       marginLeft: parseInt($hidebutton.css('marginLeft')) == 172 ?
    //         $hidebutton.outerWidth() :
    //         172
    //     });

    });

  $('.icon-caret-right').click(function() {
      var $lefty = $(this).next();
      $lefty.animate({
        left: parseInt($lefty.css('left'),10) == 0 ?
          -$lefty.outerWidth() :
          0
      });
    });

  $('#feed').slimscroll({
      // height: 'auto',
      size:   '5px',
      distance: '1px'
  });

  $( "#sortable" ).sortable({ axis: "y" });
  // stroll.bind( '#sortable ul' );


  $('.audio-control').click(function() {
     var className = $(this).attr('class');
     _this = $(this);
     switch(className){
      case 'audio-control play':
      playPlaylist();
      break;
      case 'audio-control pause':
      pausePlaylist();
      break;
      // case 'audio-control next_track':
      // nextTrack();
      // break;
      // case 'audio-control prev_track':
      // prevTrack();
      // break;
      }
  });

  function playPlaylist() {
    // playAlbum();
    soundManager.resumeAll()
    _this.removeClass('play').addClass('pause');
    console.log('play tracks in the playlist');
  }

  function pausePlaylist() {
    _this.removeClass('pause').addClass('play');
    soundManager.pauseAll();
    console.log('pause playlist');
  }

  // function nextTrack() {
  //   soundManager.stop();
  //   var playlistId = ~~soundManager.soundIDs[0].substr(9) + 1;
  //   playAlbum.playAudio(playlistId);
  //   // debugger;
  //   console.log('play next track');
  // }

  // function prevTrack() {
  //   console.log('play previous track');
  // }


// });



// div that slides up over album cover on mouse hover start
  $('.glass').slideToggle();
  $('.thumbnail').mouseenter(function() {
    $(this).find(".glass").slideToggle();
    // $('.glass').slideToggle();
  });

  $('.thumbnail').mouseleave(function(){
    $(this).find(".glass").slideToggle();
    // $('.glass').slideToggle();
  });

  // end slider


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
      case 'btn btn-mini icon-play-circle':
      playAlbum();
      break;
      case 'btn btn-mini icon-plus':
      addAlbum();
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


  $('.icon-large').click(function() {
     var className = $(this).attr('class');
     _this = $(this);
     switch(className){
      case 'icon-save icon-large':
      savePlaylist();
      break;
      case 'icon-share icon-large':
      sharePlaylist();
      break;
      case 'icon-plus-sign-alt icon-large':
      loadPlaylist();
      break;
     }
  });

  function savePlaylist() {
    var name = $.trim($("#normal-field").val());
    var tracks = [];
    $('.playlistSongs').children().each(function() {
      // $('.playlistSongs').append('<li>' + $(this).children('td:nth-child(2)').text() + '</li>').fadeIn("slow");
      tracks.push($(this).data("id"));
    });

    $.ajax({
        url: "/libraries/1/playlists", 
        type: "POST", 
        data: { tracks : tracks, name : name } 
    });
    console.log('save current playlist');
  };

  function sharePlaylist() {
    console.log('share current playlist');
  };

  function loadPlaylist() {
    console.log('load a playlist via ajax');
  };

  function playAlbum() {
    // debugger;


    // play list code start
    $('.playlistSongs').empty();
    var audio = getTracks();
    console.log(audio)
    if ($('.play')) $('.play').removeClass('play').addClass('pause');
    // getTracks.apply(this, audio);
    // Array of files you'd like played
    // audio.playlist = 
    var playlistId = 0;
    playAudio(playlistId);

    function playAudio(playlistId){
      $('.next_track').click(function() {
         soundManager.stopAll();
         playlistId ++;
         playAudio(playlistId);
       });
      $('.prev_track').click(function() {
         soundManager.stopAll();
         playlistId--;
         playAudio(playlistId);
       });
        // Default playlistId to 0 if not supplied 
        playlistId = playlistId ? playlistId : 0;
        // If SoundManager object exists, get rid of it...
        if (soundManager.soundIDs){
          soundManager.destroySound(soundManager.soundIDs[0]);
            // ...and reset array key if end reached
            // if(playlistId == audio.length){
            //     playlistId = 0;
            // }
      }
        // Standard Sound Manager play sound function...
        soundManager.onready(function() {
          audio.nowPlaying = soundManager.createSound({
            id: 'sk4Audio-' + playlistId,
            url: audio[playlistId],
                // url: audio.playlist[playlistId],
                autoLoad: true,
                autoPlay: true,
                volume: 35,
                // ...with a recursive callback when play completes
                onfinish: function(){
                  if (audio[playlistId] == audio[audio.length -1])
                  {
                    soundManager.stop();
                  }
                  else
                  {
                    playlistId ++;
                    playAudio(playlistId);
                  }
                }
                // whileplaying: function() {
                //   $('.next_track').click(function() {
                //      soundManager.stopAll();
                //      playlistId ++;
                //      playAudio(playlistId);
                //    });
                // }
              })
        });
      }
    };

  function addAlbum() {
    var audio = getTracks();
    console.log('add album to playlist');
  };

  function getTracks() {
      var audio = [];

      $.ajax({
        url: '/albums/' + _this.parent().data("id") + '.json',
        data: { id : _this.parent().data("id") },
        async: false,
        success: function(json) {
          // Will run once AJAX has returned
          // console.log(json);

          var lis = ""
            for (var i = 0; i < json.album.tracks.length; i++) {
              audio.push(json.album.tracks[i].url);
              lis += '<li class="spacer" data-id="' + json.album.tracks[i].id + '">' + json.album.tracks[i].title + '</li>';
            }
            $(lis)
              .hide()
              .appendTo('.playlistSongs')
              .each(function(index) {
                // For each li, wait some time and fadeIn. The first one will not have a delay
                $(this).delay(400*index).fadeIn(100);
            });
          console.log('got tracks from ajax!');

          // return audio;

          // audio.push($(this).children('td:nth-child(6)').children('div:nth-child(2)').data("url"));
        }
      });
      // debugger;
      // got tracks via ajax

      // });
    //   if ($('.play')) $('.play').removeClass('play').addClass('pause');
    //   console.log('got tracks from table');
    //   return audio;

    //   // this is slow, need to find a better way of doing it --- get tracks via html
    // $(_this).parents().eq(5).find('table  > tbody > tr').each(function() {
      // $('.playlistSongs').append('<li><h4>' + $(this).children('td:nth-child(2)').text() + '</h4></li>').fadeIn("slow");
    //   audio.push($(this).children('td:nth-child(6)').children('div:nth-child(2)').data("url"));
    // });
    // if ($('.play')) $('.play').removeClass('play').addClass('pause');
    // console.log('got tracks from table');
    return audio;
  };



// audio.playlist = [$('table').children('tbody').children('tr').children('td:nth-child(6)').children('div:nth-child(2)').eq(2).data("url"), $('table').children('tbody').children('tr').children('td:nth-child(6)').children('div:nth-child(2)').eq(1).data("url")];

// playlist code end

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



    
});