import styled from "@emotion/styled";
import { Chip, Divider, Icon, Stack, Typography } from "@mui/material";
import { Box, BoxProps } from "@mui/system";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import BoltIcon from "@mui/icons-material/Bolt";
import React, { Component } from "react";
import InfoBlock, { DottedDivider, InfoProps } from "../Components/InfoBlock";
import NavBar from "../Components/NavBar";
import StrengthsBlock, { Strength } from "../Components/StrengthsBlock";
import {
  education,
  experience,
  strengths,
  strengthsLanguages,
  strengthsSoftware,
} from "./Data";
import ContactInfo from "../Components/ContactInfo";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { orange } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#396096",
      dark: "#36455a",
    },
    secondary: {
      main: orange[500],
    },
  },
});

type styledBoxProps = BoxProps & { orange?: boolean };

const CVBlock = styled(Box)`
  background-color: white;
  color: #36455a;
  padding: 50px;
  allign: horizontal;
  border-radius: 35px;
  border: 15px solid #36455a;
  border-top: 5px solid #36455a;
  border-bottom: 5px solid #36455a;
`;

const Card = styled(Box)`
  border: 10px solid
    ${(props: styledBoxProps) => (props.orange ? orange[500] : "#36455a")};
  border-top: 0px;
  border-bottom: 0px;
  background-color: ${(props: styledBoxProps) =>
    props.orange ? orange[500] : "#36455a"};
  border-radius: 10px;
  align-items: center;
  flex-direction: column;
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 900px;
`;

const Circle = styled(Box)`
  background-color: white;
  padding: 10px;
  allign: horizontal;
  border-radius: 100px;
  border: 10px solid ${orange[500]};
`;

function CV() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar current="cv" />
      <Box
        alignItems="center"
        flexDirection={"column"}
        display="flex"
        justifyContent="center"
      >
        <Circle />
        <Box
          sx={{ height: 100, width: 10, backgroundColor: "secondary.main" }}
        />
        <CVBlock sx={{ maxWidth: 800, width: 1, textAlign: "center" }}>
          <Typography variant="h3" color="primary.dark">
            {"MORRIS BOERS"}
          </Typography>
          <Typography variant="subtitle1" color="primary.main">
            <b>{"Student Computer Science and Psychology & Technology"}</b>
          </Typography>
          <ContactInfo />
          <Typography variant="body1" sx={{ mt: 2 }}>
            {
              "My goal is to make a positive impact on the future. With my multidisciplinary background and broad interest I hope to design and develop products that can contribute something meaningful to this world. Designing smart and creative solutions to impactful problems is my mission and I hope that a master in Industrial Design will help me achieve that mission.  "
            }
          </Typography>
        </CVBlock>
        <Box
          sx={{ height: 100, width: 10, backgroundColor: "secondary.main" }}
        />
        {/* <Card orange={true}> */}
        <CVBlock sx={{ maxWidth: 800, width: 1 }}>
          <Stack direction="row" spacing={2} sx={{ mt: 0.3 }}>
            <SchoolIcon fontSize="large" sx={{ mt: -0.3, mb: 1 }} />
            <Typography variant="h5" color="primary.dark">
              {"EDUCATION"}
            </Typography>
          </Stack>

          <Divider color="primary.dark" />
          {education.map((edu) => (
            <InfoBlock
              title={edu.title}
              university={edu.university}
              date={edu.date}
              location={edu.location}
              specialties={edu.specialties}
            ></InfoBlock>
          ))}
        </CVBlock>
        {/* </Card> */}
        <Box
          sx={{ height: 100, width: 10, backgroundColor: "secondary.main" }}
        />
        {/* <Card> */}
        <CVBlock sx={{ maxWidth: 800, width: 1 }}>
          <Stack direction="row" spacing={2} sx={{ mt: 0.3 }}>
            <WorkIcon fontSize="large" sx={{ mt: -0.3, mb: 1 }} />
            <Typography variant="h5" color="primary.dark">
              {"Experience"}
            </Typography>
          </Stack>
          <Divider color="primary.dark" />
          {experience.map((exp) => (
            <InfoBlock
              title={exp.title}
              university={exp.university}
              date={exp.date}
              location={exp.location}
              explanation={exp.explanation}
              specialties={exp.specialties}
            ></InfoBlock>
          ))}
        </CVBlock>
        {/* </Card> */}
        <Box
          sx={{ height: 100, width: 10, backgroundColor: "secondary.main" }}
        />
        {/* <Card orange={true}> */}
        <CVBlock sx={{ maxWidth: 800, width: 1 }}>
          <Stack direction="row" spacing={2} sx={{ mt: 0.3 }}>
            <BoltIcon fontSize="large" sx={{ mt: -0.3, mb: 1 }} />
            <Typography variant="h5" color="primary.dark">
              {"Strengths"}
            </Typography>
          </Stack>
          <Divider color="primary.dark" />
          <StrengthsBlock strengths={strengths} />
          <StrengthsBlock strengths={strengthsSoftware} />
          <StrengthsBlock strengths={strengthsLanguages} />
        </CVBlock>
        {/* </Card> */}
      </Box>
    </ThemeProvider>
  );
}

export default CV;
