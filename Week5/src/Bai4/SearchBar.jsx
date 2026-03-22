export default function SearchBar({ search, onSearch }) {
  return (
    <input
      type="text"
      placeholder="Search by title..."
      value={search}
      onChange={(e) => onSearch(e.target.value)}
    />
  );
}
