import { Button, ButtonGroup, Typography, Box } from "@mui/material";

function FilterControls({ minMag, setMinMag, timespan, setTimespan }) {
  const magnitudeOptions = ["all", "1.0", "2.5", "4.5", "significant"];
  const magnitudeLabels = ["ALL", "M1.0+", "M2.5+", "M4.5+", "SIGNIFICANT"];

  const timespanOptions = ["hour", "day", "week", "month"];
  const timespanLabels = [
    "LAST HOUR",
    "LAST DAY",
    "LAST 7 DAYS",
    "LAST 30 DAYS",
  ];

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        padding: "1rem",
        backgroundColor: "lightblue",
      }}
    >
      {/* Magnitude Filter */}
      <Box sx={{ marginRight: "1rem" }}>
        <Typography variant="h6" gutterBottom>
          Select Magnitude
        </Typography>
        <ButtonGroup variant="outlined" color="primary">
          {magnitudeOptions.map((option, index) => (
            <Button
              key={option}
              onClick={() => setMinMag(option)}
              variant={minMag === option ? "contained" : "outlined"}
            >
              {magnitudeLabels[index]}
            </Button>
          ))}
        </ButtonGroup>
      </Box>

      {/* Timespan Filter */}
      <Box>
        <Typography variant="h6" gutterBottom>
          Select Time Period
        </Typography>
        <ButtonGroup variant="outlined" color="primary">
          {timespanOptions.map((option, index) => (
            <Button
              key={option}
              onClick={() => setTimespan(option)}
              variant={timespan === option ? "contained" : "outlined"}
            >
              {timespanLabels[index]}
            </Button>
          ))}
        </ButtonGroup>
      </Box>
    </Box>
  );
}

export default FilterControls;
