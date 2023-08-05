import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CodeEditor from './CodeEditor';
import RightPanel from './RightPanel';
import './App.css';

const App = () => {
  const [leftLanguage, setLeftLanguage] = useState('javascript');
  const [rightLanguage, setRightLanguage] = useState('javascript');
  const [code, setCode] = useState('');
  const [response, setResponse] = useState('');

  const handleLeftLanguageChange = (event) => {
    setLeftLanguage(event.target.value);
  };

  const handleRightLanguageChange = (language) => {
    setRightLanguage(language);
  };

  const handleCodeChange = (value) => {
    setCode(value);
  };

  const makeBackendRequest = async (route, codeToUse, language) => {
    try {
      console.log(route, codeToUse, language)
      const response = await axios.post(`https://code-convertor-backend.vercel.app/api/${route}`, {
        prompt: codeToUse,
        language,
      });
      setResponse(response.data); // Store the response in state
    } catch (error) {
      console.error(error);
      setResponse({ error: 'Something went wrong.' }); // Handle the error and set response state
    }
  };

  const handleConvert = () => {
    makeBackendRequest('route1', code, rightLanguage);
  };

  const handleDebug = () => {
    makeBackendRequest('route2', code, rightLanguage);
  };

  const handleQualityCheck = () => {
    makeBackendRequest('route3', code, rightLanguage);
  };

  // useEffect hook to monitor the change in rightLanguage
  useEffect(() => {
    console.log('Right Language:', rightLanguage);
  }, [rightLanguage]);

  return (
    <div className="App">
      <div className="left-panel">
        <select value={leftLanguage} onChange={handleLeftLanguageChange}>
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          {/* Add more language options as needed */}
        </select>
        <CodeEditor language={leftLanguage} onCodeChange={handleCodeChange} />
      </div>
      <RightPanel
        language={rightLanguage}
        onConvert={handleConvert}
        onDebug={handleDebug}
        onQualityCheck={handleQualityCheck}
        onLanguageChange={handleRightLanguageChange} // Pass the language directly
        response={response} // Pass the response to RightPanel
      />
    </div>
  );
};

export default App;
