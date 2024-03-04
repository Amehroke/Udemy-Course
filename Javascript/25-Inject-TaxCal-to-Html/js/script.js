
const formatter = (local, currency, value) => {

    let formattedValue = new Intl.NumberFormat(local, { //Intl.NumberFormat is a built-in object that provides number formatting
        style: "currency",
        currency: currency
    }).format(value);


    return formattedValue; 
} 

//output function to HTML

const printHTML = (finalTax) => {
    const taxTable = document.createElement("table");   //Create table element
    //access the table with .innerHTML and add content with = ` ` 
    taxTable.innerHTML = `       
        <tr>
            <td>Sum before tax</td>
            <td>${finalTax.sum}</td>
        </tr>
        <tr>
            <td>Tax percentage</td>
            <td>${finalTax.percentage}%</td>
        </tr>
        <tr>
            <td>Tax</td>
            <td>${finalTax.tax}</td>
        </tr>
        <tr>
            <td>Total</td>
            <td>${finalTax.total}</td>
        </tr>
    `; 

    document.querySelector("main").append(taxTable); //append the table to the main element that is in the HTML
}

const taxCalculator = (sum, percentage, local, currency) => { 
    let tax = sum * (percentage / 100);
    let total = sum + tax;

    const finalTax = { //create an object with the final tax values
        sum: formatter(local, currency, sum),
        percentage: percentage + "%",
        tax: formatter(local, currency, tax),
        total: formatter(local, currency, total)
    }

    printHTML(finalTax); //call the printHTML function and pass the finalTax object as an argument
};  

taxCalculator(100.43, 18, "en-US", "USD"); 

