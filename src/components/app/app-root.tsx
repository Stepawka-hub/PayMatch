import { FC, Suspense } from "react";
import { CssBaseline } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

export const AppRoot: FC = () => {
  return (
    <Suspense fallback="">
      <CssBaseline />
      <RouterProvider router={router} />
    </Suspense>
  );
};
