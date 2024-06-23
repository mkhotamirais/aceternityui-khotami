import { AnimatedPinDemo } from "./demo/AnimatedPinDemo";
import { AuroraBackgroundDemo } from "./demo/AuroraBackgroundDemo";
import { BackgroundBeamsDemo } from "./demo/BackgroundBeamsDemo";
import { BackgroundBoxesDemo } from "./demo/BackgroundBoxesDemo";
import { CardHoverEffectDemo } from "./demo/CardHoverEffectDemo";
import { EvervaultCardDemo } from "./demo/EvervaultCardDemo";
import { FloatingNavDemo } from "./demo/FloatingNavDemo";

export default function Demo() {
  return (
    <div>
      <FloatingNavDemo />
      <EvervaultCardDemo />
      <CardHoverEffectDemo />
      <BackgroundBoxesDemo />
      <AuroraBackgroundDemo />
      <BackgroundBeamsDemo />
      <AnimatedPinDemo />
    </div>
  );
}
