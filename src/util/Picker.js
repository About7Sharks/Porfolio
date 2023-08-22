import React, { useState, useEffect } from "react";
import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
const Picker = (props) => {
  const [tags, setTags] = useState(["All"]);
  useEffect(() => {
    if (props.data.length > 1) {
      setTags(
        [
          "All",
          ...new Set(
            props.data.reduce((tags, obj) => tags.concat(obj.tags), [])
          ),
        ].filter(Boolean)
      );
    }
  }, [props.data]);

  return (
    <div>
      <Autocomplete
        id="searchBar"
        key={props.data.length + "auto"}
        options={tags}
        multiple={false}
        onChange={props.handleChange}
        value={props.filter} 
        renderInput={(params) => (
          <TextField
            {...params}
            label="Filter by tag"
            margin="normal"
            variant="outlined"
          />
        )}
      />
    </div>
  );
};

export default Picker;
