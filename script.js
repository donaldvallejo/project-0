$('document').ready(function() {

    $(document).keydown(function(e) {
        keys[e.keyCode] = true;
    });

    $(document).keyup(function(e) {
        delete keys[e.keyCode];
    });

    setInterval(movePlane, 20);
    var keys = {}
    function movePlane() {
        for (var direction in keys) {
            if (!keys.hasOwnProperty(direction));
            if (direction == 37) {
                $("#carA").animate({
                    left: "-=5"
                }, 0);
            }
            if (direction == 38) {
                $("#carA").animate({
                    top: "-=4"
                }, 0);
            }
            if (direction == 39) {
                $("#carA").animate({
                    left: "+=6.5"
                }, 0);
            }
            if (direction == 40) {
                $("#carA").animate({
                    top: "+=4"
                }, 0);
            }
        }
    };

    setInterval(movecar, 20);
    var keys = {}

    function movecar() {
        for (var direction in keys) {
            if (!keys.hasOwnProperty(direction));
            if (direction == 65) {
                $("#carB").animate({
                    left: "-=5"
                }, 0);
            }
            if (direction == 87) {
                $("#carB").animate({
                    top: "-=4"
                }, 0);
            }
            if (direction == 68) {
                $("#carB").animate({
                    left: "+=6.5"
                }, 0);
            }
            if (direction == 83) {
                $("#carB").animate({
                    top: "+=4"
                }, 0);
            }
        }
    };
          // win condition stopped working :(
    $(window).keydown(function() {
      var carA = $('#carA').offset();
      var carB = $('#carB').offset();
      console.log('almost working')
      if (carA.left >= 1000 || carB.left >= 1000) {
          alert("you got away from the cops");
        }
})
    // $("cop, cop2, cop3, cop4").
    // var cop =
    // var cop2 =
    // var cop3 =
    // var cop4 =
    // if (cop.left >= 1400 || cop2.left >= 1400 || cop3.left >= 1400 || cop4.left >= 1400) {
    //     $("window").setInterval(){
    //
    //     })
    //   }
});
