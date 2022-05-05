window.start_loader = function() {
    const loader = document.getElementById('loader-holder')
    loader.style.display = 'flex';
}
window.end_loader = function() {
    const loader = document.getElementById('loader-holder')
    loader.style.display = 'none';
}

window.onload = function() {
    setTimeout(() => {
        end_loader()
    }, 500)

    const loanForm = document.getElementById('calculate-loan-form')
    loanForm.addEventListener('submit', function(e) {
        e.preventDefault()
        start_loader();
        const principalAmount = document.getElementById('loan-amount').value;
        const interest = document.getElementById('loan-interest').value;
        
        var total = 0,
            vat = 0.135,
            rate = 0.20,
            charge = 0.04,
            amountWithoutVat = 0,
            amountWithVat = 0;
            
            

          
            amountWithoutVat = (parseFloat(principalAmount) * parseFloat(rate)) + (parseFloat(interest) * parseFloat(charge));
        
            amountWithVat = parseFloat(amountWithoutVat) + (parseFloat(amountWithoutVat) * parseFloat(vat));

        
        setTimeout(() => {
            document.getElementById('principal').textContent = parseFloat(principalAmount).toLocaleString("en-US", { style: "decimal", maximumFractionDigits: 2 })
            document.getElementById('annual-interest').textContent = parseFloat(interest).toLocaleString("en-US", { style: "decimal", maximumFractionDigits: 2 });
            
            
            document.getElementById('total-pay').textContent = parseFloat(amountWithoutVat).toLocaleString("en-US", { style: "decimal", maximumFractionDigits: 2 })
            document.getElementById('total-interest').textContent = parseFloat(amountWithVat).toLocaleString("en-US", { style: "decimal", maximumFractionDigits: 2 })
            
            document.getElementById('result').style.display = 'table';
            document.getElementById('reset-btn').style.display = 'block';
            end_loader()
        }, 500)

    })
    loanForm.addEventListener('reset', function(e) {
        start_loader();
        setTimeout(() => {
            document.getElementById('principal').textContent = ""
            document.getElementById('annual-interest').textContent = ""
            document.getElementById('total-pay').textContent = ""
            document.getElementById('total-interest').textContent = ""
            document.getElementById('result').style.display = 'none';
            document.getElementById('reset-btn').style.display = 'none';
            end_loader()
        }, 500)
    })
}

