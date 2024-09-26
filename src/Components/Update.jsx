import { Typography, Button, Input, Alert } from "@material-tailwind/react"
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {Link} from "react-router-dom";

const Update = () => {

    const {id} = useParams();
    const navigate = useNavigate();
    const [showSuccess, setShowSuccess] = useState(false);

    const [values,setValues] = useState({
        name: "",
        phone: "",
        age: "",
        dateofbirth: "",
        country: "",
        state: "",
        city: "",
        role: "",
        company: "",
        dateofjoin: ""
    });

    useEffect(() => {
        axios
        .get(`http://localhost:3000/Students/${id}`)
        .then((res) => setValues(res.data))
        .catch((err) => console.log(err));
    },[id]);

    const handleUpdate = (e) => {
        e.preventDefault();
        axios
        .put(`http://localhost:3000/Students/${id}`,values)
        .then(() => {
          setShowSuccess(true); 
          setTimeout(() => {
            setShowSuccess(false);
            navigate("/"); 
          }, 2000);
    })
        .catch((err) => console.log("Error updating...",err));
    };

    return(
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-lg">
      {showSuccess && (
          <Alert color="green" className="mb-6">
            Student updated successfully!
          </Alert>
        )}
        <Typography className="text-2xl font-semibold text-center mb-6" color="blue-gray">
          Edit Student
        </Typography>
        
        <form className="space-y-6" onSubmit={handleUpdate}>
        <div className="flex gap-4">
          <Input
          type="text"
            variant="standard"
            label="Enter your name"
            name="name"
            className="w-full"
            value={values.name} 
            onChange={(e) => setValues({ ...values, name: e.target.value })} 
          />
          
          <Input
          type="number"
            variant="standard"
            label="Enter your phone"
            name="phone"
            className="w-full"
            value={values.phone}
            onChange={(e) => setValues({ ...values, phone: e.target.value })} 
          />
          </div>
          <div className="flex gap-4">
          <Input
          type="number"
            variant="standard"
            label="Enter your age"
            name="age"
            className="w-full"
            value={values.age} 
            onChange={(e) => setValues({ ...values, age: e.target.value })} // Update the state on change
          />
          <Input
          type="date"
            variant="standard"
            label="Enter your date of birth"
            name="dateofbirth"
            className="w-full"
            value={values.dateofbirth} 
            onChange={(e) => setValues({ ...values, dateofbirth: e.target.value })} // Update the state on change
          />
          </div>
          <div className="flex gap-4">
          <Input
          type="text"
            variant="standard"
            label="Enter your country"
            name="country"
            className="w-full"
            value={values.country} 
            onChange={(e) => setValues({ ...values, country: e.target.value })} // Update the state on change
          />
          <Input
          type="text"
            variant="standard"
            label="Enter your state"
            name="state"
            className="w-full"
            value={values.state} 
            onChange={(e) => setValues({ ...values, state: e.target.value })} // Update the state on change
          />
          </div>
          <div className="flex gap-4">
          <Input
          type="text"
            variant="standard"
            label="Enter your city"
            name="city"
            className="w-full"
            value={values.city} 
            onChange={(e) => setValues({ ...values, city: e.target.value })} // Update the state on change
          />
          <Input
          type="text"
            variant="standard"
            label="Enter your role"
            name="role"
            className="w-full"
            value={values.role} 
            onChange={(e) => setValues({ ...values, role: e.target.value })}
          />
          </div>
          <div className="flex gap-4">
          <Input
          type="text"
            variant="standard"
            label="Enter your company"
            name="company"
            className="w-full"
            value={values.company} 
            onChange={(e) => setValues({ ...values, company: e.target.value })} 
          />
          <Input
          type="date"
            variant="standard"
            label="Enter your date of join"
            name="dateofjoin"
            className="w-full"
            value={values.dateofjoin} 
            onChange={(e) => setValues({ ...values, dateofjoin: e.target.value })} 
          />
            </div>
          <div className="flex justify-between items-center mt-6">
            <Button type="submit" color="green" className="px-6 py-2">
              Update
            </Button>
            
            <Link to="/" className="text-blue-500 hover:underline">
              Back
            </Link>
          </div>
        </form>
      </div>
    </div>
    )
}

export default Update;