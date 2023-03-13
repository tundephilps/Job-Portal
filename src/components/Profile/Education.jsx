//import { Textarea } from "@mui/joy";
import React from "react";
import { Input, Textarea } from "@mui/joy";
import FormLabel from "@mui/joy/FormLabel";

import Button from "@mui/joy/Button";
import { styled } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import Grid from "@mui/joy/Grid";
import { Checkbox, FormControlLabel } from "@mui/material";

const Item = styled(Sheet)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.vars.palette.text.tertiary,
}));

const Education = () => {
  return (
    <div>
      <Grid container spacing={2} sx={{ flexGrow: 1 }}>
        <Grid xs={12}>
          <Item>
            {" "}
            <FormLabel>Institution</FormLabel>
            <Input placeholder="Tunde" />
          </Item>
        </Grid>
        <Grid xs={6}>
          <Item>
            {" "}
            <FormLabel>Course</FormLabel>
            <Input placeholder="Philps" />
          </Item>
        </Grid>
        <Grid xs={6}>
          <Item>
            {" "}
            <FormLabel>Degree</FormLabel>
            <Input placeholder="Degree" />
          </Item>
        </Grid>
        <Grid xs={12}>
          <Item>
            {" "}
            <FormLabel>School Location</FormLabel>
            <Input placeholder="" />
          </Item>
        </Grid>
        <Grid xs={12}>
          <Item>
            {" "}
            <FormLabel>Description</FormLabel>
            <textarea
              placeholder="Describe"
              style={{ width: "100%", height: "7rem" }}
            />
          </Item>
        </Grid>
        <Grid xs={6}>
          <Item>
            {" "}
            <FormLabel>From</FormLabel>
            <Input type="date" placeholder="Degree" />
          </Item>
        </Grid>
        <Grid xs={6}>
          <Item>
            {" "}
            <FormLabel>To</FormLabel>
            <Input type="date" />
          </Item>
        </Grid>
        <Grid xs={12}>
          <Item>
            {" "}
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="I Currently attend this school"
            />
          </Item>
          <Button color="primary" variant="solid" className="MUIButton">
            Save
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Education;
