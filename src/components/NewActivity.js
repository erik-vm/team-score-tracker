import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
//import Button from "@mui/material/Button";
import './NewActivity.css';

/*const styles = {
  center: {
    marginLeft: "auto",
    marginRight: "auto"
  }
}*/
export default function BasicTextFields() {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <h1 style={{ display: "flex", justifyContent: "center" }}>
        Create Activity
      </h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <TextField
          id="outlined-basic"
          label="Activity Name"
          variant="outlined"
        ></TextField>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }} size="small">
        <TextField
          id="standard-multiline-static"
          label="Description"
          multiline
          rows={4}
          defaultValue=""
          variant="outlined"
        />
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Stack spacing={1} direction="row">
          
        </Stack>
        <div id="button">
                <button className="description"> <h2>Add</h2></button>
            </div>
      </div>
    </Box>
  );
}
