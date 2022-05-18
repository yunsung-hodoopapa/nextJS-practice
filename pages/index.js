import { Container, Grid } from "@mui/material";
import Hero from "@components/Hero";
import SectionAbout from "@components/SectionAbout";
import SectionImage from "@components/SectionImage";
import SectionReview from "@components/SectionReview";
import NavigationCard from "@components/NavigationCard";

const Homepage = () => {
  return (
    <>
      <Hero
        imgSrc="/images/sample-image.jpg"
        imgAlt="Hero Image"
        title="Next.js 연습하기"
        subtitle="Next.js와 MUI로 빠르게 웹사이트 만들기"
      />
      <SectionAbout />
      <SectionImage imgSrc="/images/fusion-food.jpg" imgAlt="fusion food" />
      <SectionReview />
      <SectionImage imgSrc="/images/sushi.jpg" imgAlt="fusion sushi" />

      {/* 컨테이너에 “md(Medium)” 크기의 최대 너비를 갖도록 지시합니다.
margin-top 및 margin-bottom에 120px 공백을 설정합니다. (15 x 8픽셀)
Grid 구성 요소에 16px (2 x 8픽셀) 간격을 정의합니다.
“Grid” 항목의 컨테이너 속성을 사용하여 카드를 중앙에 배치합니다.
xs={12}는 화면이 x-small, 즉 모바일일때는 12만큼 간격을 차지. 12는 가로로 100% 넓이입니다.
md={6}은 화면이 휴대폰기기가 아닐 경우는 한줄에 2개씩, 50%의 넓이로 보여준다는 의미입니다. */}

      <Container maxWidth="md" sx={{ my: 15 }}>
        <Grid container spacing={2}>
          <Grid container item justifyContent="center" xs={12} md={6}>
            <NavigationCard
              imgSrc="/images/menu.jpg"
              imgAlt="food menu"
              title="Menu"
              desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, minus."
              pagePath="./menu"
              ctaText="Check Out"
            />
          </Grid>
          <Grid container item justifyContent="center" xs={12} md={6}>
            <NavigationCard
              imgSrc="/images/catering.jpg"
              imgAlt="catering"
              title="Catering"
              desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, minus."
              pagePath="./catering"
              ctaText="Find Out"
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Homepage;
