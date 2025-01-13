//  Variabel : tempat menyimpan data

//  let
let nama = "Danu";

const umur = 20;

// tipe data : jenis data yang bisa disimpan dalam variable
// tipe data primitif : tipe data yang nilainya tunggal
// string = data yang dibungkus kutip(khusus huruf)
let namaKaryawan = "Danu";
console.log("nama karyawan : ", namaKaryawan);

// int : tipe data khusus angka
const salary = 300000000;
console.log("gaji : ", salary);

// boolean : tipe datayang mengandung nilai kebenaran true or false
let isMarried = false;
console.log("apakah sudah menikah : ", isMarried);

let isTeacher = true;
console.log("apakah seorang guru : ", isTeacher);

// null : tipe data yang nilainya kosong
const hisChild = null;
console.log("anak : ", hisChild);

// undefined : tipe data yang tidak di definisikan
let wife;
wife = "Dina";
console.log("istri : ", wife);

// variable let datanya bisa diubah sedangkan variable const datanya tetap(gabisa diubah)
// aturan penulisan variable wajib menggunakan camelCase(kata pertama huruf depannya kecil, kata kedua kapital)

// tipe data non primitif : tipe data yang nilainya kompleks

// object : tipe data kompleks yang nyimpen kumpulan data(himpunan) dengan nilai dan tipe data yang berbeda
let karyawan = {
  nama: "Danu",
  salary: 1234567890,
  job: "Fullstack",
};
console.log("data karyawan", karyawan.job); // gunakan .(titik) untuk ngakses data didalam objek

//  array : tipe data uang nyimpen banyak data. indeks(urutan dalam array) dimulai dari 0
let daftarKaryawan = ["Danu", 120, "Deni", true];
console.log("list karyawan : ", daftarKaryawan[0]); // gunakan indeks untuk ngambil data dalam array

// array of object
let dataKaryawan = [
  { nama: "Deni", umur: 20 },
  { nama: "Dina", umur: 30 },
];
console.log("list karyawan : ", dataKaryawan);
console.log(dataKaryawan[0].nama);
