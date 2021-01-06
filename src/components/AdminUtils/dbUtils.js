import {openDB} from 'idb';

export const defineDatabase = async (dbName, storeList) => {

  const version = 1;

  return await openDB(dbName, version, {
    upgrade(db) {
      storeList.forEach(storeName => {
        if (!db.objectStoreNames.contains(storeName)) {
          db.createObjectStore(storeName);
        }
      });
    }
  });
}

export const writeDatabase = async (db, storeName, key, value) => {

  const tx = db.transaction(storeName, 'readwrite');
  const store = await tx.objectStore(storeName);
  await store.put(value, key);
  await tx.done
}

export const fetchDatabase = async (db, storeName, key) => {
  const tx = db.transaction(storeName, 'readwrite');
  const store = await tx.objectStore(storeName);
  const value = await store.get(key);
  await tx.done
  return value;
}