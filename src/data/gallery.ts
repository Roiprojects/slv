export interface GalleryItem {
  id: string;
  title: string;
  category: 'Drilling Machinery' | 'Borewell Operations' | 'Pumps & Installation' | 'Completed Work';
  image: string;
  description: string;
  location: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Heavy Hydraulic Drilling Rig Setup",
    category: "Drilling Machinery",
    image: "/images/hero_drilling_rig.jpg",
    description: "Deep hard-rock drilling setup at Whitefield industrial layout with heavy dual-stage air compressor feed.",
    location: "Whitefield, Bengaluru"
  },
  {
    id: "gal-2",
    title: "Compact Robo Rig in Residential Plot",
    category: "Borewell Operations",
    image: "/images/robo_crawler_rig.jpg",
    description: "Crawler robo rig navigating a narrow 7-foot villa entry gate without touching ornamental perimeter walls.",
    location: "Sarjapur Road, Bengaluru"
  },
  {
    id: "gal-3",
    title: "Submersible Motor Stage Lowering",
    category: "Pumps & Installation",
    image: "/images/pump_motor_installation.jpg",
    description: "Lowering 7.5 HP multi-stage copper submersible pump assembly with heavy stainless steel safety wire.",
    location: "Electronic City Phase 1"
  },
  {
    id: "gal-4",
    title: "High-Volume Aquifer Strike Flow",
    category: "Completed Work",
    image: "/images/borewell_water_strike.jpg",
    description: "Gushing 3-inch water strike during air-hammer flushing test at 850 ft deep crystalline fracture.",
    location: "Yelahanka, Bengaluru"
  },
  {
    id: "gal-5",
    title: "Heavy Casing Pipe Installation & Sealing",
    category: "Borewell Operations",
    image: "/images/casing_pipe_installation.jpg",
    description: "Lowering heavy steel MS casing pipe into solid bedrock to prevent topsoil cave-ins and contamination.",
    location: "Kanakapura Road"
  },
  {
    id: "gal-6",
    title: "Dual-Lens CCTV Camera Borewell Scanning",
    category: "Borewell Operations",
    image: "/images/camera_scanning_inspection.jpg",
    description: "Live underwater 360-degree color camera inspection detecting fracture depths and borehole condition.",
    location: "Devanahalli, Bengaluru"
  },
  {
    id: "gal-7",
    title: "High-Pressure Air Compressor Flushing",
    category: "Drilling Machinery",
    image: "/images/borewell_flushing_cleaning.jpg",
    description: "Clearing mud and pulverized granite dust with high CFM compressed air until pure crystal water flows.",
    location: "Bannerghatta Link Road"
  },
  {
    id: "gal-8",
    title: "Scientific Groundwater Resistivity Survey",
    category: "Completed Work",
    image: "/images/groundwater_geophysical_survey.jpg",
    description: "Hydro-geologist conducting vertical electrical sounding (VES) resistivity survey to pinpoint drill coordinates.",
    location: "HSR Layout & Anekal, Bengaluru"
  }
];
