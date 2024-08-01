import Popup from "@/components/Events/Popup";
import RotatingArrow from "@/components/Events/RotatingArrow";
import usePopup from "@/components/Events/utils/usePopup";
import { homeContent } from "@/data/Content";

const Card = (props) => {
  return (
    <div
      className="flex-row b15 cup"
      onClick={() => {
        props.setSelected(props.id);
      }}
    >
      <div className="">{props.text}</div>
      <RotatingArrow small={true} />
    </div>
  );
};
const Statements = () => {
  const { state, change, closePopup, container } = usePopup();
  return (
    <>
      <div className="home_content b15 flex-col gap-1 home_animate">
        <Card id={1} setSelected={change} text="Mission" />
        <Card id={2} setSelected={change} text="Vision" />
        <Card id={3} setSelected={change} text="Objectives" />
      </div>
      <div className="events_popup nav_bg">
        <Popup
          id={state.selected}
          closePopup={closePopup}
          container={container}
          array={homeContent}
        />
      </div>
    </>
  );
};

export default Statements;
