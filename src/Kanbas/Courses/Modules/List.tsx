import React from "react";
// // import "./index.css";
// import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import './index.css'; 
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./reducer";
import { KanbasState } from "../../store";


function ModuleList() {
    const { courseId } = useParams();
    const moduleList = useSelector((state: KanbasState) => 
      state.modulesReducer.modules);
    const module = useSelector((state: KanbasState) => 
      state.modulesReducer.module);
    const dispatch = useDispatch();
//   const { courseId } = useParams();
//   const [moduleList, setModuleList] = useState<any[]>(modules);
//   const modulesList = modules.filter((module) => module.course === courseId);
//   const [selectedModule, setSelectedModule] = useState(modulesList[0]);
//   const [module, setModule] = useState({
//     name: "New Module",
//     description: "New Description",
//     course: courseId,
//     _id: new Date().getTime().toString(),
//   });
//   const addModule = (module: any) => {
//     const newModule = { ...module,
//       _id: new Date().getTime().toString() };
//     const newModuleList = [newModule, ...moduleList];
//     setModuleList(newModuleList);
//   };
//   const deleteModule = (moduleId: string) => {
//     const newModuleList = moduleList.filter(
//       (module) => module._id !== moduleId );
//     setModuleList(newModuleList);
//   };
//   const updateModule = () => {
//     const newModuleList = moduleList.map((m) => {
//       if (m._id === module._id) {
//         return module;
//       } else {
//         return m;
//       }
//     });
//     setModuleList(newModuleList);
//   };



  return (
    <>
        <div>
            <button className="grey-button">Collapse All</button>
            <button className="grey-button">View Progress</button>
            <button className="grey-button">Publish All</button>
            <button className="red-button">+ Module</button>
        </div>
        <hr></hr>
      <ul className="list-group wd-modules">
      <li className="list-group-item">
                        <button onClick={() => dispatch(updateModule(module))}>
                                    Update
                            </button>

                        <button onClick={() => dispatch(addModule({ ...module, course: courseId }))}>Add</button>
                        <input value={module.name}
                        onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
                        />
                        <textarea value={module.description}
                        onChange={(e) =>dispatch(setModule({ ...module, description: e.target.value }))}
                        />
                    </li>

        {moduleList
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <li key={index}
            className="list-group-item">

            <button
                onClick={() => dispatch(setModule(module))}>
                Edit
            </button>
            <button
              onClick={() => dispatch(deleteModule(module._id))}>

              Delete
            </button>


            <div>
              <FaEllipsisV className="me-2" />
              {module.name}
              <span className="float-end">
                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
            </div>
            {/* {selectedModule._id === module._id && (
              <ul className="list-group">
                      
                {module.lessons?.map((lesson:any, index:number) => (
                  <li className="list-group-item" key={index}>
                    <FaEllipsisV className="me-2" />
                    {lesson.name}
                    <span className="float-end">
                      <FaCheckCircle className="text-success" />
                      <FaEllipsisV className="ms-2" />
                    </span>
                  </li>
                ))}
              </ul>
            )} */}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ModuleList;



