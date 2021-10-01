// defining props type
type GreetsProps = {
  name: string;
};

const Greets = ({ name }: GreetsProps) => {
  return (
    <div>
      <p>Hello World! I am {name}</p>
    </div>
  );
};

export default Greets;
