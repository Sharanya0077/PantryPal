function RecipeCard({ recipe }) {

  const cardStyle = {
    backgroundColor: "#FDF1F2",
    borderRadius: "20px",
    padding: "20px",
    width: "250px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    transition: "0.3s",
    cursor: "pointer",
  };

  return (
    <div style={cardStyle}>
      <img
        src={recipe.image}
        alt={recipe.name}
        style={{
          width: "100%",
          borderRadius: "15px",
        }}
      />

      <h3>{recipe.name}</h3>
      <p>{recipe.time}</p>
    </div>
  );
}

export default RecipeCard;