type PersonProps = {
  name: {
    fName: string;
    lName: string;
  };
};

const Person = ({ name }: PersonProps) => {
  return (
    <div>
      <p>
        Hello this is {name.fName} {name.lName}
      </p>
    </div>
  );
};

export default Person;
