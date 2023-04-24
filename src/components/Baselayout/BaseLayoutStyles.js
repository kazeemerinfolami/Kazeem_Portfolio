import styled, { keyframes } from "styled-components";
import {
  TiSocialTwitter,
  TiSocialInstagram,
  TiSocialFacebook,
  TiSocialGithub,
  TiSocialLinkedin,
} from "react-icons/ti";

//Icons

export const bounce = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-7px);
  }
  100% {
    transform: translateY(0);
  }
`;

export const TwitterIcon = styled(TiSocialTwitter)`
  font-size: 2rem; /* Change the font size to increase the icon size */
  color: #696867; /* Change the color to set the icon color */
  :hover {
    color: #000;
    animation: ${bounce} 2s linear infinite;
  }
`;
export const InstagramIcon = styled(TiSocialInstagram)`
  font-size: 2rem; /* Change the font size to increase the icon size */
  color: #696867; /* Change the color to set the icon color */
  :hover {
    color: #000;
    animation: ${bounce} 2s linear infinite;
  }
`;
export const FacebookIcon = styled(TiSocialFacebook)`
  font-size: 2rem; /* Change the font size to increase the icon size */
  color: #696867; /* Change the color to set the icon color */
  :hover {
    color: #000;
    animation: ${bounce} 2s linear infinite;
  }
`;
export const GitHubIcon = styled(TiSocialGithub)`
  font-size: 2rem; /* Change the font size to increase the icon size */
  color: #696867; /* Change the color to set the icon color */
  :hover {
    color: #000;
    animation: ${bounce} 2s linear infinite;
  }
`;
export const LinkedinIcon = styled(TiSocialLinkedin)`
  font-size: 2rem; /* Change the font size to increase the icon size */
  color: #696867; /* Change the color to set the icon color */
  :hover {
    color: #000;
    animation: ${bounce} 2s linear infinite;
  }
`;

const buttonClassName = "buttonClassName";
const topImage = "topImage";
const buttomImage = "buttomImage";

export const BaseStyleStyles = styled.div`
  background-color: #e7e7e7;
  display: flex;
  min-height: 100vh;
  justify-content: space-between;
  flex-direction: column;
  header {
    background-color: #e7e7e7;
    flex: 1;
    /* @media (min-width: 100px) { */
    /* background-color: red; */
    max-height: 70px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
    padding: 2%;
    @media (max-width: 370px) {
      max-height: 100%;
      padding: 30px 0;
    }
    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      font-size: 16px;
      font-weight: 900;
      padding: 20px 0;
      @media (max-width: 390px) {
        justify-content: center;
      }
      a {
        text-decoration: none;
        color: #696867;
        :hover {
          color: #000;
        }
      }
      ul {
        display: flex;
        list-style-type: none;
        li {
          margin-right: 15px;
          img {
            width: 30px;
            height: 30px;
            border-radius: 50px;
            margin-right: 10px;
          }
        }
      }
      div {
        /* border: 2px solid #cfcfcf; */
        width: 150px;
        text-align: center;
        padding: 2px;
        border-radius: 50px;

        //anim
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
        transition: box-shadow 4s ease-out;
        transition: background-color 2s ease-out;
        :hover {
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
          background-color: #c6c6c6;
          /* border: 2px solid #000; */
        }
        @media (max-width: 320px) {
          margin-top: 20px;
        }
      }
    }
    /* } */
  }
  body {
    flex: 4;
    background-color: #e7e7e7;
    height: 100%;
  }
  footer {
    h6 {
      margin-top: 30px;
      flex: 1;
      background-color: #e7e7e7;
      padding: 1% 7%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      border-top: 2px solid #cfcfcf;
    }
    article {
      div {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        @media (max-width: 800px) {
          justify-content: center;
        }
        aside {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          p {
            img {
              width: 30px;
              height: 30px;
              border-radius: 50px;
              margin-bottom: 20px;
            }
            h2 {
              max-width: 320px;
              font-size: 16px;
              margin-bottom: 50px;
              color: #696867;
              @media (max-width: 800px) {
                margin-bottom: 20px;
              }
            }
          }
          ul {
            list-style-type: none;
            display: flex;
            flex-wrap: wrap;
            @media (max-width: 800px) {
              margin-bottom: 20px;
            }
            li {
              margin-right: 7px;
            }
          }
        }
        main {
          display: flex;
          justify-content: space-between;
          /* background-color: #000; */
          width: 400px;
          ul {
            list-style-type: none;
            :hover {
              cursor: pointer;
            }
            h1 {
              color: #000;
              font-size: 16px;
              font-weight: 900;
              margin-bottom: 10px;
            }
            li {
              color: #696867;
              font-size: 16px;
            }
          }
        }
      }
      h5 {
        text-align: center;
        font-size: 16px;
        margin-top: 30px;
        margin-bottom: 20px;
        color: #696867;
      }
    }
  }
`;

export const ProjectPageStyles = styled.div``;

export const Sec1ImageContainer = styled.div`
  &.${buttonClassName} {
    background-color: #e7e7e7;
    position: relative;
    div {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      h1 {
        font-size: 3vw;
        background-color: #e7e7e78e;
        font-weight: 900;
        color: #000;
        word-spacing: 10px;
        @media (max-width: 600px) {
          font-size: 16px;
          word-spacing: 0px;
        }
        @media (max-width: 300px) {
          white-space: nowrap;
        }
      }
    }
  }
`;

export const TopImage = styled.img`
  &.${topImage} {
    width: 100%; /* Set the height of the image to 100% of its container */
    height: 700px; /* Set the height of the container */
    background-image: url("https://res.cloudinary.com/kazeemerinfolami/image/upload/v1681300028/trevor-vannoy-hFJHqgpnCeQ-unsplash_Top_xefead.jpg"); /* Set the background image */
    background-position: center; /* Position the top center of the image at the top center of the container */
    background-size: cover; /* Scale the image to cover the entire container while preserving its aspect ratio */
    background-repeat: no-repeat;
    background-blend-mode: overlay;
    background-color: #00000044;
    @media (max-width: 600px) {
      height: 350px;
    }
  }
`;

export const BottomImage = styled.img`
  &.${buttomImage} {
    background-repeat: no-repeat;
    width: 100%; /* Set the height of the image to 100% of its container */
    height: 400px; /* Set the height of the container */
    background-image: url("https://res.cloudinary.com/kazeemerinfolami/image/upload/v1681300026/trevor-vannoy-hFJHqgpnCeQ-unsplash_bottom_jobej0.jpg"); /* Set the background image */
    background-position: center; /* Position the top center of the image at the top center of the container */
    background-size: cover; /* Scale the image to cover the entire container while preserving its aspect ratio */

    background-blend-mode: overlay;
    background-color: #00000037;
    @media (max-width: 600px) {
      height: 200px;
    }
  }
`;

export const AboutMeSectionStyles = styled.div`
  padding: 7% 6%;
  h1 {
    font-size: 24px;
    font-weight: 900;
    background-color: aliceblue;
    display: inline-block;
    background-color: #c6c6c6;
    margin-bottom: 3%;
  }
  section {
    h2 {
      font-size: 18px;
      margin-bottom: 5%;
      @media (min-width: 600px) {
        max-width: 600px;
        line-height: 30px;
      }
    }
    aside {
      display: flex;
      list-style-type: none;
      flex-wrap: wrap;
      li {
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
        width: 150px;
        height: 40px;
        margin-right: 1%;
        margin-bottom: 3%;
        padding: 2px;
        border-radius: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        //anim
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
        transition: box-shadow 4s ease-out;
        transition: background-color 2s ease-out;
        :hover {
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
          background-color: #c6c6c6;
        }
      }
    }
    div {
      p {
        margin-top: 30px;
        background-color: #c6c6c6;
        border-radius: 10px;
        font-size: 20px;
        margin-bottom: 4%;
        display: flex;
        justify-content: center;
        padding: 3%;
        h6 {
          ul {
            list-style-type: none;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            li {
              margin: 0 7px 5px 7px;
            }
          }
        }
      }
    }
  }
`;

export const ExperienceSectionStyles = styled.div`
  padding: 7% 6% 0 6%;
  h1 {
    font-size: 24px;
    font-weight: 900;
    background-color: aliceblue;
    display: inline-block;
    align-items: flex-end;

    background-color: #c6c6c6;
    margin-bottom: 3%;
  }
  section {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    img {
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
      @media (min-width: 600px) {
        max-width: 20vw;
      }
      @media (max-width: 590px) {
        max-height: 50%;
        max-width: 50%;
        margin-bottom: 7%;
      }
      width: 100%;
      border-radius: 10px;
    }

    h2 {
      max-width: 50vw;
      font-size: 18px;
      line-height: 30px;
      @media (max-width: 590px) {
        width: 100%;
        max-width: 100%;
      }
    }
  }
`;

export const ProjectSectionStyles = styled.div`
  padding: 7% 6% 0 6%;
  p {
    margin-bottom: 2%;
    h1 {
      font-size: 24px;
      font-weight: 900;
      background-color: aliceblue;
      display: inline-block;
      align-items: flex-end;

      background-color: #c6c6c6;
      margin-bottom: 3%;
    }
    h2 {
      max-width: 600px;
      margin-bottom: 30px;
    }
  }
  section {
    ul {
      list-style-type: none;
      li {
        display: flex;
        justify-content: center;
        align-items: flex-end;
        /* background-color: aliceblue; */
        margin-bottom: 40px;
        flex-wrap: wrap;
        :nth-child(odd) {
          flex-direction: row-reverse;
        }
        div {
          width: 400px;
          height: 250px;
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
          @media (min-width: 950px) {
            margin-right: 20px;
          }
          img {
            width: 100%;
            height: 100%;
          }
        }
        h2 {
          max-width: 500px;
          margin-top: 20px;
          h4 {
            font-size: 24px;
            margin-bottom: 20px;
          }
        }
      }
    }
  }
`;

export const MediaSectionStyles = styled.div`
  padding: 20% 6% 60px 6%;
  /* background-color: red; */
  display: flex;
  justify-content: end;
  p {
    /* background-color: aliceblue; */
    max-width: 800px;
    max-height: 300px;
    /* margin-bottom: ; */
    @media (min-width: 950px) {
      width: 800px;
      /* height: 300px; */
    }
    h1 {
      text-align: right;
      font-size: 24px;
      font-weight: 900;
      /* background-color: aliceblue; */
      display: inline-block;
      margin-bottom: 3%;
    }
    main {
      ul {
        list-style-type: none;

        /* margin-top: 30px; */
        background-color: #c6c6c6;
        border-radius: 10px;
        /* font-size: 20px; */
        /* margin-bottom: 4%; */
        display: flex;
        justify-content: center;
        padding: 3%;
        flex-direction: column;
      }
    }
  }
`;
