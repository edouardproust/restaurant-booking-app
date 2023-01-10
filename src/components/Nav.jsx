import uuid from "react-uuid";

export default function Nav(props) {
  return (
    <nav>
      <ul>
        {props.mainMenu.map((link) => (
          <li key={uuid()}>
            <a href={link.url}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
