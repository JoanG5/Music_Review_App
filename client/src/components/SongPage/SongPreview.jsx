import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import IconButton from "@mui/material/IconButton";
import PauseRounded from "@mui/icons-material/PauseRounded";
import PlayArrowRounded from "@mui/icons-material/PlayArrowRounded";

const Widget = styled("div")(({ theme }) => ({
  padding: 16,
  borderRadius: 16,
  width: 343,
  maxWidth: "100%",
  margin: "auto",
  position: "relative",
  zIndex: 1,
  backgroundColor:
    theme.palette.mode === "dark" ? "rgba(0,0,0,0.6)" : "rgba(255,255,255,0.4)",
  backdropFilter: "blur(40px)",
}));

const TinyText = styled(Typography)({
  fontSize: "0.75rem",
  opacity: 0.38,
  fontWeight: 500,
  letterSpacing: 0.2,
});

export default function MusicPlayerSlider({ src }) {
  const theme = useTheme();
  const duration = 30;
  const [position, setPosition] = React.useState(0);
  const [paused, setPaused] = React.useState(true);
  const audioRef = React.useRef(new Audio(src));

  React.useEffect(() => {
    if (!paused) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [paused]);

  React.useEffect(() => {
    audioRef.current.addEventListener("timeupdate", () => {
      setPosition(audioRef.current.currentTime);
    });
    return () => {
      audioRef.current.removeEventListener("timeupdate", () => {});
    };
  }, []);

  function formatDuration(value) {
    const minute = Math.floor(value / 60);
    const secondLeft = Math.floor(value % 60);
    return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
  }

  const mainIconColor = theme.palette.mode === "dark" ? "#fff" : "#000";

  return (
    <Box sx={{ width: "100%", overflow: "hidden" }}>
      <Widget sx={{ marginLeft: 0 }}>
        <Slider
          aria-label="time-indicator"
          size="small"
          value={position}
          min={0}
          step={0.01}
          max={duration}
          onChange={(_, value) => {
            setPosition(value);
            audioRef.current.currentTime = value;
          }}
          sx={{
            color: theme.palette.mode === "dark" ? "#fff" : "rgba(0,0,0,0.87)",
            height: 4,
            "& .MuiSlider-thumb": {
              width: 8,
              height: 8,
              transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
              "&::before": {
                boxShadow: "0 2px 12px 0 rgba(0,0,0,0.4)",
              },
              "&:hover, &.Mui-focusVisible": {
                boxShadow: `0px 0px 0px 8px ${
                  theme.palette.mode === "dark"
                    ? "rgb(255 255 255 / 16%)"
                    : "rgb(0 0 0 / 16%)"
                }`,
              },
              "&.Mui-active": {
                width: 20,
                height: 20,
              },
            },
            "& .MuiSlider-rail": {
              opacity: 0.28,
            },
          }}
        />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mt: -2,
          }}
        >
          <TinyText>{formatDuration(position)}</TinyText>
          <TinyText>-{formatDuration(duration - position)}</TinyText>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mt: -1,
          }}
        >
          <IconButton
            aria-label={paused ? "play" : "pause"}
            onClick={() => setPaused(!paused)}
          >
            {paused ? (
              <PlayArrowRounded
                sx={{ fontSize: "3rem" }}
                htmlColor={mainIconColor}
              />
            ) : (
              <PauseRounded
                sx={{ fontSize: "3rem" }}
                htmlColor={mainIconColor}
              />
            )}
          </IconButton>
        </Box>
      </Widget>
    </Box>
  );
}
