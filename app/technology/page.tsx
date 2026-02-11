import type { Metadata } from "next";
import { Hero } from "@/components/ui/Hero";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { List } from "@/components/ui/List";

export const metadata: Metadata = {
  title: "Technology"
};

export default function TechnologyPage() {
  return (
    <div className="home-page technology-page">
      <Hero
        kicker="TECHNOLOGY & PROCESS"
        title="A Modular, Zero-Waste Platform for Critical Minerals Recovery from Red Mud"
        lead="Our technology is a patented, low-temperature hydrometallurgical platform engineered specifically for bauxite residue. Unlike laboratory-scale or single-element approaches, the system is designed for continuous industrial operation, capable of processing both legacy stockpiles and live refinery residue streams."
        imageSrc="https://upload.wikimedia.org/wikipedia/commons/4/40/Alumina_refinery_pinjarra.jpg"
        imageAlt="Alumina refinery process infrastructure"
        id="technology-hero-title"
      >
        <p>
          At its core is a four-stage proprietary extraction architecture that enables selective
          recovery of high-value elements while converting the remaining matrix into stable,
          reusable industrial materials.
        </p>
      </Hero>

      <Section
        id="process-overview-title"
        kicker="PROCESS OVERVIEW"
        title="Four Stages. One Integrated System. No Residual Waste."
      >
        <figure className="card diagram technology-diagram" aria-label="Four-stage process overview">
          <svg viewBox="0 0 1200 220" role="img" aria-label="Stage 1 to Stage 4 integrated process flow">
            <rect x="20" y="50" width="260" height="120" rx="12" />
            <rect x="320" y="50" width="260" height="120" rx="12" />
            <rect x="620" y="50" width="260" height="120" rx="12" />
            <rect x="920" y="50" width="260" height="120" rx="12" />
            <text x="150" y="105" textAnchor="middle">Stage 1</text>
            <text x="150" y="130" textAnchor="middle">Conditioning</text>
            <text x="450" y="105" textAnchor="middle">Stage 2</text>
            <text x="450" y="130" textAnchor="middle">Selective Leaching</text>
            <text x="750" y="105" textAnchor="middle">Stage 3</text>
            <text x="750" y="130" textAnchor="middle">Fractionated Recovery</text>
            <text x="1050" y="105" textAnchor="middle">Stage 4</text>
            <text x="1050" y="130" textAnchor="middle">Zero-Waste Finishing</text>
            <path d="M280 110H320" />
            <path d="M580 110H620" />
            <path d="M880 110H920" />
          </svg>
        </figure>
      </Section>

      <Section
        id="stage-1-title"
        kicker="STAGE 1 — FEEDSTOCK CONDITIONING & MATRIX STABILIZATION"
        title="Objective:"
      >
        <p>Prepare highly alkaline, mineral-complex red mud for controlled, selective extraction.</p>
        <Card title="What Happens">
          <List
            items={[
              "Red mud is mechanically homogenized and conditioned",
              "Particle dispersion and surface activation improve downstream selectivity",
              "Residual alkalinity is stabilized to enable controlled chemical interaction"
            ]}
          />
        </Card>
        <Card title="Why This Matters" className="mt-6">
          <p>Red mud is not a uniform material. Its composition varies by:</p>
          <List
            items={[
              "Bauxite source",
              "Bayer process parameters",
              "Age and storage method"
            ]}
          />
          <p>
            This conditioning stage ensures process consistency across geographies, allowing the
            same plant design to operate on Indian, Australian, Middle Eastern, or North American
            residues without fundamental redesign.
          </p>
        </Card>
        <Card title="Key Characteristics" className="mt-6">
          <List
            items={[
              "No thermal treatment",
              "No sintering or roasting",
              "Operates at ambient to low temperature",
              "Closed-loop reagent management"
            ]}
          />
        </Card>
      </Section>

      <Section
        id="stage-2-title"
        kicker="STAGE 2 — SELECTIVE DISSOLUTION & TARGETED LEACHING"
        title="Objective:"
      >
        <p>Mobilize critical and strategic elements without dissolving the full bulk matrix.</p>
        <div className="grid-2">
          <Card title="What Happens">
            <List
              items={[
                "Proprietary leaching chemistry selectively dissolves target metals",
                "Rare earth elements, scandium, titanium-bearing phases, and iron compounds are mobilized in controlled fractions",
                "Non-target silicate and aluminosilicate phases remain largely inert"
              ]}
            />
          </Card>
          <Card title="Why This Matters">
            <p>Conventional approaches attempt bulk dissolution, driving:</p>
            <List
              items={[
                "High reagent consumption",
                "Complex downstream separation",
                "Poor economics at scale"
              ]}
            />
            <p>This stage is element-selective by design, enabling:</p>
            <List
              items={[
                "Multi-element recovery from a single feed",
                "Lower operating costs",
                "Reduced secondary waste streams"
              ]}
            />
          </Card>
        </div>
        <Card title="Operating Profile" className="mt-6">
          <List
            items={[
              "<100 °C",
              "Atmospheric pressure",
              "No hazardous gaseous emissions",
              "Continuous-flow reactors (not batch tanks)"
            ]}
          />
        </Card>
      </Section>

      <Section
        id="stage-3-title"
        kicker="STAGE 3 — FRACTIONATED SEPARATION & METAL RECOVERY"
        title="Objective:"
      >
        <p>
          Individually recover high-purity mineral streams suitable for downstream refining or
          direct industrial use.
        </p>
        <div className="grid-2">
          <Card title="What Happens">
            <List
              items={[
                "Dissolved metals are separated via staged precipitation, ion-exchange, and controlled crystallization",
                "Each element group is recovered as a distinct product stream, not a mixed concentrate",
                "Recovery sequencing is optimized based on feed chemistry and market priorities"
              ]}
            />
          </Card>
          <Card title="Recovered Outputs Include">
            <List
              items={[
                "Scandium compounds",
                "Rare Earth Element fractions (yttrium, dysprosium, gadolinium, others)",
                "Iron oxides",
                "Titanium-bearing intermediates"
              ]}
            />
          </Card>
        </div>
        <Card title="Why This Matters" className="mt-6">
          <p>
            Producing separate, specification-grade outputs avoids the need for third-party
            cracking or offshore refining—critical for supply-chain security and value capture.
          </p>
        </Card>
        <figure className="inline-media card mt-6">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Laboratory_reactors.jpg"
            alt="Industrial reactor and separation equipment"
            loading="lazy"
          />
        </figure>
      </Section>

      <Section
        id="stage-4-title"
        kicker="STAGE 4 — RESIDUAL MATRIX CONVERSION & ZERO-WASTE FINISHING"
        title="Objective:"
      >
        <p>Eliminate tailings and convert all remaining solids into stable, usable materials.</p>
        <Card title="What Happens">
          <List
            items={[
              "Remaining solids are neutralized and mineralogically stabilized",
              "Converted into aluminosilicate materials, calcium carbonate derivatives, and inert construction-grade products",
              "Process water and reagents are recovered and recycled internally"
            ]}
          />
        </Card>
        <Card title="Result" className="mt-6">
          <List
            items={[
              "No new waste stream",
              "No material returned to ponds",
              "No requirement for new residue storage capacity"
            ]}
          />
          <p>This is not waste minimization.</p>
          <p>It is full material conversion.</p>
        </Card>
      </Section>

      <Section
        id="zero-waste-title"
        kicker="ZERO-WASTE MODULAR PLANT DESIGN"
        title="Engineered for Deployment, Not Experimentation"
      >
        <div className="grid-3">
          <Card title="Modular Architecture">
            <List
              items={[
                "Standardized processing blocks",
                "Typical module: ~350,000 tonnes per year",
                "Linear scale-up to 1+ million tonnes per year"
              ]}
            />
          </Card>
          <Card title="Environmental Profile">
            <List
              items={[
                "Low-temperature operation",
                "No combustion steps",
                "No stack emissions",
                "Closed-loop water system",
                "Minimal incremental power demand"
              ]}
            />
          </Card>
          <Card title="Operational Advantages">
            <List
              items={[
                "Faster permitting versus mining or smelting",
                "Predictable capex per module",
                "High availability with industrial uptime design",
                "Compatible with existing refinery utilities"
              ]}
            />
          </Card>
        </div>
      </Section>

      <Section
        id="integration-title"
        kicker="PLUG-AND-PLAY INTEGRATION FOR ALUMINA PRODUCERS"
        title="Designed to Sit Beside Refineries — Not Disrupt Them"
      >
        <div className="grid-2">
          <Card title="Integration Model">
            <ul className="home-list">
              <li>Installed adjacent to existing residue handling or storage areas</li>
              <li>
                Accepts:
                <ul className="nested-list">
                  <li>Fresh red mud streams</li>
                  <li>Dewatered residue</li>
                  <li>Legacy dry or wet pond material</li>
                </ul>
              </li>
            </ul>
          </Card>
          <Card title="What the Refinery Does Not Need to Change">
            <List
              items={[
                "Bayer digestion process",
                "Alumina precipitation",
                "Smelting operations",
                "Existing residue generation systems"
              ]}
            />
          </Card>
        </div>
        <div className="grid-2 mt-6">
          <Card title="What the Refinery Gains">
            <List
              items={[
                "Permanent reduction of red-mud inventory",
                "Monetization of a legacy liability",
                "Compliance headroom as environmental norms tighten",
                "Participation in critical-minerals value chains"
              ]}
            />
          </Card>
          <Card title="Typical Integration Footprint">
            <List
              items={[
                "Modular, brownfield-compatible",
                "No interference with core refinery operations",
                "EPC-friendly layouts with phased commissioning"
              ]}
            />
          </Card>
        </div>
      </Section>

      <Section
        id="scales-title"
        kicker="WHY THIS TECHNOLOGY SCALES"
        title="Key Differentiators"
      >
        <Card>
          <List
            items={[
              "Granted patent protection covering process architecture",
              "Proven continuous operation at calibration scale",
              "Multi-element economics (not single-metal dependency)",
              "Feedstock already mined, crushed, and surface-stored",
              "No geological risk, no exploration risk"
            ]}
          />
          <p>
            This platform was built for industrial deployment under real-world constraints—not
            laboratory optimization.
          </p>
        </Card>
      </Section>

      <section className="positioning-section reveal" aria-labelledby="technical-close-title">
        <p className="kicker">POSITIONING STATEMENT (Technical Close)</p>
        <h2 id="technical-close-title">This is not a waste-treatment system.</h2>
        <p>
          It is a critical-minerals recovery platform engineered for scale, security, and
          permanence.
        </p>
      </section>
    </div>
  );
}
