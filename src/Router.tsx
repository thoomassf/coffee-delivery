import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Checkout } from "./pages/Checkout";
import { Success } from "./pages/success";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/success" element={<Success />} />
    </Routes>
  )
}