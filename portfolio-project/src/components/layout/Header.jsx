import React from 'react';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';
import { ContactButton, SocialButton } from '../shared/ContactButton';

const Header = () => {
  return (
    <header className="text-center mb-16">
      <div className="inline-block mb-6 p-2 bg-blue-50 rounded-full">
        <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-4xl font-bold">
          SP
        </div>
      </div>
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Saumil Patel</h1>
      <p className="text-xl text-gray-600 mb-8">Computer Vision Engineer & AI Researcher</p>
      <div className="flex flex-wrap justify-center gap-4">
        <ContactButton icon={<Mail />} text="saumilp9091@gmail.com" href="mailto:saumilp9091@gmail.com" />
        <ContactButton icon={<Phone />} text="(936)-587-9020" />
        <SocialButton icon={<Github />} href="https://github.com/sam02425" />
        <SocialButton icon={<Linkedin />} href="https://www.linkedin.com/in/saumil-patel-2a58ab166/" />
      </div>
    </header>
  );
};

export default Header;
