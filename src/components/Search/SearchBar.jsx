const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="w-full md:w-1/3">
      <input
        type="text"
        placeholder="Search jobs..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
      />
    </div>
  );
};

export default SearchBar;