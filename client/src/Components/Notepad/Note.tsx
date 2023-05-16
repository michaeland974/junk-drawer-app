import styles from './styles/Note.module.css';

type Props = { 
  value: string 
  actions: {
    delete: React.MouseEventHandler<HTMLButtonElement>
    change: React.ChangeEventHandler<HTMLInputElement>
  }
};

export const Note: React.FC<Props> = ({value, actions}) => {
  return(
  <li className={styles['note']}>
    <input value={value} 
           onChange={actions.change}/>
    
    <div className={styles['button-group']}>
      <button id={styles['edit']}>edit</button>
      <button id={styles['delete']} 
              onClick={actions.delete}>x</button>
    </div>
  </li>
  );
};