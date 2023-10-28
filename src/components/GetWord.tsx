import { useEffect, useState } from "react";
import { get_word } from "../middleware/api";
import Loading from "./Loading";

export default function GetWord(Props:any)
{
    const Eng=window.localStorage.getItem("ENGLISH_ARRAY");
    const Fre=window.localStorage.getItem("FRENCH_ARRAY");
    const [word,setWord] = useState<string>("");
    const [loading,setLoading] = useState<boolean>(false);
    const [EnglishWords,setEnglishWords] = useState<string[]>(Eng?JSON.parse(Eng):[]);
    const [FrenchWords,setFrenchWords] = useState<string[]>(Fre?JSON.parse(Fre):[]);

    useEffect(()=>{
        setLoading(false);
        let EnglishArray=JSON.stringify(EnglishWords);
        let FrenchArray=JSON.stringify(FrenchWords);
        window.localStorage.setItem("ENGLISH_ARRAY",EnglishArray);
        window.localStorage.setItem("FRENCH_ARRAY",FrenchArray);
    },[word]);

    const handleGenerateWord = async () => {
        try{
            setLoading(true);
            const w = await get_word(Props.url);
            setWord(w.word);
            if(Props.url==="get_word" && w.word!=="") {
                setEnglishWords((prevEnglishWords) => [...prevEnglishWords, w.word]);
            }
            if(Props.url==="french_word" && w.word!=="") {
                setFrenchWords((prevFrenchWords) => [...prevFrenchWords, w.word]);
            }
        }
        catch(error)
        {
            console.log(error);
        }
    };

    return(
        <>
            <div className="flex justify-center mt-10">
                <button className="bg-blue-500 rounded px-10 py-2 hover:bg-blue-600 hover:text-white" onClick={handleGenerateWord}>Generate Word</button>
            </div>
            <div className="flex justify-center">
                <div className="flex justify-center mt-10 border-black border p-10 rounded-full shadow-2xl w-fit">
                    <h1 className="text-4xl">{loading?<Loading/>:word}</h1>
                </div>
            </div>
        </>
    );
}