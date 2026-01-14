import styled from "styled-components";

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
    <GalleryWrapper>
      <Container>
        <PageTitle>Our Top Clients</PageTitle>

        <PageIntro>
          A visual overview of our digital solutions, technology focus areas,
          and the environments where our products are designed and applied.
        </PageIntro>

        <GalleryGrid>
          <GalleryCard>
            <GalleryImage
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80"
              alt="Web development workspace"
            />
            <Caption>Web & Cloud Solutions Development</Caption>
          </GalleryCard>

          <GalleryCard>
            <GalleryImage
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80"
              alt="Team working on software"
            />
            <Caption>Building Scalable Digital Platforms</Caption>
          </GalleryCard>

          <GalleryCard>
            <GalleryImage
              src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80"
              alt="Mobile application usage"
            />
            <Caption>Mobile Application Solutions</Caption>
          </GalleryCard>

          <GalleryCard>
            <GalleryImage
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80"
              alt="Digital marketplace"
            />
            <Caption>Digital Store Platform</Caption>
          </GalleryCard>

          <GalleryCard>
            <GalleryImage
              src="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=900&q=80"
              alt="School technology"
            />
            <Caption>Academic & School Management System</Caption>
          </GalleryCard>

          <GalleryCard>
            <GalleryImage
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80"
              alt="Professional working on laptop"
            />
            <Caption>Portfolio Builder Platform</Caption>
          </GalleryCard>

          <GalleryCard>
            <GalleryImage
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80"
              alt="Cloud infrastructure"
            />
            <Caption>Cloud Infrastructure & Automation</Caption>
          </GalleryCard>

          <GalleryCard>
            <GalleryImage
              src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=900&q=80"
              alt="Software code"
            />
            <Caption>Software Engineering & AI Integration</Caption>
          </GalleryCard>
        </GalleryGrid>
      </Container>
    </GalleryWrapper>
  );
}
