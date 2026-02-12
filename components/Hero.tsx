"use client"
import React from 'react';
import Link from 'next/link'


const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
      <div 
        className="absolute inset-0" 
        style={{
          backgroundImage: `
            linear-gradient(to right, rgb(147 51 234 / 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(147 51 234 / 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      ></div>

      {/* Gradient Orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute top-40 right-20 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-purple-200 rounded-full px-4 py-2 mb-8 shadow-sm">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          <span className="text-sm font-medium text-gray-700">AI-Powered Document Chat</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Welcome to Docsense
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          Upload documents, PDFs, text files to chat with them
        </p>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/signup">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full font-semibold text-lg shadow-xl shadow-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/60 hover:scale-105 transition-all duration-300">
              <span className="relative z-10 cursor-pointer">Get Started Free</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-indigo-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </Link>
          
          <button className="px-8 py-4 bg-white text-purple-600 rounded-full font-semibold text-lg border-2 border-purple-600 hover:bg-purple-50 transition-all duration-300 shadow-lg">
            Watch Demo
          </button>
        </div>

        {/* Features Pills */}
        <div className="flex flex-wrap gap-3 justify-center mt-12">
          <span className="px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 border border-gray-200">
            ✨ Instant Answers
          </span>
          <span className="px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 border border-gray-200">
            🔒 Secure & Private
          </span>
          <span className="px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 border border-gray-200">
            ⚡ Lightning Fast
          </span>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default Hero;