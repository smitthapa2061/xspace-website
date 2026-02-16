'use client';

import { ExternalLink, Clock, Sparkles, ArrowRight, Layers, Zap, Shield, ChevronRight, MonitorPlay } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Products() {
    const [activeProduct, setActiveProduct] = useState(0);

    const products = [
        {
            name: 'ScoreSync',
            description: 'The ultimate tournament utility platform. Seamlessly manage branded overlays, real-time scoring, and broadcast graphics integration.',
            features: ['Real-time Updates', 'Secure & Reliable', 'Multi-platform Support'],
            link: 'https://scoresyncnp.vercel.app/',
            status: 'live'
        },
        {
            name: 'Team Hub',
            description: 'Complete team management platform for rosters, scheduling, and performance tracking.',
            features: ['Roster Management', 'Match Scheduling', 'Performance Analytics'],
            link: '#',
            status: 'coming'
        },
        {
            name: 'Stream Studio',
            description: 'Professional broadcasting tools for seamless live production.',
            features: ['Multi-camera Setup', 'Custom Overlays', 'Replay System'],
            link: '#',
            status: 'coming'
        },
        {
            name: 'Analytics Pro',
            description: 'Advanced performance insights and tournament statistics.',
            features: ['Player Statistics', 'Team Analytics', 'Historical Data'],
            link: '#',
            status: 'coming'
        }
    ];

    return (
        <section id="products" className="py-32 relative overflow-hidden bg-[#050505]">
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(6,182,212,0.08)_0%,transparent_50%)]"></div>
                <div className="absolute top-[30%] right-[5%] w-96 h-96 bg-cyan-600/10 rounded-full blur-[150px]"></div>
                <div className="absolute bottom-[20%] left-[10%] w-80 h-80 bg-blue-400/5 rounded-full blur-[120px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-6"
                    >
                        <Layers size={16} className="text-cyan-400" />
                        <span className="text-cyan-400 text-sm font-bold uppercase tracking-wider">Our Products</span>
                    </motion.div>
                    <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">POWERFUL TOOLS</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Cutting-edge platforms designed to elevate the esports experience
                    </p>
                </div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {/* Main Featured Product - Large Card */}
                    <motion.div
                        className="lg:col-span-8 relative group"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="relative h-full min-h-[400px] rounded-3xl overflow-hidden bg-gradient-to-br from-[#0a0a0a] to-[#0d0d0d] border border-white/5 hover:border-cyan-500/30 transition-all duration-500">
                            {/* Background Pattern */}
                            <div className="absolute inset-0 opacity-30">
                                <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-size-[40px_40px]"></div>
                            </div>
                            
                            {/* Glow Effect */}
                            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-cyan-500/10 rounded-full blur-[100px] group-hover:bg-cyan-500/20 transition-all duration-500"></div>
                            
                            <div className="relative z-10 p-8 md:p-12 h-full flex flex-col justify-between">
                                <div>
                                    {/* Status Badge */}
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-bold uppercase tracking-wider mb-6">
                                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                                        Live Now
                                    </div>
                                    
                                    <h3 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">SCORE</span>
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">SYNC</span>
                                    </h3>
                                    
                                    <p className="text-gray-400 text-lg leading-relaxed max-w-xl mb-8">
                                        The ultimate tournament utility platform. Seamlessly manage branded overlays, real-time scoring, and broadcast graphics integration.
                                    </p>
                                    
                                    {/* Features */}
                                    <div className="flex flex-wrap gap-3 mb-8">
                                        {['Real-time Updates', 'Secure & Reliable', 'Multi-platform'].map((feature, idx) => (
                                            <div key={idx} className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10">
                                                <Zap size={14} className="text-cyan-400" />
                                                <span className="text-sm text-gray-300">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                
                                <div className="flex items-center gap-4">
                                    <motion.a
                                        href="https://scoresyncnp.vercel.app/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold uppercase tracking-wider rounded-xl shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:shadow-[0_0_50px_rgba(6,182,212,0.5)] transition-all"
                                    >
                                        <MonitorPlay size={20} />
                                        Launch App
                                    </motion.a>
                                    <motion.a
                                
                                        href="https://fusionesports.vercel.app"
                                         target="_blank"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="inline-flex items-center gap-3 px-6 py-4 bg-white/5 border border-white/10 text-white font-bold uppercase tracking-wider rounded-xl hover:bg-white/10 transition-all"
                                    >
                                        Learn More
                                        <ChevronRight size={18} />
                                    </motion.a>
                                </div>
                            </div>
                            
                            {/* Logo Watermark */}
                            <div className="absolute bottom-0 right-0 w-64 h-64 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                                <Image
                                    src="/logo.png"
                                    alt="ScoreSync"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Side Cards */}
                    <div className="lg:col-span-4 flex flex-col gap-6">
                        {/* Stats Card */}
                        <motion.div
                            className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#0a0a0a] to-[#0d0d0d] border border-white/5 p-8"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">10K+</div>
                                    <div className="text-sm text-gray-500 uppercase tracking-wider">Users</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">500+</div>
                                    <div className="text-sm text-gray-500 uppercase tracking-wider">Tournaments</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">99%</div>
                                    <div className="text-sm text-gray-500 uppercase tracking-wider">Uptime</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-red-500">24/7</div>
                                    <div className="text-sm text-gray-500 uppercase tracking-wider">Support</div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Quick Access Card */}
                        <motion.div
                            className="flex-1 relative rounded-3xl overflow-hidden bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 p-8 group hover:border-cyan-500/40 transition-all duration-300"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/20 rounded-full blur-[60px]"></div>
                            <div className="relative z-10">
                                <div className="w-14 h-14 bg-cyan-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <Sparkles size={24} className="text-cyan-400" />
                                </div>
                                <h4 className="text-xl font-bold text-white mb-2">Need Custom Solution?</h4>
                                <p className="text-gray-400 text-sm mb-6">We build custom tools tailored to your specific tournament needs.</p>
                                <a
                                    href="https://wa.me/9779804344434"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-cyan-400 font-bold text-sm uppercase tracking-wider hover:text-cyan-300 transition-colors"
                                >
                                    Contact Us <ArrowRight size={16} />
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Coming Soon Products - Horizontal Scroll */}
                <div className="mt-16">
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="text-2xl font-bold text-white">Coming Soon</h3>
                        <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent ml-8"></div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {products.slice(1).map((product, idx) => (
                            <motion.div
                                key={idx}
                                className="group relative rounded-2xl overflow-hidden bg-[#0a0a0a] border border-white/5 hover:border-cyan-500/30 transition-all duration-300"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                whileHover={{ y: -5 }}
                            >
                                <div className="p-6">
                                    {/* Header */}
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-[#151515] to-[#1a1a1a] rounded-xl flex items-center justify-center border border-white/5 group-hover:border-cyan-500/30 transition-colors">
                                            <Clock size={20} className="text-gray-500 group-hover:text-cyan-400 transition-colors" />
                                        </div>
                                        <span className="px-3 py-1 bg-yellow-500/10 border border-yellow-500/20 rounded-full text-yellow-400 text-xs font-bold uppercase">
                                            Coming Soon
                                        </span>
                                    </div>
                                    
                                    <h4 className="text-xl font-bold text-white mb-2">{product.name}</h4>
                                    <p className="text-gray-500 text-sm mb-4 line-clamp-2">{product.description}</p>
                                    
                                    {/* Features */}
                                    <div className="space-y-2">
                                        {product.features.map((feature, i) => (
                                            <div key={i} className="flex items-center gap-2 text-sm text-gray-400">
                                                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                                                {feature}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                
                                {/* Bottom Accent */}
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
