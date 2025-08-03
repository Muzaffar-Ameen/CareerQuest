
import { Download, MapPin, Calendar, GraduationCap } from 'lucide-react';
import { skillsData } from '../data/skillsData';
import CVUpload from '../components/CVUpload';

const About = () => {
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Me</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-justify">
            Motivated and detail-oriented Computer Science graduate with a strong foundation in software development, web technologies, and problem-solving. Passionate about building impactful applications, contributing to team success, and continuously learning new technologies.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Profile Section */}
          <div className="space-y-8">
            {/* Profile Image */}
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/lovable-uploads/Mypic.png"
                  alt="Muzaffar Ameen Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">Fresh</span>
              </div>
            </div>

            {/* Quick Info */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Info</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <MapPin className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-700">Sialkot, Pasrur, Pakistan</span>
                </div>
                <div className="flex items-center gap-4">
                  <Calendar className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-700">Fresh Graduate</span>
                </div>
                <div className="flex items-center gap-4">
                  <GraduationCap className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-700">Computer Science Graduate</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            {/* Bio */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">My Story</h3>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4 text-justify">
                 I'm Muzaffar Ameen, a motivated and detail-oriented Computer Science graduate with a strong passion for web development and problem-solving. My journey began with programming fundamentals in C++ and Assembly Language, and evolved into building dynamic web applications using modern technologies like React.js, MongoDB, and JavaScript.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4 text-justify">
                  I specialize in frontend development with React.js, backed by a solid foundation in Data Structures & Algorithms, Object-Oriented Programming, and basic Python scripting. I focus on writing clean, responsive, and maintainable code to deliver intuitive user experiences.
                </p>
                <p className="text-gray-700 leading-relaxed text-justify">
                 As the team leader of my Final Year Project – CareerQuest, I led the design and development of a full-stack career recommendation platform using React.js for the frontend and MongoDB for data management. The system features personality-based skill assessments, job recommendations, and a structured user dashboard, showcasing my ability to manage real-world project requirements, UI/UX, and backend integration.<br /><br />Outside the classroom, I’ve served as a freelance tutor for over two years, teaching students a wide range of technical subjects including C++, Assembly Language, Logic Building, and Mathematics. I've earned multiple academic scholarships and awards for my consistent performance and leadership, both in academics and co-curriculars.I'm eager to contribute to impactful software projects, expand my knowledge of modern web technologies, and grow as a professional in a collaborative, innovation-driven environment.
                </p>
              </div>
            </div>

            {/* Skills */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Skills & Technologies</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {skillsData.map((skill, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-purple-50 to-blue-50 hover:from-purple-100 hover:to-blue-100 transition-all duration-300">
                    <skill.icon className="w-6 h-6 text-purple-600" />
                    <span className="font-medium text-gray-800">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CV Upload/Download */}
            <CVUpload />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
