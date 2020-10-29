import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: Arial;
        font-size: 14px;
        background-color: #f1f1f1;
    }
    a {
        text-decoration: none;
        padding: 10px;
        color:#e1e1e1;
        font-weight: 700;
        border-radius: 5px;
        background-color: #3b4cca;
        border: 2px solid #3b4c55;
        box-shadow: -3px 3px 0px #3b4c55;
        font-family: "Lilita One";
        font-size: 20px;
    }

`
