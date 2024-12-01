import { lazy, Suspense } from "react"
import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom"
import { ErrorRouteElement } from "@/shared/components"
import { Spinner } from "@/shared/components/ui"

// Defer loading pages'code until rendered for the first time (lazy load)
const LandingPage = lazy(() => import("@/shared/pages/LandingPage"))
const NotFoundPage = lazy(() => import("@/shared/pages/NotFoundPage"))
const PageLayout = lazy(() => import("@/shared/layouts/PageLayout"))

export default function AppRoutes() {
  const routes = publicRoutes
  const router = createBrowserRouter(routes)
  return <RouterProvider router={router} />
}

const publicRoutes: RouteObject[] = [
  {
    path: "/",
    element: (
      <Suspense fallback={<Spinner />}>
        <PageLayout />
      </Suspense>
    ),
    errorElement: <ErrorRouteElement />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Spinner />}>
            <LandingPage />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "*",
    errorElement: <ErrorRouteElement />,
    element: (
      <Suspense fallback={<Spinner />}>
        <NotFoundPage />
      </Suspense>
    ),
  },
]
