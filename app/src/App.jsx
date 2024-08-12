import Dashboard from "./pages/Dashboard/Dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Transaction from "./pages/Transaction/Transaction";
import Support from "./pages/Support/Support";
import SignIn from "./pages/Auth/SignIn/SignIn";
import SignUp from "./pages/Auth/SignUp/SignUp";
import RegisterEmailVerify from "./pages/Auth/RegisterEmailVeriify/RegisterEmailVerify";
import RegisterSuccess from "./pages/Auth/RegisterSuccess/RegisterSuccess";
import ForgotPassword from "./pages/Auth/ForgotPassword/ForgotPassword";
import ForgotPasswordSent from "./pages/Auth/ForgotPasswordSent/ForgotPasswordSent";
import ResetPasswordSuccess from "./pages/Auth/ResetPasswordSuccess/ResetPasswordSuccess";
import ResetPassword from "./pages/Auth/ResetPassword/ResetPassword";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import ProtectedRoute from "./Components/AuthComponent/ProtectedRoute";
import AlreadySigninRoute from "./Components/AuthComponent/AlreadySigninRoute";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          {" "}
          <Dashboard />
        </ProtectedRoute>
      ),
    },
    {
      path: "/Transaction",
      element: (
        <ProtectedRoute>
          <Transaction />
        </ProtectedRoute>
      ),
    },
    {
      path: "/Support",
      element: (
        <ProtectedRoute>
          {" "}
          <Support />
        </ProtectedRoute>
      ),
    },
    {
      path: "/signin",
      element: (
        <AlreadySigninRoute>
          <SignIn />
        </AlreadySigninRoute>
      ),
    },
    {
      path: "/signup",
      element: (
        <AlreadySigninRoute>
          <SignUp />
        </AlreadySigninRoute>
      ),
    },
    {
      path: "/Register-Email-Verify/:email",
      element: (
        <AlreadySigninRoute>
          <RegisterEmailVerify />
        </AlreadySigninRoute>
      ),
    },
    {
      path: "/email-verify/:token",
      element: (
        <AlreadySigninRoute>
          <RegisterSuccess />
        </AlreadySigninRoute>
      ),
    },
    {
      path: "/forgot-password",
      element: (
        <AlreadySigninRoute>
          {" "}
          <ForgotPassword />
        </AlreadySigninRoute>
      ),
    },
    {
      path: "/forgot-success/:email",
      element: (
        <AlreadySigninRoute>
          <ForgotPasswordSent />
        </AlreadySigninRoute>
      ),
    },
    {
      path: "/forgot-password-verify/:token",
      element: (
        <AlreadySigninRoute>
          {" "}
          <ResetPassword />
        </AlreadySigninRoute>
      ),
    },
    {
      path: "/Reset-Password-success",
      element: (
        <AlreadySigninRoute>
          {" "}
          <ResetPasswordSuccess />
        </AlreadySigninRoute>
      ),
    },
  ]);

  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
