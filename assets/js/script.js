$(document).ready(function(){

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

            }
            else if($(window).width() < 840 && window.orientation == 90){

                $("#classes").removeClass("bgClassImg");

            } else if ($(window).width() >= 768){

                $("#classes").addClass("bgClassImg");
            }

            if($(window).width() < 425){

                $(".about .row div.col-6").removeClass("col-6");

            } else if ($(window).width() >= 425){

                $(".about .row div.col-sm-6").addClass("col-6");

            }
    });

    $(window).resize();

});