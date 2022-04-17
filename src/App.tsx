import { Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import NavBar from "./Components/NavBar";

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar current="home" />
      <Stack direction="row" spacing={0} justifyContent="center">
        <Box
          sx={{
            width: 1,
            background: "#172937",
          }}
        >
          <Typography
            variant="h1"
            color="common.white"
            sx={{
              m: 8,
            }}
          >
            Morris <br /> Boers
          </Typography>
        </Box>
        <Box
          component="img"
          sx={{
            height: 1,
            width: 700,
            maxWidth: "50%",
            // background:
            //   "linear-gradient(to right, red, green, url('../public/profile_pic.jpeg'))",
          }}
          alt="The house from the offer."
          src="./profile_pic.jpeg"
        />
      </Stack>
      <Typography
        variant="h5"
        color="text.primary"
        align="center"
        sx={{ m: 4 }}
      >
        HI THERE
      </Typography>
      <Box alignItems="center" display="flex" justifyContent="center">
        <Typography
          variant="body1"
          color="text.secondary"
          align="center"
          sx={{ m: 4, maxWidth: 700 }}
        >
          Welcome to my portfolio website. <br />
          My name is Morris Boers and I am currently doing a double bachelors in
          Computer Science and Psychology & Technology. Because I will be
          finishing up my bachelors this year, I am looking forward to a new
          challenge during my master's program. <br />
          As a person I see myself as a jack of all trades. I have a broad
          interest in many different fields and have a very multidisciplinary
          oriented foccus. There is a lot to learn from everyone and everything
          around us and I am always eager to discover something new that will
          excite me. I am especially interested in exploring the connection
          between humans and machines, not only in their interaction but also
          their similarities. By combining my technical knowledge about machines
          and my social understanding of humans I hope to create something that
          can make a positive impact on our future. <br />
          During my studies I have followed courses in psychology, computer
          science, artificial intelligence, data science and cognitive sciences.
          Having knowledge in these areas is something that excites me but in
          the end I want to do something with this knowledge. The one thing I
          feel I am missing in my studies up to this point is knowledge about
          design. I believe that when you want to create and develop something,
          good design is not only one of the most crucial parts but also one of
          the most difficult parts. My dream is to bring my multidisciplinary
          knowledge together in design. For this reason I am very interested in
          doing the industrial design master with focus on the research, design
          and development track in combination with a master in data science and
          artificial intelligence at the TU/e. <br />
        </Typography>
      </Box>
    </ThemeProvider>
  );
}

export default App;
