function calculateSquare() {
    var number = $('#numberInput').val();
    $.ajax({
        url: '/calculate',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({ number: number }),
        success: function(response) {
            $('#result').text("Квадрат числа " + number + " дорівнює " + response.square);
        },
        error: function(xhr, status, error) {
            console.error('Помилка при виконанні запиту:', error);
        }
    });
}
