import React from "react";
import { Input } from "@mui/joy";
import FormLabel from "@mui/joy/FormLabel";

import Divider from "@mui/joy/Divider";
//import Input from '@mui/joy/Input';
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
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

const Work = () => {
  const [currency, setCurrency] = React.useState("dollar");

  return (
    <div>
      <Grid container spacing={2} sx={{ flexGrow: 1 }}>
        <Grid xs={6}>
          <Item>
            {" "}
            <FormLabel>Title</FormLabel>
            <Input placeholder="Role" />
          </Item>
        </Grid>
        <Grid xs={6}>
          <Item>
            {" "}
            <FormLabel>Company</FormLabel>
            <Input placeholder="Company Name" />
          </Item>
        </Grid>
        <Grid xs={12}>
          <Item>
            {" "}
            <FormLabel>Office Location</FormLabel>
            <Input placeholder="Work Address" />
          </Item>
        </Grid>
        <Grid xs={12}>
          <Item>
            {" "}
            <FormLabel>Role Description</FormLabel>
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
            <Input type="date" />
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
              label="I Currently work here"
            />
          </Item>

          <FormLabel>Expected Amount in Salary</FormLabel>
          <Input
            placeholder="Amount"
            startDecorator={
              { dollar: "$", euro: "€", yen: "¥", pounds: "£" }[currency]
            }
            endDecorator={
              <React.Fragment>
                <Divider orientation="vertical" />
                <Select
                  variant="plain"
                  value={currency}
                  onChange={(_, value) => setCurrency(value)}
                  sx={{ mr: -1.5, "&:hover": { bgcolor: "transparent" } }}
                >
                  <Option value="dollar">US dollar</Option>
                  <Option value="euro">Euro</Option>
                  <Option value="yen">Japanese yen</Option>

                  <Option value="pounds">US dollar</Option>
                </Select>
              </React.Fragment>
            }
            sx={{ width: 300 }}
          />

          <Button color="primary" variant="solid" className="MUIButton">
            Save
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Work;
