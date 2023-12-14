import "../asset/style/AppNavBar.css";

export function AppNavBar() {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">All Deals</a>
        </li>
        <li>
          <a href="/category/grocery">Grocery</a>
        </li>
        <li>
          <a href="/category/beauty">Beauty</a>
        </li>
        <li>
          <a href="/category/fashion">Fashion</a>
        </li>
        <li>
          <a href="/category/electronics">Electronics</a>
        </li>
      </ul>
    </nav>
  );
}

AppNavBar.propTypes = {};
