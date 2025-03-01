"use client";
import { Box, Typography, useColorScheme } from "@mui/material";
import Image from "next/image";

interface TeamLogoWithLabelProps {
  label: string;
  logo: string;
  darkLogo: string;
  logoWidth?: number;
  logoHeight?: number;
}

export const TeamLogoWithLabel = ({
  label,
  logo,
  darkLogo,
  logoWidth = 70,
  logoHeight = 70,
}: TeamLogoWithLabelProps) => {
  const { mode } = useColorScheme();

  return (
    <Box textAlign={"center"}>
      <Typography>{label}</Typography>
      <Image
        src={mode === "dark" ? darkLogo : logo}
        width={logoWidth}
        height={logoHeight}
        alt="Team Logo"
      />
    </Box>
  );
};
