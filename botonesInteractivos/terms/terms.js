var checkbox = $("input[type='checkbox']"),
    submit = $("input[type='submit']");

checkbox.click(function() {
    submit.attr("disabled", !checkbox.is(":checked"));
});