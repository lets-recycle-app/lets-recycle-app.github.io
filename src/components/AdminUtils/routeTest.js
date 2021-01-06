import {isPostCodeValid} from "./routeUtils";
//import uuid from 'react-uuid';

const codeToCheck='EC1Y 1AA';

(async () => {
  let response = await isPostCodeValid(codeToCheck);
  console.log("Code: ",codeToCheck," Valid:", response);
})();