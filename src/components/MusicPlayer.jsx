import { BRAND } from "../data/brand";
import { useMusic } from "../context/MusicContext";

const VIDEO_ID = "PFFliz-H5Uw";

export default function MusicPlayer() {
  const { playing, toggle } = useMusic();

  return (
    <>
      {playing && (
        <iframe
          className="yt-frame"
          title="LTG music"
          src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&loop=1&playlist=${VIDEO_ID}`}
          allow="autoplay; encrypted-media"
        />
      )}
      <div className="music">
        <span className="music-pill">
          Now playing <b>{BRAND.songTitle}</b>
        </span>
        <button
          className={`music-btn ${playing ? "on" : ""}`}
          onClick={toggle}
          aria-label={playing ? "Pause music" : "Play music"}
        >
          <span className="eq"><i></i><i></i><i></i><i></i></span>
        </button>
      </div>
    </>
  );
}