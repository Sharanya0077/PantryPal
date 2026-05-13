function SearchBar() {
  return (
    <div style={styles.container}>
      <input
        type="text"
        placeholder="Search recipes or ingredients..."
        style={styles.input}
      />

      <button style={styles.button}>Search</button>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginTop: "40px",
  },

  input: {
    padding: "12px",
    width: "300px",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },

  button: {
    padding: "12px 20px",
    backgroundColor: "#ff914d",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};

export default SearchBar;