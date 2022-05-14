
export const checkForDevice = () => {
    let windowWidth = window.innerWidth;
    if (windowWidth < 767.98) {
      return true;
    } else {
      return false;
    }
  };
