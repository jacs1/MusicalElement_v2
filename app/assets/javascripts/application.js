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

jQuery(document).ready(function(){
    jQuery('.carousel').each(function(index, element) {
        jQuery(this)[index].slide = null;
    });
    jQuery('.carousel').carousel('cycle');
});