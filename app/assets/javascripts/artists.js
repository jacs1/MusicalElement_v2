$(document).ready(function(){

  $("#go").click(go);
  $("#Name").change(go);

  // $.ajax({
  //   type: "GET",
  //   url: location.href + "/albums",
  //   cache: false,
  //   success: function(data){
  //      $("#Albums").append(data);
  //   }
  // });


  $('#artist_tabs a').click(function (e) {
    e.preventDefault();
    var _this = $(this).text();
    $('ul.nav-tabs li.active').removeClass('active');
    $(this).parent('li').addClass('active');
    $(".tab-content").find(".active").removeClass('active');
    $(".tab-content").find('#' + _this).addClass('active');
  });

  //   $('.btn-group-hover').hide();
  //   $('tr').on({
  //   mouseenter: function(){
  //     $(this)
  //       .find('.btn-group-hover').stop().fadeTo('fast',1)
  //       .find('.icon-white').addClass('icon-white-temp').removeClass('icon-white');
  //   },
  //   mouseleave: function(){
  //     $(this)
  //       .find('.btn-group-hover').stop().fadeTo('fast',0);
  //   }
  // });

  //   $('.btn-group-hover').on({
  //   mouseenter: function(){
  //     $(this).removeClass('btn-group-hover')
  //       .find('.icon-white-temp').addClass('icon-white');
  //   },
  //   mouseleave: function(){
  //     $(this).addClass('btn-group-hover')
  //       .find('.icon-white').addClass('icon-white-temp').removeClass('icon-white');
  //   }
  // });
    $('#results').delegate('div', 'mouseover', function () {
      $(this).draggable({
        revert: true,
        revertDuration: 0
      });

    });

    $("#droppable").droppable({
      drop: function( event, ui ) {
              var bg = ui.helper.css('background-image');
              bg = bg.replace('url(','').replace(')','');
              var _form = $('form');
              var regexp, time;
              time = new Date().getTime();
              regexp = new RegExp(_form.data('id'), 'g');
              _form.before(_form.data('fields').replace(regexp, time));
              return event.preventDefault();
        }
    });

    $('form').on('click', '.remove_fields', function(event) {
      $(this).prev('input[type=hidden]').val('1');
      $(this).closest('fieldset').hide();
      return event.preventDefault();
    });
    return $('form').on('click', '.add_fields', function(event) {
      var regexp, time;
      time = new Date().getTime();
      regexp = new RegExp($(this).data('id'), 'g');
      $(this).before($(this).data('fields').replace(regexp, time));
      return event.preventDefault();
    });


jQuery.ajaxSettings.traditional = true; 
var apiKey = 'UJ6VUETJ7VUYJAFHB';

function fetchImages(artist) {
    var url = 'http://developer.echonest.com/api/v4/artist/images';

    var args = { 
            format:'json', 
            api_key: 'UJ6VUETJ7VUYJAFHB',
            name: artist,
            results: 100, 
    }; 

    info("Fetching images for " + artist);
    $.getJSON(url, args,
            function(data) {
                $("#results").empty();
                if (! ('images' in data.response)) {
                    error("Can't find any images for " + artist);
                } else {
                    $("#results").show();
                    $.each(data.response.images, function(index, item) {
                        var div = formatItem(index, item);
                        $("#results").append(div);
                    });
                    info("Showing " + data.response.images.length + " of " + data.response.total + " images for " + artist);
                }
            },
            function() {
                error("Trouble getting blog posts for " + artist);
            }
        );
}

function formatItem(which, item) {
    var img = $("<div>");
    img.addClass("image-container span4");
    img.css("background-image", "url(" +item.url + ")");

    var attribution = $("<span class='label'>")
        .text(item.license.attribution)
        .hide();

    img.append(attribution);
    img.hover( 
        function(evt) {
            img.find('.label').show();
        },
        function(evt) {
            img.find('.label').hide();
        }
    );
    return img;
}


function go() {
  // debugger;
    $('.span5').append('<section id="results" class="widget tiny"></section>');
    var artist = $.trim($("#Name").val());
    if (artist.length  > 0) {
        fetchImages(artist);
    } else {
        info("Type an artist name first");
    }
}

function info(s) {
    $("#info").removeClass();
    if (s.length > 0) {
        $("#info").addClass("alert alert-info");
    }
    $("#info").text(s);
}

function error(s) {
    $("#info").removeClass();
    if (s.length > 0) {
        $("#info").addClass("alert alert-error");
    }
    $("#info").text(s);
}

    // fetchApiKey will fetch the Echo Nest demo key for demos
    // hosted on The Echo Nest, otherwise it fetch an empty key
    // fetchApiKey( function(api_key, isLoggedIn) {
    //     if (!api_key) {
    //         api_key = 'MY_ECHO_NEST_API_KEY';
    //     }
        // apiKey = 'UJ6VUETJ7VUYJAFHB';
       
    // });

});