const fs = require("fs");

const carProducts = [
  {
    id: 1,
    name: "ESEMKA SUV 4x4 Hybrid",
    price: null,
    tag: ["Produk Terlaris"],
    variant: [
      {
        color: "black",
        transmission: "automatic",
        type: "hybrid",
        fuelType: "pertalite",
      },
      {
        color: "silver",
        transmission: "manual",
        type: "hybrid",
        fuelType: "pertalite",
      },
    ],
    isPreorder: true,
  },
  {
    id: 2,
    name: "BAGATATA Hyper Car V12",
    price: 370000000000,
    tag: ["Produk Terlaris", "Promo"],
    variant: [
      {
        color: "black",
        transmission: "automatic",
        type: "engine",
        fuelType: "premium",
      },
      {
        color: "white",
        transmission: "manual",
        type: "engine",
        fuelType: "premium",
      },
    ],
    isPreorder: false,
  },
  {
    id: 3,
    name: "FIRIRIRI F8 Hyper Car Limited Edition",
    price: 4400000000,
    tag: ["Produk Terbaru", "Promo"],
    variant: [
      {
        color: "red",
        transmission: "automatic",
        type: "engine",
        fuelType: "pertalite",
      },
      {
        color: "white",
        transmission: "manual",
        type: "engine",
        fuelType: "pertalite",
      },
    ],
    isPreorder: false,
  },
  {
    id: 4,
    name: "LEMBERGEMBER Revuelto Supercar V12 Plug-In Hybrid",
    price: 7000000000,
    tag: ["Produk Terbaru"],
    variant: [
      {
        color: "black",
        transmission: "automatic",
        type: "hybrid",
        fuelType: "pertamax turbo",
      },
      {
        color: "blue",
        transmission: "automatic",
        type: "hybrid",
        fuelType: "pertamax turbo",
      },
      {
        color: "green",
        transmission: "automatic",
        type: "hybrid",
        fuelType: "pertamax turbo",
      },
      {
        color: "red",
        transmission: "automatic",
        type: "hybrid",
        fuelType: "pertamax turbo",
      },
    ],
    isPreorder: false,
  },
  {
    id: 5,
    name: "TOYOTA Land Cruiser Prado 4x4",
    price: 250000000,
    tag: ["Produk Terlaris"],
    variant: [
      {
        color: "matte black",
        transmission: "automatic",
        type: "engine",
        fuelType: "solar",
      },
      {
        color: "army",
        transmission: "automatic",
        type: "engine",
        fuelType: "solar",
      },
      {
        color: "white",
        transmission: "automatic",
        type: "engine",
        fuelType: "solar",
      },
    ],
    isPreorder: false,
  },
  {
    id: 6,
    name: "Wuling YangWang U9 EV",
    price: null,
    tag: ["Produk Terbaru"],
    variant: [
      {
        color: "matte black",
        transmission: "automatic",
        type: "electric",
        fuelType: "battery",
      },
      {
        color: "navy",
        transmission: "automatic",
        type: "electric",
        fuelType: "battery",
      },
      {
        color: "white",
        transmission: "automatic",
        type: "electric",
        fuelType: "battery",
      },
    ],
    isPreorder: true,
  },
  {
    id: 7,
    name: "Beat Esp 110 Second",
    price: 7500000,
    tag: ["Produk Terlaris", "Bekas"],
    variant: [
      {
        color: "black",
        transmission: "automatic",
        type: "engine",
        fuelType: "pertamax turbo",
      },
      {
        color: "navy",
        transmission: "automatic",
        type: "engine",
        fuelType: "pertamax turbo",
      },
      {
        color: "white",
        transmission: "automatic",
        type: "engine",
        fuelType: "pertamax turbo",
      },
      {
        color: "red",
        transmission: "automatic",
        type: "engine",
        fuelType: "pertamax turbo",
      },
    ],
    isPreorder: false,
  },
];

// SOAL :
/** 1
 * Cari dan tampilkan data mobil dengan harga tertinggi dan terendah
 * reduce/math
 */
console.log("=====Soal 1====");
function getHighestCarPrice() {
  return carProducts.reduce((sorted, nextData) => {
    let price = Math.max(sorted.price, nextData.price);
    return price === sorted.price ? sorted : nextData;
  }, []);
}
function getLowestCarPrice() {
  return carProducts.reduce((sorted, nextData) => {
    let price = Math.min(sorted.price, nextData.price);
    return price === sorted.price ? sorted : nextData;
  }, []);
}
console.log("Data mobil termahal : ", getHighestCarPrice());
console.log("Data mobil termurah : ", getLowestCarPrice());

console.log("\n=====Soal 2====");
/** 2
 * filter dan tampilkan data mobil dengan tag "Promo"
 */
function getCarPromo() {
  return carProducts.filter((data) => {
    return data.tag.includes("Promo");
  });
}
console.log(getCarPromo());

console.log("\n=====Soal 3====");
/** 3
 * Urutkan dan tampilkan mobil dari harga tertinggi ke rendah, jika ada harga yang null,
 * tampilkan diurutan terakhir
 */
function sortCarsAsc(cars) {
  return cars.reduce((sorted, el) => {
    let index = 0;
    while (index < sorted.length && el.price < sorted[index].price) index++;
    sorted.splice(index, 0, el);
    return sorted;
  }, []);
}
let sortCarProducts = sortCarsAsc(carProducts);

console.log(sortCarProducts);

console.log("\n=====Soal 4====");
/** 4
 * Kelompokkan mobil-mobil berdasarkan tipe (engine, hybrid, electric) dan tampilkan data mobil
 * berdasarkan kelompoknya.
 * output : engine: [{dataMobil}], hybrid: [{dataMobil}], electric: [{dataMObil}]
 */
function typeEngineFilter(cars) {
  let data = {};
  let category = [];
  cars.forEach((car) => {
    let type = car.variant[0].type;
    //automatic categorizer
    if (!category.includes(type)) {
      category.push(type);
      data[type] = [];
    }
    data[type].push(car);
  });
  return data;
}
console.log(typeEngineFilter(carProducts));

/** 5
 * buat fungsi yang membaca data dari file JSON carProducts.json secara ASYNCHRONOUS,
 * lalu urutkan mobil berdasarkan harga dari tinggi ke rendah,
 * tampilin hasilnya ke file JSON yang sama(carProducts.json)
 */
console.log("\n=====Soal 5====");

fs.readFile("carProducts.json", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
    return err;
  }
  let dataRaw = JSON.parse(data);
  //menggunakan fungsi yang sama pada no 3(sortCarsAsc)
  fs.writeFile("./carProducts.json", JSON.stringify(sortCarsAsc(dataRaw), null, 2), "utf-8", (error) => {
    if (error) {
      console.log(error);
      return error;
    }
    console.log("(log soal 5)data berhasil disimpan di carProducts.json");
  });
});

console.log("\n=====Soal 6====");
/** 6
 * Buat fungsi untuk menambahkan data mobil baru dari carProducts.json kedalam file
 * "addNewCarProducts.json"
 */
function addCar(newCar) {
  let carsRaw = fs.readFileSync("./carProducts.json", "utf-8");
  let cars = JSON.parse(carsRaw);
  cars = [...cars, newCar];
  fs.writeFile("./addNewCarProducts.json", JSON.stringify(cars, null, 2), "utf-8", (error) => {
    if (error) {
      console.log(error);
      return error;
    }
    console.log("(log soal 6)data berhasil disimpan di addNewCarProducts.json");
  });
}
let newCar = {
  id: 8,
  name: "NewCar",
  price: 7500000,
  tag: ["Produk Terlaris", "Bekas"],
  variant: [
    {
      color: "black",
      transmission: "automatic",
      type: "engine",
      fuelType: "pertamax turbo",
    },
    {
      color: "navy",
      transmission: "automatic",
      type: "engine",
      fuelType: "pertamax turbo",
    },
  ],
  isPreorder: false,
};
addCar(newCar);

console.log("\n=====Soal 7====");
/** 7
 * buat fungsi ASYNCHRONOUS yang mengambil produk mobil dengan harga tertinggi dan terendah,
 * lalu hitung selisih harganya.
 */
async function selisihHarga(cars) {
  try {
    let getCars = cars;
    let maxPrice = getCars.reduce((sorted, nextData) => {
      let price = Math.max(sorted.price, nextData.price);
      return price === sorted.price ? sorted : nextData;
    }, []);
    let minPrice = getCars.reduce((sorted, nextData) => {
      let price = Math.min(sorted.price, nextData.price);
      return price === sorted.price ? sorted : nextData;
    }, []);
    console.log("Selilish : ", maxPrice.price - minPrice.price);
  } catch (error) {
    console.log(error);
  }
}
selisihHarga(carProducts);
console.log("\n=====Soal 8====");
/** 8
 * buat fungsi yang mencari mobil dengan varian warna terbanyak.
 */
function cariMobilWarnaBanyak(cars) {
  //get car with most color
  let totalMax = Math.max(...cars.map((data) => data.variant.length));
  return cars.filter((car) => car.variant.length === totalMax);
}
console.log(cariMobilWarnaBanyak(carProducts));
console.log("\n=====Soal 9====");
/** 9
 * buat fungsi untuk mencari mobil yang tidak preorder
 */
function cariMobilTidakPreorder(cars) {
  return cars.filter((car) => !car.isPreorder);
}
console.log(cariMobilTidakPreorder(carProducts));
console.log("\n=====Soal 10====");
/** 10
 * buat looping untuk menampilkan SEGITIGA SAMA KAKI
 */
function segitigaSamaKaki(length) {
  let result = "";
  for (let i = 1; i <= length; i++) {
    for (let j = 0; j < length - i; j++) result += " ";

    // i elements
    for (let j = 1; j <= i; j++) result += "* ";
    result += "\n";
  }
  return result;
}

console.log(segitigaSamaKaki(5));
/** BONUS FREE 1 SOAL */
/** 11
 * Buat CRUD(Create, Read, Update, Delete) data dari data employee yang sebelumnya dipelajarin
 * HANYA GUNAKAN ARRAY METHOD!
 */
const employee = [
  {
    id: 1,
    nama: "Danu",
    age: 25,
    jobDesk: [{ title: "frontend", salary: 12000000 }],
    hobby: ["membaca", "menulis"],
  },
  {
    id: 2,
    nama: "Dani",
    age: 26,
    jobDesk: [{ title: "frontend", salary: 2000000 }],
    hobby: ["membaca", "menulis"],
  },
  {
    id: 3,
    nama: "Dina",
    age: 27,
    jobDesk: [{ title: "backend", salary: 4000000 }],
    hobby: ["menulis"],
  },
  {
    id: 4,
    nama: "Dani",
    age: 26,
    jobDesk: [{ title: "backend", salary: 4000000 }],
    hobby: ["menulis"],
  },
  {
    id: 5,
    nama: "Deni",
    age: 26,
    jobDesk: [{ title: "backend", salary: 3000000 }],
    hobby: ["membaca"],
  },
  {
    id: 6,
    nama: "Dian",
    age: 27,
    jobDesk: [{ title: "frontend", salary: 180000000 }],
    hobby: ["membaca"],
  },
];
//create
function createEmployee(data) {
  employee.push(data);
  console.log(employee);
}
createEmployee({
  id: 99,
  nama: "nanung",
  age: 27,
  jobDesk: [{ title: "frontend", salary: 180000000 }],
  hobby: ["membaca"],
});
//read
function readEmployee(index) {
  for (let i = 0; i < employee.length; i++) {
    if (index === "all") {
      console.log("Membaca employee ke", i + 1, " : ", employee[i]);
    } else if (index - 1 === i) {
      console.log("Membaca employee ke", index, " : ", employee[i]);
      break;
    }
  }
}
readEmployee(1);

//Update
function updateEmployee(data, index) {
  for (let i = 0; i < employee.length; i++) {
    if (index - 1 === i) {
      employee[i] = data;
      console.log("Update employee ke", index, " : ", employee[i]);
    }
  }
}
updateEmployee(
  {
    id: 1,
    nama: "nanang",
    age: 27,
    jobDesk: [{ title: "frontend", salary: 180000000 }],
    hobby: ["membaca"],
  },
  1
);

//delete
function deleteEmployee(index) {
  console.log("Menghapus employee ke ", index, " : ", employee.splice(index - 1, 1));
}
deleteEmployee(1);
