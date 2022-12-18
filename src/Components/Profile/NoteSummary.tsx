type NoteSummaryProps = {
  headerName: string;
  lengthNote: number;
};
export const NoteSummary = ({ headerName, lengthNote }: NoteSummaryProps) => {
  return (
    <div className="card-summary">
      {headerName}: {lengthNote}
    </div>
  );
};
