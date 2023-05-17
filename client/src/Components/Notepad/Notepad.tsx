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

  const handleAddNote = () => {
    setList((prevList) => ([...prevList, input]));
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

  return (
    <div className={styles['container']}>
      <Input value={input}
             actions={{change: handleChange,
                       add: handleAddNote}}/>
      <List notes={list}
            actions={{set: setList, 
                      edit: editNote}}/>
    </div>
  );  
};