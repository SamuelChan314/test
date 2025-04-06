'use client';

export default function ExperienceSection() {
  return (
    <section className="py-16 bg-lightGray">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Professional Experience</h2>
          <div className="w-24 h-1 bg-secondary mx-auto"></div>
        </div>
        
        {/* Suncor - Syncrude Internship */}
        <div className="bg-white p-8 rounded-lg shadow-md mb-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <h3 className="text-2xl font-semibold text-primary">Chemistry Intern</h3>
              <p className="text-xl text-secondary font-medium">Suncor - Syncrude</p>
            </div>
            <div className="mt-2 md:mt-0">
              <span className="inline-block bg-primary text-white px-4 py-2 rounded-md">
                Year 3 (Full Year)
              </span>
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-semibold text-secondary mb-3">Overview</h4>
              <p className="text-lg text-gray-700">
                Completed a comprehensive year-long internship at Suncor - Syncrude as part of the University of Alberta's Cooperative Education Program. Gained valuable hands-on experience in industrial chemistry applications while contributing to real-world projects in the energy sector.
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold text-secondary mb-3">Responsibilities</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Assisted in laboratory analysis of oil sands samples using advanced analytical techniques</li>
                <li>Conducted quality control testing on various chemical processes</li>
                <li>Collaborated with senior chemists on optimization of extraction procedures</li>
                <li>Documented experimental results and prepared technical reports</li>
                <li>Participated in safety protocols and environmental monitoring activities</li>
                <li>[Add specific responsibilities from your internship]</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold text-secondary mb-3">Key Projects</h4>
              <div className="space-y-4">
                <div className="bg-offWhite p-4 rounded-md">
                  <h5 className="text-lg font-semibold text-primary mb-2">[Project Title 1]</h5>
                  <p className="text-gray-700">
                    [Detailed description of a significant project you worked on during your internship. Include your role, the objectives, methodologies used, and outcomes achieved.]
                  </p>
                </div>
                
                <div className="bg-offWhite p-4 rounded-md">
                  <h5 className="text-lg font-semibold text-primary mb-2">[Project Title 2]</h5>
                  <p className="text-gray-700">
                    [Detailed description of another project you contributed to. Highlight specific chemistry techniques or analyses you performed and how they contributed to the project's success.]
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold text-secondary mb-3">Skills Developed</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h5 className="text-lg font-semibold text-primary mb-2">Technical Skills</h5>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Analytical instrumentation operation</li>
                    <li>Chemical process monitoring</li>
                    <li>Quality control procedures</li>
                    <li>Laboratory safety protocols</li>
                    <li>[Add specific technical skills]</li>
                  </ul>
                </div>
                
                <div>
                  <h5 className="text-lg font-semibold text-primary mb-2">Professional Skills</h5>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Technical report writing</li>
                    <li>Team collaboration</li>
                    <li>Project management</li>
                    <li>Problem-solving in industrial settings</li>
                    <li>[Add specific professional skills]</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold text-secondary mb-3">Achievements</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>[Specific achievement or recognition during your internship]</li>
                <li>[Contribution to a successful project or initiative]</li>
                <li>[Any improvements or innovations you implemented]</li>
                <li>[Add more achievements as needed]</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Template for Additional Experience */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <h3 className="text-2xl font-semibold text-primary">[Position Title]</h3>
              <p className="text-xl text-secondary font-medium">[Company/Organization Name]</p>
            </div>
            <div className="mt-2 md:mt-0">
              <span className="inline-block bg-primary text-white px-4 py-2 rounded-md">
                [Employment Period]
              </span>
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-semibold text-secondary mb-3">Overview</h4>
              <p className="text-lg text-gray-700">
                [Brief description of the role and your overall responsibilities]
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold text-secondary mb-3">Responsibilities</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>[Key responsibility 1]</li>
                <li>[Key responsibility 2]</li>
                <li>[Key responsibility 3]</li>
                <li>[Add more responsibilities as needed]</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold text-secondary mb-3">Achievements</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>[Achievement 1]</li>
                <li>[Achievement 2]</li>
                <li>[Add more achievements as needed]</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-10 text-center">
          <p className="text-gray-600 italic">Add as many experience entries as needed to showcase your professional journey</p>
        </div>
      </div>
    </section>
  );
}
