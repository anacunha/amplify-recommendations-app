/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "@aws-amplify/ui-react/internal";
import MyIcon from "./MyIcon";
import { Button, Flex, Text } from "@aws-amplify/ui-react";
export default function TopBar(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        MyIcon: {},
        Recommendations: {},
        Text: {},
        Button: {},
        TopBar: {},
      },
      variantValues: { size: "default" },
    },
    {
      overrides: {
        MyIcon: {},
        Recommendations: { fontSize: "16px", letterSpacing: "0.01px" },
        Text: {},
        Button: {},
        TopBar: {},
      },
      variantValues: { size: "small" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="20px"
      width="1440px"
      justifyContent="space-between"
      alignItems="center"
      position="relative"
      padding="24px 32px 24px 32px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "TopBar")}
    >
      <MyIcon
        width="24px"
        height="24px"
        shrink="0"
        overflow="hidden"
        position="relative"
        padding="0px 0px 0px 0px"
        type="favorite"
        {...getOverrideProps(overrides, "MyIcon")}
      ></MyIcon>
      <Flex
        gap="40px"
        width="fit-content"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        height="24px"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Text")}
      >
        <Text
          fontFamily="Inter"
          fontSize="32px"
          fontWeight="700"
          color="rgba(0,0,0,1)"
          lineHeight="24px"
          textAlign="center"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          letterSpacing="0.17px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Recommendations"
          {...getOverrideProps(overrides, "Recommendations")}
        ></Text>
      </Flex>
      <Button
        display="flex"
        gap="0"
        width="fit-content"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        height="42px"
        position="relative"
        border="1px SOLID rgba(174,179,183,1)"
        borderRadius="5px"
        padding="8px 16px 8px 16px"
        size="default"
        isDisabled={false}
        variation="default"
        children="Sign out"
        {...getOverrideProps(overrides, "Button")}
      ></Button>
    </Flex>
  );
}
