import styles from './styles/Notepad.module.css';
import { Input } from './Input';
import { List } from './List';
import { useState } from 'react';

export const Notepad = () => {
  const [input, setInput] = useState('');
  const [list, setList] = useState<string[]>(['test']);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleAddNote = (e: React.MouseEvent) => {
    setList((prevList) => ([...prevList, input]));
  };

  const editNote = (e: React.ChangeEvent<HTMLInputElement>, 
                    index: number) => {
    const copy = list.slice();
    for(let i=0; i<list.length; i++){
      if(i===index){
        copy[index] = e.target.value;
      }
    }
    setList(copy);
  };

  return (
    <div className={styles['container']}>
      <Input value={input} 
             handleChange={handleChange}
             handleAddNote={handleAddNote}/>
      <List noteList={list} 
            editNote={editNote}
            setList={setList}/>
    </div>
  );  
};