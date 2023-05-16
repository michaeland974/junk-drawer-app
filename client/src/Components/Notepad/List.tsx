import styles from './styles/Input.module.css';
import { Note } from './Note';

type Props = { 
  noteList: string[] 
  setList: React.Dispatch<React.SetStateAction<string[]>>;
};

export const List: React.FC<Props> = ({noteList, setList}) => {
  
  const handleDelete = (index: number) => {
    setList((prevState) => (
      prevState.filter((_, i) => (i !== index))
    ));
  };

  const renderList = (list: string[]) => {
    return list.map((note: string, i:number) => {
      return <Note value={note} key={i} handleDelete={() => handleDelete(i)}/>;
    });
  };
  
  return(
    <ul className={styles['list']}>
      {renderList(noteList)}
    </ul>
  );
};