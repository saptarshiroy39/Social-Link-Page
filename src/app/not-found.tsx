import Link from "next/link";
import { InteractiveHoverButton } from "@/components/ui/int-hover-btn";
import Particles from "@/components/Particles";

export default function NotFound() {
  return (
    <main className="min-h-[calc(100vh-16rem)] flex flex-col items-center justify-center gap-6 p-4 text-center font-mono relative overflow-hidden rounded-xl animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="fixed inset-0 -z-10 h-screen w-screen pointer-events-none">
        <Particles
          particleCount={300}
          particleSpread={10}
          speed={0.1}
          particleColors={["#ffffff", "#f5f5f5", "#e5e5e5", "#d4d4d4"]}
          moveParticlesOnHover={true}
          particleHoverFactor={1.5}
          alphaParticles={false}
          particleBaseSize={100}
          sizeRandomness={0.7}
          cameraDistance={20}
          disableRotation={false}
        />
      </div>

      <div className="space-y-4 relative z-10">
        <h1 className="text-3xl sm:text-4xl font-normal font-heading leading-none tracking-tight text-foreground">
          Lost in Space
        </h1>
        <p className="text-sm leading-relaxed text-muted-foreground font-mono max-w-md mx-auto">
          404: This page could not be found.
        </p>
      </div>

      <div className="pt-2 relative z-10">
        <Link href="/">
          <InteractiveHoverButton>Go Home</InteractiveHoverButton>
        </Link>
      </div>
    </main>
  );
}
