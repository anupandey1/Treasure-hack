import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function BasicGrid({
  data,
  diet,
  health,
  cuisineType,
  mealType,
  setDiet,
  fetchData,
  setHealth,
  setCuisineType,
  setmealType,
}) {
  const dietChange = (e) => {
    setDiet(e.target.value);
  };

  const healthChange = (e) => {
    setHealth(e.target.value);
  };

  const cuisineTypeChange = (e) => {
    setCuisineType(e.target.value);
  };

  const mealTypeChange = (e) => {
    setmealType(e.target.value);
  };
  return (
    <>
      <Box
        sx={{
          width: "100vw",
          height: "3rem",
          backgroundColor: "#058C42",
          fontFamily: "georgia",
          fontSize: "2rem",
          pl: "3.5rem",
          zIndex: 99,
          position: "absolute",
          top: "0",
          boxShadow: "1px 1px 5px 1px black",
        }}
      >
        <h2 className="text-white">Nutrio</h2>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0.5} sx={{ width: "100vw" }}>
          <Grid item xs={2} sx={{ position: "" }}>
            <Item sx={{ height: "100vh", color: "white" }}>
              <FormControl sx={{ m: 1, minWidth: 120, mt: "6rem" }}>
                <InputLabel id="demo-simple-select-helper-label">
                  Diet
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={diet}
                  label="diet"
                  onChange={dietChange}
                >
                  <MenuItem value="balanced">
                    <em>Balanced</em>
                  </MenuItem>
                  <MenuItem value={"high-fiber"}>high-fiber</MenuItem>
                  <MenuItem value={"high-protein"}>high-protein</MenuItem>
                  <MenuItem value={"low-carb"}>low-carb</MenuItem>
                  <MenuItem value={"low-fat"}>low-carb</MenuItem>
                  <MenuItem value={"low-sodium"}>low-carb</MenuItem>
                </Select>
              </FormControl>

              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-helper-label">
                  Health
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={health}
                  label="health"
                  onChange={healthChange}
                >
                  <MenuItem value="vegetarian">
                    <em>Vegetarion</em>
                  </MenuItem>
                  <MenuItem value={"alcohol-cocktail"}>
                    alcohol-cocktail
                  </MenuItem>
                  <MenuItem value={"alcohol-free"}>alcohol-free</MenuItem>
                  <MenuItem value={"celery-free"}>celery-free</MenuItem>
                  <MenuItem value={"crustacean-free"}>crustacean-free</MenuItem>
                  <MenuItem value={"dairy-free"}>dairy-free</MenuItem>
                  <MenuItem value={"DASH"}>DASH</MenuItem>
                  <MenuItem value={"egg-free"}>egg-free</MenuItem>
                  <MenuItem value={"fish-free"}>fish-free</MenuItem>
                  <MenuItem value={"fodmap-free"}>fodmap-free</MenuItem>
                  <MenuItem value={"gluten-free"}>gluten-free</MenuItem>
                  <MenuItem value={"immuno-supportive"}>
                    immuno-supportive
                  </MenuItem>
                  <MenuItem value={"keto-friendly"}>keto-friendly</MenuItem>
                  <MenuItem value={"kidney-friendly"}>kidney-friendly</MenuItem>
                  <MenuItem value={"kosher"}>kosher</MenuItem>
                  <MenuItem value={"wheat-free"}>wheat-free</MenuItem>
                  <MenuItem value={"vegan"}>vegan</MenuItem>
                  <MenuItem value={"vegetarian"}>vegetarian</MenuItem>
                  <MenuItem value={"tree-nut-free"}>tree-nut-free</MenuItem>
                  <MenuItem value={"sulfite-free"}>sulfite-free</MenuItem>
                  <MenuItem value={"sugar-conscious"}>sugar-conscious</MenuItem>
                  <MenuItem value={"soy-free"}>soy-free</MenuItem>
                  <MenuItem value={"sesame-free"}>sesame-free</MenuItem>
                  <MenuItem value={"shellfish-free"}>shellfish-free</MenuItem>
                  <MenuItem value={"red-meat-free"}>red-meat-free</MenuItem>
                  <MenuItem value={"pork-free"}>pork-free</MenuItem>
                  <MenuItem value={"peanut-free"}>peanut-free</MenuItem>
                  <MenuItem value={"paleo"}>paleo</MenuItem>
                  <MenuItem value={"mustard-free"}>mustard-free</MenuItem>
                  <MenuItem value={"low-sugar"}>low-sugar</MenuItem>
                </Select>
              </FormControl>

              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-helper-label">
                  Meal Type
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={mealType}
                  label="mealTyoe"
                  onChange={mealTypeChange}
                >
                  <MenuItem value="Lunch">
                    <em>Lunch</em>
                  </MenuItem>
                  <MenuItem value={"Breakfast"}>Breakfast</MenuItem>
                  <MenuItem value={"Dinner"}>Dinner</MenuItem>
                  <MenuItem value={"Lunch"}>Lunch</MenuItem>
                  <MenuItem value={"Snack"}>Snack</MenuItem>
                  <MenuItem value={"Teatime"}>Teatime</MenuItem>
                </Select>
              </FormControl>

              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-helper-label">
                  Cuisine Type
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={cuisineType}
                  label="cuisine type"
                  onChange={cuisineTypeChange}
                >
                  <MenuItem value="Asian">
                    <em>Asian</em>
                  </MenuItem>
                  <MenuItem value={"American"}>American</MenuItem>
                  <MenuItem value={"Asian"}>Asian</MenuItem>
                  <MenuItem value={"British"}>British</MenuItem>
                  <MenuItem value={"Caribbean"}>Caribbean</MenuItem>
                  <MenuItem value={"Central Europe"}>Central Europe</MenuItem>
                  <MenuItem value={"Chinese"}>Chinese</MenuItem>
                  <MenuItem value={"Eastern Europe"}>Eastern Europe</MenuItem>
                  <MenuItem value={"French"}>French</MenuItem>
                  <MenuItem value={"Indian"}>Indian</MenuItem>
                  <MenuItem value={"Japanese"}>Japanese</MenuItem>
                  <MenuItem value={"Kosher"}>Kosher</MenuItem>
                  <MenuItem value={"Mediterranean"}>Mediterranean</MenuItem>
                  <MenuItem value={"Mexican"}>Mexican</MenuItem>
                  <MenuItem value={"Middle Eastern"}>Middle Eastern</MenuItem>
                  <MenuItem value={"Nordic"}>Nordic</MenuItem>
                  <MenuItem value={"South American"}>South American</MenuItem>
                  <MenuItem value={"South East Asian"}>
                    South East Asian
                  </MenuItem>
                </Select>
              </FormControl>
              <Button
                onClick={fetchData}
                variant="contained"
                sx={{
                  backgroundColor: "#058C42",
                  width: "7rem",
                  height: "2.8rem",
                  mt: "2rem",
                }}
              >
                Submit
              </Button>
            </Item>
          </Grid>
          <Grid
            item
            xs={10}
            sx={{ height: "100vh", overflowY: "auto", mt: "3rem" }}
          >
            <Item>
              {data.hits ? (
                <div>
                  {data.hits.map((items) => {
                    return (
                      <>
                        {/* <div className="container">
                          <div>
                            <img src={items.recipe.images.REGULAR.url} alt="" />
                          </div>
                          <p>{items.recipe.label}</p>
                          <p>{Math.round(items.recipe.calories)}</p>
                          <div>
                            {items.recipe.digest.slice(0, 12).map((digest) => {
                              return (
                                <>
                                  <p>{digest.label}</p>
                                  <p>{`${Math.round(digest.total)}gram`}</p>
                                </>
                              );
                            })}
                          </div>
                          <p>{items.recipe.cautions}</p>
                          <p>{items.recipe.cuisineType}</p>
                          <p>{items.recipe.dietLabels}</p>
                          <hr />
                        </div> */}
                        
                        
                      </>
                    );
                  })}
                </div>
              ) : (
                <div>
                  <h3>No Results Found</h3>
                  <p>Please submit again</p>
                </div>
              )}
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
