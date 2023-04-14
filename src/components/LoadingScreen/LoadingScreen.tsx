export const LoadingScreen = () => (
  <div className="absolute left-0 top-0 h-full w-full bg-gray-800 opacity-75">
    <div className="flex h-screen items-center justify-center">
      <div
        className="before:rounded-r-[100px]before:rounded-b-0 before:rounded-l-0 after:rounded-b-0 after:rounded-l-0
                    relative h-[180px] w-[200px] animate-beat
                    before:absolute before:left-[100px] before:top-0 
                    before:h-[160px] before:w-[100px] 
                    before:origin-[0_100%] before:-rotate-45 before:rounded-t-[100px]
                    before:bg-pink-600 before:content-[''] after:absolute after:left-0 after:top-0
                    after:h-[160px] after:w-[100px] after:origin-[100%_100%] 
                    after:rotate-45 after:rounded-r-[100px] after:rounded-t-[100px] after:bg-pink-600
                    after:content-['']"
      ></div>
      <div
        className="before:rounded-r-[100px]before:rounded-b-0 before:rounded-l-0 after:rounded-b-0 after:rounded-l-0
                    relative h-[180px] w-[200px] animate-beat-faster
                    before:absolute before:left-[100px] before:top-0 
                    before:h-[160px] before:w-[100px] 
                    before:origin-[0_100%] before:-rotate-45 before:rounded-t-[100px]
                    before:bg-pink-500 before:content-[''] after:absolute after:left-0 after:top-0
                    after:h-[160px] after:w-[100px] after:origin-[100%_100%] 
                    after:rotate-45 after:rounded-r-[100px] after:rounded-t-[100px] after:bg-pink-500
                    after:content-['']"
      ></div>
    </div>
  </div>
);
