// dates & times
const now = new Date();

console.log(now);
console.log(typeof now);

// // Year, months, day, times
console.log("getFullYear: ", now.getFullYear());
console.log("getMonth: ", now.getMonth());
console.log("getDate: ", now.getDate());
console.log("getDay: ", now.getDay());
console.log("getHours: ", now.getHours());
console.log("getMinutes: ", now.getMinutes());
console.log("getSeconds: ", now.getSeconds());

// //Time stamps
console.log("timestamp: ", now.getTime());

// Date strings
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleString());

const before = new Date("February 1 2019 7:30:59");
const now = new Date();

console.log(now.getTime(), before.getTime());

const diff = now.getTime() - before.getTime();
console.log(diff);

const mins  = Math.round(diff / 1000 / 60);
const hours  = Math.round(mins / 60);
const days  = Math.round(hours / 24);
console.log(mins, hours, days);

console.log(`The blog was written ${days} ago`);

//convert timestamps into date objects
const timestamp = 16758938474990;
console.log(new Date(timestamp));