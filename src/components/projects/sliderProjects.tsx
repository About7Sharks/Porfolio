import React, { useEffect, useRef } from "react";
import Button from "@material-ui/core/Button";
import "../../styles/projects.scss";
import { Site } from "../../types";

function useTilt(active: boolean | null) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current || !active) {
      return;
    }

    const state: {
      rect: DOMRect | undefined;
      mouseX: number | undefined;
      mouseY: number | undefined;
    } = {
      rect: undefined,
      mouseX: undefined,
      mouseY: undefined,
    };

    const el = ref.current;

    const handleMouseMove = (e: MouseEvent) => {
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

      el.style.setProperty("--px", String(px));
      el.style.setProperty("--py", String(py));
    };

    el.addEventListener("mousemove", handleMouseMove);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
    };
  }, [active]);

  return ref;
}

interface SlideProps {
  slide: Site;
  offset: number;
}

function Slide({ slide, offset }: SlideProps) {
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
      } as React.CSSProperties}
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

interface ProjectSliderProps {
  sites: Site[];
}

interface SliderState {
  projects: Site[];
  slideIndex: number;
}

export default function ProjectSlider({ sites }: ProjectSliderProps) {
  const slides = sites.map((site) => ({
    title: site.title,
    image: site.img,
    description: site.text,
    url: site.url,
    tags: site.tags,
  }));

  const [state, updateState] = React.useState<SliderState>({
    projects: sites,
    slideIndex: 0,
  });

  useEffect(() => {
    updateState({ slideIndex: 0, projects: sites });
  }, [sites]);

  const slidesReducer = (event: "NEXT" | "PREV") => {
    if (event === "NEXT") {
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

  return (
    <div id="projects" className="projects">
      <div className="slides">
        <button onClick={() => slidesReducer("PREV")}>‹</button>
        {[...state.projects, ...state.projects, ...state.projects].map(
          (slide, i) => {
            const offset = state.projects.length + (state.slideIndex - i);
            return <Slide slide={slide} offset={offset} key={i} />;
          }
        )}
        <button onClick={() => slidesReducer("NEXT")}>›</button>
      </div>
    </div>
  );
}
