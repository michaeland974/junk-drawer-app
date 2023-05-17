import styles from './styles/Note.module.css';
import { useToggle } from '../../hooks/useToggle';

type Props = { 
  value: string 
  actions: {
    delete: React.MouseEventHandler<HTMLButtonElement>
    change: React.ChangeEventHandler<HTMLInputElement>
  }
};

export const Note: React.FC<Props> = ({value, actions}) => {
  const [editMode, toggleEditMode] = useToggle(true);
  
  return(
  <li className={styles['container']}>
    <div className={styles['input-group']}>
      <input type='checkbox'/>
      <input value={value}
             className={styles['text']}
             readOnly={editMode}
             onChange={actions.change}/>
    </div>
    
    <div className={styles['button-group']}>
      <button id={styles['edit']}
              onClick={() => toggleEditMode()}>edit</button>
      <button id={styles['delete']} 
              onClick={actions.delete}>x</button>
    </div>
  </li>
  );
};