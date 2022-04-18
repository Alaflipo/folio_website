import * as React from "react";
import { Chip, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { DottedDivider } from "./InfoBlock";

export interface Strength {
  name: string;
  strength: number;
}

const greenColorRange = ["#c5e1a5", "#f1f8e9", "#c5e1a5", "#8bc34a"];

interface StrengthBlockProps {
  strengths: Strength[];
}

function StrengthsBlock(props: StrengthBlockProps) {
  return (
    <Box sx={{ mt: 2 }}>
      {props.strengths.map((strength) => (
        <Chip
          sx={{
            backgroundColor: greenColorRange[strength.strength],
            m: 0.5,
          }}
          label={
            <Typography variant="body1" color="primary.dark">
              {strength.name}
            </Typography>
          }
        />
      ))}
      <DottedDivider />
    </Box>
  );
}

export default StrengthsBlock;
