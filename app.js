// Listen for submit
let form = document.querySelector('#loan-form');





form.addEventListener('submit', function(e) {
    // Hide results
    document.getElementById('results').style.display = 'none';

    // Show Loading
    document.getElementById('loading').style.display = 'block';

    setTimeout(calculateResults, 2000);

    e.preventDefault()
});

function calculateResults(e){

        //UI VAR
    const amount = document.querySelector('#amount');
    const interest = document.querySelector('#interest');
    const years = document.querySelector('#years');
    const monthlyPayment = document.querySelector('#monthly-payment');
    const totalPayment = document.querySelector('#total-payment');
    const totalInterest = document.querySelector('#total-interest');

    const principal = parseFloat(amount.value);
    const calculateInterest = parseFloat(interest.value) / 100 /12;
    const calculatePayments = parseFloat(years.value) * 12;

    // Compute monthly payment
    const x = Math.pow(1 + calculateInterest, calculatePayments);
    const monthly = (principal*x*calculateInterest)/(x-1);

    if(isFinite(monthly)){
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatePayments).toFixed(2);
        totalInterest.value = ((monthly * calculatePayments)-principal).toFixed(2);
        showSuccess('Successfull');

        // Show Result
        document.getElementById('results').style.display = 'block';

        // hide loading
        document.getElementById('loading').style.display = 'none';
    } else {
        // Erroe pop
        showError('Please Check Your Number');
    }


}

function showSuccess (error){
   
    // Create Element
    const errorDiv = document.createElement('div');

    // get elements
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading')

    // Add class
    errorDiv.className = 'alert alert-success';

    // Create text node and append it to div
    errorDiv.append(document.createTextNode(error));

    // insert error above heading
    card.insertBefore(errorDiv, heading);

    // Clear error after 3 seconds
    setTimeout(clearError, 3000);

}

function showError(error){
      // hide Result
      document.getElementById('results').style.display = 'none';

      // hide loading
      document.getElementById('loading').style.display = 'none';
    // Create Element
    const errorDiv = document.createElement('div');

    // get elements
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading')

    // Add class
    errorDiv.className = 'alert alert-danger';

    // Create text node and append it to div
    errorDiv.append(document.createTextNode(error));

    // insert error above heading
    card.insertBefore(errorDiv, heading);

    // Clear error after 3 seconds
    setTimeout(clearError, 3000);
    // Clear error after 3 seconds
    setTimeout(clearSuccess, 3000);

}

function clearError(){
    document.querySelector('.alert').remove();
}

function clearSuccess(){
    document.querySelector('.alert').remove();
}