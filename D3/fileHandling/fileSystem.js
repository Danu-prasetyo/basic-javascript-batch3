/** di nodejs, ada modul2 yang berfungsi untuk file handling
 * salah satunya modul fs(file system) : untuk membuat/baca file
 */

// import modul nya
const fs = require("fs");

// CREATE : menulis file menggunakan .writeFile("filePath", "isi file", encoding, return)
fs.writeFile("./textFile.txt", "Hallo, aku adalah seorang junior programmer", "utf-8", (error) => {
  if (error) {
    console.log(error);
    return error;
  }
  console.log("File berhasil disimpan");
});

//  .appendFile("filePath", "isi file", encoding, return)
let dataDariAPI = " yang ganteng \ndan aku sedang mencari pekerjaan";
fs.appendFile("./textFile.txt", dataDariAPI, "utf-8", (error) => {
  if (error) {
    console.log(error);
    return error;
  }
  console.log("File berhasil diedit");
});

// .readFile("filePath", encoding, return) : buat ngebaca file
fs.readFile("./textFile.txt", "utf-8", (error, data) => {
  if (error) {
    console.log(error);
    return error;
  }
  console.log("data yang dibaca : ", data);
});

// .unlink("filePath", return) : buat ngehapus file
fs.unlink("./delete.txt", (error) => {
  if (error) {
    console.log(error);
    return error;
  }
  console.log("data dihapus");
});
