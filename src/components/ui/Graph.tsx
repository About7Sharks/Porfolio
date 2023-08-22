import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import * as d3 from "d3";

export default function Graph({ articles, onTagDoubleClick }) {
  const history = useHistory();
  useEffect(() => {
    // d3.select("#global-graph-icon").selectAll("*").remove();

    // Extract unique tags
    const tagsSet = new Set();
    articles.forEach((article) =>
      article.data.tags.forEach((tag) => tagsSet.add(tag))
    );

    // Create nodes for tags and articles
    const nodes = Array.from(tagsSet)
      .map((tag) => ({ id: tag, type: "tag" }))
      .concat(
        articles.map((article) => ({ id: article.data.title, type: "article" }))
      );

    // Create links between articles and their tags
    const links = [];
    articles.forEach((article) => {
      article.data.tags.forEach((tag) => {
        links.push({ source: article.data.title, target: tag });
      });
    });

    // Create the SVG element
    
    const svg = d3
      .select("#global-graph-icon")
      .attr("width", 320)
      .attr("height", 320);

    const simulation = d3
      .forceSimulation(nodes)
      .force(
        "link",
        d3
          .forceLink(links)
          .id((d) => d.id)
          .distance(50)
      )
      .force("charge", d3.forceManyBody().strength(-20))
      .force("center", d3.forceCenter(160, 160));

    const link = svg
      .append("g")
      .selectAll("line")
      .data(links)
      .enter()
      .append("line")
      .style("stroke", "#aaa")
      .style("stroke-width", 1);

    const nodeGroup = svg
      .append("g")
      .selectAll("g")
      .data(nodes)
      .enter()
      .append("g")
      .call(
        d3
          .drag()
          .on("start", dragstarted)
          .on("drag", dragged)
          .on("end", dragended)
      );

    nodeGroup
      .append("circle")
      .attr("r", (d) => (d.type === "tag" ? 5 : 10))
      .attr("fill", (d) => (d.type === "tag" ? "#ccc" : "#000"))
      .on("mouseover", mouseover)
      .on("mouseout", mouseout)
      .on("dblclick", dblclick);

    nodeGroup
      .append("text")
      .attr("dx", 12)
      .style("font-size", "14px")
      .style("fill", "#fff")
      .style("opacity", 1)
      .attr("dy", ".35em")
      .style("opacity", 0)
      .text((d) => d.id);

    simulation.on("tick", () => {
      link
        .attr("x1", (d) => d.source.x)
        .attr("y1", (d) => d.source.y)
        .attr("x2", (d) => d.target.x)
        .attr("y2", (d) => d.target.y);

      nodeGroup.attr("transform", (d) => `translate(${d.x}, ${d.y})`);
    });

    // Drag functions
    function dragstarted(event, d) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    }

    function dragged(event, d) {
      d.fx = event.x;
      d.fy = event.y;
    }

    function dragended(event, d) {
      if (!event.active) simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    }
    // Double-click
    function dblclick(event, d) {
      if (d.type === "article") {
        // Navigate to the corresponding URL for articles
        const urlTitle = d.id.replace(/\s+/g, ""); // Removing spaces to match the URL pattern
        history.push(`/journal/${urlTitle.replace(/ /g, "")}`);
      } else if (d.type === "tag") {
        // Emit an event to the parent component for tags
        onTagDoubleClick(d.id);
      }
    }

    // Hover functions
    function mouseover(event, d) {
      d3.select(this).transition().attr("r", 15);
      d3.select(this.parentNode)
        .select("text")
        .transition()
        .style("opacity", 1);
    }

    function mouseout(event, d) {
      d3.select(this)
        .transition()
        .attr("r", (d) => (d.type === "tag" ? 5 : 10));
      d3.select(this.parentNode)
        .select("text")
        .transition()
        .style("opacity", 0);
    }
  }, [articles, history, onTagDoubleClick]);

  return (
    <div className="JournalGraph">
      <h2>Graph View</h2>
      <p>
        Double click a black node to go directly to an article. Double click a
        grey node to filter via tags.
      </p>
      <svg
        version="1.1"
        id="global-graph-icon"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      ></svg>
    </div>
  );
}
