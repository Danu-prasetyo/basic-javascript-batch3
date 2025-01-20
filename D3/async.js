/** Secara default bahasa pemrograman dieksekusi secara berurut(SYNCHRONOUS) dari a-z dari 1-100
 * ASYNCHRONOUS : teknik eksekusi kode secara pararel tanpa harus nunggu eksekusi program yang lain selesai
 * artinya fungsi yang dibuat menggunakan teknik asynchronous akan dijalankan bersamaan dengan kode lainnya
 */

// FUNGSI BIASA
function getDataFromServer() {
  // Promise : sebuah objek yang mewakili hasil dari operasi asynchronous
  return new Promise(function (resolve, reject) {
    let data;

    if (data) {
      resolve(data); // resolve : buat ngembaliin data yang berhasil ditangkep
    } else {
      reject("data kaga ada"); // reject ngembaliin error jika data gagal diambil
    }
  });
}

// Async
async function fetchData() {
  // blok tryCatch : error handling untuk menangani error jika data gagal diambil
  try {
    // await : kata kunci dalam async buat nunggu hasil dari sebuah Promise
    const getData = await getDataFromServer();
    console.log("Data yang diterima : ", getData);
  } catch (error) {
    // parameter error: error yang akan ditampilkan jika terjadi kegagalan
    console.log("terjadi kesalahan saat mengambil data :", error);
  }
}

fetchData();

// CONTOH LAIN : ngambil data dari FAKE api
async function fetchUserData(userId) {
  try {
    console.log("ceritanya lagi ngambil data dari api");

    // tampung data yang diambil di var. response
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    // http://localhost:8080/api/v1/users/${id}
    console.log("response,", response);

    // error handling menggunakan throw exception untuk ngecek apakah response sudah sesuai (kode 200 - 500+)
    // ngecek apakah statusnya ok/success kode 200
    if (response.status !== 200) {
      throw new Error(`HTTP error! status : ${response.status} ${response.statusText}`);
    }

    // konversi responsenya ke format JSON
    let user = await response.json();
    // tampilin datanya
    console.log("Data user by id : ", user);
  } catch (error) {
    // tampilin error
    console.log("Error : ", error);
    // throw error;
  }
}

fetchUserData(10);
