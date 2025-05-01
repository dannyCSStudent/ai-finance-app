import React from 'react';

interface CodeProps {
  children: React.ReactNode;
  language?: string;
}

export const Code = ({ children, language }: CodeProps) => {
  return (
    <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
      <code className={language ? `language-${language}` : ''}>
        {children}
      </code>
    </pre>
  );
};