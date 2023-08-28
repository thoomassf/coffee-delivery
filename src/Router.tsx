import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Checkout } from "./pages/Checkout";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/success" element={<DefaultLayout />} />
    </Routes>
  )
}