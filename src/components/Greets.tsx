// defining props type
type GreetsProps = {
  name: string;
  projectCount: number;
};

const Greets = ({ name, projectCount }: GreetsProps) => {
  return (
    <div>
      <p>
        Hello World! I am {name}. And I have done more than {projectCount}{" "}
        projects.{" "}
      </p>
    </div>
  );
};

export default Greets;
