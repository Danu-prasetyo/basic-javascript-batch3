// modul untuk input ke termina;
const r = require("readline");

// buat interface/tampilan untuk input ke terminal
const inputNama = r.createInterface({
  input: process.stdin, // untuk ngambil input dari keyboard user
  output: process.stdout, // untuk nampilin output ke terminal
});

// panggil inputannya
// . question : untuk nampilin pertanyaan ke user
// inputNama.question("Masukkan nama: ", (nama) => {
//   console.log(`Halo ${nama}`); //nampiliin output
//   inputNama.close(); //menutup input
// });

// contoh 2 input
inputNama.question("Masukkan nama: ", (nama) => {
  inputNama.question("Masukkan umur: ", (umur) => {
    console.log(`Halo ${nama} yang berumur ${umur}`); //nampiliin output
    inputNama.close(); //menutup input
  });
});
