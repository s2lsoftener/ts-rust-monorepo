fetch('http://0.0.0.0:3000/factorial', {
  method: 'POST',
  body: 5
}).then((result) => result.text())
.then((num) => console.log('factorial', num));

fetch('http://0.0.0.0:3000/fibonacci', {
  method: 'POST',
  body: 10
}).then((result) => result.text())
.then((num) => console.log('fibonacci', num));
