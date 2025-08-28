import { FC } from "react";
import { TableTitleProps } from "./types";
import { Box, Typography } from "@mui/material";
import { titleContainer } from "./styles";

export const TableTitle: FC<TableTitleProps> = ({ title, actions }) => {
  if (!title) return null;

  return (
    <Box sx={titleContainer}>
      <Typography
        id="tableTitle"
        component="div"
        variant="h5"
        sx={{ flex: "1 1 100%" }}
      >
        {title}
      </Typography>
      {actions && <Box sx={{ flexShrink: 0, mr: 1 }}>{actions}</Box>}
    </Box>
  );
};
