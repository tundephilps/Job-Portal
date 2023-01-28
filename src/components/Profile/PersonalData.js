import React, { useState } from "react";
import { Input } from "@mui/joy";
import Button from "@mui/joy/Button";

import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";

import { styled } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import Grid from "@mui/joy/Grid";
import { MuiTelInput } from "mui-tel-input";
import { Avatar } from "@mui/material";

const Item = styled(Sheet)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.vars.palette.text.tertiary,
}));

const PersonalData = () => {
  const [value, setValue] = useState("");
  const [info, setInfo] = useState(null);

  const handleChange = (newValue, info) => {
    setValue(newValue);
    setInfo(info);
  };

  return (
    <div>
      <FormControl>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar className="avatar" src="/broken-image.jpg" />
          <p>Upload Image</p>
        </div>
        <Grid container spacing={2} sx={{ flexGrow: 1 }}>
          <Grid xs={6}>
            <Item>
              {" "}
              <FormLabel>First Name</FormLabel>
              <Input placeholder="Tunde" />
            </Item>
          </Grid>
          <Grid xs={6}>
            <Item>
              {" "}
              <FormLabel>LastName</FormLabel>
              <Input placeholder="Philps" type="text" />
            </Item>
          </Grid>
          <Grid xs={6}>
            <Item>
              {" "}
              <FormLabel>Email</FormLabel>
              <Input placeholder="@gmail.com" type="email" />
            </Item>
          </Grid>
          <Grid xs={6}>
            <Item>
              {" "}
              <FormLabel>Confirm Email</FormLabel>
              <Input placeholder="" />
            </Item>
          </Grid>
          <Grid xs={12}>
            <Item>
              {" "}
              <FormLabel>Place of Residence</FormLabel>
              <Input placeholder="Address" />
            </Item>
          </Grid>
          <Grid xs={5}>
            <Item>
              {" "}
              <FormLabel>Phone Number</FormLabel>
              <MuiTelInput
                defaultCountry="NG"
                value={value}
                onChange={handleChange}
                className="MuiTelInput-TextField"
              />
            </Item>
          </Grid>
        </Grid>
        <Button color="primary" variant="solid" className="MUIButton">
          Save
        </Button>
      </FormControl>
    </div>
  );
};

export default PersonalData;
