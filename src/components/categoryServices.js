import React, { useState, useEffect, useContext } from "react";
// Styled Components
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styled, { css } from "styled-components";
import CursorContext from "../context/CursorContext";

const columnsList = [
  {
    id: 0,
    title: "Scenery",
    backgroundColor: "bg-orange-300",
    columnHeightClassname: "",
    widthColumn: "18%",
    heightColumn: "74%",
  },
  {
    id: 1,
    title: "Backgrounds",
    backgroundColor: "bg-cyan-500",
    columnHeightClassname: "",
    widthColumn: "18%",
    heightColumn: "77%",
  },
  {
    id: 2,
    title: "Nature",
    backgroundColor: "bg-fuchsia-600",
    columnHeightClassname: "",
    widthColumn: "20%",
    heightColumn: "83%",
  },
  {
    id: 3,
    title: "Characters",
    backgroundColor: "bg-neutral-500",
    columnHeightClassname: "",
    widthColumn: "20%",
    heightColumn: "90%",
  },
  {
    id: 4,
    title: "Architecture",
    backgroundColor: "bg-rose-200",
    columnHeightClassname: "",
    widthColumn: "20%",
    heightColumn: "83%",
  },
];

const CategoryServices = () => {
  // Default state, using number for our id. Which ever the number/id is in the state. That will be opened.

  return (
    <div className="relative min-h-screen overflow-hidden mx-8 flex justify-end">
      <Wrapper>
        <Container>
          <Flex alignEnd>
            {columnsList.map((column) => {
              return (
                <ColumnServices
                  key={column.title}
                  growDefault={column.growDefault}
                  heightColumn={column.heightColumn}
                  widthColumn={column.widthColumn}
                  className={`${column.backgroundColor} overflow-hidden pl-4`}
                >
                  <DescriptionWrapper>
                    <SmallDescription>{column.title}</SmallDescription>
                    <h3 className="uppercase font-semibold font-sans text-[260px] tracking-wider mt-[22vh]">
                      {column.title}
                    </h3>
                  </DescriptionWrapper>
                </ColumnServices>
              );
            })}
          </Flex>
        </Container>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  -webkit-box-pack: start;
  justify-content: flex-end;
  width: calc(var(--vh, 1vh) * 140);
`;

const DescriptionWrapper = styled.div`
  height: 70vh;
  position: relative;
`;

const ColumnServices = styled.div`
  display: flex;
  background-color: ${(props) => props.bgColor};
  height: ${(props) => props.heightColumn};
  width: ${(props) => props.widthColumn};
  align-items: flex-end;
  position: relative;
`;

const SmallDescription = styled.span`
  position: absolute;
  transform: rotate(90deg);
  left: 20px;
  top: 8vh;
  font-size: 16px;
  font-family: Helvetica Neue;
  transform-origin: 0% 100%;
`;

const Container = styled.div`
  flex-grow: 1;
  margin: 0 auto;
  position: relative;
  width: 100%;
  height: 100%;
  padding-left: calc(var(--vh, 1vh) * 8.5185);
  padding-right: calc(var(--vh, 1vh) * 6.8519);
`;

const Flex = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: calc(var(--vh, 1vh) * 84);
  ${(props) =>
    props.spaceBetween &&
    css`
      justify-content: space-between;
    `};
  ${(props) =>
    props.flexEnd &&
    css`
      justify-content: flex-end;
    `};
  ${(props) =>
    props.alignTop &&
    css`
      align-items: flex-start;
    `};
  ${(props) =>
    props.alignEnd &&
    css`
      align-items: flex-end;
    `};
  ${(props) =>
    props.noHeight &&
    css`
      height: 0;
    `};
`;

export default CategoryServices;
