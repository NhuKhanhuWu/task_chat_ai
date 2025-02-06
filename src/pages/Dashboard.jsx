/** @format */

import { useLoad } from "../context/LoadContext";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import getApi from "../api/getApi";
import Button from "../component/Button/Button";
import SaveDraft from "../component/SaveDraft/SavedDraft";
import Loadder from "../component/Loadder/Loadder.jsx";

function TableHead() {
  return (
    <thead className="bg-gray-200">
      <tr>
        <th className="border border-gray-300 px-4 py-2">ID</th>
        <th className="border border-gray-300 px-4 py-2">Title</th>
        <th className="border border-gray-300 px-4 py-2">Description</th>
        <th className="border border-gray-300 px-4 py-2">User title</th>
        <th className="border border-gray-300 px-4 py-2">User description</th>
        <th className="border border-gray-300 px-4 py-2">Date</th>
      </tr>
    </thead>
  );
}

function SortBtn({ setSavedDraft }) {
  // Function to parse 'dd/MM/yyyy HH:mm' to a Date object
  function parseDate(dateStr) {
    const [day, month, year, hours, minutes] = dateStr.split(/[/\s:]/);
    return new Date(`${year}-${month}-${day}T${hours}:${minutes}:00`);
  }

  function handleSort(order) {
    setSavedDraft((prevDrafts) =>
      [...prevDrafts].sort((a, b) =>
        order === "oldest"
          ? parseDate(a.saveDate) - parseDate(b.saveDate)
          : parseDate(b.saveDate) - parseDate(a.saveDate)
      )
    );
  }

  return (
    <div>
      <span className="mr-4 text-xl font-bold">Sort by</span>
      <select
        onChange={(e) => handleSort(e.target.value)}
        className="p-4 my-12 border border-gray-500 rounded-none w-32">
        <option value="oldest">Oldest</option>
        <option value="latest">Latest</option>
      </select>
    </div>
  );
}

function Dashboard() {
  const { isLoading, setIsLoading } = useLoad();
  const [savedDraft, setSavedDraft] = useState([]);

  useEffect(function () {
    async function getDraft() {
      try {
        // start loading
        setIsLoading(true);

        // get drafts
        const response = await getApi("savedDraft");
        setSavedDraft(response);
      } catch (err) {
        console.error("Error fetching draft:", err);
      } finally {
        setIsLoading(false);
      }
    }

    getDraft();
  }, []);

  return (
    <div className="mt-6 ml-6">
      {/* return to chat btn */}
      <Button type="secondaryBtn" className="mb-8 sticky top-10">
        <span className="material-symbols-outlined">forum</span>{" "}
        <Link to="/">Chat Task</Link>
      </Button>

      {/* saved draft list */}
      <h1 className="text-center text-4xl font-bold">Saved Draft</h1>

      {isLoading ? (
        <>
          <p>Loading</p>
          <Loadder></Loadder>
        </>
      ) : (
        <>
          <SortBtn setSavedDraft={setSavedDraft}></SortBtn>

          <table className="table-auto border-collapse border border-gray-300 w-full text-left">
            <TableHead></TableHead>

            <tbody>
              {savedDraft.map((draft) => (
                <SaveDraft draft={draft} key={draft.id}></SaveDraft>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}

export default Dashboard;
