import './styles.css';

export const TextInput = ({ handleChange, searchValue }) => {
    return (
        <input 
            className="text-input"
            value={searchValue}
            onChange={handleChange}
            type="search" 
            placeholder="Pesquise aqui"
        />
    );
}