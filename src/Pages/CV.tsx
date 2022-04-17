import styled from "@emotion/styled";
import { Chip, Divider, Icon, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
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

const CVBlock = styled(Box)`
  background-color: white;
  color: #36455a;
  padding: 50px;
  allign: horizontal;
`;

function CV() {
  return (
    <React.Fragment>
      <NavBar current="cv" />
      <Box
        alignItems="center"
        flexDirection={"column"}
        display="flex"
        justifyContent="center"
      >
        <CVBlock sx={{ maxWidth: 800, width: 1 }}>
          <Typography variant="h3" color="#36455a">
            {"MORRIS BOERS"}
          </Typography>
          <Typography variant="subtitle1" color="#396096">
            <b>{"Student Computer Science and Psychology & Technology"}</b>
          </Typography>
          <Typography variant="body1">{"My mission is to "}</Typography>
        </CVBlock>
        <CVBlock sx={{ maxWidth: 800, width: 1 }}>
          <Stack direction="row" spacing={2} sx={{ mt: 0.3 }}>
            <SchoolIcon fontSize="large" sx={{ mt: -0.3, mb: 1 }} />
            <Typography variant="h5" color="#36455a">
              {"EDUCATION"}
            </Typography>
          </Stack>

          <Divider color="#36455a" />
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
        <CVBlock sx={{ maxWidth: 800, width: 1 }}>
          <Stack direction="row" spacing={2} sx={{ mt: 0.3 }}>
            <WorkIcon fontSize="large" sx={{ mt: -0.3, mb: 1 }} />
            <Typography variant="h5" color="#36455a">
              {"Experience"}
            </Typography>
          </Stack>
          <Divider color="#36455a" />
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
        <CVBlock sx={{ maxWidth: 800, width: 1 }}>
          <Stack direction="row" spacing={2} sx={{ mt: 0.3 }}>
            <BoltIcon fontSize="large" sx={{ mt: -0.3, mb: 1 }} />
            <Typography variant="h5" color="#36455a">
              {"Strengths"}
            </Typography>
          </Stack>
          <Divider color="#36455a" />
          <StrengthsBlock strengths={strengths} />
          <StrengthsBlock strengths={strengthsSoftware} />
          <StrengthsBlock strengths={strengthsLanguages} />
        </CVBlock>
      </Box>
    </React.Fragment>
  );
}

export default CV;
