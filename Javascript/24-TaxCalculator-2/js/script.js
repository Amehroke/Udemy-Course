
const formatter = (local, currency, value) => {

    let formattedValue = new Intl.NumberFormat(local, {
        style: "currency",
        currency: currency
    }).format(value);


    return formattedValue; 
} 


const taxCalculator = (sum, percentage, local, currency) => { 
    let tax = sum * (percentage / 100);
    let total = sum + tax;

    console.log(`
        The sum is: ${formatter(local, currency, sum)}
        The percentage is: ${percentage}%
        The tax is: ${formatter(local, currency, tax)} 
        The total is: ${formatter(local, currency, total)}
    `);
    
};  

taxCalculator(100.43, 18, "en-US", "USD");
