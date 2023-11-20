"use client";

import { useState, useEffect, useRef } from "react";
import {
  Box,
  FormControl,
  Chip,
  Autocomplete,
  TextField,
  Slider,
} from "@mui/material";
import { withStyles } from "@mui/styles";
import styled from "@emotion/styled";
import contentTypeData from "@/dto/contentType";

const contentTypes = Object.keys(contentTypeData);

export default function ContentType() {
  const [contentType, setContentType] = useState("Fun");
  const [contentTitle, setContentTitle] = useState("");

  const autoCompleteRef = useRef();

  const marks = [
    {
      value: 100,
      label: "100",
    },
    {
      value: 200,
      label: "200",
    },
    {
      value: 300,
      label: "300",
    },
    {
      value: 400,
      label: "400",
    },
    {
      value: 500,
      label: "500",
    },
    {
      value: 600,
      label: "600",
    },
    {
      value: 700,
      label: "700",
    },
    {
      value: 800,
      label: "800",
    },
    {
      value: 900,
      label: "900",
    },
    {
      value: 1000,
      label: "1000",
    },
  ];

  function valuetext(value) {
    return `${value}`;
  }

  function valueLabelFormat(value) {
    return marks.findIndex((mark) => mark.value == value) + 1;
  }

  const onTypeChange = (type) => {
    if (autoCompleteRef.current) {
      const ele = autoCompleteRef.current.getElementsByClassName(
        "MuiAutocomplete-clearIndicator"
      )[0];
      if (ele) ele.click();
    }
    setContentType(type);
  };
  const onTitleChange = (title) => setContentTitle(title);

  const contentTitles = contentTypeData[contentType];
  console.log("Content Titles: ", contentTitles);

  const StyledTextField = withStyles({
    root: {
      "& .MuiInputBase-root": {
        color: "white",
      },
    },
  })(TextField);

  useEffect(() => {}, [contentType]);

  return (
    <Box className="w-full px-8 text-primary">
      <Box className=" h-[125px] flex items-center border-b-[1px] border-border-divider">
        <Box className="w-full">
          <p className="text-2xl font-medium">Content Type</p>
          <p className="text-base">
            Choose a content type that best fits your needs.
          </p>
        </Box>
      </Box>

      <FormControl fullWidth>
        <Box className="flex flex-col justify-between h-full mt-10 sm:mb-8 md:mb-0">
          <p className="text-lg font-medium sm:mb-4 lg:mb-0">
            What type of content are you creating?
          </p>

          <Box className="chips-container gap-x-3 gap-y-[2px]">
            {contentTypes.map((type) => (
              <Chip
                label={type}
                onClick={() => onTypeChange(type)}
                variant="outlined"
                className={`w-fit h-[49px] ${
                  contentType === type ? "bg-button-primary-background" : ""
                } text-primary font-normal text-sm px-7 py-[14px] rounded-[30px] border-gray-300`}
                key={type}
              />
            ))}
          </Box>
        </Box>

        <Box className="flex flex-col justify-between h-[100px] max-h-[140px] sm:mt-1 md:mt-8">
          <p className="text-lg font-medium">
            Which type of "{contentType}" content do you want to create?
          </p>

          <Box className="flex flex-wrap gap-x-3 gap-y-[2px]">
            <Autocomplete
              disablePortal
              ref={autoCompleteRef}
              options={contentTitles}
              sx={{
                color: "white",
                ".MuiOutlinedInput-notchedOutline": {
                  borderColor: "#fff",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#fff",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#fff",
                },
                ".MuiSvgIcon-root ": {
                  fill: "#fff !important",
                },
              }}
              className="sm:w-[470px] xs:w-[342px] md:w-[526px] bg-[#3A39404D] text-base"
              onChange={(title) => onTitleChange(title)}
              renderInput={(params) => (
                <StyledTextField {...params} label="Select" />
              )}
            />
          </Box>
        </Box>

        <Box className="flex flex-col justify-between h-[116px] mt-8 mb-[283px]">
          <p className="flex items-center text-base font-medium">
            Set the number of words for output text.
          </p>

          <Box className="slider-wrapper w-343 mt-[30px] h-[64x] flex bg-[#09090d] rounded-xl items-center">
            <p className="w-[37px] font-medium -mt-4 text-center">0</p>
            <Slider
              aria-label="Always visible"
              defaultValue={700}
              getAriaValueText={valuetext}
              step={100}
              marks={marks}
              min={0}
              max={1000}
              valueLabelDisplay="auto"
              className="py-8 bg-home-bottom-nav text-primary"
              sx={{
                "& .MuiSlider-thumb": {
                  color: "#FF7DFF",
                },
                "& .MuiSlider-track": {
                  background: "linear-gradient(to right, #523FD7, #FF7DFF)",
                },
                "& .MuiSlider-markLabel": {
                  color: "#fff",
                  marginTop: "16.5px",
                },
              }}
            />
          </Box>
        </Box>
      </FormControl>
    </Box>
  );
}
