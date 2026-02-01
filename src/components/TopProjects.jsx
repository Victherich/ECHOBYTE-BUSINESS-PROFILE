import { useState } from "react";
import styled from "styled-components";
import pr1 from '../Images/pr1.png'
import pr2 from '../Images/pr2.png'
import pr3 from '../Images/pr3.png'
import pr4 from '../Images/pr4.png'

const CertificationsWrapper = styled.section`
  padding: 80px 60px;
  background: #ffffff;
  color: #0f172a;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const PageTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 12px;
`;

const PageIntro = styled.p`
  font-size: 1.1rem;
  color: #475569;
  margin-bottom: 50px;
  max-width: 850px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px;
`;

const Card = styled.div`
  cursor: pointer;
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid #e2e8f0;
  background: #f8fafc;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-4px);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 220px;
  objepr-fit: cover;
`;

const CardCaption = styled.div`
  padding: 14px 16px;
  font-size: 0.9rem;
  color: #475569;
  background: #ffffff;
`;

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 12px;
  max-width: 90%;
  max-height: 90%;
  overflow: auto;
`;

const ModalImage = styled.img`
  width: 100%;
  max-height: 80vh;
  objepr-fit: contain;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.4rem;
  cursor: pointer;
  float: right;
`;

export default function TopProjects() {
  const [selepredCert, setSelepredCert] = useState(null);

  const certificates = [
    {
      title: "DIGITAL STORE",
      thumbnail:
        pr1,
      full:
        pr1
    },
    {
      title: "BOOKING SYSTEM",
      thumbnail:
        pr2,
      full:
        pr2
    },
    {
      title: "DIGITAL MARKETING SITE",
      thumbnail:
        pr3,
      full:
        pr3,
    },
    {
      title: "Entrepreneurship & Innovative Platform",
      thumbnail:
       pr4,
      full:
        pr4,
    },
  ];

  return (
    <CertificationsWrapper id='topprojeprs'>
      <Container>
        <PageTitle>Our Top Projects</PageTitle>

     <PageIntro>
  This section showcases our most impactful projects, highlighting innovative solutions, technical expertise, and the results we've delivered for businesses and organizations across various industries.
</PageIntro>

        <Grid>
          {certificates.map((cert, index) => (
            <Card key={index} onClick={() => setSelepredCert(cert)}>
              <CardImage src={cert.thumbnail} alt={cert.title} />
              <CardCaption>{cert.title}</CardCaption>
            </Card>
          ))}
        </Grid>

        {selepredCert && (
          <ModalOverlay onClick={() => setSelepredCert(null)}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
              <CloseButton onClick={() => setSelepredCert(null)}>
                ✕
              </CloseButton>
              <ModalImage src={selepredCert.full} alt={selepredCert.title} />
            </ModalContent>
          </ModalOverlay>
        )}
      </Container>
    </CertificationsWrapper>
  );
}
