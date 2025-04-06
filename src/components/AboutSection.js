'use client';

import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="py-16 bg-offWhite">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">About Me</h2>
          <div className="w-24 h-1 bg-secondary mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-secondary shadow-lg">
              {/* Placeholder image - to be replaced by user */}
              <div className="w-full h-full bg-lightGray flex items-center justify-center">
                <span className="text-primary text-lg">Profile Photo</span>
              </div>
            </div>
          </div>
          
          {/* Bio Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-primary">Ceanna Cheung</h3>
            <p className="text-lg text-gray-700">
              I am a Year 4 student currently studying for Chemistry Accredited Program in the University of Alberta. With a passion for scientific research and practical applications of chemistry, I am dedicated to expanding my knowledge and skills in the field.
            </p>
            <p className="text-lg text-gray-700">
              My academic journey has been complemented by a valuable year-long internship at Suncor - Syncrude, where I gained hands-on experience in industrial chemistry applications and developed professional skills that bridge theoretical knowledge with practical implementation.
            </p>
            <div className="pt-4">
              <h4 className="text-xl font-semibold text-primary mb-2">Personal Statement</h4>
              <p className="text-lg text-gray-700 italic">
                "I am committed to applying my chemistry knowledge to solve real-world problems and contribute to sustainable industrial practices. My goal is to combine academic excellence with practical experience to make meaningful contributions to the field of chemistry."
              </p>
            </div>
          </div>
        </div>
        
        {/* Additional Bio Information - Template for User to Fill */}
        <div className="mt-16 bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-primary mb-6">Additional Information</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-secondary mb-4">Research Interests</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Analytical Chemistry</li>
                <li>Environmental Chemistry</li>
                <li>Industrial Applications</li>
                <li>Sustainable Chemical Processes</li>
                <li>[Add your specific research interests]</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold text-secondary mb-4">Professional Goals</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Pursue advanced research in specialized chemistry fields</li>
                <li>Develop innovative solutions for industrial challenges</li>
                <li>Contribute to environmental sustainability through chemistry</li>
                <li>Collaborate with industry leaders on cutting-edge projects</li>
                <li>[Add your specific professional goals]</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8">
            <h4 className="text-xl font-semibold text-secondary mb-4">Personal Journey</h4>
            <p className="text-lg text-gray-700">
              [This section is for you to share your personal journey in chemistry - what inspired you to study this field, key moments in your academic career, challenges you've overcome, and your vision for the future. Feel free to add as much detail as you'd like about your experiences and aspirations.]
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
