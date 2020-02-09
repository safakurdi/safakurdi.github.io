
$(document).ready(function () {
    $("button").click(function () {


        var div = $("h1");

        $("h1").css({ "color": "#FF69B4" });
        div.animate({ fontSize: '70px' }, "slow");
        div.animate({ fontSize: '40px' }, "slow");
        $(".img").css({


            'border-radius': '8px',


        });
    })




});

