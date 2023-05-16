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

  return (
    <div className={styles['container']}>
      <Input value={input} 
             handleChange={handleChange}
             handleAddNote={handleAddNote}/>
      <List noteList={list} 
            setList={setList}/>
    </div>
  );  
};