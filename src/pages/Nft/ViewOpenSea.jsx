import React from "react";
import { useTheme } from "@mui/material";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Header from "../../components/Header";
import styled from "@emotion/styled";
import ReloadIcon from "../../components/Svg/Icons/Reload";
import CompletedCheck from "../../components/Svg/Icons/CompletedCheck";
import { LogoIcon } from "../../components/Svg";

const ReloadIconText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DeccriptionText = styled.div`
  font-family: "Helvetica Neue LT Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.palette.key_colors.primary_475};
`;

const NewTransctionText = styled.div`
  height: 24px;
  font-family: "Lato";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.palette.key_colors.primary_550};
`;

const ViewOpenSea = () => {
  const navigate = useNavigate();
  return (
    <div>
      <>
        <Header page="homepage" />

        <Box
          sx={{
            padding: "16px",
            height: "372px",
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
          }}
        >
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "52px",
            }}
          >
            <LogoIcon width="96px" height="97px" />
          </Box>

          <DeccriptionText style={{ textAlign: "center" }}>
            Listing Pink Room #109 on OpenSea <br /> for 0.01 ETH.
          </DeccriptionText>

          <ReloadIconText>
            <ReloadIcon
              style={{ paddingRight: "4px" }}
              height="17.5px"
              width="17.43px"
            />
            <NewTransctionText>New Transaction</NewTransctionText>
          </ReloadIconText>

          <Button
            size="fullWidth"
            variant="primary"
            label="View on OpenSea"
            style={{
              marginBottom: "9px",
            }}
            onClick={() => navigate("/nftCompleted")}
          />
        </Box>
      </>
    </div>
  );
};

export default ViewOpenSea;