"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import SocialProofTwo from '@/components/sections/socialProof/SocialProofTwo';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Coffee, CheckCircle } from 'lucide-react';

const assetMap = [{"id":"hero-image","url":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_346q1PwyWBLFgxn5R5gWYFVRO0Y/draw-a-cartoon-desert-landscape-in-16-9--1760693328774-a571399a.jpg","alt":"Charming café interior in Geelong featuring vinyl records, blackboard menu, and retro decor."},{"id":"about-image","url":"https://images.pexels.com/photos/4085282/pexels-photo-4085282.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"High-resolution close-up of neatly stacked roasted coffee beans against a textured background."},{"id":"feature-image-1","url":"https://images.pexels.com/photos/6166751/pexels-photo-6166751.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A hand pouring milk to create latte art in a coffee cup, top view."},{"id":"feature-image-2","url":"https://images.pexels.com/photos/2299028/pexels-photo-2299028.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A rich espresso cup surrounded by beans and an open book, perfect for a relaxing break."},{"id":"team-image","url":"https://images.pexels.com/photos/3796810/pexels-photo-3796810.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Smiling African American waitress wearing casual t shirt and apron standing at counter in cozy coffee shop with female customer while serving hot drink and looking at each other"},{"id":"testimonial-1","url":"https://images.pexels.com/photos/5710147/pexels-photo-5710147.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Two women sharing laughter and joy over coffee cups in a cozy cafe setting."},{"id":"testimonial-2","url":"https://images.pexels.com/photos/5538618/pexels-photo-5538618.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Positive young Asian female student with earphones writing in copybook while doing homework at table with laptop in street cafeteria"},{"id":"testimonial-3","url":"https://images.pexels.com/photos/3801426/pexels-photo-3801426.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Positive young woman in uniform smiling while standing at counter desk in  cafe"},{"id":"testimonial-4","url":"https://images.pexels.com/photos/14960779/pexels-photo-14960779.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A bald man holding a coffee cup while contemplating art in a cozy café setting."},{"id":"contact-image","url":"https://images.pexels.com/photos/904346/pexels-photo-904346.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A rustic setup featuring a cup filled with coffee beans and a coffee-themed magazine on a wooden table."}];

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="slide-background"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal brandName="wqfqwfqf" />
      </div>
      <div id="hero" data-section="hero">
        <HeroSplit
          title="Welcome to Coffee Corner"
          description="Discover the qwfqwfqw flavors and aromas in efegqg cozy space."
          imageSrc={assetMap.find(a => a.id === "hero-image")?.url}
          buttons={[{ text: "Explore Menu", href: "menu" }, { text: "Contact Us", href: "contact" }]}
        />
      </div>
      <div id="about" data-section="about">
        <SplitAbout
          title="About Us"
          description="At Coffee Corner, we bring you the finest coffee experience."
          bulletPoints={[{ title: "Sourcing Excellence", description: "Our beans are sourced from the top farms worldwide.", icon: Coffee }, { title: "Brewed to Perfection", description: "Each cup is crafted with precision and care.", icon: CheckCircle }]}
          imageSrc={assetMap.find(a => a.id === "about-image")?.url}
        />
      </div>
      <div id="features" data-section="features">
        <FeatureCardOne
          title="Our Specialties"
          description="Experience a unique blend of flavors and brews."
          features={[{ title: "Artisan Espresso", description: "Crafted by our skilled baristas.", imageSrc: assetMap.find(a => a.id === "feature-image-1")?.url }, { title: "Signature Latte", description: "A rich and creamy delight.", imageSrc: assetMap.find(a => a.id === "feature-image-2")?.url }]}
        />
      </div>
      <div id="socialProof" data-section="socialProof">
        <SocialProofTwo
          title="Loved by coffee enthusiasts"
          description="Join our satisfied customers who can't get enough of Coffee Corner."
          logos={[assetMap.find(a => a.id === "testimonial-1")?.url, assetMap.find(a => a.id === "testimonial-2")?.url, assetMap.find(a => a.id === "testimonial-3")?.url, assetMap.find(a => a.id === "testimonial-4")?.url]}
        />
      </div>
      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Stay Connected"
          title="Reach Out to Us"
          description="We'd love to hear from you. Whether it's feedback or questions, we're here."
          imageSrc={assetMap.find(a => a.id === "contact-image")?.url}
          onSubmit={null}
        />
      </div>
      <div id="footer" data-section="footer">
        <FooterBase
          columns={[{ title: "Explore", items: [{ label: "Home", href: "\/" }, { label: "Menu", href: "menu" }, { label: "About Us", href: "about" }, { label: "Contact", href: "contact" }] }, { title: "Legal", items: [{ label: "Privacy Policy", href: "privacy-policy" }, { label: "Terms of Service", href: "terms-of-service" }] }]} 
          copyrightText="© 2025 Coffee Corner"
        />
      </div>
    </ThemeProvider>
  );
}