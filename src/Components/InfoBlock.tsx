import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Divider, List, ListItem, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import styled from "@emotion/styled";

let theme = createTheme({
  palette: {
    text: {
      primary: "#36455a",
      secondary: "#396096",
    },
  },
});

export const DottedDivider = styled.hr`
  margin-top: 20px;
  border-top: dashed 1px;
`;

const StyledList = styled.ul`
  margin-top: 12px;
`;

export interface InfoProps {
  title: string;
  university: string;
  location: string;
  date: string;
  explanation?: string;
  specialties: string[];
}

function InfoBlock(props: InfoProps) {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ mt: 2 }}>
        <Typography variant="h5" sx={{ color: "text.secondary" }}>
          {props.title}
        </Typography>
        <Typography variant="subtitle1">
          <b>{props.university}</b>
        </Typography>
        <Stack direction="row" spacing={2} sx={{ mt: 0.3 }}>
          <CalendarTodayIcon fontSize="small" />
          <Typography variant="body1">{props.date}</Typography>
          <LocationOnIcon fontSize="small" />
          <Typography variant="body1">{props.location}</Typography>
        </Stack>
        <Typography variant="subtitle1" sx={{ mt: 1, lineHeight: 1.5 }}>
          {props.explanation ? props.explanation : null}
        </Typography>
        <StyledList>
          {props.specialties.map((specialty) => (
            <li>{specialty}</li>
          ))}
        </StyledList>
      </Box>
      <DottedDivider></DottedDivider>
    </ThemeProvider>
  );
}

export default InfoBlock;
