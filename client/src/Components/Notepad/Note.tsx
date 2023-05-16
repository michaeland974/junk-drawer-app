import styles from './styles/Note.module.css';

type Props = { 
  value: string 
  handleDelete: React.MouseEventHandler<HTMLButtonElement>
  handleChange: React.ChangeEventHandler<HTMLInputElement>
};

export const Note: React.FC<Props> = ({value, handleDelete, handleChange}) => {
  return(
  <li className={styles['note']}>
    <input value={value} 
           onChange={handleChange}/>
    <div className={styles['button-group']}>
      <button id={styles['edit']}>edit</button>
      <button id={styles['delete']} 
              onClick={handleDelete}>x</button>
    </div>
  </li>
  );
};