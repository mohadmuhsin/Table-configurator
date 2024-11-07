import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Slider,
  Stack,
  Typography,
} from "@mui/material";
import { useConfigurator } from "../Context/configurator";
export const Interface = () => {

  const {
    legs,
    setLegs,
    legsColor,
    setLegsColor,
    tableWidth,
    setTableWidth,
    tableHeight,
    setTableHeight,
    tableLength,
    setTableLength,
  } = useConfigurator();
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        right: 0,
      }}
      p={3}
    >
      <Stack spacing={3}>
        <Typography variant="caption">Table Configurator</Typography>
        <Box className="glass" p={3}>
          <FormControl>
            <FormLabel>Table width</FormLabel>
            <Slider
              sx={{
                width: "200px",
              }}
              min={50}
              max={200}
              value={tableWidth}
              onChange={(e) => setTableWidth(e.target.value)}
              valueLabelDisplay="auto"
            />
          </FormControl>
        </Box>
        <Box className="glass" p={3}>
          <FormControl>
            <FormLabel>Table length</FormLabel>
            <Slider
              sx={{
                width: "200px",
              }}
              min={50}
              max={200}
              value={tableLength}
              onChange={(e) => setTableLength(e.target.value)}
              valueLabelDisplay="auto"
            />
          </FormControl>
        </Box>
        {/* <Box className="glass" p={3}>
          <FormControl>
            <FormLabel>Table height</FormLabel>
            <Slider
              sx={{
                width: "200px",
              }}
              min={0}
              max={100}
              value={tableHeight}
              onChange={(e) => setTableHeight(e.target.value)}
              valueLabelDisplay="auto"
            />
          </FormControl>
        </Box> */}
        <Box className="glass" p={3}>
          <FormControl>
            <FormLabel>Legs Layout</FormLabel>
            <RadioGroup
              value={legs}
              onChange={(e) => setLegs(parseInt(e.target.value))}
            >
              <FormControlLabel
                value={0}
                control={<Radio />}
                label="Standard"
              />
              <FormControlLabel value={1} control={<Radio />} label="Solid" />
              <FormControlLabel value={2} control={<Radio />} label="Design" />
            </RadioGroup>
          </FormControl>
        </Box>
        <Box className="glass" p={3}>
          <FormControl>
            <FormLabel>Legs Color</FormLabel>
            <RadioGroup
              value={legsColor}
              onChange={(e) => setLegsColor(e.target.value)}
            >
              <FormControlLabel
                value={"#777777"}
                control={<Radio />}
                label="Black"
              />
              <FormControlLabel
                value={"#ECECEC"}
                control={<Radio />}
                label="Chrome"
              />
              <FormControlLabel
                value={"#C9BD71"}
                control={<Radio />}
                label="Gold"
              />
              <FormControlLabel
                value={"#C9A3B9"}
                control={<Radio />}
                label="Pink Gold"
              />
            </RadioGroup>
          </FormControl>
        </Box>
      </Stack>
    </Box>
  );
};
