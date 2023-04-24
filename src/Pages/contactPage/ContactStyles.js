import { ErrorMessage } from "formik";
import styled from "styled-components";

//Icons

export const ContactPageStyles = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7% 5px;
  main {
    /* background-color: blue; */
    max-width: 500px;
    width: 100%;
    height: 100%;
    section {
      /* background-color: yellow; */
      h1 {
        /* background-color: black; */
        margin-bottom: 30px;
        font-weight: 900;
        line-height: 24px;
      }
      aside {
        height: 100%;
        /* background-color: green; */
        border: 3px solid #c6c6c6;
        padding: 2% 10px;
        border-radius: 10px;
        //anim
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
        transition: box-shadow 4s ease-out;
        transition: background-color 2s ease-out;
        :hover {
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
          background-color: #c6c6c6;
          /* border: 2px solid #000; */
        }
        p {
          display: flex;
          justify-content: end;
          margin-bottom: 20px;
          img {
            width: 30px;
            height: 30px;
            border-radius: 50px;
            margin-right: 10px;
          }
        }
        div {
          margin-bottom: 25px;
          label {
            width: 100%;
            display: block;
            font-size: 16px;
            margin-bottom: 5px;
          }
          input {
            width: 100%;
            height: 50px;
            padding: 10px;
            border: 3px solid #c6c6c6;
            outline-color: rgba(0, 0, 0, 0.2);
          }
        }
      }
    }
  }
`;

export const StyledErrorMessage = styled(ErrorMessage)`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: red;
`;

export const SubmitButton = styled.button`
  background-color: ${(props) => (props.disabled ? "#e6e6e6" : "#262626")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  width: 100%;
  font-size: 18px;
  padding: 10px;
  color: #fff;
  border: none;
  margin-top: 20px;
`;
