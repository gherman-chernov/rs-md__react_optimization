import { createBrowserRouter, Navigate } from "react-router";
import App from "./App";
import {
  Character,
  Login,
  NotFound,
  CharacterList,
  characterListLoader,
  characterLoader,
  episodeListLoader,
  EpisodeList,
  episodeLoader,
  Episode,
  locationListLoader,
  LocationList,
  locationLoader,
  Location,
} from "./pages";
import { PrivateRoute } from "./component";
import { CategoryLayout } from "./layout";

///React.lazy or Router.lazy ???
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        element: (
          <PrivateRoute>
            <CategoryLayout />
          </PrivateRoute>
        ),
        children: [
          {
            index: true,
            lazy: async () => {
              const [Component, loader] = await Promise.all([
                CharacterList,
                characterListLoader,
              ]);

              return { Component, loader };
            },
          },
          {
            path: "characters/:id",
            lazy: async () => {
              const [Component, loader] = await Promise.all([
                Character,
                characterLoader,
              ]);

              return { Component, loader };
            },
          },
          {
            path: "episodes",
            lazy: async () => {
              const [Component, loader] = await Promise.all([
                EpisodeList,
                episodeListLoader,
              ]);

              return { Component, loader };
            },
          },
          {
            path: "episodes/:id",
            lazy: async () => {
              const [Component, loader] = await Promise.all([
                Episode,
                episodeLoader,
              ]);

              return { Component, loader };
            },
          },
          {
            path: "locations",
            lazy: async () => {
              const [Component, loader] = await Promise.all([
                LocationList,
                locationListLoader,
              ]);

              return { Component, loader };
            },
          },
          {
            path: "locations/:id",
            lazy: async () => {
              const [Component, loader] = await Promise.all([
                Location,
                locationLoader,
              ]);

              return { Component, loader };
            },
          },
        ],
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);
