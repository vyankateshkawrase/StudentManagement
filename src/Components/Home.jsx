/* eslint-disable no-unused-vars */
import { Typography, Button, Alert } from "@material-tailwind/react"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import  axios  from "axios";

const Home = () => {

    const [data,setdata] = useState([]);
    const [showSuccess, setShowSuccess] = useState(false);

    useEffect(() => {
        axios
        .get(`http://localhost:3000/Students`)
        .then((res) => setdata(res.data))
        .catch(err => console.log(err));
    },[]);

    const handleDelete = (id) => {
        axios
        .delete(`http://localhost:3000/Students/${id}`)
        .then(() => {
          setdata((prevData) => prevData.filter((stud) => stud.id !== id));
          setShowSuccess(true); 
        setTimeout(() => {
          setShowSuccess(false);
        }, 2000);
        })
        .catch((err) => console.log(err));
    }
       

    return(
        <div className="flex flex-col items-center bg-gradient-to-b from-light-blue-50 to-light-blue-100 max-h-screen py-10">
      <Typography variant="h4" color="blue-gray" className="mb-8 font-bold">
        List of Students
      </Typography>

      {/* User List Container */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-lg p-6">
        {/* Add User Button */}
        {showSuccess && (
          <Alert color="red" className="mb-6">
            Student delete successfully!
          </Alert>
        )}
        <div className="flex justify-end mb-4">
          <Button color="blue" variant="gradient">
            <Link to="/create" className="flex items-center gap-2">
              Add Student
            </Link>
          </Button>
        </div>

        {/* User Table */}
        <table className="max-w-full table-auto border-collapse text-center">
          <thead>
            <tr className="bg-blue-gray-50 text-blue-gray-700 uppercase text-sm">
              <th className="px-4 py-3 border-b">ID</th>
              <th className="px-4 py-3 border-b">Name</th>
              <th className="px-4 py-3 border-b">Phone</th>
              <th className="px-4 py-3 border-b">Age</th>
              <th className="px-4 py-3 border-b">Date Of Birth</th>
              <th className="px-4 py-3 border-b">Country</th>
              <th className="px-4 py-3 border-b">State</th>
              <th className="px-4 py-3 border-b">City</th>
              <th className="px-4 py-3 border-b">Role</th>
              <th className="px-4 py-3 border-b">Company</th>
              <th className="px-4 py-3 border-b">Date of Join</th>
              <th className="px-4 py-3 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d, index) => (
              <tr
                key={index}
                className="bg-white odd:bg-gray-50 border-b hover:bg-gray-100"
              >
                <td className="px-4 py-3">{index+1}</td>
                <td className="px-4 py-3">{d.name}</td>
                <td className="px-4 py-3">{d.phone}</td>
                <td className="px-4 py-3">{d.age}</td>
                <td className="px-4 py-3">{d.dateofbirth}</td>
                <td className="px-4 py-3">{d.country}</td>
                <td className="px-4 py-3">{d.state}</td>
                <td className="px-4 py-3">{d.city}</td>
                <td className="px-4 py-3">{d.role}</td>
                <td className="px-4 py-3">{d.company}</td>
                <td className="px-4 py-3">{d.dateofjoin}</td>
                <td className="px-4 py-3 flex gap-2">
                  <Button color="blue">
                    <Link to={`/read/${d.id}`}>Detail</Link>
                  </Button>

                  <Button size="sm" color="green">
                    <Link to={`/update/${d.id}`}>Edit</Link>
                  </Button>

                  <Button size="sm" color="red" onClick={(e) => handleDelete(d.id)}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    )
}

export default Home;