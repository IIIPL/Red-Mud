import type { Metadata } from "next";
import { Hero } from "@/components/ui/Hero";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { List } from "@/components/ui/List";

export const metadata: Metadata = {
  title: "Partnerships"
};

export default function PartnershipsPage() {
  return (
    <div className="home-page partnerships-page">
      <Hero
        kicker="PARTNERSHIPS & BUSINESS MODELS"
        title="Scaling Critical Mineral Recovery Through Strategic Collaboration"
        imageSrc="https://upload.wikimedia.org/wikipedia/commons/4/40/Alumina_refinery_pinjarra.jpg"
        imageAlt="Refinery-adjacent industrial infrastructure suitable for partnership deployment"
        id="partnerships-hero-title"
      >
        <p>
          Our platform is designed to deploy at scale by partnering directly with alumina
          producers, infrastructure investors, and strategic capital providers. We offer
          multiple commercial structures—each engineered to align incentives, accelerate
          remediation, and unlock long-term value from red mud stockpiles.
        </p>
        <p>
          This flexibility allows partners to participate according to their balance-sheet
          strategy, risk appetite, and operational priorities, while preserving the integrity of
          the patented extraction technology.
        </p>
      </Hero>

      <Section
        id="philosophy-title"
        kicker="PARTNERSHIP PHILOSOPHY"
        title="Aligning Environmental Remediation With Industrial Economics"
      >
        <Card>
          <p>
            Red mud is not a speculative feedstock—it is a continuously generated, on-site
            industrial liability. Our partnership models convert this liability into a monetizable
            resource without disrupting alumina operations.
          </p>
          <p>Across all structures, the principles remain consistent:</p>
          <List
            items={[
              "No interference with core alumina production",
              "Modular, on-site or adjacent deployment",
              "Zero-waste processing and regulatory alignment",
              "Long-term visibility on mineral recovery and ESG outcomes"
            ]}
          />
        </Card>
      </Section>

      <Section
        id="models-title"
        kicker="CORE BUSINESS MODELS"
        title="1. JOINT VENTURE (JV) WITH ALUMINA PRODUCERS"
      >
        <Card>
          <p className="font-semibold mb-2">Shared Ownership. Shared Upside. Immediate Remediation.</p>
          <p>
            Under the JV model, a special-purpose vehicle is jointly owned with the alumina
            producer to process current and legacy red mud stockpiles.
          </p>
          <p className="font-semibold mt-4 mb-2">Structure</p>
          <List
            items={[
              "Dedicated JV entity",
              "Equity participation by alumina producer and technology partner",
              "Processing plant located on or adjacent to refinery site"
            ]}
          />
        </Card>
        <div className="grid-2 mt-6">
          <Card title="Value for Alumina Producers">
            <List
              items={[
                "Elimination of long-term residue storage costs",
                "Balance-sheet de-risking of environmental liabilities",
                "Participation in downstream critical mineral revenues",
                "ESG performance uplift without capex concentration risk"
              ]}
            />
          </Card>
          <Card title="Value for Investors">
            <List
              items={[
                "Direct exposure to cash-generating processing assets",
                "Feedstock security through captive red mud supply",
                "Long-term offtake visibility for critical minerals"
              ]}
            />
          </Card>
        </div>
        <Card className="mt-6">
          <p>
            <span className="font-semibold">Best suited for:</span> Large integrated producers with substantial legacy stockpiles and long operating horizons.
          </p>
        </Card>

        <h2 className="text-xl font-bold mt-12 mb-4">2. TECHNOLOGY LICENSING</h2>
        <Card>
          <p className="font-semibold mb-2">Low Capital. Rapid Replication. Asset-Light Scaling.</p>
          <p>
            In licensing structures, partners deploy the patented extraction process under a
            long-term license while technology ownership and process governance are retained
            centrally.
          </p>
          <p className="font-semibold mt-4 mb-2">Structure</p>
          <List
            items={[
              "Upfront license fee",
              "Ongoing royalty (percentage of gross processed material or recovered output)",
              "Centralized technical oversight and performance auditing"
            ]}
          />
        </Card>
        <div className="grid-2 mt-6">
          <Card title="Value for Alumina Producers">
            <List
              items={[
                "Minimal balance-sheet exposure",
                "Rapid deployment across multiple sites",
                "Predictable cost structure tied to throughput"
              ]}
            />
          </Card>
          <Card title="Value for Technology Owner">
            <List
              items={[
                "Scalable global footprint",
                "Recurring, high-margin royalty streams",
                "Preservation of IP control and process integrity"
              ]}
            />
          </Card>
        </div>
        <Card className="mt-6">
          <p>
            <span className="font-semibold">Best suited for:</span> Producers with multiple refineries or geographies seeking standardized deployment.
          </p>
        </Card>

        <h2 className="text-xl font-bold mt-12 mb-4">3. BUILD-OWN-OPERATE (BOO)</h2>
        <Card>
          <p className="font-semibold mb-2">Turnkey Remediation With Zero Capital Burden for the Producer</p>
          <p>
            In a BOO configuration, the processing plant is designed, financed, built, and operated
            independently while the alumina producer supplies feedstock under a long-term
            agreement.
          </p>
          <p className="font-semibold mt-4 mb-2">Structure</p>
          <List
            items={[
              "Independent project SPV",
              "Long-term red mud supply agreement",
              "Revenue generated from mineral recovery"
            ]}
          />
        </Card>
        <div className="grid-2 mt-6">
          <Card title="Value for Alumina Producers">
            <List
              items={[
                "No capital expenditure",
                "Immediate reduction of environmental risk",
                "Guaranteed remediation pathway for ongoing production",
                "Optional revenue-sharing upside"
              ]}
            />
          </Card>
          <Card title="Value for Investors">
            <List
              items={[
                "Infrastructure-style asset with contracted feedstock",
                "Strong downside protection",
                "Exposure to strategic minerals without mining risk"
              ]}
            />
          </Card>
        </div>
        <Card className="mt-6">
          <p>
            <span className="font-semibold">Best suited for:</span> Producers prioritizing capital discipline and rapid ESG compliance.
          </p>
        </Card>
      </Section>

      <Section
        id="flow-title"
        kicker="“PARTNER WITH AN ALUMINA PRODUCER” — DEPLOYMENT FLOW"
        title="Step 1: Site & Stockpile Assessment"
      >
        <div className="grid-2">
          <Card title="Step 1: Site & Stockpile Assessment">
            <List
              items={[
                "Chemical and mineralogical characterization",
                "Volume, age, and alkalinity profiling",
                "Integration feasibility review"
              ]}
            />
          </Card>
          <Card title="Step 2: Commercial Structuring">
            <List
              items={[
                "JV, Licensing, or BOO selection",
                "Capex, opex, and revenue-share alignment",
                "ESG and regulatory mapping"
              ]}
            />
          </Card>
        </div>
        <div className="grid-2 mt-6">
          <Card title="Step 3: Modular Plant Deployment">
            <List
              items={[
                "Plug-and-play installation",
                "No disruption to refinery operations",
                "Phased capacity ramp-up"
              ]}
            />
          </Card>
          <Card title="Step 4: Long-Term Operations & Expansion">
            <List
              items={[
                "Continuous processing of new residue",
                "Drawdown of legacy stockpiles",
                "Replication across additional sites"
              ]}
            />
          </Card>
        </div>
        <figure className="card diagram partner-flow-diagram mt-6" aria-label="Partnership deployment flow diagram">
          <svg viewBox="0 0 1220 260" role="img" aria-label="Four-step deployment flow from assessment to expansion">
            <rect x="20" y="60" width="270" height="130" rx="12" />
            <rect x="320" y="60" width="270" height="130" rx="12" />
            <rect x="620" y="60" width="270" height="130" rx="12" />
            <rect x="920" y="60" width="270" height="130" rx="12" />
            <text x="155" y="110" textAnchor="middle">Step 1</text>
            <text x="155" y="140" textAnchor="middle">Site & Stockpile Assessment</text>
            <text x="455" y="110" textAnchor="middle">Step 2</text>
            <text x="455" y="140" textAnchor="middle">Commercial Structuring</text>
            <text x="755" y="110" textAnchor="middle">Step 3</text>
            <text x="755" y="140" textAnchor="middle">Modular Plant Deployment</text>
            <text x="1055" y="110" textAnchor="middle">Step 4</text>
            <text x="1055" y="140" textAnchor="middle">Long-Term Operations</text>
            <path d="M290 125H320" />
            <path d="M590 125H620" />
            <path d="M890 125H920" />
          </svg>
        </figure>
      </Section>

      <Section
        id="benefits-title"
        kicker="STRATEGIC BENEFITS ACROSS ALL MODELS"
        title="For Alumina Producers"
      >
        <div className="grid-2">
          <Card title="For Alumina Producers">
            <List
              items={[
                "Permanent reduction of red mud liabilities",
                "Conversion of waste into strategic revenue streams",
                "Improved land utilization and regulatory positioning",
                "Alignment with national critical mineral strategies"
              ]}
            />
          </Card>
          <Card title="For Investors & Strategic Capital">
            <List
              items={[
                "Access to critical minerals without geological mining risk",
                "Long-duration assets backed by industrial feedstock",
                "Strong ESG credentials with measurable impact",
                "Protection through patent-backed technology and high barriers to entry"
              ]}
            />
          </Card>
        </div>
      </Section>

      <Section
        id="why-title"
        kicker="WHY PARTNERSHIPS MATTER"
        title="No Single Stakeholder Solves This Alone"
      >
        <Card>
          <p>
            Red mud remediation sits at the intersection of mining, materials science,
            infrastructure, and public policy. Scalable deployment requires collaboration—not
            one-off projects.
          </p>
          <p>This partnership framework is designed to:</p>
          <List
            items={[
              "De-risk adoption for producers",
              "Provide clarity and durability for investors",
              "Enable national and regional critical-mineral security"
            ]}
          />
        </Card>
      </Section>

      <Section
        id="next-steps-title"
        kicker="NEXT STEPS"
        title="From Discussion to Deployment"
      >
        <Card>
          <List
            items={[
              "Confidential technical briefing",
              "Site-specific feasibility assessment",
              "Commercial model shortlisting",
              "Transaction structuring and timeline alignment"
            ]}
          />
          <p>We partner selectively. We deploy at scale.</p>
          <p>
            The opportunity is global, the feedstock is permanent, and the window for first-mover
            advantage is finite.
          </p>
        </Card>
      </Section>
    </div>
  );
}
