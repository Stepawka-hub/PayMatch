import { SxProps, Theme } from "@mui/material";

export const titleContainer: SxProps<Theme> = {
  display: "flex",
  justifyContent: "space-between",
  py: 1,
  pl: { sm: 2 },
  pr: { xs: 1, sm: 1 },
  textAlign: 'left',
  borderRadius: '1.25rem 1.25rem 0 0',
  color: '#fff',
  backgroundColor: (theme) => theme.palette.primary.main
};
