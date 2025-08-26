import { FC } from "react";
import { TableTitleProps } from "./types";
import { Box, Typography } from "@mui/material";

export const TableTitle: FC<TableTitleProps> = ({ title }) => {
  if (!title) return null;

  return (
    <Box sx={{ mt: 2, pl: { sm: 2 }, pr: { xs: 1, sm: 1 } }}>
      <Typography
        id="tableTitle"
        component="div"
        variant="h6"
        sx={{ flex: "1 1 100%", fontWeight: 600 }}
      >
        {title}
      </Typography>
    </Box>
  );
};
