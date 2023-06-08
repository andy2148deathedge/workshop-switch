'use client';

import { useEffect, useState } from "react";

import Image from "next/image";
import Switch from "@components/Switch";

const Home = () => {
  const lightImgPic = "/assets/images/Espeon_Dream.png";
  const darkImgPic = "/assets/images/Umbreon_Dream.png";

  const [isDark, setIsDark] = useState(false);
  const [isDetail, setIsDetail] = useState(false);

  const [pokeData, setPokeData] = useState({});
  
  const fetchPokeData = async () => {
    const fetchPokeName = isDark ? 'Umbreon Dream' : "Espeon Dream";

    const res = await fetch(`/api/poke/${fetchPokeName}`);
    const data = await res.json();

    setPokeData(data);
  }

  return (
    <>
      <div
        className={
          isDark
            ? "flex justify-between fixed w-full h-16 bg-slate-900 shadow-2xl shadow-slate-500/20 font-mono"
            : "flex justify-between fixed w-full h-16 bg-white shadow-2xl shadow-slate-500/20 font-mono"
        }
      >
        <h1
          className={
            isDark
              ? "w-100 text-center pl-3 pt-4 text-white font-extrabold"
              : "w-100 text-center pl-3 pt-4"
          }
        >
          Component Workshop
        </h1>

        <Switch
          isRight={isDark}
          isDisabled={isDetail}
          onSwitch={() => setIsDark((prev) => !prev)}
          label={"Dark mode"}
          colorRight={"bg-slate-900"}
          colorLeft={"bg-white"}
          bgColorRight={"bg-yellow-300"}
          bgColorLeft={"bg-slate-400"}
          animation={"transition duration-1000 ease-linear"}
        />
      </div>

      <section
        className={
          isDark
            ? "flex justify-center items-center w-full h-full bg-gray-700"
            : "flex justify-center items-center w-full h-full bg-gray-200"
        }
      >
        <div
          id="card"
          className={
            isDark
              ? "flex-row w-72 rounded-lg overflow-hidden  bg-gray-400 shadow-2xl text-w"
              : "flex-row w-72 rounded-lg overflow-hidden  bg-gray-400 shadow-2xl"
          }
        >
          <div className="p-4 shadow-inner">
            <Image
              className=""
              src={isDark ? darkImgPic : lightImgPic}
              alt="pokemon pic"
              width={450}
              height={450}
            />
          </div>
          <div
            className={
              isDark ? "h-16 bg-slate-900 font-mono" : "h-16 bg-white font-mono"
            }
          >
            <h1
              className={
                isDark
                  ? "text-center pt-3 font-mono text-xl text-white font-extrabold"
                  : "text-center pt-3 font-mono text-xl"
              }
            >
              {isDark ? "Umbreon Dream" : "Espeon Dream"}
            </h1>
          </div>

          {isDetail ? (
            <div
              className={
                isDark
                  ? "h-40 grid grid-rows-3 grid-flow-col gap-4 bg-slate-900 font-mono text-center text-white font-extrabold"
                  : "h-40 grid grid-rows-3 grid-flow-col gap-4 bg-white font-mono text-center"
              }
            >
              <p>HP {pokeData.hp}</p>
              <p>ATK {pokeData.atk}</p>
              <p>DEF {pokeData.def}</p>
              <p>SATK {pokeData.sAtk}</p>
              <p>SDEF {pokeData.sDef}</p>
              <p>SPEED {pokeData.speed}</p>
            </div>
          ) : (
            <div
              className={
                isDark
                  ? "bg-slate-900 font-mono text-center text-gray-500 text-sm font-extrabold"
                  : "bg-white font-mono text-center text-gray-400 text-sm"
              }
            >
              Switch to fetch more detail!
            </div>
          )}

          <div
            className={
              isDark
                ? "flex justify-center items-center pt-2 pb-3 bg-slate-900"
                : "flex justify-center items-center pt-2 pb-3 bg-white"
            }
          >
            <Switch
              isRight={isDetail}
              onSwitch={() => {
                fetchPokeData();
                setIsDetail((prev) => !prev);
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
