import styles from './styles/Note.module.css';

type Props = { 
  value: string 
  handleDelete: React.MouseEventHandler<HTMLButtonElement>
};

export const Note: React.FC<Props> = ({value, handleDelete}) => {
  return(
  <li className={styles['note']}>
    <span>{value}</span>
    <button id={styles['delete']} onClick={handleDelete}>x</button>
  </li>
  );
};