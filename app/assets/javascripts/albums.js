$(document).ready(function(){

    // $("#v-slider").slider({
    //     orientation: "vertical",
    //     range: "min",
    //     min: 0,
    //     max: 100,
    //     value: 60,
    //     slide: function (event, ui) {
    //         $("#amount").val(ui.value);
    //     }
    // });
    // $("#amount").val($("#v-slider").slider("value"));


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

        // $('.btn').click(function() {
        //     _this = $(this);
        //    $(this).attr('Class') == 'btn btn-mini icon-pause' ? paused_track() : playing_track();
        //    // _this = $(this)
        // });

    // $('.icon-play').click(function() {
      // $(this).removeClass('icon-play');
      // $(this).addClass('icon-pause');
    //   console.log('clicked play');
    // });
    // var p = $('.icon-play').parent().parent("[data-id=3]")
    // $(function(){
        // $('.icon-pause').click(function() {
        //     _this = $(this);
        //     // var currently_playing = _this.parent()
        //     // soundManager.stop('mySound-'+currently_playing.data("id"));
        //    // if the play button value is 'play', call the play function
        //    // otherwise call the pause function
        //    // $(this).val() == "paused" ? paused_track() : playing_track();
        //    $(this).attr('Class') == 'btn btn-mini icon-play' ? playing_track() : paused_track();
        //    // _this = $(this)
        // });
    // });

    // $(function(){
        // $('.icon-play').click(function() {
        //     _this = $(this);
        //     var playing = $(this).parent();
        //    $(this).attr('Class') == 'btn btn-mini icon-pause' ? paused_track() : playing_track();

            // soundManager.createSound({
            //   id: 'mySound-' + playing.data("id"),
            //   url: playing.data("url"),
            //   autoLoad: true,
            //   autoPlay: false,
            //   onload: function() {
            //     // alert('The sound '+this.id+' loaded!');
            //   },
            //   whileplaying: function() {
            //     var seconds = Math.round(this.position/1000);
            //     var r = seconds % 60;
            //     var m = Math.floor(seconds / 60);
            //     var duration = (m < 10 ? '0' + m : m) + ":" + (r < 10 ? '0' + r : r);
            //     $('.duration').html('<p>' + duration + '</p>');
            //   },
            //   volume: 50
            // });
            
              
            //   soundManager.play('mySound-'+playing.data("id"));
              // var play_id = '.playbutton[data-track-id="'+$(this).data("id")+'"]';
              // var stop_id = '.stopbutton[data-track-id="'+$(this).data("id")+'"]';

           // if the play button value is 'play', call the play function
           // otherwise call the pause function
           // $(this).val() == "playing" ? paused_track() : playing_track();
           // _this = $(this)
        // });
    // });


    function playing_track() {
      console.log('change to paused icon....');
      _this.removeClass('btn btn-mini icon-play');
      _this.addClass('btn btn-mini icon-pause');

       var playing = _this.parent();

       soundManager.createSound({
         id: 'mySound-' + playing.data("id"),
         url: playing.data("url"),
         autoLoad: true,
         autoPlay: false,
         onfinish: function() {
             paused_track();
           },
         onload: function() {
           // alert('The sound '+this.id+' loaded!');
         },
         whileplaying: function() {
           var track_time = $('#time').html();
           var seconds = Math.round(this.position/1000);
           var r = seconds % 60;
           var m = Math.floor(seconds / 60);
           var duration = (m < 10 ? '0' + m : m) + ":" + (r < 10 ? '0' + r : r);
           $(".progress").first().css('width', ((this.position/this.duration) * 100) + '%');
           // $('#time').html('<p>' + duration + '</p>');
           // $('#time').find('.duration').fadeTo('slow',2).html(" / " + duration)
           _this.closest('td').prev().prev().find('.duration').fadeTo('slow',2).html(" / " + duration)
         },
         volume: 50
       });
         soundManager.play('mySound-'+playing.data("id"));
         // var play_id = '.playbutton[data-track-id="'+$(this).data("id")+'"]';
         // var stop_id = '.stopbutton[data-track-id="'+$(this).data("id")+'"]';
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