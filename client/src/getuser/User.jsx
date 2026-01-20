import React, { useEffect, useState } from "react";
import axios from "axios";
import "./user.css";

const User = () => {
  // users is the current state and setUsers is the updated state.
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/users");
        setUsers(response.data);
      } catch (error) {
        console.log("Error while fetching data", error);
      }
    };
    fetchData();
  }, []); // adding empty array to ensure it only runs once

  return (
    <div className="userTable">
      <button type="button" className="btn btn-primary">
        Add User <i className="fa-solid fa-user-plus"></i>
      </button>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">S.No.</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Address</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr>
                <td>{index+1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.address}</td>
                <td className="actionButtons">
                  <button type="button" class="btn btn-info">
                    <i class="fa-solid fa-pen-to-square"></i>
                  </button>
                  <button type="button" class="btn btn-outline-danger">
                    <i class="fa-solid fa-trash"></i>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default User;
