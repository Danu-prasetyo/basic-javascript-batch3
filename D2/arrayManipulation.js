// penjelasan array secara detail

let myArray = [1, 2, 3, 4, 5];

// cara akses data dalam array berdasarkan indeksnya
let nilaiPertama = myArray[0];
let nilaiKedua = myArray[1];
// dst

console.log("nilai pertama array : ", nilaiPertama);
console.log(`nilai kedua array : ${nilaiKedua}`);

//  ngubah nilai array pada indeks tertentu
myArray[2] = 6;
console.log(`Array setelah diubah : ${myArray}`);

// ARRAY METHOD : metode yang digunakan untuk memanipulasi array

// .push : method array untuk menambahkan data ke baris akhir array
myArray.push(7); // nambahin nilai 7 ke baris akhir
console.log("push : ", myArray);

//  .shift : method array untuk menghapus data pertama dari array
myArray.shift();
console.log("shift : ", myArray);

//  .unshift : method array untuk menambahkan data ke awal array
myArray.unshift(1, 2, 3);
console.log("unshift : ", myArray);

// .pop : method array untuk menghapus data terakhir dari array
let nilaiTerakhir = myArray.pop();
console.log("Pop : ", nilaiTerakhir);
console.log("Popped array : ", myArray);

// .splice method array untuk menyisipkan data kedalam array
myArray.splice(2, 0, 3);
console.log("Splice : ", myArray);

// .slice : method array untuk motong(cut) data dalam array
let slice = myArray.slice(3, 5);
console.log("Slice : ", slice);

// .sort : method arryay untuk mengurutkan data(ascending) dalam array
myArray.sort();
console.log("sort : ", myArray);

// .reverse : method array untuk mengurutkan data(descending) dalam array
myArray.reverse();
console.log("reverse : ", myArray);

// .indexOf : method array untuk nyari INDEX data dalam array
let nilaiCari = 3;
let indeksNilai = myArray.indexOf(nilaiCari);

if (indeksNilai === nilaiCari) {
  console.log(`Nilai ${nilaiCari} ditemukan pada indeks: ${indeksNilai}`);
} else {
  console.log(`Nilai ${nilaiCari} tidak ditemukan dalam array`);
}

// .concat : method array untuk ngegabungin 2 array
let arrayLain = [7, 8, 9];
let gabungArray = myArray.concat(arrayLain);
console.log("concat : ", gabungArray);

//spread operatpr : nyalin data array ke data baru
let spread = [...myArray, ...arrayLain];
console.log("spread : ", spread);

// .forEach : method array untuk melakukan iterasi/perulangan pada array
myArray.forEach((i) => {
  console.log("foreach :", i);
});

//  .toString : method array untuk ngubah data array menjadi string
console.log("toString : ", myArray.toString());

// .toLocaleString : method array untuk ngubah array menjadi string dengan format lokal
const price = [1000, 2000, 3000];
const arrayToLocaleString = price.toLocaleString({
  style: "currency",
  currency: "IDR",
});
console.log("tolocaleStrnige : ", arrayToLocaleString);

// .reduce : method array untuk mengakumulasi nilai array ke dalam satu hasil akhir(mentotalkan data array)
const sum = myArray.reduce((accumulator, currentValue) => {
  console.log(accumulator);
  console.log(currentValue);

  return accumulator + currentValue;
}, 0);
console.log("reduce : ", sum);

const dataNilai = [{ sekolah: "sekolah A", nilai: [40, 50, 60, 70, 90, 50] }];
console.log("===contoh lain reduce===");

console.log(
  dataNilai[0].nilai.reduce((prevVlue, nextValue) => {
    // method array untuk mengakumulasi nilai array ke dalam satu hasil akhir(mentotalkan data array)
    // prevValue = menyimpan nilai sebelumnya yang akan dibandingkan dengan nilai setelahnya
    // nextValue = nilai setelahnya yang akan dibandingkan dengan nilai sebelumnya
    console.log("1", prevVlue);
    console.log("2", nextValue);
    // rumus mentotalkan nilai akhir sebelumnya dengan nilai setelahnya
    return prevVlue + nextValue;
  })
);

// MANIPULASI DATA ARRAY OF OBJECT
const dataSiswa = [
  {
    id: 1,
    name: "Danu",
    age: 25,
    hobby: ["Membaca", "Menulis"],
  },
  {
    id: 2,
    name: "Dani",
    age: 26,
    hobby: ["Membaca", "Menggambar"],
  },
  {
    id: 3,
    name: "Dina",
    age: 27,
    hobby: ["Memasak", "Menangis"],
  },
  {
    id: 4,
    name: "Deni",
    age: 28,
    hobby: ["Gaming", "Menyanyi"],
  },
  {
    id: 5,
    name: "Doni",
    age: 25,
    hobby: ["Gaming", "Membaca"],
  },
];

// contoh lain forEach
const forEachDataSiswa = dataSiswa.forEach((data) => {
  console.log("forEach dataSiswa : ", data.name, data.age <= 26);
});

// .map : method array untuk ngubah setiap elemen array menjadi nilai baru atau mapping data tertentu
const getNameFromDataSiswa = dataSiswa.map((item) => {
  return { nama: item.name, umur: item.age };
});
console.log("Mapping data nama : ", getNameFromDataSiswa);

// .filter : method array untuk memfilter data array berdasarkan kondisi tertentu
const filterDataSiswa = dataSiswa.filter((item) => {
  return item.hobby.find((data) => data === "Membaca");
});
console.log("filter : ", filterDataSiswa);

// .find : method array untuk mencari data dalam array
const findDataSiswa = dataSiswa.find((data) => {
  return data.name === "Dina";
});
console.log("find : ", findDataSiswa);

// .length : method array buat menghitung panjang/jumlah data dalam array
let lengthDataSiswa = dataSiswa.length;
console.log("length : ", lengthDataSiswa);

// .every : method array untuk ngecek apakah semua elemen dalam array memenuhi suatu kriteria
const everyDataSiswa = dataSiswa.every((item) => {
  return item.age === 25;
});
console.log("every : ", everyDataSiswa);
