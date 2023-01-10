export default function Nav(props) {
  return (
    <nav>
      <ul>
        {props.mainMenu.map((link) => (
          <li key={link.label}>
            <a href={link.url}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
