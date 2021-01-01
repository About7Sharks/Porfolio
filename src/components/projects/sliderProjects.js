import React, { useEffect, useRef } from "react";
import "./projects.scss";
import Button from "@material-ui/core/Button";

function useTilt(active) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current || !active) {
      return;
    }

    const state = {
      rect: undefined,
      mouseX: undefined,
      mouseY: undefined,
    };

    let el = ref.current;

    const handleMouseMove = (e) => {
      if (!el) {
        return;
      }
      if (!state.rect) {
        state.rect = el.getBoundingClientRect();
      }
      state.mouseX = e.clientX;
      state.mouseY = e.clientY;
      const px = (state.mouseX - state.rect.left) / state.rect.width;
      const py = (state.mouseY - state.rect.top) / state.rect.height;

      el.style.setProperty("--px", px);
      el.style.setProperty("--py", py);
    };

    el.addEventListener("mousemove", handleMouseMove);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
    };
  }, [active]);

  return ref;
}

function Slide({ slide, offset }) {
  const active = offset === 0 ? true : null;
  const ref = useTilt(active);

  return (
    <div
      ref={ref}
      className="slide"
      data-active={active}
      style={{
        "--offset": offset,
        "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1,
      }}
    >
      <div className="slideBackground" />
      <div
        className="slideContent"
        style={{ backgroundImage: `url('${slide.img}')` }}
      >
        <div className="slideContentInner">
          <h2 className="slideTitle">{slide.title}</h2>
          <h3 className="slideSubtitle">{slide.subtitle}</h3>
          <p className="slideDescription">{slide.text}</p>
          <Button
            variant="contained"
            color="primary"
            style={{ cursor: "pointer", width: "100%" }}
            onClick={() => window.open(slide.url)}
          >
            Visit
          </Button>
        </div>
      </div>
    </div>
  );
}

export default function App(params) {
  console.log(params);
  let { sites } = params;
  let slides = params.sites.map((site) => {
    return {
      title: site.title,
      image: site.img,
      description: site.text,
      url: site.url,
      tags: site.tags,
    };
  });
  const [state, updateState] = React.useState({
    projects: params.sites,
    slideIndex: 0,
  });
  useEffect(() => {
    updateState({ slideIndex: 0, projects: params.sites });
  }, [params]);
  const slidesReducer = (event) => {
    console.log(event);
    if (event === "NEXT") {
      console.log(state.projects);
      console.log(state.slideIndex, slides.length);
      updateState({
        ...state,
        slideIndex: (state.slideIndex - 1) % state.projects.length,
      });
    }
    if (event === "PREV") {
      updateState({
        ...state,
        slideIndex:
          state.slideIndex === 0 ? slides.length + 1 : state.slideIndex + 1,
      });
    }
  };
  const filterByTag = (e, value) => {
    let newList = sites
      .map((site) => {
        return {
          title: site.title,
          image: site.img,
          description: site.text,
          url: site.url,
          tags: site.tags,
        };
      })
      .filter((site) => site.tags.includes(value));
    updateState({
      slideIndex: 0,
      projects: newList,
    });
  };

  return (
    <div id="projects" className="projects">
      <div className="slides">
        <button onClick={() => slidesReducer("PREV")}>‹</button>
        {[...state.projects, ...state.projects, ...state.projects].map(
          (slide, i) => {
            let offset = state.projects.length + (state.slideIndex - i);
            return <Slide slide={slide} offset={offset} key={i} />;
          }
        )}
        <button onClick={() => slidesReducer("NEXT")}>›</button>
      </div>
    </div>
  );
}
