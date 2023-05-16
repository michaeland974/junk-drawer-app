import styles from './styles/Input.module.css';

type Props = {
  value: string
  handleChange: React.ChangeEventHandler<HTMLInputElement>
  handleAddNote: React.MouseEventHandler<HTMLButtonElement>
}

export const Input: React.FC<Props> = ({value, handleChange, handleAddNote}) => {
  return(
    <> 
      <input value={value}
             onChange={handleChange}
             className={styles['input']}/>
      <button onClick={handleAddNote}>+</button>
    </>
  );
};