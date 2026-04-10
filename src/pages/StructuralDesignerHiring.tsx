import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { Check, MapPin } from "lucide-react";

const COMPANY = "Imagineering Bridges India LLP";

/** Local assets — bridge / site / engineering theme */
const IMG = {
  hero: "/hiring/hero-bridge.jpg",
  blueprint: "/hiring/blueprint.jpg",
  site: "/hiring/construction-site.jpg",
  steel: "/hiring/steel-structure.jpg",
} as const;

const visualCards = [
  { src: IMG.blueprint, label: "Drawings & plans", sub: "AutoCAD & technical sheets" },
  { src: IMG.site, label: "On-site exposure", sub: "Construction & coordination" },
  { src: IMG.steel, label: "Structures & bridges", sub: "Real design projects" },
] as const;
const PHONE_DISPLAY = "9993578006";
const WHATSAPP_E164 = "919993578006";
const WHATSAPP_MESSAGE =
  "Hi, I am interested in the Structural Designer role at Imagineering Bridges.";

const getWhatsAppHref = () =>
  `https://wa.me/${WHATSAPP_E164}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

const highlights = [
  "Structural Design",
  "AutoCAD Knowledge",
  "Construction Basics",
  "Bridge Designing",
] as const;

const responsibilities = [
  "Work on structural design tasks",
  "Assist in bridge design projects",
  "Use AutoCAD for drawings",
  "Support construction-related planning",
];

const whoCanApply = [
  "Civil engineering students or candidates",
  "Freshers and learners can apply",
  "Must be available for on-site work in Bhopal",
];

const StructuralDesignerHiring = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    full_name: "",
    phone: "",
    education: "",
    skills: "",
    experience: "",
  });

  const scrollToRole = () => {
    document.getElementById("role-overview")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.full_name.trim() || !form.phone.trim() || !form.education.trim() || !form.skills.trim()) {
      toast({
        title: "Please fill required fields",
        description: "Name, phone, education, and skills are required.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    const message = [
      "[Structural Designer — Hiring Form]",
      `Phone: ${form.phone.trim()}`,
      `Education / Background: ${form.education.trim()}`,
      `Skills: ${form.skills.trim()}`,
      form.experience.trim()
        ? `Experience: ${form.experience.trim()}`
        : "Experience: (not provided)",
    ].join("\n");

    const uniqueEmail = `hiring-${Date.now()}-${Math.random().toString(36).slice(2, 9)}@example.com`;

    const { error } = await supabase.from("contact_submissions").insert([
      {
        name: form.full_name.trim(),
        email: uniqueEmail,
        contact_number: form.phone.trim(),
        company: null,
        service: "Hiring — Structural Designer",
        message,
      },
    ]);
    setLoading(false);

    if (error) {
      toast({
        title: "Could not submit",
        description: "Please try WhatsApp or call us instead.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Application received",
      description: "We will contact you on your number. You can also message us on WhatsApp.",
    });
    setForm({
      full_name: "",
      phone: "",
      education: "",
      skills: "",
      experience: "",
    });
  };

  const waHref = getWhatsAppHref();

  return (
    <div className="bg-slate-50 text-slate-900 pb-24 md:pb-8">
      {/* Hero — full-bleed image + overlay */}
      <section className="relative overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0">
          <img
            src={IMG.hero}
            alt=""
            className="h-full w-full object-cover object-center"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-slate-900/88 to-slate-800/75" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(59,130,246,0.15),transparent)]" />
        </div>
        <div className="relative z-10 mx-auto max-w-5xl px-4 py-12 sm:py-16 lg:py-20">
          <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-emerald-300 backdrop-blur-sm">
            Hiring now · Bhopal
          </div>
          <p className="mt-4 text-sm font-medium uppercase tracking-wide text-slate-300">
            {COMPANY}
          </p>
          <h1 className="mt-2 max-w-2xl font-playfair text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            We Are Hiring – Structural Designer
          </h1>
          <p className="mt-4 max-w-xl text-base text-slate-200 sm:text-lg">
            Join Imagineering Bridges India LLP and work on real structural and bridge design
            projects
          </p>

          <ul className="mt-8 grid max-w-lg gap-3 sm:grid-cols-2">
            {highlights.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-100 backdrop-blur-sm"
              >
                <Check className="h-4 w-4 shrink-0 text-emerald-400" aria-hidden />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button
              asChild
              size="lg"
              className="h-12 w-full bg-[#25D366] text-base font-semibold text-white shadow-lg shadow-emerald-900/30 hover:bg-[#20BD5A] sm:w-auto"
            >
              <a href={waHref} target="_blank" rel="noopener noreferrer">
                Apply via WhatsApp
              </a>
            </Button>
            <Button
              type="button"
              variant="outline"
              size="lg"
              className="h-12 w-full border-white/40 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 sm:w-auto"
              onClick={scrollToRole}
            >
              View Job Details
            </Button>
          </div>

          <p className="mt-8 text-center text-sm text-slate-300 sm:text-left">
            DM Resume @{" "}
            <a
              href={`tel:+${WHATSAPP_E164}`}
              className="font-semibold text-white underline decoration-emerald-500/80 underline-offset-2 hover:text-emerald-100"
            >
              {PHONE_DISPLAY}
            </a>
          </p>
        </div>
      </section>

      {/* Visual — photo grid */}
      <section className="border-b border-slate-200 bg-gradient-to-b from-white to-slate-50 py-12">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-center font-playfair text-2xl font-semibold text-slate-900 sm:text-3xl">
            Engineering that you&apos;ll work on
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-slate-600">
            Real engineering work — structure, drawings, and practical projects
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {visualCards.map((card) => (
              <div
                key={card.label}
                className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-100 shadow-md transition hover:shadow-xl"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={card.src}
                    alt=""
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <p className="font-semibold leading-tight">{card.label}</p>
                  <p className="mt-0.5 text-xs text-slate-200">{card.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About — image + text */}
      <section className="border-b border-slate-200 py-12">
        <div className="mx-auto grid max-w-5xl items-center gap-8 px-4 md:grid-cols-2 md:gap-12">
          <div className="relative overflow-hidden rounded-2xl border border-slate-200 shadow-lg">
            <img
              src={IMG.steel}
              alt=""
              className="aspect-[4/3] w-full object-cover md:aspect-square"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute bottom-3 left-3 rounded-md bg-white/95 px-2.5 py-1 text-xs font-medium text-slate-800 shadow-sm">
              Bridge & structural focus
            </div>
          </div>
          <div>
            <h2 className="font-playfair text-2xl font-semibold text-slate-900 sm:text-3xl">
              About the company
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-700">
              Imagineering Bridges India LLP is focused on structural and bridge design projects,
              providing real-world engineering exposure.
            </p>
          </div>
        </div>
      </section>

      {/* Role */}
      <section id="role-overview" className="scroll-mt-20 border-b border-slate-200 bg-white py-12">
        <div className="mx-auto max-w-5xl px-4">
          <div className="overflow-hidden rounded-2xl border border-slate-100 bg-slate-50/80 shadow-sm md:flex">
            <div className="relative hidden w-2/5 shrink-0 md:block">
              <img
                src={IMG.blueprint}
                alt=""
                className="h-full min-h-[220px] w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="flex-1 border-t border-slate-100 p-6 sm:p-8 md:border-l md:border-t-0">
              <h2 className="font-playfair text-2xl font-semibold text-slate-900 sm:text-3xl">
                Structural Designer Role
              </h2>
              <p className="mt-2 text-sm font-medium text-slate-500">Responsibilities</p>
              <ul className="mt-5 space-y-3 text-slate-700">
                {responsibilities.map((r) => (
                  <li key={r} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="border-b border-slate-200 py-12">
        <div className="mx-auto max-w-5xl px-4">
          <div className="rounded-2xl border border-primary/15 bg-gradient-to-br from-primary/5 via-white to-slate-50 p-6 sm:p-8">
            <h2 className="font-playfair text-2xl font-semibold text-slate-900 sm:text-3xl">
              Skills Required
            </h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-slate-200/80 bg-white px-4 py-3 text-slate-800 shadow-sm"
                >
                  <Check className="h-5 w-5 shrink-0 text-primary" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Who can apply */}
      <section className="border-b border-slate-200 bg-white py-12">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="font-playfair text-xl font-semibold text-slate-900">Who Can Apply</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
            {whoCanApply.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Work details */}
      <section className="relative border-b border-slate-200 py-12">
        <div className="pointer-events-none absolute inset-0 opacity-[0.07]">
          <img src={IMG.site} alt="" className="h-full w-full object-cover" loading="lazy" />
        </div>
        <div className="relative mx-auto max-w-5xl px-4">
          <div className="rounded-2xl border border-slate-200 bg-white/95 p-6 shadow-sm backdrop-blur-sm sm:p-8">
            <h2 className="font-playfair text-2xl font-semibold text-slate-900 sm:text-3xl">
              Work Details
            </h2>
            <div className="mt-6 space-y-4 text-slate-700">
              <p className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                <span>
                  <span className="font-medium text-slate-900">Location: </span>
                  Alpine Jewel, Mahabali Nagar, Kolar Road, Bhopal
                </span>
              </p>
              <p>
                <span className="font-medium text-slate-900">Work type: </span>
                On-site
              </p>
              <p className="rounded-lg bg-amber-50 px-3 py-2 text-sm text-amber-950">
                Local candidates preferred
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="border-b border-slate-200 bg-white py-12">
        <div className="mx-auto max-w-5xl px-4">
          <Card className="border-slate-200 shadow-md">
            <CardHeader>
              <CardTitle className="font-playfair text-xl">Apply Online (Quick Form)</CardTitle>
              <p className="text-sm text-muted-foreground">
                Fill this short form — we will reach out using your phone number.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="full_name" className="mb-1 block text-sm font-medium">
                    Full Name <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="full_name"
                    name="full_name"
                    autoComplete="name"
                    value={form.full_name}
                    onChange={handleChange}
                    className="min-h-11"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-1 block text-sm font-medium">
                    Phone Number <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    inputMode="numeric"
                    autoComplete="tel"
                    value={form.phone}
                    onChange={handleChange}
                    className="min-h-11"
                  />
                </div>
                <div>
                  <label htmlFor="education" className="mb-1 block text-sm font-medium">
                    Education / Background <span className="text-destructive">*</span>
                  </label>
                  <Textarea
                    id="education"
                    name="education"
                    rows={3}
                    value={form.education}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="skills" className="mb-1 block text-sm font-medium">
                    Skills <span className="text-destructive">*</span>
                  </label>
                  <Textarea
                    id="skills"
                    name="skills"
                    rows={3}
                    value={form.skills}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="experience" className="mb-1 block text-sm font-medium">
                    Experience (optional)
                  </label>
                  <Textarea
                    id="experience"
                    name="experience"
                    rows={2}
                    placeholder="Optional — internships, projects, years"
                    value={form.experience}
                    onChange={handleChange}
                  />
                </div>
                <p className="text-xs text-muted-foreground">
                  By submitting, you agree to be contacted about this role on the number you shared.
                </p>
                <Button type="submit" className="h-11 w-full sm:w-auto" disabled={loading}>
                  {loading ? "Submitting…" : "Submit Application"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* WhatsApp primary */}
      <section className="relative overflow-hidden border-b border-slate-200 py-14">
        <div className="absolute inset-0">
          <img
            src={IMG.hero}
            alt=""
            className="h-full w-full object-cover object-[center_40%]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-slate-900/88 backdrop-blur-[2px]" />
        </div>
        <div className="relative mx-auto max-w-3xl px-4 text-center text-white">
          <h2 className="font-playfair text-2xl font-semibold sm:text-3xl">Apply Now on WhatsApp</h2>
          <p className="mt-3 text-sm text-slate-200">
            Fastest way to apply — send your resume or intro message in one tap.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-8 h-12 w-full max-w-md bg-[#25D366] text-base font-semibold text-white shadow-lg shadow-black/20 hover:bg-[#20BD5A]"
          >
            <a href={waHref} target="_blank" rel="noopener noreferrer">
              Apply Now on WhatsApp
            </a>
          </Button>
          <p className="mt-5 text-xl font-semibold tabular-nums tracking-tight">{PHONE_DISPLAY}</p>
        </div>
      </section>

      {/* Urgency */}
      <section className="border-b border-slate-200 bg-gradient-to-r from-amber-100/90 via-amber-50 to-orange-50 py-10">
        <div className="mx-auto max-w-3xl px-4 text-center text-slate-800">
          <p className="text-lg font-semibold">Limited openings</p>
          <p className="mt-2 text-sm text-slate-700">Apply early to secure your chance</p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-14">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-100 to-slate-50" />
        <div className="relative mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-playfair text-2xl font-semibold text-slate-900 sm:text-3xl">
            Ready to Apply?
          </h2>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button
              asChild
              size="lg"
              className="h-12 bg-[#25D366] text-white hover:bg-[#20BD5A]"
            >
              <a href={waHref} target="_blank" rel="noopener noreferrer">
                Apply Now
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 border-slate-300"
            >
              <a href={waHref} target="_blank" rel="noopener noreferrer">
                Send Resume on WhatsApp
              </a>
            </Button>
          </div>
          <p className="mt-8 text-sm text-slate-600">
            {COMPANY} · {PHONE_DISPLAY}
          </p>
        </div>
      </section>

      {/* Mobile sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200 bg-white/95 p-3 shadow-lg backdrop-blur md:hidden">
        <Button
          asChild
          className="h-12 w-full bg-[#25D366] text-base font-semibold text-white hover:bg-[#20BD5A]"
        >
          <a href={waHref} target="_blank" rel="noopener noreferrer">
            Apply via WhatsApp
          </a>
        </Button>
      </div>
    </div>
  );
};

export default StructuralDesignerHiring;
