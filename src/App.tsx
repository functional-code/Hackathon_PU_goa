import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  HeartPulse, Sprout, Wallet, GraduationCap, Recycle, Building2,
  Calendar, MapPin, Clock, Users, Award, Trophy, Medal,
  CheckCircle2, ChevronRight, Phone, Mail, Sparkles, Server, Laptop
} from 'lucide-react';

// --- DATA ---
const problemDomains = [
  { icon: HeartPulse, name: 'Healthcare', color: 'text-pink-500', bg: 'bg-pink-500/10' },
  { icon: Sprout, name: 'Agriculture', color: 'text-green-500', bg: 'bg-green-500/10' },
  { icon: Wallet, name: 'FinTech', color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
  { icon: GraduationCap, name: 'Education', color: 'text-blue-500', bg: 'bg-blue-500/10' },
  { icon: Recycle, name: 'Sustainability', color: 'text-teal-500', bg: 'bg-teal-500/10' },
  { icon: Building2, name: 'Smart Cities', color: 'text-indigo-500', bg: 'bg-indigo-500/10' },
];

const schedule = [
  { time: '9:30 AM', activity: 'Sensitization Session begins' },
  { time: '10:00 AM', activity: 'Inauguration Ceremony' },
  { time: '10:30 AM', activity: 'Hackathon officially starts', highlight: true },
  { time: '12:30 PM', activity: 'Midpoint check-in' },
  { time: '1:00 PM', activity: 'Lunch break (rolling, 30 min)' },
  { time: '4:30 PM', activity: 'Offline phase ends', highlight: true },
  { time: '4:30–5:30 PM', activity: 'Mandatory break' },
  { time: '5:30 PM', activity: 'Online phase begins', highlight: true },
];

const rules = [
  "4–5 members per team",
  "At least 1 female member (mandatory)",
  "1 designated Team Leader",
  "Open to all PU Goa students (all departments, all semesters)",
  "Inter-disciplinary & inter-institute teams allowed",
  "No substitutions after registration"
];

const criteria = [
  { name: 'Innovation & Originality', weight: 25 },
  { name: 'Technical Complexity', weight: 25 },
  { name: 'Feasibility', weight: 20 },
  { name: 'Presentation Quality', weight: 15 },
  { name: 'Sustainability & Impact', weight: 10 },
  { name: 'UX & Future Potential', weight: 5 },
];

const prizes = [
  { title: '1st Place', reward: 'Trophy + Certificate + Cash Prize', icon: Trophy, color: 'text-yellow-400', shadow: 'shadow-yellow-500/20' },
  { title: '2nd Place', reward: 'Trophy + Certificate + Cash Prize', icon: Medal, color: 'text-gray-300', shadow: 'shadow-gray-400/20' },
  { title: '3rd Place', reward: 'Medal + Certificate', icon: Award, color: 'text-amber-600', shadow: 'shadow-amber-700/20' },
];

const specialPrizes = [
  { title: 'Best Innovative Idea', reward: 'Certificate + Special Mention', icon: Sparkles, color: 'text-purple-400' },
  { title: 'Best Female-Led Team', reward: 'Certificate + Special Mention', icon: Users, color: 'text-pink-400' },
];

// --- COMPONENTS ---

const BackgroundBeams = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1] bg-black">
    {/* Raycast style diagonal red/pink slanting lights */}
    <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250vw] h-[250vh] flex justify-center gap-[4vw] origin-center -rotate-[35deg] opacity-70 mix-blend-screen">
      <motion.div
        animate={{ x: [0, 20, 0], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="w-[10vw] h-[200vh] bg-red-600 blur-[80px]"
      />
      <motion.div
        animate={{ x: [0, -30, 0], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="w-[15vw] h-[200vh] bg-rose-500 blur-[120px]"
      />
      <motion.div
        animate={{ x: [0, 15, 0], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="w-[5vw] h-[200vh] bg-pink-600 blur-[60px]"
      />
      <motion.div
        animate={{ x: [0, -20, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="w-[20vw] h-[200vh] bg-red-900 blur-[140px]"
      />
    </div>
    
    {/* Vignette mask */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#000_80%)] opacity-90"></div>
    {/* Bottom fade */}
    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
  </div>
);

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-xl border-b border-white/5">
    <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-rose-700 flex items-center justify-center shadow-[0_0_15px_rgba(239,68,68,0.4)]">
          <Server size={16} className="text-white" />
        </div>
        <span className="text-white font-medium tracking-tight">PU Goa Hackathon</span>
      </div>
      
      <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
        <a href="#domains" className="hover:text-white transition-colors">Domains</a>
        <a href="#rules" className="hover:text-white transition-colors">Rules</a>
        <a href="#evaluation" className="hover:text-white transition-colors">Evaluation</a>
        <a href="#schedule" className="hover:text-white transition-colors">Schedule</a>
        <a href="#prizes" className="hover:text-white transition-colors">Prizes</a>
      </div>

      <div className="flex items-center">
        <a href="#register" className="bg-white text-black hover:bg-gray-200 transition-colors px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-2">
           Register Team
        </a>
      </div>
    </div>
  </nav>
);

const SectionHeading = ({ children, align = 'center' }: { children: React.ReactNode, align?: 'center' | 'left' }) => (
  <motion.h2 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    className={`text-3xl font-bold mb-12 text-white ${align === 'center' ? 'text-center' : ''}`}
  >
    {children}
  </motion.h2>
);

const GlassCard = ({ children, className = "", delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay: delay }}
    className={`premium-glass rounded-2xl relative overflow-hidden group ${className}`}
  >
    <div className="absolute inset-0 premium-glass-inner pointer-events-none rounded-2xl"></div>
    {children}
  </motion.div>
);

// --- MAIN APP COMPONENT ---

export default function App() {
  return (
    <div className="min-h-screen relative selection:bg-red-500/30 selection:text-white">
      <BackgroundBeams />
      <Navbar />

      <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
        
        {/* HERO SECTION */}
        <div className="text-center mt-12 mb-32 relative z-10 w-full max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-6 flex justify-center"
          >
            <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-red-400 flex items-center gap-2 shadow-[0_0_30px_rgba(239,68,68,0.15)]">
              <Sparkles size={14} /> Main Event — 4th & 5th May 2026
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white via-white/90 to-white/60"
          >
            Goa Hackathon <br/> 2026.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed"
          >
            A high-intensity coding marathon organized by the Department of Computer Science & Engineering. Innovate, build, and solve real-world problems.
          </motion.p>
          
          {/* Info Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto"
          >
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center gap-4 backdrop-blur-md">
              <div className="bg-white/10 p-3 rounded-xl text-white"><Calendar size={20}/></div>
              <div className="text-left">
                <div className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Date</div>
                <div className="text-sm text-gray-200 mt-0.5">4th & 5th May</div>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center gap-4 backdrop-blur-md">
              <div className="bg-white/10 p-3 rounded-xl text-white"><MapPin size={20}/></div>
              <div className="text-left">
                <div className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Location</div>
                <div className="text-sm text-gray-200 mt-0.5">PU Goa Campus</div>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center gap-4 backdrop-blur-md">
              <div className="bg-white/10 p-3 rounded-xl text-white"><Laptop size={20}/></div>
              <div className="text-left">
                <div className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Format</div>
                <div className="text-sm text-gray-200 mt-0.5">Offline + Online</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* DOMAINS SECTION */}
        <section id="domains" className="mb-32">
          <SectionHeading>Problem Domains</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problemDomains.map((domain, idx) => (
              <GlassCard key={idx} delay={idx * 0.1} className="p-6 hover:bg-white/5 transition-colors cursor-default">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${domain.bg} ${domain.color}`}>
                  <domain.icon size={24} />
                </div>
                <h3 className="text-xl font-medium text-white mb-2">{domain.name}</h3>
                <p className="text-gray-400 text-sm">Design innovative solutions targeting critical challenges in {domain.name.toLowerCase()}.</p>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* TWO COLUMN: RULES & EVALUATION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32">
          
          {/* Rules */}
          <section id="rules">
            <SectionHeading align="left">Team Rules</SectionHeading>
            <GlassCard className="p-8 h-[calc(100%-4rem)]">
              <ul className="space-y-6">
                {rules.map((rule, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <CheckCircle2 className="text-green-500 shrink-0 mt-0.5" size={20} />
                    <span className="text-gray-300 leading-snug">{rule}</span>
                  </motion.li>
                ))}
              </ul>
            </GlassCard>
          </section>

          {/* Evaluation */}
          <section id="evaluation">
            <SectionHeading align="left">Evaluation Criteria</SectionHeading>
            <GlassCard className="p-8 h-[calc(100%-4rem)]">
              <div className="space-y-6">
                {criteria.map((item, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between text-sm mb-2 font-medium">
                      <span className="text-gray-200">{item.name}</span>
                      <span className="text-red-400">{item.weight}%</span>
                    </div>
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden shadow-inner">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.weight}%` }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 1, delay: 0.2 + (idx * 0.1), ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-red-600 to-red-400 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </section>

        </div>

        {/* SCHEDULE SECTION */}
        <section id="schedule" className="mb-32">
          <SectionHeading>Schedule (4th May)</SectionHeading>
          <div className="max-w-3xl mx-auto">
            <GlassCard className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center md:items-start mb-12 pb-8 border-b border-white/10">
                <div className="flex-1 text-center md:text-left">
                  <div className="text-red-400 font-mono text-sm mb-1 uppercase tracking-widest">Phase 1</div>
                  <div className="text-2xl text-white font-medium">Offline Event</div>
                  <div className="text-gray-400 mt-2 text-sm flex items-center justify-center md:justify-start gap-2">
                    <Clock size={14}/> 10:30 AM – 4:30 PM
                  </div>
                </div>
                <div className="hidden md:block w-px h-16 bg-white/10"></div>
                <div className="flex-1 text-center md:text-left">
                  <div className="text-blue-400 font-mono text-sm mb-1 uppercase tracking-widest">Phase 2</div>
                  <div className="text-2xl text-white font-medium">Online Event</div>
                  <div className="text-gray-400 mt-2 text-sm flex items-center justify-center md:justify-start gap-2">
                    <Clock size={14}/> 5:30 PM onwards
                  </div>
                </div>
              </div>

              <div className="border-l-2 border-white/10 ml-4 pl-8 md:pl-12 space-y-10 relative mt-4">
                {schedule.map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: i * 0.05 }}
                    className="relative"
                  >
                    <span className={`absolute -left-[41px] md:-left-[57px] w-4 h-4 rounded-full top-0.5 border-4 border-[#0C0C0C] ${item.highlight ? 'bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.8)]' : 'bg-gray-600'}`}></span>
                    <div className={`font-mono text-sm mb-1 font-medium ${item.highlight ? 'text-red-400' : 'text-gray-500'}`}>
                      {item.time}
                    </div>
                    <div className={`text-lg mb-1 ${item.highlight ? 'text-white font-medium' : 'text-gray-300'}`}>
                      {item.activity}
                    </div>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </div>
        </section>

        {/* PRIZES SECTION */}
        <section id="prizes" className="mb-32">
          <SectionHeading>Prizes & Rewards</SectionHeading>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {prizes.map((prize, idx) => (
              <GlassCard key={idx} delay={idx * 0.1} className={`p-8 border-t-4 border-t-${idx === 0 ? 'yellow-500' : idx === 1 ? 'gray-300' : 'amber-600'} flex flex-col items-center text-center`}>
                <div className={`w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-6 shadow-lg ${prize.shadow}`}>
                  <prize.icon size={36} className={prize.color} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{prize.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{prize.reward}</p>
                {idx === 0 && (
                   <div className="mt-4 px-3 py-1 bg-yellow-500/10 text-yellow-500 rounded-full text-xs font-semibold uppercase tracking-wider">
                     Grand Champion
                   </div>
                )}
              </GlassCard>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {specialPrizes.map((prize, idx) => (
              <GlassCard key={idx} delay={0.4 + (idx * 0.1)} className="p-6 flex items-center gap-6">
                <div className={`w-14 h-14 rounded-full bg-white/5 flex items-center justify-center shrink-0 ${prize.color}`}>
                  <prize.icon size={28} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">{prize.title}</h3>
                  <p className="text-gray-400 text-sm">{prize.reward}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* FOOTER / CONTACT */}
        <footer className="mt-32 pt-16 border-t border-white/10 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Connect with us</h3>
              <p className="text-gray-400 mb-8 max-w-sm">Have questions about the event, rules, or registration? Reach out to our organizing team.</p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-300 shrink-0">
                    <Users size={18} />
                  </div>
                  <div>
                    <div className="text-white font-medium">Aaryan Kumar Tiwari</div>
                    <div className="text-gray-500 text-sm mb-1">Student Coordinator</div>
                    <div className="text-red-400 text-sm flex items-center gap-1 font-mono hover:text-red-300 cursor-pointer transition-colors">
                      <Phone size={12}/> +91 9011194334
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-300 shrink-0">
                    <GraduationCap size={18} />
                  </div>
                  <div>
                    <div className="text-white font-medium">Dr. Dhaval Nimavat</div>
                    <div className="text-gray-500 text-sm mb-1">Faculty Coordinator</div>
                    <div className="text-red-400 text-sm flex items-center gap-1 font-mono hover:text-red-300 cursor-pointer transition-colors">
                      <Phone size={12}/> +91 9213001679
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-300 shrink-0">
                    <GraduationCap size={18} />
                  </div>
                  <div className="flex items-center">
                    <div>
                      <div className="text-white font-medium">Dr. Sanjeeta Rane</div>
                      <div className="text-gray-500 text-sm">Faculty Coordinator</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between">
              <GlassCard className="p-8">
                <h4 className="text-white font-medium mb-4">Parul University, Goa</h4>
                <p className="text-sm text-gray-400 mb-6">
                  Department of Computer Science & Engineering. Open to all students across all departments and semesters.
                </p>
                <button className="w-full bg-white text-black font-semibold py-3 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                  Register for Hackathon <ChevronRight size={18}/>
                </button>
              </GlassCard>

              <div className="mt-8 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-600">
                <div className="flex items-center gap-2">
                  <Server size={14}/> Goa Hackathon 2026
                </div>
                <div>Submitted to: The Registrar, Parul University, Goa</div>
              </div>
            </div>

          </div>
        </footer>

      </main>
    </div>
  );
}
