function isOverLapping("cop, cop2, cop3, cop4") {


}

$('document').ready(function() {
    setInterval(movePlane, 20);
    var keys = {}


    $(document).keydown(function(e) {
        keys[e.keyCode] = true;
    });

    $(document).keyup(function(e) {
        delete keys[e.keyCode];
    });

    function movePlane() {
        for (var direction in keys) {
            if (!keys.hasOwnProperty(direction)) continue;
            if (direction == 37) {
                $("#carA").animate({
                    left: "-=5"
                }, 0);
            }
            if (direction == 38) {
                $("#carA").animate({
                    top: "-=5"
                }, 0);
            }
            if (direction == 39) {
                $("#carA").animate({
                    left: "+=10"
                }, 0);
            }
            if (direction == 40) {
                $("#carA").animate({
                    top: "+=5"
                }, 0);
            }
        }
    };

    setInterval(movecar, 20);
    var keys = {}

    function movecar() {
        for (var direction in keys) {
            if (!keys.hasOwnProperty(direction)) continue;
            if (direction == 65) {
                $("#carB").animate({
                    left: "-=5"
                }, 0);
            }
            if (direction == 87) {
                $("#carB").animate({
                    top: "-=5"
                }, 0);
            }
            if (direction == 68) {
                $("#carB").animate({
                    left: "+=10"
                }, 0);
            }
            if (direction == 83) {
                $("#carB").animate({
                    top: "+=5"
                }, 0);
            }
        }
    };

    // $( "#target" ).keypress(function() {
    //   console.log( "Handler for .keypress() called." );
    // });


    $(window).keydown(function() {
      var carA = $('#carA').offset();
      var carB = $('#carB').offset();
      console.log('almost working')
      if (carA.left >= 1400 || carB.left >= 1400) {
            $('body').replacewith
        }
})
// $("cop, cop2, cop3, cop4").
// var cop =
// var cop2 =
// var cop3 =
// var cop4 =
if (cop.left >= 1400 || cop2.left >= 1400 || cop3.left >= 1400 || cop4.left >= 1400) {
    $("window").setInterval(){

    })
  }
});
