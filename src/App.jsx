/** @jsxImportSource theme-ui */

import { Container, Box, Heading, Text, Image, Grid } from "theme-ui";
import Logo from "./assets/Logo.svg";
import One from "./assets/1.png";
import Two from "./assets/2.png";
import Three from "./assets/3.png";

import member1Image from "./assets/Logo.svg";
import member2Image from "./assets/Logo.svg";
import member3Image from "./assets/Logo.svg";
import { useEffect, useState } from "react";

const dottedBackgroundStyle = {
  background: "white",
  backgroundImage: "radial-gradient(#1F2D3D 1px, #FBFBFB 0)",
  backgroundSize: "40px 40px",
  backgroundPosition: "-19px -19px",
  display: "flex",
};

const scrollingContent = `Computer Science / Internet of Things / Robotics / Automated Systems /
Artificial Intelligence / Machine Learning / Cybersecurity / Data Science /
Software Development / Web Development / Mobile App Development /
Game Development / Virtual Reality / Augmented Reality /
Blockchain Technology / Cloud Computing / Big Data /
Networking / Hardware Engineering / Embedded Systems /
Quantum Computing / Digital Signal Processing / Image Processing /
Natural Language Processing / Computational Biology / Bioinformatics /
Human-Computer Interaction / Operating Systems / Database Systems /
Distributed Systems / High-Performance Computing / Parallel Computing /
Algorithm Design / Theoretical Computer Science / Computational Geometry /
Computer Vision / Autonomous Vehicles / Drone Technology /
Smart Cities / Smart Homes / Edge Computing /
DevOps / Continuous Integration / Continuous Deployment /
IT Infrastructure / Software Testing / Quality Assurance /
Project Management / Agile Methodologies / Scrum /
Tech Entrepreneurship / Startups / Tech Innovations /
Tech Ethics / Digital Privacy / Intellectual Property /
Open Source Software / Community Projects / Hackathons /
Workshops / Seminars / Guest Lectures /
Student Projects / Research Opportunities / Collaboration /
Networking Events / Mentorship Programs /
Industry Partnerships / Internships /
Competitions / Awards / Scholarships /
Outreach Programs / Volunteer Opportunities /
Club Meetings / Social Events / Team Building Activities`;

const App = () => {
  return (
    <>
      <Hero />
    </>
  );
};
export default App;
const Hero = () => {
  const [splited, setSplited] = useState([]);
  const splitContent = (content) => {
    const words = content.split(" / ");
    const partLength = Math.ceil(words.length / 3);
    const parts = [];

    for (let i = 0; i < 3; i++) {
      parts.push(words.slice(i * partLength, (i + 1) * partLength).join(" / "));
    }

    return parts;
  };
  useEffect(() => {
    setSplited(splitContent(scrollingContent));
  }, []);
  return (
    <>
      <Box
        sx={{ py: 5, textAlign: "center", color: "white" }}
        style={{
          ...dottedBackgroundStyle,
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          height: "40vh",
          color: "black",
          px: 4,
        }}
      >
        <Image src={Logo} sx={{ width: 200, mb: 3, mx: "auto" }} />
        <Heading as="h1" sx={{ variant: "text.title", mb: 4 }}>
          ByteBuilders
        </Heading>

        <Text
          as="h2"
          sx={{
            variant: "text.subtitle",
            width: "100%",
            fontSize: "2.2rem",
          }}
        >
          We're a student club utilizing technology to improve human condition.
        </Text>
      </Box>
      <Container>
        <Innovate />

        {splited.map((a, indx) => (
          <ScrollingText content={a} />
        ))}
        <div href="mailto:asinghania2@jpischool.com" className="flex mt-5">
          <svg
            className="mt-3 mr-5"
            width="35"
            height="35"
            viewBox="0 0 14 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2 14H4V16H2V14Z" fill="#FA402B"></path>
            <path d="M0 12H2V14H0V12Z" fill="#FA402B"></path>
            <path d="M0 10H2V12H0V10Z" fill="#FA402B"></path>
            <path d="M0 8H2V10H0V8Z" fill="#FA402B"></path>
            <path d="M0 6H2V8H0V6Z" fill="#FA402B"></path>
            <path d="M0 4H2V6H0V4Z" fill="#FA402B"></path>
            <path d="M0 2H2V4H0V2Z" fill="#FA402B"></path>
            <path d="M2 0H4V2H2V0Z" fill="#FA402B"></path>
            <path d="M4 0H6V2H4V0Z" fill="#FA402B"></path>
            <path d="M6 0H8V2H6V0Z" fill="#FA402B"></path>
            <path d="M8 0H10V2H8V0Z" fill="#FA402B"></path>
            <path d="M4 14H6V16H4V14Z" fill="#FA402B"></path>
            <path d="M6 14H8V16H6V14Z" fill="#FA402B"></path>
            <path d="M8 14H10V16H8V14Z" fill="#FA402B"></path>
            <path d="M12 14H14V16H12V14Z" fill="#FA402B"></path>
            <path d="M8 10H10V12H8V10Z" fill="#FA402B"></path>
            <path d="M10 12H12V14H10V12Z" fill="#FA402B"></path>
            <path d="M10 16H12V18H10V16Z" fill="#FA402B"></path>
            <path d="M8 18H10V20H8V18Z" fill="#FA402B"></path>
          </svg>
          <Heading
            as="a"
            href="mailto:asinghania2@jpischool.com"
            sx={{
              variant: "text.eyebrow",
              display: "inline-block",
              fontSize: "3rem",
              fontWeight: "bold",
            }}
          >
            JOIN NOW: asinghania2@gmail.com
          </Heading>
        </div>
      </Container>
    </>
  );
};

const InnovateBox = ({ url, text, subtitle }) => (
  <Box sx={{ p: 3, borderRadius: 8 }}>
    <Image
      src={url}
      sx={{ mb: 3, ...dottedBackgroundStyle, borderRadius: "5%" }}
    />
    <Heading
      as="p"
      sx={{ variant: "text.title", fontSize: "2.1rem", textAlign: "left" }}
    >
      {text}
    </Heading>
    <Text
      as="p"
      sx={{
        variant: "text.caption",
        fontSize: "1.3rem",
        textAlign: "left",
        fontWeight: "600",
        mt: 2,
      }}
    >
      {subtitle}
    </Text>
  </Box>
);

const Innovate = () => (
  <Box sx={{ py: 5, textAlign: "center", color: "white" }}>
    <Heading
      as="h2"
      sx={{
        variant: "text.title",
        mb: 4,
        fontSize: "2.7rem",
        fontWeight: "500",
      }}
    >
      We innovate by
    </Heading>
    <Grid gap={4} columns={[1, 3]} sx={{ textAlign: "center" }}>
      <InnovateBox
        url={One}
        text={"Empathizing"}
        subtitle={"We recognize problems in the lives of others."}
      />
      <InnovateBox
        url={Two}
        text={"Building"}
        subtitle={"We research, design, and develop digital solutions."}
      />
      <InnovateBox
        url={Three}
        text={"Launching"}
        subtitle={
          "Finally, we offer our solution to users and continue to iterate."
        }
      />
    </Grid>
  </Box>
);
const ScrollingText = ({ className, content, fullWidth = true }) => {
  return (
    <div
      sx={{ textAlign: "center", color: "white" }}
      className={`overflow-hidden whitespace-nowrap box-border ${
        fullWidth ? "w-full" : "w-4/12"
      } ${className}`}
    >
      <div
        as="p"
        sx={{
          variant: "text.eyebrow",

          display: "inline-block",
          fontSize: 6,
          fontWeight: "bold",
        }}
        className="inline-block animate-scroll text-blue-500 font-sans text-lg"
      >
        {content}
      </div>
    </div>
  );
};
