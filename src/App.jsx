import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import TeamMemberCard from "./components/TeamMember";
import FeatureCard from "./components/FeatureCard";
import { teamMembers } from "./data/teamMembers";
import { features } from "./data/features";
import StatCard from "./components/StatCard";
import TestimonialCard from "./components/TestimonialCard";
import FloatingShape from "./components/FloatingShape";

const App = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  useEffect(() => {
    document.body.style.overflowX = "hidden";
    return () => {
      document.body.style.overflowX = "auto";
    };
  }, []);

  return (
    <div
      className="min-h-screen bg-black text-white overflow-hidden"
      ref={targetRef}
    >
      <motion.div
        style={{ opacity, scale }}
        className="relative h-screen flex items-center justify-center"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black z-0" />
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text"
          >
            SocialLens
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
          >
            Transforming social media analytics through innovative AI solutions.
            Unlocking real-time insights to drive impactful strategies."
          </motion.p>
        </div>
      </motion.div>

      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
        <FloatingShape color="purple" top="10%" left="5%" size="100px" />
        <FloatingShape color="blue" top="60%" right="10%" size="80px" />
        <FloatingShape color="pink" bottom="10%" left="15%" size="60px" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text"
          >
            Our Mission
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto text-center mt-8 space-y-6"
          >
            <p>
              Social Lens is redefining how social media analytics are used to
              unlock meaningful insights. By harnessing advanced AI, we help
              businesses and individuals understand the dynamics of online
              conversations and trends with unmatched clarity.
            </p>
            <p>
              Our focus is on simplifying complex data and turning it into
              actionable strategies, ensuring that organizations of all sizes
              can thrive in a data-driven world
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text"
          >
            Key Features
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                {...feature}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text"
          >
            Meet Our Team
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={member.name} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
