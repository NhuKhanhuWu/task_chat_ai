/** @format */

import { openDB } from "idb";

async function postApi(table, data) {
  return new Promise(async (resolve, reject) => {
    setTimeout(async () => {
      try {
        const db = await openDB("ChatAppDB", 1, {
          upgrade(db) {
            if (!db.objectStoreNames.contains(table)) {
              db.createObjectStore(table, {
                keyPath: "id",
                autoIncrement: true,
              });
            }
          },
        });

        const tx = db.transaction(table, "readwrite");
        const store = tx.store;
        const id = await store.add(data);
        await tx.done;

        resolve({
          status: 201,
          message: "Data saved successfully",
          data: { ...data, id },
        });
      } catch (error) {
        reject({ status: 500, message: "Error saving data", error });
      }
    }, 1000); // Simulate network delay
  });
}

export default postApi;
