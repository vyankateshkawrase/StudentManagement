import { Typography, Button } from "@material-tailwind/react"
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Read = () => {

    const [data,setdata] = useState({});
    const {id} = useParams();

    useEffect(() => {
        axios
        .get(`http://localhost:3000/Students/${id}`)
        .then((res) => setdata(res.data))
        .catch((err) => console.log(err));
    },[id]);

    return(
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-10">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <Typography variant="h4" className="mb-4 text-center" color="blue-gray">
          Detail of Student
        </Typography>

        {data ? (
          <div className="text-lg space-y-3 flex justify-center flex-col items-center">
            <p>
              <strong className="text-end">Name:</strong> {data.name || "N/A"}
            </p>
            <p>
              <strong>Phone:</strong> {data.phone || "N/A"}
            </p>
            <p>
              <strong>Age:</strong> {data.age || "N/A"}
            </p>
            <p>
              <strong>Date of Birth:</strong> {data.dateofbirth || "N/A"}
            </p>
            <p>
              <strong>Country:</strong> {data.country || "N/A"}
            </p>
            <p>
              <strong>State:</strong> {data.state || "N/A"}
            </p>
            <p>
              <strong>City:</strong> {data.city || "N/A"}
            </p>
            <p>
              <strong>Role:</strong> {data.role || "N/A"}
            </p>
            <p>
              <strong>Company:</strong> {data.company || "N/A"}
            </p>
            <p>
              <strong>Date of Join:</strong> {data.dateofjoin || "N/A"}
            </p>
            <div className="flex gap-4">
            <Button>
              <Link to="/">Back</Link>
            </Button>
            </div>
          </div>
        ) : (
          <Typography color="red">User data not found</Typography>
        )}
      </div>
    </div>
    )
}

export default Read;