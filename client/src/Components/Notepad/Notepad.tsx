import styles from './styles/Notepad.module.css';
import { Input } from './Input';
import { List } from './List';
import { useNotes } from '../../hooks/useNotes';

export const Notepad = () => {
  const [{input, list, setList, 
          handleChange, handleAddNote, editNote}] = useNotes();

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