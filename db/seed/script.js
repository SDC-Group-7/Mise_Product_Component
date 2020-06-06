import { check } from "k6";
import http from "k6/http";

let randomNum = Math.floor(Math.random() * 10000000) + 1;

export default function() {
  let res = http.get(`http://18.144.178.109:3002/product/${randomNum}`);
  check(res, {
    "is status 200": (r) => r.status === 200
  });
};

// export default function() {
//   let res = http.get(`http://localhost:3002/product/${randomNum}`);
//   check(res, {
//     "is status 200": (r) => r.status === 200
//   });
// };