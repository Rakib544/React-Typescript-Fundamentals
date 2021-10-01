// Defining type for array of objects props
type PersonListProps = {
  names: {
    name: string;
    location: string;
  }[];
};

const PersonList = ({ names }: PersonListProps) => {
  return (
    <div>
      {names.map((name, index) => (
        <p key={index}>
          {name.name} situated at - {name.location}
        </p>
      ))}
    </div>
  );
};

export default PersonList;
