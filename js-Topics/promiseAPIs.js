// console.log("Promise APIs");

// Promise.all[(p1, p2, p3)];
// it will return resolved array only if all the promises are resolved.
// it will return the error if any of them fails. (error of the one which failed)
//o/p [r1, r2, r3]

// Promise.allSettled([p1, p2, p3]);
// it will wait for all promise to settle, then return the array of resolved/reject
//o/p [{status:"fullfilled", value: r1}, {status:"rejected", reason error}, {status:"fullfilled", value: r3s}]

//Promise.race([p1, p2, p3]);
//it will return the value of first setteled promise (either resolved/reject)
//o/p result

//Promise.any([p1, p2, p3]); //seeking for first success
// it will return the value of first resolved promise
//o/p result
// it will return aggregate error if all fails 
// .catch(err=>{
//     console.log(err.errors) //[e1, e2, e3]
// })
