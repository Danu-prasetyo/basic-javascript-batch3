// data objek
const person = {
  nama: "Danu",
  umur: 30,
  pekerjaan: " fullstuck developer",
  alamat: {
    jalan: "Jl. Raya no. 123",
    kota: "Tangerang Selatan",
    negara: "Indonesia",
  },
  hobi: ["Olahraga", "Musik", "Membaca"],
};

// Cara ngakses nilai dalam objek menggunakan titik .
console.log("nama : ", person.nama);
console.log("kota asal : ", person.alamat.kota);

// cara ngakses data array dalam objek
console.log("hobi : ", person.hobi[1]);
person.hobi.push("Gambar");

// cara ngubah nilai dalam objek
person.umur = 25;
console.log(person);

// cara nambahin field baru dalam objek
person.isMarried = false;
console.log(person);

// cara ngehapus field dalam objek
delete person.alamat.jalan;
console.log(person);

// cara akses data objek menggunakan destructuring assignment
const { nama, umur, pekerjaan } = person;
console.log(nama);
console.log(umur);
console.log(pekerjaan);
