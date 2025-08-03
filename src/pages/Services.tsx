
import { Code, Palette, Smartphone, Globe, Zap, Users, FileText, MessageCircle, Smile, BookOpen } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'Creating responsive, interactive web applications using React.js, TypeScript, and modern CSS frameworks.',
      features: ['React.js Development', 'Single Page Applications', 'Component Libraries', 'Performance Optimization']
    },
    {
    icon: FileText, // already imported
    title: 'Technical Documentation',
    description: 'Creating clear and professional documentation for codebases, APIs, and software systems.',
    features: [
      'API Documentation',
      'User Manuals',
      'Codebase Commenting',
      'Project Reports & Case Studies'
    ]
  },
  {
    icon: FileText, // reuse for resume
    title: 'CV / Resume Making',
    description: 'Designing impactful, ATS-friendly CVs and resumes tailored to your industry and career level.',
    features: [
      'ATS-Optimized Format',
      'Custom Design Layouts',
      'Tailored Content Writing',
      'Cover Letter Writing'
    ]
  },
  {
    icon: MessageCircle, // for guidance or motivation
    title: 'Career Guidance',
    description: 'Helping students and professionals plan career paths, improve skills, and make informed decisions.',
    features: [
      'Job Role Alignment',
      'LinkedIn & GitHub Reviews',
      'Interview Prep',
      'Career Planning Sessions'
    ]
  },
  {
    icon: Smile, // for motivation
    title: 'Motivational Support',
    description: 'Inspiring students with personal growth advice and mentorship for academic and career development.',
    features: [
      'Student Motivation Talks',
      'One-on-One Mentorship',
      'Productivity Coaching',
      'Goal Setting & Tracking'
    ]
  },
  {
    icon: BookOpen, // or LaptopIcon, or PencilRuler
    title: 'Teaching & Tutoring',
    description: 'Offering technical teaching and tutoring for CS subjects with real-world understanding and guidance.',
    features: [
      'C++ Programming',
      'Object-Oriented Programming (OOP)',
      'Computer Organization and Assembly Language (COAL)',
      'Compiler Construction & DBMS Basics'
    ]
  },
    // {
    //   icon: Globe,
    //   title: 'Full-Stack Development',
    //   description: 'End-to-end web application development with both frontend and backend technologies.',
    //   features: ['API Development', 'Database Design', 'Authentication Systems', 'Cloud Deployment']
    // },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Designing beautiful, user-friendly interfaces that provide exceptional user experiences.',
      features: ['Wireframing', 'Prototyping', 'User Research', 'Design Systems']
    },
    // {
    //   icon: Smartphone,
    //   title: 'Responsive Design',
    //   description: 'Ensuring your website looks and works perfectly on all devices and screen sizes.',
    //   features: ['Mobile-First Design', 'Cross-Browser Compatibility', 'Touch Optimization', 'Progressive Web Apps']
    // },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Optimizing web applications for speed, SEO, and overall performance.',
      features: ['Code Splitting', 'Image Optimization', 'SEO Implementation', 'Core Web Vitals']
    },
    {
      icon: Users,
      title: 'Consulting & Mentoring',
      description: 'Providing technical guidance, code reviews, and mentoring for development teams.',
      features: ['Code Reviews', 'Architecture Planning', 'Team Training', 'Best Practices']
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            My <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I offer comprehensive web development services to bring your digital ideas to life.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3 text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-12 text-white mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Development Process</h2>
            <p className="text-purple-100 text-lg">A structured approach to deliver exceptional results.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'Understanding your needs and project requirements' },
              { step: '02', title: 'Planning', description: 'Creating wireframes, choosing tech stack, and timeline' },
              { step: '03', title: 'Development', description: 'Building your application with regular updates' },
              { step: '04', title: 'Delivery', description: 'Testing, optimization, and final deployment' }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">{phase.step}</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">{phase.title}</h4>
                <p className="text-purple-100 text-sm">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Your Project?</h3>
            <p className="text-gray-600 mb-6">Let's discuss how I can help bring your ideas to life.</p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
