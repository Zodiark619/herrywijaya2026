import { createRoot } from "react-dom/client";
import Resume from "./pages/resume/Resume";
import { BrowserRouter, Routes, Route } from "react-router-dom";
{
  /* <Route path="/" element={<Resume />} /> */
}
{
  /* <Route path="/freelancer" element={<Freelancer />} /> */
}
createRoot(document.getElementById("root")).render(
  <BrowserRouter basename={import.meta.env.BASE_URL}>
    <Routes>
      <Route path="/" element={<Resume />} />
    </Routes>
  </BrowserRouter>,
);
