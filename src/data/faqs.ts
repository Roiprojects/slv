export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const faqsData: FAQItem[] = [
  {
    id: "faq-1",
    question: "What should be checked before drilling a borewell on my property?",
    answer: "Before drilling, verify property boundary lines, ensure site access for the rig (at least 7 feet width for robo rigs, 10+ feet for heavy trucks), check for overhead electrical wires, locate underground sewage/water pipes, and obtain a hydro-geological groundwater survey to mark the optimal drill point.",
    category: "General"
  },
  {
    id: "faq-2",
    question: "How is a suitable drilling method (Robo vs. Standard) selected?",
    answer: "Selection depends primarily on physical site accessibility and soil formation. In dense urban layouts with tight gates and paved driveways, our compact Robo Rig is ideal. In open sites, agricultural plots, or large commercial layouts with wide access, the heavy truck-mounted Standard Rig delivers maximum speed and deeper drilling capability.",
    category: "Drilling"
  },
  {
    id: "faq-3",
    question: "What factors affect the total borewell drilling cost in Bengaluru?",
    answer: "Costs depend on: 1) Total drilled depth in feet, 2) Depth of overburden loose soil requiring casing pipe, 3) Type and thickness of casing pipe (PVC vs. Heavy Mild Steel), 4) Borehole diameter (4.5\" vs. 6.5\"), 5) Drilling technique required (air hammer vs. slow rotary mud), and 6) Selected submersible pump horsepower, cable quality, and column pipe specifications.",
    category: "Cost & Billing"
  },
  {
    id: "faq-4",
    question: "Can groundwater availability be guaranteed 100%?",
    answer: "No ethical or technical contractor can offer a 100% guarantee of groundwater yield. Deep groundwater in Bengaluru flows through fractured hard crystalline granite rock aquifers that cannot be seen from the surface. However, conducting a scientific geophysical survey significantly reduces the risk of dry drilling compared to unscientific guesswork.",
    category: "Groundwater"
  },
  {
    id: "faq-5",
    question: "How long does the drilling process usually take?",
    answer: "A standard borewell drilling operation to a depth of 800 to 1,000 feet typically takes between 8 and 14 hours and is generally completed within a single working day, barring unusual boulder or cave-in complications.",
    category: "Drilling"
  },
  {
    id: "faq-6",
    question: "Do you supply and install pumps and electrical control panels?",
    answer: "Yes, we provide end-to-end installation including high-efficiency branded submersible pumps (Texmo, CRI, Kirloskar), heavy-duty UPVC/HDPE column pipes, safety stainless steel wires, and digital control panels with dry-run protection and automatic water level sensors.",
    category: "Pumps"
  },
  {
    id: "faq-7",
    question: "What should be done immediately after drilling is completed?",
    answer: "After drilling, the borehole is thoroughly air-flushed to remove drill dust and mud. It is recommended to let the borehole rest for 24-48 hours, conduct a continuous yield test, measure static water level, and then lower the properly sized submersible pump assembly.",
    category: "General"
  },
  {
    id: "faq-8",
    question: "Which areas in Bengaluru and surrounding zones do you serve?",
    answer: "We serve all major areas including Whitefield, Sarjapur, Electronic City, Bellandur, Yelahanka, Hebbal, Kanakapura Road, Devanahalli, Bannerghatta, Kengeri, Hoskote, and nearby Karnataka taluks.",
    category: "General"
  }
];
