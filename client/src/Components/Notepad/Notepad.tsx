import styles from './styles/Notepad.module.css';
import { Input } from './Input';
import { List } from './List';
import { useNotes } from '../../hooks/useNotes';

export const Notepad = () => {
  const [{input, list, setList, 
          handleChange, handleAddNote, editNote}] = useNotes();
  const isEmpty = (list.length === 0);

  const Empty = () => {
    return(
      <div id={styles['empty']}>
        {[...Array(5)].map((el) => <span className={styles['line']}></span>)}
      </div>
    );
  };

  return (
    <div className={styles['container']}>
      <Input value={input}
             actions={{change: handleChange,
                       add: handleAddNote}}/>
      {isEmpty ? <Empty /> : 
                 <List notes={list}
                    actions={{set: setList, 
                              edit: editNote}}/>}
      
    </div>
  );  
};