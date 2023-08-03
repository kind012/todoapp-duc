"use client";
import React, { useEffect, useState } from "react";
import Task from "../app/Task";
import Preloader from "./Preload";

const Todolist = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  });
  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>Name</th>
                <th>Priority</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <Task />
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default Todolist;