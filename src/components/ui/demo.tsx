import React from 'react';
import { WaterRippleImage } from "@/components/ui/water-ripple-image";

export default function DemoOne() {
  return (
    <div className="relative min-h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
      <WaterRippleImage
        blueish={0.4}
        scale={7}
        illumination={0.15}
        surfaceDistortion={0.03}
        waterDistortion={0.02}
        src="/images/borewell_water_strike.jpg"        
      />
    </div>
  );
}

export { DemoOne };
