import { createContext, useContext, useState } from "react";

const MusicContext = createContext(null);

export function MusicProvider({ children }) {
  const [playing, setPlaying] = useState(false);
  const play = () => setPlaying(true);
  const pause = () => setPlaying(false);
  const toggle = () => setPlaying((p) => !p);

  return (
    <MusicContext.Provider value={{ playing, play, pause, toggle, missing: false }}>
      {children}
    </MusicContext.Provider>
  );
}
// eslint-disable-next-line react-refresh/only-export-components
export const useMusic = () => useContext(MusicContext);