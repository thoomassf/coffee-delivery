import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />} />
      <Route path="/checkout" element={<DefaultLayout />} />
      <Route path="/success" element={<DefaultLayout />} />
    </Routes>
  )
}