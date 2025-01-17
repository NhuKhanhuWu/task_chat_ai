/** @format */

function fakeApiPost(table, data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        // Get existing data from localStorage
        const existingData = JSON.parse(localStorage.getItem(table)) || [];

        // Add the new data
        existingData.push(data);

        // Save back to localStorage
        localStorage.setItem(table, JSON.stringify(existingData));

        resolve({ status: 201, message: "Data saved successfully", data });
      } catch (error) {
        reject({ status: 500, message: "Error saving data", error });
      }
    }, 1000); // Simulate network delay
  });
}

export default fakeApiPost;
