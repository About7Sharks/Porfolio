import { SocialLinks } from "./SocialLinks";
import 'styles/footer.scss'
export default function Footer() {
  return (
    <div id="footer">
      <h3>Lets Connect</h3>
      <SocialLinks />
      <p>
        Built with <span >❤</span> by Zach
      </p>
    </div>
  );
}
