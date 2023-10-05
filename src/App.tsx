import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { PrivateRoute, LoginPage } from "src/features/auth";
import { Home } from "src/pages";

const App: React.FC = () => {
  return (
    <>
      <Toaster position="bottom-right" reverseOrder={false} />
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home/>}/>
        </Route>
        <Route path="/login" element={<LoginPage/>}/>
      </Routes>
    </>
  );
};

export default App;
