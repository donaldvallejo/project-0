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
            $("#carA").animate({left: "-=5"}, 0);
        }
        if (direction == 38) {
            $("#carA").animate({top: "-=5"}, 0);
        }
        if (direction == 39) {
            $("#carA").animate({left: "+=10"}, 0);
        }
        if (direction == 40) {
            $("#carA").animate({top: "+=5"}, 0);
        }
    }
};

setInterval(movecar, 20);
var keys = {}

function movecar() {
    for (var direction in keys) {
        if (!keys.hasOwnProperty(direction)) continue;
        if (direction == 65) {
            $("#carB").animate({left: "-=5"}, 0);
        }
        if (direction == 87) {
            $("#carB").animate({top: "-=5"}, 0);
        }
        if (direction == 68) {
            $("#carB").animate({left: "+=10"}, 0);
        }
        if (direction == 83) {
            $("#carB").animate({top: "+=5"}, 0);
        }
    }
};

var rect1 = {x: 5, y: 5, width: 50, height: 50} 
var rect2 = {x: 20, y: 10, width: 10, height: 10}

if (rect1.x < rect2.x + rect2.width &&
   rect1.x + rect1.width > rect2.x &&
   rect1.y < rect2.y + rect2.height &&
   rect1.height + rect1.y > rect2.y) {
    // collision detected!
}

// filling in the values =>

if (5 < 30 &&
    55 > 20 &&
    5 < 20 &&
    55 > 10) {
    // collision detected!
}
