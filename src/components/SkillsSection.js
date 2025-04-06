'use client';

import React from 'react';
import { motion } from 'framer-motion';

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Skills & Expertise</h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-primary mb-6">Technical Skills</h3>
            
            <div className="mb-10">
              <h4 className="text-xl font-medium text-secondary mb-4">Laboratory Techniques</h4>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Analytical Chemistry</span>
                    <span>90%</span>
                  </div>
                  <div className="w-full bg-light-gray rounded-full h-2.5">
                    <div className="bg-primary h-2.5 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Spectroscopy</span>
                    <span>85%</span>
                  </div>
                  <div className="w-full bg-light-gray rounded-full h-2.5">
                    <div className="bg-primary h-2.5 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Water Content Analysis</span>
                    <span>88%</span>
                  </div>
                  <div className="w-full bg-light-gray rounded-full h-2.5">
                    <div className="bg-primary h-2.5 rounded-full" style={{ width: '88%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Sample Preparation</span>
                    <span>95%</span>
                  </div>
                  <div className="w-full bg-light-gray rounded-full h-2.5">
                    <div className="bg-primary h-2.5 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Separation Techniques</span>
                    <span>85%</span>
                  </div>
                  <div className="w-full bg-light-gray rounded-full h-2.5">
                    <div className="bg-primary h-2.5 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mb-10">
              <h4 className="text-xl font-medium text-secondary mb-4">Instrumentation</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-light-gray text-primary rounded-full text-sm font-medium">FTIR (ATR & NIR)</span>
                <span className="px-3 py-1 bg-light-gray text-primary rounded-full text-sm font-medium">Karl Fisher</span>
                <span className="px-3 py-1 bg-light-gray text-primary rounded-full text-sm font-medium">DMA 5001</span>
                <span className="px-3 py-1 bg-light-gray text-primary rounded-full text-sm font-medium">Dean & Stark</span>
                <span className="px-3 py-1 bg-light-gray text-primary rounded-full text-sm font-medium">CPA</span>
                <span className="px-3 py-1 bg-light-gray text-primary rounded-full text-sm font-medium">AEH</span>
                <span className="px-3 py-1 bg-light-gray text-primary rounded-full text-sm font-medium">Clora</span>
                <span className="px-3 py-1 bg-light-gray text-primary rounded-full text-sm font-medium">LIMS</span>
                <span className="px-3 py-1 bg-light-gray text-primary rounded-full text-sm font-medium">Centrifuge</span>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-medium text-secondary mb-4">Software Proficiency</h4>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">ChemDraw</span>
                    <span>90%</span>
                  </div>
                  <div className="w-full bg-light-gray rounded-full h-2.5">
                    <div className="bg-primary h-2.5 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">LIMS</span>
                    <span>85%</span>
                  </div>
                  <div className="w-full bg-light-gray rounded-full h-2.5">
                    <div className="bg-primary h-2.5 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">MATLAB</span>
                    <span>75%</span>
                  </div>
                  <div className="w-full bg-light-gray rounded-full h-2.5">
                    <div className="bg-primary h-2.5 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">R Programming</span>
                    <span>70%</span>
                  </div>
                  <div className="w-full bg-light-gray rounded-full h-2.5">
                    <div className="bg-primary h-2.5 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-primary mb-6">Professional Skills</h3>
            
            <div className="mb-10">
              <h4 className="text-xl font-medium text-secondary mb-4">Research & Analysis</h4>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Data Analysis</span>
                    <span>85%</span>
                  </div>
                  <div className="w-full bg-light-gray rounded-full h-2.5">
                    <div className="bg-primary h-2.5 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Experimental Design</span>
                    <span>80%</span>
                  </div>
                  <div className="w-full bg-light-gray rounded-full h-2.5">
                    <div className="bg-primary h-2.5 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Scientific Literature Review</span>
                    <span>90%</span>
                  </div>
                  <div className="w-full bg-light-gray rounded-full h-2.5">
                    <div className="bg-primary h-2.5 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Calibration Curve Development</span>
                    <span>85%</span>
                  </div>
                  <div className="w-full bg-light-gray rounded-full h-2.5">
                    <div className="bg-primary h-2.5 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mb-10">
              <h4 className="text-xl font-medium text-secondary mb-4">Communication</h4>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Technical Writing</span>
                    <span>85%</span>
                  </div>
                  <div className="w-full bg-light-gray rounded-full h-2.5">
                    <div className="bg-primary h-2.5 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Presentation Skills</span>
                    <span>80%</span>
                  </div>
                  <div className="w-full bg-light-gray rounded-full h-2.5">
                    <div className="bg-primary h-2.5 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Team Collaboration</span>
                    <span>90%</span>
                  </div>
                  <div className="w-full bg-light-gray rounded-full h-2.5">
                    <div className="bg-primary h-2.5 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-medium text-secondary mb-4">Additional Skills</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-light-gray text-primary rounded-full text-sm font-medium">Project Management</span>
                <span className="px-3 py-1 bg-light-gray text-primary rounded-full text-sm font-medium">Problem Solving</span>
                <span className="px-3 py-1 bg-light-gray text-primary rounded-full text-sm font-medium">Critical Thinking</span>
                <span className="px-3 py-1 bg-light-gray text-primary rounded-full text-sm font-medium">Time Management</span>
                <span className="px-3 py-1 bg-light-gray text-primary rounded-full text-sm font-medium">Attention to Detail</span>
                <span className="px-3 py-1 bg-light-gray text-primary rounded-full text-sm font-medium">Quality Control</span>
                <span className="px-3 py-1 bg-light-gray text-primary rounded-full text-sm font-medium">Laboratory Safety</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-primary mb-6 text-center">Languages</h3>
          <div className="flex flex-wrap justify-center gap-10">
            <div className="text-center">
              <div className="w-24 h-24 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mx-auto mb-3">100%</div>
              <h4 className="text-lg font-medium text-primary">English</h4>
              <p className="text-gray-600">Native</p>
            </div>
            
            <div className="text-center opacity-50">
              <div className="w-24 h-24 rounded-full bg-light-gray text-primary flex items-center justify-center text-xl font-bold mx-auto mb-3">[%]</div>
              <h4 className="text-lg font-medium text-primary">[Language]</h4>
              <p className="text-gray-600">[Proficiency]</p>
            </div>
            
            <div className="text-center opacity-50">
              <div className="w-24 h-24 rounded-full bg-light-gray text-primary flex items-center justify-center text-xl font-bold mx-auto mb-3">[%]</div>
              <h4 className="text-lg font-medium text-primary">[Language]</h4>
              <p className="text-gray-600">[Proficiency]</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
