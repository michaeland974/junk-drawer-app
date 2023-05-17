import styles from './styles/Input.module.css';

type Props = {
  value: string
  actions: {
    change: React.ChangeEventHandler<HTMLInputElement>,
    add: React.MouseEventHandler<HTMLButtonElement>
  }
}

export const Input: React.FC<Props> = ({value, actions}) => {
  return(
    <div className={styles['container']}> 
      <input value={value}
             placeholder='...'
             onChange={actions.change}
             className={styles['input']}/>
      <button id={styles['add']}
              data-testid='add'
              onClick={actions.add}>+</button>
    </div>
  );
};