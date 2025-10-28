"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Brain, Cloud, Code, HelpCircle, Settings, Shield, Star, Users, Zap } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="sharp"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          logoSrc="https://images.pexels.com/photos/7651924/pexels-photo-7651924.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          logoAlt="TechSolutions"
          brandName="TechSolutions"
          button={{
            text: "Get Started",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Transform Your Business with Cutting-Edge IT Solutions"
          description="We deliver innovative technology solutions that drive growth, enhance security, and optimize performance for businesses of all sizes."
          tag="Technology Leaders"
          tagIcon={Zap}
          buttons={[
            {
              text: "Get Started",
              href: "contact"
            },
            {
              text: "Our Services",
              href: "feature"
            }
          ]}
          imageSrc="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Modern technology workspace"
          imagePosition="right"
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardTwo
          title="Our Core Services"
          description="Comprehensive IT solutions designed to accelerate your business growth and digital transformation."
          tag="Services"
          tagIcon={Settings}
          features={[
            {
              title: "Cloud Computing",
              description: "Scalable cloud infrastructure solutions that reduce costs and improve accessibility for your business operations.",
              icon: Cloud,
              button: {
                text: "Learn More",
                href: "contact"
              }
            },
            {
              title: "Cybersecurity",
              description: "Advanced security measures to protect your data, networks, and systems from evolving cyber threats.",
              icon: Shield,
              button: {
                text: "Learn More",
                href: "contact"
              }
            },
            {
              title: "AI Solutions",
              description: "Intelligent automation and machine learning solutions to optimize processes and drive innovation.",
              icon: Brain,
              button: {
                text: "Learn More",
                href: "contact"
              }
            },
            {
              title: "Web Development",
              description: "Custom web applications and platforms built with modern technologies for optimal performance.",
              icon: Code,
              button: {
                text: "Learn More",
                href: "contact"
              }
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardOne
          title="Meet Our Expert Team"
          description="Industry veterans and technology innovators dedicated to delivering exceptional results."
          tag="Leadership"
          tagIcon={Users}
          members={[
            {
              id: "1",
              name: "Michael Chen",
              role: "CEO & Founder",
              imageSrc: "https://images.pexels.com/photos/6894103/pexels-photo-6894103.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Michael Chen, CEO"
            },
            {
              id: "2",
              name: "Sarah Johnson",
              role: "CTO",
              imageSrc: "https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Sarah Johnson, CTO"
            },
            {
              id: "3",
              name: "David Rodriguez",
              role: "Lead Developer",
              imageSrc: "https://images.pexels.com/photos/5926380/pexels-photo-5926380.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "David Rodriguez, Lead Developer"
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardTwo
          title="What Our Clients Say"
          description="Trusted by businesses worldwide for reliable IT solutions and exceptional service."
          tag="Success Stories"
          tagIcon={Star}
          testimonials={[
            {
              id: "1",
              name: "Jennifer Martinez",
              role: "CEO at InnovateTech",
              testimonial: "Their cloud migration strategy transformed our operations completely. We've seen 40% cost reduction and improved performance across all systems.",
              imageSrc: "https://images.pexels.com/photos/12885861/pexels-photo-12885861.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Jennifer Martinez"
            },
            {
              id: "2",
              name: "Robert Kim",
              role: "IT Director at SecureCorps",
              testimonial: "The cybersecurity implementation was flawless. Their team's expertise and attention to detail gave us confidence in our digital infrastructure.",
              imageSrc: "https://images.pexels.com/photos/4473398/pexels-photo-4473398.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Robert Kim"
            },
            {
              id: "3",
              name: "Emily Watson",
              role: "Operations Manager at DataFlow",
              testimonial: "Outstanding web development services. They delivered a robust platform that scales perfectly with our growing business needs.",
              imageSrc: "https://images.pexels.com/photos/4606338/pexels-photo-4606338.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Emily Watson"
            },
            {
              id: "4",
              name: "James Thompson",
              role: "Founder at TechStart",
              testimonial: "Their AI solutions revolutionized our workflow automation. We've increased productivity by 60% since implementation.",
              imageSrc: "https://images.pexels.com/photos/3867837/pexels-photo-3867837.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "James Thompson"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Get answers to common questions about our IT services and solutions."
          tag="Support"
          tagIcon={HelpCircle}
          faqs={[
            {
              id: "1",
              title: "What types of businesses do you serve?",
              content: "We serve businesses of all sizes, from startups to enterprise corporations, across various industries including healthcare, finance, retail, and manufacturing."
            },
            {
              id: "2",
              title: "How long does a typical implementation take?",
              content: "Implementation timelines vary based on project scope. Simple solutions can be deployed in 2-4 weeks, while complex enterprise systems may take 3-6 months."
            },
            {
              id: "3",
              title: "Do you provide ongoing support and maintenance?",
              content: "Yes, we offer comprehensive support packages including 24/7 monitoring, regular maintenance, updates, and technical assistance to ensure optimal system performance."
            },
            {
              id: "4",
              title: "What makes your cybersecurity approach different?",
              content: "Our cybersecurity strategy combines advanced threat detection, proactive monitoring, employee training, and regular security audits to create multiple layers of protection."
            },
            {
              id: "5",
              title: "Can you help with digital transformation initiatives?",
              content: "Absolutely. We specialize in digital transformation, helping businesses modernize their operations through cloud adoption, process automation, and technology integration."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Ready to Transform Your Business?"
          description="Get in touch with our experts to discuss your IT needs and discover how we can help accelerate your digital transformation."
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Your Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Email Address",
              required: true
            },
            {
              name: "company",
              type: "text",
              placeholder: "Company Name",
              required: true
            },
            {
              name: "phone",
              type: "tel",
              placeholder: "Phone Number",
              required: false
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your project requirements...",
            rows: 4,
            required: true
          }}
          buttonText="Send Message"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="TechSolutions"
          columns={[
            {
              items: [
                {
                  label: "Services",
                  href: "feature"
                },
                {
                  label: "About Us",
                  href: "team"
                },
                {
                  label: "Contact",
                  href: "contact"
                }
              ]
            },
            {
              items: [
                {
                  label: "Cloud Computing",
                  href: "contact"
                },
                {
                  label: "Cybersecurity",
                  href: "contact"
                },
                {
                  label: "Web Development",
                  href: "contact"
                }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}