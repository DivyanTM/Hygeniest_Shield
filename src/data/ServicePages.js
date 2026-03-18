// ─────────────────────────────────────────────────────────────────────────────
//  servicePages.js
//
//  Structure per page:
//  {
//    title        : string          – page heading
//    intro        : string          – short paragraph below "Why Choose Us?"
//    image        : string          – hero/why-us section image URL
//    features     : [{ title, desc }]  – bullet feature cards in Why Us
//    services     : [{ title, desc, image }]  – "Our Services Include" cards
//    industries   : [{ name, desc, image }]   – "Industries We Serve" cards
//    cta          : { heading, sub }          – bottom CTA text
//  }
// ─────────────────────────────────────────────────────────────────────────────

const IMG = {
  aerospace:   "https://images.unsplash.com/photo-1517976487492-5750f3195933?w=500&q=75",
  medical:     "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=500&q=75",
  automotive:  "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=500&q=75",
  electronics: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&q=75",
  industrial:  "https://plus.unsplash.com/premium_photo-1664297997167-88170c57bc35?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kdXN0cmlhbCUyMGF1dG9tYXRpb258ZW58MHx8MHx8fDA%3D",
  marine:      "https://images.unsplash.com/photo-1704110826560-cb9d3772c04c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hcmluZSUyMGluZHVzdHJ5JTIwbWFjaGluZXxlbnwwfHwwfHx8MA%3D%3D",
  consumer:    "https://plus.unsplash.com/premium_photo-1664297997167-88170c57bc35?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kdXN0cmlhbCUyMGF1dG9tYXRpb258ZW58MHx8MHx8fDA%3D",
};

const servicePages = {

  // ─── PRECISION COMPONENTS ───────────────────────────────────────────────────
  "precision-components": {
    title: "Precision Components",
    intro: "We design and manufacture custom precision components with state-of-the-art CNC machining, wire cutting, and EDM technology. Whether it's prototyping or large-scale production, we provide exceptional quality and consistency.",
    image: "https://images.unsplash.com/photo-1759159091682-3b98f4759367?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjaGluZSUyMHByZWNpc2lvbnxlbnwwfHwwfHx8MA%3D%3D",
    features: [
      { title: "Micron-Level Accuracy",             desc: "Class 1 tolerance operations — the highest precision in every component we craft." },
      { title: "Advanced Multi-Axis Technology",    desc: "Multi-axis CNC machining handles complex geometries in a single setup." },
      { title: "Custom Prototyping & Production",   desc: "Scalable solutions from single prototypes to high-volume batch runs." },
      { title: "Diverse Material Capabilities",     desc: "Titanium, aluminium, stainless steel, plastics and specialty alloys." },
    ],
    services: [
      { title: "Custom Machined Components",    desc: "Tailored to your exact specifications using advanced CNC technologies.",              image: "https://images.unsplash.com/photo-1621235218771-d7ccf11a1408?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { title: "Prototype & Production Parts",  desc: "From one-off prototypes to mass production — consistent quality every time.",        image: "https://images.unsplash.com/photo-1625465104180-1775bd5a11ef?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { title: "High-Accuracy Assemblies",      desc: "Complex assemblies built with micron precision for demanding applications.",          image: "https://images.unsplash.com/photo-1764745021344-317b80f09e40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFjaGluZSUyMGFzc2VtYmx5fGVufDB8fDB8fHww" },
      { title: "Component Refinishing",         desc: "Enhance durability and performance with protective surface coatings.",               image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=75" },
      { title: "Multi-Material Machining",      desc: "Expertise in metals, alloys and engineered plastics for varied applications.",       image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&q=75" },
    ],
    industries: [
      { name: "Aerospace",              desc: "Special fixtures for machining aerospace components.",               image: IMG.aerospace  },
      { name: "Medical & Surgical",     desc: "Precision parts for medical devices and surgical instruments.",      image: IMG.medical    },
      { name: "Automotive",             desc: "High-precision fixtures for automotive manufacturing.",              image: IMG.automotive },
      { name: "Marine Industry",        desc: "Robust components for heavy-duty marine applications.",              image: IMG.marine     },
      { name: "Industrial & Automation",desc: "High-accuracy tooling for automated manufacturing processes.",       image: IMG.industrial },
    ],
    cta: {
      heading: "Get High-Precision Components",
      sub: "Contact our engineering team today to discuss your requirements and receive a tailored quote.",
    },
  },

  // ─── CNC WIRE CUT ────────────────────────────────────────────────────────────
  "cnc-wire-cut": {
    title: "CNC Wire Cut",
    intro: "CNC Wire Cut (Wire EDM) uses an electrically charged wire to cut through metal with extreme precision. No mechanical cutting force is applied, making it ideal for hardened materials, fragile parts and complex internal geometries that conventional machining cannot achieve.",
    image: "https://plus.unsplash.com/premium_photo-1682146121756-10d8209fe077?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y25jJTIwd2lyZSUyMGN1dHxlbnwwfHwwfHx8MA%3D%3D",
    features: [
      { title: "Zero Mechanical Stress",      desc: "Wire erosion applies no cutting force — perfect for delicate or hardened parts." },
      { title: "Hardened Material Cutting",   desc: "Cuts through hardened tool steel, carbide and exotic alloys with ease." },
      { title: "Complex Internal Shapes",     desc: "Achieves sharp internal corners and intricate profiles impossible by other methods." },
      { title: "Accuracy to ±0.002mm",        desc: "Micron-level tolerances for the most demanding precision requirements." },
      { title: "Excellent Surface Finish",    desc: "Smooth Ra values achievable directly from the machine — minimal secondary work." },
    ],
    services: [
      { title: "Mould Components",         desc: "Wire-cut cores, cavities and inserts for injection moulds.",              image: "https://plus.unsplash.com/premium_photo-1673208484535-66a8f7d05294?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW91bGQlMjBjb21wb25lbnRzfGVufDB8fDB8fHww" },
      { title: "Punch & Die Sets",         desc: "Precision matched punches and dies for stamping operations.",             image: "https://plus.unsplash.com/premium_photo-1750736442790-27f638561aca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHVuY2glMjBhbmQlMjBkaWUlMjBzZXR8ZW58MHx8MHx8fDA%3D" },
      { title: "Carbide Parts",            desc: "Wire cutting of tungsten carbide and other ultra-hard materials.",        image: "https://images.unsplash.com/photo-1663270336746-5cb8e5504db9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FyYmlkZSUyMHBhcnRzfGVufDB8fDB8fHww" },
      { title: "Rapid Prototyping",        desc: "Fast turnaround wire-cut prototypes direct from customer drawings.",      image: "https://images.unsplash.com/photo-1707286993616-5fed002cf505?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFjaGluZSUyMHByb3RvdHlwaW5nfGVufDB8fDB8fHww" },
    ],
    industries: [
      { name: "Aerospace",          desc: "Precision fixture and component parts for aviation.",              image: IMG.aerospace  },
      { name: "Medical",            desc: "Surgical instrument and implant components.",                      image: IMG.medical    },
      { name: "Automotive",         desc: "Stamping dies and mould inserts for automotive production.",       image: IMG.automotive },
      { name: "Electronics",        desc: "Fine-pitch connectors and lead-frame components.",                 image: IMG.electronics},
      { name: "Industrial",         desc: "Heavy-duty tooling and fixture components.",                       image: IMG.industrial },
    ],
    cta: {
      heading: "Enquire About CNC Wire Cut",
      sub: "Share your drawings with our team and receive a detailed quote within one business day.",
    },
  },

  // ─── PRECISION CNC MILLING ───────────────────────────────────────────────────
  "precision-cnc-milling": {
    title: "Precision CNC Milling",
    intro: "Our CNC milling services cover 3-axis to 5-axis machining, enabling the production of highly complex parts in a single setup. We work with a wide range of metals and engineering plastics to deliver components meeting the tightest specifications.",
    image: "https://images.unsplash.com/photo-1666634157070-6fd830fb5672?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByZWNpc2lvbiUyMDMlMjBheGlzJTIwbWluaWd8ZW58MHx8MHx8fDA%3D",
    features: [
      { title: "3-Axis to 5-Axis Capability",  desc: "Complex geometries machined complete in a single clamping operation." },
      { title: "High Surface Quality",          desc: "Exceptional surface finishes that reduce the need for secondary operations." },
      { title: "Wide Material Range",           desc: "Aluminium, steel, stainless, titanium, brass and engineering plastics." },
      { title: "CAD/CAM Integration",           desc: "Direct file import from your design team for fast quoting and setup." },
      { title: "Prototype to Production",       desc: "Flexible batch sizes from single prototypes through to large production runs." },
    ],
    services: [
      { title: "3-Axis Milling",      desc: "Standard milling for flat and contoured surfaces with high accuracy.",   image: "https://images.unsplash.com/photo-1666634157070-6fd830fb5672?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByZWNpc2lvbiUyMDMlMjBheGlzJTIwbWluaWd8ZW58MHx8MHx8fDA%3D" },
      { title: "5-Axis Milling",      desc: "Complex undercuts and compound angles machined in a single setup.",      image: "https://images.unsplash.com/photo-1727292486169-33eba0865c99?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByZWNpc2lvbiUyMDMlMjBheGlzJTIwbWluaWd8ZW58MHx8MHx8fDA%3D" },
      { title: "Jig Boring",          desc: "High-accuracy hole patterns and precision bore sizing.",                  image: "https://images.unsplash.com/photo-1712850342263-24317669a5c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8amlnJTIwYm9yaW5nfGVufDB8fDB8fHww" },
      { title: "Profile Milling",     desc: "Contour-following operations for complex 3D surface profiles.",          image: "https://images.unsplash.com/photo-1551868561-f2cdee310ecf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGppZyUyMGJvcmluZ3xlbnwwfHwwfHx8MA%3D%3D" },
    ],
    industries: [
      { name: "Aerospace",     desc: "Complex structural and bracket components for aviation.",         image: IMG.aerospace  },
      { name: "Medical",       desc: "Implants, instruments and medical device housings.",              image: IMG.medical    },
      { name: "Automotive",    desc: "Engine components, brackets and precision housings.",             image: IMG.automotive },
      { name: "Electronics",   desc: "Enclosures, heat sinks and precision electronic assemblies.",    image: IMG.electronics},
      { name: "Industrial",    desc: "Machine components, fixtures and manufacturing tooling.",        image: IMG.industrial },
    ],
    cta: {
      heading: "Get CNC Milling Solutions",
      sub: "Upload your CAD files and our engineers will respond with a competitive quote.",
    },
  },

  // ─── PRECISION CNC TURNING ──────────────────────────────────────────────────
  "precision-cnc-turning": {
    title: "Precision CNC Turning",
    intro: "Our CNC turning centres with live tooling allow machining of complex rotational parts complete in a single operation. From simple shafts to intricate turned components with cross-drilled holes and milled flats — we deliver precision every time.",
    image: "https://plus.unsplash.com/premium_photo-1682144591991-585764d2a651?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJlY2lzaW9uJTIwY25jJTIwdHVybmluZ3xlbnwwfHwwfHx8MA%3D%3D",
    features: [
      { title: "Live Tooling Capability",    desc: "Mill, drill and tap features performed in a single turning operation." },
      { title: "Swiss-Type Turning",         desc: "Long slender parts machined with extreme accuracy using a guide bush." },
      { title: "Sub-Spindle Operations",     desc: "Complete back-face machining without reclamping for higher accuracy." },
      { title: "Tight Roundness Control",    desc: "Cylindricity and concentricity held to micron tolerances." },
      { title: "Volume Flexibility",         desc: "From single prototypes through to high-volume production runs." },
    ],
    services: [
      { title: "Shafts & Spindles",      desc: "Precision turned shafts for motors, pumps and gearboxes.",        image: "https://images.unsplash.com/photo-1625464733746-f884014c73bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNoYWZ0cyUyMGFuZCUyMHNwaW5kbGVzfGVufDB8fDB8fHww" },
      { title: "Bushings & Sleeves",     desc: "Tight-tolerance bore components for bearing and sealing applications.", image: "https://images.unsplash.com/photo-1570099874387-74aa2aac0439?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFjaGluZSUyMGJ1c2hpbmdzfGVufDB8fDB8fHww" },
      { title: "Threaded Components",    desc: "Precision threads — internal, external, metric and imperial.",     image: "https://plus.unsplash.com/premium_photo-1673208484535-66a8f7d05294?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHRocmVhZGVkJTIwY29tcG9uZW5ldHN8ZW58MHx8MHx8fDA%3D" },
      { title: "Turned Mould Inserts",   desc: "Complex turned inserts for moulds and production fixtures.",       image: "https://images.unsplash.com/photo-1729854808396-7c7ce07495a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1hY2hpbmUlMjBtb3VsZHN8ZW58MHx8MHx8fDA%3D" },
    ],
    industries: [
      { name: "Aerospace",     desc: "Precision shafts and housings for aircraft systems.",             image: IMG.aerospace  },
      { name: "Medical",       desc: "Turned components for surgical tools and implants.",              image: IMG.medical    },
      { name: "Automotive",    desc: "Shafts, pins and precision turned parts for vehicles.",          image: IMG.automotive },
      { name: "Industrial",    desc: "Custom turned components for machinery and equipment.",          image: IMG.industrial },
    ],
    cta: {
      heading: "Get CNC Turning Solutions",
      sub: "Send your drawings today and our team will provide a fast, accurate quote.",
    },
  },

  // ─── CUSTOMISED MOULD INSERTS ────────────────────────────────────────────────
  "customised-mould-inserts": {
    title: "Customised Mould Inserts",
    intro: "We design and manufacture customised mould inserts in tool steel grades including P20, H13, S136 and 316 stainless. Our inserts are produced with tight tolerances and excellent surface finish to ensure consistent part quality across high-volume production cycles.",
    image: "https://images.unsplash.com/photo-1729854808396-7c7ce07495a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1hY2hpbmUlMjBtb3VsZHN8ZW58MHx8MHx8fDA%3D",
    features: [
      { title: "Multiple Steel Grades",      desc: "P20, H13, S136, NAK80 and 316 stainless steel available on request." },
      { title: "EDM & CNC Combined",         desc: "Wire cut and sinker EDM for complex cavity profiles and fine details." },
      { title: "High Surface Finish",        desc: "Polished to SPI A1 mirror finish for optical-grade plastic parts." },
      { title: "Medical Grade Available",    desc: "316 stainless inserts for sterile medical plastic moulding applications." },
      { title: "Interchangeable Design",     desc: "Family mould inserts designed for efficient multi-cavity tooling." },
    ],
    services: [
      { title: "Core Inserts",          desc: "Male inserts forming the interior geometry of plastic parts.",         image: "https://images.unsplash.com/photo-1625465104346-1ec72f86a54b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1hY2hpbmUlMjBtb3VsZHxlbnwwfHwwfHx8MA%3D%3D" },
      { title: "Cavity Inserts",        desc: "Female cavity inserts defining the outer form of moulded parts.",     image: "https://plus.unsplash.com/premium_photo-1673431020419-ebd2793aa6e5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFjaGluZSUyMG1vdWxkfGVufDB8fDB8fHww" },
      { title: "Side Actions",          desc: "Sliding and lifter inserts for undercut features in complex parts.",   image: "https://images.unsplash.com/photo-1650753184425-18b2b9a7609f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFjaGluZSUyMHNsZGllJTIwYWN0aW9uc3xlbnwwfHwwfHx8MA%3D%3D" },
      { title: "316 SS Medical Inserts",desc: "Stainless steel inserts for sterile and medical-grade moulding.",     image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&q=75" },
    ],
    industries: [
      { name: "Medical",       desc: "Sterile-grade inserts for medical plastic components.",           image: IMG.medical    },
      { name: "Automotive",    desc: "High-cycle inserts for automotive interior and exterior parts.",  image: IMG.automotive },
      { name: "Electronics",   desc: "Precision inserts for connector and housing components.",        image: IMG.electronics},
      { name: "Consumer",      desc: "Complex inserts for consumer product enclosures and covers.",    image: IMG.consumer   },
    ],
    cta: {
      heading: "Get Custom Mould Inserts",
      sub: "Share your mould specifications with us for a fast and detailed quotation.",
    },
  },

  // ─── EDM ELECTRODES ──────────────────────────────────────────────────────────
  "edm-electrodes": {
    title: "EDM Electrodes",
    intro: "We machine precision EDM electrodes from high-grade graphite and copper tungsten materials. Accurate electrode geometry is critical for achieving tight tolerances and excellent surface texture in die-sinking EDM operations for moulds and tooling.",
    image: "https://images.unsplash.com/photo-1759046684760-044ec18ff4be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JhcGhpdGUlMjBlbGVjdHJvZGVzfGVufDB8fDB8fHww",
    features: [
      { title: "High-Grade Graphite",        desc: "ISO-grade graphite for fine-detail sinker EDM with extended electrode life." },
      { title: "Copper Tungsten Electrodes", desc: "For deep narrow slots and hard material EDM applications." },
      { title: "Matched Electrode Sets",     desc: "Roughing, semi-finishing and finishing sets supplied in matched pairs." },
      { title: "CMM Verified",               desc: "All electrodes dimensionally checked on CMM before dispatch." },
      { title: "Fast Lead Times",            desc: "Quick production and delivery to keep your EDM machine running." },
    ],
    services: [
      { title: "Graphite Electrodes",          desc: "High-density graphite for complex sinker EDM cavity work.",            image: "https://images.unsplash.com/photo-1759046684760-044ec18ff4be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JhcGhpdGUlMjBlbGVjdHJvZGVzfGVufDB8fDB8fHww" },
      { title: "Copper Tungsten Electrodes",   desc: "For deep, narrow slots and hard-material EDM operations.",             image: "https://images.unsplash.com/photo-1582276697946-7f67781d87f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29wcG9yJTIwdHVuZ3N0ZW4lMjBlbGN0cm9kZXxlbnwwfHwwfHx8MA%3D%3D" },
      { title: "Multi-Cavity Sets",            desc: "Family electrode sets machined to consistent electrode offset.",        image: "https://images.unsplash.com/photo-1650753184425-18b2b9a7609f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFjaGluZSUyMHNsZGllJTIwYWN0aW9uc3xlbnwwfHwwfHx8MA%3D%3D" },
      { title: "System Holder Interfaces",     desc: "System 3R and Erowa compatible tooling interfaces available.",         image: "https://images.unsplash.com/photo-1624840954879-e48373a1c727?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjaGluZSUyMGhvbGRlciUyMGludGVmYWNlc3xlbnwwfHwwfHx8MA%3D%3D" },
    ],
    industries: [
      { name: "Aerospace",    desc: "Complex cavity electrodes for aerospace tooling.",             image: IMG.aerospace  },
      { name: "Medical",      desc: "Fine-detail electrodes for medical mould inserts.",            image: IMG.medical    },
      { name: "Automotive",   desc: "Production electrodes for automotive die tooling.",            image: IMG.automotive },
      { name: "Industrial",   desc: "Heavy-duty electrodes for industrial die manufacturing.",     image: IMG.industrial },
    ],
    cta: {
      heading: "Order EDM Electrodes",
      sub: "Send us your electrode drawings and we will quote you quickly with fast delivery.",
    },
  },

  // ─── MILLING COLLETS ────────────────────────────────────────────────────────
  "milling-collets": {
    title: "Milling Collets (Customized)",
    intro: "Standard collets don't always fit non-standard tooling. We manufacture customised collets ground to exact bore sizes and runout specifications — ensuring your milling cutters are held rigidly with minimal vibration for superior surface finishes and tool life.",
    image: "https://images.unsplash.com/photo-1666618090858-fbcee636bd3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWlsbGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    features: [
      { title: "Custom Bore Sizes",         desc: "Non-standard bore diameters precision ground to your exact specification." },
      { title: "Low Runout Guarantee",      desc: "Total Indicator Runout (TIR) held to less than 0.005mm." },
      { title: "Multiple Shank Types",      desc: "ER, DA, TG, SK and fully custom interface designs available." },
      { title: "Tool Steel & Spring Steel", desc: "Material choice to suit your application and clamping forces." },
      { title: "Quick Delivery",            desc: "Small-batch production with fast lead times to minimise downtime." },
    ],
    services: [
      { title: "ER Series Collets",       desc: "Standard and non-standard ER collets ground to required bore.",   image: "https://plus.unsplash.com/premium_photo-1682146788010-e250a4c79325?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFjaGluZSUyMG1pbGxpbmdzfGVufDB8fDB8fHww" },
      { title: "Custom Bore Collets",     desc: "Any bore diameter precision ground to ±0.005mm tolerance.",       image: "https://images.unsplash.com/photo-1572990070233-1281671b2968?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJvcmUlMjBjb2xsZXRzfGVufDB8fDB8fHww" },
      { title: "Collet Chuck Bodies",     desc: "Matched collet chuck bodies for precise and rigid tool clamping.", image: "https://images.unsplash.com/photo-1722902439840-d659a6c21d49?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFjaGluZSUyMG1pbGxpbmdzfGVufDB8fDB8fHww" },
      { title: "Step & Extended Collets", desc: "Step collets and extended reach designs for deep cavity work.",    image: "https://images.unsplash.com/photo-1581615024462-90ecfbb8de5f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFjaGluZSUyMG1pbGxpbmdzfGVufDB8fDB8fHww" },
    ],
    industries: [
      { name: "Aerospace",     desc: "Precision tool holding for aerospace machining operations.",       image: IMG.aerospace  },
      { name: "Automotive",    desc: "High-speed milling collets for automotive production lines.",     image: IMG.automotive },
      { name: "Electronics",   desc: "Micro-bore collets for fine-pitch electronic component machining.", image: IMG.electronics},
      { name: "Industrial",    desc: "Heavy-duty collets for industrial milling and routing.",          image: IMG.industrial },
    ],
    cta: {
      heading: "Order Custom Collets",
      sub: "Tell us your bore size, shank type and quantity and we will get back to you promptly.",
    },
  },

  // ─── MILLING CUTTERS ────────────────────────────────────────────────────────
  "milling-cutters": {
    title: "Milling Cutters (Customized)",
    intro: "When standard catalogue tooling cannot achieve the required profile, our custom milling cutters are the answer. We design and grind form tools, profile cutters and special end mills to your exact geometry, material and coating requirements.",
    image: "https://images.unsplash.com/photo-1624301809538-5d5c4562656e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3V0dGVyJTIwbWFjaGluZXxlbnwwfHwwfHx8MA%3D%3D",
    features: [
      { title: "Custom Form Profiles",    desc: "Any 2D profile ground into the cutter for single-pass precision machining." },
      { title: "Solid Carbide & HSS",     desc: "Carbide for high-volume production, HSS for flexibility and toughness." },
      { title: "Coating Options",         desc: "TiN, TiAlN, DLC and uncoated options depending on your application." },
      { title: "Re-Grinding Service",     desc: "Used cutters reground to original specification to extend tool life." },
      { title: "Short Lead Times",        desc: "Custom cutters designed and manufactured with fast delivery." },
    ],
    services: [
      { title: "Profile / Form Cutters",    desc: "Cutters ground to exactly match complex part profiles.",          image: "https://images.unsplash.com/photo-1596552571892-2dda2c594670?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMG1hY2hpbmUlMjBjdXR0ZXJ8ZW58MHx8MHx8fDA%3D" },
      { title: "Custom End Mills",          desc: "Non-standard flute count, helix angle and cutting lengths.",      image: "https://images.unsplash.com/photo-1624301809538-5d5c4562656e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3V0dGVyJTIwbWFjaGluZXxlbnwwfHwwfHx8MA%3D%3D" },
      { title: "T-Slot & Woodruff Cutters", desc: "Special slot cutters for keyway and undercut machining.",        image: "https://images.unsplash.com/photo-1561435375-c3e1b6fdd7d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29vZCUyMGN1dHRlcnMlMjBtYWNoaW5lfGVufDB8fDB8fHww" },
      { title: "Re-Grinding Service",       desc: "Restore worn cutters to full performance at a fraction of new cost.", image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&q=75" },
    ],
    industries: [
      { name: "Aerospace",    desc: "Special form cutters for aerospace structural components.",        image: IMG.aerospace  },
      { name: "Automotive",   desc: "Profile cutters for high-volume automotive part production.",     image: IMG.automotive },
      { name: "Electronics",  desc: "Micro end mills for PCB and fine-pitch component machining.",    image: IMG.electronics},
      { name: "Industrial",   desc: "Heavy-duty cutters for industrial manufacturing operations.",    image: IMG.industrial },
    ],
    cta: {
      heading: "Order Custom Milling Cutters",
      sub: "Send us your profile drawing or requirements and we will design the ideal cutting tool.",
    },
  },

  // ─── SHEET METAL ─────────────────────────────────────────────────────────────
  "sheet-metal": {
    title: "Sheet Metal Fabrication",
    intro: "We specialise in high-precision sheet metal fabrication using advanced manufacturing techniques. Whether you need prototypes, small-batch production or large-scale manufacturing — our expertise ensures exceptional accuracy, strength and efficiency in every project.",
    image: "https://images.unsplash.com/photo-1766529886805-b89a8e1f9350?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFjaGluZSUyMHRyb2xsZXlzfGVufDB8fDB8fHww",
    features: [
      { title: "Laser Cutting to 20mm",    desc: "State-of-the-art laser machines for highly accurate, intricate designs." },
      { title: "Custom Fabrication",       desc: "Tailored solutions from prototyping through to mass production." },
      { title: "Industry-Grade Materials", desc: "Mild steel, stainless, aluminium and specialty metals for every need." },
      { title: "Fast Turnaround",          desc: "Efficient workflows to meet tight deadlines without compromising quality." },
      { title: "Cost-Effective Process",   desc: "Optimised production methods providing high quality at competitive pricing." },
    ],
    services: [
      { title: "Laser Cutting",             desc: "High-speed precision cutting for complex and intricate sheet designs.",  image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&q=75" },
      { title: "Bending & Forming",         desc: "Precisely shaped metal components with accurate angles and curves.",     image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=400&q=75" },
      { title: "Welding & Assembly",        desc: "Durable and seamless metal joints for long-lasting structures.",         image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=75" },
      { title: "Powder Coating",            desc: "Enhance both durability and appearance with protective powder coatings.", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=75" },
      { title: "Prototyping & Production",  desc: "Scalable from one-off samples through to full-scale manufacturing.",    image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=400&q=75" },
    ],
    industries: [
      { name: "Aerospace",          desc: "Lightweight and durable metal parts for aviation components.",       image: IMG.aerospace  },
      { name: "Automotive",         desc: "Fabrication of frames, panels and precision body components.",       image: IMG.automotive },
      { name: "Electronics",        desc: "Custom enclosures, casings and mounting brackets.",                 image: IMG.electronics},
      { name: "Medical",            desc: "Stainless steel surgical and healthcare-grade equipment.",          image: IMG.medical    },
      { name: "Industrial",         desc: "Robust fabricated components for heavy-duty applications.",        image: IMG.industrial },
    ],
    cta: {
      heading: "Get Sheet Metal Solutions",
      sub: "Upload your drawings or DXF files and receive a same-day quote from our team.",
    },
  },

  // ─── TROLLEYS ────────────────────────────────────────────────────────────────
  "trolleys": {
    title: "SS316 Stainless Steel Trolleys",
    intro: "We fabricate heavy-duty custom trolleys from 316-grade stainless steel — the preferred material for medical, cleanroom, food-grade and industrial environments. Every trolley is built to your dimensions and load requirements with full weld inspection.",
    image: "https://images.unsplash.com/photo-1766529886805-b89a8e1f9350?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFjaGluZSUyMHRyb2xsZXlzfGVufDB8fDB8fHww",
    features: [
      { title: "316 Grade Stainless Steel",   desc: "Superior corrosion resistance for the most demanding environments." },
      { title: "Custom Dimensions",           desc: "Any size, shelf configuration and accessory mounting arrangement." },
      { title: "Medical Cleanroom Ready",     desc: "Electropolished finish available for sterile cleanroom applications." },
      { title: "Heavy Load Rated",            desc: "Engineered to your specific static and dynamic load requirements." },
      { title: "Premium Castors & Locks",     desc: "Stainless castors with locking brakes fitted as standard." },
    ],
    services: [
      { title: "Medical Trolleys",      desc: "Sterile-grade trolleys for hospitals, clinics and cleanrooms.",        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&q=75" },
      { title: "Industrial Trolleys",   desc: "Heavy-duty trolleys for factories, warehouses and production lines.",  image: "https://images.unsplash.com/photo-1766529886805-b89a8e1f9350?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFjaGluZSUyMHRyb2xsZXlzfGVufDB8fDB8fHww" },
      { title: "Multi-Shelf Trolleys",  desc: "Configurable multi-tier shelf layouts built to your specifications.",  image: "https://images.unsplash.com/photo-1768321611024-39d91399abaf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVkaWNhbCUyMHRyb2xsZXlzfGVufDB8fDB8fHww" },
      { title: "Instrument Trolleys",   desc: "Precision instrument and tool trolleys with lockable drawers.",        image: "https://images.unsplash.com/photo-1755168897883-4f0f0441292e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5zdHJ1bWVudGFsJTIwdHJvbGxleXN8ZW58MHx8MHx8fDA%3D" },
    ],
    industries: [
      { name: "Medical & Healthcare",  desc: "Cleanroom and sterile-grade stainless trolleys.",                  image: IMG.medical    },
      { name: "Industrial",            desc: "Robust trolleys for warehouses and production facilities.",        image: IMG.industrial },
      { name: "Aerospace",             desc: "Tool and instrument trolleys for aerospace assembly operations.",  image: IMG.aerospace  },
    ],
    cta: {
      heading: "Order Custom Trolleys",
      sub: "Tell us your dimensions, load requirements and finish and we will provide a fast quote.",
    },
  },

  // ─── AUTOMATION COMPONENTS ───────────────────────────────────────────────────
  "automation-components": {
    title: "Automation Components",
    intro: "We provide advanced automation components designed for seamless integration and high efficiency. Our complete solutions include sub-assemblies, jigs, fixtures, rubber components and full contract manufacturing — keeping your production line running at peak performance.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=80",
    features: [
      { title: "End-to-End Supply",          desc: "From individual components to complete sub-assembled production-ready modules." },
      { title: "Cross-Industry Expertise",   desc: "Solutions spanning semiconductor, electronics, medical and more." },
      { title: "Custom JIGS & Fixtures",     desc: "Tooling designed specifically to optimise your assembly process." },
      { title: "Full Documentation",         desc: "Technical documentation, BOMs and assembly instructions provided." },
      { title: "Contract Manufacturing",     desc: "Outsource your production to our experienced engineering team." },
    ],
    services: [
      { title: "Sub Assemblies",          desc: "Precision-assembled modules ready for direct line integration.",       image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=75" },
      { title: "JIGS & Fixtures",         desc: "Custom tooling for consistent, repeatable assembly operations.",       image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=400&q=75" },
      { title: "Rubber Components",       desc: "Custom-moulded rubber parts for sealing and vibration damping.",      image: "https://images.unsplash.com/photo-1614935151651-0bea6508db6b?w=400&q=75" },
      { title: "Contract Manufacturing",  desc: "Full outsourced production of your complete engineered products.",    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&q=75" },
      { title: "Value Added Services",    desc: "Additional processing steps integrated into your supply chain.",      image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=400&q=75" },
    ],
    industries: [
      { name: "Electronics",   desc: "Automation components for semiconductor and PCB assembly.",        image: IMG.electronics},
      { name: "Automotive",    desc: "Assembly jigs and fixtures for automotive production lines.",      image: IMG.automotive },
      { name: "Medical",       desc: "Cleanroom-compatible assembly components for medical devices.",   image: IMG.medical    },
      { name: "Industrial",    desc: "Heavy-duty automation tooling for manufacturing facilities.",     image: IMG.industrial },
      { name: "Aerospace",     desc: "High-precision assembly fixtures for aerospace components.",      image: IMG.aerospace  },
    ],
    cta: {
      heading: "Automate Your Production",
      sub: "Speak to our automation specialists to discuss your requirements in detail.",
    },
  },

  // ─── SUB ASSEMBLIES ──────────────────────────────────────────────────────────
  "sub-assemblies": {
    title: "Sub Assemblies",
    intro: "We assemble complex sub-assemblies from multiple precision components, delivering fully tested modules that plug directly into your production line. This reduces your assembly labour, improves quality consistency and simplifies your supply chain significantly.",
    image: "https://images.unsplash.com/photo-1764745021344-317b80f09e40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFjaGluZSUyMGFzc2VtYmx5fGVufDB8fDB8fHww",
    features: [
      { title: "Reduced Assembly Labour",   desc: "Receive finished modules — not loose parts requiring further assembly." },
      { title: "Quality Tested",            desc: "Each sub-assembly inspected and functionally tested before dispatch." },
      { title: "BOM Management",            desc: "We manage your bill of materials and component sourcing on your behalf." },
      { title: "ESD-Safe Assembly",         desc: "Clean room and ESD-safe assembly available for sensitive electronics." },
      { title: "Full Traceability",         desc: "Serial number and lot traceability documentation provided with every order." },
    ],
    services: [
      { title: "Mechanical Sub-Assemblies",   desc: "Bolted and pressed mechanical assemblies to your drawings.",          image: "https://images.unsplash.com/photo-1764745021344-317b80f09e40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFjaGluZSUyMGFzc2VtYmx5fGVufDB8fDB8fHww" },
      { title: "Electro-Mechanical Modules",  desc: "Combined mechanical and electrical assembly services.",              image: "https://plus.unsplash.com/premium_photo-1682144830185-d6d72bdcdd99?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFjaGluZSUyMGFzc2VtYmx5fGVufDB8fDB8fHww" },
      { title: "Kitting & Packaging",         desc: "Components kitted, labelled and packed for your assembly line.",     image: "https://images.unsplash.com/photo-1735494033690-c74aa2641fb9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hY2hpbmUlMjBhc3NlbWJseXxlbnwwfHwwfHx8MA%3D%3D" },
      { title: "Functional Testing",          desc: "Dimensional and functional testing of completed modules.",           image: "https://images.unsplash.com/photo-1735494035464-94fdd0f8e780?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1hY2hpbmUlMjBhc3NlbWJseXxlbnwwfHwwfHx8MA%3D%3D" },
    ],
    industries: [
      { name: "Electronics",   desc: "ESD-safe module assembly for electronic systems.",                image: IMG.electronics},
      { name: "Automotive",    desc: "Sub-assembled modules for automotive production lines.",          image: IMG.automotive },
      { name: "Medical",       desc: "Cleanroom-assembled sub-assemblies for medical equipment.",      image: IMG.medical    },
      { name: "Industrial",    desc: "Robust sub-assemblies for industrial machinery and equipment.",  image: IMG.industrial },
    ],
    cta: {
      heading: "Streamline Your Assembly",
      sub: "Let us handle the sub-assembly process so you can focus on your core production.",
    },
  },

  // ─── JIGS & FIXTURES ────────────────────────────────────────────────────────
  "jigs-fixtures": {
    title: "JIGS & Fixtures",
    intro: "A well-designed jig or fixture directly impacts your productivity, quality and scrap rate. Our engineering team designs and manufactures custom jigs and fixtures that locate, clamp and guide your components with precision — reducing cycle time and operator dependency.",
    image: "https://plus.unsplash.com/premium_photo-1682144567823-cee310dc0fa5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFjaGluZSUyMGZpeHR1cmVzfGVufDB8fDB8fHww",
    features: [
      { title: "Purpose-Designed Tooling",   desc: "Engineered specifically for your part geometry and assembly process." },
      { title: "Machining Fixtures",         desc: "CNC and VMC fixtures for accurate, repeatable part clamping." },
      { title: "Assembly Jigs",              desc: "Ensure correct component location during all assembly operations." },
      { title: "Welding Fixtures",           desc: "Maintain geometry and reduce distortion throughout welding." },
      { title: "Inspection Gauges",          desc: "Go/no-go gauges and check fixtures for production quality control." },
    ],
    services: [
      { title: "Machining Fixtures",    desc: "Workholding fixtures for CNC and VMC machining operations.",          image: "https://plus.unsplash.com/premium_photo-1682144567823-cee310dc0fa5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFjaGluZSUyMGZpeHR1cmVzfGVufDB8fDB8fHww" },
      { title: "Assembly Jigs",         desc: "Locating and clamping jigs for manual and automated assembly.",       image: "https://media.istockphoto.com/id/1079443472/photo/jig-fixture-part-with-clamp.webp?a=1&b=1&s=612x612&w=0&k=20&c=AVxkMcGBRyjfnX_dJERkqJdYIbbAIo44BhVS3R5QElc=" },
      { title: "Welding Fixtures",      desc: "Robust fixtures maintaining component position during welding.",      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&q=75" },
      { title: "Inspection Gauges",     desc: "Custom gauges for in-process and final inspection checking.",        image: "https://images.unsplash.com/photo-1709613132285-b5411747eb4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjaGluZSUyMGluc3BlY3Rpb24lMjBndWFnZXN8ZW58MHx8MHx8fDA%3D" },
    ],
    industries: [
      { name: "Automotive",   desc: "Welding and assembly fixtures for automotive body and chassis.",     image: IMG.automotive },
      { name: "Aerospace",    desc: "High-precision fixtures for aerospace component machining.",         image: IMG.aerospace  },
      { name: "Electronics",  desc: "SMT and assembly jigs for PCB and electronics manufacturing.",     image: IMG.electronics},
      { name: "Industrial",   desc: "Heavy-duty machining fixtures for industrial production lines.",   image: IMG.industrial },
    ],
    cta: {
      heading: "Design Your Custom Jigs & Fixtures",
      sub: "Share your part drawings and we will design the most efficient tooling solution for your process.",
    },
  },

  // ─── ADDITIVE MANUFACTURING ─────────────────────────────────────────────────
  "additive-manufacturing": {
    title: "Additive Manufacturing",
    intro: "We harness advanced additive manufacturing technologies to produce high-quality, custom parts with unmatched precision. From prototype development through to full-scale production, our 3D printing capabilities deliver cost-effective and innovative solutions for every industry.",
    image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=900&q=80",
    features: [
      { title: "Rapid Prototyping",         desc: "Quickly bring your concepts to life with fast 24–48 hour turnaround times." },
      { title: "Complex Geometry",          desc: "Easily manufacture intricate and highly detailed parts without costly tooling." },
      { title: "Material Flexibility",      desc: "Plastics, resins, nylon, metals and engineering-grade composites available." },
      { title: "Cost-Effective Production", desc: "Minimise material waste and reduce manufacturing costs significantly." },
      { title: "Customisation & Versatility", desc: "One-off prototypes or batch production runs with consistent part quality." },
    ],
    services: [
      { title: "Rapid Prototyping",           desc: "Create high-quality prototypes quickly and efficiently.",                image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=400&q=75" },
      { title: "Functional Part Production",  desc: "Durable and functional end-use components manufactured additively.",     image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=75" },
      { title: "Custom Part Fabrication",     desc: "Tailored solutions for unique designs and highly complex shapes.",       image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=400&q=75" },
      { title: "Design Optimization",         desc: "Enhance design accuracy and manufacturability with our DfAM support.",   image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&q=75" },
      { title: "Post-Processing & Finishing", desc: "Improve surface quality and strength through coating and finishing.",    image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=400&q=75" },
    ],
    industries: [
      { name: "Aerospace",         desc: "Lightweight structural parts and complex duct components.",         image: IMG.aerospace  },
      { name: "Medical",           desc: "Custom implants, prosthetics and surgical instrument prototypes.",  image: IMG.medical    },
      { name: "Automotive",        desc: "Rapid prototyping for engine and chassis components.",              image: IMG.automotive },
      { name: "Electronics",       desc: "Complex enclosures and lightweight structural components.",        image: IMG.electronics},
      { name: "Consumer Products", desc: "Unique and intricate designs for household and retail goods.",    image: IMG.consumer   },
    ],
    cta: {
      heading: "Start Your 3D Printing Project",
      sub: "Upload your STL or STEP file today and our team will respond with a fast, competitive quote.",
    },
  },

  // ─── 3D PRINTING ────────────────────────────────────────────────────────────
  "3d-printing": {
    title: "3D Printing",
    intro: "We offer multiple 3D printing technologies — FDM, SLA and SLS — each suited to different applications. Whether you need a concept model or functional prototypes for fit-and-function testing, we deliver accurate, clean parts fast.",
    image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=900&q=80",
    features: [
      { title: "FDM, SLA & SLS Technologies", desc: "FDM for quick concepts, SLA for fine detail, SLS for functional nylon parts." },
      { title: "Wide Material Range",          desc: "PLA, ABS, PETG, Nylon, Resin and engineering-grade polymer options." },
      { title: "24–48 Hour Turnaround",        desc: "Fast printing and dispatch for urgent prototype requirements." },
      { title: "Complex Internal Geometries",  desc: "Internal channels, overhangs and lattice structures achievable." },
      { title: "Post-Processing Available",    desc: "Sanding, priming, painting and assembly finishing in-house." },
    ],
    services: [
      { title: "FDM Printing",     desc: "Fused deposition modelling for robust concept and functional parts.",    image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=400&q=75" },
      { title: "SLA Printing",     desc: "Stereolithography for high-resolution fine-detail display models.",     image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=75" },
      { title: "SLS Printing",     desc: "Selective laser sintering for durable, functional nylon components.",   image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=400&q=75" },
      { title: "Post-Processing",  desc: "Finishing, painting and assembly of 3D printed components.",           image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=400&q=75" },
    ],
    industries: [
      { name: "Aerospace",         desc: "Lightweight concept and structural prototype components.",               image: IMG.aerospace  },
      { name: "Medical",           desc: "Anatomical models, implant prototypes and surgical guides.",           image: IMG.medical    },
      { name: "Automotive",        desc: "Rapid prototypes for engine parts and interior design components.",    image: IMG.automotive },
      { name: "Consumer Products", desc: "Concept models and packaging prototypes for consumer goods.",        image: IMG.consumer   },
    ],
    cta: {
      heading: "Start Printing Today",
      sub: "Upload your file and receive a quote within hours. Fast, accurate and cost-effective.",
    },
  },

  // ─── THERMOFORMING ──────────────────────────────────────────────────────────
  "thermoforming": {
    title: "Thermoforming",
    intro: "Thermoforming is a versatile and cost-effective plastic manufacturing process ideal for large parts and moderate volumes. We produce high-quality thermoformed components in ABS, HIPS, PET, PETG, PC and other thermoplastic materials to your exact requirements.",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=900&q=80",
    features: [
      { title: "Cost-Effective Tooling",    desc: "Lower tooling cost compared to injection moulding for medium production volumes." },
      { title: "Large Part Capability",     desc: "Suitable for large enclosures, instrument panels and structural trays." },
      { title: "Wide Material Range",       desc: "ABS, HIPS, PET, PETG, PC, HDPE and specialty thermoplastic grades." },
      { title: "Vacuum & Pressure Forming", desc: "Both processes available for varying thickness, detail and draw requirements." },
      { title: "Secondary Operations",      desc: "CNC trimming, routing, drilling and sub-assembly all performed in-house." },
    ],
    services: [
      { title: "Vacuum Forming",            desc: "Economical forming of large thin-wall plastic components.",             image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=400&q=75" },
      { title: "Pressure Forming",          desc: "Higher detail and thicker walls achieved with applied pressure assistance.", image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=400&q=75" },
      { title: "Custom Trays & Packaging",  desc: "Formed plastic trays for component packaging and transit protection.",  image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=75" },
      { title: "Enclosures & Panels",       desc: "Large formed enclosures, covers and equipment panel fronts.",           image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=400&q=75" },
    ],
    industries: [
      { name: "Electronics",      desc: "Custom enclosures, bezels and equipment housings.",                 image: IMG.electronics},
      { name: "Automotive",       desc: "Interior panels, ducting and protective covers.",                   image: IMG.automotive },
      { name: "Medical",          desc: "Sterile packaging trays and medical equipment covers.",             image: IMG.medical    },
      { name: "Consumer Products",desc: "Retail packaging, display trays and point-of-sale items.",        image: IMG.consumer   },
      { name: "Industrial",       desc: "Machine guards, covers and protective enclosures.",               image: IMG.industrial },
    ],
    cta: {
      heading: "Get Thermoforming Solutions",
      sub: "Share your part size, material requirements and volume and we will provide a competitive quote.",
    },
  },

};

export default servicePages;