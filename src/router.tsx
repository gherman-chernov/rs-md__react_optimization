import { createBrowserRouter, Navigate } from "react-router";
import App from "./App";
import { NotFound } from "./pages/NotFound";
import { CategoryLayout } from "./layout/CategoryLayout";
import { CharacterList } from "./pages/character/CharacterList";
import { EpisodeList } from "./pages/episode/EpisodeList";
import { LocationList } from "./pages/location/LocationList";
import { Character } from "./pages/character/Character";
import { Episode } from "./pages/episode/Episode";
import { Location } from "./pages/location/Location";
import { characterListLoader } from "./pages/character/CharacterList.loader";
import { characterLoader } from "./pages/character/Character.loader";
import { episodeListLoader } from "./pages/episode/EpisodeList.loader";
import { episodeLoader } from "./pages/episode/Episode.loader";
import { locationListLoader } from "./pages/location/LocationList.loader";
import { locationLoader } from "./pages/location/Location.loader";
import { Login } from "./pages/Login";
import { PrivateRoute } from "./component/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        element: <PrivateRoute><CategoryLayout /></PrivateRoute>,
        children: [
          {
            index: true,
            //path: "characters",
            element: <CharacterList />,
            loader: characterListLoader,
          },
          {
            path: "characters/:id",
            element: <Character />,
            loader: characterLoader
          },
          {
            path: "episodes",
            element: <EpisodeList />,
            loader: episodeListLoader,
          },
          {
            path: "episodes/:id",
            element: <Episode />,
            loader: episodeLoader,
          },
          {
            path: "locations",
            element: <LocationList />,
            loader: locationListLoader,
          },
          {
            path: "locations/:id",
            element: <Location />,
            loader: locationLoader,
          },
        ],
      }, {
        path: "login",
        element: <Login />,
      }
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);
