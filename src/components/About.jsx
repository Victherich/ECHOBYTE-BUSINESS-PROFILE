import styled from "styled-components";

const AboutWrapper = styled.section`
  padding: 80px 60px;
  background: #f8fafc;
  color: #0f172a;
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const PageTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 20px;
`;

const IntroText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #334155;
  margin-bottom: 40px;
`;

const Section = styled.div`
  margin-bottom: 50px;
`;

const SectionTitle = styled.h3`
  font-size: 1.6rem;
  margin-bottom: 12px;
`;

const Text = styled.p`
  font-size: 1rem;
  line-height: 1.8;
  color: #475569;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px;
  margin-top: 30px;
`;

const Card = styled.div`
  background: white;
  padding: 30px;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
`;

const CardTitle = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

const CardText = styled.p`
  font-size: 0.95rem;
  line-height: 1.7;
  color: #64748b;
`;

const Highlight = styled.span`
  color: #2563eb;
  font-weight: 600;
`;

export default function About() {
  return (
    <AboutWrapper id='about'>
      <Container>
        <PageTitle>About ECHOBYTE CONCEPT</PageTitle>

        <IntroText>
          <Highlight>ECHOBYTE CONCEPT</Highlight> is a technology-driven venture
          focused on building scalable, Web, Mobile, AI-powered, and automated digital
          solutions that help businesses, professionals, and organizations
          operate more efficiently and grow in today’s digital economy.
        </IntroText>

        <Section>
          <SectionTitle>Our Story</SectionTitle>
          <Text>
            ECHOBYTE CONCEPT was founded out of a passion for technology and a
            clear understanding of the challenges faced by businesses in
            accessing smart and affordable digital tools. Through hands-on
            experience in software development, cloud engineering, and emerging
            AI technologies, we identified critical gaps in automation,
            visibility, and productivity across many small and growing
            enterprises.
          </Text>
        </Section>

        <Section>
          <SectionTitle>What We Do</SectionTitle>
          <Text>
            We design and develop custom web and mobile applications, cloud-based
            systems, and intelligent platforms that integrate automation and
            artificial intelligence. Our solutions are built to be scalable,
            secure, and user-focused—helping our clients reduce manual effort,
            improve operational efficiency, and achieve sustainable growth.
          </Text>
        </Section>

        <Section>
          <SectionTitle>Mission, Vision & Values</SectionTitle>

          <CardGrid>
            <Card>
              <CardTitle>Our Mission</CardTitle>
              <CardText>
                To empower businesses and professionals with smart, accessible,
                and scalable digital solutions that drive efficiency and
                innovation.
              </CardText>
            </Card>

            <Card>
              <CardTitle>Our Vision</CardTitle>
              <CardText>
                To become a trusted technology partner for businesses across
                Africa by delivering impactful AI-driven digital platforms.
              </CardText>
            </Card>

            <Card>
              <CardTitle>Our Values</CardTitle>
              <CardText>
                Innovation, integrity, reliability, continuous learning, and a
                strong commitment to delivering real value to our users.
              </CardText>
            </Card>
          </CardGrid>
        </Section>

        <Section>
          <SectionTitle>Why ECHOBYTE CONCEPT</SectionTitle>
          <Text>
            We combine technical expertise with a deep understanding of business
            needs. Our approach focuses on practical solutions that solve real
            problems, rather than unnecessary complexity. This allows us to
            deliver digital products that are both effective and easy to adopt.
          </Text>
        </Section>
      </Container>
    </AboutWrapper>
  );
}
