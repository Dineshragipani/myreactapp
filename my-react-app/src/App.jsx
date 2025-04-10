import { useState } from "react";
import { BrowserRouter, Link,Routes,Route } from "react-router-dom";
import First from "./components/First";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Link to="First">First|</Link>
      </div>
      <hr></hr>
      <div>
        <Routes>
          <Route index element={<First />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;