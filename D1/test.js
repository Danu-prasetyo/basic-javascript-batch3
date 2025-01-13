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

/** Soal 5 : buat logic if yang menentukan status kelulusan orang berdasarkan nilai yang didapat
 * jika nilai lebih dari atau sama dengan 80, maka status nya "Anda lulus dengan sangat baik",
 * jika nilai lebih dari atau sama dengan 70, DAN kurang dari 80, maka statusnya "Lulus dengan baik",
 * jika nilai lebih dari atau sama dengan 60, DAN kurang dari 70, maka statusnya "Lulus"
 * jika nilai kurang dari 60, maka statusnya "tidak lulus"
 */

/** soal 6 : nested if
buat logic untuk nentuin nilai rata-rata siswa dengan menghitung nilai rata-rata dari 3 MAPEL(MTK,fisika, kimia)
jika nilai yang dimasukkan tidak valid(diluar rentang 0-100), maka statusnya "Nilai tidak valid"
jika nilai rata-rata lebih besar atau sama dengan 80, maka statusnya "Selamat anda lulus dengan baik"
jika nilai rata-rata lebih kecil dari 80 dan lebih besar atau sama dengan  60, maka statusnya "Anda lulus"
jika nilai rata-rata  lebih kecil dari 60, maka statusnya "Anda tidak lulus"
 */

/** Soal 7 : buat logic untuk menentukan jenis bilangan(positif, negatif, atau nol)
 * dari nilai yang dimasukkan oleh user menggunakan ternary operator
 * output yang diharapkan : ("Angka 7 adalah bilangan positif")
 */

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
let barang = "sabun";
let harga = 2000;
let jumlah = 2;

// LOOP
/** Soal 9 : for loop
 * buat program untuk mencari bilangan prima dari 1 - 25 menggunakan for loop
 */

/** Soal 10 : for loop
 * buat looping untuk menghasilkan nilai rata-rata dari sebuah array bilangan bulat menggunakan function
 */
const dataBilanganBulat = [2, 4, 6, 8, 10];

/** Soal 11 : for loop
 * Buat function untuk menghitung jumlah huruf kapital pada sebuah string
 */
let string1 = "Hello World";
let string2 = "Kiw, Gimana Kabarnya?";
let string3 = "JAVaScRipT";

/** Soal 12 : for loop
 * buat fungsi untuk mencari nilai tertinggi dari sebuah array
 */
const nilaiTertinggi = [1, 34, 21, 54, 6567, 234, 65865, 98764, 23, 453];

/** Soal 13 : for
 * buat fungsi untuk membuat piramid(segitiga sama kaki) yang terbuat dari bintang "*"
 * dengan jumlah baris yang bisa ditentukan oleh user melalui parameter fungsi
 */

// Good luck
