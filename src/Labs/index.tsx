import { Route, Routes, Navigate } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";
import Lab1 from "./Lab1";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
import TOC from "./toc";
import LabsMainCards from "./LabsMain"; 
import Lab4 from "./Lab4";

export default function Labs() {
  return (
    <Provider store={store}>
    <div id="wd-labs" style={{ padding: "10px 20px" }}> 
      <h1>Labs</h1>
      <h2>Student Name- AKSHITA SINGH</h2>
      <TOC />
      <Routes>
        
        <Route path="/" element={<Navigate to="LabsMain" />} />

        <Route path="LabsMain" element={<LabsMainCards />} />

        <Route path="Lab1" element={<Lab1 />} />
        <Route path="Lab2" element={<Lab2 />} />
        <Route path="Lab3/*" element={<Lab3 />} />
        <Route path="Lab4/*" element={<Lab4 />} />
      </Routes>
    </div>
    </Provider>
  );
}
