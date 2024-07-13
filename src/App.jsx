/** @jsxImportSource theme-ui */

import { Container, Box, Heading, Text, Image, Grid } from "theme-ui";
import Logo from "./assets/Logo.svg";
import One from "./assets/1.png";
import Two from "./assets/2.png";
import Three from "./assets/3.png";

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

const Hero = () => (
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
      <Container>
        <Image src={Logo} sx={{ width: 200, mb: 3 }} />
        <Heading as="h1" sx={{ variant: "text.title", mb: 4 }}>
          ByteBuilders
        </Heading>

        <Text
          as="h2"
          sx={{
            variant: "text.subtitle",
            width: "100%",
          }}
        >
          We're a Student Group utilizing technology to improve human condition.
        </Text>
      </Container>
    </Box>
    <Innovate />
    {/* <ScrollingText content={}/> */}
    {console.log(scrollingContent.split(" / "))}
    {}
  </>
);

export default Hero;

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
  <Box sx={{ bg: "black", py: 5, textAlign: "center", color: "white" }}>
    <Container>
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
    </Container>
  </Box>
);
const ScrollingText = ({ content }) => {
  return (
    <div className="overflow-hidden whitespace-nowrap box-border w-full bg-black">
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
