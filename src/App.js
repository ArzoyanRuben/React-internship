// import { Card } from "./components/Card";
import { Users } from "./components/Users";
import { Albums } from "./components/Albums";
import { Error404 } from "./components/Error404";
import { LeftPanel } from "./components/LeftPanel";
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  let location = useLocation();
  let state = location.state;
  console.log(location, state);

  return (
    // <Card />
    <Routes location={state.backgroundLocation || location}>
      <Route path="/" element={<LeftPanel />}>
        <Route index element={<Users />} />
        <Route path="albums" element={<Albums />} />
        {/* <Route path="img/:id" element={<ImageView />} /> */}
        <Route element={<Error404 />} />
      </Route>
    </Routes>
  );
}

{
  /* {state?.backgroundLocation && (
        <Routes>
          <Route path="/img/:id" element={<Modal />} />
        </Routes>
      )} */
}
export default App;
