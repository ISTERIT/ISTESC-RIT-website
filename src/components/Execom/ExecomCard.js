import Image from "next/image";

const ExecomCard = (props) => {
  return (
    <div className="execom_card">
      <Image
        src={`/execom/${props.fileName}.webp`}
        height={1080}
        width={1080}
        alt={props.name}
        draggable={false}
        className="b15"
        priority
      />
      <h1>{props.name}</h1>
      <h2 className="barlow">{props.position}</h2>
    </div>
  );
};

export default ExecomCard;
