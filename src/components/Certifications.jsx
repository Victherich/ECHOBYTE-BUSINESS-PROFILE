import { useState } from "react";
import styled from "styled-components";
import ct1 from '../Images/ct1.jpeg'
import ct2 from '../Images/ct2.jpeg'
import ct3 from '../Images/ct3.jpeg'
import ct4 from '../Images/ct4.jpeg'
import ct5 from '../Images/ct5.jpeg'


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
  object-fit: cover;
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
  object-fit: contain;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.4rem;
  cursor: pointer;
  float: right;
`;

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  const certificates = [
    {
      title: "KORA HACK 2.0 CERTIFICATION",
      thumbnail:
        ct1,
      full:
        ct1,
    },
    {
      title: "HACKOPS 1.0 CERTIFICATION",
      thumbnail:
        ct2,
      full:
        ct2,
    },
    {
      title: "THE CURVE BY KORA CERTIFICATION",
      thumbnail:
        ct5,
      full:
        ct5,
    },
    {
      title: "CBD PARTNERS CERTIFICATION",
      thumbnail:
        ct3,
      full:
        ct3,
    },
      {
      title: "CBD PARTNERS CERTIFICATION",
      thumbnail:
        ct4,
      full:
        ct4,
    },
  ];

  return (
    <CertificationsWrapper id='certifications'>
      <Container>
        <PageTitle>Our Certifications & Awards</PageTitle>

        <PageIntro>
          This section highlights professional certifications, training, and
          recognitions that support our technical expertise and commitment to
          continuous learning.
        </PageIntro>

        <Grid>
          {certificates.map((cert, index) => (
            <Card key={index} onClick={() => setSelectedCert(cert)}>
              <CardImage src={cert.thumbnail} alt={cert.title} />
              <CardCaption>{cert.title}</CardCaption>
            </Card>
          ))}
        </Grid>

        {selectedCert && (
          <ModalOverlay onClick={() => setSelectedCert(null)}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
              <CloseButton onClick={() => setSelectedCert(null)}>
                ✕
              </CloseButton>
              <ModalImage src={selectedCert.full} alt={selectedCert.title} />
            </ModalContent>
          </ModalOverlay>
        )}
      </Container>
    </CertificationsWrapper>
  );
}
