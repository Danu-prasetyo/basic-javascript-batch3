// CALLBACK : fungsi yang dikirim sebagai argumen/parameter ke fungsi lain
// atau fungsi yang manggil fungsi lain

// fungsi callback
function printLog(callback) {
  //   console.log("Callback ; ", callback);
  return callback;
}

// fungsi yang dipanggil fungsi callback
const penjumlahan = (a, b) => {
  return a + b;
};

function pengurangan(a, b) {
  return a - b;
}
printLog(penjumlahan(1, 2));
printLog(pengurangan(5, 2));
console.log(printLog);

function prosesData(a, data) {
  console.log("Memproses data...");
  a(data);
}

function tampilkanHasil(data) {
  console.log("Hasil data:", data);
}

// Panggil fungsi dengan callback
prosesData(tampilkanHasil, "Data berhasil diproses");
