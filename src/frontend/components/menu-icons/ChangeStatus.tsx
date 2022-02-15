import { Button } from "react-bootstrap";
import { AiOutlineMenu } from "react-icons/ai";

type changeStatusProps = {
  handleMenuBarClick: Function;
};

export default function ChangeStatus({
  handleMenuBarClick,
}: changeStatusProps) {
  return (
    <div className="d-flex justify-content-center">
      <Button
        variant="dark"
        onMouseDown={(e) => e.preventDefault()}
        onClick={(e) => {
          handleMenuBarClick();
        }}
      >
        <AiOutlineMenu />
      </Button>
    </div>
  );
}
