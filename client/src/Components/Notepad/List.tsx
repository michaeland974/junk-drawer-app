import styles from './styles/Input.module.css';
import { Note } from './Note';

type Props = { 
  noteList: string[] 
  setList: React.Dispatch<React.SetStateAction<string[]>>
  editNote: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void
};

export const List: React.FC<Props> = ({noteList, setList, editNote}) => {
  const handleDelete = (index: number) => {
    setList((prevState) => (
      prevState.filter((_, i) => (i !== index))
    ));
  };

  const renderList = (list: string[]) => {
    return list.map((note: string, i:number) => {
      return <Note value={note} 
                   key={i} 
                   handleChange={(e) => editNote(e, i)}
                   handleDelete={() => handleDelete(i)}/>;
    });
  };
  
  return(
    <ul className={styles['list']}>
      {renderList(noteList)}
    </ul>
  );
};