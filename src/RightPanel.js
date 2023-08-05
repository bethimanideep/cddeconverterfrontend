import React from 'react';

const RightPanel = ({ language, onConvert, onDebug, onQualityCheck, onLanguageChange, response }) => {
  const handleConvert = () => {
    onConvert();
  };

  const handleDebug = () => {
    onDebug();
  };

  const handleQualityCheck = () => {
    onQualityCheck();
  };

  const handleLanguageChange = (event) => {
    onLanguageChange(event.target.value);
  };

  const formatCode = (code) => {
    // Format the code based on the selected language (e.g., removing escape characters)
    // Add more formatting logic as needed for different languages
    if (language === 'python') {
      return code.replace(/\\n/g, '\n').replace(/\\'/g, "'");
    }
    return code;
  };

  return (
    <div className="right-panel">
      <div className="btn-container">
        <button onClick={handleConvert}>Convert the Code</button>
        <button onClick={handleDebug}>Debug the Code</button>
        <button onClick={handleQualityCheck}>Quality Check</button>
      </div>
      <select value={language} onChange={handleLanguageChange}>
        <option value="javascript">JavaScript</option>
        <option value="python">Python</option>
        <option value="java">Java</option>
        <option value="csharp">C#</option>
        <option value="cpp">C++</option>
        <option value="ruby">Ruby</option>
        <option value="php">PHP</option>
        <option value="typescript">TypeScript</option>
        <option value="go">Go</option>
        <option value="swift">Swift</option>
        <option value="kotlin">Kotlin</option>
        <option value="rust">Rust</option>
        <option value="scala">Scala</option>
        <option value="html">HTML</option>
        <option value="css">CSS</option>
        <option value="sql">SQL</option>
      </select>

      <div className="response-container">
        {response ? (
          <pre dangerouslySetInnerHTML={{ __html: formatCode(response) }} />
        ) : (
          <p>No response yet.</p>
        )}
      </div>
    </div>
  );
};

export default RightPanel;
