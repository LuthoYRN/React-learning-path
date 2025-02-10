import SearchInput from "./components/SearchInput";

const App = () => {
  const onSearchSubmit = (entry) => {
    console.log(entry);
  };
  return (
    <div className="ui container" style={{ marginTop: "30px" }}>
      <SearchInput onSearchSubmit={onSearchSubmit}></SearchInput>
    </div>
  );
};

export default App;
