import Button from "@mui/material/Button";
import BaseMenu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { FC, useState } from "react";
import { MenuProps } from "./types";

export const Menu: FC<MenuProps> = ({ items, btnLabel = "Меню" }) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="outlined"
        onClick={handleClick}
      >
        {btnLabel}
      </Button>
      <BaseMenu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            "aria-labelledby": "basic-button",
          },
        }}
      >
        {items.map((label) => (
          <MenuItem onClick={handleClose}>{label}</MenuItem>
        ))}
      </BaseMenu>
    </div>
  );
};
