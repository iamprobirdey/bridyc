$(".custom-file-input").on("change", function() {
    var fileName = $(this)
        .val()
        .split("\\")
        .pop();
    $(this)
        .siblings(".custom-file-label")
        .addClass("selected")
        .html(fileName);
});

$(document).ready(function() {
    $("#carouid").carousel({
        interval: false
    });
});

$(".imgpreview").on("click", function() {
    $("#imgmain").prop("src", this.src);
});
$(document).ready(function() {
    $('[data-toggle="popover"]').popover({
        html: true,
        content: function() {
            return $("#popover-content").html();
        }
    });
});
