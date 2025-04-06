'use client';

export default function EducationSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Education</h2>
          <div className="w-24 h-1 bg-secondary mx-auto"></div>
        </div>
        
        <div className="space-y-12">
          {/* University Education */}
          <div className="bg-offWhite p-8 rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-semibold text-primary">University of Alberta</h3>
                <p className="text-lg text-gray-700">Bachelor of Science, Chemistry (Accredited Program)</p>
              </div>
              <div className="mt-2 md:mt-0">
                <span className="inline-block bg-primary text-white px-4 py-2 rounded-md">
                  2021 - Present
                </span>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-xl font-semibold text-secondary mb-2">Program Highlights</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Chemistry Accredited Program with focus on analytical and industrial applications</li>
                  <li>Completed advanced laboratory coursework in organic and inorganic chemistry</li>
                  <li>Participated in research projects focusing on environmental chemistry</li>
                  <li>Maintained strong academic standing throughout the program</li>
                  <li>[Add specific courses, achievements, or projects]</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-secondary mb-2">Relevant Coursework</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Advanced Organic Chemistry</li>
                    <li>Analytical Instrumentation</li>
                    <li>Environmental Chemistry</li>
                    <li>Industrial Chemical Processes</li>
                    <li>[Add more courses]</li>
                  </ul>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Physical Chemistry</li>
                    <li>Biochemistry</li>
                    <li>Research Methods in Chemistry</li>
                    <li>Chemical Thermodynamics</li>
                    <li>[Add more courses]</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Internship Year - Educational Component */}
          <div className="bg-offWhite p-8 rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-semibold text-primary">University of Alberta - Cooperative Education Program</h3>
                <p className="text-lg text-gray-700">Internship Year at Suncor - Syncrude</p>
              </div>
              <div className="mt-2 md:mt-0">
                <span className="inline-block bg-primary text-white px-4 py-2 rounded-md">
                  Year 3
                </span>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-xl font-semibold text-secondary mb-2">Educational Components</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Applied theoretical knowledge in real-world industrial settings</li>
                  <li>Completed academic requirements and reports during internship</li>
                  <li>Received mentorship from industry professionals and academic advisors</li>
                  <li>Participated in specialized training programs relevant to industrial chemistry</li>
                  <li>[Add specific educational achievements during internship]</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Additional Education - Template for User to Fill */}
          <div className="bg-offWhite p-8 rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-semibold text-primary">[Previous Education Institution]</h3>
                <p className="text-lg text-gray-700">[Degree/Diploma/Certificate]</p>
              </div>
              <div className="mt-2 md:mt-0">
                <span className="inline-block bg-primary text-white px-4 py-2 rounded-md">
                  [Years Attended]
                </span>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-xl font-semibold text-secondary mb-2">Highlights</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>[Achievement or highlight]</li>
                  <li>[Relevant coursework or projects]</li>
                  <li>[Awards or recognition]</li>
                  <li>[Add more details as needed]</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Certifications and Additional Training - Template */}
          <div className="bg-offWhite p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-primary mb-6">Certifications & Additional Training</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border-l-4 border-secondary pl-4">
                <h4 className="text-xl font-semibold text-secondary mb-2">[Certification Name]</h4>
                <p className="text-gray-700">[Issuing Organization]</p>
                <p className="text-gray-600">[Date Obtained]</p>
                <p className="mt-2 text-gray-700">[Brief description of the certification and its relevance]</p>
              </div>
              
              <div className="border-l-4 border-secondary pl-4">
                <h4 className="text-xl font-semibold text-secondary mb-2">[Training Program]</h4>
                <p className="text-gray-700">[Provider]</p>
                <p className="text-gray-600">[Date Completed]</p>
                <p className="mt-2 text-gray-700">[Brief description of the training and skills acquired]</p>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-gray-600 italic">Add as many certifications and training programs as needed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
