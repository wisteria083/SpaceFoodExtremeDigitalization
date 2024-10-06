export default function Home() {
  return (
    <div
      className="
          bg-black 
          bg-cover 
          bg-center 
          min-h-screen 
          p-8 
          pb-20 
          gap-16 
          sm:p-20 
          font-[family-name:var(--font-geist-sans)] 
          flex 
          items-center 
          justify-center
          relative
          overflow-hidden
        "
      style={{
        backgroundImage: `url('/image.png')`,
      }}
    >
      {/* 星のアニメーションを追加する場合 */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <main className="flex flex-col gap-32 items-center z-10">
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <h1
            className="text-white font-bold animate-pulse text-center
                   text-2xl 
                   sm:text-3xl 
                   md:text-4xl 
                   lg:text-5xl 
                   xl:text-6xl 
                   2xl:text-7xl
                   "
          >
            Interaction
          </h1>
        </div>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <h1
            className="text-white font-bold text-center
                   text-2xl 
                   sm:text-3xl 
                   md:text-4xl 
                   lg:text-5xl 
                   xl:text-6xl 
                   2xl:text-7xl
                   "
          >
            宇宙と地球を結ぶ相互作用
          </h1>
        </div>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <h1
            className="text-white font-bold text-center
                   text-2xl 
                   sm:text-3xl 
                   md:text-4xl 
                   lg:text-5xl 
                   xl:text-6xl 
                   2xl:text-7xl
                   "
          >
            国際宇宙ステーション(ISS)が
            <br />
            最も近い位置に来たことをお知らせします
          </h1>
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <h1
            className="text-white font-bold text-center
                   text-2xl 
                   sm:text-3xl 
                   md:text-4xl 
                   lg:text-5xl 
                   xl:text-6xl 
                   2xl:text-7xl
                   "
          >
            人工衛星位置計算APIからあなたとISSの位置を計算
            <br />
            <span className="text-xl">
              https://mgpn.org/api/space/index.html
            </span>
          </h1>
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <img src="/output.png" />
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <h1
            className="text-white font-bold text-center
                   text-2xl 
                   sm:text-3xl 
                   md:text-4xl 
                   lg:text-5xl 
                   xl:text-6xl 
                   2xl:text-7xl
                   "
          >
            インタラクティブロボットが目の前にいる時。
            <br />
            最も宇宙に近い時。
          </h1>
        </div>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <h1
            className="text-white font-bold text-center
                    text-2xl 
                    sm:text-3xl 
                    md:text-4xl 
                    lg:text-5xl 
                    xl:text-6xl 
                    2xl:text-7xl
                    "
          >
            ここに動画が入ります
          </h1>
        </div>

        <div className="mt-32"></div>
      </main>
    </div>
  );
}
