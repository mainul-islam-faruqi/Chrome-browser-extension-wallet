import React from "react";
import NavigationHeader from "../../components/NavigationHeader";
import styled from "@emotion/styled";
import Input from "../../components/Input";
import { DivFlex } from "../../components";
import { EthIcon, ChevronDownIcon } from "../../components/Svg";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";

const InputField = styled.div`
  flex-basis: 50%;
  input {
    height: 48px;
    font-family: "Lato";
    color: ${({ theme }) => theme.palette.text_colors.neutral_800};
    font-size: ${({ theme }) => theme.typography.body1.fontSize};
    font-weight: ${({ theme }) => theme.typography.body1.fontWeight};
    line-height: ${({ theme }) => theme.typography.h3.lineHeight};
    ::placeholder {
      color: ${({ theme }) => theme.palette.text_colors.neutral_500};
      font-family: "Lato";
      font-size: ${({ theme }) => theme.typography.body1.fontSize};
      font-weight: ${({ theme }) => theme.typography.body1.fontWeight};
      line-height: ${({ theme }) => theme.typography.h3.lineHeight};
    }
  }
`;

const SelectToken = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-basis: 50%;
  cursor: pointer;

  p {
    color: ${({ theme }) => theme.palette.text_colors.neutral_800};
  }

  box-sizing: border-box;
  padding: 10px 16px;
  border: 1px solid ${({ theme }) => theme.palette.text_colors.neutral_275};
  border-radius: 10px;
`;

const ListContainer = styled.div`
  padding: 16px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  // height: 372px;
  // overflow-y: scroll;
  // ::-webkit-scrollbar {
  //   display: none;
  // }
`;

const ListHeadline = styled.div`
  height: 20px;
  font-family: "Lato";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: ${({ theme }) => theme.palette.text_colors.neutral_675};
`;

const PriceInputField = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-basis: 50%;
  cursor: pointer;

  p {
    color: ${({ theme }) => theme.palette.text_colors.neutral_800};
  }

  box-sizing: border-box;
  padding: 10px 16px;
  border: 1px solid ${({ theme }) => theme.palette.text_colors.neutral_275};
  border-radius: 10px;
`;

const InputLeftText = styled.div`
  height: 28px;
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  color: #272950;
`;

const InputRightButton = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 5px 16px 3px;
  position: absolute;
  width: 60px;
  height: 28px;
  left: 111px;
  border: 1px solid #adb1f2;
  border-radius: 40px;
`;

const InputBottomText = styled.div`
  height: 16px;
  font-family: "Lato";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  align-items: center;
  margin-top: 4px;
  color: #a1a2bd;
`;

const List = () => {
  return (
    <>
      <NavigationHeader label="List" info />

      <ListContainer>
        <ListHeadline>List Price</ListHeadline>
        <DivFlex
          justifyContent="space-between"
          gap="16px"
          style={{ marginTop: "4px" }}
        >
          <PriceInputField>
            <InputLeftText>.085</InputLeftText>
            <InputRightButton>Floor</InputRightButton>
          </PriceInputField>
          <SelectToken onClick={() => navigate("/")}>
            <EthIcon />
            <Typography variant="body1"> ETH </Typography>
            <ChevronDownIcon />
          </SelectToken>
        </DivFlex>
        <InputBottomText>1,000.23 USD</InputBottomText>
      </ListContainer>
    </>
  );
};

export default List;
