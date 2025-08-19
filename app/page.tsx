"use client";

import { useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
   OrbitControls,
   Environment,
   Float,
   Sphere,
   Box,
} from "@react-three/drei";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
   Mail,
   Phone,
   MapPin,
   Linkedin,
   Heart,
   Code,
   Ambulance,
   Users,
   Award,
   Instagram,
   Facebook,
} from "lucide-react";
import BusinessVentures from "@/components/business-ventures";
import HealthcareProjects from "@/components/healthcare-projects";
import VideoSection from "@/components/video";

gsap.registerPlugin(ScrollTrigger);

function AnimatedSphere({
   position,
   color,
}: {
   position: [number, number, number];
   color: string;
}) {
   return (
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
         <Sphere position={position} args={[0.5, 32, 32]}>
            <meshStandardMaterial
               color={color}
               metalness={0.8}
               roughness={0.2}
            />
         </Sphere>
      </Float>
   );
}

function Scene3D() {
   return (
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
         <Environment preset="city" />
         <ambientLight intensity={0.5} />
         <pointLight position={[10, 10, 10]} />

         {/* Replace Text3D with animated boxes spelling FARAZ */}
         <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
            <group position={[-3, 0, 0]}>
               <Box position={[-2, 0, 0]} args={[0.8, 1.5, 0.2]}>
                  <meshStandardMaterial
                     color="#ef4444"
                     metalness={0.8}
                     roughness={0.2}
                  />
               </Box>
               <Box position={[-0.5, 0, 0]} args={[0.8, 1.5, 0.2]}>
                  <meshStandardMaterial
                     color="#ef4444"
                     metalness={0.8}
                     roughness={0.2}
                  />
               </Box>
               <Box position={[1, 0, 0]} args={[0.8, 1.5, 0.2]}>
                  <meshStandardMaterial
                     color="#ef4444"
                     metalness={0.8}
                     roughness={0.2}
                  />
               </Box>
               <Box position={[2.5, 0, 0]} args={[0.8, 1.5, 0.2]}>
                  <meshStandardMaterial
                     color="#ef4444"
                     metalness={0.8}
                     roughness={0.2}
                  />
               </Box>
               <Box position={[4, 0, 0]} args={[0.8, 1.5, 0.2]}>
                  <meshStandardMaterial
                     color="#ef4444"
                     metalness={0.8}
                     roughness={0.2}
                  />
               </Box>
            </group>
         </Float>

         <AnimatedSphere position={[4, 2, -2]} color="#3b82f6" />
         <AnimatedSphere position={[-4, -1, -1]} color="#10b981" />
         <AnimatedSphere position={[2, -2, 1]} color="#f59e0b" />

         <Float speed={2} rotationIntensity={2} floatIntensity={3}>
            <Box position={[-2, 2, -3]} args={[0.8, 0.8, 0.8]}>
               <meshStandardMaterial
                  color="#8b5cf6"
                  metalness={0.9}
                  roughness={0.1}
               />
            </Box>
         </Float>

         <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
   );
}

export default function Portfolio() {
   const heroRef = useRef<HTMLDivElement>(null);
   const aboutRef = useRef<HTMLDivElement>(null);
   const projectsRef = useRef<HTMLDivElement>(null);
   // const experienceRef = useRef<HTMLDivElement>(null);
   const contactRef = useRef<HTMLDivElement>(null);
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

   const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
   };

   return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
         {/* Navigation */}
         <nav className="fixed top-0 w-full z-50 bg-gradient-to-r from-gray-900/95 to-gray-800/95 backdrop-blur-lg border-b border-gray-700 shadow-lg">
            <div className="container mx-auto px-4 md:px-6 py-3">
               <div className="flex justify-between items-center">
                  {/* Logo/Brand with subtle animation */}
                  <div className="text-xl md:text-2xl font-bold text-white group">
                     <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent transition-all duration-300 group-hover:tracking-wider">
                        Md Faraz
                     </span>
                     <span className="inline-block w-2 h-2 ml-1 bg-cyan-400 rounded-full animate-pulse"></span>
                  </div>

                  {/* Desktop Navigation */}
                  <div className="hidden md:flex items-center space-x-1">
                     {[
                        { name: "About", href: "#about" },
                        { name: "Projects", href: "#projects" },
                        { name: "Contact", href: "#contact" },
                     ].map((item) => (
                        <a
                           key={item.name}
                           href={item.href}
                           className="relative px-4 py-2 text-gray-300 hover:text-white transition-colors group"
                        >
                           {item.name}
                           <span className="absolute bottom-0 left-1/3 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-3/4 group-hover:left-1/8"></span>
                        </a>
                     ))}
                  </div>

                  {/* Mobile menu button - Modern hamburger */}
                  <button
                     className="md:hidden p-2 focus:outline-none group"
                     onClick={toggleMobileMenu}
                     aria-label="Toggle mobile menu"
                  >
                     <div className="space-y-1.5">
                        <span
                           className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                              isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                           }`}
                        ></span>
                        <span
                           className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                              isMobileMenuOpen ? "opacity-0" : "opacity-100"
                           }`}
                        ></span>
                        <span
                           className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                              isMobileMenuOpen
                                 ? "-rotate-45 -translate-y-2"
                                 : ""
                           }`}
                        ></span>
                     </div>
                  </button>
               </div>

               {/* Mobile Navigation Menu - Improved design */}
               <div
                  className={`md:hidden transition-all duration-500 ease-[cubic-bezier(0.68,-0.6,0.32,1.6)] overflow-hidden ${
                     isMobileMenuOpen
                        ? "max-h-96 opacity-100 mt-4"
                        : "max-h-0 opacity-0"
                  }`}
               >
                  <div className="bg-gray-800/90 backdrop-blur-xl rounded-xl border border-gray-700 shadow-xl overflow-hidden">
                     <div className="flex flex-col divide-y divide-gray-700/50">
                        {[
                           { name: "About", href: "#about" },
                           { name: "Projects", href: "#projects" },

                           { name: "Contact", href: "#contact" },
                        ].map((item) => (
                           <a
                              key={item.name}
                              href={item.href}
                              className="flex items-center px-6 py-4 text-gray-300 hover:text-white hover:bg-gray-700/50 transition-all duration-200"
                              onClick={() => setIsMobileMenuOpen(false)}
                           >
                              <span>{item.name}</span>
                              <span className="ml-auto text-cyan-400">→</span>
                           </a>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </nav>

         {/* Hero Section */}
         <section
            ref={heroRef}
            className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 md:pt-0"
         >
            <div className="absolute inset-0 z-0">
               <Scene3D />
            </div>
            <div className="container mx-auto px-6 z-10 relative pt-10 md:pt-10">
               <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  {/* Left side - Text content */}
                  <div className="text-center lg:text-left order-2 lg:order-1">
                     <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4">
                        Md Faraz
                     </h1>
                     <p className="hero-subtitle text-lg sm:text-xl md:text-2xl lg:text-3xl text-red-400 mb-6">
                        Empowering Healthcare Through Innovation
                     </p>
                     <p className="hero-description text-base md:text-lg text-white/80 max-w-2xl mx-auto lg:mx-0 mb-8">
                        Director, Strategist, Innovator in Emergency & Medical
                        Solutions.
                     </p>
                     <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <Button
                           size="lg"
                           className="bg-red-600 hover:bg-red-700 text-white"
                        >
                           <Heart className="mr-2 h-5 w-5" />
                           Healthcare Portfolio
                        </Button>
                     </div>
                  </div>

                  {/* Right side - Professional image */}
                  <div className="flex justify-center lg:justify-end order-1 lg:order-2">
                     <div className="relative hero-image">
                        {/* Animated border effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-blue-500 to-purple-500 rounded-2xl blur-sm opacity-75 animate-pulse"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-blue-500 to-purple-500 rounded-2xl opacity-20"></div>

                        {/* Professional image container */}
                        <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-2 shadow-2xl">
                           <img
                              src="/photo.jpeg?height=400&width=320&text=Faraz+Professional+Photo"
                              alt="Md Faraz - Healthcare Operations Manager & Software Developer"
                              className="w-80 h-80 sm:w-80 sm:h-96 md:w-50 md:h-[350px] object-cover rounded-xl shadow-lg"
                           />

                           {/* Floating badges */}
                           <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 bg-red-600 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-lg animate-bounce floating-badge">
                              Healthcare Expert
                           </div>
                        </div>

                        {/* Background decorative elements */}
                        <div className="absolute -z-10 top-10 -right-10 w-24 h-24 sm:w-32 sm:h-32 bg-red-500/20 rounded-full blur-xl"></div>
                        <div className="absolute -z-10 bottom-10 -left-10 w-16 h-16 sm:w-24 sm:h-24 bg-blue-500/20 rounded-full blur-xl"></div>
                        <div className="absolute -z-10 top-1/2 -right-20 w-12 h-12 sm:w-16 sm:h-16 bg-purple-500/20 rounded-full blur-lg"></div>
                     </div>
                  </div>
               </div>

               {/* Professional stats below */}
               <div className="mt-12 lg:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
                  <div className="text-center bg-white/10 backdrop-blur-md rounded-lg p-3 md:p-4 border border-white/20 hero-stats">
                     <div className="text-xl md:text-2xl lg:text-3xl font-bold text-red-400 mb-1">
                        5+
                     </div>
                     <div className="text-white/80 text-xs md:text-sm">
                        Years Experience
                     </div>
                  </div>
                  <div className="text-center bg-white/10 backdrop-blur-md rounded-lg p-3 md:p-4 border border-white/20 hero-stats">
                     <div className="text-xl md:text-2xl lg:text-3xl font-bold text-blue-400 mb-1">
                        50+
                     </div>
                     <div className="text-white/80 text-xs md:text-sm">
                        Projects Completed
                     </div>
                  </div>
                  <div className="text-center bg-white/10 backdrop-blur-md rounded-lg p-3 md:p-4 border border-white/20 hero-stats">
                     <div className="text-xl md:text-2xl lg:text-3xl font-bold text-green-400 mb-1">
                        1000+
                     </div>
                     <div className="text-white/80 text-xs md:text-sm">
                        Lives Impacted
                     </div>
                  </div>
                  <div className="text-center bg-white/10 backdrop-blur-md rounded-lg p-3 md:p-4 border border-white/20 hero-stats">
                     <div className="text-xl md:text-2xl lg:text-3xl font-bold text-purple-400 mb-1">
                        24/7
                     </div>
                     <div className="text-white/80 text-xs md:text-sm">
                        Dedicated Service
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* Video Section */}
         <VideoSection aboutRef={aboutRef} />
         {/* About Section */}
         <section id="about" ref={aboutRef} className="py-20 bg-black/30">
            <div className="container mx-auto px-6">
               <h2 className="text-4xl font-bold text-white text-center mb-16">
                  About Me
               </h2>
               <div className="grid md:grid-cols gap-12 items-center">
                  <Card className="about-card floating-card bg-white/10 backdrop-blur-md border-white/20">
                     <CardContent className="p-8">
                        <div className="flex items-center mb-6 justify-center">
                           <Ambulance className="h-8 w-8 text-red-400 mr-3" />
                           <h3 className="text-2xl font-bold text-white">
                              Healthcare Leadership
                           </h3>
                        </div>
                        <p className="text-white/80 leading-relaxed">
                           I'm Faraz, currently leading multiple healthcare
                           ventures across India and UAE. From medical homecare
                           to emergency ambulance services and hospital
                           equipment distribution - I bridge gaps in healthcare
                           infrastructure through strategic execution and
                           innovation.
                        </p>
                     </CardContent>
                  </Card>
               </div>
            </div>
         </section>

         {/* Projects Section */}
         <section id="projects" ref={projectsRef} className="py-20 bg-black/40">
            <div className="container mx-auto px-6">
               <BusinessVentures />

               {/* <HealthcareProjects /> */}

               {/* Project Stats */}
               <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 align-items-center justify-center">
                  <div className="text-center p-6 bg-gradient-to-br from-red-600/20 to-red-800/20 rounded-lg border border-red-400/30">
                     <div className="text-3xl font-bold text-red-400 mb-2">
                        50+
                     </div>
                     <div className="text-white/80 text-sm">
                        Healthcare Projects
                     </div>
                  </div>

                  <div className="text-center p-6 bg-gradient-to-br from-green-600/20 to-green-800/20 rounded-lg border border-green-400/30">
                     <div className="text-3xl font-bold text-green-400 mb-2">
                        98%
                     </div>
                     <div className="text-white/80 text-sm">
                        Client Satisfaction
                     </div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-green-600/20 to-green-800/20 rounded-lg border border-green-400/30">
                     <div className="text-3xl font-bold text-green-400 mb-2">
                        98%
                     </div>
                     <div className="text-white/80 text-sm">
                        Client Satisfaction
                     </div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-purple-600/20 to-purple-800/20 rounded-lg border border-purple-400/30">
                     <div className="text-3xl font-bold text-purple-400 mb-2">
                        24/7
                     </div>
                     <div className="text-white/80 text-sm">Availability</div>
                  </div>
               </div>
            </div>
         </section>

         {/* Experience Section */}
         {/* <section
            id="experience"
            ref={experienceRef}
            className="py-20 bg-black/30"
         >
            <div className="container mx-auto px-6">
               <h2 className="text-4xl font-bold text-white text-center mb-16">
                  Professional Journey
               </h2>
               <div className="space-y-8">
                  <Card className="experience-item floating-card bg-white/10 backdrop-blur-md border-white/20">
                     <CardContent className="p-8">
                        <div className="flex items-start justify-between mb-4">
                           <div>
                              <h3 className="text-2xl font-bold text-white mb-2">
                                 Ambulance Services Manager
                              </h3>
                              <p className="text-red-400 font-semibold">
                                 Healthcare Organization
                              </p>
                           </div>
                           <div className="flex items-center text-white/60">
                              <Calendar className="h-4 w-4 mr-2" />
                              <span>2020 - Present</span>
                           </div>
                        </div>
                        <p className="text-white/80 mb-4">
                           Leading emergency medical services operations,
                           managing fleet coordination, and implementing
                           technology solutions to improve response times and
                           patient outcomes.
                        </p>
                        <div className="flex flex-wrap gap-2">
                           <Badge className="bg-red-600">
                              Emergency Management
                           </Badge>
                           <Badge className="bg-red-600">Team Leadership</Badge>
                           <Badge className="bg-red-600">
                              Process Improvement
                           </Badge>
                        </div>
                     </CardContent>
                  </Card>

                  <Card className="experience-item floating-card bg-white/10 backdrop-blur-md border-white/20">
                     <CardContent className="p-8">
                        <div className="flex items-start justify-between mb-4">
                           <div>
                              <h3 className="text-2xl font-bold text-white mb-2">
                                 Full Stack Developer
                              </h3>
                              <p className="text-blue-400 font-semibold">
                                 Healthcare Tech Solutions
                              </p>
                           </div>
                           <div className="flex items-center text-white/60">
                              <Calendar className="h-4 w-4 mr-2" />
                              <span>2018 - Present</span>
                           </div>
                        </div>
                        <p className="text-white/80 mb-4">
                           Developing web applications and mobile solutions for
                           healthcare management, patient tracking systems, and
                           emergency response coordination platforms.
                        </p>
                        <div className="flex flex-wrap gap-2">
                           <Badge className="bg-blue-600">React</Badge>
                           <Badge className="bg-blue-600">Node.js</Badge>
                           <Badge className="bg-blue-600">Healthcare IT</Badge>
                        </div>
                     </CardContent>
                  </Card>
               </div>
            </div>
         </section> */}

         {/* Contact Section */}
         <section id="contact" ref={contactRef} className="py-20">
            <div className="container mx-auto px-6">
               <h2 className="text-4xl font-bold text-white text-center mb-16">
                  Get In Touch
               </h2>
               <div className="max-w-4xl mx-auto">
                  <Card className="contact-form floating-card bg-white/10 backdrop-blur-md border-white/20">
                     <CardContent className="p-8">
                        <div className="grid md:grid-cols-2 gap-8">
                           <div>
                              {/* <h3 className="text-2xl font-bold text-white mb-6">
                                 Let's Connect
                              </h3> */}
                              <p className="text-white/80 mb-8">
                                 Open to collaborations, healthcare projects,
                                 and tech-powered solutions in the medical
                                 field.
                              </p>
                              <div className="space-y-4">
                                 <div className="flex items-center text-white/80">
                                    <Mail className="h-5 w-5 mr-3 text-red-400" />
                                    <span>
                                       <a href="mailto:mohammadfaraz8983@gmail.com">
                                          mohammadfaraz8983@gmail.com
                                       </a>
                                    </span>
                                 </div>
                                 <div className="flex items-center text-white/80">
                                    <Phone className="h-5 w-5 mr-3 text-red-400" />
                                    <span>
                                       <a href="tel:+91-8934872701">
                                          +91-8934872701
                                       </a>
                                    </span>
                                 </div>
                                 <div className="flex items-center text-white/80">
                                    <MapPin className="h-5 w-5 mr-3 text-red-400" />
                                    <span>Lucknow, Uttar Pradesh, IN</span>
                                 </div>
                              </div>
                              <div className="flex space-x-4 mt-8">
                                 <Button
                                    size="sm"
                                    variant="outline"
                                    className="border-white text-white hover:bg-white hover:text-black bg-transparent"
                                    onClick={() =>
                                       window.open(
                                          "https://www.instagram.com/faraz_8983/",
                                          "_blank"
                                       )
                                    }
                                 >
                                    <Instagram className="h-4 w-4 mr-2" />
                                    Instagram
                                 </Button>
                                 <Button
                                    size="sm"
                                    variant="outline"
                                    className="border-white text-white hover:bg-white hover:text-black bg-transparent"
                                    onClick={() =>
                                       window.open(
                                          "https://www.facebook.com/mohammad.faraz.9469",
                                          "_blank"
                                       )
                                    }
                                 >
                                    <Facebook className="h-4 w-4 mr-2" />
                                    Facebook
                                 </Button>
                              </div>
                           </div>
                           <div className="space-y-6">
                              <div className="grid grid-cols-2 gap-4">
                                 <div className="text-center p-6 bg-red-600/20 rounded-lg">
                                    <Users className="h-8 w-8 text-red-400 mx-auto mb-2" />
                                    <div className="text-2xl font-bold text-white">
                                       1000+
                                    </div>
                                    <div className="text-white/60">
                                       Lives Saved
                                    </div>
                                 </div>
                                 <div className="text-center p-6 bg-blue-600/20 rounded-lg">
                                    <Code className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                                    <div className="text-2xl font-bold text-white">
                                       50+
                                    </div>
                                    <div className="text-white/60">
                                       Projects Built
                                    </div>
                                 </div>
                              </div>
                              <div className="grid grid-cols-2 gap-4">
                                 <div className="text-center p-6 bg-green-600/20 rounded-lg">
                                    <Award className="h-8 w-8 text-green-400 mx-auto mb-2" />
                                    <div className="text-2xl font-bold text-white">
                                       5+
                                    </div>
                                    <div className="text-white/60">
                                       Years Experience
                                    </div>
                                 </div>
                                 <div className="text-center p-6 bg-purple-600/20 rounded-lg">
                                    <Heart className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                                    <div className="text-2xl font-bold text-white">
                                       24/7
                                    </div>
                                    <div className="text-white/60">
                                       Dedicated Service
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </CardContent>
                  </Card>
               </div>
            </div>
         </section>

         {/* Footer */}
         <footer className="py-8 bg-black/50 border-t border-white/10">
            <div className="container mx-auto px-6 text-center">
               <p className="text-white/60">
                  © {new Date().getFullYear()} All Rights Reserved - Md Faraz
               </p>
            </div>
         </footer>
      </div>
   );
}
