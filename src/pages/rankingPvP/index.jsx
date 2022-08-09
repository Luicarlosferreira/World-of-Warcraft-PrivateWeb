import React, { useState } from "react";
import { Container } from "./styles";

export const RankingPvP = () => {
  const character_pvp = [
    {
      id: 1,
      nick: "Subx",
      class: "Rogue",
      faction: "Horde",
      level: 80,
      kill_today: 200,
      kills_lifetime: 20210,
      honor: 120000,
    },
    {
      id: 2,
      nick: "Wrath",
      class: "Rogue",
      faction: "Horde",
      level: 80,
      kill_today: 190,
      kills_lifetime: 19900,
      honor: 11000,
    },
    {
      id: 3,
      nick: "Nagathopain",
      class: "Paladin",
      faction: "Horde",
      level: 80,
      kill_today: 50,
      kills_lifetime: 19250,
      honor: 11800,
    },

    {
      id: 4,
      nick: "Nagatho",
      class: "Priest",
      faction: "Horde",
      level: 80,
      kill_today: 10,
      kills_lifetime: 18170,
      honor: 1010,
    },
    {
      id: 5,
      nick: "Marimuuh",
      class: "Druid",
      faction: "Alliance",
      level: 80,
      kill_today: 101,
      kills_lifetime: 17170,
      honor: 8110,
    },
    {
      id: 6,
      nick: "Oggrijidujah",
      class: "Paladin",
      faction: "Alliance",
      level: 80,
      kill_today: 10,
      kills_lifetime: 18170,
      honor: 91110,
    },
  ];

  const stats = character_pvp.filter(
    (players) => players.kills_lifetime >= 20000
  );
  console.log(stats);
  return (
    <Container>
      <h1>| PVP STATS |</h1>
      <div className="tableContainer">
        <div>
          <h1>Nick</h1>
          <div className="nick_list">
            {character_pvp.map((nick) => (
              <p>{nick.nick}</p>
            ))}
          </div>
        </div>
        <div>
          <h1>Level</h1>
          <div className="level_list">
            {character_pvp.map((level) => (
              <p>{level.level}</p>
            ))}
          </div>
        </div>
        <div>
          <h1>Faction</h1>
          <div className="faction_list">
            {character_pvp.map((faction) => (
              <p>{faction.faction}</p>
            ))}
          </div>
        </div>
        <div>
          <h1>Honor</h1>
          <div className="nick_list">
            {character_pvp.map((honor) => (
              <p>{honor.honor}</p>
            ))}
          </div>
        </div>
        <div>
          <h1>Today Kills</h1>
          <div className="nick_list">
            {character_pvp.map((kill_today) => (
              <p>{kill_today.kill_today}</p>
            ))}
          </div>
        </div>
        <div>
          <h1>LifeTime Kills</h1>
          <div className="nick_list">
            {character_pvp.map((kills_lifetime) => (
              <p>{kills_lifetime.kills_lifetime}</p>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};
