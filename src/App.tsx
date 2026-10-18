import React, { useState, useEffect } from 'react';
import {
  Calendar,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  Menu,
  X,
  Users,
  Award,
  Activity,
  ChevronDown,
  ExternalLink,
  ShieldCheck,
  BarChart3,
  Clock,
  Sparkles,
  MapPin,
  Check,
  Send,
  Info
} from 'lucide-react';

import heroAquaticCentre from './assets/images/hero_aquatic_centre_1792294160407.jpg';
import ufvCampusAerial from './assets/images/Winter Evening at Fraser Valley University.png';
import drylandTrainingCentre from './assets/images/dryland_training_centre_1792294162271.jpg';
import communitySwimPrograms from './assets/images/community_swim_programs_1792294162889.jpg';

interface BudgetItem {
  id: string;
  label: string;
  amount: number;
  pct: number;
  category: string;
  description: string;
  deliverables: string[];
}

const budgetItems: BudgetItem[] = [
  {
    id: 'construction',
    label: 'Site preparation & construction',
    amount: 56000000,
    pct: 56,
    category: 'Capital Infrastructure',
    description: 'Deep foundations, structural glulam mass timber framing, seismic dampening, high-performance building envelope, universal change facilities, and building construction.',
    deliverables: ['Geotechnical & site servicing', 'Glulam timber structural spans', 'High-performance glass curtain wall', 'Accessibility ramps & universal suites']
  },
  {
    id: 'pool-systems',
    label: 'Pool systems & equipment',
    amount: 15000000,
    pct: 15,
    category: 'Aquatics Engineering',
    description: '50-meter Myrtha stainless steel competition basin, movable bulkheads, regenerative media filtration, UV sterilization, heat recovery, and Omega touchpads.',
    deliverables: ['50m × 25m 10-lane competition basin', 'Dual movable bulkheads for split-course swimming', 'High-flow regenerative filtration', 'Omega timing touchpads & touch displays']
  },
  {
    id: 'contingency',
    label: 'Emergency contingency fund',
    amount: 10000000,
    pct: 10,
    category: 'Risk Management',
    description: 'Dedicated 10% unallocated reserve managed by university finance to buffer material price fluctuations, geotechnical anomalies, or supply chain changes.',
    deliverables: ['Strict governance drawdown policy', 'Escalation protection hedge', 'Unused reserves return to long-term endowment', 'Quarterly steering committee audits']
  },
  {
    id: 'design',
    label: 'Design & engineering',
    amount: 7000000,
    pct: 7,
    category: 'Professional Services',
    description: 'Architectural blueprints, acoustic engineering, mechanical/HVAC humidity control systems, structural validation, and City of Abbotsford development permitting.',
    deliverables: ['LEED Gold / Net-Zero energy modeling', 'Acoustic absorption ceiling design', 'HVAC chloramine evacuation systems', 'Municipal development & building permits']
  },
  {
    id: 'equipment',
    label: 'Other equipment & furniture',
    amount: 4000000,
    pct: 4,
    category: 'Athletic Fit-Out',
    description: 'Dryland athletic training equipment, commercial weight racks, spectator seating (1,200 seats), locker storage, and administrative office furnishings.',
    deliverables: ['Dryland Olympic lifting platforms & turf', '1,200-seat grandstand bleachers', 'Electronic access control & RFID lockers', 'Sports medicine examination tables']
  },
  {
    id: 'pm',
    label: 'Project management & administration',
    amount: 4000000,
    pct: 4,
    category: 'Project Governance',
    description: 'Independent owner representative, quality assurance, construction site safety officers, environmental monitoring, and comprehensive legal procurement.',
    deliverables: ['Daily construction quality assurance', 'Cost auditing & monthly cashflow reports', 'Environmental Fraser Valley compliance', 'Multi-stakeholder advisory committee']
  },
  {
    id: 'hiring',
    label: 'Hiring, staff training & opening',
    amount: 4000000,
    pct: 4,
    category: 'Operational Commissioning',
    description: 'First 3 months of facility operations included in project scope. NLS lifeguard certifications, facility director recruitment, water testing, and grand launch.',
    deliverables: ['3 months initial operating expenses covered', '30+ student lifeguard & operator jobs created', 'Lifesaving Society safety audit', 'Community opening gala & inaugural swim meet']
  }
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedBudgetIndex, setSelectedBudgetIndex] = useState(0);
  const [activePoolComparison, setActivePoolComparison] = useState<'olympic' | 'community'>('olympic');
  const [activeFacilityTab, setActiveFacilityTab] = useState<'aquatics' | 'dryland' | 'community' | 'spectators'>('aquatics');
  const [activeRoadmapPhase, setActiveRoadmapPhase] = useState(0);
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
  const [endorsementCount, setEndorsementCount] = useState(384);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'UFV Student',
    priority: 'Olympic 50m Pool',
    comment: ''
  });

  // Load / persist endorsements
  useEffect(() => {
    const savedCount = localStorage.getItem('ufv_endorsement_count');
    if (savedCount) {
      setEndorsementCount(parseInt(savedCount, 10));
    }
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) return;
    const newCount = endorsementCount + 1;
    setEndorsementCount(newCount);
    localStorage.setItem('ufv_endorsement_count', newCount.toString());
    setFeedbackSubmitted(true);
  };

  const currentBudgetItem = budgetItems[selectedBudgetIndex];

  return (
    <div className="min-h-screen bg-white text-[#15231e] font-sans antialiased selection:bg-[#d7e8a7] selection:text-[#006b4f]">
      {/* Top Banner Notice */}
      <aside aria-label="Announcement banner" className="bg-[#004633] text-[#d7e8a7] text-xs font-medium py-2 px-4 border-b border-[#0d8b68]/30">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-white tracking-wide uppercase text-[10px] bg-[#006b4f] px-2 py-0.5 rounded border border-[#0d8b68]/40">
              Proposal Brief
            </span>
            <span>A proposed capital investment in student wellbeing, athletics & Fraser Valley community</span>
          </div>
          <div className="flex items-center gap-4 text-white/80 text-[11px]">
            <span>Abbotsford Campus · CIS 385 Assignment 3</span>
            <span className="text-[#e5b95f] font-semibold">Target Opening: Sept 1, 2030</span>
          </div>
        </div>
      </aside>

      {/* Main Navigation (Top Bar Contract: 3 Zones) */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#dce7df]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark (Single Element) */}
          <a href="#top" className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#006b4f]">
            <div className="w-10 h-10 rounded-lg bg-[#006b4f] flex items-center justify-center text-white font-black text-sm tracking-wider shadow-sm group-hover:bg-[#0d8b68] transition-colors">
              UFV
            </div>
            <div className="flex flex-col">
              <span className="text-base font-extrabold tracking-tight text-[#15231e] leading-tight">
                UFV Aquatic & Sports Centre
              </span>
              <span className="text-[11px] font-semibold tracking-wider text-[#5b6c64] uppercase">
                Olympic Proposal · Abbotsford
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links (Single-Line Text Links) */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-[#5b6c64]">
            <a href="#vision" className="hover:text-[#006b4f] transition-colors whitespace-nowrap shrink-0">Vision</a>
            <a href="#facilities" className="hover:text-[#006b4f] transition-colors whitespace-nowrap shrink-0">Facilities</a>
            <a href="#investment" className="hover:text-[#006b4f] transition-colors whitespace-nowrap shrink-0">Investment</a>
            <a href="#roadmap" className="hover:text-[#006b4f] transition-colors whitespace-nowrap shrink-0">Roadmap</a>
            <a href="#evidence" className="hover:text-[#006b4f] transition-colors whitespace-nowrap shrink-0">Research</a>
            <a href="#endorse" className="hover:text-[#006b4f] transition-colors whitespace-nowrap shrink-0">Endorse</a>
          </nav>

          {/* Zone 3: Primary Action Button */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#investment"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#006b4f] hover:bg-[#0d8b68] rounded-md transition-all duration-200 shadow-sm hover:shadow hover:-translate-y-0.5 whitespace-nowrap shrink-0 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#006b4f]"
            >
              <span>Explore $100M Plan</span>
              <ArrowDownIcon className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-[#15231e] hover:bg-[#f3f8f5] border border-[#dce7df] focus:outline-none"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-[#dce7df] px-4 pt-3 pb-6 shadow-lg animate-in fade-in slide-in-from-top-2">
            <nav className="flex flex-col gap-3 font-semibold text-sm text-[#15231e]">
              <a
                href="#vision"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded hover:bg-[#f3f8f5] hover:text-[#006b4f]"
              >
                The Vision
              </a>
              <a
                href="#facilities"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded hover:bg-[#f3f8f5] hover:text-[#006b4f]"
              >
                Facilities & Specs
              </a>
              <a
                href="#investment"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded hover:bg-[#f3f8f5] hover:text-[#006b4f]"
              >
                $100M Investment Breakdown
              </a>
              <a
                href="#roadmap"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded hover:bg-[#f3f8f5] hover:text-[#006b4f]"
              >
                Phase Roadmap (2026–2030)
              </a>
              <a
                href="#evidence"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded hover:bg-[#f3f8f5] hover:text-[#006b4f]"
              >
                Research & Empirical Data
              </a>
              <a
                href="#endorse"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded bg-[#f3f8f5] text-[#006b4f] font-bold flex items-center justify-between"
              >
                <span>Endorse This Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#004633] via-[#006b4f] to-[#0d8b68] text-white">
        {/* Ambient Architectural Geometry */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
                <path d="M 48 0 L 0 0 0 48" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Visionary Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-[#d7e8a7] bg-white/10 backdrop-blur-sm px-3.5 py-1.5 rounded border border-white/15">
                <span className="w-2 h-2 rounded-full bg-[#e5b95f]" />
                <span>A Bold Vision for UFV Abbotsford</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08] text-balance">
                Make room for a <span className="text-[#d7e8a7] italic font-serif">new wave</span> of possibility.
              </h1>

              <p className="text-lg sm:text-xl text-[#e3f0e9] font-normal leading-relaxed max-w-xl">
                Introducing the proposed <strong className="text-white font-semibold">UFV Olympic Swimming & Sports Centre</strong> — a comprehensive $100M capital concept to train varsity competitors, recharge student mental health, and bring our Fraser Valley campus community together.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="#facilities"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-[#006b4f] font-bold text-sm rounded-md shadow-md hover:bg-[#d7e8a7] hover:text-[#004633] transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  <span>Explore Aquatic Facilities</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="#investment"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold text-sm rounded-md border border-white/30 backdrop-blur-sm transition-all duration-200"
                >
                  <span>Review $100M Budget</span>
                </a>
              </div>

              <div className="pt-4 border-t border-white/15 flex items-center gap-4 text-xs text-[#c5dfd2]">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#e5b95f]" />
                  <span>Abbotsford Campus</span>
                </div>
                <span>·</span>
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-[#e5b95f]" />
                  <span>Target Opening: Fall 2030</span>
                </div>
                <span>·</span>
                <span>CIS 385 Group 4</span>
              </div>
            </div>

            {/* Right Column: Hero High-Fidelity Architectural Visual */}
            <div className="lg:col-span-6">
              <div className="relative rounded-xl overflow-hidden border border-white/20 shadow-2xl bg-[#004633]/60 group">
                <img
                  src={heroAquaticCentre}
                  alt="UFV Olympic Swimming Centre 50-metre competition pool concept with timber glulam ceiling"
                  className="w-full h-[400px] sm:h-[460px] object-cover group-hover:scale-102 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />

                {/* Technical Watermark Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#003829]/90 via-transparent to-black/30 pointer-events-none" />

                {/* Floating Architectural Technical Tags */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs text-white/90">
                  <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded border border-white/20 font-mono text-[11px] uppercase tracking-wider">
                    Architectural Concept Model
                  </span>
                  <span className="bg-[#006b4f]/80 backdrop-blur-md text-[#d7e8a7] px-3 py-1 rounded font-semibold text-[11px]">
                    10 Competition Lanes
                  </span>
                </div>

                {/* Bottom Highlight Bar Inside Hero Media */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md text-[#15231e] p-4 rounded-lg shadow-xl border border-white flex items-center justify-between">
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#006b4f]">
                      Competition Standard
                    </div>
                    <div className="text-xl font-extrabold tracking-tight">
                      50m × 25m Olympic Basin
                    </div>
                    <div className="text-xs text-[#5b6c64]">
                      Movable bulkheads · FINA 2.0m depth · 1,200 spectator seats
                    </div>
                  </div>

                  <a
                    href="#facilities"
                    className="p-2.5 bg-[#006b4f] hover:bg-[#0d8b68] text-white rounded-md transition-colors"
                    aria-label="View specifications"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Stat High-Impact Strip */}
        <div className="bg-[#004633] border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-white divide-y md:divide-y-0 md:divide-x divide-white/10">
              <div className="pt-2 md:pt-0 md:pr-4">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#d7e8a7]">
                  Total Capital Investment
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mt-1 tabular-nums">
                  $100,000,000
                </div>
                <div className="text-xs text-white/70 mt-0.5">
                  Full construction & 3-month startup
                </div>
              </div>

              <div className="pt-4 md:pt-0 md:px-6">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#d7e8a7]">
                  Pool Dimensions
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mt-1 tabular-nums">
                  50 Metres
                </div>
                <div className="text-xs text-white/70 mt-0.5">
                  10 regulation competition lanes
                </div>
              </div>

              <div className="pt-4 md:pt-0 md:px-6">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#d7e8a7]">
                  Target Completion
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mt-1 tabular-nums">
                  Sept. 1, 2030
                </div>
                <div className="text-xs text-white/70 mt-0.5">
                  4 structured governance phases
                </div>
              </div>

              <div className="pt-4 md:pt-0 md:pl-6">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#d7e8a7]">
                  Community Impact
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mt-1 tabular-nums">
                  15,000+
                </div>
                <div className="text-xs text-white/70 mt-0.5">
                  Students, athletes & regional swimmers
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: The Opportunity / Vision */}
      <section id="vision" className="py-20 lg:py-28 bg-[#f3f8f5] border-b border-[#dce7df]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Campus Context Media */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="rounded-xl overflow-hidden border border-[#dce7df] shadow-lg bg-white relative">
                <img
                  src={ufvCampusAerial}
                  alt="University of the Fraser Valley Abbotsford campus sports precinct architectural rendering"
                  className="w-full h-80 sm:h-96 object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="p-6 bg-white space-y-4">
                  <div className="flex items-center justify-between text-xs text-[#5b6c64] font-medium border-b border-[#dce7df] pb-3">
                    <span className="flex items-center gap-1.5 text-[#006b4f] font-bold">
                      <MapPin className="w-4 h-4" />
                      Abbotsford Campus Precinct
                    </span>
                    <span>Adjacent to Envision Athletic Centre</span>
                  </div>
                  <p className="text-sm text-[#5b6c64] leading-relaxed">
                    Positioned next to existing fitness amenities, creating a unified athletic and health hub that minimizes transit friction and leverages existing campus utilities.
                  </p>

                  <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
                    <div className="p-3 bg-[#f3f8f5] rounded border border-[#dce7df]/80">
                      <span className="block font-bold text-[#006b4f]">Direct Transit Link</span>
                      <span className="text-[#5b6c64]">Adjacent to UFV bus loop</span>
                    </div>
                    <div className="p-3 bg-[#f3f8f5] rounded border border-[#dce7df]/80">
                      <span className="block font-bold text-[#006b4f]">Net-Zero Carbon</span>
                      <span className="text-[#5b6c64]">Geothermal & solar ready</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: The Core Strategic Case */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <div className="text-xs font-bold uppercase tracking-widest text-[#006b4f] flex items-center gap-2">
                <span className="w-6 h-0.5 bg-[#006b4f]" />
                <span>The Opportunity</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#15231e] leading-tight">
                More than a pool.<br />
                <span className="text-[#006b4f]">A stronger, healthier campus.</span>
              </h2>

              <p className="text-base sm:text-lg text-[#5b6c64] leading-relaxed">
                UFV already offers essential fitness spaces, gyms, and courts in Abbotsford. However, our university community currently lacks an aquatic facility of any kind. A dedicated Olympic-length aquatic centre adds a transformative dimension to collegiate life: fitness, competitive athletics, aquatic therapy, and community connection under one roof.
              </p>

              {/* 3 Core Strategic Pillars */}
              <div className="space-y-4 pt-2">
                <div className="p-5 bg-white rounded-lg border border-[#dce7df] shadow-sm flex items-start gap-4 hover:border-[#006b4f]/40 transition-colors">
                  <div className="w-10 h-10 rounded-md bg-[#f3f8f5] text-[#006b4f] flex items-center justify-center shrink-0 border border-[#dce7df]">
                    <Activity className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#15231e]">Support Student Mental Health & Physical Wellbeing</h3>
                    <p className="text-sm text-[#5b6c64] mt-1 leading-relaxed">
                      Swimming is one of the highest-rated low-impact activities for stress reduction, cognitive recovery, and cardiovascular fitness, offering an accessible decompression outlet for rigorous academic schedules.
                    </p>
                  </div>
                </div>

                <div className="p-5 bg-white rounded-lg border border-[#dce7df] shadow-sm flex items-start gap-4 hover:border-[#006b4f]/40 transition-colors">
                  <div className="w-10 h-10 rounded-md bg-[#f3f8f5] text-[#006b4f] flex items-center justify-center shrink-0 border border-[#dce7df]">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#15231e]">Found a UFV Cascades Varsity Swim & Aquatic Program</h3>
                    <p className="text-sm text-[#5b6c64] mt-1 leading-relaxed">
                      A 50m Olympic regulation basin opens the door for UFV to recruit student-athletes, compete in U SPORTS aquatic championships, and establish water polo and synchronized swimming clubs.
                    </p>
                  </div>
                </div>

                <div className="p-5 bg-white rounded-lg border border-[#dce7df] shadow-sm flex items-start gap-4 hover:border-[#006b4f]/40 transition-colors">
                  <div className="w-10 h-10 rounded-md bg-[#f3f8f5] text-[#006b4f] flex items-center justify-center shrink-0 border border-[#dce7df]">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#15231e]">Serve Abbotsford and Fraser Valley Swim Clubs</h3>
                    <p className="text-sm text-[#5b6c64] mt-1 leading-relaxed">
                      Public engagement surveys show massive local demand for 50-metre water space. UFV can partner with regional schools, youth swim clubs, and seniors programs, generating sustainable community revenue.
                    </p>
                  </div>
                </div>
              </div>

              {/* Interactive Pool Specification Comparison */}
              <div className="mt-8 p-6 bg-white rounded-xl border border-[#dce7df] shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#dce7df]">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#006b4f]">Technical Concept Comparison</span>
                    <h4 className="text-base font-bold text-[#15231e]">Why an Olympic 50m Pool vs 25m Standard?</h4>
                  </div>
                  {/* Clean Filter Controls (Buttons with click handlers) */}
                  <div className="inline-flex p-1 bg-[#f3f8f5] rounded-lg border border-[#dce7df]">
                    <button
                      onClick={() => setActivePoolComparison('olympic')}
                      className={`px-3 py-1.5 text-xs font-bold rounded transition-colors whitespace-nowrap shrink-0 ${
                        activePoolComparison === 'olympic'
                          ? 'bg-[#006b4f] text-white shadow-sm'
                          : 'text-[#5b6c64] hover:text-[#15231e]'
                      }`}
                    >
                      Proposed 50m Olympic
                    </button>
                    <button
                      onClick={() => setActivePoolComparison('community')}
                      className={`px-3 py-1.5 text-xs font-bold rounded transition-colors whitespace-nowrap shrink-0 ${
                        activePoolComparison === 'community'
                          ? 'bg-[#006b4f] text-white shadow-sm'
                          : 'text-[#5b6c64] hover:text-[#15231e]'
                      }`}
                    >
                      Typical 25m Pool
                    </button>
                  </div>
                </div>

                <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                  <div className="p-3 bg-[#f3f8f5] rounded border border-[#dce7df]">
                    <span className="text-[11px] text-[#5b6c64] block">Lanes & Width</span>
                    <strong className="text-base font-bold text-[#006b4f]">
                      {activePoolComparison === 'olympic' ? '10 Lanes (25m wide)' : '6 Lanes (15m wide)'}
                    </strong>
                  </div>
                  <div className="p-3 bg-[#f3f8f5] rounded border border-[#dce7df]">
                    <span className="text-[11px] text-[#5b6c64] block">Course Flexibility</span>
                    <strong className="text-base font-bold text-[#006b4f]">
                      {activePoolComparison === 'olympic' ? 'Dual Bulkhead (2×25m)' : 'Single 25m Course'}
                    </strong>
                  </div>
                  <div className="p-3 bg-[#f3f8f5] rounded border border-[#dce7df]">
                    <span className="text-[11px] text-[#5b6c64] block">Event Sanctioning</span>
                    <strong className="text-base font-bold text-[#006b4f]">
                      {activePoolComparison === 'olympic' ? 'National & U SPORTS' : 'Local Meets Only'}
                    </strong>
                  </div>
                  <div className="p-3 bg-[#f3f8f5] rounded border border-[#dce7df]">
                    <span className="text-[11px] text-[#5b6c64] block">Concurrent User Cap</span>
                    <strong className="text-base font-bold text-[#006b4f]">
                      {activePoolComparison === 'olympic' ? '150 Swimmers at once' : '45 Swimmers at once'}
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Designed Around People — Facilities & Spatial Program */}
      <section id="facilities" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14 space-y-3">
            <div className="text-xs font-bold uppercase tracking-widest text-[#006b4f] flex items-center gap-2">
              <span className="w-6 h-0.5 bg-[#006b4f]" />
              <span>Spatial Blueprint</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#15231e]">
              One centre. Many ways to train, recover and thrive.
            </h2>
            <p className="text-base text-[#5b6c64] leading-relaxed">
              Carefully engineered to integrate championship-grade aquatics with community learn-to-swim lessons, dryland athletic strength training, and accessible sports medicine.
            </p>
          </div>

          {/* Interactive Facility Zone Tabs */}
          <div className="flex items-center gap-2 border-b border-[#dce7df] pb-4 mb-8 overflow-x-auto no-scrollbar">
            <button
              onClick={() => setActiveFacilityTab('aquatics')}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-md transition-all whitespace-nowrap shrink-0 ${
                activeFacilityTab === 'aquatics'
                  ? 'bg-[#006b4f] text-white shadow-sm'
                  : 'bg-[#f3f8f5] text-[#5b6c64] hover:text-[#15231e]'
              }`}
            >
              01. 50m Aquatic Arena
            </button>
            <button
              onClick={() => setActiveFacilityTab('dryland')}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-md transition-all whitespace-nowrap shrink-0 ${
                activeFacilityTab === 'dryland'
                  ? 'bg-[#006b4f] text-white shadow-sm'
                  : 'bg-[#f3f8f5] text-[#5b6c64] hover:text-[#15231e]'
              }`}
            >
              02. Dryland Conditioning
            </button>
            <button
              onClick={() => setActiveFacilityTab('community')}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-md transition-all whitespace-nowrap shrink-0 ${
                activeFacilityTab === 'community'
                  ? 'bg-[#006b4f] text-white shadow-sm'
                  : 'bg-[#f3f8f5] text-[#5b6c64] hover:text-[#15231e]'
              }`}
            >
              03. Community & Lessons
            </button>
            <button
              onClick={() => setActiveFacilityTab('spectators')}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-md transition-all whitespace-nowrap shrink-0 ${
                activeFacilityTab === 'spectators'
                  ? 'bg-[#006b4f] text-white shadow-sm'
                  : 'bg-[#f3f8f5] text-[#5b6c64] hover:text-[#15231e]'
              }`}
            >
              04. Grandstands & Wellness
            </button>
          </div>

          {/* Dynamic Content Display for Tab */}
          <div className="mb-14 p-6 sm:p-8 bg-[#f3f8f5] rounded-2xl border border-[#dce7df]">
            {activeFacilityTab === 'aquatics' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#006b4f]">
                    Marquee Aquatic Infrastructure
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#15231e]">
                    50-Metre Competition Basin with Dual Bulkheads
                  </h3>
                  <p className="text-sm text-[#5b6c64] leading-relaxed">
                    Built to World Aquatics (FINA) standards with 10 lanes, anti-wave lane ropes, and movable acoustic bulkheads that can configure the water into two distinct 25m pools simultaneously — allowing varsity lap training in one section while public swimming or lessons occur in the other.
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                    <div className="bg-white p-3 rounded border border-[#dce7df]">
                      <span className="text-[11px] text-[#5b6c64] block">Basin Dimensions</span>
                      <strong className="text-sm font-bold text-[#15231e]">50m × 25m × 2.2m</strong>
                    </div>
                    <div className="bg-white p-3 rounded border border-[#dce7df]">
                      <span className="text-[11px] text-[#5b6c64] block">Filtration</span>
                      <strong className="text-sm font-bold text-[#15231e]">UV + Perlite Media</strong>
                    </div>
                    <div className="bg-white p-3 rounded border border-[#dce7df]">
                      <span className="text-[11px] text-[#5b6c64] block">Accessibility</span>
                      <strong className="text-sm font-bold text-[#15231e]">Zero-depth ramp entry</strong>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-5">
                  <img
                    src={heroAquaticCentre}
                    alt="Olympic swimming basin detail"
                    className="w-full h-64 sm:h-72 object-cover rounded-xl border border-[#dce7df] shadow-md"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            )}

            {activeFacilityTab === 'dryland' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#006b4f]">
                    Athletic Preparation & Strength
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#15231e]">
                    Dedicated Dryland Strength & Mobility Suite
                  </h3>
                  <p className="text-sm text-[#5b6c64] leading-relaxed">
                    Modern aquatic performance demands off-water functional conditioning. This dedicated second-floor mezzanine offers 5,000 sq ft of shock-absorbent turf, Olympic lifting platforms, rowing ergometers, cable machines, and core mobility areas directly overlooking the pool deck.
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                    <div className="bg-white p-3 rounded border border-[#dce7df]">
                      <span className="text-[11px] text-[#5b6c64] block">Floor Area</span>
                      <strong className="text-sm font-bold text-[#15231e]">5,200 sq. ft.</strong>
                    </div>
                    <div className="bg-white p-3 rounded border border-[#dce7df]">
                      <span className="text-[11px] text-[#5b6c64] block">Turf Sprint Track</span>
                      <strong className="text-sm font-bold text-[#15231e]">30m Agility Lane</strong>
                    </div>
                    <div className="bg-white p-3 rounded border border-[#dce7df]">
                      <span className="text-[11px] text-[#5b6c64] block">Equipment</span>
                      <strong className="text-sm font-bold text-[#15231e]">Concept2, Eleiko Racks</strong>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-5">
                  <img
                    src={drylandTrainingCentre}
                    alt="University athletic dryland conditioning facility"
                    className="w-full h-64 sm:h-72 object-cover rounded-xl border border-[#dce7df] shadow-md"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            )}

            {activeFacilityTab === 'community' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#006b4f]">
                    Inclusive Regional Engagement
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#15231e]">
                    Youth Coaching, Master Swimmers & Lessons
                  </h3>
                  <p className="text-sm text-[#5b6c64] leading-relaxed">
                    The facility is envisioned with structured operating hours catering to students during prime hours, while welcoming Fraser Valley swim clubs, early morning lap swimmers, local school district learn-to-swim classes, and gentle water aerobics for seniors.
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                    <div className="bg-white p-3 rounded border border-[#dce7df]">
                      <span className="text-[11px] text-[#5b6c64] block">Weekly Community Hours</span>
                      <strong className="text-sm font-bold text-[#15231e]">45+ Public Hours</strong>
                    </div>
                    <div className="bg-white p-3 rounded border border-[#dce7df]">
                      <span className="text-[11px] text-[#5b6c64] block">Swim Lessons</span>
                      <strong className="text-sm font-bold text-[#15231e]">Red Cross / Lifesaving</strong>
                    </div>
                    <div className="bg-white p-3 rounded border border-[#dce7df]">
                      <span className="text-[11px] text-[#5b6c64] block">Affordability</span>
                      <strong className="text-sm font-bold text-[#15231e]">U-Pass subsidized rate</strong>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-5">
                  <img
                    src={communitySwimPrograms}
                    alt="Community swimmers in lap lanes"
                    className="w-full h-64 sm:h-72 object-cover rounded-xl border border-[#dce7df] shadow-md"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            )}

            {activeFacilityTab === 'spectators' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#006b4f]">
                    Event Capability & Physical Medicine
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#15231e]">
                    1,200 Spectator Grandstand & Sports Medicine Wing
                  </h3>
                  <p className="text-sm text-[#5b6c64] leading-relaxed">
                    Designed with an acoustically treated grandstand to host regional, provincial, and national swim meets without deafening echoes. Includes integrated clinic suites where UFV Kinesiology students gain clinical practicum hours in hydrotherapy and sports injury rehabilitation.
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                    <div className="bg-white p-3 rounded border border-[#dce7df]">
                      <span className="text-[11px] text-[#5b6c64] block">Seating Capacity</span>
                      <strong className="text-sm font-bold text-[#15231e]">1,200 Viewers</strong>
                    </div>
                    <div className="bg-white p-3 rounded border border-[#dce7df]">
                      <span className="text-[11px] text-[#5b6c64] block">Kinesiology Lab</span>
                      <strong className="text-sm font-bold text-[#15231e]">Clinical practicum</strong>
                    </div>
                    <div className="bg-white p-3 rounded border border-[#dce7df]">
                      <span className="text-[11px] text-[#5b6c64] block">Changing Suites</span>
                      <strong className="text-sm font-bold text-[#15231e]">Universal universal design</strong>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-5">
                  <div className="bg-[#004633] text-white p-6 rounded-xl border border-[#0d8b68]/40 h-64 sm:h-72 flex flex-col justify-between">
                    <div>
                      <div className="text-xs font-bold uppercase text-[#d7e8a7] tracking-wider mb-2">
                        Universal Accessibility Standard
                      </div>
                      <div className="text-lg font-bold">Barrier-Free Inclusion</div>
                      <p className="text-xs text-white/80 mt-2 leading-relaxed">
                        Features private gender-inclusive changing cabanas, wheelchair-accessible warm water transfer lifts, tactile floor navigation guides, and motorized overhead hoists.
                      </p>
                    </div>
                    <div className="pt-3 border-t border-white/20 text-xs text-[#d7e8a7]">
                      Rick Hansen Foundation Accessibility Gold Target
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 6 Feature Architecture Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <article className="p-6 bg-white rounded-xl border border-[#dce7df] shadow-sm hover:shadow-md transition-all">
              <div className="text-xs font-bold text-[#006b4f] tracking-wider uppercase mb-2">
                01 · Aquatics Core
              </div>
              <h3 className="text-lg font-bold text-[#15231e] mb-2">50-Metre Swimming Basin</h3>
              <p className="text-sm text-[#5b6c64] leading-relaxed">
                Competition-length 10 lanes with 2.2m consistent depth, wave-dampening gutters, and Omega timing pads for high-performance training and sanctionable meets.
              </p>
            </article>

            <article className="p-6 bg-white rounded-xl border border-[#dce7df] shadow-sm hover:shadow-md transition-all">
              <div className="text-xs font-bold text-[#006b4f] tracking-wider uppercase mb-2">
                02 · Universal Access
              </div>
              <h3 className="text-lg font-bold text-[#15231e] mb-2">Universal Changing Facilities</h3>
              <p className="text-sm text-[#5b6c64] leading-relaxed">
                Private changing stalls, family changerooms, barrier-free accessible showers, and secure electronic RFID wristband lockers for complete peace of mind.
              </p>
            </article>

            <article className="p-6 bg-white rounded-xl border border-[#dce7df] shadow-sm hover:shadow-md transition-all">
              <div className="text-xs font-bold text-[#006b4f] tracking-wider uppercase mb-2">
                03 · Event Capacity
              </div>
              <h3 className="text-lg font-bold text-[#15231e] mb-2">Elevated Spectator Bleachers</h3>
              <p className="text-sm text-[#5b6c64] leading-relaxed">
                Fixed 1,200-seat stadium seating with unobstructed sightlines, acoustic absorption baffles, and dedicated press/coaching broadcast booths.
              </p>
            </article>

            <article className="p-6 bg-white rounded-xl border border-[#dce7df] shadow-sm hover:shadow-md transition-all">
              <div className="text-xs font-bold text-[#006b4f] tracking-wider uppercase mb-2">
                04 · Strength & Conditioning
              </div>
              <h3 className="text-lg font-bold text-[#15231e] mb-2">Dryland Athletic Zone</h3>
              <p className="text-sm text-[#5b6c64] leading-relaxed">
                Complementary off-water strength suites, plyometric boxes, sprint track, mobility bands, and Olympic weight platforms for swimmer conditioning.
              </p>
            </article>

            <article className="p-6 bg-white rounded-xl border border-[#dce7df] shadow-sm hover:shadow-md transition-all">
              <div className="text-xs font-bold text-[#006b4f] tracking-wider uppercase mb-2">
                05 · Coaching & Instruction
              </div>
              <h3 className="text-lg font-bold text-[#15231e] mb-2">Learn-to-Swim & Coaching</h3>
              <p className="text-sm text-[#5b6c64] leading-relaxed">
                Dedicated shallow teaching zone with floor water jets for beginner lessons, lifeguard certifications (Bronze Medallion/Cross, NLS), and masters clinics.
              </p>
            </article>

            <article className="p-6 bg-white rounded-xl border border-[#dce7df] shadow-sm hover:shadow-md transition-all">
              <div className="text-xs font-bold text-[#006b4f] tracking-wider uppercase mb-2">
                06 · Physical Health
              </div>
              <h3 className="text-lg font-bold text-[#15231e] mb-2">Sports Medicine & Hydrotherapy</h3>
              <p className="text-sm text-[#5b6c64] leading-relaxed">
                Warm-water rehabilitation whirlpool, contrast plunge tubs, and collaborative therapy rooms partnering with UFV's Kinesiology department.
              </p>
            </article>
          </div>

          <p className="mt-8 text-xs text-[#5b6c64] italic bg-[#f3f8f5] p-3.5 rounded border border-[#dce7df]">
            Note: These are preliminary proposed conceptual features developed for CIS 385 Assignment 3. Final spatial layout, structural systems, and seating numbers will be validated during Phase 1 & 2 engineering feasibility studies.
          </p>
        </div>
      </section>

      {/* Section 3: Responsible Investment ($100M Breakdown & Interactive Explorer) */}
      <section id="investment" className="py-20 lg:py-28 bg-[#f3f8f5] border-y border-[#dce7df]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14 space-y-3">
            <div className="text-xs font-bold uppercase tracking-widest text-[#006b4f] flex items-center gap-2">
              <span className="w-6 h-0.5 bg-[#006b4f]" />
              <span>Financial Accountability</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#15231e]">
              A responsible, transparent $100M investment.
            </h2>
            <p className="text-base text-[#5b6c64] leading-relaxed">
              Every dollar has a clear mandate. The proposed capital budget reserves a full $10,000,000 contingency buffer and covers the first 3 months of operational commissioning to ensure fiscal sustainability.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Sticky Overview Card */}
            <div className="lg:col-span-5 bg-[#004633] text-white p-6 sm:p-8 rounded-xl shadow-xl border border-[#0d8b68]/40 lg:sticky lg:top-28">
              <div className="flex items-center justify-between text-xs font-semibold text-[#d7e8a7] uppercase tracking-wider mb-2">
                <span>Proposed Total Envelope</span>
                <span className="bg-[#006b4f] px-2.5 py-0.5 rounded text-white border border-[#0d8b68]">
                  Balanced 100%
                </span>
              </div>

              <div className="text-4xl sm:text-5xl font-black tracking-tight text-white tabular-nums my-2">
                $100,000,000
              </div>

              <p className="text-sm text-[#e3f0e9] leading-relaxed mb-6">
                Comprehensive capital allocation covering land prep, high-performance aquatic construction, mechanical water systems, and initial operating hand-off.
              </p>

              {/* Active Selected Category Detail Card */}
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/15 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#d7e8a7] font-bold uppercase tracking-wide">
                    {currentBudgetItem.category}
                  </span>
                  <span className="font-mono text-white text-xs">
                    {currentBudgetItem.pct}% of budget
                  </span>
                </div>

                <div className="text-lg font-bold text-white">
                  {currentBudgetItem.label}
                </div>

                <div className="text-2xl font-black text-[#e5b95f] tabular-nums">
                  ${(currentBudgetItem.amount).toLocaleString('en-US')}
                </div>

                <p className="text-xs text-[#c5dfd2] leading-relaxed">
                  {currentBudgetItem.description}
                </p>

                <div className="pt-2 border-t border-white/15">
                  <span className="text-[11px] font-semibold text-[#d7e8a7] block mb-1">
                    Key Scope Deliverables:
                  </span>
                  <ul className="text-xs text-white/90 space-y-1">
                    {currentBudgetItem.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <Check className="w-3 h-3 text-[#d7e8a7] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/20 text-xs text-white/80 space-y-2">
                <div className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#e5b95f] shrink-0 mt-0.5" />
                  <span>
                    <strong>$10M Contingency Protection:</strong> Held in reserve against inflation, supply disruptions, or geotechnical discoveries.
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <Info className="w-4 h-4 text-[#d7e8a7] shrink-0 mt-0.5" />
                  <span>
                    <strong>First 3 Months Operational Scope:</strong> Hiring and commissioning funded within the $100M plan before transitioning to university recreation operations.
                  </span>
                </div>
              </div>
            </div>

            {/* Interactive Allocation List */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-xl border border-[#dce7df] shadow-sm space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-[#dce7df]">
                <span className="text-xs font-bold uppercase tracking-wider text-[#5b6c64]">
                  Click Any Line Item To Inspect Details
                </span>
                <span className="text-xs font-mono font-bold text-[#006b4f]">
                  7 Strategic Allocations
                </span>
              </div>

              <div className="space-y-3">
                {budgetItems.map((item, index) => {
                  const isSelected = selectedBudgetIndex === index;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setSelectedBudgetIndex(index)}
                      className={`w-full text-left p-4 rounded-lg border transition-all duration-200 cursor-pointer ${
                        isSelected
                          ? 'border-[#006b4f] bg-[#f3f8f5] shadow-sm ring-1 ring-[#006b4f]'
                          : 'border-[#dce7df] hover:border-[#006b4f]/40 hover:bg-[#fafcfa]'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-4 mb-2">
                        <div className="flex items-center gap-2">
                          <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-[#006b4f]' : 'bg-[#5b6c64]/40'}`} />
                          <span className="text-sm font-bold text-[#15231e]">
                            {item.label}
                          </span>
                        </div>
                        <div className="text-right shrink-0">
                          <span className="text-sm font-extrabold text-[#006b4f] tabular-nums">
                            ${(item.amount / 1000000).toFixed(1)}M
                          </span>
                          <span className="text-xs text-[#5b6c64] ml-1.5 font-medium tabular-nums">
                            ({item.pct}%)
                          </span>
                        </div>
                      </div>

                      {/* Visual Progress Bar */}
                      <div className="w-full h-2.5 bg-[#dce7df]/60 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-500 ${
                            isSelected
                              ? 'bg-[#006b4f]'
                              : 'bg-[#0d8b68]/70'
                          }`}
                          style={{ width: `${item.pct}%` }}
                        />
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Proposed Multi-Stream Capital Funding Matrix */}
              <div className="mt-8 pt-6 border-t border-[#dce7df]">
                <h4 className="text-sm font-bold text-[#15231e] mb-3 flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-[#006b4f]" />
                  <span>Proposed Multi-Party Funding Model (Non-Tuition Reliant)</span>
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                  <div className="p-3 bg-[#f3f8f5] rounded border border-[#dce7df]">
                    <span className="text-[#5b6c64] block">Provincial / Federal Grants</span>
                    <strong className="text-[#006b4f] text-sm block mt-0.5">$45,000,000</strong>
                    <span className="text-[10px] text-[#5b6c64]">Green infrastructure</span>
                  </div>
                  <div className="p-3 bg-[#f3f8f5] rounded border border-[#dce7df]">
                    <span className="text-[#5b6c64] block">City / Regional District</span>
                    <strong className="text-[#006b4f] text-sm block mt-0.5">$25,000,000</strong>
                    <span className="text-[10px] text-[#5b6c64]">Recreation joint-use</span>
                  </div>
                  <div className="p-3 bg-[#f3f8f5] rounded border border-[#dce7df]">
                    <span className="text-[#5b6c64] block">Philanthropic & Naming</span>
                    <strong className="text-[#006b4f] text-sm block mt-0.5">$18,000,000</strong>
                    <span className="text-[10px] text-[#5b6c64]">Major donor campaign</span>
                  </div>
                  <div className="p-3 bg-[#f3f8f5] rounded border border-[#dce7df]">
                    <span className="text-[#5b6c64] block">University Reserves</span>
                    <strong className="text-[#006b4f] text-sm block mt-0.5">$12,000,000</strong>
                    <span className="text-[10px] text-[#5b6c64]">Internal capital envelope</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Phased Roadmap & Decision Gates */}
      <section id="roadmap" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14 space-y-3">
            <div className="text-xs font-bold uppercase tracking-widest text-[#006b4f] flex items-center gap-2">
              <span className="w-6 h-0.5 bg-[#006b4f]" />
              <span>Project Lifecycle</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#15231e]">
              A phased plan with strict decision gates.
            </h2>
            <p className="text-base text-[#5b6c64] leading-relaxed">
              Large capital projects demand disciplined governance. Major spending only occurs after passing formal stage-gate reviews: confirming feasibility, securing regulatory approvals, and validating budgets.
            </p>
          </div>

          {/* Stepper Timeline Navigation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              { phase: 'Phase 01', title: 'Initiation & Feasibility', timeframe: 'Q1 2026 – Q4 2026' },
              { phase: 'Phase 02', title: 'Design & Approvals', timeframe: 'Q1 2027 – Q2 2028' },
              { phase: 'Phase 03', title: 'Procurement & Build', timeframe: 'Q3 2028 – Q1 2030' },
              { phase: 'Phase 04', title: 'Commission & Launch', timeframe: 'Q2 2030 – Sept 2030' }
            ].map((step, idx) => {
              const isActive = activeRoadmapPhase === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveRoadmapPhase(idx)}
                  className={`text-left p-5 rounded-xl border transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'border-[#006b4f] bg-[#006b4f] text-white shadow-md'
                      : 'border-[#dce7df] bg-[#f3f8f5] text-[#15231e] hover:border-[#006b4f]/40'
                  }`}
                >
                  <div className={`text-xs font-bold uppercase tracking-wider mb-1 ${isActive ? 'text-[#d7e8a7]' : 'text-[#006b4f]'}`}>
                    {step.phase}
                  </div>
                  <div className="font-extrabold text-base leading-snug">
                    {step.title}
                  </div>
                  <div className={`text-xs mt-2 ${isActive ? 'text-white/80' : 'text-[#5b6c64]'}`}>
                    {step.timeframe}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detailed Active Phase Drilldown */}
          <div className="p-8 bg-[#f3f8f5] rounded-2xl border border-[#dce7df] shadow-sm">
            {activeRoadmapPhase === 0 && (
              <div className="space-y-4">
                <div className="flex items-center justify-between flex-wrap gap-2 pb-3 border-b border-[#dce7df]">
                  <span className="text-xs font-bold uppercase text-[#006b4f] tracking-wider">Phase 1 Milestone Package</span>
                  <span className="text-xs font-semibold px-2.5 py-1 bg-[#006b4f] text-white rounded">Gate 1: Executive Board Go/No-Go</span>
                </div>
                <h3 className="text-2xl font-extrabold text-[#15231e]">Comprehensive Feasibility, Stakeholder Consultation & Site Assessment</h3>
                <p className="text-sm text-[#5b6c64] leading-relaxed">
                  Establish the joint steering committee with UFV administration, Student Union Society (SUS), and City of Abbotsford planners. Complete soil geotechnical coring on the Abbotsford campus, validate utility capacity for aquatic heating, and conduct a campus-wide student referendum/survey.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-3">
                  <div className="bg-white p-4 rounded-lg border border-[#dce7df]">
                    <span className="text-xs font-bold text-[#006b4f] block">Geotechnical Core Survey</span>
                    <span className="text-xs text-[#5b6c64] mt-1 block">Confirm soil bearing capacity adjacent to athletic precinct.</span>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-[#dce7df]">
                    <span className="text-xs font-bold text-[#006b4f] block">Student Body Consultation</span>
                    <span className="text-xs text-[#5b6c64] mt-1 block">Campus town halls and student recreation priority mapping.</span>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-[#dce7df]">
                    <span className="text-xs font-bold text-[#006b4f] block">Business Case Validation</span>
                    <span className="text-xs text-[#5b6c64] mt-1 block">Independent third-party financial review of operating model.</span>
                  </div>
                </div>
              </div>
            )}

            {activeRoadmapPhase === 1 && (
              <div className="space-y-4">
                <div className="flex items-center justify-between flex-wrap gap-2 pb-3 border-b border-[#dce7df]">
                  <span className="text-xs font-bold uppercase text-[#006b4f] tracking-wider">Phase 2 Milestone Package</span>
                  <span className="text-xs font-semibold px-2.5 py-1 bg-[#006b4f] text-white rounded">Gate 2: Permit & Tender Release</span>
                </div>
                <h3 className="text-2xl font-extrabold text-[#15231e]">Architectural Engineering, Municipal Permitting & Tender Documents</h3>
                <p className="text-sm text-[#5b6c64] leading-relaxed">
                  Select architectural lead through competitive RFP. Produce detailed mechanical, structural, and electrical schematics. Obtain City of Abbotsford development and building permits, water discharge authorizations, and prepare construction tender packages.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-3">
                  <div className="bg-white p-4 rounded-lg border border-[#dce7df]">
                    <span className="text-xs font-bold text-[#006b4f] block">Acoustic & HVAC Modeling</span>
                    <span className="text-xs text-[#5b6c64] mt-1 block">High-efficiency chloramine extraction and reverberation dampening.</span>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-[#dce7df]">
                    <span className="text-xs font-bold text-[#006b4f] block">City Development Permits</span>
                    <span className="text-xs text-[#5b6c64] mt-1 block">Zoning alignment, traffic study, and storm water management approvals.</span>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-[#dce7df]">
                    <span className="text-xs font-bold text-[#006b4f] block">Pre-Qualified Tender</span>
                    <span className="text-xs text-[#5b6c64] mt-1 block">Release bids to certified commercial aquatic general contractors.</span>
                  </div>
                </div>
              </div>
            )}

            {activeRoadmapPhase === 2 && (
              <div className="space-y-4">
                <div className="flex items-center justify-between flex-wrap gap-2 pb-3 border-b border-[#dce7df]">
                  <span className="text-xs font-bold uppercase text-[#006b4f] tracking-wider">Phase 3 Milestone Package</span>
                  <span className="text-xs font-semibold px-2.5 py-1 bg-[#006b4f] text-white rounded">Gate 3: Substantial Structural Completion</span>
                </div>
                <h3 className="text-2xl font-extrabold text-[#15231e]">General Construction, Glulam Roof Erection & Basin Pouring</h3>
                <p className="text-sm text-[#5b6c64] leading-relaxed">
                  Excavation and subgrade deep piling. Erection of sustainable BC-sourced mass timber glulam roof trusses and glass curtain wall envelope. Stainless steel competition basin installation, plumbing runs, and electrical rough-ins.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-3">
                  <div className="bg-white p-4 rounded-lg border border-[#dce7df]">
                    <span className="text-xs font-bold text-[#006b4f] block">Structural Mass Timber</span>
                    <span className="text-xs text-[#5b6c64] mt-1 block">Glulam arches installed with natural daylight roof monitors.</span>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-[#dce7df]">
                    <span className="text-xs font-bold text-[#006b4f] block">50m Basin Installation</span>
                    <span className="text-xs text-[#5b6c64] mt-1 block">Myrtha pre-engineered stainless steel walls and movable bulkheads.</span>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-[#dce7df]">
                    <span className="text-xs font-bold text-[#006b4f] block">Mechanical Plant Room</span>
                    <span className="text-xs text-[#5b6c64] mt-1 block">UV sterilization reactors and dual-speed circulation pumps wired.</span>
                  </div>
                </div>
              </div>
            )}

            {activeRoadmapPhase === 3 && (
              <div className="space-y-4">
                <div className="flex items-center justify-between flex-wrap gap-2 pb-3 border-b border-[#dce7df]">
                  <span className="text-xs font-bold uppercase text-[#006b4f] tracking-wider">Phase 4 Milestone Package</span>
                  <span className="text-xs font-semibold px-2.5 py-1 bg-[#006b4f] text-white rounded">Gate 4: Grand Opening & Handover</span>
                </div>
                <h3 className="text-2xl font-extrabold text-[#15231e]">Systems Testing, Staff Recruitment, Safety Inspections & Ribbon Cutting</h3>
                <p className="text-sm text-[#5b6c64] leading-relaxed">
                  Water filling, heating balance, chemical stabilization, and Fraser Health inspections. Hire and train 30+ student lifeguards and aquatic supervisors. Conduct trial swim sessions and host the inaugural Fraser Valley Invitational Swim Meet on September 1, 2030.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-3">
                  <div className="bg-white p-4 rounded-lg border border-[#dce7df]">
                    <span className="text-xs font-bold text-[#006b4f] block">Health & Safety Certification</span>
                    <span className="text-xs text-[#5b6c64] mt-1 block">Fraser Health Operating Permit and Lifesaving Society safety audit.</span>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-[#dce7df]">
                    <span className="text-xs font-bold text-[#006b4f] block">Student Employment</span>
                    <span className="text-xs text-[#5b6c64] mt-1 block">Recruit student lifeguards, swim instructors, and reception staff.</span>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-[#dce7df]">
                    <span className="text-xs font-bold text-[#006b4f] block">September 1, 2030 Launch</span>
                    <span className="text-xs text-[#5b6c64] mt-1 block">Official opening for Fall semester students and community members.</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Hard Target Date Callout Banner */}
          <div className="mt-8 p-4 sm:p-5 bg-white rounded-xl border border-[#dce7df] shadow-sm flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#006b4f] text-[#d7e8a7] flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <strong className="text-sm font-bold text-[#15231e] block">
                  Firm Opening Milestone: September 1, 2030
                </strong>
                <span className="text-xs text-[#5b6c64]">
                  Aligned with UFV Fall 2030 academic semester orientation and student intake.
                </span>
              </div>
            </div>
            <a
              href="#endorse"
              className="text-xs font-bold text-[#006b4f] hover:text-[#0d8b68] flex items-center gap-1.5"
            >
              <span>Support the 2030 Timeline</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Section 5: Grounded in Research & Evidence */}
      <section id="evidence" className="py-20 lg:py-28 bg-[#f3f8f5] border-t border-[#dce7df]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14 space-y-3">
            <div className="text-xs font-bold uppercase tracking-widest text-[#006b4f] flex items-center gap-2">
              <span className="w-6 h-0.5 bg-[#006b4f]" />
              <span>Evidence-Based Proposal</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#15231e]">
              Why explore this capital project now?
            </h2>
            <p className="text-base text-[#5b6c64] leading-relaxed">
              This concept is grounded in documented institutional gaps, recent civic community engagement data from the City of Abbotsford, and verified precedents from British Columbia universities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Research Card 1 */}
            <article className="p-6 sm:p-8 bg-white rounded-xl border border-[#dce7df] shadow-sm hover:border-[#006b4f]/40 transition-colors flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs text-[#5b6c64] mb-3">
                  <span className="font-bold text-[#006b4f] uppercase tracking-wider">
                    Institutional Audit
                  </span>
                  <span>UFV Facilities Directory</span>
                </div>
                <h3 className="text-xl font-bold text-[#15231e] mb-3">
                  The Recreation Gap on Abbotsford Campus
                </h3>
                <p className="text-sm text-[#5b6c64] leading-relaxed mb-4">
                  A review of UFV’s officially listed Abbotsford recreation amenities confirms weight rooms, fitness studios, and gymnasiums — but zero aquatic facilities. Students seeking swimming must travel off-campus, facing scheduling friction, crowded public sessions, and transit delays.
                </p>
              </div>
              <a
                href="https://www.ufv.ca/campusrec/hours-locations"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#006b4f] hover:text-[#0d8b68] pt-4 border-t border-[#dce7df]"
              >
                <span>Review UFV Campus Recreation listings</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </article>

            {/* Research Card 2 */}
            <article className="p-6 sm:p-8 bg-white rounded-xl border border-[#dce7df] shadow-sm hover:border-[#006b4f]/40 transition-colors flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs text-[#5b6c64] mb-3">
                  <span className="font-bold text-[#006b4f] uppercase tracking-wider">
                    Civic Data · City of Abbotsford
                  </span>
                  <span>Stage 3 Public Engagement</span>
                </div>
                <h3 className="text-xl font-bold text-[#15231e] mb-3">
                  70% Community Support for a 50m Pool
                </h3>
                <p className="text-sm text-[#5b6c64] leading-relaxed mb-4">
                  The City of Abbotsford’s Stage 3 Civic Engagement Summary revealed that 70% of public respondents (595 citizens) explicitly endorsed moving swim clubs and fitness lap swimming into a dedicated 50-metre aquatic facility, verifying strong regional community demand.
                </p>
              </div>
              <a
                href="https://pub-abbotsford.escribemeetings.com/filestream.ashx?DocumentId=5187"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#006b4f] hover:text-[#0d8b68] pt-4 border-t border-[#dce7df]"
              >
                <span>Read City of Abbotsford Engagement Summary</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </article>

            {/* Research Card 3 */}
            <article className="p-6 sm:p-8 bg-white rounded-xl border border-[#dce7df] shadow-sm hover:border-[#006b4f]/40 transition-colors flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs text-[#5b6c64] mb-3">
                  <span className="font-bold text-[#006b4f] uppercase tracking-wider">
                    University Benchmark
                  </span>
                  <span>UBC Aquatic Centre Model</span>
                </div>
                <h3 className="text-xl font-bold text-[#15231e] mb-3">
                  Proven Collegiate Campus Precedent
                </h3>
                <p className="text-sm text-[#5b6c64] leading-relaxed mb-4">
                  UBC’s Aquatic Centre serves as an exemplary benchmark in BC, demonstrating how modern university aquatic architecture balances varsity competitive training with community access, kinesiology research, and high student engagement.
                </p>
              </div>
              <a
                href="https://recreation.ubc.ca/aquatics/about/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#006b4f] hover:text-[#0d8b68] pt-4 border-t border-[#dce7df]"
              >
                <span>Explore UBC Aquatics benchmark</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </article>

            {/* Research Card 4 */}
            <article className="p-6 sm:p-8 bg-white rounded-xl border border-[#dce7df] shadow-sm hover:border-[#006b4f]/40 transition-colors flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs text-[#5b6c64] mb-3">
                  <span className="font-bold text-[#006b4f] uppercase tracking-wider">
                    Student Transit & Equity
                  </span>
                  <span>UFV SUS U-Pass Review</span>
                </div>
                <h3 className="text-xl font-bold text-[#15231e] mb-3">
                  Current Off-Campus Friction & Barriers
                </h3>
                <p className="text-sm text-[#5b6c64] leading-relaxed mb-4">
                  While the UFV Student Union Society negotiated recreation access via U-Pass partnerships, traveling off campus requires significant bus transfers, creating time deficits for commuter students. An on-campus aquatic centre keeps student life vibrant on campus.
                </p>
              </div>
              <a
                href="https://www.ufvsus.ca/upass"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#006b4f] hover:text-[#0d8b68] pt-4 border-t border-[#dce7df]"
              >
                <span>Examine UFV SUS U-Pass details</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* Section 6: Frequently Asked Questions */}
      <section className="py-20 lg:py-28 bg-white border-b border-[#dce7df]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <div className="text-xs font-bold uppercase tracking-widest text-[#006b4f] inline-flex items-center gap-2">
              <span className="w-6 h-0.5 bg-[#006b4f]" />
              <span>Common Inquiries</span>
              <span className="w-6 h-0.5 bg-[#006b4f]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#15231e]">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-[#5b6c64]">
              Clear answers regarding funding, community access, operational costs, and feasibility governance.
            </p>
          </div>

          <div className="space-y-4">
            <FaqItem
              question="Why propose an Olympic 50m pool instead of a standard 25m pool?"
              answer="A 50m pool with dual movable bulkheads gives UFV the best of both worlds. It can be partitioned into two distinct 25m pools simultaneously, enabling public recreation and varsity coaching at the same time. Furthermore, only a 50m pool qualifies UFV to host national championship meets, attracting major regional economic impact."
            />
            <FaqItem
              question="Will student tuition increase dramatically to pay for the $100M?"
              answer="No. The financial plan specifically avoids overburdening tuition. The funding strategy targets provincial and federal green infrastructure matching grants (45%), regional municipal recreation partnerships (25%), philanthropic endowments and naming gifts (18%), with only a standard modest student athletic fee index approved by referendum."
            />
            <FaqItem
              question="Will Fraser Valley residents and families have access to the pool?"
              answer="Yes! Community integration is fundamental to the operating model. The proposed facility will operate dedicated early morning public swim hours, children's learn-to-swim lessons, and evening rentals for Abbotsford Olympians and Fraser Valley swim clubs."
            />
            <FaqItem
              question="What happens after the initial 3 months of operating expenses?"
              answer="The first 3 months of staffing, chemicals, and facility ramp-up are included directly within the $100M capital construction scope. After month 3, operational expenses are offset by community lane rentals, swimming lessons, event concessions, and ongoing university recreation budget allocations."
            />
            <FaqItem
              question="Who prepared this proposal and what are the next official steps?"
              answer="This proposal was prepared by UFV students (Thy Nguyen, Jatin Sharma, Kaleb Austin, and Amritpal Sidhu) for CIS 385 Assignment 3. The immediate next step is presenting these findings to the Student Union Society and university administration to advocate for an official Phase 1 Feasibility Study."
            />
          </div>
        </div>
      </section>

      {/* Section 7: Interactive Student & Community Endorsement Portal */}
      <section id="endorse" className="py-20 lg:py-28 bg-[#f3f8f5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-[#dce7df] shadow-xl overflow-hidden">
            <div className="bg-[#004633] text-white p-8 sm:p-10 relative overflow-hidden">
              <div className="relative z-10 space-y-3">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#d7e8a7]">
                  <Sparkles className="w-4 h-4 text-[#e5b95f]" />
                  <span>Student & Community Support Portal</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                  Add your voice to the UFV Aquatic Centre proposal.
                </h2>
                <p className="text-sm sm:text-base text-[#e3f0e9] leading-relaxed max-w-xl">
                  University capital priorities start with proven student and community demand. Register your endorsement to show UFV leadership that Fraser Valley deserves this facility.
                </p>
                <div className="pt-2 flex items-center gap-3 text-xs text-[#d7e8a7] font-semibold">
                  <span className="tabular-nums font-mono text-base text-white font-extrabold">
                    {endorsementCount.toLocaleString()}
                  </span>
                  <span>Supporters have endorsed this concept to date</span>
                </div>
              </div>
            </div>

            <div className="p-8 sm:p-10">
              {feedbackSubmitted ? (
                <div className="text-center py-12 space-y-4 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-[#f3f8f5] text-[#006b4f] mx-auto flex items-center justify-center border-2 border-[#006b4f]">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-[#15231e]">
                    Thank you for your endorsement!
                  </h3>
                  <p className="text-sm text-[#5b6c64] max-w-md mx-auto leading-relaxed">
                    Your support has been recorded as endorsement <strong>#{endorsementCount}</strong>. We have saved your feedback for inclusion in our CIS 385 stakeholder engagement summary.
                  </p>
                  <button
                    onClick={() => setFeedbackSubmitted(false)}
                    className="mt-4 px-6 py-2.5 bg-[#f3f8f5] text-[#006b4f] hover:bg-[#dce7df] font-bold text-xs uppercase tracking-wider rounded-md transition-colors"
                  >
                    Submit Another Feedback
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#15231e] mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Chen"
                        className="w-full px-4 py-2.5 text-sm bg-white border border-[#dce7df] rounded-md focus:outline-none focus:border-[#006b4f] focus:ring-1 focus:ring-[#006b4f] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#15231e] mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="student@ufv.ca"
                        className="w-full px-4 py-2.5 text-sm bg-white border border-[#dce7df] rounded-md focus:outline-none focus:border-[#006b4f] focus:ring-1 focus:ring-[#006b4f] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#15231e] mb-2">
                        Your Affiliation
                      </label>
                      <select
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        className="w-full px-4 py-2.5 text-sm bg-white border border-[#dce7df] rounded-md focus:outline-none focus:border-[#006b4f] focus:ring-1 focus:ring-[#006b4f] transition-colors"
                      >
                        <option value="UFV Student">UFV Undergraduate / Graduate Student</option>
                        <option value="UFV Faculty & Staff">UFV Faculty or Staff Member</option>
                        <option value="Fraser Valley Resident">Fraser Valley Community Resident</option>
                        <option value="Swim Club Coach/Athlete">Regional Swim Club Coach or Athlete</option>
                        <option value="UFV Alumni">UFV Alumni</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#15231e] mb-2">
                        Priority Feature You Most Want
                      </label>
                      <select
                        value={formData.priority}
                        onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
                        className="w-full px-4 py-2.5 text-sm bg-white border border-[#dce7df] rounded-md focus:outline-none focus:border-[#006b4f] focus:ring-1 focus:ring-[#006b4f] transition-colors"
                      >
                        <option value="Olympic 50m Pool">50-Metre Lap Swimming & Training</option>
                        <option value="Community Swim Lessons">Affordable Lessons & Lifeguard Courses</option>
                        <option value="Dryland Gym">Dryland Performance Conditioning Center</option>
                        <option value="Spectator Bleachers">Spectator Bleachers for Swim Meets</option>
                        <option value="Sports Medicine">Sports Therapy & Rehab Hydrotherapy</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#15231e] mb-2">
                      Your Thoughts or Ideas (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.comment}
                      onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                      placeholder="Share why you believe an aquatic centre is important for UFV and the Fraser Valley..."
                      className="w-full px-4 py-2.5 text-sm bg-white border border-[#dce7df] rounded-md focus:outline-none focus:border-[#006b4f] focus:ring-1 focus:ring-[#006b4f] transition-colors resize-none"
                    />
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-xs text-[#5b6c64]">
                      Your information is held for student research purposes only.
                    </span>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#006b4f] hover:bg-[#0d8b68] text-white font-bold text-xs uppercase tracking-wider rounded-md transition-all shadow-md hover:shadow hover:-translate-y-0.5 cursor-pointer"
                    >
                      <span>Sign Endorsement</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="bg-gradient-to-r from-[#004633] via-[#006b4f] to-[#0d8b68] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              Help UFV make waves in student life.
            </h2>
            <p className="text-sm text-[#e3f0e9] leading-relaxed">
              Support the next step: rigorous feasibility research, student body consultation, and a fully costed architectural design concept.
            </p>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <a
              href="#top"
              className="px-6 py-3 bg-white text-[#006b4f] hover:bg-[#d7e8a7] hover:text-[#004633] font-bold text-xs uppercase tracking-wider rounded-md transition-all shadow"
            >
              Back to Top ↑
            </a>
            <a
              href="#endorse"
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white border border-white/30 font-bold text-xs uppercase tracking-wider rounded-md transition-all backdrop-blur-sm"
            >
              Sign Endorsement
            </a>
          </div>
        </div>
      </section>

      {/* Academic Project Footer */}
      <footer className="bg-[#003829] text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/10">
            <div className="md:col-span-5 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-[#006b4f] flex items-center justify-center text-white font-black text-xs">
                  UFV
                </div>
                <span className="font-extrabold text-base tracking-tight text-white">
                  Olympic Swimming & Sports Centre
                </span>
              </div>
              <p className="text-xs text-[#c5dfd2] leading-relaxed max-w-sm">
                A student proposal designed for University of the Fraser Valley, Abbotsford Campus. Course: CIS 385 · Assignment 3.
              </p>
              <div className="text-xs text-[#d7e8a7] font-medium pt-1">
                Prepared by Group 4: Thy Nguyen, Jatin Sharma, Kaleb Austin & Amritpal Sidhu
              </div>
            </div>

            <div className="md:col-span-3 space-y-2 text-xs">
              <span className="font-bold text-white uppercase tracking-wider block mb-2 text-[11px]">
                Proposal Navigation
              </span>
              <ul className="space-y-1.5 text-[#c5dfd2]">
                <li><a href="#vision" className="hover:text-white transition-colors">The Opportunity & Vision</a></li>
                <li><a href="#facilities" className="hover:text-white transition-colors">Aquatic Facilities & Specs</a></li>
                <li><a href="#investment" className="hover:text-white transition-colors">$100M Capital Budget</a></li>
                <li><a href="#roadmap" className="hover:text-white transition-colors">Phased Roadmap (2026–2030)</a></li>
                <li><a href="#evidence" className="hover:text-white transition-colors">Empirical Research Grounding</a></li>
              </ul>
            </div>

            <div className="md:col-span-4 space-y-2 text-xs">
              <span className="font-bold text-white uppercase tracking-wider block mb-2 text-[11px]">
                Institutional References
              </span>
              <ul className="space-y-1.5 text-[#c5dfd2]">
                <li>
                  <a href="https://www.ufv.ca/future-students/" target="_blank" rel="noreferrer" className="hover:text-[#d7e8a7] flex items-center gap-1">
                    <span>Inspired by UFV's official web experience</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a href="https://www.ufv.ca/campusrec/hours-locations" target="_blank" rel="noreferrer" className="hover:text-[#d7e8a7] flex items-center gap-1">
                    <span>UFV Campus Recreation Listings</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a href="https://pub-abbotsford.escribemeetings.com/filestream.ashx?DocumentId=5187" target="_blank" rel="noreferrer" className="hover:text-[#d7e8a7] flex items-center gap-1">
                    <span>City of Abbotsford Stage 3 Survey</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a href="https://recreation.ubc.ca/aquatics/about/" target="_blank" rel="noreferrer" className="hover:text-[#d7e8a7] flex items-center gap-1">
                    <span>UBC Aquatic Centre Case Benchmark</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#a0c2b2]">
            <p>
              © {new Date().getFullYear()} UFV Olympic Swimming & Sports Centre Proposal · Academic Project. All rights reserved.
            </p>
            <p className="text-[11px] text-white/50 text-center sm:text-right">
              Disclaimer: Student conceptual project for CIS 385. Not an officially sanctioned UFV Board of Governors project.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ArrowDownIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
    </svg>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-[#dce7df] rounded-lg overflow-hidden bg-white">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 hover:bg-[#f3f8f5] transition-colors cursor-pointer"
        aria-expanded={isOpen}
      >
        <span className="font-bold text-sm sm:text-base text-[#15231e]">
          {question}
        </span>
        <ChevronDown className={`w-5 h-5 text-[#006b4f] shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="px-5 pb-5 text-sm text-[#5b6c64] leading-relaxed border-t border-[#dce7df]/60 pt-3">
          {answer}
        </div>
      )}
    </div>
  );
}
