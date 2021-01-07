import {distanceBetween, isPostCodeValid} from "./routeUtils.js"
//import uuid from 'react-uuid';


const codeToCheck='EC1Y 1AA';
;
(async () => {
  let response = await isPostCodeValid(codeToCheck);
  console.log("Code: ",codeToCheck," Valid:", response);
})();


const al5=[51.825082830000000,-0.382007828000000];
const ch43=[53.390886988101400,-3.058385187172700]

console.log(distanceBetween(al5,ch43,true));