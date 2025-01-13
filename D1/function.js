/** Function : blok kode javascript yang mengerjakan perintah/fungsi tertentu
 * rumus fungsi biasa : function namaFunction(parameter/non-params) { }
 * arrow function : const namaFunction = (params/no) => { }
 */

// contoh fungsi tanpa parameter
function printName() {
  console.log("Danu");
}

printName(); // <= fungsi dipanggil/dijalanin

// contoh fungsi dengan parameter
// parameter : sebutan variable yang didefinisikan didalam fungsi
/** fungsi biasanya punya return buat mengembalikan nilai dari hasil fungsi tersebut. */
function penjumlahan(a, b) {
  let jumlah = a + b;
  return jumlah;
}
console.log(penjumlahan(10, 2));

//  return juga bisa untuk memberhentikan eksekusi program lebih awal jika diperlukan
function cekAngkaPositif(angka) {
  if (angka < 0) {
    return "Angka negatif";
  }
  return "Angka positif";
}
console.log(cekAngkaPositif(5)); // angka positif
console.log(cekAngkaPositif(-2));

// Arrow function : bentuk lain dari deklarasi fungsi
const kaliDua = (a) => {
  return a * 2;
};
console.log(kaliDua(5));
