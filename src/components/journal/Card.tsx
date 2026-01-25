import { useHistory } from "react-router-dom";
import ImageWithFallback from "../../util/ImgWithFallback";
import "./posts.scss";

interface MediaCardProps {
  title: string;
  image?: string;
  summary?: string;
}

export default function MediaCard({ title, image, summary }: MediaCardProps) {
  const history = useHistory();

  return (
    <div
      className="journalCard"
      onClick={() =>
        history.push("/journal/" + title.replace(/ /g, ""), { title, image, summary })
      }
    >
      <ImageWithFallback className="media" src={image} alt={title} />
      <div className="coverEffect"></div>
      <div className="meta">
        <h3>{title}</h3>
        <p>{summary}</p>
      </div>
    </div>
  );
}
