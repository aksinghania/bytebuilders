/** @jsxImportSource theme-ui */

import theme from "@hackclub/theme";
import { Container, Box, Heading, Text, Image } from "theme-ui";
import Logo from "./assets/Logo.svg";
const Hero = () => (
  <Box
    sx={{ py: 5, textAlign: "center", color: "white" }}
    style={{
      background: "white",
      backgroundImage: "radial-gradient(#1F2D3D 1px, transparent 0)",
      backgroundSize: "40px 40px",
      backgroundPosition: "-19px -19px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      height: "50vh",
      color: "black",
      px: 4,
    }}
  >
    <Container>
      <Image src={Logo} sx={{ width: 80, mb: 3 }} />
      <Heading as="h1" sx={{ variant: "text.title", mb: 4 }}>
        ByteBuilders
      </Heading>
      <Text as="h1" sx={{ variant: "text.caption", mt: 1 }}>
        Unleashing creativity through hands on learning.
      </Text>
      <Text
        as="h2"
        sx={{
          variant: "text.subtitle",
          mt: 5,
          width: "100%",
          textAlign: "left",
        }}
      >
        We're a Student Group utilizing technology to improve human condition.
      </Text>
    </Container>
  </Box>
);

export default Hero;

// // Hero.js
// import React from "react";
// import { ThemeProvider, Box, Text, Image } from "theme-ui";
// import theme from "@hackclub/theme";
// import Logo from "./assets/Logo.svg";

// function Hero() {
//   return (
//     <>
//       <Box
//         sx={{
//           background: "white",
//           backgroundImage: "radial-gradient(black 1px, transparent 0)",
//           backgroundSize: "40px 40px",
//           backgroundPosition: "-19px -19px",
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           justifyContent: "center",
//           textAlign: "center",
//           height: "50vh",
//           color: "black",
//           px: 4,
//         }}
//       >
//         <Box sx={{ position: "relative", mb: 3 }}>
//           <Image src={Logo} alt="Hack Club Logo" sx={{ width: "300px" }} />
//         </Box>
//         <Text as="ultratitle" sx={{ fontSize: [4], maxWidth: "600px" }}>
//           ByteBuilders
//         </Text>
//         <Text as="subtitle" sx={{ fontSize: [2, 3], maxWidth: "600px" }}>
//           We are an innovation club
//         </Text>
//       </Box>
//     </>
//   );
// }

// export default Hero;
