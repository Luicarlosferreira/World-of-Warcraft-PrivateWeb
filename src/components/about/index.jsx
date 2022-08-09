import { Container, Content, Container_Information } from "./styles";
import { Fade, Slide } from "react-awesome-reveal";
import "react-medium-image-zoom/dist/styles.css";

export const About = () => {
  return (
    <Content>
      <Container>
        <Fade>
          <div className="ContainerInformation">
            <img
              src="assets/images/wallhaven-455mg1.jpg"
              alt="Image-World-Of-Warcraft"
            />
            <div>
              <h1>The Frozen World</h1>
              <p>
                Junte-se a diversos jogadores e entre em um mundo de mitos,
                magia e aventura sem fim. Você pode acessar World of Warcraft, e
                dominar este mundo com maestria e prazer. Seja um descobridor de
                mundos e aventure-se.
              </p>
            </div>
          </div>
          <div className="ContainerInformation">
            <img
              src="assets/images/wow_original.0.0.jpg"
              alt="Image-World-Of-Warcraft"
            />

            <div>
              <h1>The Frozen World</h1>
              <p>
                Join millions of players and enter a world of myth, magic, and
                endless adventure. With a single subscription you can access
                World of Warcraft and WoW Classic, including Burning Crusade
                Classic and the newest Season of Mastery realms.
              </p>
            </div>
          </div>
          <div className="ContainerInformation">
            <img
              src="assets/images/wp3076544-world-of-warcraft-wrath-of-the-lich-king-wallpapers.jpg"
              alt="Image-World-Of-Warcraft"
            />
            <div>
              <h1>The Frozen World</h1>
              <p>
                Join millions of players and enter a world of myth, magic, and
                endless adventure. With a single subscription you can access
                World of Warcraft and WoW Classic, including Burning Crusade
                Classic and the newest Season of Mastery realms.
              </p>
            </div>
          </div>
        </Fade>
      </Container>

      <Container_Information>
        <div className="Content_information">
          <Fade>
            <div className="container_Image">
              <img src="assets/images/Infinite_logo_1000x1000-PNG.png" alt="" />
            </div>
          </Fade>

          <Slide>
            <div className="Container_actions">
              <div>
                <h1>The Frozen World</h1>
                <p>
                  Join millions of players and enter a world of myth, magic, and
                  endless adventure. With a single subscription you can access
                  World of Warcraft and WoW Classic, including Burning Crusade
                  Classic and the newest Season of Mastery realms.
                </p>
              </div>
              <div>
                <h1>The Frozen World</h1>
                <p>
                  Join millions of players and enter a world of myth, magic, and
                  endless adventure. With a single subscription you can access
                  World of Warcraft and WoW Classic, including Burning Crusade
                  Classic and the newest Season of Mastery realms.
                </p>
              </div>
            </div>
          </Slide>
        </div>
      </Container_Information>
    </Content>
  );
};
