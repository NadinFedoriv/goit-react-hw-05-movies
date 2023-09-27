import { useState } from 'react';
import { toast } from 'react-toastify';


const SearchForm = ({onSubmit}) => {
    const [query, setQuery] = useState('');
  
    const handleChange = (e) => {
        setQuery(e.target.value);
    };

  const handleSubmit = e => {
      e.preventDefault();
      if (query.trim() === '') {
          return toast.error('The search field is empty');
      }
      onSubmit({ query });
      setQuery('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;