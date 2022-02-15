import { BsStarFill } from "react-icons/bs";

type LogoProps = {
  menuBarActive: boolean;
};

export default function Logo({ menuBarActive }: LogoProps) {
  const logo = menuBarActive ? (
    <div className="d-flex justify-content-center menu-bar-spacing">
      <h4 className="logo-open">Central Planning </h4>
      <BsStarFill color="#DC3545" />
    </div>
  ) : (
    <div className="d-flex justify-content-center menu-bar-spacing">
      <BsStarFill color="#DC3545" />
    </div>
  );

  return logo;
}
