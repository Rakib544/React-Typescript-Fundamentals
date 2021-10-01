// Defining prop types for status
type StatusProps = {
  status: "loading" | "success" | "error";
};

const Status = ({ status }: StatusProps) => {
  let message;
  if (status === "loading") {
    message = "Loading...";
  } else if (status === "success") {
    message = "Data fetched successfully";
  } else if (status === "error") {
    message = "Error fetched data";
  }
  return (
    <div>
      <p>status - {message}</p>
    </div>
  );
};

export default Status;
