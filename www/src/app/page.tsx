import React from "react";

export default function Home() {
  return (
    <div
      className="
        bg-black 
        bg-cover 
        bg-center 
        bg-fixed
        min-h-screen 
        p-8 
        pb-20 
        gap-16 
        font-[family-name:var(--font-geist-sans)]           
        items-center 
        justify-center
        relative
        overflow-hidden
      "
      style={{
        backgroundImage: `url('/image.png')`,
        textShadow: "4px 4px 8px rgba(0, 0, 0, 0.7)",
      }}
    >
      <main className="flex flex-col gap-24 items-center z-10">
        {/* スペーサー */}
        <div className="mt-64"></div>

        {/* メインタイトル */}
        <div className="flex flex-col items-center sm:flex-row gap-4">
          <h1 className="text-white text-3xl sm:text-8xl font-bold animate-pulse text-shadow-lg text-center">
            Space Food Extreme Digitalization
          </h1>
        </div>

        {/* スペーサー */}
        <div className="mt-32"></div>
        <div className="mt-64"></div>

        {/* セクション: Interaction */}
        <div className="flex flex-col items-center sm:flex-row gap-4">
          <h2 className="text-white font-bold animate-pulse text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-9xl text-shadow">
            Interaction
          </h2>
        </div>
        <div className="mt-32"></div>

        {/* セクション: 宇宙と地球を結ぶ相互作用 */}
        <div className="flex flex-col items-center sm:flex-row gap-4">
          <h2 className="text-white font-bold text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-shadow-lg">
            宇宙と地球を結ぶ相互作用
            <span className="block text-lg sm:text-xl">
              Interaction between Space and Earth
            </span>
          </h2>
        </div>

        {/* セクション: ISSのお知らせ */}
        <div className="flex flex-col items-center sm:flex-row gap-4">
          <h2 className="text-white font-bold text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-shadow">
            国際宇宙ステーション(ISS)が
            <br />
            最も近い位置に来たことをお知らせします
            <span className="block text-lg sm:text-xl">
              The International Space Station (ISS) is approaching its closest
              point.
            </span>
          </h2>
        </div>

        {/* セクション: 人工衛星位置計算API */}
        <div className="flex flex-col items-center sm:flex-row gap-4">
          <h2 className="text-white font-bold text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-shadow">
            人工衛星位置計算APIから
            <br />
            あなたとISSの位置を計算
            <span className="block text-lg sm:text-xl">
              Calculate your and ISSs position using the{" "}
              <a
                href="https://mgpn.org/api/space/index.html"
                className="underline hover:text-gray-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Satellite Position Calculation API
              </a>
            </span>
          </h2>
        </div>

        {/* 画像 */}
        <div className="flex flex-col items-center sm:flex-row gap-4">
          <img src="/output.png" alt="Output Image" className="w-full" />
        </div>

        {/* セクション: インタラクティブロボット */}
        <div className="flex flex-col items-center sm:flex-row gap-4">
          <h2 className="text-white font-bold text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-shadow">
            インタラクティブロボットが目の前にいる時。
            <br />
            最も宇宙に近い時。
            <span className="block text-lg sm:text-xl">
              When an interactive robot is right in front of you.
              <br />
              At its closest to space.
            </span>
          </h2>
        </div>

        {/* セクション: ここに動画が入ります */}
        {/* <div className="flex flex-col items-center sm:flex-row gap-4">
          <h2 className="text-white font-bold text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-shadow">
            ここに動画が入ります
            <span className="block text-lg sm:text-xl">
              Here will be a video
            </span>
          </h2>
        </div> */}

        {/* スペーサー */}
        <div className="mt-32"></div>
      </main>
    </div>
  );
}
