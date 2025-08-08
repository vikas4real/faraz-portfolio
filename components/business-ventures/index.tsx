import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
   Heart,
   Ambulance,
   Building2,
   Phone,
   MapPin,
   Clock,
   Shield,
   Stethoscope,
   Truck,
   Hospital,
   Users,
   Activity,
   Headphones,
   Plane,
   Train,
   Navigation,
   Wrench,
   Package,
   X,
} from "lucide-react";

const BusinessVentures = () => {
   const [activeModal, setActiveModal] = useState(null);

   const openModal = (modalId) => {
      setActiveModal(modalId);
   };

   const closeModal = () => {
      setActiveModal(null);
   };

   const modalContent = {
      homeHealth: {
         title: "Home Health Support (HHS)",
         description:
            "Comprehensive home healthcare services providing professional medical care in the comfort of your home.",
         features: [
            "24/7 Home ICU monitoring and support",
            "Professional nursing care services",
            "Specialized medical care programs",
            "B2B healthcare partnerships",
            "Direct consumer healthcare solutions",
            "Emergency response protocols",
         ],
      },
      medicareAmbulance: {
         title: "Medicare Ambulance Services",
         description:
            "Advanced emergency medical transportation with comprehensive coverage and state-of-the-art technology.",
         features: [
            "Ground ambulance services",
            "Air medical evacuation",
            "Train medical transport",
            "Corporate medical coverage",
            "Real-time GPS tracking",
            "24/7 emergency call center",
         ],
      },
      surgicalWholesale: {
         title: "Surgical Wholesale Mart",
         description:
            "Complete healthcare infrastructure solutions from planning to implementation.",
         features: [
            "Hospital construction and planning",
            "Operating theater setup and design",
            "Diagnostic equipment installation",
            "ICU unit construction",
            "B2B medical equipment supply",
            "Maintenance and support services",
         ],
      },
   };

   return (
      <div className="mb-16">
         {/* Business Ventures */}
         <div>
            <h3 className="text-3xl font-bold text-blue-400 text-center mb-12 flex items-center justify-center">
               <Building2 className="mr-3 h-8 w-8" />
               Business Ventures
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
               {/* Home Health Support */}
               <Card className="project-card floating-card bg-white/10 backdrop-blur-md border-white/20 hover:border-blue-400/50 transition-all duration-300 group hover:scale-105">
                  <CardContent className="p-6">
                     <div className="flex items-center mb-4">
                        <Heart className="h-8 w-8 text-blue-400 mr-3" />
                        <h4 className="text-xl font-bold text-white">
                           Home Health Support (HHS)
                        </h4>
                     </div>
                     <p className="text-white/80 mb-4 text-sm leading-relaxed">
                        Comprehensive home healthcare services providing
                        professional ICU, nursing, and medical care directly to
                        patients in their homes. Serving both B2B healthcare
                        partnerships and direct consumer needs.
                     </p>
                     <div className="flex flex-wrap gap-2 mb-4">
                        <Badge className="bg-blue-600/20 text-blue-300 border-blue-400">
                           <Stethoscope className="h-3 w-3 mr-1" />
                           Home ICU
                        </Badge>
                        <Badge className="bg-blue-600/20 text-blue-300 border-blue-400">
                           <Users className="h-3 w-3 mr-1" />
                           Nursing Care
                        </Badge>
                        <Badge className="bg-blue-600/20 text-blue-300 border-blue-400">
                           <Shield className="h-3 w-3 mr-1" />
                           B2B & B2C
                        </Badge>
                     </div>
                     <div className="flex justify-between items-center">
                        <span className="text-white/60 text-sm font-medium">
                           Director
                        </span>
                        <div className="flex gap-2">
                           <Button
                              size="sm"
                              variant="outline"
                              className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white group-hover:scale-105 transition-transform bg-transparent"
                           >
                              <Phone className="h-3 w-3 mr-1" />
                              Contact
                           </Button>
                           <Button
                              size="sm"
                              variant="outline"
                              className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white group-hover:scale-105 transition-transform bg-transparent"
                              onClick={() => openModal("homeHealth")}
                           >
                              Details
                           </Button>
                        </div>
                     </div>
                  </CardContent>
               </Card>

               {/* Medicare Ambulance */}
               <Card className="project-card floating-card bg-white/10 backdrop-blur-md border-white/20 hover:border-green-400/50 transition-all duration-300 group hover:scale-105">
                  <CardContent className="p-6">
                     <div className="flex items-center mb-4">
                        <Ambulance className="h-8 w-8 text-green-400 mr-3" />
                        <h4 className="text-xl font-bold text-white">
                           Medicare Ambulance
                        </h4>
                     </div>
                     <p className="text-white/80 mb-4 text-sm leading-relaxed">
                        Advanced emergency medical transportation services
                        including ground ambulance, air and train medical
                        evacuation, corporate coverage with GPS tracking and
                        24/7 emergency response.
                     </p>
                     <div className="flex flex-wrap gap-2 mb-4">
                        <Badge className="bg-green-600/20 text-green-300 border-green-400">
                           <Ambulance className="h-3 w-3 mr-1" />
                           Emergency
                        </Badge>
                        <Badge className="bg-green-600/20 text-green-300 border-green-400">
                           <Plane className="h-3 w-3 mr-1" />
                           Air Medevac
                        </Badge>
                        <Badge className="bg-green-600/20 text-green-300 border-green-400">
                           <Navigation className="h-3 w-3 mr-1" />
                           GPS Tracking
                        </Badge>
                     </div>
                     <div className="flex justify-between items-center">
                        <span className="text-white/60 text-sm font-medium">
                           Project Manager
                        </span>
                        <div className="flex gap-2">
                           <Button
                              size="sm"
                              variant="outline"
                              className="border-green-400 text-green-400 hover:bg-green-400 hover:text-white group-hover:scale-105 transition-transform bg-transparent"
                           >
                              <Headphones className="h-3 w-3 mr-1" />
                              24/7 Support
                           </Button>
                           <Button
                              size="sm"
                              variant="outline"
                              className="border-green-400 text-green-400 hover:bg-green-400 hover:text-white group-hover:scale-105 transition-transform bg-transparent"
                              onClick={() => openModal("medicareAmbulance")}
                           >
                              Details
                           </Button>
                        </div>
                     </div>
                  </CardContent>
               </Card>

               {/* Surgical Wholesale Mart */}
               <Card className="project-card floating-card bg-white/10 backdrop-blur-md border-white/20 hover:border-purple-400/50 transition-all duration-300 group hover:scale-105">
                  <CardContent className="p-6">
                     <div className="flex items-center mb-4">
                        <Hospital className="h-8 w-8 text-purple-400 mr-3" />
                        <h4 className="text-xl font-bold text-white">
                           Surgical Wholesale Mart
                        </h4>
                     </div>
                     <p className="text-white/80 mb-4 text-sm leading-relaxed">
                        Complete healthcare infrastructure solutions including
                        hospital construction, operating theater setup,
                        diagnostic equipment, ICU units, and comprehensive B2B
                        medical equipment supply.
                     </p>
                     <div className="flex flex-wrap gap-2 mb-4">
                        <Badge className="bg-purple-600/20 text-purple-300 border-purple-400">
                           <Building2 className="h-3 w-3 mr-1" />
                           Construction
                        </Badge>
                        <Badge className="bg-purple-600/20 text-purple-300 border-purple-400">
                           <Activity className="h-3 w-3 mr-1" />
                           OT Setup
                        </Badge>
                        <Badge className="bg-purple-600/20 text-purple-300 border-purple-400">
                           <Package className="h-3 w-3 mr-1" />
                           Equipment
                        </Badge>
                     </div>
                     <div className="flex justify-between items-center">
                        <span className="text-white/60 text-sm font-medium">
                           Coordinator
                        </span>
                        <div className="flex gap-2">
                           <Button
                              size="sm"
                              variant="outline"
                              className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white group-hover:scale-105 transition-transform bg-transparent"
                           >
                              <Wrench className="h-3 w-3 mr-1" />
                              Services
                           </Button>
                           <Button
                              size="sm"
                              variant="outline"
                              className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white group-hover:scale-105 transition-transform bg-transparent"
                              onClick={() => openModal("surgicalWholesale")}
                           >
                              Details
                           </Button>
                        </div>
                     </div>
                  </CardContent>
               </Card>
            </div>
         </div>

         {/* Modal */}
         {activeModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
               <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6 max-w-md w-full max-h-[80vh] overflow-y-auto">
                  <div className="flex justify-between items-center mb-4">
                     <h3 className="text-xl font-bold text-white">
                        {modalContent[activeModal]?.title}
                     </h3>
                     <Button
                        size="sm"
                        variant="ghost"
                        onClick={closeModal}
                        className="text-white hover:bg-white/20"
                     >
                        <X className="h-4 w-4" />
                     </Button>
                  </div>
                  <p className="text-white/80 mb-4 text-sm leading-relaxed">
                     {modalContent[activeModal]?.description}
                  </p>
                  <div className="space-y-2">
                     <h4 className="text-lg font-semibold text-white mb-2">
                        Key Services:
                     </h4>
                     {modalContent[activeModal]?.features.map(
                        (feature, index) => (
                           <div key={index} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-white/70 text-sm">
                                 {feature}
                              </span>
                           </div>
                        )
                     )}
                  </div>
               </div>
            </div>
         )}
      </div>
   );
};

export default BusinessVentures;
