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
      ) : switchMedia === "vul" ? (
        <p>
          <h1>Volunteers</h1>
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
