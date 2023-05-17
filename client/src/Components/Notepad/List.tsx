import styles from './styles/List.module.css';
import { Note } from './Note';

type Props = { 
  notes: string[] 
  actions : {
    set: React.Dispatch<React.SetStateAction<string[]>>,
    edit: (e: React.ChangeEvent<HTMLInputElement>, index: number,) => void,
  }
};

export const List: React.FC<Props> = ({notes, actions}) => {
  
  const handleDelete = (index: number) => {
    actions.set((prevState) => (
      prevState.filter((_, i) => (i !== index))
    ));
  };

  const renderList = (list: string[]) => {
    return list.map((note: string, i:number) => {
      return <Note value={note} 
                   key={i} 
                   actions={{delete: () => handleDelete(i),
                             change: (e) => actions.edit(e, i)}}/>;
    });
  };
  
  return(
    <ul className={styles['list']}>
      {renderList(notes)}
    </ul>
  );
};