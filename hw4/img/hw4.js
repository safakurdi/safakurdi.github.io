$(document).ready(function () {
    $("#dropdownMenuButton").dropdown('toggle')
    $("#item1").click(function () {
        var myElement = $(".bg");
        myElement.css("background-image", "url('img/lightblue.jpg')");
    });
    $("#item2").click(function () {
        var myElement = $(".bg");
        myElement.css("background-image", "url('img/lightgold.jpg')");
    });
    $("#item3").click(function () {
        var myElement = $(".bg");
        myElement.css("background-image", "url('')");
    });
    if (navigator.serviceWorker) {
        window.addEventListener('load', () => {
            navigator.serviceWorker
                .register('/serviceworker.js')
                .then(reg => console.log("work"))
                .catch(err => console.log("no"))
        })
    }
});
