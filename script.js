
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
            $("#plane").animate({left: "-=5"}, 0);
        }
        if (direction == 38) {
            $("#plane").animate({top: "-=5"}, 0);
        }
        if (direction == 39) {
            $("#plane").animate({left: "+=5"}, 0);
        }
        if (direction == 40) {
            $("#plane").animate({top: "+=5"}, 0);
        }
    }
}

// var pane = $('#pane'),
//     box = $('#box'),
//     w = pane.width() - box.width(),
//     d = {},
//     x = 3;
//
// function newv(v,a,b) {
//     var n = parseInt(v, 10) - (d[a] ? x : 0) + (d[b] ? x : 0);
//     return n < 0 ? 0 : n > w ? w : n;
// }
//
// $(window).keydown(function(e) { d[e.which] = true; });
// $(window).keyup(function(e) { d[e.which] = false; });
//
// setInterval(function() {
//     box.css({
//         left: function(i,v) { return newv(v, 37, 39); },
//         top: function(i,v) { return newv(v, 38, 40); }
//     });
// }, 20);
