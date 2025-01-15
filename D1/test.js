// Soal 1, buat operasi matermatika dengan output seperti dibawah ini
let a, b, c;
console.log("====================");
console.log("=====NAMA KLEAN=====");
console.log("====================");
console.log("X = ", a);
console.log("Y = ", b);
console.log("Z = ", c);
console.log("Penjumlahan = ");
console.log("Pengurangan = ");
console.log("Perkalian = ");
console.log("Pembagian = ");
console.log("Modulus = ");
console.log("Jumlah-kali-bagi = a + b * c / c");
console.log("Total = "); // jumlah dari semuanya jumlah, kali, bgai jurang dst
console.log("====================");
// Soal 2 : Hitung berapa detik dalam 30Hari menggunakan operator matematika
/* Soal 3 : cari hobby didalam data yang dikirim dari parameter user
jika objek user atau properti hobby tidak ditemukan maka return "Hobby tidak ada" */
function findUserHobby(user) {
  // tulis jawaban dsni
}
let user1 = {
  nama: "owi kun",
  age: 25,
  hobby: ["Membaca", "Menulis"],
};
let user2 = {
  nama: "mega chan",
  age: 25,
};
console.log(findUserHobby(user1));
console.log(findUserHobby(user2));

// LOGIC
/** Soal 4 : buat logic swicth case untuk menampilkan nama hari pake bahasa inggris berdasarkan input angka 1-7
 * Jika angka yang dimasukkan diluar rentang tersebut, maka tampilkan pesan "Input tidak valid"
 */

// data dari api user.role = "admin"
let hari = "user"; // nilai input yang akan dikirim ke swicth case

switch (hari) {
  case "admin": //kondisi
    console.log("Akses CRUD data");
    break;
  case "user":
    console.log("Akses Read & Update data");
    break;
  case 3:
    console.log("Wednesday");
    break; //menghentikan eksekusi ketika kondisi terpenuhi
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default: // default : kondisi jika semua case tidak terpenuhi
    console.log("Input tidak valid");
    break;
}

/** Soal 5 : buat logic if yang menentukan status kelulusan orang berdasarkan nilai yang didapat
 * jika(if) nilai lebih dari atau sama dengan 80,(output) maka status nya "Anda lulus dengan sangat baik",
 * jika nilai lebih dari atau sama dengan 70, DAN kurang dari 80, maka statusnya "Lulus dengan baik",
 * jika nilai lebih dari atau sama dengan 60, DAN kurang dari 70, maka statusnya "Lulus"
 * jika nilai kurang dari 60, maka statusnya "tidak lulus"
 */
let nilai = 75;

if (nilai >= 80) {
  console.log("Lulus dengan Sangat Baik");
} else if (nilai >= 70 && nilai < 80) {
  console.log("Lulus dengan Baik");
} else if (nilai >= 60 && nilai < 70) {
  console.log("Lulus");
} else {
  console.log("Tidak Lulus");
}

/** soal 6 : nested if
buat logic untuk nentuin nilai rata-rata siswa dengan menghitung nilai rata-rata dari 3 MAPEL(MTK,fisika, kimia)
jika nilai yang dimasukkan tidak valid(diluar rentang 0-100), maka statusnya "Nilai tidak valid"
jika nilai rata-rata lebih besar atau sama dengan 80, maka statusnya "Selamat anda lulus dengan baik"
jika nilai rata-rata lebih kecil dari 80 dan lebih besar atau sama dengan  60, maka statusnya "Anda lulus"
jika nilai rata-rata  lebih kecil dari 60, maka statusnya "Anda tidak lulus"
 */
let nilaiMatematika = 80;
let nilaiFisika = 70;
let nilaiKimia = 90;
let rataRata = (nilaiMatematika + nilaiFisika + nilaiKimia) / 3;

if (nilaiMatematika >= 0 && nilaiMatematika <= 100) {
  if (nilaiFisika >= 0 && nilaiFisika <= 100) {
    if (nilaiKimia >= 0 && nilaiKimia <= 100) {
      if (rataRata >= 0 && rataRata <= 100) {
        if (rataRata >= 80) {
          console.log("Selamat, anda lulus dengan baik!");
        } else if (rataRata >= 60) {
          console.log("Anda lulus");
        } else {
          console.log("Anda tidak lulus");
        }
      } else {
        console.log("Nilai tidak valid");
      }
    } else {
      console.log("Nilai tidak valid");
    }
  } else {
    console.log("Nilai tidak valid");
  }
} else {
  console.log("Nilai tidak valid");
}

/** Soal 7 : buat logic untuk menentukan jenis bilangan(positif, negatif, atau nol)
 * dari nilai yang dimasukkan oleh user menggunakan ternary operator
 * output yang diharapkan : ("Angka 7 adalah bilangan positif")
 */
let angka = 5;
let jenis = angka > 0 ? "positif" : angka < 0 ? "negatif" : "nol";
console.log(`Angka ${angka} adalah bilangan ${jenis}.`);

/** Soal 8 : nested if
 * buat program untuk menghitung total harga pembelian barang pake nested if
 * jika total harga sama dengan 0 maka tampilin pesan "Harga tidak valid"
 * jika total pembelian melebihi atau sama dengan 1 juta, maka berikan diskon sebesar 10%,
 *  sedangkan jika total pembelian melebihi/= 500 ribu maka diberikan diskon sebesar 5%. jika dibawah 500 ribu tidak diberikan diskon.
 *  tampilkan pesan berikut:
  "Anda membeli <jumlahBarang> <namabarang> dengan harga <hargaBarang> per-<namaBarang>, Total harga sebelum diskon = <totalHarga>"
 * lalu cek,jika dapat diskon maka tampilin "Selamat! Anda mendapatkan diskon sebesar <diskon>%. Harga setelah diskon = <hargaSetelahDiskon"
 * jika tidak dapat diskon, tampilin pesan "Anda belum dapat diskon, Harga total = <hargaSetelahDiskon>"
 */
let barang = "Handphone";
let harga = 200000;
let jumlah = 2;

let total = harga * jumlah;
if (total === 0) {
  console.log("harga tidak valid");
} else {
  let diskon = 0;
  let hargaSetelahDiskon = 0;
  if (total >= 1000000) {
    diskon = 0.1;
    hargaSetelahDiskon = total - total * diskon;
  } else if (total >= 500000) {
    diskon = 0.05;
    hargaSetelahDiskon = total - total * diskon;
  } else {
    hargaSetelahDiskon = total;
  }
  console.log(
    `Anda membeli ${jumlah} ${barang} dengan harga ${harga} per ${barang}. Total harga sebelum diskon adalah ${total}.`
  );

  if (diskon > 0) {
    console.log(
      `Selamat! Anda mendapatkan diskon sebesar ${diskon * 100}%. Harga setelah diskon adalah ${hargaSetelahDiskon}.`
    );
  } else {
    console.log(`Maaf, Anda tidak mendapatkan diskon. Harga total adalah ${hargaSetelahDiskon}.`);
  }
}

// LOOP
/** Soal 9 : for loop
 * buat program untuk mencari bilangan prima dari 1 - 25 menggunakan for loop
 */
// 1,2,3,4,5,6,7,8,9,
for (let i = 1; i <= 25; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

/** Soal 10 : for loop
 * buat looping untuk menghasilkan nilai rata-rata dari sebuah array bilangan bulat menggunakan function
 */
const dataBilanganBulat = [2, 4, 6, 8, 10];
let totalData = 0;
for (let i = 0; i < dataBilanganBulat.length; i++) {
  total += dataBilanganBulat[i];
}
const rataRataData = total / dataBilanganBulat.length;
console.log(rataRataData);

/** Soal 11 : for loop
 * Buat function untuk menghitung jumlah huruf kapital pada sebuah string
 */
let string1 = "Hello World";
let string2 = "Kiw, Gimana Kabarnya?";
let string3 = "JAVaScRipT";
function hitungKapital(string) {
  let kapitalCount = 0; //inisiasi nilai awal 0

  for (let i = 0; i < string.length; i++) {
    if (string[i] >= "A" && string[i] <= "Z") {
      kapitalCount++;
    }
  }

  return kapitalCount;
}

console.log(hitungKapital(string1));
console.log(hitungKapital(string2));

/** Soal 12 : for loop
 * buat fungsi untuk mencari nilai tertinggi dari sebuah array
 */
const nilaiTertinggi = [1, 34, 21, 54, 6567, 234, 65865, 98764, 23, 453];
function findMax(numbers) {
  let max = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }

  return max;
}

const largestNumber = findMax(nilaiTertinggi);
console.log("Nilai terbesar adalah:", largestNumber);

/** Soal 13 : forx
 * buat fungsi untuk membuat piramid(segitiga sama kaki) yang terbuat dari bintang "*"
 * dengan jumlah baris yang bisa ditentukan oleh user melalui parameter fungsi
 */

// Good luck
