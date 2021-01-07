import React, {useState} from 'react';
import './AdminData.css';

import {defineDatabase,writeDatabase,fetchDatabase} from "../AdminUtils/dbUtils"

let cButton = {
  color: "#d1adf3",
  fontSize: "15px",
  background: "#524e4e",
  width: "70px",
  minHeight: "20px",
}

const AdminData = () => {

  const [loadDB, setLoadDB] = useState(false);
  const [count, setCount] = useState(0);

  if(!loadDB) {

    // load stored data from indexDB only once
    setLoadDB(true);

    (async () => {
      const db=await defineDatabase('letsRecycle',['sequences']);
      let prevCounter = await fetchDatabase(db, 'sequences','counter');

      if(prevCounter) {
        setCount(prevCounter);
      }
      else {
        await writeDatabase(db,'sequences','counter',count)
      }

    })();
  }

  const handleChange = (change) => {

    (async () => {

      let newCount = count + change;

      if(change === 0) {
        newCount = 0;
      }

      const db=await defineDatabase('letsRecycle',['sequences']);
      await writeDatabase(db,'sequences','counter',newCount);

      setCount(newCount);

    })();
  };

  return (
    <div>
      <span>
        <button style={cButton} onClick={() => handleChange(-1)}>-</button>
        <button style={cButton} onClick= {() => handleChange(1)}>+</button>
        <button style={cButton} onClick={() => handleChange(0)}>Reset</button>
        <h2> {count} </h2>
      </span>

    </div>
  );
}

export default AdminData;