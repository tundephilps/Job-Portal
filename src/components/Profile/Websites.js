import React, { useState } from "react";
import { Input } from "@mui/joy";
import Button from "@mui/joy/Button";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
//import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";

import { styled } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import Grid from "@mui/joy/Grid";

const Item = styled(Sheet)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.vars.palette.text.tertiary,
}));

const Websites = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <Grid container spacing={2} sx={{ flexGrow: 1 }}>
        <Grid xs={6}>
          <Item>
            {" "}
            <FormLabel>Linkedin</FormLabel>
            <Input placeholder="www." />
          </Item>
        </Grid>
        <Grid xs={6}>
          <Item>
            {" "}
            <FormLabel>Github</FormLabel>
            <Input placeholder="www." />
          </Item>
        </Grid>
        <Grid xs={6}>
          <Item>
            {" "}
            <FormLabel>Portfolio</FormLabel>
            <Input placeholder="www." />
          </Item>
        </Grid>
        <Grid xs={6}>
          <Item>
            {" "}
            <FormLabel>Others</FormLabel>
            <Input placeholder="Facebook, Twitter, etc" />
          </Item>
        </Grid>

        <FormControl
          sx={{ m: 1, minWidth: 600 }}
          size="small"
          style={{ marginLeft: "25%" }}
        >
          <InputLabel id="demo-select-large">
            How did you hear about Us
          </InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>Facebook</MenuItem>
            <MenuItem value={20}>Twitter</MenuItem>
            <MenuItem value={30}>Linkedin</MenuItem>

            <MenuItem value={40}>Google</MenuItem>

            <MenuItem value={40}>Online Ads</MenuItem>

            <MenuItem value="">
              <em>Others</em>
            </MenuItem>
          </Select>
        </FormControl>
        <Button color="primary" variant="solid" className="MUIButton">
          Save
        </Button>
      </Grid>
    </div>
  );
};

export default Websites;
