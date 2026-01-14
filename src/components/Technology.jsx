import styled from "styled-components";

const TechnologyWrapper = styled.section`
  padding: 80px 60px;
  background: #f8fafc;
  color: #0f172a;
`;

const Container = styled.div`
  max-width: 1100px;
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

const Section = styled.div`
  margin-bottom: 60px;
`;

const SectionTitle = styled.h3`
  font-size: 1.6rem;
  margin-bottom: 14px;
`;

const SectionText = styled.p`
  font-size: 1rem;
  line-height: 1.8;
  color: #475569;
  max-width: 900px;
`;

const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 24px;
  margin-top: 30px;
`;

const TechCard = styled.div`
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 24px;
`;

const TechTitle = styled.h4`
  font-size: 1.1rem;
  margin-bottom: 8px;
`;

const TechText = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  color: #64748b;
`;

export default function Technology() {
  return (
    <TechnologyWrapper id='technology'>
      <Container>
        <PageTitle>Technology & Innovation</PageTitle>

        <PageIntro>
          We use modern, reliable, and scalable technologies to build digital
          products that are easy to use, secure, and capable of growing with our
          clients’ needs.
        </PageIntro>

        <Section>
          <SectionTitle>How We Build Our Solutions</SectionTitle>
          <SectionText>
            Our development approach focuses on simplicity, automation, and
            long-term scalability. We design systems that reduce manual work,
            improve efficiency, and can easily be expanded as businesses grow.
            Each solution is built with performance, security, and user
            experience in mind.
          </SectionText>
        </Section>

        <Section>
          <SectionTitle>Core Technology Stack</SectionTitle>

          <TechGrid>
            <TechCard>
              <TechTitle>Frontend Development</TechTitle>
              <TechText>
               <ul>
                <li>REACT</li>
                <li>NEXT JS</li>
                
               </ul>
              </TechText>
            </TechCard>

            <TechCard>
              <TechTitle>Backend Systems</TechTitle>
              <TechText>
                 <ul>
                <li>EXPRESS</li>
                <li>FIREBASE</li>
                <li>PHP</li>
                
               </ul>
              </TechText>
            </TechCard>

            <TechCard>
              <TechTitle>Cloud/Hosting Infrastructure</TechTitle>
              <TechText>
                 <ul>
                <li>VERCEL</li>
                <li>NETLIFY</li>
                <li>AWS</li>
                <li>GCP</li>
                <li>CPANEL</li>
               </ul>
              </TechText>
            </TechCard>

            <TechCard>
              <TechTitle>AI & Automation</TechTitle>
              <TechText>
                We integrate automation and AI tools to reduce repetitive tasks,
                improve decision-making, and enhance productivity.
              </TechText>
            </TechCard>

            <TechCard>
              <TechTitle>Databases & Storage</TechTitle>
              <TechText>
                <ul>
                <li>MYSQL</li>
                <li>MONGO DB</li>
                <li>FIREBASE FIRESTORE</li>
                <li>FIREBASE REAL-TIME DB</li>
                
               </ul>
              </TechText>
            </TechCard>

            <TechCard>
              <TechTitle>Security & Reliability</TechTitle>
              <TechText>
                We follow best practices to protect data, manage access, and
                ensure system stability and reliability.
              </TechText>
            </TechCard>
          </TechGrid>
        </Section>

        <Section>
          <SectionTitle>Why Our Technology Works</SectionTitle>
          <SectionText>
            By combining modern tools with practical problem-solving, we deliver
            solutions that are easy to adopt, cost-effective, and capable of
            supporting long-term business growth.
          </SectionText>
        </Section>
      </Container>
    </TechnologyWrapper>
  );
}
