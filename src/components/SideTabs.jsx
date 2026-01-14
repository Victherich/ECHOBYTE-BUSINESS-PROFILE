import styled from "styled-components";

const SideNav = styled.nav`
  position: fixed;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 12px;
  z-index: 1000;

  @media (max-width: 768px) {
    display: none;
  }
`;

const TabButton = styled.button`
  background: rgba(0,0,255,0.5);
  color: white;
  border: none;
  padding: 10px 14px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9rem;
  text-align: left;
  transition: all 0.3s ease;

  &:hover {
    background: #1d4ed8;
  }
`;

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "products", label: "Products" },
  { id: "technology", label: "Technology" },
  { id: "gallery", label: "Gallery" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export default function SideTabs() {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <SideNav>
      {sections.map((section) => (
        <TabButton key={section.id} onClick={() => handleScroll(section.id)}>
          {section.label}
        </TabButton>
      ))}
    </SideNav>
  );
}
