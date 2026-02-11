import type { Metadata } from "next";
import { Hero } from "@/components/ui/Hero";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { List } from "@/components/ui/List";
import { PositioningSection } from "@/components/ui/PositioningSection";

export const metadata: Metadata = {
  title: "Home"
};

const globalProblem = [
  "4+ billion tonnes of red mud accumulated worldwide",
  "~150 million tonnes generated annually",
  "Stored in engineered ponds with perpetual monitoring, remediation, and land-use risk",
  "No scalable utilization pathway historically available"
];

const indiaProblem = [
  "~9 million tonnes generated every year",
  "<3% utilization nationally, despite CPCB targets of 25%",
  "~75% of India’s red mud concentrated in Odisha alone",
  "Legacy stockpiles near population centers, rivers, and industrial corridors"
];

const implications = [
  "Red mud contains iron oxides, titanium dioxide, alumina, and trace-to-recoverable rare earths",
  "India and allied economies remain dependent on external REE supply chains",
  "Existing ponds represent both environmental risk and lost strategic value"
];

const coreCharacteristics = [
  "Cold hydrometallurgical process (<100 °C)",
  "Zero harmful emissions",
  "Designed for direct integration at refinery or pond sites",
  "Capable of extracting 25+ elements from a single feedstock",
  "Operates on legacy stockpiles and ongoing production"
];

const commercialProof = [
  "Operational calibration facility",
  "Demonstrated continuous extraction performance",
  "Engineering completed for 350,000 t/year modular units",
  "Scalable to 1 million t/year plants"
];

const criticalOutputs = [
  "Scandium (aerospace alloys, solid oxide fuel cells, advanced aluminum)",
  "Rare Earth Elements (REEs) including yttrium, dysprosium, gadolinium",
  "Titanium-bearing compounds",
  "Iron oxides (industrial pigments, coagulants)"
];

const byProducts = [
  "Aluminosilicate materials",
  "Precipitated calcium carbonate",
  "Amorphous silica"
];

const strategicAlignment = {
  security: [
    "Reduces reliance on geopolitically concentrated REE supply chains",
    "Creates domestic and allied-nation feedstock independence"
  ],
  environment: [
    "Permanent reduction of alkaline residue inventories",
    "Converts perpetual liabilities into finite assets",
    "Enables alumina producers to move toward zero-residue operations"
  ],
  circularity: [
    "Aligns with circular-economy mandates",
    "Turns waste management cost centers into revenue-generating infrastructure"
  ]
};

const deployment = {
  architecture: ["350,000 t/year processing units", "Phased scale-up to 1M t/year+ facilities"],
  integration: [
    "On-site at existing refineries",
    "Adjacent to legacy pond infrastructure",
    "Independent regional processing hubs"
  ],
  commercial: [
    "Build-Own-Operate",
    "Joint ventures with alumina producers",
    "Technology licensing with revenue participation"
  ]
};

export default function HomePage() {
  return (
    <div className="home-page">
      <Hero
        title="From Bauxite Residue to Critical Minerals"
        lead="A patented, commercially proven platform for extracting rare earths and strategic metals from red mud—at industrial scale, with no mining."
        imageSrc="/home/From Bauxite Residue to Critical Minerals.jpg"
        imageAlt="From Bauxite Residue to Critical Minerals"
      >
        <p>
          Red mud—bauxite residue from alumina refining—is one of the largest unmanaged
          industrial waste streams on earth. Our technology converts this long-term
          environmental liability into a domestic source of critical minerals, including
          Scandium and Rare Earth Elements (REEs), while permanently reducing legacy stockpiles.
        </p>
        <div>
          <p className="list-title">Outcome:</p>
          <List
            items={[
              "Strategic minerals recovered",
              "Storage liabilities eliminated",
              "No new mining, no tailings expansion",
              "Immediate pathway to commercial deployment"
            ]}
          />
        </div>
      </Hero>

      <Section
        id="problem-title"
        kicker="THE PROBLEM"
        title="A Global Stockpile with Strategic Consequences"
      >
        <div className="grid-2">
          <Card title="Globally">
            <List items={globalProblem} />
          </Card>
          <Card title="India">
            <List items={indiaProblem} />
          </Card>
        </div>
        <div className="grid-2 mt-6">
          <figure className="image-card">
            <img
              src="/home/THE PROBLEM.jpg"
              alt="The Problem - Red Mud Storage"
              loading="lazy"
            />
          </figure>
          <figure className="image-card">
            <img
              src="/home/THE PROBLEM2.jpg"
              alt="The Problem - Environmental Impact"
              loading="lazy"
            />
          </figure>
        </div>
        <Card title="Strategic Implications" className="mt-6">
          <List items={implications} />
          <p>This is not a waste problem.</p>
          <p>It is a missed critical-minerals opportunity at national scale.</p>
        </Card>
      </Section>

      <Section
        id="solution-title"
        kicker="THE SOLUTION"
        title="Patented Low-Temperature Extraction at Commercial Scale"
      >
        <p className="mb-6 text-dim">
          Our process is protected under a granted U.S. patent for red mud processing and
          rare-earth extraction, developed specifically to operate on highly alkaline bauxite
          residue.
        </p>
        <div className="grid-2">
          <Card title="Core Characteristics">
            <List items={coreCharacteristics} />
          </Card>
          <Card title="Commercial Proof">
            <List items={commercialProof} />
          </Card>
        </div>
        <figure className="image-card mt-6">
          <img
            src="/home/THE SOLUTION2.jpg"
            alt="The Solution - Processing Technology"
            loading="lazy"
          />
        </figure>
        <div className="grid-2 mt-6">
          <figure className="image-card">
            <img
              src="/home/From Bauxite Residue to Critical Minerals2.jpg"
              alt="Bauxite Residue Processing"
              loading="lazy"
            />
          </figure>
          <figure className="image-card">
            <img
              src="/home/From Bauxite Residue to Critical Minerals3.jpg"
              alt="Critical Minerals Extraction"
              loading="lazy"
            />
          </figure>
        </div>
      </Section>

      <Section
        id="outputs-title"
        kicker="OUTPUTS"
        title="Strategic Materials Recovered from Waste"
      >
        <div className="grid-2">
          <Card title="Critical & Strategic Materials">
            <List items={criticalOutputs} />
          </Card>
          <Card title="Industrial By-Products">
            <List items={byProducts} />
          </Card>
        </div>
        <div className="grid-2 mt-6">
          <figure className="image-card">
            <img
              src="/home/OUTPUTS.jpg"
              alt="Strategic Outputs"
              loading="lazy"
            />
          </figure>
          <figure className="image-card">
            <img
              src="/home/OUTPUTS2.avif"
              alt="Critical Materials Output"
              loading="lazy"
            />
          </figure>
        </div>
        <Card title="Key Advantage" className="mt-6">
          <p>Red mud is already mined, crushed, and surface-stored.</p>
          <p>
            There is no drilling, no blasting, no beneficiation, and no tailings creation.
          </p>
        </Card>
      </Section>

      <Section
        id="strategic-title"
        kicker="WHY THIS MATTERS"
        title="Beyond Economics"
      >
        <div className="grid-3">
          <Card title="Critical Minerals Security">
            <List items={strategicAlignment.security} />
          </Card>
          <Card title="Environmental Resolution">
            <List items={strategicAlignment.environment} />
          </Card>
          <Card title="Industrial Circularity">
            <List items={strategicAlignment.circularity} />
          </Card>
        </div>
        <div className="grid-2 mt-6">
          <figure className="image-card">
            <img
              src="/home/WHY THIS MATTERS.png"
              alt="Why This Matters - Strategic Importance"
              loading="lazy"
            />
          </figure>
          <figure className="image-card">
            <img
              src="/home/WHY THIS MATTERS2.jpg"
              alt="Why This Matters - National Impact"
              loading="lazy"
            />
          </figure>
        </div>
      </Section>

      <Section
        id="deployment-title"
        kicker="DEPLOYMENT MODEL"
        title="Built for Scale, Not Experimentation"
      >
        <div className="grid-3">
          <Card title="Modular Plant Architecture">
            <List items={deployment.architecture} />
          </Card>
          <Card title="Integration Options">
            <List items={deployment.integration} />
          </Card>
          <Card title="Commercial Structures">
            <List items={deployment.commercial} />
          </Card>
        </div>
        <figure className="card diagram mt-6" aria-label="Deployment model diagram">
          <svg viewBox="0 0 920 220" role="img" aria-label="Flow of modular deployment options">
            <rect x="20" y="60" width="220" height="100" rx="10" />
            <rect x="350" y="20" width="220" height="80" rx="10" />
            <rect x="350" y="120" width="220" height="80" rx="10" />
            <rect x="680" y="60" width="220" height="100" rx="10" />
            <text x="130" y="115" textAnchor="middle">Feedstock</text>
            <text x="460" y="70" textAnchor="middle">350,000 t/year Units</text>
            <text x="460" y="170" textAnchor="middle">1M t/year+ Scale</text>
            <text x="790" y="115" textAnchor="middle">Commercial Structures</text>
            <path d="M240 110H350" />
            <path d="M570 60H680" />
            <path d="M570 160H680" />
          </svg>
        </figure>
      </Section>


      <PositioningSection
        title="We do not mine critical minerals."
        description="We unlock them—responsibly—from the world's largest industrial waste stream."
        buttons={[
          { label: "Explore Technology", href: "/technology" },
          { label: "View Outputs", href: "/outputs" },
          { label: "India Strategy", href: "/india-strategy" }
        ]}
      />
    </div>
  );
}
