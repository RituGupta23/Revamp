import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const StatsSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [stats, setStats] = useState({ cars: 0, awards: 0, partnerships: 0 });

  useEffect(() => {
    if (inView) {
      let carsCount = 0;
      let awardsCount = 0;
      let partnershipsCount = 0;

      const interval = setInterval(() => {
        if (carsCount < 500) {
          carsCount++;
        }
        if (awardsCount < 10) {
          awardsCount++;
        }
        if (partnershipsCount < 80) {
          partnershipsCount++;
        }

        setStats({
          cars: carsCount,
          awards: awardsCount,
          partnerships: partnershipsCount,
        });

        if (carsCount === 500 && awardsCount === 10 && partnershipsCount === 39) {
          clearInterval(interval);
        }
      }, 5);

      return () => clearInterval(interval);
    }
  }, [inView]);

  return (
    <section ref={ref} className="relative h-[60vh] bg-black text-white flex flex-col justify-center items-center text-center">
      {/* Large Background Text */}
      <div className="absolute inset-0 flex justify-center items-center opacity-10">
        <h1 className="text-[15rem] font-bold uppercase">Evoluti</h1>
      </div>

      {/* Content */}
      <div className="relative z-10 px-6">
        {/* Top Description */}
        <p className="text-lg lg:text-2xl mb-6 max-w-4xl mx-auto">
          With a commitment to revolutionizing the way we move, we pride ourselves on delivering
          cutting-edge electric vehicles designed to redefine your driving experience.
        </p>

        {/* Stats */}
        <div className="flex justify-center space-x-12 lg:space-x-24 text-3xl lg:text-5xl font-bold">
          <div>
            <span className="text-orange-500">{stats.cars}+</span>
            <p className="text-sm lg:text-lg font-light mt-2">Types of car</p>
          </div>
          <div>
            <span className="text-orange-500">{stats.awards}+</span>
            <p className="text-sm lg:text-lg font-light mt-2">Industry awards</p>
          </div>
          <div>
            <span className="text-orange-500">{stats.partnerships}</span>
            <p className="text-sm lg:text-lg font-light mt-2">Partnerships</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;