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

    const billForm = document.getElementById('calculate-bill-form')
    billForm.addEventListener('submit', function(e) {
        e.preventDefault()
        start_loader();
        const unitsAmount = document.getElementById('units-amount').value;
        const billingDays = document.getElementById('days-period').value;
        
        var vat = 0.135,
            rate = 0.20,
            charge = 0.04,
            amountWithoutVat = 0,
            amountWithVat = 0;
      
            amountWithoutVat = (parseFloat(unitsAmount) * parseFloat(rate)) + (parseFloat(billingDays) * parseFloat(charge));
            amountWithVat = parseFloat(amountWithoutVat) + (parseFloat(amountWithoutVat) * parseFloat(vat));

        
        setTimeout(() => {
            document.getElementById('unitsNumb').textContent = parseFloat(unitsAmount).toLocaleString("en-US", { style: "decimal", maximumFractionDigits: 2 })
            document.getElementById('billDays').textContent =  parseFloat(billingDays).toLocaleString("en-US", { style: "decimal", maximumFractionDigits: 2 });
            document.getElementById('total-pay-without-vat').textContent = "€ " + parseFloat(amountWithoutVat).toLocaleString("en-US", { style: "decimal", maximumFractionDigits: 2 })
            document.getElementById('total-pay-with-vat').textContent = "€ " + parseFloat(amountWithVat).toLocaleString("en-US", { style: "decimal", maximumFractionDigits: 2 })
            
            document.getElementById('result').style.display = 'table';
            document.getElementById('reset-btn').style.display = 'block';
            end_loader()
        }, 500)

    })
    billForm.addEventListener('reset', function(e) {
        start_loader();
        setTimeout(() => {
            document.getElementById('unitsNumb').textContent = ""
            document.getElementById('billDays').textContent = ""
            document.getElementById('total-pay-without-vat').textContent = " "
            document.getElementById('total-pay-with-vat').textContent = " "
            document.getElementById('result').style.display = 'none';
            document.getElementById('reset-btn').style.display = 'none';
            end_loader()
        }, 500)
    })
}
