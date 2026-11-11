export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  category: 'Drilling' | 'Pumps & Installation' | 'Maintenance' | 'Survey & Inspection';
  shortDesc: string;
  fullDesc: string;
  image: string;
  diameter?: string;
  suitableFor: string;
  equipmentUsed: string;
  keyBenefits: string[];
  processSteps: { title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  highlightBadge?: string;
  isFeatured?: boolean;
}

export const servicesData: ServiceItem[] = [
  {
    id: "water-point-check",
    slug: "water-point-check-survey",
    title: "Scientific Water Point Check",
    category: "Survey & Inspection",
    shortDesc: "Geophysical VES resistivity sounding and hydro-geological mapping to identify high-yield aquifer fractures before drilling.",
    fullDesc: "Drilling without scientific verification is a financial gamble. SLV Borewells deploys certified hydro-geologists equipped with multi-electrode Vertical Electrical Sounding (VES) resistivity meters and geological compasses. We analyze subsurface bedrock strata, pinpoint high-yield fracture zones, and mark the exact GPS coordinates for maximum water strike probability.",
    image: "/images/groundwater_geophysical_survey.jpg",
    diameter: "Point Verification",
    suitableFor: "Every new borewell site, plots before construction, agricultural layouts",
    equipmentUsed: "Digital VES Resistivity Meter (DDR3), Schlumberger sounding array & geological compass",
    keyBenefits: [
      "Crucial Step 1: Prevents costly dry holes and wasted drilling expense",
      "Accurately pinpoints depth of hard rock and water-bearing fissures",
      "Official hydro-geological survey report and GPS pegging",
      "Complies with Karnataka Groundwater Authority recommendations"
    ],
    highlightBadge: "Step 1 • Recommended First",
    isFeatured: true,
    processSteps: [
      { title: "Catchment & Geological Appraisal", desc: "Studying surface slope, natural drainage lines, and local groundwater trends." },
      { title: "Multi-Electrode Sounding", desc: "Setting up calibrated sensor arrays to inject electrical current across strata." },
      { title: "Strata & Fracture Modeling", desc: "Interpreting apparent resistivity curves to identify water-bearing fracture zones." },
      { title: "GPS Marking & Report Handover", desc: "Driving a permanent survey stake at the optimal spot with depth forecast." }
    ],
    faqs: [
      { q: "Why is a water point check recommended before drilling?", a: "A scientific water point check significantly minimizes the risk of dry or low-yield borewells by using geophysical strata measurements rather than unscientific guesswork." },
      { q: "How long does the water point check take?", a: "A complete resistivity sounding and report generation typically takes 1.5 to 2.5 hours on site." }
    ]
  },
  {
    id: "robo-drilling",
    slug: "robo-borewell-drilling",
    title: "Robo Borewell Drilling",
    category: "Drilling",
    shortDesc: "Specialized compact crawler rigs designed to navigate tight city lanes, narrow compound gates, and compact residential plots.",
    fullDesc: "Robo borewell rigs represent modern drilling engineering for urban Bengaluru. Where standard 10-wheeler trucks cannot enter, our compact crawler and short-chassis robo rigs enter gates as narrow as 6.5 feet without damaging driveways or nearby boundary walls. Equipped with high-pressure air compressors, robo rigs drill up to 1,200 feet into hard granite formations.",
    image: "/images/robo_crawler_rig.jpg",
    diameter: "4.5 inch / 6.5 inch",
    suitableFor: "Independent houses, gated villas, apartment basements, tight alleys",
    equipmentUsed: "Hydraulic crawler-mounted mini rig, high-CFM rotary screw compressor",
    keyBenefits: [
      "Requires only 7 ft gate access width",
      "Zero boundary wall or compound demolition",
      "Fast hydraulic leveling & dust containment",
      "Capable of deep hard-rock penetration up to 1200+ ft"
    ],
    processSteps: [
      { title: "Site Clearance & Rig Entry", desc: "Our operator maneuvers the crawler rig through your gate and aligns the stabilizer pads." },
      { title: "Surface Collar Casing", desc: "Overburden loose soil is drilled and secured with heavy-gauge PVC casing to prevent wall collapse." },
      { title: "Hard Rock DTH Drilling", desc: "Pneumatic down-the-hole hammer crushes hard granite at high penetration speeds." },
      { title: "Water Strike & Flushing", desc: "Once productive fissures are struck, compressed air blows out pulverized stone dust to measure yield." }
    ],
    faqs: [
      { q: "What is the minimum gate width required for a Robo rig?", a: "A clear gate width of 6.5 to 7 feet is usually sufficient for our compact robo rigs to drive in safely." },
      { q: "Can a robo rig drill as deep as a large truck rig?", a: "Yes. Driven by external high-pressure compressors, the robo rig can reach depths exceeding 1,200 feet." }
    ]
  },
  {
    id: "pump-installation",
    slug: "pump-motor-installation",
    title: "Submersible Motor & Pump Installation",
    category: "Pumps & Installation",
    shortDesc: "End-to-end selection, delivery, and professional lowering of 100% copper-wound submersible pumps with digital control panels.",
    fullDesc: "Selecting the correct horsepower (HP) and stage count for your borewell is vital. We calculate the exact head pressure, pipe friction loss, and sustained water discharge rate to install branded submersible pumps (Texmo, CRI, Kirloskar, Crompton) with heavy-duty HDPE/UPVC column pipes and submersible flat cables.",
    image: "/images/pump_motor_installation.jpg",
    diameter: "All Bore Sizes",
    suitableFor: "Newly drilled borewells, replacement of burned motors, pipeline upgrades, apartments & farms",
    equipmentUsed: "Motorized tripod pipe winch, digital megger insulation tester, heavy safety wire clamp",
    keyBenefits: [
      "100% copper-wound submersible motors (Texmo, CRI, Kirloskar)",
      "Hydraulic head & yield matching for optimal water pressure",
      "Anti-drop stainless steel safety wire rope integration",
      "Digital starter panels with dry-run and phase-loss protection"
    ],
    highlightBadge: "Turnkey • Genuine Motors",
    isFeatured: true,
    processSteps: [
      { title: "Depth & Yield Calibration", desc: "Measuring true resting water level, drawdown rate, and required pump stage." },
      { title: "Assembly & Joint Sealing", desc: "Coupling submersible motor to high-tensile column pipes with torque locks." },
      { title: "Tripod Winch Lowering", desc: "Controlled motorized lowering with waterproof cable strapped every 10 feet." },
      { title: "Panel Wiring & Discharge Test", desc: "Installing digital starter panel, checking current draw, and verifying continuous flow." }
    ],
    faqs: [
      { q: "Which pump brand is recommended for Bengaluru borewells?", a: "We primarily recommend Texmo, CRI, or Kirloskar 100% copper-wound submersible pumps with 5-star energy ratings." },
      { q: "Do you supply automatic motor controller panels?", a: "Yes, we install digital water level controller panels with dry-run protection and phase-failure cutoff." }
    ]
  },
  {
    id: "standard-drilling",
    slug: "standard-borewell-drilling",
    title: "Standard Borewell Drilling",
    category: "Drilling",
    shortDesc: "High-capacity truck-mounted hydraulic rigs for commercial properties, large layouts, and farmland borewells.",
    fullDesc: "Our heavy-duty standard drilling setups utilize multi-axle carrier trucks equipped with high-torque rotary heads and dual-stage air compressors (1150-1350 CFM). Perfect for rapid, deep drilling in open sites, layout developments, industrial parks, and agricultural lands.",
    image: "/images/hero_drilling_rig.jpg",
    diameter: "6.5 inch",
    suitableFor: "Apartment complexes, commercial hubs, farmlands, open residential plots",
    equipmentUsed: "Heavy hydraulic truck-mounted rotary rig with 1200+ CFM compressor",
    keyBenefits: [
      "Maximum penetration speed in hard blue granite",
      "Depths reachable up to 1,500+ feet",
      "Wide diameter permits high-yield multi-stage commercial pumps",
      "Comprehensive casing pipe installation up to solid rock bed"
    ],
    processSteps: [
      { title: "Geophysical Reference", desc: "Verification of hydro-geologist test coordinates and marking the drill point." },
      { title: "Top-Soil Casing Insertion", desc: "Steel or Class-5 PVC casing lowered and sealed into top rock to stop surface water contamination." },
      { title: "Continuous High-Pressure Drill", desc: "Continuous hammer drilling while monitoring aquifer strata at every 50-foot interval." },
      { title: "Yield Check & Slotted Pipe Delivery", desc: "Air-lift water discharge test followed by lowering casing assembly." }
    ],
    faqs: [
      { q: "How long does drilling a standard 1000 ft borewell take?", a: "Depending on rock hardness, drilling usually completes within 8 to 14 hours on a single day." }
    ]
  },
  {
    id: "borewell-scanning",
    slug: "borewell-scanning-camera",
    title: "Borewell Camera Scanning",
    category: "Survey & Inspection",
    shortDesc: "Underwater dual-camera inspection down to 1500 ft to detect stuck pumps, casing cracks, silt depth, and active water streams.",
    fullDesc: "Stop guessing what went wrong underground. Our robotic CCTV inspection unit features a 360-degree rotating dual-lens waterproof camera with ultra-bright LED illumination. Watch live color footage on our portable monitor to see casing condition, exact fracture depths, water inflow streams, or locate stuck pump assemblies.",
    image: "/images/camera_scanning_inspection.jpg",
    diameter: "Down to 1,500 ft",
    suitableFor: "Stuck pump retrieval, collapsed casing diagnostics, yield drop investigation",
    equipmentUsed: "Motorized optical cable drum, IP68 rated 360° rotating dual HD camera",
    keyBenefits: [
      "Pinpoint exact water source fissures down to the inch",
      "Identify collapsed or cracked casing pipe without digging",
      "Full recorded HD video footage provided on USB drive",
      "Essential guide for precision pump fishing and recovery"
    ],
    processSteps: [
      { title: "Bore Mouth Preparation", desc: "Centering the pulley guide over the casing head." },
      { title: "Calibrated Descent", desc: "Lowering camera while recording live depth readings on screen." },
      { title: "Strata & Inflow Inspection", desc: "Inspecting fissures and casing joints via pan-tilt-zoom controls." },
      { title: "Comprehensive Video Report", desc: "Handover of footage and diagnostic recommendation." }
    ],
    faqs: [
      { q: "Can the camera see through cloudy muddy water?", a: "If the water is extremely turbid, we do a quick air flush first to ensure crystal-clear video visibility." }
    ]
  },
  {
    id: "borewell-cleaning",
    slug: "borewell-maintenance-cleaning",
    title: "Borewell Cleaning & Flushing",
    category: "Maintenance",
    shortDesc: "High-pressure air flushing to clear decayed silt, mud buildup, fallen debris, and restore dormant water flow.",
    fullDesc: "Over years of pumping, fine silt settles at the base of the borewell, choking lower aquifers and submerging the pump in mud. SLV Borewells utilizes high-pressure mobile air compressors (350-450 PSI) to air-lift decayed sludge, rust scale, and sand deposits to the surface, restoring the original storage volume and flow.",
    image: "/images/borewell_flushing_cleaning.jpg",
    diameter: "350-450 PSI Air Blast",
    suitableFor: "Low water output, murky muddy water, borewells unused for 2+ years",
    equipmentUsed: "High-pressure two-stage air compressor, heavy-duty flushing rods",
    keyBenefits: [
      "Revives obstructed water fissures",
      "Removes accumulated silt from borehole bottom",
      "Prevents premature pump motor burnouts",
      "Typically completed in 2 to 4 hours"
    ],
    processSteps: [
      { title: "Pump Pull-Out", desc: "Safely retracting existing pump and column pipes using portable crane hoist." },
      { title: "Flushing Rod Insertion", desc: "Lowering steel pipe string down to the absolute bottom sludge layer." },
      { title: "Compressed Air Blast", desc: "Injecting high CFM compressed air; muddy water erupts out of the surface collar." },
      { title: "Discharge Clarification", desc: "Flushing continues until the output water runs 100% clean and transparent." }
    ],
    faqs: [
      { q: "How often should a borewell be cleaned?", a: "We recommend inspection and preventive flushing every 3 to 5 years, or whenever water looks silted." }
    ]
  },
  {
    id: "inwell-drilling",
    slug: "inwell-borewell-drilling",
    title: "Inwell Borewell Drilling",
    category: "Drilling",
    shortDesc: "Deepening existing dried or low-yield open agricultural or residential wells to recharge water capacity.",
    fullDesc: "When traditional open stone wells run dry due to receding groundwater tables, Inwell Drilling mounts customized modular rig frames directly on or inside the existing well to drill further down into deeper crystalline rock fissures.",
    image: "/images/casing_pipe_installation.jpg",
    diameter: "4.5 inch or 6.5 inch",
    suitableFor: "Dry open wells, farm recharge wells, traditional heritage estates",
    equipmentUsed: "Suspended modular drill platform and high-pressure hose feed",
    keyBenefits: [
      "Revitalizes historic existing open well infrastructure",
      "Cost-effective compared to digging completely new borewells",
      "Recharges the open well basin directly from deep fractures",
      "Safe platform stabilization without well-wall damage"
    ],
    processSteps: [
      { title: "Structural Well Inspection", desc: "Ensuring the open well stone masonry is sound and hazard-free." },
      { title: "Platform Anchor & Lowering", desc: "Erecting the steel suspension gantry across the well mouth." },
      { title: "Core Rock Drilling", desc: "Drilling down through the bed to tap deep underlying water streams." }
    ],
    faqs: [
      { q: "Is inwell drilling safe for old stone-lined wells?", a: "Yes, our suspension system distributes load across external steel girders, exerting no lateral pressure on well walls." }
    ]
  },
  {
    id: "slow-rig-drilling",
    slug: "slow-rig-borewell-drilling",
    title: "Slow Rig Rotary Drilling",
    category: "Drilling",
    shortDesc: "Calibrated slow-speed rotary mud drilling for loose silt, clay, sand, and unstable collapsible boulder formations.",
    fullDesc: "Certain geological zones in Bengaluru feature heavy silt, loose sand, or loose boulders where standard air-hammer drilling would cause immediate hole collapse. Our slow rotary rigs use bentonite mud circulation to support borehole walls until heavy casing can be safely seated.",
    image: "/images/hero_drilling_rig.jpg",
    diameter: "6.5 inch / 8 inch",
    suitableFor: "River basin edges, loose sedimentary zones, reclaimed lake vicinity",
    equipmentUsed: "Rotary mud-flush drilling table with high-pressure positive displacement mud pumps",
    keyBenefits: [
      "Prevents borehole cave-ins during drilling",
      "Safely anchors through thick clay and boulder strata",
      "Permits gravel packing along full gravel-pack depth"
    ],
    processSteps: [
      { title: "Mud Pit Preparation", desc: "Formulation of organic drilling fluid to stabilize the borehole." },
      { title: "Tricone Rotary Penetration", desc: "Careful slow-speed cutter head progression." },
      { title: "Gravel Shroud & Casing", desc: "Lowering slotted pipe surrounded by graded silica pea-gravel." }
    ],
    faqs: [
      { q: "When is slow rig preferred over DTH hammer?", a: "When soil reports indicate collapsing clay, river silt, or loose gravel where air percussion could cave in." }
    ]
  },
  {
    id: "slotted-pipe",
    slug: "slotted-pipe-installation",
    title: "Slotted Pipe & Casing Installation",
    category: "Pumps & Installation",
    shortDesc: "Precision perforated casing and heavy-duty steel pipe installation to filter out sand and mud while letting clean water flow.",
    fullDesc: "Sand and silt ingress can quickly choke submersible impellers and damage domestic plumbing. We install precision-machined slotted PVC or stainless steel casing screens opposite water-bearing strata, backed with filtered river-pea gravel to guarantee sand-free crystal clear water.",
    image: "/images/casing_pipe_installation.jpg",
    diameter: "Class-5 PVC / MS",
    suitableFor: "Sandy soil zones, fractured sedimentary aquifers, borewells with silt issues",
    equipmentUsed: "Factory-slotted screen pipes, centralizers, gravel pouring hopper",
    keyBenefits: [
      "Eliminates pump motor jamming from fine sand",
      "Protects borehole structural integrity for 30+ years",
      "Maximizes inflow area with uniform micro-slotting"
    ],
    processSteps: [
      { title: "Strata Log Review", desc: "Identifying exact depths where water-bearing fissures entered the hole." },
      { title: "Casing String Design", desc: "Alternating plain pipe with slotted screens according to strata depth." },
      { title: "Gravel Shrouding", desc: "Injecting graded river quartz gravel between borehole wall and screen." }
    ],
    faqs: [
      { q: "Can slotted pipe be installed in an old borewell?", a: "Yes, by inserting an inner liner casing pipe after camera scanning." }
    ]
  }
];
