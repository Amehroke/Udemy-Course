const taxCalculator = (sum, percentage, currency, prefix) => { 
    let tax = sum * (percentage / 100);
    let total = sum + tax;

    if (prefix){
        console.log(`
            The sum is: ${currency}${sum}
            The percentage is: ${percentage}%
            The tax is: ${currency}${tax.toFixed(2)} 
            The total is: ${currency}${total.toFixed(2)}
        `);
        //toFixed(2) is used to round off the decimal to 2 places
    }
    else{
        console.log(`
            The sum is: ${sum}${currency}
            The percentage is: ${percentage}%
            The tax is: ${tax.toFixed(2)}${currency}
            The total is: ${total.toFixed(2)}${currency}
        `);
    }
   
};  

taxCalculator(100, 18, "$", true);
taxCalculator(20, 4, "€", false);