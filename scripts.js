document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const cardNumber = document.getElementById('card-number').value;
    const cardName = document.getElementById('card-name').value;
    const expirationDate = document.getElementById('expiration-date').value;
    const cvv = document.getElementById('cvv').value;

    // Simulación de la verificación del pago
    if (cardNumber && cardName && expirationDate && cvv) {
        document.getElementById('payment-result').textContent = 'Pago realizado con éxito.';
    } else {
        document.getElementById('payment-result').textContent = 'Error en el pago. Por favor, revise los datos e intente de nuevo.';
    }
});