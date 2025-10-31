'use client';

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Back to Main Site Link */}
      <a
        href="https://uselux.ai/movers"
        className="fixed top-4 left-4 flex items-center gap-1.5 text-white transition-all text-xs group px-3 py-2 rounded-lg shadow-lg hover:scale-[1.02]"
        style={{
          zIndex: 9999,
          background: 'linear-gradient(135deg, #5e6ad2 0%, #7c3aed 100%)'
        }}
        aria-label="Back to Lux AI"
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="group-hover:-translate-x-0.5 transition-transform"
        >
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
        <span className="font-medium">Lux Main Site</span>
      </a>

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Navigation */}
      <nav className="glass-effect sticky top-0 backdrop-blur-lg z-50 border-b border-gray-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-28">
            <div className="flex items-center space-x-2">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g transform="translate(4, 4) rotate(90 12 12)">
                  <path d="M8 6L4 12L8 18M16 6L20 12L16 18" stroke="url(#gradient)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#10b981" />
                      <stop offset="100%" stopColor="#059669" />
                    </linearGradient>
                  </defs>
                </g>
              </svg>
              <span className="text-lg font-bold gradient-text">Lux Movers</span>
            </div>
            <div className="hidden lg:flex items-center space-x-8">
              <a href="#" className="text-gray-100 hover:text-emerald-400 transition-colors font-semibold">Home</a>
              <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">About Us</a>
              <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Features</a>
              <a href="#services" className="text-gray-300 hover:text-emerald-400 transition-colors">Services</a>
              <a href="#testimonials" className="text-gray-300 hover:text-emerald-400 transition-colors">Testimonials</a>
              <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Blogs</a>
              <a href="#contact" className="text-gray-300 hover:text-emerald-400 transition-colors">Contact Us</a>
            </div>
            <div className="flex items-start space-x-6 relative pt-4">
              <div className="relative">
                <button
                  onClick={() => setShowModal(true)}
                  className="text-gray-200 hover:text-emerald-400 transition-all duration-300 text-sm font-semibold relative z-10 rounded-lg px-4 py-2.5 draw-rect shimmer-button overflow-hidden"
                >
                  (337) 614-6849
                </button>
                <div className="absolute top-full mt-1 left-1/2 -translate-x-1/2 whitespace-nowrap hidden lg:block">
                  <span className="text-gray-400 text-[10px] font-medium typewriter inline-block uppercase tracking-wider">Try the demo</span>
                </div>
              </div>
              <button
                onClick={() => setShowModal(true)}
                className="gradient-primary btn-shine text-white px-6 py-2.5 rounded-lg shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40 transition-all duration-300 text-sm font-semibold hover:scale-105"
              >
                Call Now
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-24 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Demo Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-effect rounded-full mb-8 animate-fade-in-up shadow-lg">
            <svg width="16" height="16" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g transform="translate(4, 4) rotate(90 12 12)">
                <path d="M8 6L4 12L8 18M16 6L20 12L16 18" stroke="url(#badgeGradient)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
                <defs>
                  <linearGradient id="badgeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#10b981" />
                    <stop offset="100%" stopColor="#059669" />
                  </linearGradient>
                </defs>
              </g>
            </svg>
            <span className="text-xs font-semibold gradient-text tracking-wide">DEMO SITE • CREATED WITH LUX AI</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-100 mb-6 leading-tight animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            Ready To Plan Your <span className="gradient-text">Next Move?</span>
          </h1>

          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Professional moving services made simple. Get your belongings safely to your new destination with our experienced team.
          </p>

          {/* Form */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-16 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            <select
              className="w-full sm:w-64 px-5 py-3.5 glass-effect border border-gray-600/30 rounded-xl text-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all shadow-lg hover:shadow-xl font-medium"
            >
              <option value="">Move From</option>
              <option value="new-york-ny">New York, NY</option>
              <option value="los-angeles-ca">Los Angeles, CA</option>
              <option value="chicago-il">Chicago, IL</option>
              <option value="houston-tx">Houston, TX</option>
              <option value="phoenix-az">Phoenix, AZ</option>
              <option value="philadelphia-pa">Philadelphia, PA</option>
              <option value="san-antonio-tx">San Antonio, TX</option>
              <option value="san-diego-ca">San Diego, CA</option>
              <option value="dallas-tx">Dallas, TX</option>
              <option value="san-jose-ca">San Jose, CA</option>
            </select>
            <select
              className="w-full sm:w-64 px-5 py-3.5 glass-effect border border-gray-600/30 rounded-xl text-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all shadow-lg hover:shadow-xl font-medium"
            >
              <option value="">Move To</option>
              <option value="new-york-ny">New York, NY</option>
              <option value="los-angeles-ca">Los Angeles, CA</option>
              <option value="chicago-il">Chicago, IL</option>
              <option value="houston-tx">Houston, TX</option>
              <option value="phoenix-az">Phoenix, AZ</option>
              <option value="philadelphia-pa">Philadelphia, PA</option>
              <option value="san-antonio-tx">San Antonio, TX</option>
              <option value="san-diego-ca">San Diego, CA</option>
              <option value="dallas-tx">Dallas, TX</option>
              <option value="san-jose-ca">San Jose, CA</option>
            </select>
            <a
              href="https://movers.analytics.uselux.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto btn-shine text-white px-8 py-3.5 rounded-xl font-semibold shadow-xl shadow-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105 whitespace-nowrap text-sm flex items-center justify-center"
              style={{
                background: 'linear-gradient(135deg, #5e6ad2 0%, #7c3aed 100%)'
              }}
            >
              See Analytics Dashboard
            </a>
          </div>

          {/* Illustration */}
          <div className="relative max-w-3xl mx-auto mt-16 animate-fade-in" style={{animationDelay: '0.4s'}}>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-blue-400/20 blur-3xl rounded-full"></div>
            <Image
              src="/movers-bg.png"
              alt="Professional movers illustration"
              width={1200}
              height={800}
              className="w-full h-auto relative z-10 drop-shadow-2xl animate-float"
              priority
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">What We Offer</h2>
            <p className="text-lg text-gray-300">Complete solutions for your moving business</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-effect p-8 rounded-2xl border border-gray-700/50 card-glow">
              <div className="w-14 h-14 gradient-primary rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/30">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-100 mb-2">Landing Pages</h3>
              <p className="text-gray-300 mb-4">
                Professional landing pages designed to convert visitors into customers for your moving business.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-emerald-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Custom designs
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-emerald-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Mobile optimized
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-emerald-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  SEO ready
                </li>
              </ul>
            </div>

            <div className="glass-effect p-8 rounded-2xl border border-gray-700/50 card-glow">
              <div className="w-14 h-14 gradient-primary rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/30">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-100 mb-2">AI Tools</h3>
              <p className="text-gray-300 mb-4">
                Intelligent AI solutions including chat, voice, and website widgets for customer engagement.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-emerald-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  AI chat support
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-emerald-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Voice assistant
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-emerald-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Site widgets
                </li>
              </ul>
            </div>

            <div className="glass-effect p-8 rounded-2xl border border-gray-700/50 card-glow">
              <div className="w-14 h-14 gradient-primary rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/30">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-100 mb-2">Internal Dashboard</h3>
              <p className="text-gray-300 mb-4">
                Powerful dashboard to manage your moving business operations and track performance.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-emerald-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Job management
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-emerald-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Analytics & reports
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-emerald-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Team coordination
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-300">Trusted by hundreds of satisfied customers</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Lux Client", location: "Seattle, WA", text: "Lux Movers made our cross-country move so easy! Professional and careful.", initial: "LC" },
              { name: "Lux Client", location: "Portland, OR", text: "Outstanding service! Weekend office move was flawless. Highly recommend!", initial: "LC" },
              { name: "Lux Client", location: "San Francisco, CA", text: "Best moving experience ever! Fair pricing and exceptional care.", initial: "LC" }
            ].map((testimonial, i) => (
              <div key={i} className="glass-effect p-8 rounded-2xl border border-gray-700/50 card-glow">
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-200 mb-6 text-base leading-relaxed">&quot;{testimonial.text}&quot;</p>
                <div className="flex items-center pt-6 border-t border-gray-700/50">
                  <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-emerald-500/30">
                    {testimonial.initial}
                  </div>
                  <div className="ml-3">
                    <div className="font-semibold text-gray-100 text-sm">{testimonial.name}</div>
                    <div className="text-gray-400 text-xs">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/50 via-emerald-500/50 to-teal-500/50"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-white/95 mb-10 leading-relaxed">Get your free quote today and experience stress-free moving.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://movers.analytics.uselux.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-2xl hover:scale-105 shadow-purple-500/30 hover:shadow-purple-500/40 whitespace-nowrap text-sm flex items-center justify-center"
              style={{
                background: 'linear-gradient(135deg, #5e6ad2 0%, #7c3aed 100%)'
              }}
            >
              See Analytics Dashboard
            </a>
            <button
              onClick={() => setShowModal(true)}
              className="border-2 border-white text-white px-10 py-4 rounded-xl font-bold hover:bg-white/20 transition-all duration-300 backdrop-blur-sm hover:scale-105"
            >
              Call (337) 614-6849
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-10">
            <div>
              <h3 className="text-xl font-bold mb-4 gradient-text">Lux Movers</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Professional moving services you can trust.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-sm">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Landing Pages</a></li>
                <li><a href="#" className="hover:text-white transition-colors">AI Tools</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Dashboard</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-sm">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-sm">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>(337) 614-6849</li>
                <li>movers@uselux.ai</li>
                <li>Available 24/7</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700/50 pt-8 text-center text-gray-400 text-sm">
            <p className="flex items-center justify-center gap-2">
              &copy; 2024 Lux Movers. All rights reserved.
              <span className="text-emerald-500">•</span>
              <span className="gradient-text font-semibold">Made with Lux AI</span>
            </p>
          </div>
        </div>
      </footer>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in" onClick={() => setShowModal(false)}>
          <div className="glass-effect rounded-3xl p-10 max-w-md w-full shadow-2xl animate-scale-in" onClick={(e) => e.stopPropagation()}>
            <div className="text-center">
              <div className="w-20 h-20 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-500/50 animate-float">
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-gray-100 mb-3">This is the Lux AI Demo</h3>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">Call this number to see the demo and learn more about our services.</p>
              <a
                href="tel:+13376146849"
                className="inline-block gradient-primary btn-shine text-white px-10 py-4 rounded-xl font-bold transition-all duration-300 shadow-xl shadow-emerald-500/30 hover:shadow-2xl hover:shadow-emerald-500/40 mb-4 hover:scale-105"
              >
                (337) 614-6849
              </a>
              <button
                onClick={() => setShowModal(false)}
                className="block w-full text-gray-400 hover:text-gray-100 transition-colors text-base font-semibold mt-4"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
