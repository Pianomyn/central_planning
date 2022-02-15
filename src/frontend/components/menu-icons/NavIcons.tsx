import { Nav } from "react-bootstrap";

type NavIconsProps = {
  menuBarActive: boolean;
};

export default function NavIcons({
  menuBarActive,
}: NavIconsProps): JSX.Element {
  // Assume the following 2 arrays are of the same size
  const menuButtons: Array<any> = menuBarActive ? ["Home"] : ["H"];
  const links: Array<string> = ["/"];

  function renderButtons(buttons: Array<any>, links: Array<string>) {
    var counter = 0;
    return buttons.map((button) => {
      return (
        <div className="d-flex justify-content-center">
          <Nav>
            <Nav.Link href={links[counter++]}>{button}</Nav.Link>
          </Nav>
        </div>
      );
    });
  }

  return <>{renderButtons(menuButtons, links)}</>;
}
