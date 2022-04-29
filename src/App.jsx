import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import SingIn from "./routes/authentication/authentication.component";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />} >
        <Route index element={<Home />} />
        <Route path="auth" element={<SingIn />} />
      </Route>
    </Routes>
  );
}

export default App;
