import React from 'react';
import './AdminData.css';
import {defineDatabase,writeDatabase,fetchDatabase} from "../AdminUtils/dbUtils";

(async () => {
  const db=await defineDatabase('letsRecycle',['postCodes','routes']);

  let countValue = await fetchDatabase(db, 'routes','counter');

  if(!countValue) {
    countValue=1;
  }
  else {
    countValue +=1;
  }
  await writeDatabase(db,'routes','counter',countValue)

})();

const AdminData = () => {

  return (
      <div>
        <p>Route Data</p>
      </div>
    );
}

export default AdminData;