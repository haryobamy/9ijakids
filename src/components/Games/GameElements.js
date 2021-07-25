import styled from "styled-components";
import * as FaIcons from "react-icons/fa";
import * as ImIcons from "react-icons/im";
import { Collapse, Checkbox } from "antd";

const { Panel } = Collapse;

export const GameContainer = styled.div`
  max-width: 100vw;
  width: 100%;
  min-height: 100vh;
  /* padding: 0rem 0rem; */

  background: #150f0f;
  color: #fff;
`;

export const GameHeading = styled.h1`
  margin-bottom: 3rem;
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
`;

export const GameSearch = styled.div`
  text-align: center;
  background: gray;
  width: 100%;
  max-width: 500px;
  margin: 0rem auto 3rem auto;
  height: 50px;
  border-radius: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  input {
    width: 100%;
    max-width: 420px;
    margin-left: 10px;
    height: 25px;
    outline: none;
    background: none;
    border: none;
    &::placeholder {
      color: #000;
    }
  }

  @media screen and (max-width: 400px) {
    max-width: 350px;
  }
`;

export const SearchIcon = styled(FaIcons.FaSearch)`
  margin-left: 0px;
`;
export const FilterIcon = styled(FaIcons.FaFilter)`
  margin-left: 10px;
`;
export const Filter = styled.div`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  margin: 0rem auto 3rem auto;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;

  @media screen and (max-width: 400px) {
    flex-direction: column;
    font-size: 1rem;
  }
`;

export const FilterMenu = styled.div`
  text-align: center;
  height: 60px;
  letter-spacing: 0.1rem;
  margin: 0rem auto 3rem auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  /* flex-direction: column; */
  color: #000;
  width: 100%;
  max-width: 600px;
  border-radius: 10px;

  background: gray;
  box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.5);
  /* position: absolute;
  top: 170px; */
  /* right: 300px; */
  /* right: ${({ isOpen }) => (isOpen ? "300px" : "-1000px")}; */

  @media screen and (max-width: 400px) {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    max-width: 150px;
    width: 100%;
    height: 150px;
    margin: 0rem auto 1rem auto;
  }
`;
export const FilterItem = styled.button`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  outline: none;
  border: none;
  border-radius: 10px;
  color: #000;
  transition: 0.2s ease-in-out;
  padding: 0.5rem 0.5rem;
  max-width: 120px;
  width: 100%;
  margin: 3px auto;
  &:hover {
    color: #000;
    background: #ffc500;
    cursor: pointer;
    transition: 0.2s ease-in-out;
  }

  @media screen and (max-width: 400px) {
    display: flex;
    padding: 0.5rem 0rem;
  }
`;

export const FilterSubmenu = styled.div``;

export const GroupIcon = styled(ImIcons.ImMakeGroup)`
  @media screen and (max-width: 400px) {
    display: none;
  }
`;
export const LevelIcon = styled(ImIcons.ImDatabase)`
  @media screen and (max-width: 400px) {
    display: none;
  }
`;

export const GameWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;

export const GameCard = styled.div`
  margin: 0 2rem;
  line-height: 2;
  width: 300px;
`;

export const GameImg = styled.img`
  max-width: 100%;
  min-width: 200px;
  height: 200px;
  box-shadow: 8px 8px grey;
  object-fit: contain;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

export const GameInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
  line-height: 2rem;
  margin-top: -40px;
`;

export const GameTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
`;

export const GameDesc = styled.p`
  margin-bottom: 1rem;
`;

export const GameButton = styled.button`
  font-size: 1rem;
  padding: 1rem 4rem;
  border: none;
  color: #fff;
  background: #e31837;
  transition: 0.2s ease-in-out;
  border-radius: 10px;

  &:hover {
    color: #000;
    background: #ffc500;
    cursor: pointer;
    transition: 0.2s ease-in-out;
  }
`;
