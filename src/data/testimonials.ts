export interface TestimonialItem {
  id: string;
  clientType: string;
  projectScope: string;
  location: string;
  quote: string;
  isPlaceholderNote?: boolean;
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: "test-1",
    clientType: "Residential Villa Project",
    projectScope: "6.5\" Robo Borewell Drilling (850 ft)",
    location: "Sarjapur Road, Bengaluru",
    quote: "The robo rig entered through our 7-foot gate smoothly without touching the front brick pillars. Professional crew, clear meter billing, and clean water output achieved at 680 feet.",
  },
  {
    id: "test-2",
    clientType: "Apartment Residents Welfare Association",
    projectScope: "Dual Camera Scanning & High-Pressure Compressor Flushing",
    location: "Whitefield, Bengaluru",
    quote: "Our existing community borewell had chocked with silt. SLV's camera scanning showed the exact silt layer at 920 ft, and subsequent air flushing restored 1.5 inches of continuous water discharge.",
  },
  {
    id: "test-3",
    clientType: "Commercial Warehouse Facility",
    projectScope: "Standard Truck Rig & 7.5 HP Submersible Pump",
    location: "Devanahalli Industrial Corridor",
    quote: "Prompt execution from the scientific survey to the pump commissioning. Complete documentation and test certificate handed over on time.",
  }
];
