import { Typography, Button, Input, Alert } from "@material-tailwind/react";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Create = () => {
  const [values, setValues] = useState({
    name: "",
    phone: "",
    age: "",
    dateofbirth: "",
    country: "",
    state: "",
    city: "",
    role: "",
    company: "",
    dateofjoin: "",
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:3000/Students`, values)
      .then(() => {
        setShowSuccess(true); 
        setTimeout(() => {
          setShowSuccess(false);
          navigate("/"); 
        }, 2000); 
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-lg">
        {showSuccess && (
          <Alert color="green" className="mb-6">
            Student added successfully!
          </Alert>
        )}
        <Typography className="text-2xl font-semibold text-center mb-6" color="blue-gray">
          Add Student
        </Typography>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex gap-4">
            <Input
              variant="standard"
              label="Enter your name"
              name="name"
              value={values.name}
              onChange={(e) => setValues({ ...values, name: e.target.value })}
              className="w-full"
            />
            <Input
              type="number"
              variant="standard"
              label="Enter your phone"
              name="phone"
              value={values.phone}
              onChange={(e) => setValues({ ...values, phone: e.target.value })}
              className="w-full"
            />
          </div>
          <div className="flex gap-4">
            <Input
              type="number"
              variant="standard"
              label="Enter your age"
              name="age"
              value={values.age}
              onChange={(e) => setValues({ ...values, age: e.target.value })}
              className="w-full"
            />
            <Input
              type="date"
              variant="standard"
              label="Enter your date of birth"
              name="dateofbirth"
              value={values.dateofbirth}
              onChange={(e) =>
                setValues({ ...values, dateofbirth: e.target.value })
              }
              className="w-full"
            />
          </div>
          <div className="flex gap-4">
            <Input
              type="text"
              variant="standard"
              label="Enter your country"
              name="country"
              value={values.country}
              onChange={(e) =>
                setValues({ ...values, country: e.target.value })
              }
              className="w-full"
            />
            <Input
              type="text"
              variant="standard"
              label="Enter your state"
              name="state"
              value={values.state}
              onChange={(e) => setValues({ ...values, state: e.target.value })}
              className="w-full"
            />
          </div>
          <div className="flex gap-4">
            <Input
              type="text"
              variant="standard"
              label="Enter your city"
              name="city"
              value={values.city}
              onChange={(e) => setValues({ ...values, city: e.target.value })}
              className="w-full"
            />
            <Input
              type="text"
              variant="standard"
              label="Enter your role"
              name="role"
              value={values.role}
              onChange={(e) => setValues({ ...values, role: e.target.value })}
              className="w-full"
            />
          </div>
          <div className="flex gap-4">
            <Input
              type="text"
              variant="standard"
              label="Enter your company"
              name="company"
              value={values.company}
              onChange={(e) =>
                setValues({ ...values, company: e.target.value })
              }
              className="w-full"
            />
            <Input
              type="date"
              variant="standard"
              label="Enter your date of join"
              name="dateofjoin"
              value={values.dateofjoin}
              onChange={(e) =>
                setValues({ ...values, dateofjoin: e.target.value })
              }
              className="w-full"
            />
          </div>
          <div className="flex justify-between items-center mt-6">
            <Button type="submit" color="green" className="px-6 py-2">
              Submit
            </Button>
            <Link to="/" className="text-blue-500 hover:underline">
              Back
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
