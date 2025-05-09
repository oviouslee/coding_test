import { useEffect, useRef, type JSX } from "react";

type TDialogProps = {
  isOpen: boolean;
  onClose?: () => void;
  children: JSX.Element;
};
const Dialog = (props: TDialogProps) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (dialogRef.current && !dialogRef.current.contains(event.target)) {
        props.onClose?.();
      }
    };

    if (props.isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [props]);

  if (!props.isOpen) {
    return null;
  }

  return (
    <div role="dialog" aria-labelledby="labeldiv" ref={dialogRef}>
      <div>
        {props.children}
        <button onClick={props?.onClose}>Close Dialog</button>
      </div>
    </div>
  );
};

export default Dialog;
