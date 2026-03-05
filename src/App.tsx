/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Dumbbell, 
  Users, 
  Clock, 
  MapPin, 
  Phone, 
  Mail, 
  Instagram, 
  Facebook, 
  Twitter, 
  ChevronRight, 
  Star,
  Check,
  Menu,
  X,
  ArrowRight
} from 'lucide-react';
import { cn } from './lib/utils';
import { TRAINERS, PLANS } from './constants';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Experience', href: '#experience' },
    { name: 'Trainers', href: '#trainers' },
    { name: 'Memberships', href: '#memberships' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 md:px-12 py-4",
      isScrolled ? "bg-black/90 backdrop-blur-md border-b border-white/10 py-3" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#" className="text-2xl font-serif tracking-widest text-white flex items-center gap-2">
          <span className="text-gold font-bold">GYM</span>_DEMO
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-xs uppercase tracking-widest text-white/70 hover:text-gold transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button className="luxury-button text-xs uppercase tracking-widest">
            Join the Elite
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-black border-b border-white/10 p-8 md:hidden flex flex-col gap-6"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-serif text-white hover:text-gold transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button className="luxury-button w-full">Join Now</button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2000&auto=format&fit=crop" 
          alt="Luxury Gym Interior" 
          className="w-full h-full object-cover scale-105 animate-slow-zoom"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="section-subtitle"
        >
          The Pinnacle of Performance
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-9xl font-serif mb-8 leading-tight"
        >
          Redefine Your <br />
          <span className="text-gradient-gold italic">Legacy</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-white/60 mb-12 max-w-2xl mx-auto font-light leading-relaxed"
        >
          Experience a sanctuary of strength where world-class expertise meets unparalleled luxury. Your journey to excellence begins here.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <button className="luxury-button bg-gold text-black font-semibold">
            Book Private Tour
          </button>
          <button className="px-8 py-3 border border-white/20 hover:border-white transition-colors uppercase tracking-widest text-xs">
            View Facilities
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent mx-auto"></div>
      </motion.div>
    </section>
  );
};

const Experience = () => {
  const features = [
    {
      icon: <Dumbbell className="text-gold" size={32} />,
      title: "Elite Equipment",
      desc: "Custom-engineered Italian machinery and precision-crafted free weights."
    },
    {
      icon: <Users className="text-gold" size={32} />,
      title: "Private Coaching",
      desc: "One-on-one sessions with internationally certified master trainers."
    },
    {
      icon: <Clock className="text-gold" size={32} />,
      title: "24/7 Access",
      desc: "Unrestricted entry to our sanctuary, tailored to your demanding schedule."
    },
    {
      icon: <Star className="text-gold" size={32} />,
      title: "Wellness Suite",
      desc: "Cryotherapy, infrared saunas, and bespoke recovery protocols."
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 md:px-12 bg-luxury-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="section-subtitle">Exclusive Amenities</span>
            <h2 className="section-title">Beyond the <br />Ordinary</h2>
            <p className="text-white/60 text-lg mb-12 leading-relaxed">
              At GYM_DEMO, we believe fitness is an art form. Every detail of our space is curated to inspire greatness, from the ambient lighting to the filtered air systems.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((f, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -5 }}
                  className="p-6 glass-card rounded-2xl"
                >
                  <div className="mb-4">{f.icon}</div>
                  <h3 className="text-xl font-serif mb-2">{f.title}</h3>
                  <p className="text-sm text-white/40 leading-relaxed">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1200&auto=format&fit=crop" 
                alt="Luxury Gym Detail" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 p-8 glass-card rounded-2xl hidden md:block">
              <div className="text-4xl font-serif text-gold mb-1">99.9%</div>
              <div className="text-xs uppercase tracking-widest text-white/60">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Trainers = () => {
  return (
    <section id="trainers" className="py-24 px-6 md:px-12 bg-black">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <span className="section-subtitle">The Architects of Change</span>
        <h2 className="section-title">Master Trainers</h2>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {TRAINERS.map((trainer) => (
          <motion.div 
            key={trainer.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-3xl bg-zinc-900"
          >
            <div className="aspect-[3/4] overflow-hidden">
              <img 
                src={trainer.image} 
                alt={trainer.name} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80"></div>
            <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <div className="text-gold text-xs uppercase tracking-widest mb-2">{trainer.role}</div>
              <h3 className="text-3xl font-serif mb-2">{trainer.name}</h3>
              <div className="flex items-center gap-4 text-white/60 text-sm mb-4">
                <span>{trainer.experience} Exp</span>
                <span className="w-1 h-1 bg-gold rounded-full"></span>
                <span>{trainer.rate}</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                {trainer.specialties.map(s => (
                  <span key={s} className="px-3 py-1 bg-white/10 rounded-full text-[10px] uppercase tracking-wider">{s}</span>
                ))}
              </div>
              <p className="text-sm text-white/40 line-clamp-2 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                {trainer.bio}
              </p>
              <button className="flex items-center gap-2 text-gold text-xs uppercase tracking-widest font-bold group/btn">
                Book Session <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Memberships = () => {
  return (
    <section id="memberships" className="py-24 px-6 md:px-12 bg-luxury-black">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <span className="section-subtitle">Investment in Yourself</span>
        <h2 className="section-title">Membership Tiers</h2>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {PLANS.map((plan) => (
          <div 
            key={plan.id}
            className={cn(
              "p-10 rounded-3xl flex flex-col transition-all duration-500",
              plan.isPopular ? "bg-gold text-black scale-105 z-10 shadow-2xl shadow-gold/20" : "glass-card hover:border-gold/50"
            )}
          >
            <div className="mb-8">
              <h3 className="text-xs uppercase tracking-[0.3em] mb-4 opacity-70">{plan.name}</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-serif">{plan.price}</span>
                <span className="text-sm opacity-60">/ {plan.period}</span>
              </div>
            </div>
            <div className="flex-1 space-y-4 mb-10">
              {plan.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3 text-sm">
                  <Check size={16} className={plan.isPopular ? "text-black" : "text-gold"} />
                  <span className="opacity-80">{feature}</span>
                </div>
              ))}
            </div>
            <button className={cn(
              "w-full py-4 rounded-xl uppercase tracking-widest text-xs font-bold transition-all",
              plan.isPopular ? "bg-black text-white hover:bg-zinc-900" : "border border-gold text-gold hover:bg-gold hover:text-black"
            )}>
              Select Plan
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <span className="section-subtitle">Get in Touch</span>
            <h2 className="section-title">Visit the <br />Sanctuary</h2>
            <div className="space-y-8 mt-12">
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center shrink-0">
                  <MapPin className="text-gold" size={20} />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-gold mb-2">Address</h4>
                  <p className="text-white/60 leading-relaxed">
                    102, Elite Business Park, <br />
                    Bandra Kurla Complex (BKC), <br />
                    Mumbai, Maharashtra 400051, India
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center shrink-0">
                  <Phone className="text-gold" size={20} />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-gold mb-2">Phone</h4>
                  <p className="text-white/60">+91 22 4567 8900</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center shrink-0">
                  <Mail className="text-gold" size={20} />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-gold mb-2">Email</h4>
                  <p className="text-white/60">concierge@gymdemo.in</p>
                </div>
              </div>
            </div>
          </div>
          <div className="glass-card p-10 rounded-3xl">
            <h3 className="text-2xl font-serif mb-8">Inquiry Form</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/40">Full Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-gold outline-none transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/40">Email Address</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-gold outline-none transition-colors" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-white/40">Interest</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-gold outline-none transition-colors appearance-none">
                  <option>Personal Training</option>
                  <option>Elite Membership</option>
                  <option>Corporate Wellness</option>
                  <option>Facility Tour</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-white/40">Message</label>
                <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-gold outline-none transition-colors" placeholder="How can we assist your journey?"></textarea>
              </div>
              <button className="luxury-button w-full bg-gold text-black font-bold">Send Inquiry</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 px-6 md:px-12 bg-luxury-black border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-xl font-serif tracking-widest">
          <span className="text-gold font-bold">GYM</span>_DEMO
        </div>
        <div className="flex gap-8">
          <a href="#" className="text-white/40 hover:text-gold transition-colors"><Instagram size={20} /></a>
          <a href="#" className="text-white/40 hover:text-gold transition-colors"><Facebook size={20} /></a>
          <a href="#" className="text-white/40 hover:text-gold transition-colors"><Twitter size={20} /></a>
        </div>
        <div className="text-[10px] uppercase tracking-widest text-white/20">
          © 2024 GYM_DEMO India. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-gold selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Trainers />
        <Memberships />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
