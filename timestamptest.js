//getting current timestamp
let ts = Date.now();

// timestamp in milliseconds
console.log(ts);

// timestamp in seconds
console.log(Math.floor(ts/1000));

//getting date and time from timestamp

let date_ob = new Date(ts);
let date = ("0" + date_ob.getDate()).slice(-2);
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
let year = date_ob.getFullYear();

// prints date & time in YYYY-MM-DD format
console.log(year + "-" + month + "-" + date);