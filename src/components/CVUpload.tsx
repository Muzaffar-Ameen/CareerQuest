import React from 'react';
import { Download, FileText } from 'lucide-react';

const CVUpload = () => {
  const fileName = 'MuzaffarAmeenCV.pdf';
  const fileUrl = '/assets/MuzaffarAmeenCV.pdf'; // Public path

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Download My CV</h3>

      <div className="flex items-center gap-4 p-4 bg-green-50 rounded-lg border border-green-200">
        <FileText className="w-8 h-8 text-green-600" />
        <div className="flex-1">
          <p className="font-medium text-green-800">{fileName}</p>
          <p className="text-sm text-green-600">~ Approx. 0.5 MB</p>
        </div>
      </div>

      <button
        onClick={handleDownload}
        className="w-full mt-6 bg-gradient-to-r from-green-600 to-emerald-600 text-white py-4 px-8 rounded-xl font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
      >
        <Download className="w-5 h-5" />
        Download CV
      </button>
    </div>
  );
};

export default CVUpload;
