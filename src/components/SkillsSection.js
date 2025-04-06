'use client';

export default function SkillsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-secondary mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Technical Skills */}
          <div className="bg-offWhite p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-primary mb-6">Technical Skills</h3>
            
            <div className="space-y-8">
              {/* Laboratory Techniques */}
              <div>
                <h4 className="text-xl font-semibold text-secondary mb-4">Laboratory Techniques</h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 font-medium">Analytical Chemistry</span>
                      <span className="text-gray-600">90%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-secondary h-2.5 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 font-medium">Spectroscopy</span>
                      <span className="text-gray-600">85%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-secondary h-2.5 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 font-medium">Chromatography</span>
                      <span className="text-gray-600">80%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-secondary h-2.5 rounded-full" style={{ width: '80%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 font-medium">Sample Preparation</span>
                      <span className="text-gray-600">95%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-secondary h-2.5 rounded-full" style={{ width: '95%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 font-medium">[Add Custom Skill]</span>
                      <span className="text-gray-600">[Proficiency %]</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-secondary h-2.5 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Instrumentation */}
              <div>
                <h4 className="text-xl font-semibold text-secondary mb-4">Instrumentation</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-primary rounded-full mr-2"></div>
                    <span className="text-gray-700">HPLC</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-primary rounded-full mr-2"></div>
                    <span className="text-gray-700">GC-MS</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-primary rounded-full mr-2"></div>
                    <span className="text-gray-700">FTIR</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-primary rounded-full mr-2"></div>
                    <span className="text-gray-700">UV-Vis</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-primary rounded-full mr-2"></div>
                    <span className="text-gray-700">NMR</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-primary rounded-full mr-2"></div>
                    <span className="text-gray-700">[Add Instrument]</span>
                  </div>
                </div>
              </div>
              
              {/* Software Proficiency */}
              <div>
                <h4 className="text-xl font-semibold text-secondary mb-4">Software Proficiency</h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 font-medium">ChemDraw</span>
                      <span className="text-gray-600">90%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-secondary h-2.5 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 font-medium">MATLAB</span>
                      <span className="text-gray-600">75%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-secondary h-2.5 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 font-medium">R Programming</span>
                      <span className="text-gray-600">70%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-secondary h-2.5 rounded-full" style={{ width: '70%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 font-medium">[Add Software]</span>
                      <span className="text-gray-600">[Proficiency %]</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-secondary h-2.5 rounded-full" style={{ width: '80%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Professional Skills */}
          <div className="bg-offWhite p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-primary mb-6">Professional Skills</h3>
            
            <div className="space-y-8">
              {/* Research & Analysis */}
              <div>
                <h4 className="text-xl font-semibold text-secondary mb-4">Research & Analysis</h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 font-medium">Data Analysis</span>
                      <span className="text-gray-600">85%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-secondary h-2.5 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 font-medium">Experimental Design</span>
                      <span className="text-gray-600">80%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-secondary h-2.5 rounded-full" style={{ width: '80%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 font-medium">Scientific Literature Review</span>
                      <span className="text-gray-600">90%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-secondary h-2.5 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 font-medium">[Add Research Skill]</span>
                      <span className="text-gray-600">[Proficiency %]</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-secondary h-2.5 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Communication */}
              <div>
                <h4 className="text-xl font-semibold text-secondary mb-4">Communication</h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 font-medium">Technical Writing</span>
                      <span className="text-gray-600">85%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-secondary h-2.5 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 font-medium">Presentation Skills</span>
                      <span className="text-gray-600">80%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-secondary h-2.5 rounded-full" style={{ width: '80%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 font-medium">Team Collaboration</span>
                      <span className="text-gray-600">90%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-secondary h-2.5 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Other Professional Skills */}
              <div>
                <h4 className="text-xl font-semibold text-secondary mb-4">Additional Skills</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-primary rounded-full mr-2"></div>
                    <span className="text-gray-700">Project Management</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-primary rounded-full mr-2"></div>
                    <span className="text-gray-700">Problem Solving</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-primary rounded-full mr-2"></div>
                    <span className="text-gray-700">Critical Thinking</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-primary rounded-full mr-2"></div>
                    <span className="text-gray-700">Time Management</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-primary rounded-full mr-2"></div>
                    <span className="text-gray-700">Attention to Detail</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-primary rounded-full mr-2"></div>
                    <span className="text-gray-700">[Add Skill]</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Languages Section */}
        <div className="mt-10 bg-offWhite p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-primary mb-6">Languages</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary text-white text-2xl font-bold mb-4">
                100%
              </div>
              <h4 className="text-lg font-semibold text-secondary">English</h4>
              <p className="text-gray-600">Native</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary text-white text-2xl font-bold mb-4">
                [%]
              </div>
              <h4 className="text-lg font-semibold text-secondary">[Language]</h4>
              <p className="text-gray-600">[Proficiency Level]</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary text-white text-2xl font-bold mb-4">
                [%]
              </div>
              <h4 className="text-lg font-semibold text-secondary">[Language]</h4>
              <p className="text-gray-600">[Proficiency Level]</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
