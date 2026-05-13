function RecipeCard() {
  return (
    <div style={styles.card}>
      <h2>Pasta Alfredo</h2>

      <p>Creamy white sauce pasta with cheese.</p>

      <button style={styles.button}>View Recipe</button>
    </div>
  );
}

const styles = {
  card: {
    width: "250px",
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  },

  button: {
    marginTop: "10px",
    padding: "10px 15px",
    backgroundColor: "#ff914d",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};

export default RecipeCard;