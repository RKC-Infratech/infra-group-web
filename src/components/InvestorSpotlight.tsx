import { TrendingUp, Users, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import InvestmentDonutChart from "./InvestmentDonutChart";

// Vibrant color palette matching Tailwind defaults
const investmentStats = [
  { sector: "Green Tech", percentage: 40, color: "#22c55e" },
  { sector: "Modular Bridges", percentage: 30, color: "#3b82f6" },
  { sector: "Smart Infra", percentage: 20, color: "#a21caf" },
  { sector: "Const. Tech", percentage: 10, color: "#f59e42" }
];

const statsArr = [
  {
    value: "25+",
    label: "Startups Funded",
    color: "text-yellow-400"
  },
  {
    value: "₹50Cr+",
    label: "Total Investment",
    color: "text-green-400"
  },
  {
    value: "80%",
    label: "Success Rate",
    color: "text-blue-400"
  },
  {
    value: "12",
    label: "States Covered",
    color: "text-purple-400"
  }
];

const InvestorSpotlight = () => (
  <section className="py-20 bg-gradient-to-br from-indigo-900 via-blue-900 to-black text-white relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
          Building Beyond Bridges — Investing in India's Infrastructure Future
        </h2>
        <p className="text-xl opacity-90 max-w-3xl mx-auto">
          <span className="font-semibold text-yellow-400">R.K. Choubey Family Office</span>{" "}
          is strategically funding the next generation of infrastructure innovation.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-10 items-center lg:items-stretch">
        {/* Pie chart column */}
        <div className="bg-white/5 rounded-2xl shadow-lg p-8 flex-1 flex flex-col justify-center items-center">
          <h3 className="text-xl font-semibold mb-8 flex items-center">
            <TrendingUp className="mr-3 text-green-400" size={28} />
            Portfolio Distribution
          </h3>
          <InvestmentDonutChart data={investmentStats} />
          <div className="flex flex-wrap mt-6 gap-4 justify-center">
            {investmentStats.map((stat, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-sm font-medium"
              >
                <span
                  className="inline-block w-4 h-4 rounded-full"
                  style={{ background: stat.color }}
                />
                {stat.sector}
              </div>
            ))}
          </div>
        </div>
        {/* Details & stats column */}
        <div className="flex-1 flex flex-col gap-8 justify-between">
          {/* Key Stats */}
          <div className="grid grid-cols-2 gap-6 md:gap-10 mt-2">
            {statsArr.map((s, i) => (
              <div
                key={i}
                className={`text-center bg-white/5 rounded-xl p-6 hover:scale-105 transition-transform duration-200 shadow`}
              >
                <div className={`text-4xl font-bold mb-2 ${s.color}`}>{s.value}</div>
                <div className="text-sm opacity-75">{s.label}</div>
              </div>
            ))}
          </div>
          {/* Button */}
          <div className="flex justify-center mt-3">
            <Button
              asChild
              size="lg"
              className="bg-yellow-500 text-black hover:bg-yellow-400 font-semibold px-8 py-3 rounded-xl shadow-lg"
            >
              <Link to="/rkchoubey-family-office">
                <Lightbulb className="mr-2" size={20} />
                Explore Investment Opportunities
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
    {/* Subtle gradient flair at the bottom for style */}
    <div className="absolute bottom-0 left-0 w-full h-36 bg-gradient-to-t from-primary/80 via-transparent to-transparent pointer-events-none z-0"></div>
  </section>
);

export default InvestorSpotlight;
