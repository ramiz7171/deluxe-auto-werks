export type Lang = "en" | "es";

export const dictionaries = {
  en: {
    nav: {
      services: "Services",
      work: "Work",
      about: "About",
      reviews: "Reviews",
      contact: "Contact",
      cta: "Call Us",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      home: "Deluxe Auto Werks home",
    },
    hero: {
      kicker: "West Chicago, IL · Since 2010",
      line1: "Precision",
      line2: "Auto Body",
      line3: "Craft.",
      sub:
        "West Chicago's trusted body shop since 2010. Collision repair, custom paint, and restoration done right the first time.",
      ctaPrimary: "Call Us",
      ctaSecondary: "See Our Work",
      scroll: "Scroll",
    },
    services: {
      label: "What We Do",
      headingA: "Built to factory spec.",
      headingB: "Finished better.",
      items: [
        {
          title: "Collision Repair",
          desc: "Insurance-approved structural and panel repair.",
        },
        {
          title: "Custom Paint",
          desc: "Color matching, full repaints, custom finishes.",
        },
        {
          title: "Dent Removal",
          desc: "Paintless dent repair for minor damage.",
        },
        {
          title: "Frame Straightening",
          desc: "Computer-measured frame correction.",
        },
        {
          title: "Restoration",
          desc: "Classic and custom vehicle restoration.",
        },
        {
          title: "Detailing & Polish",
          desc: "Wheel refinishing, polish, ceramic prep.",
        },
      ],
    },
    work: {
      label: "Recent Work",
      headingA: "Every job, signed off",
      headingB: "personally.",
      project: "Project",
      items: [
        "1993 Chevy Indy Pace Truck — Full Repaint",
        "1969 Camaro — Frame-Off Restoration",
        "European Sedan — Ceramic Coat & Polish",
        "Vintage Coupe — Quarter Panel Repair",
        "Modern SUV — Front-End Collision",
        "Classic Roadster — Custom Pearl Paint",
      ],
      alts: [
        "Glossy red sports car after custom repaint",
        "Classic muscle car restoration",
        "Polished black sedan",
        "Vintage car in workshop",
        "Modern SUV after collision repair",
        "Classic restored car",
      ],
    },
    about: {
      label: "Our Story",
      headingA: "Old-school craft.",
      headingB: "Modern equipment.",
      p1:
        "Deluxe Auto Werks is a family-run body shop in West Chicago, Illinois. Scott and the team built this place around a simple idea: do the job the right way the first time, every time — whether it's a fender bender, a full repaint, or a ground-up restoration.",
      p2:
        "We treat every vehicle that rolls through the bay like it's ours. Modern computerized frame measurement, factory-spec refinishing, and the kind of attention to detail that only comes from people who actually love cars. Custom and restoration work is where we shine — but we bring the same pride to a daily driver.",
      p3:
        "Local, honest, and accountable. When you pick your car up, it leaves better than it came in.",
      stats: {
        years: "Years",
        vehicles: "Vehicles",
        family: "Family-Run",
      },
      imgAlt: "Inside the Deluxe Auto Werks workshop",
    },
    reviews: {
      label: "What Clients Say",
      headingA: "Don't take our word",
      headingB: "for it.",
      role: "Local Guide",
      starsAria: "5 out of 5 stars",
    },
    contact: {
      label: "Get Started",
      headingA: "Ready when",
      headingB: "you are.",
      visit: "Visit",
      call: "Call",
      hours: "Hours",
      hoursWeekday: "Mon–Fri · 8:30 AM – 5:30 PM",
      hoursWeekend: "Sat & Sun · Closed",
      mapTitle: "Deluxe Auto Werks location map",
      callCta: "Call Us",
    },
    footer: {
      tagline:
        "Family-run auto body shop in West Chicago. Collision repair, custom paint, and restoration done right.",
      explore: "Explore",
      visit: "Visit",
      copyright: "© 2026 Deluxe Auto Werks. All rights reserved.",
    },
    lang: {
      switchToEs: "Cambiar a español",
      switchToEn: "Switch to English",
    },
  },
  es: {
    nav: {
      services: "Servicios",
      work: "Trabajos",
      about: "Nosotros",
      reviews: "Reseñas",
      contact: "Contacto",
      cta: "Llámanos",
      openMenu: "Abrir menú",
      closeMenu: "Cerrar menú",
      home: "Inicio Deluxe Auto Werks",
    },
    hero: {
      kicker: "West Chicago, IL · Desde 2010",
      line1: "Precisión",
      line2: "Carrocería",
      line3: "Automotriz.",
      sub:
        "El taller de carrocería de confianza de West Chicago desde 2010. Reparación de colisiones, pintura personalizada y restauración bien hechas a la primera.",
      ctaPrimary: "Llámanos",
      ctaSecondary: "Ver Nuestro Trabajo",
      scroll: "Desliza",
    },
    services: {
      label: "Qué Hacemos",
      headingA: "Hecho como en fábrica.",
      headingB: "Acabado superior.",
      items: [
        {
          title: "Reparación de Colisiones",
          desc:
            "Reparación estructural y de paneles aprobada por aseguradoras.",
        },
        {
          title: "Pintura Personalizada",
          desc:
            "Igualación de color, repintados completos y acabados a medida.",
        },
        {
          title: "Remoción de Abolladuras",
          desc: "Reparación sin pintura para daños menores.",
        },
        {
          title: "Enderezado de Chasis",
          desc: "Corrección con medición computarizada.",
        },
        {
          title: "Restauración",
          desc: "Restauración de vehículos clásicos y personalizados.",
        },
        {
          title: "Detallado y Pulido",
          desc: "Reacondicionado de rines, pulido y prep cerámica.",
        },
      ],
    },
    work: {
      label: "Trabajos Recientes",
      headingA: "Cada trabajo, aprobado",
      headingB: "personalmente.",
      project: "Proyecto",
      items: [
        "Chevy Indy Pace Truck 1993 — Repintado Completo",
        "Camaro 1969 — Restauración Total",
        "Sedán Europeo — Cerámico y Pulido",
        "Coupé Clásico — Reparación de Panel",
        "SUV Moderna — Colisión Frontal",
        "Roadster Clásico — Pintura Perla",
      ],
      alts: [
        "Auto deportivo rojo brillante tras repintado personalizado",
        "Restauración de muscle car clásico",
        "Sedán negro pulido",
        "Auto clásico en el taller",
        "SUV moderna tras reparación de colisión",
        "Auto clásico restaurado",
      ],
    },
    about: {
      label: "Nuestra Historia",
      headingA: "Oficio tradicional.",
      headingB: "Tecnología moderna.",
      p1:
        "Deluxe Auto Werks es un taller de carrocería familiar en West Chicago, Illinois. Scott y su equipo construyeron este lugar alrededor de una idea simple: hacer el trabajo bien la primera vez, cada vez — ya sea un golpe leve, un repintado completo o una restauración total.",
      p2:
        "Tratamos cada vehículo que entra al taller como si fuera nuestro. Medición computarizada moderna del chasis, acabados según especificación de fábrica y la atención al detalle que solo viene de personas que aman los autos. El trabajo personalizado y de restauración es donde brillamos — pero traemos el mismo orgullo a un auto del día a día.",
      p3:
        "Locales, honestos y responsables. Cuando recoges tu auto, sale mejor de como entró.",
      stats: {
        years: "Años",
        vehicles: "Vehículos",
        family: "Familiar",
      },
      imgAlt: "Dentro del taller Deluxe Auto Werks",
    },
    reviews: {
      label: "Lo Que Dicen",
      headingA: "No solo créanos",
      headingB: "a nosotros.",
      role: "Guía Local",
      starsAria: "5 de 5 estrellas",
    },
    contact: {
      label: "Comencemos",
      headingA: "Listos cuando",
      headingB: "tú lo estés.",
      visit: "Visítanos",
      call: "Llámanos",
      hours: "Horarios",
      hoursWeekday: "Lun–Vie · 8:30 AM – 5:30 PM",
      hoursWeekend: "Sáb y Dom · Cerrado",
      mapTitle: "Mapa de ubicación Deluxe Auto Werks",
      callCta: "Llámanos",
    },
    footer: {
      tagline:
        "Taller de carrocería familiar en West Chicago. Reparación de colisiones, pintura personalizada y restauración bien hechas.",
      explore: "Explora",
      visit: "Visítanos",
      copyright:
        "© 2026 Deluxe Auto Werks. Todos los derechos reservados.",
    },
    lang: {
      switchToEs: "Cambiar a español",
      switchToEn: "Switch to English",
    },
  },
} as const;

export type Dict = (typeof dictionaries)["en"];
