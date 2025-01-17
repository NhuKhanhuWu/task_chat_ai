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

function Dashboard() {
  // const savedDraft = localStorage.getItem("savedDraft") //if there is any draft saved
  //   ? JSON.parse(localStorage.getItem("savedDraft")) //return draft in local storage
  //   : []; //else return empty arr
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
      <Button type="secondaryBtn" className="mb-8">
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
        <table className="table-auto border-collapse border border-gray-300 w-full text-left">
          <TableHead></TableHead>

          <tbody>
            {savedDraft.map((draft) => (
              <SaveDraft draft={draft} key={draft.id}></SaveDraft>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Dashboard;
