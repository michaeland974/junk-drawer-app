import {useState} from 'react';

export const useNotes = () => {
  const [input, setInput] = useState('');
  const [list, setList] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleAddNote = () => {
    setList((prevList) => ([...prevList, input]));
    setInput('');
  };

  const editNote = (e: React.ChangeEvent<HTMLInputElement>,
                    index: number) => {
    const editedList = list.slice();
    for(let i=0; i<list.length; i++){
      if(i===index){
        editedList[index] = e.target.value;
      }
    }
    setList(editedList);
  };
  
  return [{input, list, setList, 
           handleChange, handleAddNote, editNote}]; //as const;
};