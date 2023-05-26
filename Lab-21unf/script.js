
const input = $("#number-input");
const result = $("#result");
const submit = $("#submit");

submit.on("click", () => {

    let number = parseInt(input.val());
    $.ajax({
        url: `http://127.0.0.2:8089/power?number=${number}`,
        type: "POST",
        success: function (response) {
            console.log(response.number);
            result.text("Power of number is: " + response.number);
        },
        error: function (message) {
            console.error(message);
            result.text("Error! Something went wrong!");
        }
    })
})