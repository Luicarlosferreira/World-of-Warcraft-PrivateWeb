import { ArmoryContainer, Template } from "./styles";

export const Armory = () => {
  const wowhead_url = "https://classic.wowhead.com/item=";
  const character_info = {
    name: "Name",
    class: "Warrior",
    level: "80",
    faction: "horde",
    race: "Race",
    honor: 5465132,
    week_kills: 32998,
    total_kills: 5648945616,
    is_online: true,
    gear: {
      head_id: 22478,
      neck_id: 0,
      shoulder_id: 22479,
      back_id: 0,
      chest_id: 22476,
      body_id: 49,
      tabard_id: 0,
      wrists_id: 22483,
      hands_id: 22481,
      waist_id: 22482,
      legs_id: 22477,
      feet_id: 22480,
      finger1_id: 23060,
      finger2_id: 19138,
      trinket1_id: 0,
      trinket2_id: 0,
      mainhand_id: 22802,
      offhand_id: 21126,
      range_id: 2947,
    },
  };

  return (
    <ArmoryContainer>
      <Template>
        <div id="wrapper" className="armoryContainer">
          <div className="center account_details">
            <span>#{character_info.name}</span>
            <div className="center title">
              Level {character_info.level} - #{character_info.race} #
              {character_info.class}
            </div>
          </div>

          <section
            className="factionBackground"
            id="armory"
            style={{
              backgroundImage:
                "url(/assets/images/Infinite_logo_1000x1000-PNG.png)",
            }}
          >
            <section id="armory_left">
              <div className="item" id="head">
                <a
                  href={wowhead_url + `${character_info.gear.head_id}`}
                  target="_blank"
                ></a>
                <div>
                  <img src="/assets/images/default/head.gif" alt="" />
                </div>
              </div>
              <div className="item" id="neck">
                <a
                  href={wowhead_url + `${character_info.gear.neck_id}`}
                  target="_blank"
                ></a>
                <div>
                  <img src="/assets/images/default/neck.gif" alt="" />
                </div>
              </div>
              <div className="item" id="shoulder">
                <a
                  href={wowhead_url + `${character_info.gear.shoulder_id}`}
                  target="_blank"
                ></a>
                <div>
                  <img src="/assets/images/default/shoulders.gif" alt="" />
                </div>
              </div>
              <div className="item" id="back">
                <a
                  href={wowhead_url + `${character_info.gear.back_id}`}
                  target="_blank"
                ></a>
                <div>
                  <img src="/assets/images/default/back.gif" alt="" />
                </div>
              </div>
              <div className="item" id="chest">
                <a
                  href={wowhead_url + `${character_info.gear.chest_id}`}
                  target="_blank"
                ></a>
                <div>
                  <img src="/assets/images/default/chest.gif" alt="" />
                </div>
              </div>
              <div className="item" id="body">
                <a
                  href={wowhead_url + `${character_info.gear.body_id}`}
                  target="_blank"
                ></a>
                <div>
                  <img src="/assets/images/default/body.gif" alt="" />
                </div>
              </div>
              <div className="item" id="tabard">
                <a
                  href={wowhead_url + `${character_info.gear.tabard_id}`}
                  target="_blank"
                ></a>
                <div>
                  <img src="/assets/images/default/tabard.gif" alt="" />
                </div>
              </div>
              <div className="item" id="wrists">
                <a
                  href={wowhead_url + `${character_info.gear.wrists_id}`}
                  target="_blank"
                ></a>
                <div>
                  <img src="/assets/images/default/wrists.gif" alt="" />
                </div>
              </div>
            </section>

            {/* Armory right side */}
            <section id="armory_right">
              <div className="item" id="hands">
                <a
                  href={wowhead_url + `${character_info.gear.hands_id}`}
                  target="_blank"
                ></a>
                <div>
                  <img src="/assets/images/default/hands.gif" alt="" />
                </div>
              </div>
              <div className="item" id="waist">
                <a
                  href={wowhead_url + `${character_info.gear.waist_id}`}
                  target="_blank"
                ></a>
                <div>
                  <img src="/assets/images/default/waist.gif" alt="" />
                </div>
              </div>
              <div className="item" id="legs">
                <a
                  href={wowhead_url + `${character_info.gear.legs_id}`}
                  target="_blank"
                ></a>
                <div>
                  <img src="/assets/images/default/legs.gif" alt="" />
                </div>
              </div>
              <div className="item" id="feet">
                <a
                  href={wowhead_url + `${character_info.gear.feet_id}`}
                  target="_blank"
                ></a>
                <div>
                  <img src="/assets/images/default/feet.gif" alt="" />
                </div>
              </div>
              <div className="item" id="finger1">
                <a
                  href={wowhead_url + `${character_info.gear.finger1_id}`}
                  target="_blank"
                ></a>
                <div>
                  <img src="/assets/images/default/finger.gif" alt="" />
                </div>
              </div>
              <div className="item" id="finger2">
                <a
                  href={wowhead_url + `${character_info.gear.finger2_id}`}
                  target="_blank"
                ></a>
                <div>
                  <img src="/assets/images/default/finger.gif" alt="" />
                </div>
              </div>
              <div className="item" id="trinket1">
                <a
                  href={wowhead_url + `${character_info.gear.trinket1_id}`}
                  target="_blank"
                ></a>
                <div>
                  <img src="/assets/images/default/trinket.gif" alt="" />
                </div>
              </div>
              <div className="item" id="trinket2">
                <a
                  href={wowhead_url + `${character_info.gear.trinket2_id}`}
                  target="_blank"
                ></a>
                <div>
                  <img src="/assets/images/default/trinket.gif" alt="" />
                </div>
              </div>
            </section>
          </section>

          <section id="armory_bottom">
            <div className="item" id="mainhand">
              <a
                href={wowhead_url + `${character_info.gear.mainhand_id}`}
                target="_blank"
              ></a>
              <div>
                <img src="/assets/images/default/mainhand.gif" alt="" />
              </div>
            </div>
            <div className="item" id="offhand">
              <a
                href={wowhead_url + `${character_info.gear.offhand_id}`}
                target="_blank"
              ></a>
              <div>
                <img src="/assets/images/default/offhand.gif" alt="" />
              </div>
            </div>
            <div className="item" id="ranged">
              <a
                href={wowhead_url + `${character_info.gear.range_id}`}
                target="_blank"
              ></a>
              <div>
                <img src="/assets/images/default/ranged.gif" alt="" />
              </div>
            </div>
          </section>
        </div>
      </Template>

      {/* stats */}

      <section
        id="armory_stats"
        style={{
          backgroundImage:
            "url(/assets/images/" + `${character_info.faction}` + ".png)",
        }}
      >
        <div>
          <b>Stats</b>
        </div>
        <section>
          <div>
            <h2>Name:</h2>
            <p>-</p>
          </div>

          <div>
            <h2>Honor Points:</h2>
            <p>0</p>
          </div>
          <div>
            <h2>Last Week Kills:</h2>
            <p>0</p>
          </div>
          <div>
            <h2>Total Kills:</h2>
            <p>0</p>
          </div>
        </section>
      </section>
    </ArmoryContainer>
  );
};
