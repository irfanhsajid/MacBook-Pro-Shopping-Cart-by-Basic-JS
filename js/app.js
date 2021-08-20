//total price calculation
function totalPrice() {
    const bestPrice = parseInt(document.getElementById('best-price').innerText);
    const memoryCost = parseInt(document.getElementById('memory-cost').innerText);
    const storageCost = parseInt(document.getElementById('storage-cost').innerText);
    const deliveryCost = parseInt(document.getElementById('delivery-charge').innerText);
    const totalPrice = bestPrice + memoryCost + storageCost + deliveryCost;
    document.getElementById('total-price').innerText = totalPrice;
    // for bottom part total price
    document.getElementById('total').innerText = totalPrice;
}

// memory selection and it's functionality
const memory8GB = document.getElementById('8GB-memory').addEventListener('click', function () {
    let costOf8GB = document.getElementById('memory-cost');
    costOf8GB.innerText = 0;
    totalPrice();
});

const memory16GB = document.getElementById('16GB-memory').addEventListener('click', function () {
    let costOf16GB = document.getElementById('memory-cost');
    costOf16GB.innerText = 180;
    totalPrice();
});

// storage selection and it's functionality
const ssd256GB = document.getElementById('256GB-ssd').addEventListener('click', function () {
    let ssd256GBcost = document.getElementById('storage-cost');
    ssd256GBcost.innerText = 0;
    totalPrice();
});
const ssd512GB = document.getElementById('512GB-ssd').addEventListener('click', function () {
    let ssd512GBcost = document.getElementById('storage-cost');
    ssd512GBcost.innerText = 100;
    totalPrice();
});
const ssd1TB = document.getElementById('1TB-ssd').addEventListener('click', function () {
    let ssd1TBcost = document.getElementById('storage-cost');
    ssd1TBcost.innerText = 180;
    totalPrice();
});

//delivery cost and it's functionality
const freeDelivery = document.getElementById('free-delivery').addEventListener('click', function () {
    let freeDeliveryCost = document.getElementById('delivery-charge');
    freeDeliveryCost.innerText = 0;
    totalPrice();
});
const paidDelivery = document.getElementById('paid-delivery').addEventListener('click', function () {
    let paidDeliveryCost = document.getElementById('delivery-charge');
    paidDeliveryCost.innerText = 20;
    totalPrice();
});

//promocode apply and it's functionality
function promoCodeApply() {
    const promoCode = document.getElementById('promo-input').value;
    if (promoCode.toLowerCase() == 'stevekaku') {
        let totalPrice = parseFloat(document.getElementById('total-price').innerText);
        totalPrice = totalPrice - (totalPrice * 0.20);
        //for bottom total
        document.getElementById('total').innerText = totalPrice;
    }
    document.getElementById('promo-input').value = '';
}

