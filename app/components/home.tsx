'use client';

import { Trophy, Users, Globe, Cpu, Swords, CalendarCheck, ArrowRight, Play, Zap, Target, Palette, Clapperboard, Code, Bot, Menu, X, Shirt, Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Products from './product';
import Footer from './footer';

const streams = [
    {
        id: "IssSsBNHX6U",
        url: "https://www.youtube.com/watch?v=K6SACJzDGnk",
        title: "[EN] X SPACE AGENCY ELITE STARS SEMIFINALS | #pubgmobile #pubgtournament #livestream ",
        subtitle: "Live Stream"
    },
    {
        id: "pc4Z-jeNRZc",
        url: "https://www.youtube.com/watch?v=SbXUBQbEUcY",
        title: " [EN] 404 ERROR x XSPACE AGENCY TOURNAMENT | GRANDFINALS | #pubgmobile #pubgtournament #livestream ",
        subtitle: "Live Stream"
    },
    {
        id: "c8qmBPYJ8FQ",
        url: "https://www.youtube.com/watch?v=NaCzuBcyoiU",
        title: " [EN] X SPACE AGENCY PRO SERIES | QUATERFINALS | GROUP B | #pubgmobile #pubgtournament #livestream  !",
        subtitle: "Live Stream"
    },
    {
        id: "O_zT7S2ullQ",
        url: "https://www.youtube.com/watch?v=FkmTSCK0A2w",
        title: " [EN]XSPACE AGENCY x VANGUARD X INVANDERS | SEMIFINALS | GROUP B #pubgmobile #pubgtournament ",
        subtitle: "Live Stream"
    },
    {
        id: "teyM2Bf0uFg",
        url: "https://www.youtube.com/live/teyM2Bf0uFg?si=soLyjtb4iXl0pNWj",
        title: "[EN] LEGENDS OF PUBG MOBILE | DAY 1 | START OF A NEW ERA !!! #roz #scam #one #GRx",
        subtitle: "Live Stream"
    },
    {
        id: "bluWCQSDYo4",
        url: "https://www.youtube.com/live/bluWCQSDYo4?si=XpBUZKpGBb4u6fpd",
        title: "MESD GRAND FINALS PRESENTED BY RGLxTZxG7",
        subtitle: "Live Stream"
    },
    {
        id: "IvJ-xSXNzdY",
        url: "https://www.youtube.com/watch?v=IvJ-xSXNzdY",
        title: "XSPACE AGENCY Live Stream Event - Match 1",
        subtitle: "Live Stream"
    },
    {
        id: "u9nT78FQuQE",
        url: "https://www.youtube.com/watch?v=u9nT78FQuQE",
        title: "XSPACE AGENCY Live Stream Event - Match 2",
        subtitle: "Live Stream"
    },
    {
        id: "W_veu2R2QB0",
        url: "https://www.youtube.com/watch?v=W_veu2R2QB0",
        title: "XSPACE AGENCY Live Stream Event - Match 3",
        subtitle: "Live Stream"
    },
    {
        id: "h29MqWGK8CA",
        url: "https://www.youtube.com/watch?v=h29MqWGK8CA",
        title: "XSPACE AGENCY Live Stream Event - Match 4",
        subtitle: "Live Stream"
    },
    {
        id: "ONjwjVKkCKE",
        url: "https://www.youtube.com/watch?v=ONjwjVKkCKE",
        title: "XSPACE AGENCY Live Stream Event - Match 5",
        subtitle: "Live Stream"
    }
];

const testimonials = [
    {
        id: 1,
        name: "Alex Thompson",
        role: "Tournament Director",
        company: "Pro Gaming League",
        image: "/uploads/1769112438245-619214956_18404560444123101_3351053003628593420_n.jpg",
        content: "XSPACE AGENCY transformed our tournament production completely. Their attention to detail and professional approach made our event a massive success. The broadcast quality was exceptional!",
        rating: 5
    },
    {
        id: 2,
        name: "Sarah Chen",
        role: "Team Manager",
        company: "Elite Esports",
        image: "/uploads/1769112438245-619214956_18404560444123101_3351053003628593420_n.jpg",
        content: "Working with XSPACE AGENCY was a game-changer for our team. Their jersey designs are stunning, and the management tools they provided streamlined our entire operation.",
        rating: 5
    },
    {
        id: 3,
        name: "Marcus Rodriguez",
        role: "Content Creator",
        company: "StreamKing Studios",
        image: "/uploads/1769112438245-619214956_18404560444123101_3351053003628593420_n.jpg",
        content: "The graphics and overlay work from XSPACE AGENCY elevated my stream to a whole new level. Professional, creative, and always delivered on time. Highly recommended!",
        rating: 5
    },
    {
        id: 4,
        name: "Priya Sharma",
        role: "Event Coordinator",
        company: "Nepal Gaming Community",
        image: "/uploads/1769112438245-619214956_18404560444123101_3351053003628593420_n.jpg",
        content: "From broadcast to event management, XSPACE AGENCY handled everything flawlessly. Their team's expertise and dedication made our regional championship an unforgettable experience.",
        rating: 5
    },
    {
        id: 5,
        name: "David Kim",
        role: "CEO",
        company: "BattleZone Esports",
        image: "/uploads/1769112438245-619214956_18404560444123101_3351053003628593420_n.jpg",
        content: "XSPACE AGENCY built our entire tournament platform from scratch. The website is fast, responsive, and our players love it. Technical excellence at its finest!",
        rating: 5
    },
    {
        id: 6,
        name: "Emma Wilson",
        role: "Marketing Director",
        company: "Global Gaming Events",
        image: "/uploads/1769112438245-619214956_18404560444123101_3351053003628593420_n.jpg",
        content: "The social media assets and promotional materials created by XSPACE AGENCY significantly boosted our event's visibility. Creative brilliance combined with strategic thinking!",
        rating: 5
    }
];

export default function Home() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [testimonialIndex, setTestimonialIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % streams.length);
        }, 10000);
        return () => clearInterval(interval);
    }, []);

    // Auto-rotate testimonials
    useEffect(() => {
        const interval = setInterval(() => {
            setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    // Prevent scrolling when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMobileMenuOpen]);

    const currentStream = streams[currentIndex];

    const nextTestimonial = () => {
        setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <div className="bg-[#050505] min-h-screen selection:bg-cyan-400 selection:text-black overflow-x-hidden">

            {/* Embedded Navbar */}
            <nav className="fixed top-0 left-0 right-0 w-full bg-[#050505]/80 backdrop-blur-2xl border-b border-white/5 z-50 transition-all duration-300 supports-backdrop-filter:bg-[#050505]/60 h-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
                    <div className="flex justify-between items-center h-full">
                        <div className="flex items-center">
                            <Link href="/" className="shrink-0 flex items-center gap-3 group">
                                <div className="relative w-12 h-12 md:w-16 md:h-16 transition-transform group-hover:scale-110 duration-300">
                                    <Image
                                        src="/XSPACELOGO.png"
                                        alt="XSPACE AGENCY Logo"
                                        fill
                                        className="object-contain drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]"
                                        priority
                                    />
                                </div>
                            </Link>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex md:items-center md:space-x-10">
                            {['Home', 'Products', 'Services', 'Testimonials', 'Contact'].map((item) => (
                                <Link
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className="text-sm font-bold uppercase tracking-wider text-gray-400 hover:text-cyan-400 relative py-2 group transition-colors duration-300"
                                >
                                    {item}
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-500 transition-all duration-300 group-hover:w-full shadow-[0_0_10px_rgba(6,182,212,0.8)]"></span>
                                </Link>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="flex items-center md:hidden">
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="text-gray-300 hover:text-cyan-400 p-2 transition-colors z-60 relative"
                            >
                                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Overlay with Premium Animations */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            className="fixed inset-0 top-0 left-0 w-full h-screen bg-[#050505]/95 backdrop-blur-2xl z-55 pt-24 px-6 flex flex-col md:hidden"
                        >
                            <div className="flex flex-col space-y-6">
                                {['Home', 'Products', 'Services', 'Testimonials', 'Contact'].map((item, idx) => (
                                    <motion.div
                                        key={item}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 + idx * 0.05 }}
                                    >
                                        <Link
                                            href={`#${item.toLowerCase()}`}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="text-2xl font-black uppercase tracking-wider text-white hover:text-cyan-400 relative py-2 group block"
                                        >
                                            <span className="relative z-10">{item}</span>
                                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-500 transition-all duration-300 group-hover:w-full"></span>
                                        </Link>
                                    </motion.div>
                                ))}

                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

            {/* Hero Section - New Layout */}
            <section className="relative min-h-[100vh] flex items-center overflow-hidden pt-20">
                {/* Dynamic Background */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {/* Animated Grid */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-size-[60px_60px] mask-[radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]"></div>

                    {/* Floating Orbs */}
                    <div className="absolute -top-[10%] right-[5%] w-[40vw] h-[40vw] bg-cyan-500/20 rounded-full blur-[150px] animate-pulse"></div>
                    <div className="absolute bottom-[10%] -left-[5%] w-[35vw] h-[35vw] bg-blue-600/15 rounded-full blur-[120px] animate-pulse delay-500"></div>
                    <div className="absolute top-[30%] left-[40%] w-[25vw] h-[25vw] bg-purple-600/10 rounded-full blur-[100px]"></div>
                    
                    {/* Accent Lines */}
                    <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"></div>
                    <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
                    <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">

                        {/* Text Content - Left Side */}
                        <div className="lg:col-span-7 relative z-10 space-y-8">

                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full">
                                <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
                                <span className="text-cyan-400 text-sm font-bold uppercase tracking-wider">Professional Esports Agency</span>
                            </div>

                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.1]">
                                <span className="block">XSPACE</span>
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">AGENCY</span>
                            </h1>

                            <p className="text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed">
                                Your strategic partner for <span className="text-cyan-400 font-semibold">event management</span>, <span className="text-blue-400 font-semibold">live broadcasting</span>, and <span className="text-purple-400 font-semibold">professional media production</span>.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href="https://wa.me/9647824646174"
                                    
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-bold tracking-wider overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:scale-105 active:scale-95 inline-flex items-center justify-center gap-2"
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        CONTACT US <Zap size={20} className="fill-white" />
                                    </span>
                                </a>
                                <a
                                    href="https://www.youtube.com/@XSPACEAGENCY"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-8 py-4 bg-white/5 text-white border border-white/10 rounded-xl font-bold tracking-wider hover:bg-white/10 hover:border-cyan-500/50 hover:text-cyan-400 transition-all flex items-center justify-center gap-3 group"
                                >
                                    <span className="flex items-center gap-2">
                                        WATCH STREAM <Play size={18} className="fill-current group-hover:text-cyan-400 transition-colors" />
                                    </span>
                                </a>
                            </div>

                            {/* Stats Row */}
                            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
                                <div>
                                    <div className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">50+</div>
                                    <div className="text-sm text-gray-500 uppercase tracking-wider">Events</div>
                                </div>
                                <div>
                                    <div className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">100+</div>
                                    <div className="text-sm text-gray-500 uppercase tracking-wider">Clients</div>
                                </div>
                                <div>
                                    <div className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">1M+</div>
                                    <div className="text-sm text-gray-500 uppercase tracking-wider">Views</div>
                                </div>
                            </div>
                        </div>

                        {/* Visual Content - Right Side */}
                        <div className="lg:col-span-5 relative z-10 w-full flex items-center justify-center">
                            <div className="relative w-full max-w-[400px] aspect-square">

                                {/* Rotating Rings */}
                                <div className="absolute inset-0 rounded-full border border-cyan-500/20 animate-spin-slow"></div>
                                <div className="absolute inset-4 rounded-full border border-dashed border-blue-500/20 animate-spin-slow-reverse"></div>
                                <div className="absolute inset-8 rounded-full border border-purple-500/10 animate-spin-slow"></div>

                                {/* Main Card */}
                                <div className="absolute inset-0 rounded-3xl overflow-hidden z-20">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={currentIndex}
                                            initial={{ x: 100, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            exit={{ x: -100, opacity: 0 }}
                                            transition={{ duration: 0.5, ease: "easeInOut" }}
                                            className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] to-[#0d0d0d] rounded-3xl shadow-[0_0_50px_rgba(6,182,212,0.2)] border border-cyan-500/20 overflow-hidden"
                                        >

                                            {/* Glass Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50 z-20 pointer-events-none"></div>

                                            {/* Banner Image */}
                                            <div className="h-2/3 bg-transparent relative overflow-hidden group">
                                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10"></div>
                                                <Image
                                                    src={`https://img.youtube.com/vi/${streams[currentIndex].id}/hqdefault.jpg`}
                                                    alt={streams[currentIndex].title}
                                                    fill
                                                    className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500 scale-110 group-hover:scale-100"
                                                    priority
                                                />
                                                <div className="absolute top-4 right-4 z-20 flex gap-2">
                                                    <span className="px-3 py-1 bg-red-600/90 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-sm shadow-[0_0_10px_rgba(220,38,38,0.5)] animate-pulse rounded-full">Live</span>
                                                </div>

                                                {/* Play Button */}
                                                <a
                                                    href={streams[currentIndex].url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="absolute inset-0 flex items-center justify-center z-20"
                                                >
                                                    <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform cursor-pointer group-hover:bg-cyan-600/80">
                                                        <Play className="w-6 h-6 text-white" fill="currentColor" />
                                                    </div>
                                                </a>
                                            </div>

                                            {/* Content Area */}
                                            <div className="h-1/3 p-6 relative z-10">
                                                <div className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-1">{streams[currentIndex].title}</div>
                                                <h3 className="text-white font-black text-lg tracking-tight line-clamp-1">{streams[currentIndex].subtitle}</h3>
                                                <div className="w-full bg-gray-800 h-1.5 rounded-full mt-4 overflow-hidden">
                                                    <motion.div
                                                        key={`progress-${currentIndex}`}
                                                        initial={{ width: "0%" }}
                                                        animate={{ width: "100%" }}
                                                        transition={{ duration: 10, ease: "linear" }}
                                                        className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"
                                                    />
                                                </div>
                                                <div className="flex justify-between mt-2 text-xs text-gray-400 font-mono">
                                                    <span>LIVE PREVIEW</span>
                                                    <span className="text-white">STREAM {currentIndex + 1}/{streams.length}</span>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </AnimatePresence>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Products Section */}
            <Products />

            {/* Services Section - Split Layout */}
            <section id="services" className="py-32 relative overflow-hidden bg-[#080808]">
                {/* Background */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
                    <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-600/5 rounded-full blur-[150px]"></div>
                    <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-blue-600/5 rounded-full blur-[120px]"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    {/* Header */}
                    <div className="text-center mb-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-6"
                        >
                            <span className="text-cyan-400 text-sm font-bold uppercase tracking-wider">Our Services</span>
                        </motion.div>
                        <h3 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6">
                            BUILT FOR <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">EXCELLENCE</span>
                        </h3>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                            Comprehensive solutions tailored for the esports industry
                        </p>
                    </div>

                    {/* Services Grid - Alternating Layout */}
                    <div className="space-y-8">
                        {/* Row 1 - Broadcasting */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="grid lg:grid-cols-2 gap-8 items-center"
                        >
                            <div className="group relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#0a0a0a] to-[#0d0d0d] border border-white/5 hover:border-cyan-500/30 transition-all duration-500 p-8 lg:p-12">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] group-hover:bg-cyan-500/20 transition-all duration-500"></div>
                                <div className="relative z-10">
                                    <div className="w-16 h-16 bg-cyan-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <Globe className="w-8 h-8 text-cyan-400" />
                                    </div>
                                    <h4 className="text-3xl font-black text-white mb-4 uppercase">Broadcasting</h4>
                                    <p className="text-gray-400 leading-relaxed mb-6">
                                        Professional live streaming production with multi-camera setups, replay systems, and custom overlays for Twitch & YouTube.
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {['Multi-camera', 'Replay System', 'Custom Overlays'].map((tag, i) => (
                                            <span key={i} className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-400">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="hidden lg:flex items-center justify-center">
                                <div className="relative w-48 h-48">
                                    <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-[60px] animate-pulse"></div>
                                    <div className="absolute inset-4 border-2 border-dashed border-cyan-500/30 rounded-full animate-spin-slow"></div>
                                    <div className="absolute inset-8 border border-cyan-500/20 rounded-full animate-spin-slow-reverse"></div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Row 2 - Event Management */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="grid lg:grid-cols-2 gap-8 items-center"
                        >
                            <div className="hidden lg:flex items-center justify-center order-1">
                                <div className="relative w-48 h-48">
                                    <div className="absolute inset-0 bg-yellow-500/20 rounded-full blur-[60px] animate-pulse"></div>
                                    <div className="absolute inset-4 border-2 border-dashed border-yellow-500/30 rounded-full animate-spin-slow"></div>
                                    <div className="absolute inset-8 border border-yellow-500/20 rounded-full animate-spin-slow-reverse"></div>
                                </div>
                            </div>
                            <div className="group relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#0a0a0a] to-[#0d0d0d] border border-white/5 hover:border-yellow-500/30 transition-all duration-500 p-8 lg:p-12 lg:order-2">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-[80px] group-hover:bg-yellow-500/20 transition-all duration-500"></div>
                                <div className="relative z-10">
                                    <div className="w-16 h-16 bg-yellow-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <Trophy className="w-8 h-8 text-yellow-400" />
                                    </div>
                                    <h4 className="text-3xl font-black text-white mb-4 uppercase">Event Management</h4>
                                    <p className="text-gray-400 leading-relaxed mb-6">
                                        End-to-end event administration including rule enforcement, player communication, bracket handling, and scheduling.
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {['Bracket System', 'Player Management', 'Scheduling'].map((tag, i) => (
                                            <span key={i} className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-400">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Row 3 - Graphics Design */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="grid lg:grid-cols-2 gap-8 items-center"
                        >
                            <div className="group relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#0a0a0a] to-[#0d0d0d] border border-white/5 hover:border-purple-500/30 transition-all duration-500 p-8 lg:p-12">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px] group-hover:bg-purple-500/20 transition-all duration-500"></div>
                                <div className="relative z-10">
                                    <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <Palette className="w-8 h-8 text-purple-400" />
                                    </div>
                                    <h4 className="text-3xl font-black text-white mb-4 uppercase">Graphics Design</h4>
                                    <p className="text-gray-400 leading-relaxed mb-6">
                                        High-impact visual identity creation, including social media assets, stream overlays, thumbnails, and branding packages.
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {['Brand Identity', 'Stream Overlays', 'Thumbnails'].map((tag, i) => (
                                            <span key={i} className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-400">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="hidden lg:flex items-center justify-center">
                                <div className="relative w-48 h-48">
                                    <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-[60px] animate-pulse"></div>
                                    <div className="absolute inset-4 border-2 border-dashed border-purple-500/30 rounded-full animate-spin-slow"></div>
                                    <div className="absolute inset-8 border border-purple-500/20 rounded-full animate-spin-slow-reverse"></div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Compact Grid for Remaining Services */}
                        <div className="grid md:grid-cols-3 gap-6 mt-12">
                            {[
                                { icon: Shirt, title: 'Jersey Design', color: 'pink', desc: 'Custom sublimation jerseys designed and printed with premium quality materials.' },
                                { icon: Code, title: 'Web Development', color: 'indigo', desc: 'Custom tournament portals, team websites, and esports platforms.' },
                                { icon: Bot, title: 'Team Management', color: 'green', desc: 'Automated management via modern bot systems for team operations.' }
                            ].map((service, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                    className="group relative rounded-2xl overflow-hidden bg-[#0a0a0a] border border-white/5 hover:border-white/20 transition-all duration-300 p-6"
                                >
                                    <div className={`w-12 h-12 bg-${service.color}-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                        <service.icon className={`w-6 h-6 text-${service.color}-400`} />
                                    </div>
                                    <h4 className="text-xl font-bold text-white mb-2">{service.title}</h4>
                                    <p className="text-gray-500 text-sm">{service.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section - New */}
            <section id="testimonials" className="py-24 relative overflow-hidden bg-[#050505]">
                {/* Background Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-purple-600/5 rounded-full blur-[150px]"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-cyan-500 font-bold tracking-[0.2em] uppercase text-sm mb-4">Testimonials</h2>
                        <h3 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-6">
                            WHAT OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">CLIENTS SAY</span>
                        </h3>
                        <p className="text-gray-400 max-w-xl mx-auto">
                            Trusted by tournament organizers, esports teams, and content creators worldwide.
                        </p>
                    </div>

                    {/* Testimonials Carousel */}
                    <div className="relative max-w-4xl mx-auto">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={testimonialIndex}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                className="bg-gradient-to-br from-[#0a0a0a] to-[#0d0d0d] rounded-3xl p-8 md:p-12 border border-white/10 relative overflow-hidden"
                            >
                                {/* Quote Icon */}
                                <div className="absolute top-6 right-6 opacity-10">
                                    <Quote size={80} className="text-cyan-400" />
                                </div>

                                {/* Content */}
                                <div className="relative z-10">
                                    {/* Stars */}
                                    <div className="flex gap-1 mb-6">
                                        {[...Array(testimonials[testimonialIndex].rating)].map((_, i) => (
                                            <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
                                        ))}
                                    </div>

                                    {/* Quote */}
                                    <p className="text-xl md:text-2xl text-white font-medium leading-relaxed mb-8">
                                        "{testimonials[testimonialIndex].content}"
                                    </p>

                                    {/* Author */}
                                    <div className="flex items-center gap-4">
                                        <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-cyan-500/30">
                                            <Image
                                                src={testimonials[testimonialIndex].image}
                                                alt={testimonials[testimonialIndex].name}
                                                width={56}
                                                height={56}
                                                className="object-cover w-full h-full"
                                            />
                                        </div>
                                        <div>
                                            <div className="text-white font-bold text-lg">{testimonials[testimonialIndex].name}</div>
                                            <div className="text-gray-400 text-sm">{testimonials[testimonialIndex].role} at {testimonials[testimonialIndex].company}</div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Navigation Buttons */}
                        <div className="flex justify-center gap-4 mt-8">
                            <button
                                onClick={prevTestimonial}
                                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-cyan-500/50 transition-all"
                            >
                                <ChevronLeft size={20} />
                            </button>
                            <div className="flex items-center gap-2">
                                {testimonials.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setTestimonialIndex(idx)}
                                        className={`w-2 h-2 rounded-full transition-all ${idx === testimonialIndex ? 'w-8 bg-cyan-400' : 'bg-white/20 hover:bg-white/40'}`}
                                    />
                                ))}
                            </div>
                            <button
                                onClick={nextTestimonial}
                                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-cyan-500/50 transition-all"
                            >
                                <ChevronRight size={20} />
                            </button>
                        </div>
                    </div>

                    {/* Client Logos / Trust Badges */}
                    <div className="mt-16 pt-16 border-t border-white/5">
                        <p className="text-center text-gray-500 text-sm uppercase tracking-wider mb-8">Trusted by Industry Leaders</p>
                        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50">
                            {['Pro Gaming League', 'Elite Esports', 'StreamKing', 'BattleZone', 'Global Gaming'].map((name, idx) => (
                                <div key={idx} className="text-gray-400 font-bold text-lg tracking-wider">
                                    {name}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 relative overflow-hidden bg-gradient-to-b from-[#050505] to-[#080808]">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] bg-cyan-600/10 rounded-full blur-[150px]"></div>
                </div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-6">
                        READY TO <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">LEVEL UP?</span>
                    </h2>
                    <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                        Let's discuss how XSPACE AGENCY can help elevate your esports presence. From tournaments to content creation, we've got you covered.
                    </p>
                    <a
                         href="https://wa.me/9647824646174"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-bold text-lg tracking-wider hover:shadow-[0_0_40px_rgba(6,182,212,0.5)] hover:scale-105 active:scale-95 transition-all"
                    >
                        Get Started Today <ArrowRight size={20} />
                    </a>
                </div>
            </section>

            {/* Footer Section */}
            <Footer />
        </div>
    );
}

const services = [
    {
        title: "Broadcasting",
        description: "Professional live streaming production with multi-camera setups, replay systems, and custom overlays for Twitch & YouTube.",
        icon: <Globe className="w-8 h-8 text-white group-hover:text-cyan-400 transition-colors" />,
    },
    {
        title: "Event Management",
        description: "End-to-end event administration including rule enforcement, player communication, bracket handling, and scheduling.",
        icon: <Trophy className="w-8 h-8 text-white group-hover:text-yellow-400 transition-colors" />,
    },
    {
        title: "Graphics Design",
        description: "High-impact visual identity creation, including social media assets, stream overlays, thumbnails, and branding packages.",
        icon: <Palette className="w-8 h-8 text-white group-hover:text-purple-400 transition-colors" />,
    },
    {
        title: "Jersey Design & Printing",
        description: "Custom sublimation jerseys designed and printed with premium quality materials for your whole team.",
        icon: <Shirt className="w-8 h-8 text-white group-hover:text-pink-400 transition-colors" />,
    },
    {
        title: "Website Development",
        description: "Custom tournament portals, team websites, and esports platforms built with modern tech stacks for speed and performance.",
        icon: <Code className="w-8 h-8 text-white group-hover:text-indigo-400 transition-colors" />,
    },
    {
        title: "Team Management",
        description: "Automated management via modern bot systems, covering financial records, team data tracking, and social media workflows.",
        icon: <Bot className="w-8 h-8 text-white group-hover:text-green-400 transition-colors" />,
    },
];
