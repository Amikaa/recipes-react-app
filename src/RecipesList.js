import React, { useState } from "react";
import { Grid, Card, CardMedia, CardContent, Typography, Popover, Button, Box, Link } from "@mui/material";
import { styled } from "@mui/system";

const StyledCard = styled(Card)`
  height: 100%;
`;

export const RecipesList = ({ recipes }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleClick = (event, recipeIndex) => {
    setAnchorEl(event.currentTarget);
    setSelectedRecipe(recipeIndex);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSelectedRecipe(null);
  };

  const open = Boolean(anchorEl);

  return (
    <Grid
      container
      rowSpacing={3}
      columnSpacing={5}
      padding={{ xs: 4, md: 4, lg: 6 }}
    >
      {recipes.map((recipe, index) => (
        <Grid item xs={12} md={6} lg={3} key={index}>
          <StyledCard>
            <CardMedia
              sx={{ height: 140 }}
              image={recipe.recipe.image}
              title={recipe.recipe.label}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {recipe.recipe.label}
              </Typography>
              <Typography gutterBottom variant="body2" component="div">
                <b>Meal Type:</b> {recipe.recipe.mealType} | 
                <b> Cousine type:</b> {recipe.recipe.cuisineType} 
              </Typography>
              <Button onClick={(event) => handleClick(event, index)}>Show Details</Button>
            </CardContent>
          </StyledCard>
        </Grid>
      ))}

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        {selectedRecipe !== null && (
          <Box sx={{ p: 2, maxWidth: 300 }}>
            <Typography variant="h4" gutterBottom>
              {recipes[selectedRecipe].recipe.label}
            </Typography>
            <Typography variant="h3" gutterBottom>
            Ingredients
            </Typography>
            {recipes[selectedRecipe].recipe.ingredientLines.map((ingredientLine, idx) => (
              <Typography key={idx} variant="body2" gutterBottom>
                {ingredientLine}
              </Typography>
            ))}
            <Typography variant="h3" gutterBottom>
            How to make?
            </Typography>
            <Typography variant="body2" gutterBottom>
              <Link href={recipes[selectedRecipe].recipe.url} target="_blank" rel="noopener">
                Find here!
              </Link>
            </Typography>
            <Button onClick={handleClose}>Close</Button>
          </Box>
        )}
      </Popover>
    </Grid>
  );
};
