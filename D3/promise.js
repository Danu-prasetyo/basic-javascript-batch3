/** PROMISE : objek yang mewakili hasil dari operasi async */
function dataFromServer() {
  return new Promise(function (resolve, reject) {
    let data = [1, 2, 3, 4];
    // let data;
    if (data) {
      resolve(data);
    } else {
      reject("Data kaga ada");
    }
  });
}

console.log(dataFromServer());

dataFromServer()
  // .then untuk menangani hasil ketika Promise terpenuhi/data berhasil diambil
  //  fungsi result : function yang di eksekusi dengan nilai yang dikasih dari resolve ketika promise berhasil
  .then((result) => {
    console.log("get data : ", result);
  })
  .catch(function (err) {
    // .cacth buat nampilin error ketika promise gagal ngambil data
    console.log("Gagal : ", err);
  });

console.log("=== PARAREL PROMISE ==="); // manggil beberapa API/data skealigus
// data pertama
const getFirstData = () => {
  return new Promise((resolve, reject) => {
    resolve("data ke 1");
  });
};
// data kedua
function getSecondData() {
  return new Promise((resolve, reject) => {
    let data = "2";
    // let data; jika data dibuat undefined maka akan mempengaruhi promise yang lain
    if (data) {
      resolve(data);
    } else {
      reject("Data tidak ditemukan");
    }
  });
}
// ambil semua data sekaligus
function getAllData() {
  // Promise.all : untuk menjalankan pemanggilan beberapa api sekaligus
  return Promise.all([getFirstData(), getSecondData()]);
}

getAllData()
  .then((result) => {
    console.log("all data : ", result); //result jika semua data berhasil dipanggil
  })
  .catch((err) => {
    console.log("error data : ", err); // error kalo ada salah satu aja yang error(error satu error smua)
  });
