progressCircle();
var test = 0.40;

function progressCircle() {
    let options = {
        startAngle: -1.55,
        size: 150,
        value: 0.40,
        fill: { gradient: ['#3d6353', '#4d9653'] }
    }
    options.value=0.69;
    $(".bar").circleProgress(options).on('circle-animation-progress',
        function (event, progress, stepValue) {
            $(this).parent().find("span").text(String(stepValue.toFixed(2).substr(2)) + "%");
        });
    // $(".bar").circleProgress({
    //     value: 0.40
    // });
}