// Math object : metode2 untuk operasi matematika
let angkaAcak = Math.random();
console.log(angkaAcak);
console.log(Math.floor(Math.random() * (10 - 1 + 1) + 1)); // nampilin angka acak dri 1 - 10

// Math.floor untuk ngebuletin angka kebawah
console.log("Math floor : ", Math.floor(3.65));

// Math.ceil buat ngebuletin angka keatas
console.log("Math ceil : ", Math.ceil(3.65));

// Math.round buat ngebulatin angka terdekat
console.log("Math round : ", Math.round(3.5));

// Math.max buat nyari angka tertinggi
console.log("Math max : ", Math.max(12, 23, 54, 2, 65, 43));

// Math.min buat nyari angka terkecil
console.log("Math min : ", Math.min(12, 23, 54, 2, 65, 43));

// Math.sqrt buat ngitung akar kuadrat
console.log("Math sqrt : ", Math.sqrt(16));

// Math.pow buat ngitung pangkat
console.log("Math pow : ", Math.pow(2, 3));

// Math.PI buat nilai pi
console.log("math pi : ", Math.PI);

let luasLingkaran = Math.PI * Math.pow(5, 2);
console.log(Math.floor(luasLingkaran));
