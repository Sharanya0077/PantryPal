import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import RecipeCard from "./components/RecipeCard";
function App() {
  return (
    <div>
      <Navbar />
      <SearchBar />

      <div style={styles.hero}>
        <h1>Welcome to PantryPal 🍽️</h1>

        <p>
          Organize recipes, search ingredients, and generate shopping lists.
        </p>
      </div>
    </div>
  );
}

const styles = {
  hero: {
    textAlign: "center",
    marginTop: "100px",
  },
};

export default App;