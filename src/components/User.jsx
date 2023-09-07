/* eslint-disable react/prop-types */

import { useState } from "react";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";

const User = ({ user }) => {

  const { _id, id, first_name, gender, contact, age } = user;
  const [users,setUsers] = useState([]);


  const handleDeleteUser = (_id) => {

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {

        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        fetch(`http://localhost:5000/users/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              const remainingUsers = users.filter(user=> user._id !== _id);
              console.log(remainingUsers);
              setUsers(remainingUsers)
            }
          });
      }
    });
  };
  return (
    <tbody>
      <tr>
        <td>{id}</td>
        <td>{first_name}</td>
        <td>{gender}</td>
        <td>{age} </td>
        <td>{contact} </td>
        <td>
          <Button
            variant="outline-danger"
            onClick={() => {
              handleDeleteUser(_id);
            }}
          >
            Delete
          </Button>
        </td>
      </tr>
    </tbody>
  );
};

export default User;
