import { TextField } from "@mui/material";
import { InputAdornment } from "@mui/material";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState, useEffect } from "react";

export const Searchbar = ({ setRecipes }) => {
  const [query, setQuery] = useState("chicken");
  console.log(query);
  async function fetchRecipes() {
    const response = await fetch(
      `https://api.edamam.com/api/recipes/v2?q=${query}&type=public&app_id=67f597e1&app_key=1a49612bd0263663e66de913f9b47e38`,
    );
    const data = await response.json();
    setRecipes(data.hits);
  }

  function handleChange(event) {
    setQuery(event.target.value);
  }

  useEffect(() => {
    fetchRecipes();
  }, [query]);

  return (
    <TextField
      label="Search"
      onChange={handleChange}
      InputProps={{
        endAdornment: (
          <InputAdornment>
            <IconButton onClick={fetchRecipes}>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
      fullWidth
    />
  );
};
