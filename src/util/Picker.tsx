import { useState, useEffect } from "react";
import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";

interface PickerData {
  tags?: string[];
}

interface PickerProps {
  data: PickerData[];
  handleChange: (event: React.ChangeEvent<{}>, value: string | null) => void;
  filter?: string;
}

const Picker = ({ data, handleChange, filter }: PickerProps) => {
  const [tags, setTags] = useState<string[]>(["All"]);

  useEffect(() => {
    if (data.length > 1) {
      setTags(
        [
          "All",
          ...new Set(
            data.reduce<string[]>((acc, obj) => acc.concat(obj.tags || []), [])
          ),
        ].filter(Boolean)
      );
    }
  }, [data]);

  return (
    <div>
      <Autocomplete
        id="searchBar"
        key={data.length + "auto"}
        options={tags}
        multiple={false}
        onChange={handleChange}
        value={filter}
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
