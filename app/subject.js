'use client'
import { useEffect, useState } from "react"

export default function Subject({name, cab, id}) {

    const [isDone, setDone] = useState(false);

    

    useEffect(() => {
        const savedState = localStorage.getItem(`subject_${id}`);
        if (savedState) {
          setDone(JSON.parse(savedState));
        }
      }, []);
    
      // Update local storage whenever the state changes
      useEffect(() => {
        localStorage.setItem(`subject_${id}`, JSON.stringify(isDone));
      }, [isDone]);

      function toggleButton() {
        setDone(current => !current)
    }

    return (
        <div onClick={toggleButton} className={`cursor-pointer relative w-96 md:w-36 lg:w-48 shadow-lg border rounded py-2 px-4 font-medium  transition-all ${isDone ? 'bg-lime-200 active:bg-lime-400' : 'bg-white hover:opacity-80 active:bg-gray-200'}`}>
            <div className={`absolute top-1 right-1 bg-blue-200 rounded font-medium w-9 flex justify-center items-center h-8 ${isDone && 'opacity-60'}`}>
                {cab}
            </div>
            {name}
        </div>
    )
}