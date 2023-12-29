"use client";
import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import { red } from "@mui/material/colors";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { InputLabel } from "@mui/material";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    // style: {
    //   maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    //   width: 250,
    // },
  },
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

export default function MultiSelectDropdown() {
  const [personName, setPersonName] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div>
      <FormControl
        sx={{
          m: 1,
          width: 300,
          "&.MuiFormControl-root": {
            maxWidth: "10rem",
          },
        }}
      >
        <InputLabel
          id="demo-simple-select-disabled-label"
          className="text-xs font-semibold"
        >
          Ticket Price
        </InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={personName}
          onChange={handleChange}
          input={
            <OutlinedInput
              label="Ticket Price"
              className="text-xs font-semibold text-slate-400"
            />
          }
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
          sx={{
            "&.MuiInputLabel-root": {
              color: red[500],
            },
            fieldset: {
              border: "0px",
            },
          }}
        >
          {names.map((name) => (
            <MenuItem
              className="text-xs font-semibold"
              key={name}
              value={name}
              sx={{
                "&.MuiMenuItem-root": {
                  padding: "0px",
                },
              }}
            >
              <Checkbox
                checked={personName.indexOf(name) > -1}
                sx={{
                  "&.Mui-checked": {
                    color: red[500],
                  },
                  "& .MuiSvgIcon-root": { fontSize: 16 },
                }}
              />
              <ListItemText
                primary={name}
                sx={{
                  "& .MuiTypography-root": {
                    fontSize: "0.8rem",
                  },
                }}
              />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
