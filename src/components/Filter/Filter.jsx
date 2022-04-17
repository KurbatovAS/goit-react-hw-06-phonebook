import { useSelector, useDispatch } from 'react-redux';
import { set } from 'redux/reduxFilter/slice';
import s from './Filter.module.css';

function Filter() {
  const dispatch = useDispatch();
  const reduxFilter = useSelector(state => state.reduxFilter);

  const onFilterInputHandler = e => {
    dispatch(set(e.target.value.toLowerCase()));
  };

  return (
    <label className={s.label}>
      Find contacts by name
      <input
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. 
            For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        placeholder="John Smith"
        value={reduxFilter}
        onInput={onFilterInputHandler}
        className={s.input}
      />
    </label>
  );
}

export default Filter;
