import styled from "styled-components"

export const CenteredContainer = styled.div`
  height: 100vh;
  display: flex;
  background-color: #ffde00;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
`

export const WrapContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: stretch;
  width: 80%;
`

export const ListItem = styled.div`
  text-align: center;
  padding: 8px;
  border-radius: 5px;
  background-color: red;
  color: #e1e1e1;
  font-family: "Lilita One";
  font-size: 15px;
  flex-basis: 8%;
  margin: 3px;
  border: 2px solid #880000;
`
