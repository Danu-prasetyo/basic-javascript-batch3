console.log(" === first bang === "); //ini kode yang di eksekusi pertama

function printLog() {
  // ini fungsi yang harusnya dijalankan kedua
  console.log("=== kedua ===");
}
setTimeout(printLog, 3000); // tapi fungsi ini sengaja di tunda eksekusinya selama 3 detik

console.log("===ketiga==="); // ini ekseskusi ketiga

setTimeout(myFunction, 3000); //nunda eksekusi fungsi selama 3 detik

function myFunction() {
  console.log("I love You !!");
}
