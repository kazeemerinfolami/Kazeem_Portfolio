import React from "react";
import { MediaSectionStyles } from "../../components/Baselayout/BaseLayoutStyles";

function MediaSection({ switchMedia }) {
  return (
    <MediaSectionStyles>
      {switchMedia === "hobbies" ? (
        <p>
          <h1>Hobblies</h1>
          <main>
            <ul>
              <li>
                Building and experimenting with new technologies and frameworks:
                During my time at Northcoders, our team was challenged to build
                a mobile application within a two-week timeframe using a new
                framework. After careful consideration, we collectively decided
                to use React Native as the framework of choice. We successfully
                developed a mini-map application that exceeded expectations.
                Readme
              </li>
            </ul>
          </main>
        </p>
      ) : switchMedia === "vul" ? (
        <p>
          <h1>Volunteers</h1>
          <main>
            <ul>
              <li>
                At TFG (Tech for Good) Inc., I worked as a front-end developer,
                brainstomed with other developers worldwide. I added to their
                ongoing project, debbuged and attended standups.
              </li>
            </ul>
          </main>
        </p>
      ) : switchMedia === "sth" ? (
        <p>
          <h1>Languages</h1>
          <main>
            <ul>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam . Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Maxime mollitia, molestiae
                quas vel sint commodi repudiandae consequuntur voluptatum
                laborum numqu
              </li>
            </ul>
          </main>
        </p>
      ) : null}
    </MediaSectionStyles>
  );
}

export default MediaSection;
