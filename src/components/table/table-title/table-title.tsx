import { FC } from "react";
import { TableTitleProps } from "./types";
import { Box, Typography } from "@mui/material";

export const TableTitle: FC<TableTitleProps> = ({ title, actions }) => {
  if (!title) return null;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        mt: 2,
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
      }}
    >
      <Typography
        id="tableTitle"
        component="div"
        variant="h6"
        sx={{ flex: "1 1 100%", fontWeight: 600 }}
      >
        {title}
      </Typography>
      {actions && <Box sx={{ flexShrink: 0, mr: 1 }}>{actions}</Box>}
    </Box>
  );
};
