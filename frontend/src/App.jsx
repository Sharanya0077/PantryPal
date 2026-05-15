import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import RecipeCard from "./components/RecipeCard";
import recipes from "./data/recipes";
import chefImage from "./assets/chef.jpeg";
function App() {
  return (
    <div>
      <Navbar />
<img
        src={chefImage}
        alt="chef"
        style={styles.chefImage}
      />
      <div style={styles.hero}>
        <h1>Welcome to PantryPal 🍽️</h1>

        <p>
          Organize recipes, search ingredients, and generate shopping lists.
        </p>

        <SearchBar />

        <div style={styles.recipeContainer}>
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = {
  hero: {
    textAlign: "center",
    marginTop: "100px",
  },

  recipeContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "50px",
    flexWrap: "wrap",
  },
chefImage: {
  width: "180px",
  marginBottom: "20px",
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
},
};

export default App;