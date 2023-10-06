import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { PrivateRoute, LoginPage, SignUpPage } from "src/features/auth";
import { Home } from "src/pages";
import { Navbar } from "src/shared";

const App: React.FC = () => {
  return (
    <>
      <Toaster position="bottom-right" reverseOrder={false} />
      <Navbar/>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home/>}/>
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage/>} />
      </Routes>
    </>
  );
};

export default App;
