import { FC } from "react";
import { Box, Typography } from "@mui/material";
import { DetailItemProps } from "./types";

export const DetailItem: FC<DetailItemProps> = ({ label, value }) => (
  <Box sx={{ mb: 0.25 }}>
    <Typography component="span" variant="body2" sx={{ fontWeight: 500 }}>
      {`${label}: `}
    </Typography>
    <Typography component="span" variant="body2">
      {value}
    </Typography>
  </Box>
);
