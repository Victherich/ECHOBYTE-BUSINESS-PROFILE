import styled from "styled-components";

const FooterWrapper = styled.footer`
  background: #020617;
  color: #e5e7eb;
  padding: 60px 40px 30px;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 40px;
  margin-bottom: 40px;
`;

const ColumnTitle = styled.h4`
  font-size: 1.1rem;
  margin-bottom: 16px;
  color: #ffffff;
`;

const Text = styled.p`
  font-size: 0.95rem;
  line-height: 1.7;
  color: #cbd5f5;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
  font-size: 0.95rem;
`;

const Link = styled.a`
  color: #cbd5f5;
  text-decoration: none;

  &:hover {
    color: #2563eb;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 14px;
  margin-top: 12px;
`;

const SocialIcon = styled.a`
  padding: 8px 12px;
  border: 1px solid #334155;
  border-radius: 6px;
  color: #cbd5f5;
  font-size: 0.9rem;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: #2563eb;
    color: white;
    border-color: #2563eb;
  }
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #1e293b;
  margin-bottom: 20px;
`;

const BottomText = styled.p`
  font-size: 0.85rem;
  text-align: center;
  color: #94a3b8;
`;

export default function Footer() {
  return (
    <FooterWrapper id='contact'>
      <Container>
        <FooterGrid>
          {/* About */}
          <div>
            <ColumnTitle>ECHOBYTE CONCEPT</ColumnTitle>
            <Text>
              We build simple, scalable, and AI-powered digital solutions that
              help businesses, professionals, and organizations work better,
              grow faster, and compete confidently in the digital economy.
            </Text>
          </div>

          {/* Contact */}
          <div>
            <ColumnTitle>Contact</ColumnTitle>
            <List>
              <ListItem>Email: info@echobyteconcept.com</ListItem>
              <ListItem>Phone: +234 XXX XXX XXXX</ListItem>
              <ListItem>Location: Nigeria</ListItem>
            </List>
          </div>

          {/* Links */}
          <div>
            <ColumnTitle>Quick Links</ColumnTitle>
            <List>
              <ListItem>
                <Link href="/about">About Us</Link>
              </ListItem>
              <ListItem>
                <Link href="/products">Products</Link>
              </ListItem>
              <ListItem>
                <Link href="/technology">Technology</Link>
              </ListItem>
              <ListItem>
                <Link href="/gallery">Gallery</Link>
              </ListItem>
              <ListItem>
                <Link href="/certifications">Certifications</Link>
              </ListItem>
            </List>
          </div>

          {/* Social */}
          <div>
            <ColumnTitle>Connect With Us</ColumnTitle>
            <SocialLinks>
              <SocialIcon href="https://linkedin.com" target="_blank">
                LinkedIn
              </SocialIcon>
              <SocialIcon href="https://twitter.com" target="_blank">
                X (Twitter)
              </SocialIcon>
              <SocialIcon href="https://github.com" target="_blank">
                GitHub
              </SocialIcon>
            </SocialLinks>
          </div>
        </FooterGrid>

        <Divider />

        <BottomText>
          © {new Date().getFullYear()} ECHOBYTE CONCEPT. All rights reserved.
          <br />
          Empowering growth through technology, automation, and innovation.
        </BottomText>
      </Container>
    </FooterWrapper>
  );
}
