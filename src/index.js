import './styles.css';

document.getElementById('app').innerHTML = `
<h1>Price calculator!</h1>
<div>
  Units: 100
  Price: $20
  State: CA

  Total: <span id="total"></span>

  Active tax rate: <span id="tax-rate"></span>
</div>
`;

const totalRef = document.getElementById('total');
const taxRateRef = document.getElementById('tax-rate');

const taxes = {
  UT: 6.85,
  NV: 8.0,
  TX: 6.25,
  AL: 4.0,
  CA: 8.25
};

totalRef.innerHTML = (100 * 20 * (100 - taxes['CA'])) / 100;

taxRateRef.innerHTML = taxes['CA'] + '%';

// 1000, 3 ; 5000, 5; 7, 7000, 10000, 10; 50000, 15 / UT, 6.85; NV, 8.00
