import { useHistory } from "react-router-dom";
import ImageWithFallback from "../../util/ImgWithFallback";
import "./posts.scss";

export default function MediaCard(props) {
  console.log(props);
  const history = useHistory();
  return (
    <div
      className="journalCard"
      onClick={() =>
        history.push("/journal/" + props.title.replace(/ /g, ""), props)
      }
    >
      <ImageWithFallback className="media" src={props.image} alt={props.title}/>
      <div className="coverEffect"></div>
      <div className="meta">
        <h3>{props.title}</h3>
        <p>{props.summary}</p>
      </div>
    </div>
  );
}
