import { useState } from "react";
import GetWord from "./GetWord";
import Recap from "./Recap";

export default function Tabs() {
    const [activeTab, setActiveTab] = useState("English");
  
    const tabClasses = "inline-block py-3 px-6 text-xl text-gray-600 hover:text-gray-800 focus:outline-none";
    const activeTabClasses = "inline-block py-3 px-6 text-xl text-gray-800 font-semibold border-b-2 border-red-500";
  
    return (
      <>
        <div className="bg-white text-center py-6">
          <div className="container mx-auto">
            <div className="flex justify-center">
              <a
                onClick={() => setActiveTab("English")}
                className={activeTab === "English" ? activeTabClasses : tabClasses}
              >
                English
              </a>
              <a
                onClick={() => setActiveTab("French")}
                className={activeTab === "French" ? activeTabClasses : tabClasses}
              >
                French
              </a>
              <a
                onClick={() => setActiveTab("Recap")}
                className={activeTab === "Recap" ? activeTabClasses : tabClasses}
              >
                Recap
              </a>
            </div>
          </div>
        </div>
        <div className="container mx-auto">
          {activeTab === "English" && <GetWord url="get_word"/>}
          {activeTab === "French" && <GetWord url="french_word"/>}
          {activeTab === "Recap" && <Recap/>}
        </div>
      </>
    );
}