"use client";

import { useEffect, useRef, useState } from "react";
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
import { Badge } from "@/components/ui/badge";
import {
   Mail,
   Phone,
   MapPin,
   Github,
   Linkedin,
   Heart,
   Code,
   Ambulance,
   Users,
   Award,
   Calendar,
} from "lucide-react";

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
   const skillsRef = useRef<HTMLDivElement>(null);
   const projectsRef = useRef<HTMLDivElement>(null);
   const experienceRef = useRef<HTMLDivElement>(null);
   const contactRef = useRef<HTMLDivElement>(null);

   const [selectedProject, setSelectedProject] = useState<any>(null);
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

   const projectsData = {
      emergencyResponse: {
         id: "emergency-response",
         title: "Emergency Response System",
         category: "Healthcare",
         year: "2023",
         duration: "8 months",
         team: "6 members",
         role: "Lead Developer & Project Manager",
         client: "Regional Medical Center",
         overview:
            "A comprehensive ambulance dispatch and tracking system that revolutionized emergency medical services by reducing response times by 35% and improving patient outcomes through real-time coordination.",
         problem:
            "The existing emergency response system relied on outdated radio communications and manual dispatch processes, leading to delayed response times, poor resource allocation, and lack of real-time visibility into ambulance locations and availability.",
         solution:
            "Developed a modern web-based platform with GPS tracking, automated dispatch algorithms, real-time communication, and predictive analytics to optimize emergency response operations.",
         technologies: [
            "React",
            "Node.js",
            "Socket.io",
            "MongoDB",
            "Google Maps API",
            "Redis",
            "Docker",
         ],
         features: [
            "Real-time GPS tracking of all ambulances",
            "Automated dispatch based on proximity and availability",
            "Live communication between dispatch and field teams",
            "Predictive analytics for resource planning",
            "Mobile app for paramedics",
            "Integration with hospital systems",
         ],
         metrics: {
            responseTime: "35% reduction",
            efficiency: "42% improvement",
            satisfaction: "94% patient satisfaction",
            uptime: "99.8% system uptime",
         },
         challenges: [
            "Integration with legacy hospital systems",
            "Real-time data synchronization across multiple devices",
            "Ensuring system reliability during critical emergencies",
            "Training staff on new technology",
         ],
         outcomes: [
            "Reduced average response time from 12 to 7.8 minutes",
            "Improved ambulance utilization by 42%",
            "Enhanced communication between teams",
            "Better resource allocation and planning",
         ],
         screenshot:
            "/placeholder.svg?height=400&width=600&text=Emergency+Response+Dashboard",
      },
      patientManagement: {
         id: "patient-management",
         title: "Patient Management Portal",
         category: "Healthcare",
         year: "2023",
         duration: "6 months",
         team: "4 members",
         role: "Full Stack Developer",
         client: "Healthcare Network",
         overview:
            "A secure, HIPAA-compliant digital platform for managing patient records, medical history, and treatment plans with role-based access for healthcare providers.",
         problem:
            "Healthcare providers were using paper-based records and disconnected systems, leading to inefficient patient care, data silos, and compliance issues.",
         solution:
            "Built a comprehensive patient management system with secure authentication, encrypted data storage, and intuitive interfaces for different user roles.",
         technologies: [
            "Next.js",
            "TypeScript",
            "PostgreSQL",
            "Prisma",
            "NextAuth",
            "Tailwind CSS",
            "AWS",
         ],
         features: [
            "Secure patient record management",
            "Medical history tracking",
            "Treatment plan creation and monitoring",
            "Role-based access control",
            "Audit logging for compliance",
            "Document upload and management",
         ],
         metrics: {
            efficiency: "60% faster record access",
            accuracy: "95% data accuracy improvement",
            compliance: "100% HIPAA compliance",
            adoption: "89% staff adoption rate",
         },
         challenges: [
            "Ensuring HIPAA compliance and data security",
            "Migrating from paper-based records",
            "Training healthcare staff on digital workflows",
            "Integration with existing medical equipment",
         ],
         outcomes: [
            "Streamlined patient care workflows",
            "Improved data accuracy and accessibility",
            "Enhanced compliance with healthcare regulations",
            "Better coordination between healthcare providers",
         ],
         screenshot:
            "/placeholder.svg?height=400&width=600&text=Patient+Management+Interface",
      },
      healthcareApi: {
         id: "healthcare-api",
         title: "Healthcare API Platform",
         category: "Software",
         year: "2024",
         duration: "10 months",
         team: "8 members",
         role: "Lead Backend Developer",
         client: "Multiple Healthcare Organizations",
         overview:
            "A robust RESTful API platform enabling seamless integration between different healthcare systems, third-party applications, and medical devices.",
         problem:
            "Healthcare organizations struggled with data silos and incompatible systems, making it difficult to share patient information and coordinate care across different platforms.",
         solution:
            "Developed a standardized API platform with comprehensive documentation, authentication, and data transformation capabilities to enable seamless healthcare system integration.",
         technologies: [
            "Node.js",
            "Express",
            "MongoDB",
            "Redis",
            "JWT",
            "Swagger",
            "Docker",
            "Kubernetes",
         ],
         features: [
            "RESTful API with comprehensive endpoints",
            "OAuth 2.0 authentication and authorization",
            "Real-time data synchronization",
            "API rate limiting and monitoring",
            "Comprehensive documentation",
            "SDK for popular programming languages",
         ],
         metrics: {
            integrations: "50+ system integrations",
            performance: "99.9% uptime",
            speed: "< 200ms average response time",
            adoption: "25+ healthcare organizations",
         },
         challenges: [
            "Standardizing data formats across different systems",
            "Ensuring high availability and performance",
            "Managing complex authentication requirements",
            "Maintaining backward compatibility",
         ],
         outcomes: [
            "Enabled seamless data exchange between systems",
            "Reduced integration time from months to weeks",
            "Improved interoperability across healthcare networks",
            "Enhanced patient care coordination",
         ],
         screenshot:
            "/placeholder.svg?height=400&width=600&text=API+Documentation+Portal",
      },
      mobileEmergency: {
         id: "mobile-emergency",
         title: "Mobile Emergency App",
         category: "Software",
         year: "2023",
         duration: "5 months",
         team: "5 members",
         role: "Mobile Developer",
         client: "Emergency Services Department",
         overview:
            "A React Native mobile application for emergency services with GPS location, medical information storage, and direct ambulance dispatch capabilities.",
         problem:
            "Citizens had no direct way to request emergency services with their exact location and medical information, leading to delays in critical situations.",
         solution:
            "Created a user-friendly mobile app that automatically shares location and medical data with emergency services, enabling faster and more informed response.",
         technologies: [
            "React Native",
            "TypeScript",
            "Firebase",
            "Google Maps",
            "Push Notifications",
            "Expo",
         ],
         features: [
            "One-tap emergency calling",
            "Automatic GPS location sharing",
            "Medical information profiles",
            "Real-time ambulance tracking",
            "Emergency contact notifications",
            "Offline functionality",
         ],
         metrics: {
            downloads: "10,000+ downloads",
            responseTime: "25% faster emergency response",
            accuracy: "98% location accuracy",
            rating: "4.8/5 app store rating",
         },
         challenges: [
            "Ensuring app works in low-connectivity areas",
            "Balancing battery usage with location tracking",
            "Managing sensitive medical data securely",
            "Cross-platform compatibility",
         ],
         outcomes: [
            "Faster emergency response times",
            "Improved accuracy of emergency information",
            "Enhanced user confidence in emergency services",
            "Better coordination with emergency responders",
         ],
         screenshot:
            "/placeholder.svg?height=400&width=600&text=Mobile+Emergency+App+Interface",
      },
      fleetManagement: {
         id: "fleet-management",
         title: "Fleet Management System",
         category: "Software",
         year: "2022",
         duration: "7 months",
         team: "6 members",
         role: "Frontend Lead",
         client: "Ambulance Service Provider",
         overview:
            "A comprehensive web-based fleet management solution with real-time vehicle tracking, maintenance scheduling, and route optimization capabilities.",
         problem:
            "The ambulance fleet was managed manually, leading to inefficient routing, missed maintenance schedules, and poor resource utilization.",
         solution:
            "Built a modern fleet management system with real-time tracking, automated maintenance alerts, and AI-powered route optimization.",
         technologies: [
            "React",
            "TypeScript",
            "PostgreSQL",
            "Node.js",
            "Google Maps",
            "Chart.js",
            "WebSocket",
         ],
         features: [
            "Real-time vehicle tracking and monitoring",
            "Automated maintenance scheduling",
            "Route optimization algorithms",
            "Driver performance analytics",
            "Fuel consumption tracking",
            "Comprehensive reporting dashboard",
         ],
         metrics: {
            efficiency: "30% improvement in fleet utilization",
            maintenance: "40% reduction in maintenance costs",
            fuel: "20% fuel savings",
            downtime: "50% reduction in vehicle downtime",
         },
         challenges: [
            "Integrating with various vehicle telematics systems",
            "Developing accurate route optimization algorithms",
            "Managing large amounts of real-time data",
            "Creating intuitive dashboards for fleet managers",
         ],
         outcomes: [
            "Optimized fleet operations and resource allocation",
            "Reduced operational costs significantly",
            "Improved vehicle maintenance and longevity",
            "Enhanced driver safety and performance",
         ],
         screenshot:
            "/placeholder.svg?height=400&width=600&text=Fleet+Management+Dashboard",
      },
      dataAnalytics: {
         id: "data-analytics",
         title: "Data Analytics Platform",
         category: "Software",
         year: "2024",
         duration: "12 months",
         team: "10 members",
         role: "Data Engineering Lead",
         client: "Healthcare Analytics Consortium",
         overview:
            "An advanced analytics platform for healthcare data visualization, predictive modeling, and performance insights using machine learning algorithms.",
         problem:
            "Healthcare organizations had vast amounts of data but lacked the tools to extract meaningful insights for improving patient outcomes and operational efficiency.",
         solution:
            "Developed a comprehensive analytics platform with machine learning capabilities, interactive dashboards, and predictive modeling for healthcare insights.",
         technologies: [
            "Python",
            "TensorFlow",
            "React",
            "D3.js",
            "Apache Spark",
            "PostgreSQL",
            "Docker",
            "Kubernetes",
         ],
         features: [
            "Interactive data visualization dashboards",
            "Predictive modeling for patient outcomes",
            "Real-time analytics and monitoring",
            "Custom report generation",
            "Machine learning model deployment",
            "Data pipeline automation",
         ],
         metrics: {
            accuracy: "92% prediction accuracy",
            insights: "500+ actionable insights generated",
            efficiency: "45% improvement in decision-making speed",
            adoption: "15+ healthcare organizations",
         },
         challenges: [
            "Processing large volumes of healthcare data",
            "Ensuring data privacy and security",
            "Building accurate predictive models",
            "Creating intuitive visualizations for non-technical users",
         ],
         outcomes: [
            "Enabled data-driven decision making",
            "Improved patient outcome predictions",
            "Optimized resource allocation",
            "Enhanced operational efficiency",
         ],
         screenshot:
            "/placeholder.svg?height=400&width=600&text=Analytics+Dashboard+Visualization",
      },
   };

   const openModal = (projectId: string) => {
      setSelectedProject(projectsData[projectId]);
      setIsModalOpen(true);
      document.body.style.overflow = "hidden";
   };

   const closeModal = () => {
      setIsModalOpen(false);
      setSelectedProject(null);
      document.body.style.overflow = "unset";
   };

   const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
   };

   useEffect(() => {
      // Hero animations
      gsap.fromTo(
         ".hero-title",
         { opacity: 0, y: 100 },
         { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
      );

      gsap.fromTo(
         ".hero-subtitle",
         { opacity: 0, y: 50 },
         { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: "power3.out" }
      );

      gsap.fromTo(
         ".hero-description",
         { opacity: 0, y: 30 },
         { opacity: 1, y: 0, duration: 0.8, delay: 0.6, ease: "power3.out" }
      );

      // Professional image animations
      gsap.fromTo(
         ".hero-image",
         { opacity: 0, scale: 0.8, x: 100 },
         {
            opacity: 1,
            scale: 1,
            x: 0,
            duration: 1.2,
            delay: 0.4,
            ease: "power3.out",
         }
      );

      gsap.fromTo(
         ".floating-badge",
         { opacity: 0, y: 20 },
         {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.8,
            stagger: 0.2,
            ease: "power3.out",
         }
      );

      gsap.fromTo(
         ".hero-stats",
         { opacity: 0, y: 30 },
         {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 1,
            stagger: 0.1,
            ease: "power3.out",
         }
      );

      // Scroll-triggered animations
      gsap.fromTo(
         ".about-card",
         { opacity: 0, x: -100 },
         {
            opacity: 1,
            x: 0,
            duration: 1,
            scrollTrigger: {
               trigger: aboutRef.current,
               start: "top 80%",
               end: "bottom 20%",
               toggleActions: "play none none reverse",
            },
         }
      );

      gsap.fromTo(
         ".skill-item",
         { opacity: 0, scale: 0.8 },
         {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            scrollTrigger: {
               trigger: skillsRef.current,
               start: "top 80%",
               end: "bottom 20%",
               toggleActions: "play none none reverse",
            },
         }
      );

      gsap.fromTo(
         ".project-card",
         { opacity: 0, y: 80, rotateX: 15 },
         {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.8,
            stagger: 0.2,
            scrollTrigger: {
               trigger: projectsRef.current,
               start: "top 80%",
               end: "bottom 20%",
               toggleActions: "play none none reverse",
            },
         }
      );

      gsap.fromTo(
         ".experience-item",
         { opacity: 0, y: 50 },
         {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            scrollTrigger: {
               trigger: experienceRef.current,
               start: "top 80%",
               end: "bottom 20%",
               toggleActions: "play none none reverse",
            },
         }
      );

      gsap.fromTo(
         ".contact-form",
         { opacity: 0, y: 50 },
         {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
               trigger: contactRef.current,
               start: "top 80%",
               end: "bottom 20%",
               toggleActions: "play none none reverse",
            },
         }
      );

      // Floating animation for cards
      gsap.to(".floating-card", {
         y: -10,
         duration: 2,
         ease: "power2.inOut",
         yoyo: true,
         repeat: -1,
         stagger: 0.3,
      });

      // Add modal animations
      if (isModalOpen) {
         gsap.fromTo(
            ".modal-backdrop",
            { opacity: 0 },
            { opacity: 1, duration: 0.3 }
         );
         gsap.fromTo(
            ".modal-content",
            { opacity: 0, scale: 0.8, y: 50 },
            { opacity: 1, scale: 1, y: 0, duration: 0.4, delay: 0.1 }
         );
      }

      // Add mobile menu animations
      if (isMobileMenuOpen) {
         gsap.fromTo(
            ".mobile-menu-item",
            { opacity: 0, x: -20 },
            { opacity: 1, x: 0, duration: 0.3, stagger: 0.1 }
         );
      }
   }, [isModalOpen, isMobileMenuOpen]);

   return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
         {/* Navigation */}
         <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
            <div className="container mx-auto px-4 md:px-6 py-3 md:py-4">
               <div className="flex justify-between items-center">
                  <div className="text-xl md:text-2xl font-bold text-white">
                     Md. Faraz
                  </div>

                  {/* Desktop Navigation */}
                  <div className="hidden md:flex space-x-8">
                     <a
                        href="#about"
                        className="text-white/80 hover:text-white transition-colors"
                     >
                        About
                     </a>
                     <a
                        href="#skills"
                        className="text-white/80 hover:text-white transition-colors"
                     >
                        Skills
                     </a>
                     <a
                        href="#projects"
                        className="text-white/80 hover:text-white transition-colors"
                     >
                        Projects
                     </a>
                     <a
                        href="#experience"
                        className="text-white/80 hover:text-white transition-colors"
                     >
                        Experience
                     </a>
                     <a
                        href="#contact"
                        className="text-white/80 hover:text-white transition-colors"
                     >
                        Contact
                     </a>
                  </div>

                  {/* Mobile menu button */}
                  <button
                     className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
                     onClick={toggleMobileMenu}
                     aria-label="Toggle mobile menu"
                  >
                     <svg
                        className={`w-6 h-6 transition-transform duration-300 ${
                           isMobileMenuOpen ? "rotate-90" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                     >
                        {isMobileMenuOpen ? (
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                           />
                        ) : (
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M4 6h16M4 12h16M4 18h16"
                           />
                        )}
                     </svg>
                  </button>
               </div>

               {/* Mobile Navigation Menu */}
               <div
                  className={`md:hidden transition-all duration-300 ease-in-out ${
                     isMobileMenuOpen
                        ? "max-h-64 opacity-100 mt-4"
                        : "max-h-0 opacity-0 overflow-hidden"
                  }`}
               >
                  <div className="bg-black/40 backdrop-blur-md rounded-lg border border-white/20 p-4">
                     <div className="flex flex-col space-y-4">
                        <a
                           href="#about"
                           className="text-white/80 hover:text-white transition-colors py-2 px-4 hover:bg-white/10 rounded-lg"
                           onClick={() => setIsMobileMenuOpen(false)}
                        >
                           About
                        </a>
                        <a
                           href="#skills"
                           className="text-white/80 hover:text-white transition-colors py-2 px-4 hover:bg-white/10 rounded-lg"
                           onClick={() => setIsMobileMenuOpen(false)}
                        >
                           Skills
                        </a>
                        <a
                           href="#projects"
                           className="text-white/80 hover:text-white transition-colors py-2 px-4 hover:bg-white/10 rounded-lg"
                           onClick={() => setIsMobileMenuOpen(false)}
                        >
                           Projects
                        </a>
                        <a
                           href="#experience"
                           className="text-white/80 hover:text-white transition-colors py-2 px-4 hover:bg-white/10 rounded-lg"
                           onClick={() => setIsMobileMenuOpen(false)}
                        >
                           Experience
                        </a>
                        <a
                           href="#contact"
                           className="text-white/80 hover:text-white transition-colors py-2 px-4 hover:bg-white/10 rounded-lg"
                           onClick={() => setIsMobileMenuOpen(false)}
                        >
                           Contact
                        </a>
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
            <div className="container mx-auto px-6 z-10 relative pt-8 md:pt-0">
               <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  {/* Left side - Text content */}
                  <div className="text-center lg:text-left order-2 lg:order-1">
                     <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4">
                        Md. Faraz
                     </h1>
                     <p className="hero-subtitle text-lg sm:text-xl md:text-2xl lg:text-3xl text-red-400 mb-6">
                        Healthcare Operations Manager & Software Developer
                     </p>
                     <p className="hero-description text-base md:text-lg text-white/80 max-w-2xl mx-auto lg:mx-0 mb-8">
                        Bridging the gap between emergency healthcare services
                        and innovative technology solutions
                     </p>
                     <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <Button
                           size="lg"
                           className="bg-red-600 hover:bg-red-700 text-white"
                        >
                           <Heart className="mr-2 h-5 w-5" />
                           Healthcare Portfolio
                        </Button>
                        <Button
                           size="lg"
                           variant="outline"
                           className="border-white text-white hover:bg-white hover:text-black bg-transparent"
                        >
                           <Code className="mr-2 h-5 w-5" />
                           Development Work
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
                              alt="Md. Faraz - Healthcare Operations Manager & Software Developer"
                              className="w-64 h-80 sm:w-80 sm:h-96 md:w-96 md:h-[500px] object-cover rounded-xl shadow-lg"
                           />

                           {/* Floating badges */}
                           <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 bg-red-600 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-lg animate-bounce floating-badge">
                              Healthcare Expert
                           </div>
                           <div
                              className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 bg-blue-600 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-lg animate-bounce floating-badge"
                              style={{ animationDelay: "0.5s" }}
                           >
                              Full Stack Developer
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
                        500+
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

         {/* About Section */}
         <section id="about" ref={aboutRef} className="py-20 bg-black/30">
            <div className="container mx-auto px-6">
               <h2 className="text-4xl font-bold text-white text-center mb-16">
                  About Me
               </h2>
               <div className="grid md:grid-cols-2 gap-12 items-center">
                  <Card className="about-card floating-card bg-white/10 backdrop-blur-md border-white/20">
                     <CardContent className="p-8">
                        <div className="flex items-center mb-6">
                           <Ambulance className="h-8 w-8 text-red-400 mr-3" />
                           <h3 className="text-2xl font-bold text-white">
                              Healthcare Leadership
                           </h3>
                        </div>
                        <p className="text-white/80 leading-relaxed">
                           With extensive experience in ambulance service
                           management, I specialize in optimizing emergency
                           response systems, coordinating medical teams, and
                           ensuring life-saving services reach those in need
                           efficiently and effectively.
                        </p>
                     </CardContent>
                  </Card>

                  <Card className="about-card floating-card bg-white/10 backdrop-blur-md border-white/20">
                     <CardContent className="p-8">
                        <div className="flex items-center mb-6">
                           <Code className="h-8 w-8 text-blue-400 mr-3" />
                           <h3 className="text-2xl font-bold text-white">
                              Software Innovation
                           </h3>
                        </div>
                        <p className="text-white/80 leading-relaxed">
                           As a passionate software developer, I create digital
                           solutions that streamline healthcare operations,
                           improve patient outcomes, and bridge the technology
                           gap in medical services through innovative
                           applications.
                        </p>
                     </CardContent>
                  </Card>
               </div>
            </div>
         </section>

         {/* Skills Section */}
         <section id="skills" ref={skillsRef} className="py-20">
            <div className="container mx-auto px-6">
               <h2 className="text-4xl font-bold text-white text-center mb-16">
                  Core Competencies
               </h2>
               <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                     <h3 className="text-2xl font-bold text-red-400 mb-8">
                        Healthcare Management
                     </h3>
                     <div className="space-y-4">
                        {[
                           "Emergency Response",
                           "Team Coordination",
                           "Medical Protocols",
                           "Quality Assurance",
                           "Patient Care",
                        ].map((skill) => (
                           <Badge
                              key={skill}
                              variant="outline"
                              className="skill-item block w-full py-2 text-white border-red-400"
                           >
                              {skill}
                           </Badge>
                        ))}
                     </div>
                  </div>

                  <div className="text-center">
                     <h3 className="text-2xl font-bold text-blue-400 mb-8">
                        Technical Skills
                     </h3>
                     <div className="space-y-4">
                        {[
                           "React/Next.js",
                           "Node.js",
                           "Python",
                           "Database Design",
                           "API Development",
                        ].map((skill) => (
                           <Badge
                              key={skill}
                              variant="outline"
                              className="skill-item block w-full py-2 text-white border-blue-400"
                           >
                              {skill}
                           </Badge>
                        ))}
                     </div>
                  </div>

                  <div className="text-center">
                     <h3 className="text-2xl font-bold text-green-400 mb-8">
                        Leadership
                     </h3>
                     <div className="space-y-4">
                        {[
                           "Strategic Planning",
                           "Process Optimization",
                           "Staff Training",
                           "Crisis Management",
                           "Innovation",
                        ].map((skill) => (
                           <Badge
                              key={skill}
                              variant="outline"
                              className="skill-item block w-full py-2 text-white border-green-400"
                           >
                              {skill}
                           </Badge>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* Projects Section */}
         <section id="projects" ref={projectsRef} className="py-20 bg-black/30">
            <div className="container mx-auto px-6">
               <h2 className="text-4xl font-bold text-white text-center mb-16">
                  Featured Projects
               </h2>

               {/* Healthcare Projects */}
               <div className="mb-16">
                  <h3 className="text-2xl font-bold text-red-400 text-center mb-8 flex items-center justify-center">
                     <Heart className="mr-3 h-6 w-6" />
                     Healthcare Solutions
                  </h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                     <Card className="project-card floating-card bg-white/10 backdrop-blur-md border-white/20 hover:border-red-400/50 transition-all duration-300 group">
                        <CardContent className="p-6">
                           <div className="flex items-center mb-4">
                              <Ambulance className="h-8 w-8 text-red-400 mr-3" />
                              <h4 className="text-xl font-bold text-white">
                                 Emergency Response System
                              </h4>
                           </div>
                           <p className="text-white/80 mb-4 text-sm leading-relaxed">
                              Comprehensive ambulance dispatch and tracking
                              system that reduced response times by 35% and
                              improved patient outcomes through real-time
                              coordination.
                           </p>
                           <div className="flex flex-wrap gap-2 mb-4">
                              <Badge className="bg-red-600/20 text-red-300 border-red-400">
                                 GPS Tracking
                              </Badge>
                              <Badge className="bg-red-600/20 text-red-300 border-red-400">
                                 Real-time
                              </Badge>
                              <Badge className="bg-red-600/20 text-red-300 border-red-400">
                                 Analytics
                              </Badge>
                           </div>
                           <div className="flex justify-between items-center">
                              <span className="text-white/60 text-sm">
                                 2023
                              </span>
                              <Button
                                 size="sm"
                                 variant="outline"
                                 className="border-red-400 text-red-400 hover:bg-red-400 hover:text-white group-hover:scale-105 transition-transform bg-transparent"
                                 onClick={() => openModal("emergencyResponse")}
                              >
                                 View Details
                              </Button>
                           </div>
                        </CardContent>
                     </Card>

                     <Card className="project-card floating-card bg-white/10 backdrop-blur-md border-white/20 hover:border-red-400/50 transition-all duration-300 group">
                        <CardContent className="p-6">
                           <div className="flex items-center mb-4">
                              <Users className="h-8 w-8 text-red-400 mr-3" />
                              <h4 className="text-xl font-bold text-white">
                                 Patient Management Portal
                              </h4>
                           </div>
                           <p className="text-white/80 mb-4 text-sm leading-relaxed">
                              Digital platform for managing patient records,
                              medical history, and treatment plans with secure
                              access for healthcare providers.
                           </p>
                           <div className="flex flex-wrap gap-2 mb-4">
                              <Badge className="bg-red-600/20 text-red-300 border-red-400">
                                 HIPAA Compliant
                              </Badge>
                              <Badge className="bg-red-600/20 text-red-300 border-red-400">
                                 Secure
                              </Badge>
                              <Badge className="bg-red-600/20 text-red-300 border-red-400">
                                 Cloud-based
                              </Badge>
                           </div>
                           <div className="flex justify-between items-center">
                              <span className="text-white/60 text-sm">
                                 2023
                              </span>
                              <Button
                                 size="sm"
                                 variant="outline"
                                 className="border-red-400 text-red-400 hover:bg-red-400 hover:text-white group-hover:scale-105 transition-transform bg-transparent"
                                 onClick={() => openModal("patientManagement")}
                              >
                                 View Details
                              </Button>
                           </div>
                        </CardContent>
                     </Card>

                     <Card className="project-card floating-card bg-white/10 backdrop-blur-md border-white/20 hover:border-red-400/50 transition-all duration-300 group">
                        <CardContent className="p-6">
                           <div className="flex items-center mb-4">
                              <Award className="h-8 w-8 text-red-400 mr-3" />
                              <h4 className="text-xl font-bold text-white">
                                 Quality Assurance Dashboard
                              </h4>
                           </div>
                           <p className="text-white/80 mb-4 text-sm leading-relaxed">
                              Comprehensive monitoring system for tracking
                              service quality metrics, response times, and
                              patient satisfaction scores.
                           </p>
                           <div className="flex flex-wrap gap-2 mb-4">
                              <Badge className="bg-red-600/20 text-red-300 border-red-400">
                                 Metrics
                              </Badge>
                              <Badge className="bg-red-600/20 text-red-300 border-red-400">
                                 Reporting
                              </Badge>
                              <Badge className="bg-red-600/20 text-red-300 border-red-400">
                                 KPIs
                              </Badge>
                           </div>
                           <div className="flex justify-between items-center">
                              <span className="text-white/60 text-sm">
                                 2022
                              </span>
                              <Button
                                 size="sm"
                                 variant="outline"
                                 className="border-red-400 text-red-400 hover:bg-red-400 hover:text-white group-hover:scale-105 transition-transform bg-transparent"
                              >
                                 View Details
                              </Button>
                           </div>
                        </CardContent>
                     </Card>
                  </div>
               </div>

               {/* Software Development Projects */}
               <div>
                  <h3 className="text-2xl font-bold text-blue-400 text-center mb-8 flex items-center justify-center">
                     <Code className="mr-3 h-6 w-6" />
                     Software Development
                  </h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                     <Card className="project-card floating-card bg-white/10 backdrop-blur-md border-white/20 hover:border-blue-400/50 transition-all duration-300 group">
                        <CardContent className="p-6">
                           <div className="flex items-center mb-4">
                              <Code className="h-8 w-8 text-blue-400 mr-3" />
                              <h4 className="text-xl font-bold text-white">
                                 Healthcare API Platform
                              </h4>
                           </div>
                           <p className="text-white/80 mb-4 text-sm leading-relaxed">
                              RESTful API platform enabling seamless integration
                              between different healthcare systems and
                              third-party applications.
                           </p>
                           <div className="flex flex-wrap gap-2 mb-4">
                              <Badge className="bg-blue-600/20 text-blue-300 border-blue-400">
                                 Node.js
                              </Badge>
                              <Badge className="bg-blue-600/20 text-blue-300 border-blue-400">
                                 Express
                              </Badge>
                              <Badge className="bg-blue-600/20 text-blue-300 border-blue-400">
                                 MongoDB
                              </Badge>
                           </div>
                           <div className="flex justify-between items-center">
                              <span className="text-white/60 text-sm">
                                 2024
                              </span>
                              <div className="flex gap-2">
                                 <Button
                                    size="sm"
                                    variant="outline"
                                    className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white group-hover:scale-105 transition-transform bg-transparent"
                                 >
                                    <Github className="h-3 w-3 mr-1" />
                                    Code
                                 </Button>
                                 <Button
                                    size="sm"
                                    variant="outline"
                                    className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white group-hover:scale-105 transition-transform bg-transparent"
                                    onClick={() => openModal("healthcareApi")}
                                 >
                                    Demo
                                 </Button>
                              </div>
                           </div>
                        </CardContent>
                     </Card>

                     <Card className="project-card floating-card bg-white/10 backdrop-blur-md border-white/20 hover:border-blue-400/50 transition-all duration-300 group">
                        <CardContent className="p-6">
                           <div className="flex items-center mb-4">
                              <Phone className="h-8 w-8 text-blue-400 mr-3" />
                              <h4 className="text-xl font-bold text-white">
                                 Mobile Emergency App
                              </h4>
                           </div>
                           <p className="text-white/80 mb-4 text-sm leading-relaxed">
                              React Native mobile application for emergency
                              services with GPS location, medical information,
                              and direct ambulance dispatch.
                           </p>
                           <div className="flex flex-wrap gap-2 mb-4">
                              <Badge className="bg-blue-600/20 text-blue-300 border-blue-400">
                                 React Native
                              </Badge>
                              <Badge className="bg-blue-600/20 text-blue-300 border-blue-400">
                                 GPS
                              </Badge>
                              <Badge className="bg-blue-600/20 text-blue-300 border-blue-400">
                                 Push Notifications
                              </Badge>
                           </div>
                           <div className="flex justify-between items-center">
                              <span className="text-white/60 text-sm">
                                 2023
                              </span>
                              <div className="flex gap-2">
                                 <Button
                                    size="sm"
                                    variant="outline"
                                    className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white group-hover:scale-105 transition-transform bg-transparent"
                                 >
                                    <Github className="h-3 w-3 mr-1" />
                                    Code
                                 </Button>
                                 <Button
                                    size="sm"
                                    variant="outline"
                                    className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white group-hover:scale-105 transition-transform bg-transparent"
                                    onClick={() => openModal("mobileEmergency")}
                                 >
                                    Demo
                                 </Button>
                              </div>
                           </div>
                        </CardContent>
                     </Card>

                     <Card className="project-card floating-card bg-white/10 backdrop-blur-md border-white/20 hover:border-blue-400/50 transition-all duration-300 group">
                        <CardContent className="p-6">
                           <div className="flex items-center mb-4">
                              <MapPin className="h-8 w-8 text-blue-400 mr-3" />
                              <h4 className="text-xl font-bold text-white">
                                 Fleet Management System
                              </h4>
                           </div>
                           <p className="text-white/80 mb-4 text-sm leading-relaxed">
                              Web-based fleet management solution with real-time
                              vehicle tracking, maintenance scheduling, and
                              route optimization.
                           </p>
                           <div className="flex flex-wrap gap-2 mb-4">
                              <Badge className="bg-blue-600/20 text-blue-300 border-blue-400">
                                 React
                              </Badge>
                              <Badge className="bg-blue-600/20 text-blue-300 border-blue-400">
                                 TypeScript
                              </Badge>
                              <Badge className="bg-blue-600/20 text-blue-300 border-blue-400">
                                 PostgreSQL
                              </Badge>
                           </div>
                           <div className="flex justify-between items-center">
                              <span className="text-white/60 text-sm">
                                 2022
                              </span>
                              <div className="flex gap-2">
                                 <Button
                                    size="sm"
                                    variant="outline"
                                    className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white group-hover:scale-105 transition-transform bg-transparent"
                                 >
                                    <Github className="h-3 w-3 mr-1" />
                                    Code
                                 </Button>
                                 <Button
                                    size="sm"
                                    variant="outline"
                                    className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white group-hover:scale-105 transition-transform bg-transparent"
                                    onClick={() => openModal("fleetManagement")}
                                 >
                                    Demo
                                 </Button>
                              </div>
                           </div>
                        </CardContent>
                     </Card>

                     <Card className="project-card floating-card bg-white/10 backdrop-blur-md border-white/20 hover:border-green-400/50 transition-all duration-300 group">
                        <CardContent className="p-6">
                           <div className="flex items-center mb-4">
                              <Award className="h-8 w-8 text-green-400 mr-3" />
                              <h4 className="text-xl font-bold text-white">
                                 Data Analytics Platform
                              </h4>
                           </div>
                           <p className="text-white/80 mb-4 text-sm leading-relaxed">
                              Advanced analytics platform for healthcare data
                              visualization, predictive modeling, and
                              performance insights using machine learning.
                           </p>
                           <div className="flex flex-wrap gap-2 mb-4">
                              <Badge className="bg-green-600/20 text-green-300 border-green-400">
                                 Python
                              </Badge>
                              <Badge className="bg-green-600/20 text-green-300 border-green-400">
                                 TensorFlow
                              </Badge>
                              <Badge className="bg-green-600/20 text-green-300 border-green-400">
                                 D3.js
                              </Badge>
                           </div>
                           <div className="flex justify-between items-center">
                              <span className="text-white/60 text-sm">
                                 2024
                              </span>
                              <div className="flex gap-2">
                                 <Button
                                    size="sm"
                                    variant="outline"
                                    className="border-green-400 text-green-400 hover:bg-green-400 hover:text-white group-hover:scale-105 transition-transform bg-transparent"
                                 >
                                    <Github className="h-3 w-3 mr-1" />
                                    Code
                                 </Button>
                                 <Button
                                    size="sm"
                                    variant="outline"
                                    className="border-green-400 text-green-400 hover:bg-green-400 hover:text-white group-hover:scale-105 transition-transform bg-transparent"
                                    onClick={() => openModal("dataAnalytics")}
                                 >
                                    Demo
                                 </Button>
                              </div>
                           </div>
                        </CardContent>
                     </Card>

                     <Card className="project-card floating-card bg-white/10 backdrop-blur-md border-white/20 hover:border-purple-400/50 transition-all duration-300 group">
                        <CardContent className="p-6">
                           <div className="flex items-center mb-4">
                              <Users className="h-8 w-8 text-purple-400 mr-3" />
                              <h4 className="text-xl font-bold text-white">
                                 Telemedicine Platform
                              </h4>
                           </div>
                           <p className="text-white/80 mb-4 text-sm leading-relaxed">
                              Full-stack telemedicine solution with video
                              consultations, appointment scheduling, and
                              integrated payment processing.
                           </p>
                           <div className="flex flex-wrap gap-2 mb-4">
                              <Badge className="bg-purple-600/20 text-purple-300 border-purple-400">
                                 Next.js
                              </Badge>
                              <Badge className="bg-purple-600/20 text-purple-300 border-purple-400">
                                 WebRTC
                              </Badge>
                              <Badge className="bg-purple-600/20 text-purple-300 border-purple-400">
                                 Stripe
                              </Badge>
                           </div>
                           <div className="flex justify-between items-center">
                              <span className="text-white/60 text-sm">
                                 2023
                              </span>
                              <div className="flex gap-2">
                                 <Button
                                    size="sm"
                                    variant="outline"
                                    className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white group-hover:scale-105 transition-transform bg-transparent"
                                 >
                                    <Github className="h-3 w-3 mr-1" />
                                    Code
                                 </Button>
                                 <Button
                                    size="sm"
                                    variant="outline"
                                    className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white group-hover:scale-105 transition-transform bg-transparent"
                                 >
                                    Demo
                                 </Button>
                              </div>
                           </div>
                        </CardContent>
                     </Card>

                     <Card className="project-card floating-card bg-white/10 backdrop-blur-md border-white/20 hover:border-yellow-400/50 transition-all duration-300 group">
                        <CardContent className="p-6">
                           <div className="flex items-center mb-4">
                              <Heart className="h-8 w-8 text-yellow-400 mr-3" />
                              <h4 className="text-xl font-bold text-white">
                                 Open Source Contributions
                              </h4>
                           </div>
                           <p className="text-white/80 mb-4 text-sm leading-relaxed">
                              Contributing to open-source healthcare projects,
                              medical device integrations, and emergency
                              response frameworks.
                           </p>
                           <div className="flex flex-wrap gap-2 mb-4">
                              <Badge className="bg-yellow-600/20 text-yellow-300 border-yellow-400">
                                 Open Source
                              </Badge>
                              <Badge className="bg-yellow-600/20 text-yellow-300 border-yellow-400">
                                 Community
                              </Badge>
                              <Badge className="bg-yellow-600/20 text-yellow-300 border-yellow-400">
                                 Healthcare
                              </Badge>
                           </div>
                           <div className="flex justify-between items-center">
                              <span className="text-white/60 text-sm">
                                 Ongoing
                              </span>
                              <Button
                                 size="sm"
                                 variant="outline"
                                 className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black group-hover:scale-105 transition-transform bg-transparent"
                              >
                                 <Github className="h-3 w-3 mr-1" />
                                 Contributions
                              </Button>
                           </div>
                        </CardContent>
                     </Card>
                  </div>
               </div>

               {/* Project Stats */}
               <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center p-6 bg-gradient-to-br from-red-600/20 to-red-800/20 rounded-lg border border-red-400/30">
                     <div className="text-3xl font-bold text-red-400 mb-2">
                        15+
                     </div>
                     <div className="text-white/80 text-sm">
                        Healthcare Projects
                     </div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-blue-600/20 to-blue-800/20 rounded-lg border border-blue-400/30">
                     <div className="text-3xl font-bold text-blue-400 mb-2">
                        25+
                     </div>
                     <div className="text-white/80 text-sm">
                        Software Solutions
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
                     <div className="text-white/80 text-sm">System Uptime</div>
                  </div>
               </div>
            </div>
         </section>

         {/* Experience Section */}
         <section
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
         </section>

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
                              <h3 className="text-2xl font-bold text-white mb-6">
                                 Let's Connect
                              </h3>
                              <p className="text-white/80 mb-8">
                                 Whether you need healthcare operations
                                 consulting or software development services,
                                 I'm here to help bridge the gap between medical
                                 excellence and technological innovation.
                              </p>
                              <div className="space-y-4">
                                 <div className="flex items-center text-white/80">
                                    <Mail className="h-5 w-5 mr-3 text-red-400" />
                                    <span>faraz@healthcare.com</span>
                                 </div>
                                 <div className="flex items-center text-white/80">
                                    <Phone className="h-5 w-5 mr-3 text-red-400" />
                                    <span>+91-7380969994</span>
                                 </div>
                                 <div className="flex items-center text-white/80">
                                    <MapPin className="h-5 w-5 mr-3 text-red-400" />
                                    <span>Max Healthcare, Lucknow</span>
                                 </div>
                              </div>
                              <div className="flex space-x-4 mt-8">
                                 <Button
                                    size="sm"
                                    variant="outline"
                                    className="border-white text-white hover:bg-white hover:text-black bg-transparent"
                                 >
                                    <Github className="h-4 w-4 mr-2" />
                                    GitHub
                                 </Button>
                                 <Button
                                    size="sm"
                                    variant="outline"
                                    className="border-white text-white hover:bg-white hover:text-black bg-transparent"
                                 >
                                    <Linkedin className="h-4 w-4 mr-2" />
                                    LinkedIn
                                 </Button>
                              </div>
                           </div>
                           <div className="space-y-6">
                              <div className="grid grid-cols-2 gap-4">
                                 <div className="text-center p-6 bg-red-600/20 rounded-lg">
                                    <Users className="h-8 w-8 text-red-400 mx-auto mb-2" />
                                    <div className="text-2xl font-bold text-white">
                                       500+
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

         {/* Project Detail Modal */}
         {isModalOpen && selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
               <div
                  className="modal-backdrop absolute inset-0 bg-black/80 backdrop-blur-sm"
                  onClick={closeModal}
               />
               <div className="modal-content relative w-full max-w-6xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-slate-900/95 to-purple-900/95 backdrop-blur-md border border-white/20 rounded-2xl">
                  <div className="sticky top-0 z-10 bg-gradient-to-r from-slate-900/90 to-purple-900/90 backdrop-blur-md border-b border-white/20 p-6">
                     <div className="flex justify-between items-start">
                        <div>
                           <h2 className="text-3xl font-bold text-white mb-2">
                              {selectedProject.title}
                           </h2>
                           <div className="flex items-center gap-4 text-white/60">
                              <Badge
                                 className={
                                    selectedProject.category === "Healthcare"
                                       ? "bg-red-600"
                                       : "bg-blue-600"
                                 }
                              >
                                 {selectedProject.category}
                              </Badge>
                              <span>{selectedProject.year}</span>
                              <span>{selectedProject.duration}</span>
                           </div>
                        </div>
                        <Button
                           variant="outline"
                           size="sm"
                           onClick={closeModal}
                           className="border-white/30 text-white hover:bg-white hover:text-black bg-transparent"
                        >
                           ✕
                        </Button>
                     </div>
                  </div>

                  <div className="p-6 space-y-8">
                     {/* Project Overview */}
                     <div className="grid lg:grid-cols-2 gap-8">
                        <div>
                           <h3 className="text-2xl font-bold text-white mb-4">
                              Project Overview
                           </h3>
                           <p className="text-white/80 leading-relaxed mb-6">
                              {selectedProject.overview}
                           </p>

                           <div className="grid grid-cols-2 gap-4 mb-6">
                              <div className="bg-white/10 rounded-lg p-4">
                                 <div className="text-white/60 text-sm">
                                    Client
                                 </div>
                                 <div className="text-white font-semibold">
                                    {selectedProject.client}
                                 </div>
                              </div>
                              <div className="bg-white/10 rounded-lg p-4">
                                 <div className="text-white/60 text-sm">
                                    Team Size
                                 </div>
                                 <div className="text-white font-semibold">
                                    {selectedProject.team}
                                 </div>
                              </div>
                              <div className="bg-white/10 rounded-lg p-4">
                                 <div className="text-white/60 text-sm">
                                    Duration
                                 </div>
                                 <div className="text-white font-semibold">
                                    {selectedProject.duration}
                                 </div>
                              </div>
                              <div className="bg-white/10 rounded-lg p-4">
                                 <div className="text-white/60 text-sm">
                                    My Role
                                 </div>
                                 <div className="text-white font-semibold">
                                    {selectedProject.role}
                                 </div>
                              </div>
                           </div>
                        </div>

                        <div>
                           <img
                              src={
                                 selectedProject.screenshot ||
                                 "/placeholder.svg"
                              }
                              alt={`${selectedProject.title} Screenshot`}
                              className="w-full rounded-lg border border-white/20 shadow-2xl"
                           />
                        </div>
                     </div>

                     {/* Problem & Solution */}
                     <div className="grid lg:grid-cols-2 gap-8">
                        <Card className="bg-red-600/10 border-red-400/30">
                           <CardContent className="p-6">
                              <h3 className="text-xl font-bold text-red-400 mb-4">
                                 The Problem
                              </h3>
                              <p className="text-white/80 leading-relaxed">
                                 {selectedProject.problem}
                              </p>
                           </CardContent>
                        </Card>

                        <Card className="bg-green-600/10 border-green-400/30">
                           <CardContent className="p-6">
                              <h3 className="text-xl font-bold text-green-400 mb-4">
                                 The Solution
                              </h3>
                              <p className="text-white/80 leading-relaxed">
                                 {selectedProject.solution}
                              </p>
                           </CardContent>
                        </Card>
                     </div>

                     {/* Technical Specifications */}
                     <div>
                        <h3 className="text-2xl font-bold text-white mb-6">
                           Technical Specifications
                        </h3>
                        <div className="grid lg:grid-cols-2 gap-8">
                           <div>
                              <h4 className="text-lg font-semibold text-blue-400 mb-4">
                                 Technology Stack
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                 {selectedProject.technologies.map(
                                    (tech, index) => (
                                       <Badge
                                          key={index}
                                          className="bg-blue-600/20 text-blue-300 border-blue-400"
                                       >
                                          {tech}
                                       </Badge>
                                    )
                                 )}
                              </div>
                           </div>

                           <div>
                              <h4 className="text-lg font-semibold text-purple-400 mb-4">
                                 Key Features
                              </h4>
                              <ul className="space-y-2">
                                 {selectedProject.features.map(
                                    (feature, index) => (
                                       <li
                                          key={index}
                                          className="text-white/80 flex items-start"
                                       >
                                          <span className="text-purple-400 mr-2">
                                             •
                                          </span>
                                          {feature}
                                       </li>
                                    )
                                 )}
                              </ul>
                           </div>
                        </div>
                     </div>

                     {/* Metrics & Results */}
                     <div>
                        <h3 className="text-2xl font-bold text-white mb-6">
                           Key Metrics & Results
                        </h3>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                           {Object.entries(selectedProject.metrics).map(
                              ([key, value], index) => (
                                 <div
                                    key={index}
                                    className="bg-gradient-to-br from-yellow-600/20 to-orange-600/20 rounded-lg p-4 border border-yellow-400/30"
                                 >
                                    <div className="text-yellow-400 text-2xl font-bold mb-1">
                                       {value}
                                    </div>
                                    <div className="text-white/80 text-sm capitalize">
                                       {key.replace(/([A-Z])/g, " $1").trim()}
                                    </div>
                                 </div>
                              )
                           )}
                        </div>
                     </div>

                     {/* Challenges & Outcomes */}
                     <div className="grid lg:grid-cols-2 gap-8">
                        <div>
                           <h3 className="text-xl font-bold text-orange-400 mb-4">
                              Challenges Overcome
                           </h3>
                           <ul className="space-y-3">
                              {selectedProject.challenges.map(
                                 (challenge, index) => (
                                    <li
                                       key={index}
                                       className="text-white/80 flex items-start"
                                    >
                                       <span className="text-orange-400 mr-2 mt-1">
                                          ⚡
                                       </span>
                                       {challenge}
                                    </li>
                                 )
                              )}
                           </ul>
                        </div>

                        <div>
                           <h3 className="text-xl font-bold text-green-400 mb-4">
                              Project Outcomes
                           </h3>
                           <ul className="space-y-3">
                              {selectedProject.outcomes.map(
                                 (outcome, index) => (
                                    <li
                                       key={index}
                                       className="text-white/80 flex items-start"
                                    >
                                       <span className="text-green-400 mr-2 mt-1">
                                          ✓
                                       </span>
                                       {outcome}
                                    </li>
                                 )
                              )}
                           </ul>
                        </div>
                     </div>

                     {/* Case Study Impact */}
                     <Card className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 border-purple-400/30">
                        <CardContent className="p-6">
                           <h3 className="text-2xl font-bold text-white mb-4">
                              Project Impact
                           </h3>
                           <p className="text-white/80 leading-relaxed">
                              This project demonstrates the successful
                              integration of healthcare expertise with
                              cutting-edge technology. By understanding the
                              unique challenges faced by healthcare
                              professionals and combining that knowledge with
                              modern software development practices, we were
                              able to create a solution that not only met
                              technical requirements but also significantly
                              improved patient outcomes and operational
                              efficiency.
                           </p>
                        </CardContent>
                     </Card>
                  </div>
               </div>
            </div>
         )}

         {/* Footer */}
         <footer className="py-8 bg-black/50 border-t border-white/10">
            <div className="container mx-auto px-6 text-center">
               <p className="text-white/60">
                  © 2024 Md. Faraz. Saving lives through healthcare excellence
                  and technological innovation.
               </p>
            </div>
         </footer>
      </div>
   );
}
