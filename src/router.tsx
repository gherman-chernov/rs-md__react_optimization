import { createBrowserRouter, Navigate } from "react-router";
import App from "./App";
import { NotFound } from "./pages/NotFound";
import { CategoryLayout } from "./layout/CategoryLayout";
import { Login } from "./pages/Login";
import { PrivateRoute } from "./component/PrivateRoute";


///React.lazy or Router.lazy ???
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
            lazy: async () => {
              const [Component, loader] = await Promise.all([
                import('./pages/character/CharacterList').then(module => module.CharacterList),
                import('./pages/character/CharacterList.loader').then(module => module.characterListLoader),
              ])

              return {Component, loader}
            },
          },
          {
            path: "characters/:id",
            lazy: async () => {
              const [Component, loader] = await Promise.all([
                import('./pages/character/Character').then(module => module.Character),
                import('./pages/character/Character.loader').then(module => module.characterLoader),
              ])

              return {Component, loader}
            },
          },
          {
            path: "episodes",
            lazy: async () => {
              const [Component, loader] = await Promise.all([
                import('./pages/episode/EpisodeList').then(module => module.EpisodeList),
                import('./pages/episode/EpisodeList.loader').then(module => module.episodeListLoader),
              ])

              return {Component, loader}
            },
          },
          {
            path: "episodes/:id",
            lazy: async () => {
              const [Component, loader] = await Promise.all([
                import('./pages/episode/Episode').then(module => module.Episode),
                import('./pages/episode/Episode.loader').then(module => module.episodeLoader),
              ])

              return {Component, loader}
            },
          },
          {
            path: "locations",
            lazy: async () => {
              const [Component, loader] = await Promise.all([
                import('./pages/location/LocationList').then(module => module.LocationList),
                import('./pages/location/LocationList.loader').then(module => module.locationListLoader),
              ])

              return {Component, loader}
            },
          },
          {
            path: "locations/:id",
            lazy: async () => {
              const [Component, loader] = await Promise.all([
                import('./pages/location/Location').then(module => module.Location),
                import('./pages/location/Location.loader').then(module => module.locationLoader),
              ])

              return {Component, loader}
            },
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
