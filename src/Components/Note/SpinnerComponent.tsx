import { Spinner } from "react-bootstrap";

export function SpinnerComponent() {
  return (
    <div className="note-cta">
      Hold tight.. we are working on it...
      <Spinner
        as="span"
        animation="border"
        size="sm"
        role="status"
        aria-hidden="true"
      />
    </div>
  );
}
