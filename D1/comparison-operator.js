// Equal(Sama dengan)==
let equal = 100;
console.log("=== Equal Operator ===");
console.log(equal == 100); // true
console.log(equal == 90); // false

// Not Equal(Tidak sama dengan) !=
let sifat = "rajin";
console.log("=== Not Eqqual Operator ===");
console.log(sifat != "malas"); //true
console.log(sifat != "Bader"); //true

// Strict equal(persamaan ketat yang juga mengecek tiep data nilainya)
let strictEqual = 10;
console.log("=== strict equal operator ===");
console.log(strictEqual == "10"); // true
console.log(strictEqual === "10"); // false
console.log(strictEqual === 10); // true

// Strict not equal
let strictNotEqual = 10;
console.log("=== strict not equal operator ===");
console.log(strictNotEqual != "10"); // false
console.log(strictNotEqual !== "10"); // true
console.log(strictNotEqual !== 10); // false

// kurang/lebih dari
let angka = 17;
console.log("=== kurang/lebih dari operator");
console.log(angka < 20); //true
console.log(angka > 17); //false
console.log(angka >= 17); // true
console.log(angka <= 17); // true

//  Operator kondisional OR || (menghasilkan nilai true jika ada salah satu operasi true)
console.log("=== OR ===");
console.log(true || true); //true
console.log(false || true); //true
console.log(true || false); //true
console.log(false || false); //false
console.log(false || false || false || true); //true

//  Operator kondisional AND && (menghasilkan nilai false jika ada salah satu operasi false)
console.log("=== AND ===");
console.log(true && true); //true
console.log(false && true); //false
console.log(true && false); //false
console.log(false && false); //false
console.log(true && true && false && true); //false

let firstName = null;
let lastName = "wati";
let age = 20;
let noJob = true;
let fullName = age == 20 && noJob;
console.log(fullName);

let user = {
  name: "danu",
  age: 25,
  address: {
    city: "Tangsel",
    country: null,
  },
};

let country = user && user.address && user.address.country;
console.log("country : ", country);

// fungsi untuk mencari negara user
function findUserCountry(user) {
  let country = user && user.address && user.address.country;
  return country || "Data tidak ditemukan";
}
console.log(findUserCountry(user));
