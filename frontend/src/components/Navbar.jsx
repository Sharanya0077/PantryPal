function Navbar() {
  return (
    <nav style={styles.nav}>
      <h1 style={styles.logo}>🍳 PantryPal</h1>

      <div style={styles.links}>
        <a href="#">Home</a>
        <a href="#">Favorites</a>
        <a href="#">Shopping List</a>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 40px",
    backgroundColor: "#ff914d",
    color: "white",
  },

  logo: {
    margin: 0,
  },

  links: {
    display: "flex",
    gap: "20px",
  },
};

export default Navbar;