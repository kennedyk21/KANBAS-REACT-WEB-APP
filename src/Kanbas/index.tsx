import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import { useState, useEffect } from "react";
import axios from "axios";
import store from "./store";
import { Provider } from "react-redux";

function Kanbas() {

  const COURSES_API = "https://kanbas-node-server-app-37sr.onrender.com/api/courses";
  const [courses, setCourses] = useState<any[]>([]);
  
  useEffect(() => {
    const findAllCourses = async () => {
      const response = await axios.get(COURSES_API);
      setCourses(response.data);
    };
    findAllCourses();
  }, []);

  const [course, setCourse] = useState({
    _id: "1234", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
  });
  const addNewCourse = async () => {
    const response = await axios.post(COURSES_API, course);
    setCourses([...courses, { ...course, response: response.data }]);
  };
  const deleteCourse = async (courseId: any) => {
    // const response = await axios.delete(
    //   `${COURSES_API}/${courseId}`
    // );

    setCourses(courses.filter((course) => course._id !== courseId));
  };
  const updateCourse = async () => {
    // const response = await axios.put(
    //   `${COURSES_API}/${course._id}`,
    //   course
    // );

    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };

  return (
    <Provider store={store}>
    <div className="d-flex">
      <KanbasNavigation />
      <div style={{ flexGrow: 1 }}>
        <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="Account" element={<h1>Account</h1>} />
            <Route path="Dashboard" element={            
            <Dashboard
              courses={courses}
              course={course}
              setCourse={setCourse}
              addNewCourse={addNewCourse}
              deleteCourse={deleteCourse}
              updateCourse={updateCourse}/>} />
            <Route path="Courses/*" element={<h1>Courses</h1>} />
            <Route path="Courses/:courseId/*" element={<Courses />} />
          </Routes>

      </div>
    </div>
    </Provider>
  );
}
  export default Kanbas;
