import { Switch, Route } from "react-router-dom";
import MainNavigation from "./components/layout/MainNavigation";

import AllMeetupsPage from "./pages/AllMeetups";
import FavouritesPage from "./pages/Favourites";
import NewMeetupPage from "./pages/NewMeetup";

function App() {
  return (
    <div>
      <MainNavigation />
      <Switch>
        <Route path="/" exact>
          <AllMeetupsPage />
        </Route>
        <Route path="/new-meetup" exact>
          <NewMeetupPage />
        </Route>
        <Route path="/favourites" exact>
          <FavouritesPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
