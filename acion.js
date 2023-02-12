$( function() {
    $( "#accordion" ).accordion({
      heightStyle: "fill"
    });
 
    $( "#accordion-resizer" ).resizable({
      minHeight: 140,
      minWidth: 200,
      resize: function() {
        $( "#accordion" ).accordion( "refresh" );
      }
    });
  } );

  //scolex
  $(document).ready(() => {
    $('#slider').css({'margin': 'auto', 'width': '170px', 'height': '450', 'overflow': 'scroll'});

    $('#imagenes').css('height', '800px');
});

let persona = new Object()


