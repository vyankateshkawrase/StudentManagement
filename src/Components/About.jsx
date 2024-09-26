import { Typography, Card, CardBody, IconButton } from "@material-tailwind/react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import {Link} from "react-router-dom"
const About = () => {
  // Framer Motion animation variants
  const cardVariants = {
    offscreen: {
      opacity: 0,
      y: 50,
    },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  return (
    <div className="flex flex-col items-center bg-gradient-to-r from-cyan-500 to-blue-500 min-h-screen py-10 px-4">
      {/* Main Header with fade-in effect */}
      <motion.div initial="hidden" animate="show" variants={staggerContainer}>
        <Typography variant="h3" color="white" className="font-bold mb-8">
          About the Student Information Project
        </Typography>
      </motion.div>

      {/* Project Info Section */}
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.5 }}
        variants={cardVariants}
      >
        <Card className="w-full max-w-4xl bg-white shadow-md rounded-lg p-8 mb-8">
          <CardBody>
            <Typography
              variant="h5"
              color="blue-gray"
              className="font-semibold mb-4"
            >
              Overview
            </Typography>
            <Typography color="blue-gray" className="mb-4">
              The Student Information Project is designed to manage and track
              student data efficiently. This platform allows users to:
            </Typography>
            <ul className="list-disc list-inside mb-4 text-blue-gray">
              <li>Add, edit, and delete student information</li>
              <li>View detailed student profiles</li>
              <li>
                Store important details like names, emails, and contact numbers
              </li>
              <li>Track student performance over time</li>
            </ul>
            <Typography color="blue-gray">
              This project is built using modern web technologies like React,
              Tailwind CSS, and Material UI, ensuring both functionality and
              user-friendly design.
            </Typography>
            {/* Call to Action */}
          </CardBody>
        </Card>
      </motion.div>

      {/* Features Section */}
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.5 }}
        variants={cardVariants}
        className="w-full max-w-4xl mb-8"
      >
        <Card className="bg-white shadow-md rounded-lg p-8">
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="font-semibold mb-4">
              Key Features
            </Typography>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start">
                <span className="bg-blue-500 text-white p-2 rounded-full mr-4">
                  <i className="fas fa-users"></i>
                </span>
                <div>
                  <Typography color="blue-gray" className="font-semibold">
                    User-friendly Interface
                  </Typography>
                  <Typography color="blue-gray" className="text-sm">
                    An easy-to-use interface that lets users navigate and manage
                    student information with ease.
                  </Typography>
                </div>
              </div>
              <div className="flex items-start">
                <span className="bg-teal-500 text-white p-2 rounded-full mr-4">
                  <i className="fas fa-database"></i>
                </span>
                <div>
                  <Typography color="blue-gray" className="font-semibold">
                    Secure Data Storage
                  </Typography>
                  <Typography color="blue-gray" className="text-sm">
                    Ensures data integrity with state-of-the-art security
                    measures.
                  </Typography>
                </div>
              </div>
              <div className="flex items-start">
                <span className="bg-blue-500 text-white p-2 rounded-full mr-4">
                  <i className="fas fa-chart-line"></i>
                </span>
                <div>
                  <Typography color="blue-gray" className="font-semibold">
                    Performance Tracking
                  </Typography>
                  <Typography color="blue-gray" className="text-sm">
                    Monitor student progress with performance tracking and
                    reporting features.
                  </Typography>
                </div>
              </div>
              <div className="flex items-start">
                <span className="bg-teal-500 text-white p-2 rounded-full mr-4">
                  <i className="fas fa-mobile-alt"></i>
                </span>
                <div>
                  <Typography color="blue-gray" className="font-semibold">
                    Mobile Compatibility
                  </Typography>
                  <Typography color="blue-gray" className="text-sm">
                    Responsive design for mobile, tablet, and desktop devices.
                  </Typography>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </motion.div>

      {/* Testimonials Section */}
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.5 }}
        variants={cardVariants}
        className="w-full max-w-4xl mb-8"
      >
        <Card className="bg-white shadow-md rounded-lg p-8">
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="font-semibold mb-4">
              What Our Users Say
            </Typography>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-4 border-l-4 border-teal-500">
                <Typography color="blue-gray" className="italic mb-2">
                  This platform has been a game-changer for managing student
                  records. Highly recommend it!
                </Typography>
                <Typography color="blue-gray" className="text-sm">
                  - Sarah Johnson, School Administrator
                </Typography>
              </div>
              <div className="p-4 border-l-4 border-blue-500">
                <Typography color="blue-gray" className="italic mb-2">
                  A seamless and intuitive interface that makes student
                  management so much easier.
                </Typography>
                <Typography color="blue-gray" className="text-sm">
                  - James Carter, Teacher
                </Typography>
              </div>
            </div>
          </CardBody>
        </Card>
      </motion.div>

      {/* Team Section */}
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.5 }}
        variants={cardVariants}
        className="w-full max-w-4xl"
      >
        <Card className="bg-white shadow-md rounded-lg p-8">
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="font-semibold mb-4">
              Meet Our Team
            </Typography>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center">
                <img
                  src="/Images/venky1.webp"
                  alt="Team Member"
                  className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
                />
                <Typography color="blue-gray" className="font-semibold">
                  Lisa Doe
                </Typography>
                <Typography color="blue-gray" className="text-sm">
                  CEO & Founder
                </Typography>
                <div className="flex justify-center mt-2 gap-2">
                  <IconButton color="blue">
                    <FaLinkedin />
                  </IconButton>
                  <IconButton color="light-blue">
                    <FaTwitter />
                  </IconButton>
                  <IconButton color="black">
                    <FaGithub />
                  </IconButton>
                </div>
              </div>
              <div className="text-center">
                <img
                  src="/Images/venky2.jpeg"
                  alt="Team Member"
                  className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
                />
                <Typography color="blue-gray" className="font-semibold">
                  John Smith
                </Typography>
                <Typography color="blue-gray" className="text-sm">
                  Lead Developer
                </Typography>
                <div className="flex justify-center mt-2 gap-2">
                  <IconButton color="blue">
                    <FaLinkedin />
                  </IconButton>
                  <IconButton color="light-blue">
                    <FaTwitter />
                  </IconButton>
                  <IconButton color="black">
                    <FaGithub />
                  </IconButton>
                </div>
              </div>
              <div className="text-center">
                <img
                  src="/Images/venky3.jpeg"
                  alt="Team Member"
                  className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
                />
                <Typography color="blue-gray" className="font-semibold">
                  Vyankatesh K
                </Typography>
                <Typography color="blue-gray" className="text-sm">
                  Frontend Developer
                </Typography>
                <div className="flex justify-center mt-2 gap-2">
                  <IconButton color="blue">
                  <Link to="https://www.linkedin.com/in/vyankatesh-kawarase-77b72116b/">
                    <FaLinkedin />
                    </Link>
                  </IconButton>
                  <IconButton color="light-blue">
                    <FaTwitter />
                  </IconButton>
                  <IconButton color="black">
                    <FaGithub />
                  </IconButton>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </motion.div>
    </div>
  );
};

export default About;
