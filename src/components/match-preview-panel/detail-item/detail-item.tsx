import { FC } from "react";
import { Box, Typography } from "@mui/material";
import { DetailItemProps } from "./types";

export const DetailItem: FC<DetailItemProps> = ({ label, value, color = 'default' }) => (
  <Box sx={{ mb: 0.25 }}>
    <Typography component="span" sx={{ fontSize: '0.9rem', fontWeight: 500 }}>
      {`${label}: `}
    </Typography>
    <Typography component="span" color={color} sx={{ fontSize: '0.9rem'}}>
      {value}
    </Typography>
  </Box>
);
