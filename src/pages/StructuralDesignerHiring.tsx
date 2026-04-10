import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { Check, HardHat, MapPin, ScrollText, Wrench } from "lucide-react";

const COMPANY = "Imagineering Bridges India LLP";
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
      {/* Hero */}
      <section className="border-b border-slate-200 bg-gradient-to-b from-slate-900 to-slate-800 text-white">
        <div className="mx-auto max-w-3xl px-4 py-10 sm:py-14">
          <p className="mb-2 text-sm font-medium uppercase tracking-wide text-slate-300">
            {COMPANY}
          </p>
          <h1 className="font-playfair text-3xl font-bold leading-tight sm:text-4xl">
            We Are Hiring – Structural Designer
          </h1>
          <p className="mt-4 text-base text-slate-200 sm:text-lg">
            Join Imagineering Bridges India LLP and work on real structural and bridge design
            projects
          </p>

          <ul className="mt-6 grid gap-2 sm:grid-cols-2">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-slate-100">
                <Check className="h-4 w-4 shrink-0 text-emerald-400" aria-hidden />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button
              asChild
              size="lg"
              className="h-12 w-full bg-[#25D366] text-base font-semibold text-white hover:bg-[#20BD5A] sm:w-auto"
            >
              <a href={waHref} target="_blank" rel="noopener noreferrer">
                Apply via WhatsApp
              </a>
            </Button>
            <Button
              type="button"
              variant="outline"
              size="lg"
              className="h-12 w-full border-slate-500 bg-transparent text-white hover:bg-white/10 sm:w-auto"
              onClick={scrollToRole}
            >
              View Job Details
            </Button>
          </div>

          <p className="mt-6 text-center text-sm text-slate-300 sm:text-left">
            DM Resume @ {PHONE_DISPLAY}
          </p>
        </div>
      </section>

      {/* Visual */}
      <section className="border-b border-slate-200 bg-white py-10">
        <div className="mx-auto max-w-3xl px-4">
          <div className="overflow-hidden rounded-xl border border-slate-200 bg-gradient-to-br from-slate-100 to-slate-50">
            <div className="grid grid-cols-3 gap-px bg-slate-200">
              <div className="flex flex-col items-center justify-center gap-3 bg-white py-10 px-2">
                <HardHat className="h-12 w-12 text-slate-700" strokeWidth={1.25} aria-hidden />
                <span className="text-center text-xs font-medium text-slate-600">Helmet & safety</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-3 bg-white py-10 px-2">
                <ScrollText className="h-12 w-12 text-slate-700" strokeWidth={1.25} aria-hidden />
                <span className="text-center text-xs font-medium text-slate-600">Blueprints</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-3 bg-white py-10 px-2">
                <Wrench className="h-12 w-12 text-slate-700" strokeWidth={1.25} aria-hidden />
                <span className="text-center text-xs font-medium text-slate-600">Drawings & site</span>
              </div>
            </div>
            <p className="border-t border-slate-200 bg-slate-50 px-4 py-3 text-center text-sm text-slate-600">
              Real engineering work — structure, drawings, and practical projects
            </p>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="border-b border-slate-200 py-10">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="font-playfair text-xl font-semibold text-slate-900">About the company</h2>
          <p className="mt-3 text-base leading-relaxed text-slate-700">
            Imagineering Bridges India LLP is focused on structural and bridge design projects,
            providing real-world engineering exposure.
          </p>
        </div>
      </section>

      {/* Role */}
      <section id="role-overview" className="scroll-mt-20 border-b border-slate-200 bg-white py-10">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="font-playfair text-xl font-semibold text-slate-900">
            Structural Designer Role
          </h2>
          <p className="mt-2 text-sm font-medium text-slate-500">Responsibilities</p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
            {responsibilities.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Skills */}
      <section className="border-b border-slate-200 py-10">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="font-playfair text-xl font-semibold text-slate-900">Skills Required</h2>
          <ul className="mt-4 space-y-2">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-2 text-slate-800">
                <Check className="h-5 w-5 shrink-0 text-primary" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Who can apply */}
      <section className="border-b border-slate-200 bg-white py-10">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="font-playfair text-xl font-semibold text-slate-900">Who Can Apply</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
            {whoCanApply.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Work details */}
      <section className="border-b border-slate-200 py-10">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="font-playfair text-xl font-semibold text-slate-900">Work Details</h2>
          <div className="mt-4 space-y-3 text-slate-700">
            <p className="flex gap-2">
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
            <p className="text-slate-600">Local candidates preferred</p>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="border-b border-slate-200 bg-white py-10">
        <div className="mx-auto max-w-3xl px-4">
          <Card className="border-slate-200 shadow-sm">
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
      <section className="border-b border-slate-200 py-10">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-playfair text-xl font-semibold text-slate-900">
            Apply Now on WhatsApp
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Fastest way to apply — send your resume or intro message in one tap.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-6 h-12 w-full max-w-md bg-[#25D366] text-base font-semibold text-white hover:bg-[#20BD5A]"
          >
            <a href={waHref} target="_blank" rel="noopener noreferrer">
              Apply Now on WhatsApp
            </a>
          </Button>
          <p className="mt-4 text-lg font-semibold tabular-nums text-slate-900">{PHONE_DISPLAY}</p>
        </div>
      </section>

      {/* Urgency */}
      <section className="border-b border-slate-200 bg-amber-50 py-8">
        <div className="mx-auto max-w-3xl px-4 text-center text-slate-800">
          <p className="font-medium">Limited openings</p>
          <p className="mt-1 text-sm">Apply early to secure your chance</p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-10">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-playfair text-xl font-semibold text-slate-900">Ready to Apply?</h2>
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
