/** Modal Response */

$("button#contactBtn").click(function () {
    var name = $("#name").val();
    var query = $("#textArea").val();
    var hasSign = $('#email').val().match(/\@/);

    //https://stackoverflow.com/questions/2021053/finding-plus-sign-in-regular-expression
    //https://regexr.com/

    if (name != undefined && query != undefined && hasSign) {
        $(".modal").show();

        $("#name").val("");
        $("#textArea").val("");
        $("#email").val("");    
    }

});

$("button#modelBtn").add(".close").click(function () {
    $(".modal").hide();
});

/** Remove class under tablet width to prevent breaking of layout */

$(window).resize(function(){

    if($(window).width() < 768){

        $("#classes").removeClass("bgClassImg");

    } else if ($(window).width() >= 768){

        $("#classes").addClass("bgClassImg");

    }
});