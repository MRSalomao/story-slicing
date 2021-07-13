import './styles.css';

document.getElementById('app').innerHTML = `
<h1>Price calculator!</h1>
<div>
  Units: 100
  Price: $20
  State: CA

  Total: <span id="total"></span>

  Active tax rate: <span id="tax-rate"></span>
  Active discount: <span id="discount-rate"></span>
</div>
`;

const discounts = [
  [1000, 3],
  [5000, 5],
  [7000, 7],
  [10000, 10],
  [50000, 15]
];

const taxes = {
  UT: 6.85,
  NV: 8.0,
  TX: 6.25,
  AL: 4.0,
  CA: 8.25
};

const totalRef = document.getElementById('total');
const taxRateRef = document.getElementById('tax-rate');
const discountRateRef = document.getElementById('discount-rate');

const rawTotal = 100 * 20;

let discount = 0;
for (const d of discounts) {
  discount = d[1];
  if (rawTotal > d[0]) {
    break;
  }
}

totalRef.innerHTML =
  '$' +
  ((((rawTotal * (100 - discount)) / 100) * (100 - taxes['CA'])) / 100).toFixed(
    2
  );

taxRateRef.innerHTML = taxes['CA'] + '%';

discountRateRef.innerHTML = discount + '%';
