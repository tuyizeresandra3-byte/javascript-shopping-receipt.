
// PART 1: SHOPPING DATA

const riceName = "Rice";
const ricePrice = 2500;
const riceQuantity = 2;

const sugarName = "Sugar";
const sugarPrice = 1800;
const sugarQuantity = 3;

const oilName = "Cooking Oil";
const oilPrice = 6500;
const oilQuantity = 1;

const breadName = "Bread";
const breadPrice = 1200;
const breadQuantity = 2;

const milkName = "Milk";
const milkPrice = 1500;
const milkQuantity = 4;

// Calculate each product's total price

const riceTotal = ricePrice * riceQuantity;
const sugarTotal = sugarPrice * sugarQuantity;
const oilTotal = oilPrice * oilQuantity;
const breadTotal = breadPrice * breadQuantity;
const milkTotal = milkPrice * milkQuantity;

// Calculate the subtotal

const subtotal =
    riceTotal +
    sugarTotal +
    oilTotal +
    breadTotal +
    milkTotal;


// PART 2: DISCOUNT, VAT AND FINAL TOTAL

const standardDiscountRate = 0.10;
const vatRate = 0.18;

// Give a 10% discount if subtotal is at least 20,000 RWF

const discountEligible = subtotal >= 20000;

const discountAmount = discountEligible
    ? subtotal * standardDiscountRate
    : 0;

const amountAfterDiscount = subtotal - discountAmount;

// Calculate VAT after the standard discount

const vatAmount = amountAfterDiscount * vatRate;

// Calculate the final total

const finalTotal = amountAfterDiscount + vatAmount;


// PART 3: CUSTOMER INFORMATION AND DATA TYPES

const customerName = "aline UWASE";
const customerAge = "22";
const amountPaid = "30000";
const isMember = true;

// A string stores text, such as "Aline" or "30000".
// A number stores numeric values used in calculations.
// A boolean stores either true or false.

console.log("Age before conversion:", typeof customerAge);
console.log("Payment before conversion:", typeof amountPaid);

// Convert the strings to numbers

const ageNumber = Number(customerAge);
const paymentNumber = Number(amountPaid);

console.log("Age after conversion:", typeof ageNumber);
console.log("Payment after conversion:", typeof paymentNumber);

// Format the customer's name

const formattedName = customerName
    .toLowerCase()
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

// Generate initials: A.U.

const initials = formattedName
    .split(" ")
    .map(word => word.charAt(0))
    .join(".") + ".";

// Check discount eligibility using comparison and logical operators

const eligibleForDiscount =
    subtotal >= 20000 && ageNumber >= 18;

// Calculate change or remaining balance

const balance = paymentNumber - finalTotal;


// PART 4: DISPLAY A FORMATTED RECEIPT

// Format numbers with commas and up to 2 decimal places

const formatMoney = amount =>
    amount.toLocaleString("en-US", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
    });

console.log(`
================ SMART SHOP RECEIPT ================

Customer: ${formattedName}
Initials: ${initials}
Membership: ${isMember ? "Active" : "Inactive"}

-----------------------------------------------------
Item                 Qty       Total (RWF)
-----------------------------------------------------
${riceName.padEnd(22)} ${String(riceQuantity).padEnd(10)} ${formatMoney(riceTotal)}
${sugarName.padEnd(22)} ${String(sugarQuantity).padEnd(10)} ${formatMoney(sugarTotal)}
${oilName.padEnd(22)} ${String(oilQuantity).padEnd(10)} ${formatMoney(oilTotal)}
${breadName.padEnd(22)} ${String(breadQuantity).padEnd(10)} ${formatMoney(breadTotal)}
${milkName.padEnd(22)} ${String(milkQuantity).padEnd(10)} ${formatMoney(milkTotal)}
-----------------------------------------------------
Subtotal:                   ${formatMoney(subtotal)} RWF
Discount (10%):             ${formatMoney(discountAmount)} RWF
VAT (18%):                  ${formatMoney(vatAmount)} RWF
-----------------------------------------------------
FINAL TOTAL:                ${formatMoney(finalTotal)} RWF
Amount Paid:                ${formatMoney(paymentNumber)} RWF
${balance >= 0
        ? `Change:                     ${formatMoney(balance)} RWF`
        : `Remaining to pay:           ${formatMoney(-balance)} RWF`}
=====================================================
Thank you for shopping!
=====================================================

`);


// BONUS FEATURE: PAYMENT CHECK

if (paymentNumber >= finalTotal) {
    console.log("Payment successful. Thank you!");
} else {
    console.log("Insufficient payment. Please pay the remaining balance.");


}







