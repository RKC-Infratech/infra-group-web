import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Phone,
  Globe,
  Check,
  Shield,
  Truck,
  Wrench,
  Factory,
  Anchor,
} from "lucide-react";

/** Remote Unsplash images — visually verified for steel / infrastructure content */
const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

const IMG = {
  // Hero: welding → steel grinding/fabrication → steel bridge
  heroSteelBars: u("photo-1504328345606-18bbc8c9d7d1", 2000),
  heroFabrication: u("photo-1504917595217-d4dc5ebe6122", 2000),
  heroBridgeBuild: u("photo-1449034446853-66c86144b0ad", 2000),

  // About: major construction + site engineering
  aboutMill: u("photo-1565008447742-97f6f38c985c", 1200),
  aboutEngineer: u("photo-1541888946425-d81bb19240f5", 1200),

  // Vision background: high-rise infrastructure build
  visionBg: u("photo-1565008447742-97f6f38c985c", 1600),

  // Product range: reinforcement steel / rebar on site
  threadBars: u("photo-1541888946425-d81bb19240f5", 1200),

  // Grade PSB830: steel fabrication sparks (strength)
  gradeSteel: u("photo-1504917595217-d4dc5ebe6122", 1200),

  // Application sectors
  sectorBridge: u("photo-1449034446853-66c86144b0ad", 1200),
  sectorGeotech: u("photo-1541888946425-d81bb19240f5", 1200),
  sectorIndustrial: u("photo-1513828583688-c52646db42da", 1200),
  sectorTunnel: u("photo-1504328345606-18bbc8c9d7d1", 1200),

  // Gallery strip
  galleryThreadBars: u("photo-1504328345606-18bbc8c9d7d1", 800),
  galleryBridge: u("photo-1449034446853-66c86144b0ad", 800),
  galleryPostTension: u("photo-1504917595217-d4dc5ebe6122", 800),
  galleryAnchors: u("photo-1541888946425-d81bb19240f5", 800),
  galleryTunnel: u("photo-1587293852726-70cdb56c2866", 800),
  galleryMetro: u("photo-1474487548417-781cb71495f3", 800),

  // Quality: engineering drawings / technical review
  quality: u("photo-1503387837-b154d5074bd2", 1200),

  // Global: port / export logistics
  globalSupply: u("photo-1578575437130-527eed3abbec", 1200),

  // Why Choose side visual
  whyChooseBg: u("photo-1504328345606-18bbc8c9d7d1", 1200),

  // Partnership
  partnerFactory: u("photo-1513828583688-c52646db42da", 1000),
  partnerIndia: u("photo-1474487548417-781cb71495f3", 1000),

  // CTA: steel bridge infrastructure
  cta: u("photo-1449034446853-66c86144b0ad", 2000),
} as const;

const applications = [
  "Bridge Construction",
  "Segmental Bridge Projects",
  "Post-Tensioning Systems",
  "Geotechnical Anchors",
  "Soil Nailing",
  "Micropiles",
  "Rock Anchors",
  "Tunneling",
  "Mining Projects",
  "Reinforcement Couplers",
  "Formwork Tie Systems",
  "Industrial Structures",
];

const keyFeatures = [
  "High Yield Strength",
  "Excellent Tensile Capacity",
  "Low Anchorage Draw-In",
  "Enhanced Fatigue Resistance",
  "Improved Concrete Bond Strength",
  "High Static Load Performance",
  "Long Service Life",
];

const systemComponents = [
  "Thread Bars",
  "Hex Nuts",
  "Spherical Hex Nuts",
  "Bearing Plates",
  "Couplers",
  "Anchor Assemblies",
  "Custom Fabricated Components",
];

const applicationSectors = [
  {
    title: "Bridge Engineering",
    image: IMG.sectorBridge,
    items: [
      "Segmental Bridges",
      "PSC Bridges",
      "Cable Supported Structures",
      "Launching Girder Systems",
      "Pier Construction",
    ],
  },
  {
    title: "Geotechnical Engineering",
    image: IMG.sectorGeotech,
    items: [
      "Rock Anchors",
      "Soil Nails",
      "Ground Anchors",
      "Micropiles",
      "Slope Stabilization",
    ],
  },
  {
    title: "Industrial Construction",
    image: IMG.sectorIndustrial,
    items: [
      "Heavy Equipment Foundations",
      "Structural Connections",
      "Reinforcement Continuity Systems",
    ],
  },
  {
    title: "Tunneling & Mining",
    image: IMG.sectorTunnel,
    items: [
      "Tunnel Support Systems",
      "Underground Excavation Support",
      "Mining Ground Stabilization",
    ],
  },
];

const standards = [
  "ASTM A722 / A722M",
  "GB/T 14370",
  "GB/T 20065",
  "Highway Bridge Construction Specifications",
];

const regions = ["Asia", "Africa", "Middle East", "Australia", "Latin America", "Russia"];

const whyChoose = [
  {
    icon: Factory,
    title: "Global Manufacturing Excellence",
    description:
      "Products manufactured by one of the leading High Strength Thread Bar manufacturers.",
  },
  {
    icon: Globe,
    title: "Indian Market Presence",
    description: "Dedicated sales, logistics and technical support across India.",
  },
  {
    icon: Wrench,
    title: "Engineering Support",
    description:
      "Assistance in design coordination, technical submittals and project execution.",
  },
  {
    icon: Truck,
    title: "Reliable Supply Chain",
    description: "Efficient import, stocking and project delivery support.",
  },
  {
    icon: Anchor,
    title: "Infrastructure Focus",
    description:
      "Specialized solutions for NHAI Projects, Railways, Metro Projects, Bridge Construction, Industrial Infrastructure and Geotechnical Projects.",
  },
  {
    icon: Shield,
    title: "Certified Quality",
    description:
      "Manufactured under stringent international quality standards and supported in India by Imagine Steel.",
  },
];

const industries = [
  "Infrastructure EPC Contractors",
  "Bridge Contractors",
  "Metro Rail Projects",
  "Railways",
  "Mining Companies",
  "Tunneling Contractors",
  "Industrial Developers",
  "Government Organizations",
  "Consultants & Designers",
];

const missionPoints = [
  "Deliver globally certified steel products.",
  "Support India's infrastructure growth.",
  "Provide technical engineering assistance.",
  "Ensure timely supply and project execution support.",
  "Build long-term partnerships with EPC contractors, consultants and government agencies.",
];

const galleryStrip = [
  { src: IMG.galleryThreadBars, label: "Steel Fabrication" },
  { src: IMG.galleryBridge, label: "Bridge Construction" },
  { src: IMG.galleryPostTension, label: "HS Steel Works" },
  { src: IMG.galleryAnchors, label: "Site Engineering" },
  { src: IMG.galleryTunnel, label: "Supply & Stocking" },
  { src: IMG.galleryMetro, label: "Rail Logistics" },
];

type RevealVariant = "up" | "left" | "right" | "scale" | "clip" | "rotate";

function Reveal({
  children,
  className = "",
  delay = 0,
  variant = "up",
}: {
  children: ReactNode;
  className?: string;
  delay?: 0 | 1 | 2 | 3 | 4 | 5;
  variant?: RevealVariant;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const variantClass =
    variant === "up"
      ? "steel-reveal-up"
      : `steel-reveal-${variant}`;
  const delayClass = delay ? `steel-reveal-delay-${delay}` : "";

  return (
    <div
      ref={ref}
      className={`${variantClass} ${delayClass} ${visible ? "is-visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

function useCountUp(target: number, active: boolean, duration = 1400) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start: number | null = null;
    let frame = 0;
    const step = (ts: number) => {
      if (start === null) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [active, target, duration]);

  return value;
}

const ImaginesteelPrivateLimited = () => {
  const gradeRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const [gradeVisible, setGradeVisible] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const mpa = useCountUp(830, gradeVisible);
  const countries = useCountUp(20, statsVisible);

  useEffect(() => {
    const observe = (
      el: HTMLElement | null,
      set: (v: boolean) => void,
      threshold = 0.3
    ) => {
      if (!el) return () => undefined;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            set(true);
            observer.disconnect();
          }
        },
        { threshold }
      );
      observer.observe(el);
      return () => observer.disconnect();
    };
    const cleanGrade = observe(gradeRef.current, setGradeVisible);
    const cleanStats = observe(statsRef.current, setStatsVisible, 0.25);
    return () => {
      cleanGrade();
      cleanStats();
    };
  }, []);

  return (
    <div className="steel-page overflow-x-hidden">
      {/* Hero with rotating backgrounds */}
      <section className="relative min-h-[100svh] flex items-end md:items-center overflow-hidden">
        {[IMG.heroSteelBars, IMG.heroFabrication, IMG.heroBridgeBuild].map((src, i) => (
          <div
            key={src}
            className="absolute inset-0 steel-hero-slide"
            style={{
              backgroundImage: `linear-gradient(105deg, rgba(18,21,26,0.9) 0%, rgba(18,21,26,0.55) 48%, rgba(18,21,26,0.4) 100%), url("${src}")`,
              zIndex: 0,
              animationDelay: i === 0 ? "0s" : i === 1 ? "-6s" : "-12s",
            }}
          />
        ))}
        <div
          className="pointer-events-none absolute -left-20 top-1/3 h-72 w-72 rounded-full bg-amber-500/30 blur-3xl steel-forge-glow z-[1]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute right-10 bottom-24 h-2 w-2 rounded-full bg-amber-300 steel-spark z-[1]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute right-1/3 top-1/4 h-1.5 w-1.5 rounded-full bg-amber-200 steel-spark z-[1]"
          style={{ animationDelay: "0.8s" }}
          aria-hidden
        />
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-40 w-40 rounded-full border border-amber-400/30 steel-pulse-ring z-[1]" aria-hidden />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 pt-28 md:py-24">
          <p className="steel-display text-amber-400 text-sm md:text-base tracking-[0.28em] mb-4 animate-fade-in">
            Imagine Steel Private Limited
          </p>
          <h1 className="steel-display steel-shimmer-text text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] max-w-4xl mb-6 animate-fade-in">
            Engineering Strength.
            <br />
            Building Trust.
          </h1>
          <p className="text-lg md:text-xl text-slate-200 max-w-xl mb-10 leading-relaxed animate-fade-in">
            Authorized Marketing &amp; Distribution Partner in India for High Strength Thread Bar
            Systems.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in">
            <Button
              asChild
              size="lg"
              className="steel-cta-glow bg-amber-500 hover:bg-amber-400 font-semibold text-base px-8"
              style={{ color: "#12151a" }}
            >
              <Link to="/contact">Request Technical Quote</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/40 bg-white/5 text-white hover:bg-white/15 hover:text-white"
            >
              <a href="#products">Explore Thread Bars</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Floating image strip */}
      <section className="relative -mt-10 z-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {galleryStrip.map((item, index) => (
            <Reveal key={item.src} variant="scale" delay={(index % 5) as 0 | 1 | 2 | 3 | 4}>
              <div
                className={`steel-img-zoom relative h-28 md:h-36 overflow-hidden shadow-xl ${
                  index % 2 === 0 ? "steel-float" : "steel-float-slow steel-float-delay"
                }`}
              >
                <img
                  src={item.src}
                  alt={item.label}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-2 py-2">
                  <span className="steel-display text-xs text-white tracking-wide">{item.label}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* About with images */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <Reveal className="lg:col-span-5" variant="left">
              <p className="steel-display text-amber-600 text-sm tracking-[0.22em] mb-3">
                About Imagine Steel
              </p>
              <h2 className="steel-display text-4xl md:text-5xl font-bold text-[var(--steel-ink)] leading-tight mb-6">
                World-class steel solutions for India&apos;s infrastructure
              </h2>
              <div className="space-y-5 text-lg text-slate-600 leading-relaxed">
                <p>
                  Imagine Steel Private Limited is committed to delivering world-class steel solutions
                  to India&apos;s rapidly growing infrastructure sector. Through our strategic
                  partnership with Tianjin Cathay Pacific Steel Co., Ltd., a globally recognized
                  manufacturer of High Strength Thread Bars and Anchoring Systems, we bring
                  internationally proven technology to Indian bridge, metro, tunneling, geotechnical,
                  industrial, and infrastructure projects.
                </p>
                <p>
                  All High Strength Thread Bars supplied by Imagine Steel are manufactured by Tianjin
                  Cathay Pacific Steel Co., Ltd. under stringent international quality standards and
                  marketed, distributed, and supported in India by Imagine Steel Private Limited.
                </p>
              </div>
            </Reveal>
            <div className="lg:col-span-7 grid grid-cols-2 gap-4">
              <Reveal variant="clip" delay={1} className="steel-img-zoom steel-scan relative h-64 md:h-80">
                <img
                  src={IMG.aboutMill}
                  alt="Steel manufacturing mill"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </Reveal>
              <Reveal variant="right" delay={2} className="steel-img-zoom mt-8 md:mt-16 h-64 md:h-80">
                <img
                  src={IMG.aboutEngineer}
                  alt="Infrastructure engineering support"
                  className="h-full w-full object-cover steel-swing"
                  loading="lazy"
                />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-[var(--steel-ink)] text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("${IMG.visionBg}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-[var(--steel-ink)]/90" aria-hidden />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            <Reveal variant="left">
              <p className="steel-display text-amber-400 text-sm tracking-[0.22em] mb-3">
                Our Vision
              </p>
              <h2 className="steel-display text-3xl md:text-4xl font-bold mb-4 leading-tight">
                India&apos;s most trusted supplier of specialized high-strength steel systems
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed">
                For infrastructure, bridges, transportation, industrial and geotechnical engineering
                projects.
              </p>
            </Reveal>
            <Reveal variant="right" delay={1} className="steel-stagger-child">
              <p className="steel-display text-amber-400 text-sm tracking-[0.22em] mb-3">
                Our Mission
              </p>
              <ul className="space-y-3">
                {missionPoints.map((point) => (
                  <li key={point} className="flex gap-3 text-slate-200">
                    <Check className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-14">
            <Reveal variant="left">
              <p className="steel-display text-amber-600 text-sm tracking-[0.22em] mb-3">
                High Strength Thread Bar Systems
              </p>
              <h2 className="steel-display text-4xl md:text-5xl font-bold mb-4">Product Range</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                HS Thread Bars available in diameters from 15 mm to 75 mm with yield strengths up to
                prestressing steel grades — engineered for demanding infrastructure applications.
              </p>
            </Reveal>
            <Reveal variant="scale" delay={1} className="steel-img-zoom relative h-56 md:h-72">
              <img
                src={IMG.threadBars}
                alt="High strength thread bar and reinforcement steel"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent" />
            </Reveal>
          </div>

          <div className="mb-10 overflow-hidden border-y border-slate-200/80 py-5">
            <div className="flex steel-marquee-track w-max">
              {[...applications, ...applications].map((app, i) => (
                <span
                  key={`${app}-${i}`}
                  className="steel-display mx-6 text-xl md:text-2xl font-semibold text-slate-500 whitespace-nowrap"
                >
                  {app}
                  <span className="ml-6 text-amber-500">/</span>
                </span>
              ))}
            </div>
          </div>

          <Reveal variant="up" className="steel-stagger-child grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-4">
            {applications.map((app) => (
              <div key={app} className="flex items-start gap-3 py-2">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-amber-500 shrink-0 steel-pulse-ring" />
                <span className="font-medium text-slate-800">{app}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Key Features + Grade */}
      <section className="py-20 bg-slate-100/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <Reveal variant="left">
              <p className="steel-display text-amber-600 text-sm tracking-[0.22em] mb-3">
                Key Features
              </p>
              <h2 className="steel-display text-4xl font-bold mb-4">
                Superior Mechanical Performance
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                The HS Prestressing Thread Bar system offers improved anchorage performance, fatigue
                properties and concrete bond characteristics compared with conventional steel
                reinforcement systems.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {keyFeatures.map((feature, i) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-slate-800 font-medium transition-transform duration-300 hover:translate-x-1"
                    style={{ transitionDelay: `${i * 40}ms` }}
                  >
                    <Check className="h-4 w-4 text-amber-600 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal variant="rotate" delay={2}>
              <div
                ref={gradeRef}
                className="relative bg-[var(--steel-ink)] text-white p-8 md:p-10 overflow-hidden"
              >
                <img
                  src={IMG.gradeSteel}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover opacity-20"
                  loading="lazy"
                />
                <div
                  className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-amber-500/20 blur-2xl steel-forge-glow"
                  aria-hidden
                />
                <div className="relative">
                  <p className="steel-display text-amber-400 text-sm tracking-[0.22em] mb-2">
                    Available Grades
                  </p>
                  <h3 className="steel-display text-5xl font-bold mb-2">PSB830</h3>
                  <p className="text-slate-300 mb-2">
                    Minimum yield strength of{" "}
                    <span className={`text-amber-400 font-bold text-3xl inline-block ${gradeVisible ? "steel-count-pop is-visible" : ""}`}>
                      {mpa}
                    </span>{" "}
                    <span className="text-white font-semibold">MPa</span>.
                  </p>
                  <p className="text-slate-400 text-sm mb-8">Higher grades available on request.</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm text-slate-400 steel-display tracking-wider">
                      <span>Yield Strength</span>
                      <span>830 MPa</span>
                    </div>
                    <div className="h-3 bg-slate-700 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r from-amber-600 to-amber-400 steel-bar-fill ${
                          gradeVisible ? "is-visible" : ""
                        }`}
                        style={{ ["--bar-width" as string]: "83%" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* System Components */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal variant="scale" className="text-center max-w-3xl mx-auto mb-14">
            <p className="steel-display text-amber-600 text-sm tracking-[0.22em] mb-3">
              Complete System
            </p>
            <h2 className="steel-display text-4xl md:text-5xl font-bold mb-4">
              Anchoring Solution Components
            </h2>
            <p className="text-lg text-slate-600">
              An integrated anchoring and prestressing system suitable for demanding infrastructure
              projects.
            </p>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {systemComponents.map((component, index) => (
              <Reveal key={component} variant="scale" delay={(index % 4) as 0 | 1 | 2 | 3}>
                <div className="group border border-slate-200 bg-white/70 px-5 py-8 text-center transition-all duration-500 hover:border-amber-500/50 hover:-translate-y-2 hover:rotate-1 hover:shadow-xl">
                  <div className="mx-auto mb-4 h-10 w-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-amber-500 group-hover:bg-amber-50 group-hover:scale-110 transition-all duration-300">
                    <span className="steel-display text-amber-600 font-bold text-sm">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="steel-display text-xl font-semibold text-slate-900">
                    {component}
                  </h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Applications by sector — image cards */}
      <section className="py-20 bg-[var(--steel-slate)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal variant="up" className="mb-14 max-w-2xl">
            <p className="steel-display text-amber-400 text-sm tracking-[0.22em] mb-3">
              Applications
            </p>
            <h2 className="steel-display text-4xl md:text-5xl font-bold mb-4">
              Built for critical infrastructure
            </h2>
            <p className="text-slate-300 text-lg">
              Thread Bar Systems are used worldwide in bridge, building, underground construction,
              tunneling and mining applications.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {applicationSectors.map((sector, index) => (
              <Reveal
                key={sector.title}
                variant={index % 2 === 0 ? "left" : "right"}
                delay={(index % 3) as 0 | 1 | 2}
              >
                <div className="steel-img-zoom group relative overflow-hidden min-h-[280px]">
                  <img
                    src={sector.image}
                    alt={sector.title}
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/20 transition-opacity duration-500 group-hover:from-black/95" />
                  <div className="relative p-6 md:p-8 h-full flex flex-col justify-end">
                    <h3 className="steel-display text-2xl md:text-3xl font-bold text-amber-400 mb-3">
                      {sector.title}
                    </h3>
                    <ul className="space-y-1.5 translate-y-2 opacity-90 group-hover:translate-y-0 transition-transform duration-500">
                      {sector.items.map((item) => (
                        <li key={item} className="text-slate-200 flex gap-2 text-sm md:text-base">
                          <span className="text-amber-500">·</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quality & Global */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal variant="clip">
              <p className="steel-display text-amber-600 text-sm tracking-[0.22em] mb-3">
                Quality &amp; Standards
              </p>
              <h2 className="steel-display text-4xl font-bold mb-6">
                Manufactured to international standards
              </h2>
              <ul className="space-y-4 mb-8">
                {standards.map((standard) => (
                  <li
                    key={standard}
                    className="flex items-center gap-4 border-l-2 border-amber-500 pl-4 py-1 hover:pl-6 transition-all duration-300"
                  >
                    <Shield className="h-5 w-5 text-amber-600 shrink-0" />
                    <span className="font-semibold text-slate-800">{standard}</span>
                  </li>
                ))}
              </ul>
              <div className="steel-img-zoom h-48 overflow-hidden">
                <img
                  src={IMG.quality}
                  alt="Quality inspection and engineering standards"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </Reveal>

            <Reveal variant="right" delay={1}>
              <div ref={statsRef}>
                <p className="steel-display text-amber-600 text-sm tracking-[0.22em] mb-3">
                  Global Experience
                </p>
                <h2 className="steel-display text-4xl font-bold mb-4">
                  Proven across{" "}
                  <span className={`text-amber-600 inline-block ${statsVisible ? "steel-count-pop is-visible" : ""}`}>
                    {countries}+
                  </span>{" "}
                  countries
                </h2>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  Tianjin imported products have been supplied to infrastructure projects across
                  regions worldwide.
                </p>
                <div className="flex flex-wrap gap-3">
                  {regions.map((region, i) => (
                    <span
                      key={region}
                      className="steel-display text-lg tracking-wide px-4 py-2 bg-slate-900 text-white transition-transform duration-300 hover:-translate-y-1 hover:bg-amber-600"
                      style={{ transitionDelay: `${i * 50}ms` }}
                    >
                      {region}
                    </span>
                  ))}
                </div>
                <div className="steel-img-zoom mt-8 h-52 overflow-hidden">
                  <img
                    src={IMG.globalSupply}
                    alt="Global steel supply and logistics"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-20 bg-slate-100/80 relative overflow-hidden">
        <div
          className="absolute right-0 top-0 h-full w-1/3 opacity-10 pointer-events-none hidden lg:block"
          style={{
            backgroundImage: `url("${IMG.whyChooseBg}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal variant="scale" className="text-center mb-14">
            <p className="steel-display text-amber-600 text-sm tracking-[0.22em] mb-3">
              Why Choose Imagine Steel?
            </p>
            <h2 className="steel-display text-4xl md:text-5xl font-bold">
              Strength in partnership &amp; delivery
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChoose.map((item, index) => (
              <Reveal key={item.title} variant="up" delay={(index % 3) as 0 | 1 | 2}>
                <div className="h-full p-6 bg-white/60 border border-transparent hover:border-amber-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-lg">
                  <div className="relative inline-block mb-4">
                    <span className="absolute inset-0 rounded-full bg-amber-400/20 steel-pulse-ring" />
                    <item.icon className="relative h-8 w-8 text-amber-600" strokeWidth={1.5} />
                  </div>
                  <h3 className="steel-display text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Industries — reverse marquee */}
      <section className="py-16 overflow-hidden border-y border-slate-200">
        <Reveal variant="up" className="text-center mb-8 px-4">
          <h2 className="steel-display text-3xl md:text-4xl font-bold">Industries We Serve</h2>
        </Reveal>
        <div className="overflow-hidden mb-4">
          <div className="flex steel-marquee-track w-max py-2">
            {[...industries, ...industries].map((industry, i) => (
              <span
                key={`a-${industry}-${i}`}
                className="steel-display mx-5 text-2xl md:text-3xl font-semibold text-slate-400 whitespace-nowrap"
              >
                {industry}
                <span className="mx-5 text-amber-500">/</span>
              </span>
            ))}
          </div>
        </div>
        <div className="overflow-hidden">
          <div className="flex steel-marquee-track-reverse w-max py-2">
            {[...industries, ...industries].map((industry, i) => (
              <span
                key={`b-${industry}-${i}`}
                className="steel-display mx-5 text-xl md:text-2xl font-semibold text-slate-300 whitespace-nowrap"
              >
                {industry}
                <span className="mx-5 text-amber-400">/</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal variant="up" className="text-center mb-14">
            <p className="steel-display text-amber-600 text-sm tracking-[0.22em] mb-3">Partnership</p>
            <h2 className="steel-display text-4xl md:text-5xl font-bold">
              Global technology. Local delivery.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Reveal variant="left">
              <div className="border-t-4 border-amber-500 bg-white px-8 py-10 shadow-sm h-full transition-transform duration-500 hover:-translate-y-2">
                <div className="steel-img-zoom h-36 mb-6 -mx-8 -mt-10 overflow-hidden">
                  <img
                    src={IMG.partnerFactory}
                    alt="Tianjin manufacturing partner steel facility"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <p className="steel-display text-sm tracking-[0.2em] text-slate-500 mb-2">
                  Manufacturing Partner
                </p>
                <h3 className="steel-display text-3xl font-bold mb-3">
                  Tianjin Cathay Pacific Steel Co., Ltd.
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Global Manufacturer of High Strength Thread Bar Systems &amp; Anchoring Solutions.
                </p>
              </div>
            </Reveal>
            <Reveal variant="right" delay={1}>
              <div className="border-t-4 border-[var(--steel-ink)] bg-[var(--steel-ink)] text-white px-8 py-10 h-full transition-transform duration-500 hover:-translate-y-2">
                <div className="steel-img-zoom h-36 mb-6 -mx-8 -mt-10 overflow-hidden opacity-80">
                  <img
                    src={IMG.partnerIndia}
                    alt="India metro and infrastructure distribution"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <p className="steel-display text-sm tracking-[0.2em] text-amber-400 mb-2">
                  Indian Marketing &amp; Distribution Partner
                </p>
                <h3 className="steel-display text-3xl font-bold mb-3">
                  Imagine Steel Private Limited
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  Delivering global steel technology to India&apos;s infrastructure growth.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 steel-hero-slide"
          style={{
            backgroundImage: `linear-gradient(rgba(18,21,26,0.9), rgba(18,21,26,0.85)), url("${IMG.cta}")`,
          }}
        />
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/25 blur-3xl steel-forge-glow"
          aria-hidden
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <Reveal variant="scale">
            <p className="steel-display text-amber-400 text-sm tracking-[0.28em] mb-4">
              Imagine Steel Private Limited
            </p>
            <h2 className="steel-display text-4xl md:text-6xl font-bold mb-4 steel-shimmer-text">
              Engineering Strength.
              <br />
              Building India&apos;s Future.
            </h2>
            <p className="text-slate-300 mb-8 max-w-xl mx-auto">
              Corporate Office – India · Authorized Marketing &amp; Distribution Partner for Tianjin
              High Strength Thread Bar Systems
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-10 text-slate-200">
              <a
                href="mailto:imaginesteelprivatelimited@gmail.com"
                className="inline-flex items-center gap-2 hover:text-amber-400 transition-colors"
              >
                <Mail className="h-4 w-4" />
                imaginesteelprivatelimited@gmail.com
              </a>
              <a
                href="tel:+919993578006"
                className="inline-flex items-center gap-2 hover:text-amber-400 transition-colors"
              >
                <Phone className="h-4 w-4" />
                +91 9993578006
              </a>
              <a
                href="https://imagineeringbridges.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-amber-400 transition-colors"
              >
                <Globe className="h-4 w-4" />
                imagineeringbridges.com
              </a>
            </div>
            <Button
              asChild
              size="lg"
              className="steel-cta-glow bg-amber-500 hover:bg-amber-400 font-semibold px-10"
              style={{ color: "#12151a" }}
            >
              <Link to="/contact">Contact Imagine Steel</Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default ImaginesteelPrivateLimited;
