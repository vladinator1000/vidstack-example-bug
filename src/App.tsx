import "vidstack/styles/base.css";
import "vidstack/styles/ui/buttons.css";
import "vidstack/styles/ui/sliders.css";

import { MediaOutlet, MediaPlayer } from "@vidstack/react";

export function App() {
  return (
    <MediaPlayer
      src="https://media-files.vidstack.io/720p.mp4"
      poster="https://media-files.vidstack.io/poster.png"
      controls
    >
      {/* ^ remove `controls` attribute if you're designing a custom UI */}
      <MediaOutlet />
    </MediaPlayer>
  );
}
