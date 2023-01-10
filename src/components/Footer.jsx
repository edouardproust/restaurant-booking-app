export default function Footer(props) {
  const phone = "(415) 206-1786";
  const email = "contact@littlelemon.com";
  const social = [
    { label: "Instagram", url: "https://www.instagram.com/" },
    { label: "Twitter", url: "https://www.twitter.com" },
    { label: "Facebook", url: "https://www.facebook.com" },
    { label: "Pinterest", url: "https://www.pinterest.com" },
  ];

  return (
    <footer>
      <h3>Links</h3>
      <ul>
        {props.mainMenu.map((link) => (
          <li key={link.label}>
            <a href={link.url}>{link.label}</a>
          </li>
        ))}
      </ul>
      <h3>Contact</h3>
      <ul>
        <li>
          58 Middle Point Rd <br />
          San Francisco, California(CA), <br />
          94124
        </li>
        <li>
          <a href={"tel:" + phone}>{phone}</a>
        </li>
        <li>
          <a href={"mailto:" + email}>{email}</a>
        </li>
      </ul>
      <h3>Social Medias</h3>
      <ul>
        {social.map((link) => (
          <li>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}
