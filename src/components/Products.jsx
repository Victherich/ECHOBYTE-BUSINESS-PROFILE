// import styled from "styled-components";

// const ProductsWrapper = styled.section`
//   padding: 80px 60px;
//   background: #ffffff;
//   color: #0f172a;
// `;

// const Container = styled.div`
//   max-width: 1100px;
//   margin: 0 auto;
// `;

// const PageTitle = styled.h2`
//   font-size: 2.5rem;
//   font-weight: 700;
//   margin-bottom: 10px;
// `;

// const PageIntro = styled.p`
//   font-size: 1.1rem;
//   color: #475569;
//   margin-bottom: 50px;
//   max-width: 800px;
// `;

// const ProductGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
//   gap: 30px;
// `;

// const ProductCard = styled.div`
//   border: 1px solid #e2e8f0;
//   border-radius: 12px;
//   padding: 30px;
//   background: #f8fafc;
// `;

// const ProductName = styled.h3`
//   font-size: 1.3rem;
//   margin-bottom: 12px;
//   color: #0f172a;
// `;

// const ProductDescription = styled.p`
//   font-size: 0.95rem;
//   line-height: 1.7;
//   color: #475569;
// `;

// export default function Products() {
//   return (
//     <ProductsWrapper>
//       <Container>
//         <PageTitle>Products & Solutions</PageTitle>

//         <PageIntro>
//           Our products are designed to solve real operational and visibility
//           challenges faced by businesses, professionals, creators, and
//           educational institutions through scalable and AI-enabled digital
//           solutions.
//         </PageIntro>

//         <ProductGrid>
//          <ProductCard>
//   <ProductName>Web & Cloud Solutions</ProductName>
//   <ProductDescription>
//     We build modern websites and online systems that help businesses be seen on
//     the internet, work faster, and grow without stress.
//   </ProductDescription>
// </ProductCard>

// <ProductCard>
//   <ProductName>Mobile Application Solutions</ProductName>
//   <ProductDescription>
//     We create Android and iOS mobile apps that help businesses automate their
//     daily work and communicate better with their customers.
//   </ProductDescription>
// </ProductCard>

// <ProductCard>
//   <ProductName>Digital Store Platform</ProductName>
//   <ProductDescription>
//     We provide an online store where creators can sell software and courses, and
//     users can easily find and use digital and AI-powered tools.
//   </ProductDescription>
// </ProductCard>

// <ProductCard>
//   <ProductName>Academic & School Management System</ProductName>
//   <ProductDescription>
//     We build a school system that helps schools manage students, payments, exams,
//     and learning digitally instead of using paper.
//   </ProductDescription>
// </ProductCard>

// <ProductCard>
//   <ProductName>Portfolio Builder Platform</ProductName>
//   <ProductDescription>
//     We help individuals create simple online portfolios where they can show
//     their skills, projects, and work experience professionally.
//   </ProductDescription>
// </ProductCard>

//         </ProductGrid>
//       </Container>
//     </ProductsWrapper>
//   );
// }


import styled from "styled-components";

const ProductsWrapper = styled.section`
  padding: 80px 60px;
  background: #ffffff;
  color: #0f172a;
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const PageTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 10px;
`;

const PageIntro = styled.p`
  font-size: 1.1rem;
  color: #475569;
  margin-bottom: 50px;
  max-width: 800px;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
`;

const ProductCard = styled.div`
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 24px;
  background: #f8fafc;
  display: flex;
  flex-direction: column;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const ProductName = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 10px;
  color: #0f172a;
`;

const ProductDescription = styled.p`
  font-size: 0.95rem;
  line-height: 1.7;
  color: #475569;
`;

export default function Products() {
  return (
    <ProductsWrapper>
      <Container>
        <PageTitle id='products'>Our Products & Solutions</PageTitle>

        <PageIntro>
          Our products are designed to solve real operational and visibility
          challenges faced by businesses, professionals, creators, and
          educational institutions through scalable and AI-enabled digital
          solutions.
        </PageIntro>

        <ProductGrid>
          <ProductCard>
            <ProductImage
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
              alt="Web and Cloud Solutions"
            />
            <ProductName>Web & Cloud Solutions</ProductName>
            <ProductDescription>
              We build modern websites and online systems that help businesses be
              seen on the internet, work faster, and grow without stress.
            </ProductDescription>
          </ProductCard>

          <ProductCard>
            <ProductImage
              src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80"
              alt="Mobile Application Solutions"
            />
            <ProductName>Mobile Application Solutions</ProductName>
            <ProductDescription>
              We create Android and iOS mobile apps that help businesses automate
              their daily work and communicate better with their customers.
            </ProductDescription>
          </ProductCard>

          <ProductCard>
            <ProductImage
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80"
              alt="Digital Store Platform"
            />
            <ProductName>Digital Store Platform</ProductName>
            <ProductDescription>
              We provide an online store where creators can sell software and
              courses, and users can easily find and use digital and AI-powered
              tools.
            </ProductDescription>
          </ProductCard>

          <ProductCard>
            <ProductImage
              src="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=800&q=80"
              alt="Academic and School Management System"
            />
            <ProductName>Academic & School Management System</ProductName>
            <ProductDescription>
              We build a school system that helps schools manage students,
              payments, exams, and learning digitally instead of using paper.
            </ProductDescription>
          </ProductCard>

          <ProductCard>
            <ProductImage
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
              alt="Portfolio Builder Platform"
            />
            <ProductName>Portfolio Builder Platform</ProductName>
            <ProductDescription>
              We help individuals create simple online portfolios where they can
              show their skills, projects, and work experience professionally.
            </ProductDescription>
          </ProductCard>
        </ProductGrid>
      </Container>
    </ProductsWrapper>
  );
}
