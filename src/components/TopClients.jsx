import styled from "styled-components";
import SadeKuku from '../Images/SadeKuku.jpeg'
import Cerens from '../Images/Cerens.jpeg'
import Kingsley from '../Images/Kingsley.jpeg'
import Glory from '../Images/Glory.jpeg'

const GalleryWrapper = styled.section`
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

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px;
`;

const GalleryCard = styled.div`
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid #e2e8f0;
  background: #f8fafc;
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
  object-position:top;
  display: block;
`;

const Caption = styled.div`
  padding: 14px 16px;
  font-size: 0.9rem;
  color: #475569;
  background: #ffffff;
`;

export default function TopClients() {
  return (
    <GalleryWrapper id='topclients'>
      <Container>
        <PageTitle>Our Top Clients</PageTitle>

     <PageIntro>
  This section highlights some of our valued clients and partners, showcasing the organizations that trust us to deliver innovative solutions, drive growth, and support their digital transformation journeys.
</PageIntro>

        <GalleryGrid>
          <GalleryCard>
            <GalleryImage
              src={Cerens}
              alt="Web development workspace"
            />
            <Caption><strong>CERENS ANONG</strong> <br/>
            Entrepreneur and Developer
            </Caption>
          </GalleryCard>

          <GalleryCard>
            <GalleryImage
              src={Kingsley}
              alt="Team working on software"
            />
            <Caption><strong>Kingsley Gbedzeker</strong><br/>
            Entrepreneur
            </Caption>
          </GalleryCard>

          <GalleryCard>
            <GalleryImage
              src={SadeKuku}
              alt="Mobile application usage"
            />
            <Caption><strong>Sade Kuku</strong><br/>
            Founder BWGF
            </Caption>
            
          </GalleryCard>

          <GalleryCard>
            <GalleryImage
              src={Glory}
              alt="Digital marketplace"
            />
            <Caption><strong>Glory Robinson</strong><br/>
            Founder GCF
            </Caption>
          
          </GalleryCard>

         
        </GalleryGrid>
      </Container>
    </GalleryWrapper>
  );
}
