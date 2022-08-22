/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import MyIcon from "./MyIcon";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function Item(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="column"
      width="410px"
      justifyContent="center"
      position="relative"
      border="2px SOLID rgba(64,170,191,1)"
      borderRadius="12px"
      padding="14px 14px 14px 14px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "Item")}
    >
      <Flex
        gap="16px"
        direction="column"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        overflow="hidden"
        position="relative"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,0)"
        {...getOverrideProps(overrides, "Content")}
      >
        <Flex
          gap="16px"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "TItle")}
        >
          <MyIcon
            width="24px"
            height="24px"
            shrink="0"
            overflow="hidden"
            position="relative"
            padding="0px 0px 0px 0px"
            type="bookmark_border"
            {...getOverrideProps(overrides, "MyIcon")}
          ></MyIcon>
          <Text
            fontFamily="Inter"
            fontSize="24px"
            fontWeight="700"
            color="rgba(0,0,0,1)"
            lineHeight="24px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            letterSpacing="0.09px"
            width="338px"
            grow="1"
            basis="338px"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Name"
            {...getOverrideProps(overrides, "Name")}
          ></Text>
        </Flex>
        <Text
          fontFamily="Inter"
          fontSize="14px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="24px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          letterSpacing="0px"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Description"
          {...getOverrideProps(overrides, "Description")}
        ></Text>
      </Flex>
    </Flex>
  );
}
