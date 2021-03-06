import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import "./cityPlate.css";
import { FormLabel, NativeSelect } from "@mui/material";
import plates from "../plates";

function CityPlate() {
  const [newPlate, setNewPlate] = useState();

  return (
    <Box className="box">
      <div className="formLabel">
        <FormLabel className="formLabel">
          <h3>City Plate:</h3>
          {newPlate}
        </FormLabel>
      </div>
      <FormControl className="form">
        <InputLabel>City Plate</InputLabel>
        <NativeSelect onChange={(e) => setNewPlate(e.target.value)}>
          {plates.data.map((plate) => (
            <option key={plate.id} value={plate.il_adi}>
              {plate.plaka_kodu}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </Box>
  );
}

export default CityPlate;
