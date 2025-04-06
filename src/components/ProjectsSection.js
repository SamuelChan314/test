'use client';

import { useState, useEffect } from 'react';

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState(0);
  
  // Sample project data - to be customized by the user
  const projects = [
    {
      title: "Research Project 1",
      category: "Academic Research",
      description: "This is a template for your chemistry research projects. Describe your research objectives, methodologies, and findings. Include any significant contributions to the field and technologies or techniques used.",
      image: "/placeholder.jpg", // Placeholder - to be replaced
      skills: ["Analytical Chemistry", "Data Analysis", "Research Methods"]
    },
    {
      title: "Laboratory Experiment",
      category: "University Project",
      description: "Describe a significant laboratory experiment you conducted as part of your studies. Explain the purpose, procedure, results, and conclusions. Highlight any innovative approaches or challenges you overcame.",
      image: "/placeholder.jpg", // Placeholder - to be replaced
      skills: ["Laboratory Techniques", "Experimental Design", "Documentation"]
    },
    {
      title: "Syncrude Project",
      category: "Internship Work",
      description: "Detail a specific project you worked on during your internship at Suncor - Syncrude. Explain your role, the project objectives, methodologies used, and outcomes achieved. Highlight the real-world impact of your work.",
      image: "/placeholder.jpg", // Placeholder - to be replaced
      skills: ["Industrial Chemistry", "Quality Control", "Team Collaboration"]
    }
  ];

  // Auto-rotate projects every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProject((prev) => (prev + 1) % projects.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [projects.length]);

  return (
    <section className="py-16 bg-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Projects & Research</h2>
          <div className="w-24 h-1 bg-secondary mx-auto"></div>
          <p className="mt-4 text-lg text-offWhite">
            Explore my academic and professional projects
          </p>
        </div>
        
        <div className="relative">
          {/* Project Showcase */}
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Project Image */}
              <div className="h-64 md:h-auto bg-lightGray flex items-center justify-center">
                <span className="text-primary text-lg">Project Image</span>
              </div>
              
              {/* Project Details */}
              <div className="p-8">
                <div className="animate-fade-in">
                  <span className="inline-block px-3 py-1 bg-secondary text-white text-sm rounded-full mb-4">
                    {projects[activeProject].category}
                  </span>
                  <h3 className="text-2xl font-semibold text-primary mb-4">
                    {projects[activeProject].title}
                  </h3>
                  <p className="text-gray-700 mb-6">
                    {projects[activeProject].description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {projects[activeProject].skills.map((skill, index) => (
                      <span 
                        key={index} 
                        className="px-3 py-1 bg-lightGray text-primary text-sm rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <button className="px-6 py-2 bg-primary text-white rounded-md hover:bg-secondary transition duration-300">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Project Navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveProject(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeProject === index ? 'bg-white w-6' : 'bg-white/50'
                }`}
                aria-label={`View project ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* Add Project Template */}
        <div className="mt-16 text-center">
          <p className="text-offWhite mb-4">
            Add as many projects as you'd like to showcase your work
          </p>
          <button className="px-6 py-3 border-2 border-white text-white font-medium rounded-md hover:bg-white hover:text-primary transition duration-300">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}
