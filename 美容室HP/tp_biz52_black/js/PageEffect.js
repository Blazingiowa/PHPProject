window.onload = function () {

    PageEffects();

}



function PageEffects() {

    $(function () {

        var Midashi = $("#h2");

        const CoolTime = 500;

        Midashi.mouseover(function () {
            Midashi.stop(true).animate({
                fontSize: 30
            }, CoolTime);

        });


        Midashi.mouseout(function () {
            Midashi.stop(true).animate({
                fontSize: 24
            }, CoolTime);
        });
    });
}
