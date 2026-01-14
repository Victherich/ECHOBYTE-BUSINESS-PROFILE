import styled from "styled-components";

const SideNav = styled.nav`
  position: fixed;
  top: 50%;
  right: 20px;
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
  background: rgba(0,0,255,0.3);
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.7rem;
  text-align: left;
  transition: all 0.3s ease;

  &:hover {
    background: #1d4ed8;
  }
`;

const sections = [
  { id: "home", label: "Intro" },
  { id: "about", label: "About" },
  { id: "products", label: "Products" },
   { id: "founder", label: "Founder" },
  { id: "technology", label: "Technology" },
  { id: "gallery", label: "Gallery" },
  { id: "certifications", label: "Certifications" },
   { id: "events", label: "Events" },
    { id: "topprojects", label: "Top Projects" },
     { id: "topclients", label: "Top Clients" },
     { id: "documents", label: "Documents" },
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
