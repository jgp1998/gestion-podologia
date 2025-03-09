import Header from "@/components/sections/header"
import HeroSection from "@/components/sections/hero-section"
import FeaturesSection from "@/components/sections/features-section"
import Pricing from "@/components/sections/pricing"
// import TestimonialSection from "@/components/testimonial-section"
import CtaSection from "@/components/sections/cta-section"
import Footer from "@/components/sections/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <HeroSection />
      {/* Features Section */}
      <FeaturesSection />

      {/* Pricing Section */}
      <Pricing />

      {/* Testimonials Section */}
      {/* <TestimonialSection /> */}

      {/* CTA Section */}
      <CtaSection />

      {/* Footer */}
      <Footer />
    </div>
  )
}

