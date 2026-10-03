import Panda from "./Panda";
import WanderPanda from "./WanderPanda";

// Pandas that live on every page: two wanderers and two walkers along the bottom.
export default function PandaLayer() {
  return (
    <div className="panda-layer" aria-hidden="true">
      <WanderPanda size={64} every={6500} startX={6} startY={62} bow />
      <WanderPanda size={56} every={8200} startX={86} startY={40} hat />
      <div className="walker walk-right">
        <Panda size={60} wave={false} />
      </div>
      <div className="walker walk-left">
        <div style={{ transform: "scaleX(-1)" }}>
          <Panda size={52} wave={false} bow />
        </div>
      </div>
    </div>
  );
}
