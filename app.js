// https://calculator.swiftutors.com/present-value-of-growing-perpetuity-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const presentValueofGrowingPerpetuityRadio = document.getElementById('presentValueofGrowingPerpetuityRadio');
const dividendCouponatPeriodRadio = document.getElementById('dividendCouponatPeriodRadio');
const discountRateRadio = document.getElementById('discountRateRadio');
const growthRateRadio = document.getElementById('growthRateRadio');

let presentValueofGrowingPerpetuity;
let dividendCouponatPeriod = v1;
let discountRate = v2;
let growthRate = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

presentValueofGrowingPerpetuityRadio.addEventListener('click', function() {
  variable1.textContent = 'Dividend/Coupon at Period ($)';
  variable2.textContent = 'Discount Rate (%)';
  variable3.textContent = 'Growth Rate (%)';
  dividendCouponatPeriod = v1;
  discountRate = v2;
  growthRate = v3;
  result.textContent = '';
});

dividendCouponatPeriodRadio.addEventListener('click', function() {
  variable1.textContent = 'Present Value of Growing Perpetuity ($)';
  variable2.textContent = 'Discount Rate (%)';
  variable3.textContent = 'Growth Rate (%)';
  presentValueofGrowingPerpetuity = v1;
  discountRate = v2;
  growthRate = v3;
  result.textContent = '';
});

discountRateRadio.addEventListener('click', function() {
  variable1.textContent = 'Present Value of Growing Perpetuity ($)';
  variable2.textContent = 'Dividend/Coupon at Period ($)';
  variable3.textContent = 'Growth Rate (%)';
  presentValueofGrowingPerpetuity = v1;
  dividendCouponatPeriod = v2;
  growthRate = v3;
  result.textContent = '';
});

growthRateRadio.addEventListener('click', function() {
  variable1.textContent = 'Present Value of Growing Perpetuity ($)';
  variable2.textContent = 'Dividend/Coupon at Period ($)';
  variable3.textContent = 'Discount Rate (%)';
  presentValueofGrowingPerpetuity = v1;
  dividendCouponatPeriod = v2;
  discountRate = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(presentValueofGrowingPerpetuityRadio.checked)
    result.textContent = `Present Value of Growing Perpetuity = ${computePresentValueofGrowingPerpetuity().toFixed(2)} $`;

  else if(dividendCouponatPeriodRadio.checked)
    result.textContent = `Dividend/Coupon at Period = ${computeDividendCouponatPeriod().toFixed(2)} $`;

  else if(discountRateRadio.checked)
    result.textContent = `Discount Rate = ${computeDiscountRate().toFixed(2)} %`;

  else if(growthRateRadio.checked)
    result.textContent = `Growth Rate = ${computeGrowthRate().toFixed(2)} %`;
})

// calculation

function computePresentValueofGrowingPerpetuity() {
  return Number(dividendCouponatPeriod.value) / ((Number(discountRate.value) / 100) - (Number(growthRate.value) / 100));
}

function computeDividendCouponatPeriod() {
  return Number(presentValueofGrowingPerpetuity.value) * ((Number(discountRate.value) / 100) - (Number(growthRate.value) / 100));
}

function computeDiscountRate() {
  return ((Number(dividendCouponatPeriod.value) / Number(presentValueofGrowingPerpetuity.value)) + (Number(growthRate.value) / 100)) * 100;
}

function computeGrowthRate() {
  return ((Number(discountRate.value) / 100) - (Number(dividendCouponatPeriod.value) / Number(presentValueofGrowingPerpetuity.value))) * 100;
}