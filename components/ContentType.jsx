"use client";

import { useState, useEffect, useRef } from "react";
import { Box, FormControl, Chip, Autocomplete, TextField } from "@mui/material";
import { withStyles } from "@mui/styles";
import styled from "@emotion/styled";
import contentTypeData from "@/dto/contentType";

const contentTypes = Object.keys(contentTypeData);

export default function ContentType() {
  const [contentType, setContentType] = useState("Fun");
  const [contentTitle, setContentTitle] = useState("");

  const autoCompleteRef = useRef();

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
    <Box className="w-desktop-inside text-primary">
      <Box className="h-[125px] flex items-center border-b-[1px] border-border-bottom-color">
        <Box>
          <p className="text-2xl font-medium">Content Type</p>
          <p className="text-base">
            Choose a content type that best fits your needs.
          </p>
        </Box>
      </Box>

      <FormControl fullWidth>
        <Box className="flex flex-col justify-between h-[100px] max-h-[140px] mt-10">
          <p className="text-lg font-medium">
            What type of content are you creating?
          </p>

          <Box className="flex flex-wrap gap-x-3 gap-y-[2px]">
            {contentTypes.map((type) => (
              <Chip
                label={type}
                onClick={() => onTypeChange(type)}
                variant="outlined"
                className={`w-fit h-[49px] ${
                  contentType === type ? "bg-button-primary-background" : ""
                } text-primary font-normal text-sm px-7 py-[14px] rounded-[30px]`}
                key={type}
              />
            ))}
          </Box>
        </Box>

        <Box className="flex flex-col justify-between h-[100px] max-h-[140px] mt-10">
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
              className="w-[517px] bg-[#3A39404D] text-base"
              fullWidth
              renderInput={(params) => (
                <StyledTextField {...params} label="Select" />
              )}
            />
          </Box>
        </Box>
      </FormControl>
    </Box>
  );
}
