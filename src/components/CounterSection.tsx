
import { useState, useEffect, useRef } from "react";

const CounterSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
    { number: 4, label: "Specialized Firms", suffix: "" },
    { number: 15, label: "Years Experience", suffix: "+" },
    { number: 100, label: "Projects Completed", suffix: "+" },
    { number: 50, label: "Happy Clients", suffix: "+" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="animate-fade-in">
              <div className="text-4xl font-bold mb-2">
                <AnimatedCounter 
                  end={stat.number} 
                  suffix={stat.suffix}
                  isVisible={isVisible}
                />
              </div>
              <div className="text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

interface AnimatedCounterProps {
  end: number;
  suffix: string;
  isVisible: boolean;
}

const AnimatedCounter = ({ end, suffix, isVisible }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const duration = 2000; // 2 seconds

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, isVisible]);

  return <span>{count}{suffix}</span>;
};

export default CounterSection;
