import { useCallback, useEffect, useState } from "react";
import Dialog from "./Dialog/Dialog";

type TScenarioProps = {
  onClose?: () => void;
};
const Scenario = (props: TScenarioProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(true);

  const onClose = useCallback(() => {
    setIsDialogOpen(false);
    props?.onClose?.();
  }, [props]);

  useEffect(() => {
    const handleClose = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleClose);

    return () => {
      document.removeEventListener("keydown", handleClose);
    };
  }, [onClose]);

  return (
    <div>
      <Dialog isOpen={isDialogOpen} onClose={onClose}>
        <div>
          <h2>Test Dialog</h2>
          <p>This the dialog to use the unit tests against</p>
        </div>
      </Dialog>
    </div>
  );
};

export default Scenario;
