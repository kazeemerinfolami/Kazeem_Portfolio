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
                - Building and experimenting with new technologies and
                frameworks
              </li>
              <li>- Volunteering</li>
              <li>- Reading</li>
              <li>- Gaming</li>
              <li>- Music</li>
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
                I am proficient in spoken English and I have strong reading and
                writing skills. Additionally, I am fluent in Yoruba, a language
                mostly spoken in western Nigeria.
              </li>
            </ul>
          </main>
        </p>
      ) : null}
    </MediaSectionStyles>
  );
}

export default MediaSection;
