/** @format */

import { openDB } from "idb";

async function getApi(table) {
  return new Promise(async (resolve, reject) => {
    setTimeout(async () => {
      try {
        const db = await openDB("ChatAppDB", 1); // open db
        const drafts = db.getAll(table); // get draft

        resolve(drafts);
      } catch (err) {
        reject({ status: 404, message: "Error fetching data", err });
      }
    }, 1000); // Simulate network delay
  });
}

export default getApi;
