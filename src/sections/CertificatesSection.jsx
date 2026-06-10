import { ExpandCards } from "@/components/ui/expand-cards";
import { SectionFX } from "@/components/scroll/SectionFX";
import { SectionHeading } from "@/components/ui/section-heading";

const simpleicon = (slug, color) =>
  `https://cdn.simpleicons.org/${slug}/${color}`;

const certificates = [
  {
    title: "Google AI Professional Certificate",
    issuer: "Google",
    logo: `${import.meta.env.BASE_URL}images/google.svg`,
    image: `${import.meta.env.BASE_URL}images/google-ai-professional.png`,
    credentialUrl:
      "https://www.credly.com/badges/38f3895a-5d2d-4da9-90f2-412bda366021",
  },
  {
    title: "Fundamentals of Deep Learning",
    issuer: "NVIDIA",
    logo: simpleicon("nvidia", "76B900"),
    image: `${import.meta.env.BASE_URL}images/nvidia-deep-learning.png`,
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/verify/9R9ABROGQBHV",
  },
  {
    title: "Foundation: Introduction to LangChain - Python",
    issuer: "LangChain",
    logo: simpleicon("langchain", "1C3C3C"),
    image: `${import.meta.env.BASE_URL}images/langchain-intro.png`,
    credentialUrl: "https://academy.langchain.com/certificates/fvjzlrtdd6",
  },
  {
    title: "CS50x: Introduction to Computer Science",
    issuer: "Harvard University",
    logo: `${import.meta.env.BASE_URL}images/harvard.svg`,
    image: `${import.meta.env.BASE_URL}images/cs50x.png`,
    credentialUrl:
      "https://certificates.cs50.io/38396cb6-58b3-49ae-b9fd-58ca587d21ed.pdf?size=letter",
  },
  {
    title: "Claude 101 by Anthropic",
    issuer: "Anthropic",
    logo: simpleicon("anthropic", "D97757"),
    image: `${import.meta.env.BASE_URL}images/claude-101.png`,
    credentialUrl: "https://verify.skilljar.com/c/iim2g82pb8qt",
  },
  {
    title: "Career Essentials in Generative AI by Microsoft and LinkedIn",
    issuer: "Microsoft",
    logo: `${import.meta.env.BASE_URL}images/microsoft.svg`,
    image: `${import.meta.env.BASE_URL}images/microsoft-genai.png`,
    disabled: true,
    buttonLabel:
      "Credential ID - 88bbab69578a8fddd294b3b92cee1830090d1abbc9b5f74a63bffaa55d98c2ac",
  },
];

export default function CertificatesSection() {
  return (
    <section id="certificates" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <SectionHeading
            index="04"
            align="center"
            title="Licenses & Certifications"
            className="mb-4"
          />
          <p className="text-gray-500 dark:text-gray-400">
            Industry credentials backing the skills. Hover or tap a card to
            view details.
          </p>
        </div>

        <SectionFX variant="clip-reveal">
          <ExpandCards certificates={certificates} />
        </SectionFX>
      </div>
    </section>
  );
}
