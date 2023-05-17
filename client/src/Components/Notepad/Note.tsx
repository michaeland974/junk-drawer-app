import styles from './styles/Note.module.css';
import { decode } from 'html-entities';
import { useToggle } from '../../hooks/useToggle';

type Props = { 
  value: string 
  actions: {
    delete: React.MouseEventHandler<HTMLButtonElement>
    change: React.ChangeEventHandler<HTMLInputElement>
  }
};

const icons = {
  edit: decode('&#9998;'),
  delete: decode('&times;')
};

export const Note: React.FC<Props> = ({value, actions}) => {
  const [editMode, toggleEditMode] = useToggle(true);
  
  return(
  <li className={styles['container']}
      data-testid='list-items'>
    <div className={styles['input-group']}>
      <input type='checkbox'/>
      <input value={value}
             className={styles['text']}
             readOnly={editMode}
             onChange={actions.change}/>
    </div>
    
    <div className={styles['button-group']}>
      <button id={styles['edit']}
              className={!editMode ? styles['selected'] : ''}
              onClick={() => toggleEditMode()}>{icons.edit}</button>
      <button id={styles['delete']} 
              data-testid='delete'
              onClick={actions.delete}>{icons.delete}</button>
    </div>
  </li>
  );
};