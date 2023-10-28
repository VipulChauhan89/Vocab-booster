import { useState } from "react";

export default function Recap() {
  const Eng = window.localStorage.getItem("ENGLISH_ARRAY");
  const Fre = window.localStorage.getItem("FRENCH_ARRAY");
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [EnglishWords,setEnglishWords ] = useState<string[]>(Eng ? JSON.parse(Eng) : []);
  const [FrenchWords,setFrenchWords ] = useState<string[]>(Fre ? JSON.parse(Fre) : []);

  const handleLanguageChange = (e: any) => {
    const selectedValue = e.target.value;
    setSelectedLanguage(selectedValue);
  };

  const handleReset = () => {
    if(selectedLanguage==="English")
    {
      setEnglishWords([]);
      window.localStorage.removeItem("ENGLISH_ARRAY");
    }
    if(selectedLanguage==="French")
    {
      setFrenchWords([]);
      window.localStorage.removeItem("FRENCH_ARRAY");
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <div className="flex justify-end mb-10 gap-1">
        <select
          className="w-full p-2 border rounded-md h-10"
          onChange={handleLanguageChange}
          value={selectedLanguage}
        >
          <option value="English">English</option>
          <option value="French">French</option>
        </select>
        <button onClick={handleReset} className="bg-red-500 rounded px-10 py-2 hover:bg-red-600 hover:text-white">Reset</button>
      </div>

      <div className="bg-white shadow p-4 rounded-md">
        {selectedLanguage === "English" ? (
          <div>
            {EnglishWords.map((word, index) => (
              <div
                key={index}
                className="mb-2 p-2 border rounded-md hover:bg-gray-100"
              >
                {word}
              </div>
            ))}
          </div>
        ) : (
          <div>
            {FrenchWords.map((word, index) => (
              <div
                key={index}
                className="mb-2 p-2 border rounded-md hover:bg-gray-100"
              >
                {word}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
