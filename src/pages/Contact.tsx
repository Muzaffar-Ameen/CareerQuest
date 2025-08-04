
import { Phone, Github, Linkedin, MessageCircle, Download } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const handleDownloadCV = () => {
  const link = document.createElement('a');
  link.href = '/assets/MuzaffarAmeenCV.pdf';         // Must match the file name exactly
  link.download = 'MuzaffarAmeenCV.pdf';      // Downloaded file name
  document.body.appendChild(link);            // Required for some browsers
  link.click();
  document.body.removeChild(link);

  toast.success('CV is being downloaded!');
};

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      content: '+92  347 4862915',
      href: 'tel:+92474862915'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      content: 'Connect with me on LinkedIn',
      href: 'https://www.linkedin.com/in/muzaffar-ameen-0b5484284'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      url: 'https://github.com/Muzaffar-Ameen',
      color: 'hover:text-gray-800'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/muzaffar-ameen-0b5484284',
      color: 'hover:text-blue-600'
    },
    {
      icon: MessageCircle,
      name: 'WhatsApp',
      url: 'https://wa.me/923474862915',
      color: 'hover:text-green-600'
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get In <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to discuss opportunities? Connect with me through LinkedIn or give me a call.
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-8">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.href}
                target={info.title === 'LinkedIn' ? '_blank' : undefined}
                rel={info.title === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                className="block bg-white/70 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              >
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{info.title}</h3>
                    <p className="text-gray-600">{info.content}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* CV Download */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Download My CV</h3>
            <p className="text-gray-600 mb-6">
              Get a detailed overview of my skills, experience, and projects.
            </p>
            <button
              onClick={handleDownloadCV}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 px-8 rounded-xl font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 mx-auto"
            >
              <Download className="w-5 h-5" />
              Download CV
            </button>
          </div>

          {/* Social Links */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Connect With Me</h3>
            <div className="flex justify-center gap-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-14 h-14 bg-gray-100 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg ${social.color}`}
                >
                  <social.icon className="w-7 h-7" />
                </a>
              ))}
            </div>
          </div>

          {/* Availability */}
          <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl p-8 text-white text-center">
            <h3 className="text-xl font-bold mb-4">Currently Available</h3>
            <p className="text-green-100 mb-4">
              I'm available for new opportunities and collaborations. Let's create something amazing together!
            </p>
            <div className="flex items-center justify-center gap-2">
              <div className="w-3 h-3 bg-green-300 rounded-full animate-pulse"></div>
              <span className="text-sm">Typically responds within 24 hours</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
