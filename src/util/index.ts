// Learned from https://medium.com/swlh/import-components-in-react-like-a-pro-b1340cb76a1b
export { WarningMessage } from './WarningMessage';
export { spinAnimation, spinAnimationV2 } from './SpinAnimation';
export { default as Picker } from './Picker';
export { getArticles, getArticle } from 'socks-librarian';
export { Cards } from "./Cards";
export { BeforeLoad } from './BeforeLoad';
export { ViewportProgress } from "./ViewportProgress";
export { useOnScreen } from "./useOnScreen";
export { Emoji } from "./Emoji";

// Simple 1-line functions
export const checkForDevice = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth < 767.98) {
      return true;
    } else {
      return false;
    }
  };
