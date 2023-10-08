import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { PrivateRoute, LoginPage, SignUpPage } from "src/features/auth";
import { Home, Activity, Food } from "src/pages";

const App: React.FC = () => {
  return (
    <>
      <Toaster position="bottom-right" reverseOrder={false} />
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/food" element={<Food/>}/>
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage/>} />
      </Routes>
    </>
  );
};

export default App;
