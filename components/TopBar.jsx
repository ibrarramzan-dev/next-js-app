import Image from "next/image";
import { Box, Button } from "@mui/material";
import backArrow from "@/public/assets/images/back-arrow.png";
import editIcon from "@/public/assets/images/edit-icon.png";

function TopBar({ pageName, pageTitle, userFname, profileImg }) {
  return (
    <Box className="w-full h-[110px] bg-home-bottom-nav border-b-[1px] border-border-divider flex justify-between items-center px-8">
      <Box className="flex w-64 h-12">
        <Button variant="outlined" className="w-[47px] h-[47px] bg-[#18171c]">
          <Image src={backArrow} alt="Back" />
        </Button>
        <Box className="w-[167px] text-primary ml-4">
          <p className="text-base font-medium">{pageName}</p>
          <p className="text-base">{pageTitle}</p>
        </Box>
        <Box className="ml-[10px]">
          <Image src={editIcon} alt="Edit" className="cursor-pointer" />
        </Box>
      </Box>

      <Box className="w-[170px]">
        <Box className="flex text-primary">
          <Box>
            <p className="text-base font-medium">{userFname}</p>
            <p className="text-base font-light">Change profile</p>
          </Box>
          <Box className="ml-3">
            <Image
              src={profileImg}
              alt="Profile pic"
              width={40}
              height={40}
              className="cursor-pointer"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default TopBar;
