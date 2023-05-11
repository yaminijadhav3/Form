import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

export default function App() {
  const [data, setdata] = useState({
    Name: "",
    ContactNumber: "",
  });
  const handelSavefiled = (event, textMod) => {
    // const { value } = event?.target;
    // setdata((previousValue) => {
    //   return { ...previousValue, [textMod]: value };
    // });
    const {value}=event?.target;

    setdata((previousValue)=>{
    return({...previousValue,[textMod]:value})
      
    })
  };
  const printData = () => {
    console.log(data);
  };
  return (
    <Paper sx={{ height: "300px" }}>
      <Box>
        <TextField
          sx={{ p: 3 }}
          defaultValue={""}
          placeholder="Name"
          onChange={(e) => handelSavefiled(e, "Name")}
        />
        <TextField
          sx={{ p: 3 }}
          defaultValue={""}
          placeholder="ContactNumber"
          type="number"
          onChange={(e) => handelSavefiled(e, "ContactNumber")}
        />
        <Button sx={{mt: 4 }} onClick={printData}>
          Submit
        </Button>
             
      </Box>
    </Paper>
  );
}
