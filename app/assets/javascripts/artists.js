$(function() {

  // $.ajax({
  //   type: "GET",
  //   url: location.href + "/albums",
  //   cache: false,
  //   success: function(data){
  //      // $("#Albums").append(html);
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

  //   $('form').on('click', '.remove_fields', function(event) {
  //     $(this).prev('input[type=hidden]').val('1');
  //     $(this).closest('fieldset').hide();
  //     return event.preventDefault();
  //   });
  //   return $('form').on('click', '.add_fields', function(event) {
  //     var regexp, time;
  //     time = new Date().getTime();
  //     regexp = new RegExp($(this).data('id'), 'g');
  //     $(this).before($(this).data('fields').replace(regexp, time));
  //     return event.preventDefault();
  //   });
});