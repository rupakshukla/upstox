import Dashboard from "@material-ui/icons/Dashboard";
import LibraryBooks from "@material-ui/icons/LibraryBooks";

import DashboardPage from "../src/views/Dashboard/Dashboard.js";
import Typography from "../src/views/Typography/Typography.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Home",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin",
  },
  {
    path: "/typography",
    name: "Live Chart",
    icon: LibraryBooks,
    component: Typography,
    layout: "/admin",
  },
];

export default dashboardRoutes;
