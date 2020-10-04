import Dashboard from "@material-ui/icons/Dashboard";
import LibraryBooks from "@material-ui/icons/LibraryBooks";

import HistoricalView from "../src/views/Historical/HistoricalView.js";
import LiveView from "../src/views/Live/LiveView.js";

const dashboardRoutes = [
  {
    path: "/historical",
    name: "Historical Chart",
    icon: Dashboard,
    component: HistoricalView,
    layout: "/admin",
  },
  {
    path: "/live",
    name: "Live Chart",
    icon: LibraryBooks,
    component: LiveView,
    layout: "/admin",
  },
];

export default dashboardRoutes;
