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

    const loanForm = document.getElementById('calculate-bill')
    loanForm.addEventListener('submit', function(e) {
        e.preventDefault()
        start_loader();
        const unitsQtd = document.getElementById('units-amount').value;
        const daysQtd = document.getElementById('billing-period').value;
        
        var monthly = 0,


            vat = 13.5/100,
		rate = 0.04,
            total = 0,
            totalWithoutVar = 0,
            totalWithVar = 0;
        
totalWithoutVar = (parseFloat(unitsQtd) * (parseFloat(daysQtd) * parseFloat(rate));

totalWithVar = (parseFloat(unitsQtd) * (parseFloat(daysQtd) * parseFloat(rate)) * (parseFloat(vat);



                setTimeout(() => {
            document.getElementById('units').textContent = parseFloat(unitsQtd).toLocaleString("en-US", { style: "decimal", maximumFractionDigits: 2 })
            document.getElementById('bill-days').textContent = parseFloat(daysQtd).toLocaleString("en-US", { style: "decimal", maximumFractionDigits: 2 });
            
            document.getElementById('amount-without-vat').textContent = parseFloat(totalWithoutVar).toLocaleString("en-US", { style: "decimal", maximumFractionDigits: 2 })
            document.getElementById('total-pay').textContent = parseFloat(totalWithVar).toLocaleString("en-US", { style: "decimal", maximumFractionDigits: 2 })
            document.getElementById('result').style.display = 'table';
            document.getElementById('reset-btn').style.display = 'block';
            end_loader()
        }, 500)

    })
    loanForm.addEventListener('reset', function(e) {
        start_loader();
        setTimeout(() => {
            document.getElementById('units').textContent = ""
            document.getElementById('bill-days').textContent = ""
            document.getElementById('amount-without-vat').textContent = ""
            document.getElementById('total-pay').textContent = ""
            document.getElementById('result').style.display = 'none';
            document.getElementById('reset-btn').style.display = 'none';
            end_loader()
        }, 500)
    })
}
