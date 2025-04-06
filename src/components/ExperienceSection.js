'use client';

import React from 'react';
import { motion } from 'framer-motion';

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-off-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Professional Experience</h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-6"></div>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-10">
          <div className="flex flex-col md:flex-row justify-between mb-6">
            <div>
              <h3 className="text-2xl font-semibold text-primary">Chemistry Intern</h3>
              <p className="text-secondary font-medium">Suncor - Syncrude</p>
            </div>
            <div className="mt-2 md:mt-0">
              <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">Year 3 (Full Year)</span>
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-medium text-secondary mb-2">Overview</h4>
              <p className="text-gray-700">
                Completed a comprehensive year-long internship at Suncor - Syncrude as part of the University of Alberta's Cooperative Education Program. 
                Gained valuable hands-on experience in industrial chemistry applications while contributing to real-world projects in the energy sector.
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-medium text-secondary mb-2">Responsibilities</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Conducted analytical testing using FTIR (Main infrared ATR, Near infrared gun) for sample characterization</li>
                <li>Performed water content analysis using Karl Fisher titration techniques</li>
                <li>Operated DMA 5001 density meter (Anton Paar) for precise density measurements</li>
                <li>Implemented Dean & Stark method for water content determination in oil samples</li>
                <li>Executed CPA procedures including riffling, grinding, and shuddering for sample preparation</li>
                <li>Conducted AEH separation techniques using paint shake and centrifuge (2200rpm, 12min) to separate bitumen extract and obtain water layers</li>
                <li>Operated Clora equipment for chlorine concentration determination and built calibration curves</li>
                <li>Utilized LIMS system for data management and sample tracking</li>
                <li>Documented experimental results and prepared technical reports</li>
                <li>Participated in safety protocols and environmental monitoring activities</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-medium text-secondary mb-4">Key Projects</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-off-white p-6 rounded-lg">
                  <h5 className="text-lg font-semibold text-primary mb-2">[Project Title 1]</h5>
                  <p className="text-gray-700">
                    [Detailed description of a significant project you worked on during your internship. Include your role, the objectives, methodologies used, and outcomes achieved.]
                  </p>
                </div>
                
                <div className="bg-off-white p-6 rounded-lg">
                  <h5 className="text-lg font-semibold text-primary mb-2">[Project Title 2]</h5>
                  <p className="text-gray-700">
                    [Detailed description of another project you contributed to. Highlight specific chemistry techniques or analyses you performed and how they contributed to the project's success.]
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-medium text-secondary mb-4">Skills Developed</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 className="text-lg font-semibold text-primary mb-2">Technical Skills</h5>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Spectroscopic analysis (FTIR)</li>
                    <li>Water content determination methods</li>
                    <li>Density measurement techniques</li>
                    <li>Sample preparation and handling</li>
                    <li>Separation techniques</li>
                    <li>Analytical instrumentation operation</li>
                    <li>Laboratory data management (LIMS)</li>
                    <li>Quality control procedures</li>
                    <li>Laboratory safety protocols</li>
                  </ul>
                </div>
                
                <div>
                  <h5 className="text-lg font-semibold text-primary mb-2">Professional Skills</h5>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Technical report writing</li>
                    <li>Team collaboration</li>
                    <li>Project management</li>
                    <li>Problem-solving in industrial settings</li>
                    <li>Data analysis and interpretation</li>
                    <li>Quality assurance</li>
                    <li>Time management</li>
                    <li>Communication with technical teams</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-medium text-secondary mb-2">Achievements</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>[Specific achievement or recognition during your internship]</li>
                <li>[Contribution to a successful project or initiative]</li>
                <li>[Any improvements or innovations you implemented]</li>
                <li>[Add more achievements as needed]</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8 opacity-50">
          <div className="flex flex-col md:flex-row justify-between mb-6">
            <div>
              <h3 className="text-2xl font-semibold text-primary">[Position Title]</h3>
              <p className="text-secondary font-medium">[Company/Organization Name]</p>
            </div>
            <div className="mt-2 md:mt-0">
              <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">[Employment Period]</span>
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-medium text-secondary mb-2">Overview</h4>
              <p className="text-gray-700">
                [Brief description of the role and your overall responsibilities]
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-medium text-secondary mb-2">Responsibilities</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>[Key responsibility 1]</li>
                <li>[Key responsibility 2]</li>
                <li>[Key responsibility 3]</li>
                <li>[Add more responsibilities as needed]</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-medium text-secondary mb-2">Achievements</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>[Achievement 1]</li>
                <li>[Achievement 2]</li>
                <li>[Add more achievements as needed]</li>
              </ul>
            </div>
          </div>
        </div>
        
        <p className="text-center text-gray-500 italic mt-8">Add as many experience entries as needed to showcase your professional journey</p>
      </div>
    </section>
  );
};

export default ExperienceSection;
