import { useForm } from "react-hook-form";
import { FC } from "react";
import { Box, TextField } from "@mui/material";
import { SearchFieldProps } from "./types";
import { Menu } from "@ui";

export const SearchField: FC<SearchFieldProps> = ({
  filters,
  btnLabel,
  textFieldLabel,
  textFieldPlaceholder,
  fieldName,
}) => {
  const { register } = useForm();

  return (
    <Box sx={{ display: "flex", gap: 1, alignItems: "center", flex: 1 }}>
      <Menu items={filters} btnLabel={btnLabel} />
      <TextField
        {...register(fieldName)}
        size="small"
        label={textFieldLabel}
        placeholder={textFieldPlaceholder}
        sx={{ flex: 1 }}
      />
    </Box>
  );
};
