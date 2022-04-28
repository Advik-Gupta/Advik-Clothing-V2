import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import SingIn from "./routes/signin/sign-in.component";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />} >
        <Route index element={<Home />} />
        <Route path="sign-in" element={<SingIn />} />
      </Route>
    </Routes>
  );
}

export default App;
