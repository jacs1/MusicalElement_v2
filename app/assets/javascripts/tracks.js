$(function(){

    // document.querySelector('input[type="file"]').onchange = function(e) {
    //   // var reader = new FileReader();
      // loadFile(this);

      function loadFile(input) {
        _input = input;
        var file = input.files[0],
          url = file.urn || file.name,
          reader = new FileReader();

        reader.onload = function(event) {
          ID3.loadTags(url, function() {
            showTags(url);
          }, {
            tags: ["title","artist","picture"],
            dataReader: FileAPIReader(file)
          });
        };
        reader.readAsArrayBuffer(file);
      }

      /**
       * Generic function to get the tags after they have been loaded.
       */
      function showTags(url) {
        var tags = ID3.getAllTags(url);
        console.log(tags);
        _input.filesContainer.find('.template-download').find('.title')[0].innerHTML = tags.title;
        _input.filesContainer.find('.template-download').find('.artist_name')[0].innerHTML = tags.artist;
        // document.getElementsByClassName('title')[0].innerHTML = tags.title;
        // document.getElementsByClassName('artist_name')[0].innerHTML = tags.artist;
        var image = tags.picture;
        if (image) {
          //Caution: old browsers (IE) don't implement Base64
          //see N. Zakas for fallback:
          //https://github.com/nzakas/computer-science-in-javascript/tree/master/encodings/base64
          var base64 = "data:" + image.format + ";base64," + Base64.encodeBytes(image.data);
          // document.getElementById('picture').setAttribute('src',base64);
          _input.filesContainer.find('.template-download').find('#picture')[0].setAttribute('src',base64);
          _input.filesContainer.find('.template-download')[0].setAttribute("class", 'template-done');
        } else {
          document.getElementById('picture').style.display = "none";
        }
      }


// ******************************************************************************


  // $('#fileupload').fileupload({
  //   dataType: "script",
  //   add: function(e, data) {
  //     var file, types;
  //     types = /(\.|\/)(mp3)$/i;
  //     file = data.files[0];
  //     if (types.test(file.type) || types.test(file.name)) {
  //       // data.context = $(tmpl("template-upload", file));
  //       $('#fileupload').append(data.context);
  //       data.submit();
  //     } else {
  //       alert("" + file.name + " is not a gif, jpeg, or png image file");
  //     }
  //   },
  //   progress: function(e, data) {
  //     var progress;
  //     if (data.context) {
  //       progress = parseInt(data.loaded / data.total * 100, 10);
  //       data.context.find('.bar').css('width', progress + '%');
  //     }
    // }
  // });

// read id3 tag end

    // window.locale = {
    //     "fileupload": {
    //         "errors": {
    //             "maxFileSize": "File is too big",
    //             "minFileSize": "File is too small",
    //             "acceptFileTypes": "Filetype not allowed",
    //             "maxNumberOfFiles": "Max number of files exceeded",
    //             "uploadedBytes": "Uploaded bytes exceed file size",
    //             "emptyResult": "Empty file upload result"
    //         },
    //         "error": "Error",
    //         "start": "Start",
    //         "cancel": "Cancel",
    //         "destroy": "Delete"
    //     }
    // };

    // 'use strict';

    // // Initialize the jQuery File Upload widget:
    // $('#fileupload').fileupload();

    // // Enable iframe cross-domain access via redirect option:
    // $('#fileupload').fileupload(
    //     'option',
    //     'redirect',
    //     window.location.href.replace(
    //         /\/[^\/]*$/,
    //         '/cors/result.html?%s'
    //     )
    // );

    // if (window.location.hostname === 'blueimp.github.com') {
    //     // Demo settings:
    //     $('#fileupload').fileupload('option', {
    //         url: 'new',
    //         maxFileSize: 5000000,
    //         acceptFileTypes: /(\.|\/)(gif|jpe?g|png|mp3)$/i,
    //         process: [
    //             {
    //                 action: 'load',
    //                 fileTypes: /^image\/(gif|jpeg|png|mp3)$/,
    //                 maxFileSize: 20000000 // 20MB
    //             },
    //             {
    //                 action: 'resize',
    //                 maxWidth: 1440,
    //                 maxHeight: 900
    //             },
    //             {
    //                 action: 'save'
    //             }
    //         ]
    //     });
    //     // Upload server status check for browsers with CORS support:
    //     if ($.support.cors) {
    //         $.ajax({
    //             url: 'new',
    //             type: 'HEAD'
    //         }).fail(function () {
    //             $('<span class="alert alert-error"/>')
    //                 .text('Upload server currently unavailable - ' +
    //                         new Date())
    //                 .appendTo('#fileupload');
    //         });
    //     }
    // } else {
    //     // Load existing files:
    //     $('#fileupload').each(function () {
    //         var that = this;
    //         $.getJSON(this.action, function (result) {
    //             if (result && result.length) {
    //                 $(that).fileupload('option', 'done')
    //                     .call(that, null, {result: result});
    //             }
    //         });
    //     });
    // }
    // $('#fileupload').fileupload({
    //     progress: function (e, data) {
    //         console.log('progress');
    //     },
    //     start: function (e) {
    //         console.log('start');
    //     }
    // }).bind('fileuploadadd', function (e, data) {
    //     console.log('fileuploadadd');
    // }).bind('fileuploadprogress', function (e, data) {
    //     console.log('fileuploadprogress');
    // }).bind('fileuploadstart', function (e) {
    //     console.log('fileuploadstart');
    // });
    $('#fileupload').fileupload();
      // .bind('fileuploadadd', function (e, data) {console.log("done")});
    // 
    // Load existing files:
    // $.getJSON($('#fileupload').prop('action'), function (files) {
    //   var fu = $('#fileupload').data('blueimpFileupload'), 
    //     template;
    //   fu._adjustMaxNumberOfFiles(-files.length);
    //   console.log(files);
    //   template = fu._renderDownload(files)
    //     .appendTo($('#fileupload .files'));
    //   // Force reflow:
    //   fu._reflow = fu._transition && template.length &&
    //     template[0].offsetWidth;
    //   template.addClass('in');
    //   $('#loading').remove();
    // });

    $('#fileupload').bind('fileuploadcompleted', function (e, data) {
        loadFile(data);
    });
 

    //Backgrid part

    var Territory = Backbone.Model.extend({});

    var PageableTerritories = Backbone.PageableCollection.extend({
        model: Territory,
        url: "/libraries/1/tracks",
        state: {
            pageSize: 10
        },
        mode: "server" // page entirely on the client side
    });


    var pageableTerritories = new PageableTerritories(),
        initialTerritories = pageableTerritories;

    function createBackgrid(collection){
        var columns = [{
            name: "id", // The key of the model attribute
            label: "ID", // The name to display in the header
            editable: false, // By default every cell in a column is editable, but *ID* shouldn't be
            // Defines a cell type, and ID is displayed as an integer without the ',' separating 1000s.
            cell: Backgrid.IntegerCell.extend({
                orderSeparator: ''
            })
        }, {
            name: "name",
            label: "Name",
            // The cell type can be a reference of a Backgrid.Cell subclass, any Backgrid.Cell subclass instances like *id* above, or a string
            cell: "string" // This is converted to "StringCell" and a corresponding class in the Backgrid package namespace is looked up
        }, {
            name: "pop",
            label: "Population",
            cell: "integer" // An integer cell is a number cell that displays humanized integers
        }, {
            name: "url",
            label: "URL",
            cell: "uri" // Renders the value in an HTML <a> element
        }];
        if ($(window).width() < 768){
            //okendoken. removing URL-column for screens smaller than 768px
            columns.splice(3,1)
        }
        var pageableGrid = new Backgrid.Grid({
            columns: columns,
            collection: collection,
            footer: Backgrid.Extension.Paginator.extend({
                //okendoken. rewrite template to add pagination class to container
                template: _.template('<tr><td class="pagination" colspan="<%= colspan %>"><ul><% _.each(handles, function (handle) { %><li <% if (handle.className) { %>class="<%= handle.className %>"<% } %>><a href="#" <% if (handle.title) {%> title="<%= handle.title %>"<% } %>><%= handle.label %></a></li><% }); %></ul></td></tr>')
            }),
            className: 'table table-striped table-editable no-margin'
        });

        $("#table-dynamic").html(pageableGrid.render().$el);
    }

    var tableResize;

    $(window).resize(function(e) {
        clearTimeout(tableResize);
        tableResize = setTimeout(function(){
            createBackgrid(pageableTerritories);
        }, 200);
    });

    createBackgrid(pageableTerritories);

    $("#search").change(function(){

        var $that = $(this),
            filteredCollection = initialTerritories.fullCollection.filter(function(el){
            return ~el.get('name').toUpperCase().indexOf($that.val().toUpperCase());
        });
        createBackgrid(new PageableTerritories(filteredCollection, {
            state: {
                firstPage: 1,
                currentPage: 1
            }
        }));
    });


    pageableTerritories.fetch();

    //jQuery DataTables part

    /* Set the defaults for DataTables initialisation */
    $.extend( true, $.fn.dataTable.defaults, {
        "sDom": "<'row-fluid'<'span6'l><'span6'f>r>t<'row-fluid'<'span6'i><'span6'p>>",
        "bServerSide": true,
        "sAjaxSource": $('#datatable-table').data('source'),
        "sPaginationType": "bootstrap",
        "oLanguage": {
            "sLengthMenu": "_MENU_ records per page"
        }
    } );


    /* Default class modification */
    $.extend( $.fn.dataTableExt.oStdClasses, {
        "sWrapper": "dataTables_wrapper form-inline"
    } );


    /* API method to get paging information */
    $.fn.dataTableExt.oApi.fnPagingInfo = function ( oSettings )
    {
        return {
            "iStart":         oSettings._iDisplayStart,
            "iEnd":           oSettings.fnDisplayEnd(),
            "iLength":        oSettings._iDisplayLength,
            "iTotal":         oSettings.fnRecordsTotal(),
            "iFilteredTotal": oSettings.fnRecordsDisplay(),
            "iPage":          oSettings._iDisplayLength === -1 ?
                0 : Math.ceil( oSettings._iDisplayStart / oSettings._iDisplayLength ),
            "iTotalPages":    oSettings._iDisplayLength === -1 ?
                0 : Math.ceil( oSettings.fnRecordsDisplay() / oSettings._iDisplayLength )
        };
    };


    /* Bootstrap style pagination control */
    $.extend( $.fn.dataTableExt.oPagination, {
        "bootstrap": {
            "fnInit": function( oSettings, nPaging, fnDraw ) {
                var oLang = oSettings.oLanguage.oPaginate;
                var fnClickHandler = function ( e ) {
                    e.preventDefault();
                    if ( oSettings.oApi._fnPageChange(oSettings, e.data.action) ) {
                        fnDraw( oSettings );
                    }
                };

                $(nPaging).addClass('pagination').append(
                    '<ul>'+
                        '<li class="prev disabled"><a href="#">'+oLang.sPrevious+'</a></li>'+
                        '<li class="next disabled"><a href="#">'+oLang.sNext+'</a></li>'+
                        '</ul>'
                );
                var els = $('a', nPaging);
                $(els[0]).bind( 'click.DT', { action: "previous" }, fnClickHandler );
                $(els[1]).bind( 'click.DT', { action: "next" }, fnClickHandler );
            },

            "fnUpdate": function ( oSettings, fnDraw ) {
                var iListLength = 5;
                var oPaging = oSettings.oInstance.fnPagingInfo();
                var an = oSettings.aanFeatures.p;
                var i, ien, j, sClass, iStart, iEnd, iHalf=Math.floor(iListLength/2);

                if ( oPaging.iTotalPages < iListLength) {
                    iStart = 1;
                    iEnd = oPaging.iTotalPages;
                }
                else if ( oPaging.iPage <= iHalf ) {
                    iStart = 1;
                    iEnd = iListLength;
                } else if ( oPaging.iPage >= (oPaging.iTotalPages-iHalf) ) {
                    iStart = oPaging.iTotalPages - iListLength + 1;
                    iEnd = oPaging.iTotalPages;
                } else {
                    iStart = oPaging.iPage - iHalf + 1;
                    iEnd = iStart + iListLength - 1;
                }

                for ( i=0, ien=an.length ; i<ien ; i++ ) {
                    // Remove the middle elements
                    $('li:gt(0)', an[i]).filter(':not(:last)').remove();

                    // Add the new list items and their event handlers
                    for ( j=iStart ; j<=iEnd ; j++ ) {
                        sClass = (j==oPaging.iPage+1) ? 'class="active"' : '';
                        $('<li '+sClass+'><a href="#">'+j+'</a></li>')
                            .insertBefore( $('li:last', an[i])[0] )
                            .bind('click', function (e) {
                                e.preventDefault();
                                oSettings._iDisplayStart = (parseInt($('a', this).text(),10)-1) * oPaging.iLength;
                                fnDraw( oSettings );
                            } );
                    }

                    // Add / remove disabled classes from the static elements
                    if ( oPaging.iPage === 0 ) {
                        $('li:first', an[i]).addClass('disabled');
                    } else {
                        $('li:first', an[i]).removeClass('disabled');
                    }

                    if ( oPaging.iPage === oPaging.iTotalPages-1 || oPaging.iTotalPages === 0 ) {
                        $('li:last', an[i]).addClass('disabled');
                    } else {
                        $('li:last', an[i]).removeClass('disabled');
                    }
                }
            }
        }
    } );

    var unsortableColumns = [];
    $('#datatable-table').find('thead th').each(function(){
        if ($(this).hasClass( 'no-sort')){
            unsortableColumns.push({"bSortable": false});
        } else {
            unsortableColumns.push(null);
        }
    });

    $("#datatable-table").dataTable({
        "sDom": "<'row-fluid table-top-control'<'span6 hidden-phone per-page-selector'l><'span6'f>r>t<'row-fluid table-bottom-control'<'span6'i><'span6'p>>",
        "oLanguage": {
            "sLengthMenu": "_MENU_ &nbsp; records per page"
        },
        "aoColumns": unsortableColumns
    });

    $(".chzn-select, .dataTables_length select").select2({
        minimumResultsForSearch: 10
    });

});