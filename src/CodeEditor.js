import React from 'react';
import MonacoEditor from 'react-monaco-editor';

const CodeEditor = ({ language, onCodeChange }) => {
  const handleCodeChange = (value) => {
    onCodeChange(value);
  };

  return (
    <MonacoEditor
      height="calc(100vh - 50px)"
      language={language}
      onChange={handleCodeChange}
      options={{
        selectOnLineNumbers: true,
        roundedSelection: false,
        readOnly: false,
        cursorStyle: 'line',
        automaticLayout: true,
      }}
    />
  );
};

export default CodeEditor;
