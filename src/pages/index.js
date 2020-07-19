import Head from "next/head";

import ButtonBase from "../components/ButtonBase";
import ButtonSolid from "../components/ButtonSolid";
import ButtonGhost from "../components/ButtonGhost";
import ButtonCustom from "../components/ButtonCustom";
import IconButton from "../components/IconButton";

function IconHeart() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="fill-current"
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

const Home = () => (
  <div className="bg-gray-200">
    <Head>
      <title>Buttons API</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className="min-h-screen grid grid-cols-1 lg:grid-cols-5 row-gap-3 lg:row-gap-4 px-8 py-4 items-center">
      <div className="flex justify-center">
        <ButtonBase>Base Button</ButtonBase>
      </div>
      <div className="flex justify-center">
        <ButtonBase size="lg">Large Base Button</ButtonBase>
      </div>
      <div className="flex justify-center">
        <ButtonBase size="sm">Small Button</ButtonBase>
      </div>
      <div className="flex justify-center">
        <ButtonBase disabled>Disabled Base</ButtonBase>
      </div>
      <div className="flex justify-center">
        <ButtonBase as="a" href="#1">
          Base Link
        </ButtonBase>
      </div>

      <div className="flex justify-center">
        <ButtonSolid>Primary Button</ButtonSolid>
      </div>
      <div className="flex justify-center">
        <ButtonSolid size="lg">Large Primary Button</ButtonSolid>
      </div>
      <div className="flex justify-center">
        <ButtonSolid size="sm">Small Button</ButtonSolid>
      </div>
      <div className="flex justify-center">
        <ButtonSolid disabled>Disabled Primary</ButtonSolid>
      </div>
      <div className="flex justify-center">
        <ButtonSolid as="a" href="#2">
          Primary Link
        </ButtonSolid>
      </div>

      <div className="flex justify-center">
        <ButtonSolid variant="danger">Danger Button</ButtonSolid>
      </div>
      <div className="flex justify-center">
        <ButtonSolid variant="danger" size="lg">
          Large Danger Button
        </ButtonSolid>
      </div>
      <div className="flex justify-center">
        <ButtonSolid variant="danger" size="sm">
          Small Button
        </ButtonSolid>
      </div>
      <div className="flex justify-center">
        <ButtonSolid variant="danger" disabled>
          Disabled Danger
        </ButtonSolid>
      </div>
      <div className="flex justify-center">
        <ButtonSolid variant="danger" as="a" href="#3">
          Danger Link
        </ButtonSolid>
      </div>

      <div className="flex justify-center">
        <ButtonSolid variant="plain">Plain Button</ButtonSolid>
      </div>
      <div className="flex justify-center">
        <ButtonSolid variant="plain" size="lg">
          Large Plain Button
        </ButtonSolid>
      </div>
      <div className="flex justify-center">
        <ButtonSolid variant="plain" size="sm">
          Small Button
        </ButtonSolid>
      </div>
      <div className="flex justify-center">
        <ButtonSolid variant="plain" disabled>
          Disabled Plain
        </ButtonSolid>
      </div>
      <div className="flex justify-center">
        <ButtonSolid variant="plain" as="a" href="#4">
          Plain Link
        </ButtonSolid>
      </div>

      <div className="flex justify-center">
        <ButtonGhost>Primary Ghost</ButtonGhost>
      </div>
      <div className="flex justify-center">
        <ButtonGhost size="lg">Large Primary Ghost</ButtonGhost>
      </div>
      <div className="flex justify-center">
        <ButtonGhost size="sm">Small Ghost</ButtonGhost>
      </div>
      <div className="flex justify-center">
        <ButtonGhost disabled>Disabled Ghost</ButtonGhost>
      </div>
      <div className="flex justify-center">
        <ButtonGhost as="a" href="#5">
          Ghost Link
        </ButtonGhost>
      </div>

      <div className="flex justify-center">
        <ButtonGhost variant="danger">Danger Ghost</ButtonGhost>
      </div>
      <div className="flex justify-center">
        <ButtonGhost variant="danger" size="lg">
          Large Danger Ghost
        </ButtonGhost>
      </div>
      <div className="flex justify-center">
        <ButtonGhost variant="danger" size="sm">
          Small Ghost
        </ButtonGhost>
      </div>
      <div className="flex justify-center">
        <ButtonGhost variant="danger" disabled>
          Disabled Ghost
        </ButtonGhost>
      </div>
      <div className="flex justify-center">
        <ButtonGhost variant="danger" as="a" href="#6">
          Ghost Link
        </ButtonGhost>
      </div>

      <div className="flex justify-center">
        <IconButton title="Like post">
          <IconHeart />
        </IconButton>
      </div>
      <div className="flex justify-center text-blue-400">
        <IconButton size="lg" title="Like post">
          <IconHeart />
        </IconButton>
      </div>
      <div className="flex justify-center text-red-600">
        <IconButton size="sm" title="Like post">
          <IconHeart />
        </IconButton>
      </div>
      <div className="flex justify-center">
        <IconButton disabled title="Like post">
          <IconHeart />
        </IconButton>
      </div>
      <div className="flex justify-center text-green-600">
        <IconButton as="a" href="#8" title="Like post">
          <IconHeart />
        </IconButton>
      </div>

      <div className="flex justify-center">
        <ButtonCustom>Custom Button</ButtonCustom>
      </div>
      <div className="flex justify-center">
        <ButtonCustom size="lg">
          <span className="mr-2 text-lg">
            <IconHeart />
          </span>
          <span>Large Custom Button</span>
        </ButtonCustom>
      </div>
      <div className="flex justify-center">
        <ButtonCustom size="sm">Small Button</ButtonCustom>
      </div>
      <div className="flex justify-center">
        <ButtonCustom disabled>Disabled Custom</ButtonCustom>
      </div>
      <div className="flex justify-center">
        <ButtonCustom as="a" href="#7">
          Custom Link
        </ButtonCustom>
      </div>
    </main>
  </div>
);

export default Home;
