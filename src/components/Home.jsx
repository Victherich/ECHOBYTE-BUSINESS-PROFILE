import styled from "styled-components";
import CompanyLogo from "../Images/logo.jpeg"; // make sure to replace this with your actual logo path

const HomeWrapper = styled.section`
  min-height: 80vh;
  padding: 80px 60px;
  background: linear-gradient(135deg, #0f172a, #020617);
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content:center;
`;

const Content = styled.div`
  max-width: 900px;
  text-align: center; // center the logo and text nicely
`;

const Logo = styled.img`
  width: 150px;
  height: auto;
  margin-bottom: 20px;
  transition: transform 0.3s ease;
  border-radius:50%;

  &:hover {
    transform: scale(1.05); // subtle zoom on hover
  }

  @media (max-width: 768px) {
    width: 120px;
  }
`;

const CompanyName = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 16px;
  letter-spacing: 1px;
`;

const Tagline = styled.p`
  font-size: 1.2rem;
  line-height: 1.7;
  color: #cbd5f5;
  margin-bottom: 32px;
`;

const InfoGrid = styled.div`
  display: flex;
  // grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
  justify-content:center;
  align-items:center;
  flex-wrap:wrap;
`;

const InfoCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  padding: 20px;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const InfoTitle = styled.h4`
  font-size: 0.9rem;
  color: #94a3b8;
  margin-bottom: 6px;
`;

const InfoValue = styled.p`
  font-size: 1rem;
  font-weight: 500;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;
`;

const PrimaryButton = styled.a`
  padding: 14px 28px;
  background: #2563eb;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 500;
  transition: background 0.3s ease;

  &:hover {
    background: #1d4ed8;
  }
`;

const SecondaryButton = styled.a`
  padding: 14px 28px;
  border: 1px solid #2563eb;
  color: #2563eb;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background: #2563eb;
    color: white;
  }
`;

export default function Home() {
  return (
    <HomeWrapper id='home'>
      <Content>
        <Logo src={CompanyLogo} alt="Echobyte Concept Logo" />
        <CompanyName>ECHOBYTE CONCEPT</CompanyName>

        <Tagline>
         Building Web, Mobile, AI-powered and automated digital platforms that help
          businesses, professionals, and organizations improve productivity,
          visibility, and growth in the digital economy.
        </Tagline>

        <InfoGrid>
          <InfoCard>
            <InfoTitle>Founder</InfoTitle>
            <InfoValue>Victor Ndu</InfoValue>
          </InfoCard>

          <InfoCard>
            <InfoTitle>Established</InfoTitle>
            <InfoValue>2024</InfoValue>
          </InfoCard>

          <InfoCard>
            <InfoTitle>Registration No:</InfoTitle>
            <InfoValue>BN8277404</InfoValue>
          </InfoCard>

          <InfoCard>
            <InfoTitle>Location</InfoTitle>
            <InfoValue>Lagos, Nigeria</InfoValue>
          </InfoCard>

          <InfoCard>
            <InfoTitle>Focus Area</InfoTitle>
            <InfoValue>Web Platforms, Mobile Platforms, AI & Automation</InfoValue>
          </InfoCard>
       

         <InfoCard style={{textAlign:"left"}}>
            <InfoTitle>Contacts:</InfoTitle>
            <InfoValue>Phone: +234 706 348  0314</InfoValue>
            <InfoValue>Email: echobyteconcept@gmail.com</InfoValue>
            <InfoValue>Website: echobyteconcept.com</InfoValue>
          </InfoCard>


        </InfoGrid>

        {/* <ButtonGroup>
          <PrimaryButton href="/products">
            View Products & Solutions
          </PrimaryButton>

          <SecondaryButton href="/documents">
            Verification Documents
          </SecondaryButton>
        </ButtonGroup> */}
      </Content>
    </HomeWrapper>
  );
}
