import {
  ServiceItem,
  ServiceCategory,
  TrustPillar,
  ProcessStep,
  QuickFixComparison,
  FAQItem,
} from '../types';

export const COMPANY_DETAILS = {
  name: 'MARUTI TECH SOLUTION',
  tagline: 'Solution for Your IT Issue',
  phone: '+91 8097975434',
  phoneClean: '918097975434',
  email: 'Marutitechsolutions@gmail.com',
  address: {
    line1: 'Akurli Road, Hanuman Nagar',
    line2: 'Mumbai, Maharashtra – 400101',
    country: 'India',
  },
  hours: 'Monday – Saturday: 9:30 AM – 8:30 PM (Sunday by appointment)',
  whatsappMessage: 'Hi Maruti Tech Solution, I need help with an IT issue.',
  whatsappUrl:
    'https://wa.me/918097975434?text=Hi%20Maruti%20Tech%20Solution%2C%20I%20need%20help%20with%20an%20IT%20issue.',
  categories:
    'Computer Repair • IT Support • Hardware Solutions • Networking • IT Products & Accessories',
};

export const HOME_SERVICES: ServiceItem[] = [
  {
    id: 'laptop-desktop-repair',
    num: '01',
    title: 'Laptop & Desktop Repair',
    shortDesc:
      'Component-level diagnostics, motherboards, display panels, and power recovery for all major brands.',
    category: 'Computer Repair',
    iconName: 'Laptop',
    turnaround: 'Same day / 24 hrs',
  },
  {
    id: 'hardware-upgrades',
    num: '02',
    title: 'Hardware Upgrades',
    shortDesc:
      'High-speed NVMe SSD installations, RAM expansions, battery renewals, and thermal repasting.',
    category: 'Upgrades',
    iconName: 'Cpu',
    turnaround: '1 - 3 hours',
  },
  {
    id: 'software-installation',
    num: '03',
    title: 'OS & Software Installation',
    shortDesc:
      'Genuine Windows deployment, productivity suites, driver optimizations, and secure data backups.',
    category: 'Software',
    iconName: 'Layers',
    turnaround: '2 - 4 hours',
  },
  {
    id: 'virus-malware-removal',
    num: '04',
    title: 'Virus & Malware Removal',
    shortDesc:
      'Deep system decontamination, spyware eradication, registry repair, and proactive security hardening.',
    category: 'Security',
    iconName: 'ShieldAlert',
    turnaround: 'Same day',
  },
  {
    id: 'wired-wireless-networking',
    num: '05',
    title: 'Wired & Wireless Networking',
    shortDesc:
      'Mesh Wi-Fi routing, LAN cabling, structured switch setups, and commercial network troubleshooting.',
    category: 'Networking',
    iconName: 'Network',
    turnaround: 'Scheduled on-site',
  },
  {
    id: 'it-products-accessories',
    num: '06',
    title: 'IT Products & Accessories',
    shortDesc:
      'Verified computer peripherals, premium chargers, adapters, storage drives, and verified components.',
    category: 'IT Products',
    iconName: 'HardDrive',
    turnaround: 'Ready in-stock',
  },
];

export const TRUST_PILLARS: TrustPillar[] = [
  {
    num: '01',
    title: 'Experienced Support',
    description:
      'Hands-on technical mastery across hardware architectures, enterprise chipsets, and operating system kernels.',
  },
  {
    num: '02',
    title: 'Clear Diagnosis',
    description:
      'Honest assessment before touching a screw. We pinpoint root issues instead of making speculative guesses.',
  },
  {
    num: '03',
    title: 'Reliable Solutions',
    description:
      'Repairs built to last. We test thermal stability, electrical tolerances, and throughput before every handover.',
  },
  {
    num: '04',
    title: 'Customer-First Service',
    description:
      'Transparent communication, sensible pricing, and zero technical jargon. We treat your equipment with care.',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Tell Us the Problem',
    description:
      'Contact us via call, WhatsApp, or drop by our Mumbai center. Explain what your device is experiencing.',
  },
  {
    step: '02',
    title: 'We Diagnose It',
    description:
      'We perform structured diagnostics, identify the exact component or software flaw, and provide an honest estimate.',
  },
  {
    step: '03',
    title: 'We Fix or Upgrade It',
    description:
      'Precise component repair, genuine part installation, or network configuration with thorough stress testing.',
  },
  {
    step: '04',
    title: "You're Back to Work",
    description:
      'Collect your fully functional system or have it deployed at your workplace, operating at peak speed and stability.',
  },
];

export const APPROACH_STEPS = [
  {
    phase: 'Phase 1',
    title: 'Diagnosis',
    desc: 'Systematic hardware telemetry, component isolation, and memory/storage integrity validation.',
  },
  {
    phase: 'Phase 2',
    title: 'Solution',
    desc: 'Tailored intervention: component-level rework, authentic replacement, or OS remediation.',
  },
  {
    phase: 'Phase 3',
    title: 'Testing',
    desc: 'Stress testing, heat dissipation verification, burn-in checks, and performance benchmarks.',
  },
  {
    phase: 'Phase 4',
    title: 'Handover',
    desc: 'Transparent report of work completed, maintenance advice, and post-service guarantee.',
  },
];

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'computer-repair',
    name: 'COMPUTER REPAIR',
    description:
      'Precision benchwork and hardware recovery for laptops, desktops, and all-in-one machines.',
    items: [
      {
        title: 'Laptop Repair',
        details:
          'Motherboard repairs, hinge reconstruction, keyboard replacements, liquid damage remediation, and charging port fixes.',
        badge: 'High Demand',
      },
      {
        title: 'Desktop Repair',
        details:
          'Power supply (PSU) testing, CPU socket servicing, GPU troubleshooting, BIOS reprogramming, and custom rig diagnosis.',
      },
      {
        title: 'Hardware Troubleshooting',
        details:
          'Blue-screen (BSOD) resolution, no-display issues, intermittent freezing, overheating, and erratic fan behaviors.',
      },
    ],
  },
  {
    id: 'upgrades',
    name: 'UPGRADES',
    description:
      'Breathe new speed into existing hardware with sensible, need-based component improvements.',
    items: [
      {
        title: 'RAM Upgrade',
        details:
          'High-speed DDR4 / DDR5 dual-channel memory expansion for seamless multitasking and creative apps.',
        badge: 'Instant Speed',
      },
      {
        title: 'Storage Upgrade',
        details:
          'M.2 NVMe SSD migration with 100% clone retention of your existing files, apps, and Windows license.',
        badge: 'Popular',
      },
      {
        title: 'Screen Replacement',
        details:
          'Factory-grade IPS, OLED, FHD, and 144Hz panels for cracked, flickering, or line-distorted laptop screens.',
      },
      {
        title: 'Battery Replacement',
        details:
          'OEM-specification lithium-ion/polymer cells with genuine power control ICs for full-day endurance.',
      },
      {
        title: 'Hardware Upgrades',
        details:
          'Cooling heat-pipe upgrades, thermal paste re-application (Arctic/Noctua), and modular card additions.',
      },
    ],
  },
  {
    id: 'software',
    name: 'SOFTWARE',
    description:
      'Stable operating environments configured for maximum productivity, data integrity, and compliance.',
    items: [
      {
        title: 'Windows Installation',
        details:
          'Clean, bloatware-free Windows 11 / Windows 10 deployment with licensed activation and full drivers.',
      },
      {
        title: 'OS Reinstallation',
        details:
          'Corrupted OS recovery with non-destructive data preservation and clean user-profile restoration.',
      },
      {
        title: 'Software Installation',
        details:
          'Office suites, CAD applications, development toolchains, graphic suites, and accounting packages.',
      },
      {
        title: 'System Configuration',
        details:
          'Startup optimization, power profiling, background service tuning, and local backup scheduling.',
      },
    ],
  },
  {
    id: 'security',
    name: 'SECURITY',
    description:
      'Comprehensive digital sanitization, threat neutralization, and vulnerability patching.',
    items: [
      {
        title: 'Virus Removal',
        details:
          'Rootkit elimination, malicious boot-sector eradication, and Trojan cleanup without wiping documents.',
        badge: 'Critical',
      },
      {
        title: 'Malware Removal',
        details:
          'Browser hijackers, ransomware neutralization, crypto-miners, and hidden telemetry scrapers removed.',
      },
      {
        title: 'System Cleanup',
        details:
          'Temporary cache purges, corrupted registry repair, registry hive defragmentation, and security audits.',
      },
    ],
  },
  {
    id: 'networking',
    name: 'NETWORKING',
    description:
      'Low-latency, reliable connectivity architectures for homes, multi-story residences, and small offices.',
    items: [
      {
        title: 'Wired Network Setup',
        details:
          'CAT6 / CAT6A cabling, RJ45 patch terminations, gigabit switches, and clean wall-plate installations.',
      },
      {
        title: 'Wireless Network Setup',
        details:
          'Wi-Fi 6 / 6E mesh networks, dual-band AP configuration, dead-zone elimination, and roaming optimization.',
      },
      {
        title: 'Network Configuration',
        details:
          'VLAN segmentation, router security hardening, printer sharing, NAS storage access, and bandwidth QoS.',
      },
    ],
  },
  {
    id: 'it-products',
    name: 'IT PRODUCTS',
    description:
      'Tested, quality-certified peripherals and components backed by authentic warranties.',
    items: [
      {
        title: 'Computer Accessories',
        details:
          'Ergonomic mice, mechanical keyboards, HDMI/DisplayPort cables, USB-C docks, webcams, and headsets.',
      },
      {
        title: 'IT Hardware',
        details:
          'Original power adapters for Dell, HP, Lenovo, Asus, Apple MacBook, internal SSDs, and RAM sticks.',
      },
      {
        title: 'Related Products',
        details:
          'External hard drives, surge protectors, Wi-Fi dongles, Bluetooth transmitters, and thermal compounds.',
      },
    ],
  },
  {
    id: 'remote-support',
    name: 'REMOTE / VIRTUAL SUPPORT',
    description:
      'Fast and secure remote assistance for software, system, and network issues.',
    items: [
      {
        title: 'Remote Troubleshooting',
        details:
          'Live encrypted screen-share diagnosis to rapidly isolate and fix OS errors, application crashes, background freezes, and peripheral communication faults without an on-site visit.',
        badge: 'Instant Connect',
      },
      {
        title: 'Software Installation',
        details:
          'Remote deployment and validation of business software, Microsoft 365, accounting suites (Tally, Zoho), graphic tools, and official utility drivers tailored to your system specs.',
      },
      {
        title: 'Email Setup & Configuration',
        details:
          'Enterprise and business email client configuration across Outlook, Google Workspace, IMAP/Exchange, SMTP security certificates, spam rules, and legacy PST/OST mailbox migration.',
      },
      {
        title: 'Printer Setup & Support',
        details:
          'Network and wireless printer discovery, driver installation, print spooler queue clearing, scanner utility configuration, and multi-PC office printing setup.',
      },
      {
        title: 'System Optimization',
        details:
          'Deep digital cleanup targeting unnecessary startup processes, background registry overhead, temporary cache buildup, and thermal throttling to restore peak operating responsiveness.',
        badge: 'Speed Boost',
      },
    ],
  },
  {
    id: 'custom-builds',
    name: 'CUSTOM BUILD SYSTEMS',
    description:
      'Professionally assembled systems tailored to specific performance and business requirements.',
    items: [
      {
        title: 'Gaming PCs',
        details:
          'High-FPS, enthusiast gaming rigs featuring latest-gen NVIDIA RTX & AMD Radeon GPUs, calibrated liquid cooling loops, high-airflow mesh chassis, and meticulous cable routing.',
        badge: 'Enthusiast Grade',
      },
      {
        title: 'Office Workstations',
        details:
          'Compact, whisper-quiet, and energy-conscious desktop setups engineered for reliable 8+ hour business operations, spreadsheets, accounting software, and multi-display productivity.',
      },
      {
        title: 'Video Editing Systems',
        details:
          'Heavy-duty rendering powerhouses tuned for Adobe Premiere Pro, DaVinci Resolve, 4K/8K timelines, ultra-fast PCIe Gen4/Gen5 NVMe scratch disks, and 64GB+ high-frequency RAM.',
        badge: 'Creative Pro',
      },
      {
        title: 'Business & Enterprise PCs',
        details:
          'Commercial workstations equipped with ECC memory support, dual-LAN failover, hardware RAID arrays, and commercial motherboard designs for uninterrupted continuous business uptime.',
        badge: 'Enterprise Rigor',
      },
    ],
  },
  {
    id: 'refurbished',
    name: 'REFURBISHED PRODUCTS',
    description:
      'Quality-tested and certified refurbished devices with reliable performance.',
    items: [
      {
        title: 'Refurbished Laptops',
        details:
          'Grade-A corporate-grade laptops from Dell Latitude, Lenovo ThinkPad, and HP EliteBook—exhaustively inspected, fitted with brand-new high-speed SSDs, and battery health certified.',
        badge: 'Certified Grade-A',
      },
      {
        title: 'Refurbished Desktops',
        details:
          'Commercial small-form-factor (SFF) and tower desktops stress-tested for heat dissipation and memory stability, offering premium business performance at a fraction of new retail cost.',
        badge: 'Best Value',
      },
      {
        title: 'Refurbished Workstations',
        details:
          'Industrial-grade workstation towers (Dell Precision, HP Z-Series) powered by Intel Xeon / Core i7/i9 processors and professional Quadro/Radeon Pro graphics for CAD and 3D modeling.',
        badge: 'Heavy Duty',
      },
    ],
  },
  {
    id: 'warranty-support',
    name: 'WARRANTY & SUPPORT',
    description:
      'Transparent warranty coverage and dependable after-sales support.',
    items: [
      {
        title: 'Product Warranty',
        details:
          'Manufacturer and dealer-backed hardware warranty on all newly supplied IT components, adapters, batteries, RAM, and SSDs with streamlined hassle-free claim facilitation.',
        badge: 'Authentic Coverage',
      },
      {
        title: 'Repair Warranty',
        details:
          'Dedicated post-service guarantee covering bench-repaired motherboards, power ICs, chip-level rework, and display panels, giving complete peace of mind on technical labor.',
        badge: 'Service Backed',
      },
      {
        title: 'Warranty Criteria',
        details:
          'Clear, upfront criteria specifying warranty validity, intact tamper-evident serial labels, electrical surge protection recommendations, and non-covered physical/liquid damage boundaries.',
      },
      {
        title: 'Service Terms & Conditions',
        details:
          'Documented customer service agreements specifying diagnostic protocols, quotation sign-offs, data confidentiality protections, and guaranteed equipment handover timelines.',
      },
    ],
  },
];

export const COMPARISON_POINTS: QuickFixComparison[] = [
  {
    feature: 'Diagnosis Depth',
    quickFix: 'Temporary workaround or superficial restart',
    properSolution: 'Component-level root-cause diagnosis & voltage testing',
  },
  {
    feature: 'Hardware Recommendation',
    quickFix: 'Unnecessary whole-board replacement',
    properSolution: 'Need-based surgical repair or modular upgrade',
  },
  {
    feature: 'Communication',
    quickFix: 'Confusing technical jargon & vague estimates',
    properSolution: 'Clear, plain-English explanation & transparent pricing',
  },
  {
    feature: 'Data Safety',
    quickFix: 'Careless formatting without verified backup',
    properSolution: 'Data-first protocol prioritizing file preservation',
  },
  {
    feature: 'Testing & Quality',
    quickFix: 'Quick power check and immediate dispatch',
    properSolution: 'Multistage stress, temperature & stability verification',
  },
];

export const WHO_WE_HELP = [
  {
    title: 'Home Users',
    desc: 'Family laptops, student PCs, slow computers, and home Wi-Fi issues resolved quickly and cost-effectively.',
  },
  {
    title: 'Professionals',
    desc: 'High-performance workstations for chartered accountants, designers, developers, and remote workers who cannot afford downtime.',
  },
  {
    title: 'Small Businesses',
    desc: 'End-to-end IT support for retail stores, clinics, logistics, and trading firms requiring dependable daily uptime.',
  },
  {
    title: 'Offices',
    desc: 'Multi-seat desktop maintenance, local servers, network switches, and shared office printer connectivity.',
  },
  {
    title: 'Local Businesses',
    desc: 'Neighbourhood shops, billing counters, and commercial setups across Mumbai needing prompt hands-on assistance.',
  },
];

export const SERVICES_FAQS: FAQItem[] = [
  {
    question: 'Do you provide onsite and remote IT support?',
    answer:
      'Yes. We offer both onsite and remote support services for homes, offices, and businesses. Our team can assist with troubleshooting, software issues, network problems, and system optimization either remotely or at your location.',
  },
  {
    question: 'How long does a typical repair take?',
    answer:
      'Most software-related issues can be resolved within a few hours, while hardware repairs typically take 1–3 business days depending on the issue and parts availability.',
  },
  {
    question: 'Do your services include warranty coverage?',
    answer:
      'Yes. Eligible repairs and products include warranty coverage. Warranty terms vary based on the service or product provided and will be clearly explained before completion.',
  },
  {
    question: 'Can you help with custom-built computers and workstations?',
    answer:
      'Absolutely. We design and build custom systems for gaming, business, content creation, engineering, and other specialized requirements.',
  },
  {
    question: 'Do you sell refurbished laptops and desktops?',
    answer:
      'Yes. We offer professionally tested and quality-checked refurbished laptops, desktops, and workstations that deliver reliable performance at affordable prices.',
  },
  {
    question: 'How can I request support or get a quotation?',
    answer:
      'You can contact us through our website, email us at marutitechsolutions@gmail.com, or call our support team directly to discuss your requirements and receive a quotation.',
  },
];

