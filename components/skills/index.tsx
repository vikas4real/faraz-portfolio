import { Badge } from "lucide-react";
import React, { useRef } from "react";

function Skills() {
   const skillsRef = useRef<HTMLDivElement>(null);

   return (
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
   );
}

export default Skills;
