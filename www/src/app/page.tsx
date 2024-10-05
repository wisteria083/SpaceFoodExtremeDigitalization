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

      <main className="flex flex-col gap-8 items-center sm:items-start z-10">
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <h1 className="text-white text-3xl sm:text-5xl font-bold animate-pulse">
            SpaceFoodExtremeDigitalization
          </h1>
        </div>
      </main>
    </div>
  );
}
