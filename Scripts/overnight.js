function getRoomRate(
    isWhenIn,
    isNumOfDays,
    isName,
    isEmail,
    isQueenRoom,
    isKingRoom,
    isTwoBedRoom,
    isNoDiscount,
    isSeniorDiscount,
    isMilitaryDiscount
) {
    // let ratePerNight = 150;
    let totalCost;
    let seniorDiscountRate = 0.1;
    let militaryDiscountRate = 0.2;
    let discountApplied = "No Discount";
    let taxRate = .12
    let ratePerDay;

    const month = new Date(isWhenIn).toLocaleString('default', { month: 'long' });

    // Apply discount
    if (isSeniorDiscount) {
        discountApplied = "Senior Discount";
    } else if (isMilitaryDiscount) {
        discountApplied = "Military Discount";
    }

    // Determine rate based on month and room type
    if (month === 'June' || month === 'July' || month === 'August') {
        if (isTwoBedRoom) {
            ratePerDay = 350;
        } else {
            ratePerDay = 250;
        }
    } else {
        if (isTwoBedRoom) {
            ratePerDay = 210;
        } else {
            ratePerDay = 150;
        }
    }

    // Apply discount to total cost
    totalCost = isNumOfDays * ratePerDay;


    if (isSeniorDiscount) {
        totalCost -= totalCost * seniorDiscountRate;
    } else if (isMilitaryDiscount) {
        totalCost -= totalCost * militaryDiscountRate;
    }
    totalTax = totalCost * taxRate
    trueTotal = totalCost + totalTax
    // Return formatted output
    return `
        Room Rate Per Night: $${ratePerDay}
        Discount Applied: ${discountApplied}
        Tax : $${totalTax.toFixed(2)}
        Total Cost for ${isNumOfDays} nights: $${trueTotal.toFixed(2)}
        
        
    `;
}

document.addEventListener("DOMContentLoaded", () => {
    const overnightForm = document.getElementById("overnightForm");
    const whenIn = document.getElementById("whenIn");
    const numOfDays = document.getElementById("numOfDays");
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const queenRoom = document.getElementById("queenRoom");
    const kingRoom = document.getElementById("kingRoom");
    const twoBedRoom = document.getElementById("twoBedRoom");
    const noDiscount = document.getElementById("noDiscount");
    const seniorDiscount = document.getElementById("seniorDiscount");
    const militaryDiscount = document.getElementById("militaryDiscount");
    const output = document.getElementById("output");

    overnightForm.addEventListener("submit", (event) => {
        event.preventDefault();

        output.innerText = getRoomRate(
            whenIn.value,
            numOfDays.value,
            name.value,
            email.value,
            queenRoom.checked,
            kingRoom.checked,
            twoBedRoom.checked,
            noDiscount.checked,
            seniorDiscount.checked,
            militaryDiscount.checked
        );
    });
});