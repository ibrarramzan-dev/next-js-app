import Image from "next/image";
import { Box, Button } from "@mui/material";
import nextIcon from "@/public/assets/images/arrow-right-01-sharp.png";

export default function WizardBackNext(props) {
  return (
    <Box className="w-full h-[115px] border-t-[1px] border-border-divider bg-home-bottom-nav text-primary flex justify-between items-center px-8">
      <Button
        onClick={props.onBackClick}
        variant="outlined"
        className="w-fit h-[51px] text-primary px-[53.5px] py-4 border-border-divider rounded-button text-base"
      >
        Back
      </Button>

      <Button
        onClick={props.onNextClick}
        variant="outlined"
        className="w-[234px] h-[52px] flex justify-between bg-primary text-primary px-7 py-4 border-border-divider rounded-button text-base"
      >
        <p
          style={{
            background: "linear-gradient(to right, #523FD7, #FF7DFF)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Next
        </p>
        <Box>
          <Image src={nextIcon} alt="Next Icon" />
        </Box>
      </Button>
    </Box>
  );
}
