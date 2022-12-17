import Card from "react-bootstrap/Card";
type NoteSummaryProps = {
  headerName: string;
  lengthNote: number;
};
export const NoteSummary = ({ headerName, lengthNote }: NoteSummaryProps) => {
  return (
    <div>
      <Card
        bg={"Secondary".toLowerCase()}
        key={headerName}
        text={"Secondary".toLowerCase() === "light" ? "dark" : "white"}
        style={{ width: "18rem" }}
        className="mb-2"
      >
        <Card.Header>
          {headerName}: {lengthNote}
        </Card.Header>
      </Card>
    </div>
  );
};
