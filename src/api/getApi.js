/** @format */

function fakeApiGet(table, data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        // Get existing data from localStorage
        const existingData = JSON.parse(localStorage.getItem(table)) || [];

        resolve({ status: 200, message: "Get data successfully", data });
        return existingData;
      } catch (error) {
        reject({ status: 500, message: "Error getting data", error });
      }
    }, 1000); // Simulate network delay
  });
}

export default fakeApiGet;
