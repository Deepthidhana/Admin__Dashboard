import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../components/dashboard/Dashboard";
import { ErrorPage } from "../components/error/ErrorPage";
// import { Teams } from "../../containers/data/Teams";
// import { Contacts } from "../dashboard/containers/Contacts";
// import { Invoices } from "../dashboard/containers/Invoices";
// import { ProfileForm } from "../dashboard/containers/ProfileForm";
// import { FAQPage } from "../dashboard/containers/FAQPage";
import { lazy, Suspense } from "react";
import App from "../App";

const Teams = lazy(() => import("../containers/data/Teams"));

const Contacts = lazy(() => import("../containers/data/Contacts"));

const Invoices = lazy(() => import("../containers/data/Invoices"));

const ProfileForm = lazy(() => import("../containers/pages/ProfileForm"));

const FAQPage = lazy(() => import("../containers/pages/FAQPage"));

const BarChart = lazy(() => import("../containers/charts/BarChart"));

const LineChart = lazy(() => import("../containers/charts/LineChart"));

const PieChart = lazy(() => import("../containers/charts/PieChart"));

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/teams",
        element: (
          <Suspense fallback={<ErrorPage />}>
            <Teams />
          </Suspense>
        ),
      },
      {
        path: "/contacts",
        element: (
          <Suspense fallback={<ErrorPage />}>
            <Contacts />
          </Suspense>
        ),
      },
      {
        path: "/invoice",
        element: (
          <Suspense fallback={<ErrorPage />}>
            <Invoices />
          </Suspense>
        ),
      },
      {
        path: "/profile-form",
        element: (
          <Suspense fallback={<ErrorPage />}>
            <ProfileForm />
          </Suspense>
        ),
      },
      {
        path: "/calender",
        element: <div>Calender</div>,
      },
      {
        path: "/faq",
        element: (
          <Suspense fallback={<ErrorPage />}>
            <FAQPage />
          </Suspense>
        ),
      },
      {
        path: "/bar-chart",
        element: (
          <Suspense fallback={<ErrorPage />}>
            <BarChart />
          </Suspense>
        ),
      },
      {
        path: "/pie-chart",
        element: (
          <Suspense fallback={<PieChart />}>
            <PieChart />
          </Suspense>
        ),
      },
      {
        path: "/line-chart",
        element: (
          <Suspense fallback={<LineChart />}>
            <LineChart />
          </Suspense>
        ),
      },
      {
        path: "/geo-chart",
        element: <div>Geo</div>,
      },
    ],
  },
]);
