import { Stack, Box, Center, Heading } from "@chakra-ui/react";
import HeroSection from "@/components/pages/home/HeroSection";
import BenefitsSection from "@/components/pages/home/BenefitsSection";
import WhyChooseUs from "@/components/pages/home/WhyChooseUs";
import FAQSection from "@/components/pages/home/FAQSection";
import { landingPageSettings, featuresSettings, faqs } from "@/data/constants";

const Homepage = () => {
  return (
    <Stack >
      {/* <HeroSection
        imageUrl={landingPageSettings.heroImage}
        headline={landingPageSettings.headline}
        subheadline={landingPageSettings.subheadline}
        cta={landingPageSettings.cta}
      />
      <BenefitsSection />
      <WhyChooseUs features={featuresSettings} />
      <FAQSection faqs={faqs} /> */}
      <Box height="80vh">
        <Center mt={8}>
          <Heading fontSize="xl">HOMEPAGE</Heading>
        </Center>
      </Box>
    </Stack>
  );
};

export default Homepage;
