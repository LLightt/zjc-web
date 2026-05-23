interface SceneLabelProps {
  reel: string;
  scene: string;
}

export function SceneLabel({ reel, scene }: SceneLabelProps) {
  return (
    <div className="flex items-center gap-4 font-mono text-[10px] tracking-[0.3em] uppercase text-muted mb-16 lg:mb-24">
      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
      <span>
        REEL {reel} · SCENE {scene}
      </span>
    </div>
  );
}
