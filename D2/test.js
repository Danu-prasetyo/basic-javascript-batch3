// ARRAY MANIPULATION
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
    jobDesk: [{ title: "backend", salary: 3000000 }],
    hobby: ["membaca"],
  },
  {
    id: 4,
    nama: "Deni",
    age: 26,
    jobDesk: [{ title: "backend", salary: 4000000 }],
    hobby: ["membaca"],
  },
  {
    id: 5,
    nama: "Dian",
    age: 27,
    jobDesk: [{ title: "frontend", salary: 58000000 }],
    hobby: ["membaca"],
  },
];

/** Cari karyawan yang punya hobi "menulis" dan usianya diatas 25 tahun pake .find dan .includes */
const findMenulis = employee.find((data) => data.hobby.includes("menulis") && data.age > 25);
console.log(findMenulis);

/** Tampilkan data karyawan yang bekerja sebagai "backend" dan punya gaji lebih dari 3jt .filter dan .some */
const backendSalary = employee.filter(
  (emp) => emp.jobDesk.some((job) => job.title === "backend" && job.salary > 3000000) // true/false
);
console.log(
  "gaji backend: ",
  backendSalary.map((sal) => {
    let salary = sal.jobDesk[0].salary;
    let name = sal.nama;
    return { gaji: salary, nama: name };
  })
);

/** tampilkan nama karyawan yang punya satu hobby pake .filter, .map, .length */
const satuHobi = employee.filter((item) => item.hobby.length === 1).map((data) => data.nama);
console.log("karyawan dengan 1 hobby: ", satuHobi);

/** cari nama karyawan yang posisinya "frontend" dengan gaji tertinggi, pake .filter, .some, .reduce, .find */
// employee.filter(blabla.some === FE).reduce((max, min) => min.find( blablba.salary) logic bandingin gaji )
const findHighestFrontend = employee
  .filter((item) => item.jobDesk.some((job) => job.title === "frontend"))
  .reduce((highest, current) => {
    const currentSalary = current.jobDesk.find((job) => job.title === "frontend").salary;
    const highestSalary = highest.jobDesk.find((job) => job.title === "frontend").salary;

    console.log(highestSalary);
    console.log(currentSalary);

    return currentSalary > highestSalary ? current : highest;
  });
console.log("frontend gaji tertinggi: ", findHighestFrontend.nama);

// fungsi
const carGajiTertinggi = (employee) => {
  return employee
    .filter((item) => item.jobDesk.some((job) => job.title === "frontend"))
    .reduce((highest, current) => {
      const currentSalary = current.jobDesk.find((job) => job.title === "frontend").salary;
      const highestSalary = highest.jobDesk.find((job) => job.title === "frontend").salary;

      console.log(highestSalary);
      console.log(currentSalary);

      return currentSalary > highestSalary ? current : highest;
    });
};
console.log(carGajiTertinggi(employee));

// MATH
/** cari nilai tertinggi dari 3 siswa menggunakan math object */
let siswa1 = 49;
let siswa2 = 70;
let siswa3 = 60;
console.log("Nilai tertinggi:", Math.max(siswa1, siswa2, siswa3));

// car selisih gaji tertinggi dan terendah dari data employee frontend menggunakan math filter , math method, spread operator, map, floor
// let feDev = Math.max(...employee.mapi(...sdkjbsdkfj jobDesk[0].salary))
const frontendEmployees = employee.filter((employee) => employee.jobDesk[0].title === "frontend");
const maxSalary = Math.max(...frontendEmployees.map((employee) => employee.jobDesk[0].salary));
const minSalary = Math.min(...frontendEmployees.map((employee) => employee.jobDesk[0].salary));
const selisihGaji = maxSalary - minSalary;

console.log("selisih gaji : ", selisihGaji);

//KOMBINASI

/** hitung total gaji semua karyawan setelah dipotong pahaj 12% pake reduce dan math.floor */
const totalGaji = employee.reduce((sum, emp) => sum + emp.jobDesk[0].salary, 0);
const totalSetelahPajak = totalGaji * 0.12;
console.log("Total gaji setelah pajak : ", Math.floor(totalSetelahPajak));

/** tampilkan semua nama karyawan yang memiliki hobi terbanyak pake map, math.max, filter & length.
 * output: [danudani]
 * biar rapih pake join(", ") => [danu, dani] */

const jumlahHobi = employee.map((emp) => emp.hobby.length);
const maxHobi = Math.max(...jumlahHobi);
const karyawanTerbanyakHobi = employee.filter((emp) => emp.hobby.length === maxHobi);

const result = karyawanTerbanyakHobi.map((emp) => emp.nama).join(", ");
console.log("Karyawan dengan hobi terbanyak : ", result);
