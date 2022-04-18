import * as React from "react";
import { Button, ButtonProps, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";

import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PhoneIcon from "@mui/icons-material/Phone";
import CakeIcon from "@mui/icons-material/Cake";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import styled from "@emotion/styled";

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: "white",
  backgroundColor: "#396096",
  "&:hover": {
    backgroundColor: "#36455a",
  },
  margin: "5px",
}));

const contacts = [
  {
    icon: <AlternateEmailIcon />,
    text: "morrisboers@gmail.com",
  },
  {
    icon: <PhoneIcon />,
    text: "+31 6 44173901",
  },
  {
    icon: <LocationOnIcon />,
    text: "Franklin D Rooseveltlaan 161, 5625AW, Eindhoven",
  },
  {
    icon: <CakeIcon />,
    text: "11-08-1999, Haarlem",
  },
];

const websites = [
  {
    icon: <LinkedInIcon />,
    text: "Linkedin",
    href: "https://www.linkedin.com/in/morris-boers-761794173/",
  },
  {
    icon: <GitHubIcon />,
    text: "Github",
    href: "https://github.com/Alaflipo",
  },
];

function ContactInfo() {
  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{ flexWrap: "wrap", color: "#396096" }}
      >
        {contacts.map((contact) => (
          <Stack direction="row" spacing={1} sx={{ mr: 3 }}>
            {contact.icon}
            <Typography variant="body1">{contact.text}</Typography>
          </Stack>
        ))}
      </Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{ flexWrap: "wrap", color: "#396096" }}
      >
        {websites.map((website) => (
          <ColorButton href={website.href} startIcon={website.icon}>
            {website.text}
          </ColorButton>
        ))}
      </Box>
    </>
  );
}

export default ContactInfo;
