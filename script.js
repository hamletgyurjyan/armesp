function handleSectionJump() {
  const params = new URLSearchParams(window.location.search);
  const targetId = params.get('section');

  if (!targetId) return;

  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    setTimeout(() => {
      const headerOffset = 100;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }, 400);
  }
}

const articles = [];
const contents = {};


const translations = {
  en: {
    nav_about: "About",
    nav_top_travel: "Top Travel Spots",
    nav_how_it_works: "How It Works?",
    nav_why_us: "Why Choose Us",
    nav_faq: "FAQ",
    hero_title: "Private Airport <br>Transfers in Alicante",
    hero_subtitle: "Reliable, 24/7, Multilingual",
    hero_desc: "Professional service from Alicante Airport to top destinations <br>like Benidorm, Calpe, Altea, and more!",
    btn_quote: "Get a Quote ",
    stat_customers: "Happy Customers",
    stat_rides: "Successful rides",
    stat_destinations: "Destinations Covered",
    stat_pets: "Pet-Friendly",
    about_title: "About <span>ARMESP</span>",
    about_headline: "Your Trusted Partner for Reliable Transfers",
    about_desc: `ARMESP Transfers is a professional private transportation service in Alicante, dedicated to making travel easier for everyone visiting or living in the region. The name ARMESP reflects our roots — a collaboration between Armenia and España, uniting two cultures in service excellence.<br><br>
                     Founded in 2023, we're a fully licensed airport transfer company in Spain offering safe, on-time, and comfortable transfers from Alicante Airport to Benidorm, Calpe, Altea, Albir, Murcia by private car, and to many other destinations.<br><br>
                     We make travel easy with clean, modern cars, multilingual drivers, affordable prices, and reliable service—any time of day.`,
    section_destinations_title: "Top Transfer Destinations",
    section_destinations_headline: "The Journeys Everyone's Booking from Alicante Airport",
    section_destinations_desc: "Discover the most popular private transfer destinations from Alicante Airport, with premium hotels and affordable price airport transfers available 24/7. Book your perfect stay and travel with ease today!",
    how_title: "How It Works?",
    how_headline: "From Arrival to Destination",
    how_desc: "Plan your private transfer with ARMESP in just four easy steps. From booking online to meeting your driver at Alicante Airport, you'll enjoy reliable service, transparent pricing, on-time pickup, and safe transport to your destination.",
    how_stat_customers: "Happy Customers",
    step1_title: "Arrive at Alicante Airport",
    step1_desc: "Land at Alicante Airport — your driver tracks your flight and waits at the arrivals hall.",
    step2_title: "Meet Your Driver at Arrivals",
    step2_desc: "Your private driver will meet you by a name sign at the arrivals hall, ready for pickup.",
    step3_title: "Enjoy your Private Transfer",
    step3_desc: "Ride in a comfortable car, with on-time pickup directly to your hotel or destination.",
    step4_title: "Pay securely after your trip",
    step4_desc: "Complete your transfer using secure payment methods only after you arrive.",
    feature_24h_title: "24/7 Availability",
    feature_24h_desc: "We're ready 24/7 — reliable private and airport transfers from Alicante, anytime",
    feature_door_title: "Door to Door Service",
    feature_door_desc: "From your pickup point to your destination — safe and direct transfers",
    feature_price_title: "Transparent Pricing",
    feature_price_desc: "Transparent pricing — no hidden fees on every airport and local transfers",
    feature_multi_title: "Multilingual Support",
    feature_multi_desc: "We speak your language — clear, friendly, multilingual airport and private transfers",
    feature_drivers_title: "Professional Drivers",
    feature_drivers_desc: "Experienced drivers — licensed and insured professionals for safe, punctual transfers",
    feature_cars_title: "Comfortable Vehicles",
    feature_cars_desc: "Modern, clean, air-conditioned vehicles — safe, trusted and relaxing transfers",
    why_title: "Why Choose Us",
    why_headline: "Why ARMESP is the right choice for you",
    why_desc: "With licensed & insured vehicles, English-speaking drivers, and clear affordable pricing, ARMESP delivers reliable airport transfers from Alicante with no delays, no hidden fees, and full booking flexibility. Here's why travellers choose us again and again.",
    why_card1_title: "Modern & Comfortable Cars",
    why_card1_desc: "Travel relaxed with clean, air-conditioned vehicles with maximum comfort and safety.",
    why_card2_title: "Multilingual Drivers",
    why_card2_desc: "Our English-speaking and multilingual drivers ensure clear communication on every transfer.",
    why_card3_title: "Personalized Service",
    why_card3_desc: "Flexible private transfers designed for solo travelers, families, and groups of all sizes.",
    why_card4_title: "Transparent Pricing",
    why_card4_desc: "Transparent, affordable pricing — no surprises or extra charges on any booking.",
    why_card5_title: "Reviews Available on Google",
    why_card5_desc: "Don't just take our word for it — read real customer reviews from travelers who trust ARMESP for dependable, private transfers in Alicante and beyond.",
    why_card5_cta: "Leave a Review",
    faq_title: "Frequently Asked Questions",
    faq_headline: "Need Help? Start Here",
    faq_desc: "Find quick, clear answers about booking, pricing, pickup process, and more. We've covered everything travelers ask before choosing a private transfer from Alicante Airport.",
    faq_q1: "How do I book a transfer with ARMESP?",
    faq_a1: "Booking with ARMESP is fast, simple, and always available. You can reserve your transfer anytime by filling out the booking form on our website, contacting us via WhatsApp, social media chat, direct call, or email. Choose the method that works best for you—our multilingual team is available 24/7 to confirm your ride and assist with any questions.",
    faq_q2: "How many passengers can travel with ARMESP Transfers?",
    faq_a2: "We accommodate all group sizes — from solo travelers to large groups. Whether you're traveling alone, with family, or with a large group, ARMESP offers the right vehicle for your needs. Just let us know the number of passengers during booking, and we'll make sure you're matched with the most comfortable option.",
    faq_q3: "Can I bring extra luggage or special items?",
    faq_a3: "Yes, but please inform us in advance. ARMESP can accommodate extra bags, strollers, sports gear, or other special items — as long as we know ahead of time. This helps us assign the right vehicle for a safe and comfortable ride.",
    faq_q4: "What destinations does ARMESP Transfers cover?",
    faq_a4: "We provide private transfers across Spain — not just Alicante. While based at Alicante Airport, ARMESP offers reliable, door-to-door service to destinations throughout Spain, including popular cities, coastal resorts, and inland areas. Wherever you need to go, we'll get you there comfortably and on time.",
    faq_q5: "Do you offer child seats or booster seats?",
    faq_a5: "Yes — and they're free of charge. ARMESP provides child seats and booster seats upon request to ensure a safe and comfortable journey for families. Just let us know during booking, and we'll have them ready at no extra cost.",
    faq_q6: "Can I make last-minute changes to my booking?",
    faq_a6: "Yes — but please let us know at least 24 hours in advance. ARMESP understands that travel plans may shift. If you need to change your pickup time, location, or passenger details, please contact us at least 24 hours before your scheduled transfer. We'll do our best to accommodate your request. Please note: cancellations are accepted, but prepayments are non-refundable.",
    faq_q7: "What if my flight is delayed? Will the driver wait?",
    faq_a7: "Yes — your driver tracks your flight in real-time. There's no need to worry if your flight is delayed. ARMESP monitors all arrival times and adjusts the pickup accordingly. Your driver will be there, even if your flight is running late.",
    faq_q8: "How do I meet my driver at Alicante Airport?",
    faq_a8: "Your driver will meet you inside the arrivals hall. As soon as you exit the baggage area, look for your driver holding a sign with your name.",
    booking_title: "Book Your Private Transfer Now!",
    booking_headline: "Plan Your One-Way or Round-Trip Transfer in Seconds",
    booking_desc: "Choose your trip type and fill out the form to book a private airport transfer from Alicante to Benidorm, Torrevieja, Calpe, or any nearby destination. Whether you need a one-way ride or a return transfer, our quick booking system ensures instant confirmation, transparent pricing, and 24/7 reliable service.",
    trip_oneway: "One Way",
    trip_roundtrip: "Round Trip",
    contact_title: "Contact Us",
    contact_desc: "Ready to book or have questions? ARMESP Transfers' team is available 24/7 to provide fast, friendly support. Contact us anytime — your reliable and on-time transfer starts here.",
    contact_whatsapp: "Contact us via WhatsApp",
    contact_email: "Contact us via Email",
    footer_desc: "Private Airport Transfers in Alicante. Motion Meets Comfort, Anytime, Over Local Roads!",
    transfer_info: "Transfer Information",
    first_transfer_info: "First Transfer Information",
    pickup_location: "Pick-up Location *",
    dropoff_location: "Drop-off Location *",
    pickup_date: "Pick-up Date *",
    pickup_time: "Pick-up Time *",
    num_passengers: "Number of Passengers",
    adult: "Adults *",
    child: "Children",
    num_luggages: "Number of Luggages",
    extra_items: "Extra Items",
    personal_info: "Personal Information",
    full_name: "Full Name *",
    phone_number: "Phone Number *",
    email_address: "Email Address *",
    extra_requests: "Additional Requests or Notes",
    submit: "Submit",
    modal_title: "Transfer Request Received!",
    modal_message: "Your request has been received. Our team will review the details and get back to you shortly.",
    modal_close: "Close",
    modal_another_request: "Request another Ride",
    placeholder_pickup: "e.g. Alicante Airport",
    placeholder_dropoff: "e.g. Benidorm",
    placeholder_time: "14:30",
    placeholder_passengers: "e.g. 4",
    placeholder_luggages: "e.g. 6",
    placeholder_extra_items: "e.g. Baby Stroller, Child Seat, Wheel Chair, Pet Carrier, Golf clubs, etc.",
    placeholder_name: "e.g. John Smith",
    placeholder_phone: "e.g. +44 7946323809",
    placeholder_email: "e.g. john@smith.com",
    placeholder_notes: "I need a child seat for my 1-year-old child ..",
    day_text: "Day",
    month_text: "Month",
    year_text: "Year",
    return_transfer_info: "Return Transfer Information",
    field_required: "This field is required",
    invalid_email: "Please enter a valid email address",
    invalid_date: "Please select a valid date",
    past_date_error: "Cannot select a past date",
    flight_number: "Flight Number",
    blog_discover: "Discover the Latest on Our Blog",
    blog_story: "Our Latest Stories, Just for You!",
    blog_updated: "Stay updated with fresh insights, news, and articles from our blog. Explore the topics that matter most to you.",
    blog_articles: "Our Recent Articles",
    load_more: "Load More Aritcles",
    read_more: "Read More",
    form_step1_label: "Transfer Information",
    form_step2_label: "Personal Information",
    form_card_title: "Request Your Private Transfer Now!",
    form_card_sub: "Submit your details for a one-way or return transfer to send a request and proceed with your enquiry.",
    form_from: "From *",
    form_to: "To *",
    form_arrival_date: "Arrival Date *",
    form_arrival_time: "Arrival Time *",
    form_select_time: "Select Time",
    form_flight_number: "Flight Number",
    form_add_return: "Add Return",
    form_return_date: "Return Date *",
    form_return_time: "Return Time *",
    form_delete_return: "Delete Return",
    form_next: "Next",
    form_back: "Back to Transfer Information",
    form_passengers: "Passengers *",
    form_luggages: "Luggages",
    form_adults_label: "Adults:",
    form_children_label: "Children:",
    form_lug10_label: "10 kg:",
    form_lug20_label: "20-30 kg:",
    pax_adult_singular: "Adult",
    pax_adult_plural: "Adults",
    pax_child_singular: "Child",
    pax_child_plural: "Children",
    pax_adult_short: "Ad.",
    pax_child_short: "Ch.",
    lug_summary: "Luggage",
  },

  es: {
    nav_about: "Sobre Nosotros",
    nav_top_travel: "Destinos Más Populares",
    nav_how_it_works: "¿Cómo Funciona?",
    nav_why_us: "¿Por Qué Elegirnos?",
    nav_faq: "Preguntas Frecuentes",
    hero_title: "Traslados Privados al <br>Aeropuerto en Alicante",
    hero_subtitle: "Fiables, 24/7, Multilingües",
    hero_desc: "Servicio profesional desde el Aeropuerto de Alicante a destinos <br> principales como Benidorm, Calpe, Altea ¡y muchos más!",
    btn_quote: "Solicitar Presupuesto",
    stat_customers: "Clientes Satisfechos",
    stat_rides: "Viajes Completados",
    stat_destinations: "Destinos Cubiertos",
    stat_pets: "Mascotas Bienvenidas",
    about_title: "Sobre <span>ARMESP</span>",
    about_headline: "Tu Socio de Confianza para Traslados Fiables",
    about_desc: `ARMESP Transfers es un servicio profesional de transporte privado en Alicante, dedicado a facilitar los traslados a todos los que visitan o viven en la región. El nombre ARMESP refleja nuestras raíces: una colaboración entre Armenia y España, que une dos culturas en busca de la excelencia en el servicio.<br><br>
                     Fundada en 2023, somos una empresa de traslados al aeropuerto totalmente autorizada en España, que ofrece traslados seguros, puntuales y cómodos desde el Aeropuerto de Alicante a Benidorm, Calpe, Altea, Albir, Murcia en coche privado, y a muchos otros destinos.<br><br>
                     Facilitamos tus viajes con coches modernos y limpios, conductores multilingües, precios asequibles y un servicio fiable — a cualquier hora del día.`,
    section_destinations_title: "Principales Destinos de Traslado",
    section_destinations_headline: "Los Traslados Más Solicitados desde el Aeropuerto de Alicante",
    section_destinations_desc: "Descubre los destinos de traslado privado más populares desde el Aeropuerto de Alicante, con hoteles de primera calidad y traslados asequibles disponibles las 24 horas. ¡Reserva tu estancia perfecta y viaja sin complicaciones hoy mismo!",
    how_title: "¿Cómo Funciona?",
    how_headline: "Desde tu Llegada hasta tu Destino",
    how_desc: "Organiza tu traslado privado con ARMESP en solo cuatro pasos sencillos. Desde la reserva online hasta el encuentro con tu conductor en el Aeropuerto de Alicante, disfrutarás de un servicio fiable, precios transparentes, recogida puntual y transporte seguro hasta tu destino.",
    how_stat_customers: "Clientes Satisfechos",
    step1_title: "Llega al Aeropuerto de Alicante",
    step1_desc: "Aterriza en el Aeropuerto de Alicante — tu conductor seguirá tu vuelo y te esperará en la sala de llegadas.",
    step2_title: "Encuentra a tu Conductor en Llegadas",
    step2_desc: "Tu conductor privado te recibirá con un cartel con tu nombre en la sala de llegadas, listo para llevarte.",
    step3_title: "Disfruta de tu Traslado Privado",
    step3_desc: "Viaja en un coche cómodo, con recogida puntual directamente a tu hotel o destino.",
    step4_title: "Paga de Forma Segura al Finalizar el Viaje",
    step4_desc: "Finaliza tu traslado con métodos de pago seguros, solo después de llegar a tu destino.",
    feature_24h_title: "Disponibilidad 24/7",
    feature_24h_desc: "Estamos disponibles 24/7 — traslados privados y al aeropuerto desde Alicante, cuando los necesites",
    feature_door_title: "Servicio Puerta a Puerta",
    feature_door_desc: "Desde tu punto de recogida hasta tu destino — traslados seguros y directos",
    feature_price_title: "Precios Transparentes",
    feature_price_desc: "Precios claros — sin cargos ocultos en todos los traslados al aeropuerto y locales",
    feature_multi_title: "Soporte Multilingüe",
    feature_multi_desc: "Hablamos tu idioma — traslados privados y al aeropuerto claros, amigables y multilingües",
    feature_drivers_title: "Conductores Profesionales",
    feature_drivers_desc: "Conductores con experiencia — profesionales autorizados y asegurados para traslados seguros y puntuales",
    feature_cars_title: "Vehículos Cómodos",
    feature_cars_desc: "Vehículos modernos, limpios y con aire acondicionado — traslados seguros, confiables y relajantes",
    why_title: "Por Qué Elegirnos",
    why_headline: "Por Qué ARMESP es la Mejor Opción para Ti",
    why_desc: "Con vehículos autorizados y asegurados, conductores que hablan inglés y precios claros y asequibles, ARMESP ofrece traslados al aeropuerto desde Alicante sin retrasos, sin tarifas ocultas y con total flexibilidad de reserva. Por eso, los viajeros nos eligen una y otra vez.",
    why_card1_title: "Coches Modernos y Cómodos",
    why_card1_desc: "Viaja relajado con vehículos limpios, con aire acondicionado y con el máximo confort y seguridad.",
    why_card2_title: "Conductores Multilingües",
    why_card2_desc: "Nuestros conductores multilingües y con dominio del inglés aseguran una comunicación clara en cada traslado.",
    why_card3_title: "Servicio Personalizado",
    why_card3_desc: "Traslados privados flexibles, pensados para viajeros individuales, familias y grupos de cualquier tamaño.",
    why_card4_title: "Precios Transparentes",
    why_card4_desc: "Precios claros y asequibles — sin sorpresas ni cargos adicionales en ninguna reserva.",
    why_card5_title: "Opiniones Disponibles en Google",
    why_card5_desc: "No te fíes solo de nuestras palabras — lee opiniones reales de viajeros que confían en ARMESP para traslados privados seguros en Alicante y otras zonas.",
    why_card5_cta: "Deja una Reseña",
    faq_title: "Preguntas Frecuentes",
    faq_headline: "¿Necesitas Ayuda? Empieza Aquí",
    faq_desc: "Encuentra respuestas rápidas y claras sobre reservas, precios, recogidas y más. Hemos cubierto todo lo que los viajeros suelen preguntar antes de elegir un traslado privado desde el Aeropuerto de Alicante.",
    faq_q1: "¿Cómo puedo reservar un traslado con ARMESP?",
    faq_a1: "Reservar con ARMESP es rápido, sencillo y siempre está disponible. Puedes solicitar tu traslado en cualquier momento completando el formulario de reserva en nuestra página web, o bien contactarnos por WhatsApp, chat en redes sociales, llamada directa o correo electrónico. Elige el método que te resulte más cómodo—nuestro equipo multilingüe está disponible las 24 horas para confirmar tu servicio y resolver cualquier consulta.",
    faq_q2: "¿Cuántos pasajeros pueden viajar con ARMESP Transfers?",
    faq_a2: "Nos adaptamos a cualquier tamaño de grupo — desde viajeros solos hasta grupos grandes. Ya sea que viajes solo, en familia o con un grupo numeroso, ARMESP tiene el vehículo ideal para ti. Solo indícanos el número de pasajeros al hacer la reserva y nos encargaremos de asignarte la opción más cómoda.",
    faq_q3: "¿Puedo llevar equipaje adicional o artículos especiales?",
    faq_a3: "Sí, pero te pedimos que nos informes con antelación. ARMESP puede transportar equipaje adicional, carritos de bebé, equipos deportivos u otros artículos especiales — siempre que lo sepamos con antelación. Esto nos permite asignar el vehículo adecuado para un viaje cómodo y seguro.",
    faq_q4: "¿Qué destinos cubre ARMESP Transfers?",
    faq_a4: "Ofrecemos traslados privados en toda España — no solo en Alicante. Aunque nuestra base está en el Aeropuerto de Alicante, ARMESP ofrece un servicio puerta a puerta fiable hacia destinos en toda España, incluidas ciudades populares, zonas costeras y regiones del interior. Dondequiera que necesites ir, te llevamos con comodidad y puntualidad.",
    faq_q5: "¿Ofrecen sillas infantiles o elevadores?",
    faq_a5: "Sí — y son totalmente gratis. ARMESP ofrece sillas infantiles y elevadores bajo solicitud para garantizar un viaje seguro y cómodo para las familias. Solo indícalo al hacer la reserva y las tendremos listas sin coste adicional.",
    faq_q6: "Can I make last-minute changes to my booking?",
    faq_a6: "Sí — but please let us know at least 24 hours in advance. ARMESP understands that travel plans may shift. If you need to change your pickup time, location, or passenger details, please contact us at least 24 hours before your scheduled transfer. We'll do our best to accommodate your request. Please note: cancellations are accepted, but prepayments are non-refundable.",
    faq_q7: "What if my flight is delayed? Will the driver wait?",
    faq_a7: "Sí — tu conductor sigue tu vuelo en tiempo real. No te preocupes si tu vuelo se retrasa. ARMESP monitoriza todas las llegadas y ajusta la recogida en consecuencia. Tu conductor estará allí, incluso si el vuelo llega con retraso.",
    faq_q8: "¿Cómo encuentro a mi conductor en el Aeropuerto de Alicante?",
    faq_a8: "Tu conductor te esperará dentro de la sala de llegadas. Tan pronto como salgas del área de equipaje, busca a tu conductor con un cartel con tu nombre.",
    booking_title: "¡Reserva Tu Traslado Privado Ahora!",
    booking_headline: "Planifica Tu Traslado de Ida o Ida y Vuelta en Segundos",
    booking_desc: "Elige el tipo de traslado y completa el formulario para reservar un traslado privado desde el Aeropuerto de Alicante hacia Benidorm, Torrevieja, Calpe u otro destino cercano. Ya sea un viaje de ida o un traslado de ida y vuelta, nuestro sistema de reservas rápidas garantiza confirmación inmediata, precios transparentes y servicio fiable 24/7.",
    trip_oneway: "Solo Ida",
    trip_roundtrip: "Ida y Vuelta",
    contact_title: "Contáctanos",
    contact_desc: "¿Listo para reservar o tienes preguntas? El equipo de ARMESP Transfers está disponible 24/7 para ofrecerte un soporte rápido y amable. Contáctanos en cualquier momento — tu traslado puntual y confiable comienza aquí.",
    contact_whatsapp: "Contáctanos por WhatsApp",
    contact_email: "Contáctanos por Correo Electrónico",
    footer_desc: "Traslados Privados al Aeropuerto en Alicante. Comodidad en Movimiento, a Cualquier Hora, por las Rutas Locales.",
    transfer_info: "Información del Traslado",
    first_transfer_info: "Información del Primer Traslado",
    pickup_location: "Lugar de Recogida *",
    dropoff_location: "Lugar de Destino *",
    pickup_date: "Fecha de Recogida *",
    pickup_time: "Hora de Recogida *",
    num_passengers: "Número de Pasajeros",
    num_luggages: "Número de Equipaje",
    child: "Niñas",
    adult: "Adultas *",
    extra_items: "Artículos Adicionales",
    personal_info: "Información Personal",
    full_name: "Nombre Completo *",
    phone_number: "Número de Teléfono *",
    email_address: "Dirección de Correo Electrónico *",
    extra_requests: "Solicitudes especiales o comentarios",
    submit: "Enviar",
    modal_title: "¡Solicitud de Traslado Recibida!",
    modal_message: "Su solicitud ha sido recibida. Nuestro equipo revisará los detalles y se pondrá en contacto con usted en breve.",
    modal_close: "Cerrar",
    modal_another_request: "Solicitar otro Viaje",
    placeholder_pickup: "ej. Aeropuerto de Alicante",
    placeholder_dropoff: "ej. Benidorm",
    placeholder_time: "14:30",
    placeholder_passengers: "ej. 4",
    placeholder_luggages: "ej. 6",
    placeholder_extra_items: "ej. Cochecito de bebé, asiento para niños, silla de ruedas, transportador de mascotas, palos de golf, etc.",
    placeholder_name: "ej. Juan Pérez",
    placeholder_phone: "ej. +34 600123456",
    placeholder_email: "ej. juan@perez.es",
    placeholder_notes: "Necesito un asiento para mi niño de 1 año...",
    day_text: "Día",
    month_text: "Mes",
    year_text: "Año",
    return_transfer_info: "Información de transferencia de devolución",
    field_required: "Este campo es obligatorio",
    invalid_email: "Por favor, introduce una dirección de correo electrónico válida",
    invalid_date: "Por favor seleccione una fecha válida",
    past_date_error: "No se puede seleccionar una fecha pasada",
    flight_number: "Número de vuelo",
    blog_discover: "Descubre lo más reciente en nuestro blog",
    blog_story: "Nuestras últimas historias, solo para ti",
    blog_updated: "Mantente al día con nuevas ideas, noticias y artículos de nuestro blog.Explora los temas que más te importan.",
    blog_articles: "Nuestros artículos recientes",
    load_more: "Cargar Más Artículos",
    read_more: "Leer Más",
    form_step1_label: "Datos del traslado",
    form_step2_label: "Datos personales",
    form_card_title: "¡Solicita tu traslado privado ahora!",
    form_card_sub: "Envía los datos de tu traslado, ya sea de ida o de ida y vuelta, para enviar una solicitud y continuar con tu consulta.",
    form_from: "Origen *",
    form_to: "Destino *",
    form_arrival_date: "Fecha de llegada *",
    form_arrival_time: "Hora de llegada *",
    form_select_time: "Elige una hora",
    form_flight_number: "Número de vuelo",
    form_add_return: "Añadir vuelta",
    form_return_date: "Fecha de regreso *",
    form_return_time: "Hora de regreso *",
    form_delete_return: "Eliminar vuelta",
    form_next: "Siguiente",
    form_back: "Volver a la información del traslado",
    form_passengers: "Pasajeros *",
    form_luggages: "Equipaje",
    form_adults_label: "Adultos:",
    form_children_label: "Niños:",
    form_lug10_label: "10 kg:",
    form_lug20_label: "20-30 kg:",
    pax_adult_singular: "Adulto",
    pax_adult_plural: "Adultos",
    pax_child_singular: "Niño",
    pax_child_plural: "Niños",
    pax_adult_short: "Ad.",
    pax_child_short: "Ni.",
    lug_summary: "Maleta",
  },
};

/* ─── Copy Icon ─────────────────────────────────────────────────────────── */
document.addEventListener("click", function (e) {
  const btn = e.target.closest("#copyIcon");
  if (!btn) return;
  e.preventDefault();

  const originalSVG = btn.innerHTML;
  const successSVG = `
    <svg class="checked-icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
      <g clip-path="url(#clip0_3799_5221)">
        <path d="M6.66797 15.9997L13.3346 22.6663L26.668 9.33301" stroke="#2DBE60" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
      <defs>
        <clipPath id="clip0_3799_5221"><rect width="32" height="32" fill="white"/></clipPath>
      </defs>
    </svg>`;

  navigator.clipboard.writeText(window.location.href).then(() => {
    btn.innerHTML = successSVG;
    setTimeout(() => { btn.innerHTML = originalSVG; }, 1000);
  });
});

/* ─── Scroll Spy ─────────────────────────────────────────────────────────── */
function setupScrollSpy() {
  const navLinks = document.querySelectorAll('.desktop-nav-links a[data-target]');
  if (!navLinks.length) return;

  const sections = document.querySelectorAll('section[id]');
  sections.forEach(section => section.classList.remove('active'));

  function updateActiveSection() {
    let currentSectionId = '';
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
      if (section.offsetTop <= scrollPosition) {
        currentSectionId = section.getAttribute('id');
      }
    });

    const documentHeight = document.documentElement.scrollHeight;
    const viewportHeight = window.innerHeight;
    const scrollBottomThreshold = documentHeight - viewportHeight - 1200;

    if (window.scrollY >= scrollBottomThreshold) {
      const lastSection = sections[sections.length - 1];
      if (lastSection && currentSectionId === lastSection.id) {
        currentSectionId = '';
      }
    }

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('data-target') === currentSectionId) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', updateActiveSection);
  updateActiveSection();
}

/* ─── Form Translation ───────────────────────────────────────────────────── */
function translateFormElements(lang) {
  const t = translations[lang];
  if (!t) return;

  const setText = (selector, key) => {
    const el = document.querySelector(selector);
    if (el && t[key]) el.textContent = t[key];
  };

  const setLabel = (inputId, key) => {
    const input = document.getElementById(inputId);
    if (!input) return;
    const label = input.closest('.field')?.querySelector('label');
    if (label && t[key]) label.textContent = t[key];
  };

  const setButtonText = (btnId, key) => {
    const btn = document.getElementById(btnId);
    if (!btn || !t[key]) return;
    for (let i = btn.childNodes.length - 1; i >= 0; i--) {
      if (btn.childNodes[i].nodeType === Node.TEXT_NODE && btn.childNodes[i].textContent.trim()) {
        btn.childNodes[i].textContent = ' ' + t[key];
        break;
      }
    }
  };

  setText('#step-1-indicator .step-label', 'form_step1_label');
  setText('#step-2-indicator .step-label', 'form_step2_label');
  setText('.form-card-title', 'form_card_title');
  setText('.form-card-sub', 'form_card_sub');

  setLabel('pickup-location', 'form_from');
  setLabel('dropoff-location', 'form_to');
  setLabel('arrival-date', 'form_arrival_date');
  setLabel('pickup-time', 'form_arrival_time');
  setLabel('flight-number', 'form_flight_number');
  setLabel('return-date', 'form_return_date');
  setLabel('return-time', 'form_return_time');

  const arrDisplay = document.getElementById('tp-arrival-display');
  if (arrDisplay && !arrDisplay.classList.contains('has-value')) {
    arrDisplay.textContent = t['form_select_time'] || 'Select Time';
  }
  const retDisplay = document.getElementById('tp-return-display');
  if (retDisplay && !retDisplay.classList.contains('has-value')) {
    retDisplay.textContent = t['form_select_time'] || 'Select Time';
  }

  setButtonText('add-return-toggle', 'form_add_return');
  setButtonText('delete-return-btn', 'form_delete_return');
  setButtonText('go-step-2', 'form_next');
  setButtonText('go-step-1', 'form_back');

  const paxLabel = document.querySelector('#pax-trigger')?.closest('.field')?.querySelector('label');
  if (paxLabel && t['form_passengers']) paxLabel.textContent = t['form_passengers'];

  const lugLabel = document.querySelector('#lug-trigger')?.closest('.field')?.querySelector('label');
  if (lugLabel && t['form_luggages']) lugLabel.textContent = t['form_luggages'];

  setLabel('full-name', 'full_name');
  setLabel('phone-number', 'phone_number');
  setLabel('email-address', 'email_address');
  setLabel('extra-requests', 'extra_requests');

  setText('.counter-row:nth-child(1) .counter-label', 'form_adults_label');
  setText('.counter-row:nth-child(2) .counter-label', 'form_children_label');

  const lugRows = document.querySelectorAll('#lug-panel .counter-row');
  if (lugRows[0]) lugRows[0].querySelector('.counter-label').textContent = t['form_lug10_label'] || '10 kg:';
  if (lugRows[1]) lugRows[1].querySelector('.counter-label').textContent = t['form_lug20_label'] || '20-30 kg:';

  if (document.getElementById('pax-trigger')) {
    updateSummaries();
  }
}

/* ─── Language ───────────────────────────────────────────────────────────── */
window.onload = function () {
  if (document.querySelectorAll('.desktop-nav-links a[data-target]').length) {
    setupScrollSpy();
  }
};

let currentLang = localStorage.getItem('language') || 'en';

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  localStorage.setItem('language', lang);

  const btnEn = document.getElementById('btn-en');
  const btnEs = document.getElementById('btn-es');
  if (btnEn && btnEs) {
    btnEn.style.color = (lang === 'en') ? '#B87327' : '#9ca3af';
    btnEs.style.color = (lang === 'es') ? '#B87327' : '#9ca3af';
  }

  const selected = document.getElementById("selected-lang");
  const langItem = document.querySelector(`.dropdown li[data-lang="${lang}"]`);
  if (langItem && selected) {
    const flagSrc = langItem.querySelector("img").src;
    const short = langItem.dataset.short;
    selected.innerHTML = `
      <img class="flag-icon" src="${flagSrc}" alt="${short} Flag">
      <span class="short-text">${short}</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
        <g clip-path="url(#clip0_3208_683)">
          <path d="M8 12L16 20L24 12" stroke="#1F1F1F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <defs>
          <clipPath id="clip0_3208_683"><rect width="32" height="32" fill="white"/></clipPath>
        </defs>
      </svg>`;
  }

  translateFormElements(lang);

  if (typeof translations !== 'undefined') {
    document.querySelectorAll("[data-translate]").forEach(el => {
      const key = el.getAttribute("data-translate");
      if (translations[lang] && translations[lang][key]) {
        el.innerHTML = translations[lang][key];
      }
    });
  }
}

document.querySelectorAll(".dropdown li").forEach(item => {
  item.addEventListener("click", () => {
    const lang = item.dataset.lang;
    setLanguage(lang);
    const langSel = document.querySelector(".language-selector");
    if (langSel) langSel.classList.remove("open");
  });
});

/* ─── DOMContentLoaded ───────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', function () {
  setLanguage(currentLang);

  /* smooth section links */
  document.querySelectorAll('a[data-target]').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.dataset.target;
      const section = document.getElementById(targetId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        history.pushState(null, '', '?section=' + targetId);
      }
    });
  });

  /* blog slug handling */
  const params = new URLSearchParams(window.location.search);
  let slug = params.get('slug');
  if (!slug) {
    const path = window.location.pathname;
    const filename = path.split('/').pop().replace('.html', '');
    if (contents[filename]) slug = filename;
  }
  if (slug) {
    const currentArticle = contents[slug];
    if (currentArticle) {
      const updateUI = () => {
        const contentDiv = document.getElementById("content");
        if (contentDiv) contentDiv.innerHTML = currentArticle[currentLang];
        document.title = currentArticle.title || "Article";
      };
      updateUI();
      const oldSetLang = window.setLanguage;
      window.setLanguage = (lang) => {
        if (typeof oldSetLang === 'function') oldSetLang(lang);
        updateUI();
      };
    }
  }

  /* blog load-more */
  const blogGrid = document.getElementById('blog-grid');
  const loadMoreBtn = document.getElementById('load-more-btn');
  if (blogGrid && loadMoreBtn) {
    const articlesPerPage = 9;
    let visibleCount = articlesPerPage;
    const articleLinks = Array.from(blogGrid.querySelectorAll('.article-link'));

    function updateVisibility() {
      articleLinks.forEach((article, index) => {
        if (index < visibleCount) {
          article.style.setProperty('display', 'block', 'important');
          article.style.opacity = '1';
          article.style.visibility = 'visible';
        } else {
          article.style.setProperty('display', 'none', 'important');
        }
      });
      if (visibleCount >= articleLinks.length) {
        const container = loadMoreBtn.closest('.load-more-container') || loadMoreBtn.parentElement;
        if (container) container.style.setProperty('display', 'none', 'important');
      }
    }

    loadMoreBtn.addEventListener('click', function (e) {
      e.preventDefault();
      visibleCount += articlesPerPage;
      updateVisibility();
      const firstNewIndex = visibleCount - articlesPerPage;
      if (articleLinks[firstNewIndex]) {
        const yCoordinate = articleLinks[firstNewIndex].getBoundingClientRect().top + window.pageYOffset - 100;
        window.scrollTo({ top: yCoordinate, behavior: 'smooth' });
      }
    });

    updateVisibility();
  }

  /* popstate */
  window.addEventListener('popstate', () => {
    const p = new URLSearchParams(window.location.search);
    const sectionParam = p.get('section');
    if (sectionParam) {
      const section = document.getElementById(sectionParam);
      if (section) section.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });

  /* mobile burger */
  const burgerIcon = document.getElementById('burger-icon');
  const mobileMenu = document.getElementById('mobile-menu');
  if (burgerIcon && mobileMenu) {
    burgerIcon.addEventListener('click', function () {
      mobileMenu.classList.toggle('open');
      burgerIcon.classList.toggle('active');
      document.body.classList.toggle('no-scroll');
    });
    document.querySelectorAll('.mobile-menu .main-nav ul li a').forEach(link => {
      link.addEventListener('click', function () {
        mobileMenu.classList.remove('open');
        burgerIcon.classList.remove('active');
        document.body.classList.remove('no-scroll');
      });
    });
  }

  /* language selector dropdown */
  const langSelector = document.querySelector(".language-selector");
  const selectedLang = document.getElementById("selected-lang");
  if (langSelector && selectedLang) {
    selectedLang.addEventListener("click", (e) => {
      e.preventDefault();
      langSelector.classList.toggle("open");
    });
    document.addEventListener("click", (e) => {
      if (!langSelector.contains(e.target)) langSelector.classList.remove("open");
    });
  }

  /* desktop nav active on scroll */
  const sections = document.querySelectorAll('section');
  const desktopNavLinks = document.querySelectorAll('.nav-link');
  if (desktopNavLinks.length) {
    window.addEventListener('scroll', () => {
      let currentSection = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + section.clientHeight) {
          currentSection = section.getAttribute('id');
        }
      });
      desktopNavLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href && href.startsWith('#') && href.substring(1) === currentSection) {
          link.classList.add('active');
        }
      });
    });
  }

  /* phone dropdown builder */
  if (document.getElementById('phone-dropdown-list')) {
    buildPhoneList();
    const s = document.getElementById('phone-dropdown-search');
    if (s) s.addEventListener('input', function (e) { filterPhoneList(e.target.value); });
  }

  /* modal close buttons */
  document.querySelectorAll('.close-btn').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      closeModal(btn.closest('.modal, .modalone'));
    });
  });

  const backdrop = document.getElementById('modal-backdrop');
  if (backdrop) {
    backdrop.addEventListener('click', function () {
      document.querySelectorAll('.modal, .modalone').forEach(function (m) {
        if (m.style.display !== 'none') closeModal(m);
      });
    });
  }

  /* observe modals to sync backdrop */
  const observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (m) {
      if (m.attributeName === 'style') {
        const modal = m.target;
        const isVisible = modal.style.display === 'flex';
        const bd = document.getElementById('modal-backdrop');
        if (bd) bd.style.display = isVisible ? 'block' : 'none';
        if (isVisible) document.body.classList.add('modal-open');
      }
    });
  });
  ['successModal', 'successModalOne'].forEach(function (id) {
    const el = document.getElementById(id);
    if (el) observer.observe(el, { attributes: true });
  });

  /* home page only */
  if (document.body.classList.contains("home-page")) {
    initHomePage();
  }
});

/* ─── Home Page Init ─────────────────────────────────────────────────────── */
function initHomePage() {
  /* FAQ */
  const faqItems = document.querySelectorAll('.faq-item');
  if (faqItems.length > 0) faqItems[0].classList.add('active');
  faqItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      if (index !== 0) item.classList.toggle('active');
    });
  });

  /* trip type buttons */
  const tripTypeButtons = document.querySelectorAll('.trip-type-button');
  const formContents = document.querySelectorAll('.form-content');
  tripTypeButtons.forEach(button => {
    button.addEventListener('click', () => {
      tripTypeButtons.forEach(btn => btn.classList.remove('active'));
      formContents.forEach(content => content.classList.remove('active'));
      button.classList.add('active');
      const formId = button.dataset.form;
      const activeForm = document.getElementById(formId);
      if (activeForm) activeForm.classList.add('active');
    });
  });

  /* destinations / hotels */
  const destinationsData = {
    alicante: [
      { title: "Hotel Melia Alicante", description: "From Alicante Airport to Hotel Melia Alicante", price: "55 EUR", image: "./assets/image/Alicante/Hotel Melia, Alicante .jpg" },
      { title: "Hotel Daniya Alicante", description: "From Alicante Airport to Hotel Daniya Alicante", price: "55 EUR", image: "./assets/image/Alicante/Daniya Alicante.jpg" },
      { title: "Hotel Gran Sol", description: "From Alicante Airport to Hotel Gran Sol", price: "55 EUR", image: "./assets/image/Alicante/Gran Sol.jpg" },
      { title: "Hotel AC, Alicante", description: "From Alicante Airport to Hotel AC, Alicante", price: "55 EUR", image: "./assets/image/Alicante/Hotel AC, Alicante .jpg" },
      { title: "Hotel Port Alicante City & Beach", description: "From Alicante Airport to Hotel Port Alicante City & Beach", price: "55 EUR", image: "./assets/image/Alicante/Hotel Port Alicante City & Beach.jpg" },
      { title: "Hotel Old centre inn Alicante", description: "From Alicante Airport to Hotel Old centre inn Alicante", price: "55 EUR", image: "./assets/image/Alicante/Old centre inn Alicante.jpg" }
    ],
    benidorm: [
      { title: "Hotel Asia Gardens & Thai Spa", description: "From Alicante Airport to Asia Gardens & Thai Spa", price: "75 EUR", image: "./assets/image/Benidorm/Asia Gardens & Thai Spa.jpg" },
      { title: "Gran Hotel Balie", description: "From Alicante Airport to Gran Hotel Bali", price: "75 EUR", image: "./assets/image/Benidorm/Gran Hotel Bali.jpg" },
      { title: "Hotel Dynastic", description: "From Alicante Airport to Hotel Dynastic", price: "75 EUR", image: "./assets/image/Benidorm/Hotel Dynastic.jpg" },
      { title: "Hotel Servigroup Pueblo", description: "From Alicante Airport to Hotel Servigroup Pueblo", price: "75 EUR", image: "./assets/image/Benidorm/Hotel Servigroup Pueblo .jpg" },
      { title: "Hotel Marina Resort", description: "From Alicante Airport to Marina Resort", price: "75 EUR", image: "./assets/image/Benidorm/Marina Resort.jpg" },
      { title: "Hotel Melia Villaitana", description: "From Alicante Airport to Melia Villaitana", price: "75 EUR", image: "./assets/image/Benidorm/Melia Villaitana.jpg" }
    ],
    torrevieja: [
      { title: "Hotel Anna's garden", description: "From Alicante Airport to Hotel Anna's garden", price: "65 EUR", image: "./assets/image/Torrevieja/Anna's garden.jpg" },
      { title: "Dña Monse Hotel Spa & Golf", description: "From Alicante Airport to Dña Monse Hotel Spa & Golf", price: "65 EUR", image: "./assets/image/Torrevieja/Monse Hotel Spa & Golf .jpg" },
      { title: "Hotel Fontana Plaza", description: "From Alicante Airport to Hotel Fontana Plaza", price: "65 EUR", image: "./assets/image/Torrevieja/Hotel Fontana Plaza.jpg" },
      { title: "Hotel Madrid", description: "From Alicante Airport to Hotel Madrid", price: "65 EUR", image: "./assets/image/Torrevieja/Hotel Madrid.jpg" },
      { title: "Hotel Masa International", description: "From Alicante Airport to Hotel Masa International ", price: "65 EUR", image: "./assets/image/Torrevieja/Hotel Masa International .jpg" },
      { title: "Hotel Playas de Torrevieja", description: "From Alicante Airport to Hotel Playas de Torrevieja", price: "65 EUR", image: "./assets/image/Torrevieja/Hotel Playas de Torrevieja.jpg" }
    ],
    calpe: [
      { title: "Hotel AR Diamante Beach", description: "From Alicante Airport to Hotel AR Diamante Beach", price: "100 EUR", image: "./assets/image/Calpe/AR Diamante Beach.jpg" },
      { title: "Hotel ESTIMAR Calpe Suitopia", description: "From Alicante Airport to Hotel ESTIMAR Calpe Suitopia", price: "100 EUR", image: "./assets/image/Calpe/ESTIMAR Calpe Suitopia.jpg" },
      { title: "Hotel CALPE", description: "From Alicante Airport to Hotel CALPE", price: "100 EUR", image: "./assets/image/Calpe/Hotel CALPE.jpg" },
      { title: "Hotel Porto Calpe", description: "From Alicante Airport to Hotel Porto Calpe", price: "100 EUR", image: "./assets/image/Calpe/Hotel Porto Calpe.jpg" },
      { title: "Hotel RH Ifach ", description: "From Alicante Airport to Hotel RH Ifach ", price: "100 EUR", image: "./assets/image/Calpe/Hotel RH Ifach .jpg" },
      { title: "SOLYMAR Gran Hotel", description: "From Alicante Airport to SOLYMAR Gran Hotel", price: "100 EUR", image: "./assets/image/Calpe/SOLYMAR Gran Hotel.jpg" }
    ],
    albir: [
      { title: "Albir Garden Resort", description: "From Alicante Airport to Albir Garden Resort", price: "85 EUR", image: "./assets/image/Albir/Albir Garden Resort.jpg" },
      { title: "Albir Playa Hotel & Spa", description: "From Alicante Airport to Albir Playa Hotel & Spa", price: "85 EUR", image: "./assets/image/Albir/Albir Playa Hotel & Spa.jpg" },
      { title: "Hotel Sun Palace Albir & Spa", description: "From Alicante Airport to Hotel Sun Palace Albir & Spa", price: "85 EUR", image: "./assets/image/Albir/Hotel Sun Palace Albir & Spa.jpg" },
      { title: "Kaktus Hotel", description: "From Alicante Airport to Kaktus Hotel", price: "85 EUR", image: "./assets/image/Albir/Kaktus Hotel .jpg" },
      { title: "Magic Robin Hood", description: "From Alicante Airport to Magic Robin Hood", price: "85 EUR", image: "./assets/image/Albir/Magic Robin Hood.jpg" },
      { title: "Sha Spain", description: "From Alicante Airport to Sha Spain", price: "85 EUR", image: "./assets/image/Albir/Sha Spain.jpg" }
    ],
    guardamar: [
      { title: "Alannia Guardamar", description: "From Alicante Airport to Alannia Guardamar", price: "65 EUR", image: "./assets/image/Guardamar/Alannia Guardamar.jpg" },
      { title: "Hotel Eden Mar", description: "From Alicante Airport to Hotel Eden Mar", price: "65 EUR", image: "./assets/image/Guardamar/Hotel Eden Mar.jpg" },
      { title: "Hotel Mediterráneo", description: "From Alicante Airport to Hotel Mediterráneo", price: "65 EUR", image: "./assets/image/Guardamar/Hotel Mediterrneo.jpg" },
      { title: "Hotel Meridional", description: "From Alicante Airport to Hotel Meridional", price: "65 EUR", image: "./assets/image/Guardamar/Hotel Meridional.jpg" },
      { title: "Hotel Playas de Guardamar", description: "From Alicante Airport to Hotel Playas de Guardamar", price: "65 EUR", image: "./assets/image/Guardamar/Hotel Playas de Guardamar.jpg" },
      { title: "Ona Aldea del Mar", description: "From Alicante Airport to Ona Aldea del Mar", price: "65 EUR", image: "./assets/image/Guardamar/Ona Aldea del Mar.jpg" }
    ]
  };

  function renderHotels(destination) {
    const hotelGrid = document.getElementById('hotel-grid');
    if (!hotelGrid) return;
    hotelGrid.innerHTML = '';
    const hotels = destinationsData[destination];
    if (!hotels) return;

    hotels.forEach((hotel, index) => {
      const hotelCard = document.createElement('div');
      hotelCard.className = 'hotel-card';

      const descKey  = `hotel_description_${destination}_${index}`;
      const priceKey = `hotel_price_${destination}_${index}`;
      const ctaKey   = `hotel_cta_${destination}_${index}`;
      const titleKey = `hotel_title_${destination}_${index}`;

      if (!translations.en[titleKey]) {
        translations.en[titleKey]  = hotel.title;
        translations.es[titleKey]  = hotel.title;
        translations.en[descKey]   = `From Alicante Airport to ${hotel.title}`;
        translations.es[descKey]   = `Desde el Aeropuerto de Alicante hasta ${hotel.title}`;
        translations.en[priceKey]  = `Pricing starts from: ${hotel.price}`;
        translations.es[priceKey]  = `Precio desde: ${hotel.price}`;
        translations.en[ctaKey]    = "Get a Quote";
        translations.es[ctaKey]    = "Solicitar Cotización";
      }

      hotelCard.innerHTML = `
        <div class="hotel-card-image-wrapper">
          <img loading="lazy" src="${hotel.image}" alt="${hotel.title}" class="hotel-card-image" onerror="this.onerror=null;this.src='';">
        </div>
        <div class="hotel-card-overlay"></div>
        <div class="hotel-card-content">
          <div>
            <h4 class="hotel-card-title" data-translate="${titleKey}">${translations[currentLang][titleKey]}</h4>
            <p class="hotel-card-description" data-translate="${descKey}">${translations[currentLang][descKey]}</p>
          </div>
          <p class="hotel-card-price" data-translate="${priceKey}">${translations[currentLang][priceKey]}</p>
        </div>
        <a href="#trip-form" class="hotel-card-hover-button" data-translate="${ctaKey}">${translations[currentLang][ctaKey]}</a>`;

      hotelGrid.appendChild(hotelCard);
    });
  }

  function selectDestination(selectedButton) {
    document.querySelectorAll('.destination-button').forEach(button => button.classList.remove('selected'));
    selectedButton.classList.add('selected');
    renderHotels(selectedButton.dataset.destination);
  }

  const destinationButtonsContainer = document.getElementById('destination-buttons');
  if (destinationButtonsContainer) {
    destinationButtonsContainer.addEventListener('click', (event) => {
      const button = event.target.closest('.destination-button');
      if (button) selectDestination(button);
    });
  }

  const defaultButton = document.querySelector('.destination-button[data-destination="alicante"]');
  if (defaultButton) {
    selectDestination(defaultButton);
    handleSectionJump();
  }

  /* custom selects */
  document.querySelectorAll(".custom-select").forEach(select => {
    const selectedDiv = select.querySelector(".selected");
    if (!selectedDiv) return;
    selectedDiv.addEventListener("click", () => select.classList.toggle("active"));

    select.querySelectorAll(".options li").forEach(option => {
      option.addEventListener("click", () => {
        const selectedText = select.querySelector(".selected-text");
        if (selectedText) { selectedText.textContent = option.textContent; selectedText.classList.add("active"); }
        select.classList.remove("active");
        let hiddenInput = select.querySelector("input[type='hidden']");
        if (!hiddenInput) {
          hiddenInput = document.createElement("input");
          hiddenInput.type = "hidden";
          hiddenInput.name = select.dataset.name;
          select.appendChild(hiddenInput);
        }
        hiddenInput.value = option.textContent;
        const group = select.closest(".form-group");
        if (group) {
          group.classList.remove("error");
          const msg = group.querySelector(".error-message");
          if (msg) msg.remove();
        }
        select.querySelector(".selected")?.classList.remove("error");
      });
    });
  });

  document.addEventListener("click", e => {
    document.querySelectorAll(".custom-select.active").forEach(select => {
      if (!select.contains(e.target)) select.classList.remove("active");
    });
  });

  /* scroll to form helper */
  function scrollToForm() {
    const target = document.getElementById('trip-form');
    if (!target) return;
    const headerOffset = 80;
    const top = target.getBoundingClientRect().top + window.pageYOffset - headerOffset;
    window.scrollTo({ top, behavior: 'smooth' });
    setTimeout(() => {
      target.classList.add('form-highlight');
      setTimeout(() => target.classList.remove('form-highlight'), 2000);
    }, 600);
  }

  document.querySelectorAll(".another-request").forEach(button => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      const modal = button.closest(".modal, .modalone");
      if (modal) { modal.style.display = "none"; document.body.classList.remove("modal-open"); }
      scrollToForm();
    });
  });

  document.querySelectorAll('.get-a-quote-btn, .get-quote-button, a[href="#trip-form"]').forEach(btn => {
    btn.addEventListener('click', (e) => { e.preventDefault(); scrollToForm(); });
  });

  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.hotel-card-hover-button, a[href="#trip-form"]');
    if (btn) { e.preventDefault(); scrollToForm(); }
  });
}

/* ─── Calendar ───────────────────────────────────────────────────────────── */
const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const state = {
  arrival: { sel: null, month: new Date().getMonth(), year: new Date().getFullYear() },
  return:  { sel: null, month: new Date().getMonth(), year: new Date().getFullYear() }
};

function initCal(id) {
  const ms = document.getElementById('month-' + id);
  const ys = document.getElementById('year-' + id);
  if (!ms || !ys) return;
  MONTHS.forEach((m, i) => { const o = document.createElement('option'); o.value = i; o.text = m; ms.appendChild(o); });
  ms.value = state[id].month;
  const yr = new Date().getFullYear();
  for (let y = yr; y <= yr + 5; y++) { const o = document.createElement('option'); o.value = y; o.text = y; ys.appendChild(o); }
  ys.value = state[id].year;
  renderCal(id);
}

function renderCal(id) {
  const ms = document.getElementById('month-' + id);
  const ys = document.getElementById('year-' + id);
  const grid = document.getElementById('grid-' + id);
  if (!ms || !ys || !grid) return;

  state[id].month = parseInt(ms.value);
  state[id].year  = parseInt(ys.value);
  grid.innerHTML  = '';

  const now    = new Date();
  const todayD = now.getDate();
  const todayM = now.getMonth();
  const todayY = now.getFullYear();

  let startDay = new Date(state[id].year, state[id].month, 1).getDay();
  startDay = startDay === 0 ? 6 : startDay - 1;
  const days = new Date(state[id].year, state[id].month + 1, 0).getDate();

  for (let i = 0; i < startDay; i++) {
    const d = document.createElement('div'); d.className = 'cal-day empty'; grid.appendChild(d);
  }
  for (let d = 1; d <= days; d++) {
    const div = document.createElement('div'); div.className = 'cal-day'; div.textContent = d;
    const s = state[id];
    if (s.sel && s.sel.d === d && s.sel.m === s.month && s.sel.y === s.year) div.classList.add('selected');
    if (d === todayD && s.month === todayM && s.year === todayY) div.classList.add('today');
    div.onclick = () => selectDay(id, d);
    grid.appendChild(div);
  }
}

function selectDay(id, d) {
  const s   = state[id];
  s.sel     = { d, m: s.month, y: s.year };
  const val = `${String(d).padStart(2,'0')}/${String(s.month+1).padStart(2,'0')}/${s.year}`;
  const disp = document.getElementById(id + '-display');
  if (disp) { disp.textContent = val; disp.classList.remove('placeholder'); }
  const hidden = document.getElementById(id + '-date');
  if (hidden) hidden.value = `${s.year}-${String(s.month+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
  renderCal(id);
  const cal = document.getElementById('cal-' + id);
  if (cal) cal.classList.remove('open');
}

function toggleCal(id) {
  const other    = id === 'arrival' ? 'return' : 'arrival';
  const otherCal = document.getElementById('cal-' + other);
  const thisCal  = document.getElementById('cal-' + id);
  const otherBox = document.getElementById('box-' + other);
  const thisBox  = document.getElementById('box-' + id);
  if (otherCal) otherCal.classList.remove('open');
  if (otherBox) otherBox.classList.remove('active');
  if (thisCal)  thisCal.classList.toggle('open');
  if (thisBox)  thisBox.classList.toggle('active');
}

document.addEventListener('click', e => {
  ['arrival','return'].forEach(id => {
    const box = document.getElementById('box-' + id);
    const cal = document.getElementById('cal-' + id);
    if (box && cal && !box.contains(e.target) && !cal.contains(e.target)) {
      cal.classList.remove('open');
      box.classList.remove('active');
    }
  });
});

if (document.getElementById('cal-arrival')) { initCal('arrival'); initCal('return'); }

/* ─── Pax / Luggage Counters ─────────────────────────────────────────────── */
const statePerson = { adults: 1, children: 0, lug10: 0, lug20: 0 };

function togglePanel(id) {
  const trigger = document.getElementById(id + '-trigger');
  const panel   = document.getElementById(id + '-panel');
  if (trigger) trigger.classList.toggle('open');
  if (panel)   panel.classList.toggle('open');
}

function closeAllPanels() {
  ['pax','lug'].forEach(function (id) {
    const trigger = document.getElementById(id + '-trigger');
    const panel   = document.getElementById(id + '-panel');
    if (trigger) trigger.classList.remove('open');
    if (panel)   panel.classList.remove('open');
  });
}

document.addEventListener('click', function (e) {
  const insidePax = document.getElementById('pax-trigger')?.contains(e.target) || document.getElementById('pax-panel')?.contains(e.target);
  const insideLug = document.getElementById('lug-trigger')?.contains(e.target) || document.getElementById('lug-panel')?.contains(e.target);
  if (!insidePax && !insideLug) {
    closeAllPanels();
  } else if (!insidePax) {
    document.getElementById('pax-trigger')?.classList.remove('open');
    document.getElementById('pax-panel')?.classList.remove('open');
  } else if (!insideLug) {
    document.getElementById('lug-trigger')?.classList.remove('open');
    document.getElementById('lug-panel')?.classList.remove('open');
  }
});

function change(key, delta) {
  const min = key === 'adults' ? 1 : 0;
  statePerson[key] = Math.max(min, statePerson[key] + delta);
  const valEl = document.getElementById(key + '-val');
  if (valEl) valEl.textContent = statePerson[key];
  const minusBtn = document.getElementById(key + '-minus');
  if (minusBtn) minusBtn.disabled = statePerson[key] === min;
  updateSummaries();
}

function updateSummaries() {
  if (!document.getElementById('pax-summary')) return;
  const isMobile = window.innerWidth <= 768;
  const t        = translations[currentLang] || translations['en'];

  const adults   = statePerson.adults;
  const children = statePerson.children;
  let adultLabel, childLabel;

  if (isMobile) {
    adultLabel = t.pax_adult_short || 'Ad.';
    childLabel = t.pax_child_short || 'Ch.';
  } else {
    adultLabel = adults   === 1 ? (t.pax_adult_singular || 'Adult')    : (t.pax_adult_plural   || 'Adults');
    childLabel = children === 1 ? (t.pax_child_singular || 'Child')    : (t.pax_child_plural   || 'Children');
  }

  document.getElementById('pax-summary').textContent = `${adults} ${adultLabel}, ${children} ${childLabel}`;

  const total   = statePerson.lug10 + statePerson.lug20;
  const lugWord = t.lug_summary || 'Luggage';
  const lugSummaryEl = document.getElementById('lug-summary');
  if (lugSummaryEl) {
    lugSummaryEl.textContent = isMobile
      ? `${total} ${lugWord}`
      : `${total} ${lugWord}${total !== 1 ? 's' : ''}`;
  }
}

/* init counter disable states */
if (document.getElementById('adults-minus')) {
  document.getElementById('adults-minus').disabled   = statePerson.adults   === 1;
  document.getElementById('children-minus').disabled = statePerson.children === 0;
  document.getElementById('lug10-minus').disabled    = statePerson.lug10    === 0;
  document.getElementById('lug20-minus').disabled    = statePerson.lug20    === 0;
  updateSummaries();
}

/* ─── Form Validation & Submission ──────────────────────────────────────── */
const WEBHOOK_ONE_WAY  = "https://discord.com/api/webhooks/1407413644882346128/Q6xf0205wHX_K7ATSo4itWvGKsIwmX51HKENTtXFsg6xNif_yQwp7y5-KMfpS0MguWZr";
const WEBHOOK_ROUNDTRIP = "https://discord.com/api/webhooks/1407414660562681886/M5oZOGenN2eALTyxWrX5adda_1hJvVXgMqbdeVL_Q9IG73iS6TrLxvw_aTUXjlju3cXr";

let isRoundTrip = false;

function fieldEl(id) { return document.getElementById(id); }

function travelDateField() {
  return fieldEl('pickup-date') || fieldEl('arrival-date');
}
function travelDateValue() {
  const el = travelDateField();
  return el ? (el.value || '').trim() : '';
}

function showError(input, msg) {
  const el   = typeof input === 'string' ? document.getElementById(input) : input;
  if (!el) return;
  const wrap = el.closest ? el.closest('.field') : el;
  if (!wrap) return;
  wrap.classList.add('has-error');
  const error = wrap.querySelector('.error-message');
  if (error && msg) error.textContent = msg;
}

function clearError(inputId) {
  const input = typeof inputId === 'string' ? document.getElementById(inputId) : inputId;
  if (!input) return;
  const wrap = input.closest ? input.closest('.field') : input;
  if (wrap) wrap.classList.remove('has-error');
}

function clearAllErrors() {
  document.querySelectorAll('.has-error').forEach(el => el.classList.remove('has-error'));
}

function validateRequired(inputId) {
  const input = document.getElementById(inputId);
  if (!input) return true;
  const val  = input.value.trim();
  const wrap = input.closest('.field');
  if (!val) { if (wrap) wrap.classList.add('has-error'); return false; }
  if (wrap) wrap.classList.remove('has-error');
  return true;
}

function validateDate(inputId) {
  const input = document.getElementById(inputId);
  const wrap  = input?.closest('.field');
  if (!input || !input.value) { showError(wrap, translations[currentLang]['field_required']); return false; }
  const today = new Date(); today.setHours(0,0,0,0);
  const [year, month, day] = input.value.split('-').map(Number);
  const selected = new Date(year, month-1, day);
  if (selected < today) { showError(wrap, translations[currentLang]['past_date_error']); return false; }
  clearError(wrap);
  return true;
}

function validateReturnDateAgainstPickup(returnDateId, pickupDateId) {
  const returnInput = fieldEl(returnDateId);
  const pickupInput = fieldEl(pickupDateId);
  if (!returnInput || !returnInput.value || !pickupInput || !pickupInput.value) return true;
  const [retYear,retMonth,retDay]     = returnInput.value.split('-').map(Number);
  const [pickYear,pickMonth,pickDay]  = pickupInput.value.split('-').map(Number);
  const returnDate = new Date(retYear, retMonth-1, retDay);
  const pickupDate = new Date(pickYear, pickMonth-1, pickDay);
  const wrap = returnInput.closest('.field');
  if (returnDate < pickupDate) { showError(wrap, 'Return date cannot be before arrival date'); return false; }
  clearError(wrap);
  return true;
}

function validateEmail(inputId) {
  const input = document.getElementById(inputId);
  if (!input) return true;
  const val  = input.value.trim();
  const wrap = input.closest('.field');
  if (!val) { if (wrap) wrap.classList.add('has-error'); return false; }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
    if (wrap) {
      wrap.classList.add('has-error');
      const msg = wrap.querySelector('.error-message');
      if (msg) msg.textContent = 'Please enter a valid email';
    }
    return false;
  }
  if (wrap) wrap.classList.remove('has-error');
  return true;
}

/* live-clear errors */
['pickup-location','dropoff-location','arrival-date','pickup-time','return-date','return-time','full-name','phone-number','email-address'].forEach(id => {
  const el = document.getElementById(id);
  if (!el) return;
  ['input','change'].forEach(evt => {
    el.addEventListener(evt, () => {
      if (el.value.trim()) {
        const wrap = el.closest('.field');
        if (wrap) wrap.classList.remove('has-error');
      }
    });
  });
});

const addReturnToggle = document.getElementById('add-return-toggle');
if (addReturnToggle) {
  addReturnToggle.addEventListener('click', () => {
    isRoundTrip = true;
    document.getElementById('return-section')?.classList.add('visible');
    addReturnToggle.style.display = 'none';
  });
}

const deleteReturnBtn = document.getElementById('delete-return-btn');
if (deleteReturnBtn) {
  deleteReturnBtn.addEventListener('click', () => {
    isRoundTrip = false;
    document.getElementById('return-section')?.classList.remove('visible');
    if (addReturnToggle) addReturnToggle.style.display = 'flex';
    const rd = fieldEl('return-date'); if (rd) rd.value = '';
    const rt = fieldEl('return-time'); if (rt) rt.value = '';
    clearError('return-date');
    clearError('return-time');
  });
}

function scrollToFirstError() {
  const firstError = document.querySelector('.has-error');
  if (!firstError) return;
  const offset = 120;
  const top = firstError.getBoundingClientRect().top + window.pageYOffset - offset;
  window.scrollTo({ top, behavior: 'smooth' });
  const focusable = firstError.querySelector('input, select, textarea');
  if (focusable) focusable.focus({ preventScroll: true });
}

const goStep2 = document.getElementById('go-step-2');
if (goStep2) {
  goStep2.addEventListener('click', () => {
    clearAllErrors();
    let valid = true;
    valid = validateRequired('pickup-location') && valid;
    valid = validateRequired('dropoff-location') && valid;

    const mainDateInput = travelDateField();
    if (!mainDateInput) { valid = false; }
    else { valid = validateDate(mainDateInput.id) && valid; }

    const timeEl = fieldEl('pickup-time');
    if (!timeEl || !timeEl.value) {
      const wrap = timeEl?.closest('.field');
      if (wrap) wrap.classList.add('has-error');
      valid = false;
    } else {
      clearError('pickup-time');
    }

    if (isRoundTrip) {
      valid = validateDate('return-date') && valid;
      if (mainDateInput) valid = validateReturnDateAgainstPickup('return-date', mainDateInput.id) && valid;
      const retTimeEl = fieldEl('return-time');
      if (!retTimeEl || !retTimeEl.value) {
        const wrap = retTimeEl?.closest('.field');
        if (wrap) wrap.classList.add('has-error');
        valid = false;
      } else {
        clearError('return-time');
      }
    }

   if (!valid) { scrollToFirstError(); return; }

    document.getElementById('page-1')?.classList.remove('active');
    document.getElementById('page-2')?.classList.add('active');
    document.getElementById('step-1-indicator')?.classList.remove('active');
    document.getElementById('step-1-indicator')?.classList.add('done');
    document.getElementById('step-2-indicator')?.classList.remove('inactive');
    document.getElementById('step-2-indicator')?.classList.add('active');
  });
}

const goStep1 = document.getElementById('go-step-1');
if (goStep1) {
  goStep1.addEventListener('click', () => {
    document.getElementById('page-2')?.classList.remove('active');
    document.getElementById('page-1')?.classList.add('active');
    document.getElementById('step-2-indicator')?.classList.remove('active');
    document.getElementById('step-2-indicator')?.classList.add('inactive');
    document.getElementById('step-1-indicator')?.classList.remove('done');
    document.getElementById('step-1-indicator')?.classList.add('active');
    clearAllErrors();
  });
}

const submitBtn = document.getElementById('submitBtn');
if (submitBtn) {
  submitBtn.addEventListener('click', async () => {
    clearAllErrors();
    let valid = true;
    valid = validateRequired('full-name')    && valid;
    valid = validateRequired('phone-number') && valid;
    valid = validateEmail('email-address')   && valid;
   if (!valid) { scrollToFirstError(); return; }

    const pickup  = fieldEl('pickup-location')?.value.trim() || '';
    const dropoff = fieldEl('dropoff-location')?.value.trim() || '';

    function formatDateWithMonth(dateValue) {
      const date   = new Date(dateValue);
      const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
      return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
    }

    const date   = formatDateWithMonth(travelDateValue());
    const time   = fieldEl('pickup-time')?.value || '';
    const flight = fieldEl('flight-number')?.value.trim() || 'N/A';
    const pax    = `${statePerson.adults} Adult(s), ${statePerson.children} Children`;
    const lugParts = [];
    if (statePerson.lug10 > 0) lugParts.push(`${statePerson.lug10} x 10kg`);
    if (statePerson.lug20 > 0) lugParts.push(`${statePerson.lug20} x 20-30kg`);
    const luggage     = lugParts.length > 0 ? lugParts.join(', ') : 'No luggage';
    const name        = fieldEl('full-name')?.value.trim() || '';
    const countryCode = fieldEl('country-select')?.value || '';
    const phone       = fieldEl('phone-number')?.value.trim() || '';
    const email       = fieldEl('email-address')?.value.trim() || '';
    const notes       = fieldEl('extra-requests')?.value.trim() || 'No extra items.';

    let webhookUrl, embedTitle, messageContent, embedFields;

    if (isRoundTrip) {
      webhookUrl    = WEBHOOK_ROUNDTRIP;
      embedTitle    = 'Roundtrip Transfer Submission';
      messageContent = '🔄 **New Roundtrip Transfer Request!**';
      const retDate = formatDateWithMonth(fieldEl('return-date')?.value || '');
      const retTime = fieldEl('return-time')?.value || '';
      embedFields = [
        { name: '➡️ First Transfer',       value: `**From:** ${pickup}\n**To:** ${dropoff}\n**Date:** ${date}\n**Time:** ${time}\n**Flight:** ${flight}`, inline: false },
        { name: '⬅️ Return Transfer',      value: `**From:** ${dropoff}\n**To:** ${pickup}\n**Date:** ${retDate}\n**Time:** ${retTime}`, inline: false },
        { name: '👥 Passengers & Luggage', value: `**Passengers:** ${pax}\n**Luggage:** ${luggage}`, inline: false },
        { name: '👤 Personal Information', value: `**Name:** ${name}\n**Email:** ${email}\n**Phone:** ${countryCode}${phone}`, inline: false },
        { name: '📝 Notes',                value: notes, inline: false }
      ];
    } else {
      webhookUrl    = WEBHOOK_ONE_WAY;
      embedTitle    = 'One-Way Transfer Submission';
      messageContent = '🚐 **New One-Way Transfer Request!**';
      embedFields = [
        { name: '➡️ Transfer Details',     value: `**From:** ${pickup}\n**To:** ${dropoff}\n**Date:** ${date}\n**Time:** ${time}\n**Flight:** ${flight}`, inline: false },
        { name: '👥 Passengers & Luggage', value: `**Passengers:** ${pax}\n**Luggage:** ${luggage}`, inline: false },
        { name: '👤 Personal Information', value: `**Name:** ${name}\n**Email:** ${email}\n**Phone:** ${countryCode}${phone}`, inline: false },
        { name: '📝 Notes',                value: notes, inline: false }
      ];
    }

    submitBtn.disabled = true;

    try {
      const res = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          content: messageContent,
          embeds: [{ title: embedTitle, color: 3447003, fields: embedFields, timestamp: new Date().toISOString() }]
        })
      });

      if (res.ok) {
        const modal = document.getElementById('successModal');
        if (modal) { modal.style.display = 'flex'; document.body.classList.add('modal-open'); }
      } else {
        console.error('Discord error:', await res.json().catch(() => ({})));
        alert('There was an error submitting your request. Please try again.');
        submitBtn.disabled = false;
      }
    } catch (err) {
      console.error('Network error:', err);
      alert('A network error occurred. Please try again.');
      submitBtn.disabled = false;
    }
  });
}

/* reset */
const resetBtn = document.getElementById('resetBtn');
if (resetBtn) {
  resetBtn.addEventListener('click', () => {
    ['pickup-location','dropoff-location','pickup-date','arrival-date','pickup-time','return-time','flight-number','return-date','full-name','phone-number','email-address','extra-requests'].forEach(id => {
      const el = fieldEl(id);
      if (el) el.value = '';
    });

    statePerson.adults   = 1;
    statePerson.children = 0;
    statePerson.lug10    = 0;
    statePerson.lug20    = 0;

    ['adults','children','lug10','lug20'].forEach(key => {
      const el = document.getElementById(key + '-val');
      if (el) el.textContent = statePerson[key];
    });

    if (document.getElementById('adults-minus'))   document.getElementById('adults-minus').disabled   = true;
    if (document.getElementById('children-minus')) document.getElementById('children-minus').disabled = true;
    if (document.getElementById('lug10-minus'))    document.getElementById('lug10-minus').disabled    = true;
    if (document.getElementById('lug20-minus'))    document.getElementById('lug20-minus').disabled    = true;

    updateSummaries();

    ['arrival','return'].forEach(id => {
      const disp = document.getElementById('tp-' + id + '-display');
      if (disp) { disp.textContent = translations[currentLang]?.['form_select_time'] || 'Select Time'; disp.style.color = ''; }
      const trigger = document.getElementById('tp-' + id);
      if (trigger) trigger.classList.remove('has-value','open');
      ['hours','mins'].forEach(col => {
        const colEl = document.getElementById('tp-' + id + '-' + col);
        if (colEl) colEl.querySelectorAll('.time-item').forEach(x => x.classList.remove('selected'));
      });
    });

    ['arrival','return'].forEach(id => {
      const disp = document.getElementById(id + '-display');
      if (disp) { disp.textContent = ''; disp.classList.add('placeholder'); }
      if (state[id]) state[id].sel = null;
      renderCal(id);
    });

    isRoundTrip = false;
    document.getElementById('return-section')?.classList.remove('visible');
    if (addReturnToggle) addReturnToggle.style.display = 'flex';

    clearAllErrors();

    const modal = document.getElementById('successModal');
    if (modal) modal.style.display = 'none';
    document.body.classList.remove('modal-open');

    if (submitBtn) submitBtn.disabled = false;

    document.getElementById('page-1')?.classList.add('active');
    document.getElementById('page-2')?.classList.remove('active');
    document.getElementById('step-1-indicator')?.classList.remove('done');
    document.getElementById('step-1-indicator')?.classList.add('active');
    document.getElementById('step-2-indicator')?.classList.remove('active');
    document.getElementById('step-2-indicator')?.classList.add('inactive');
  });
}

/* ─── Modal Helpers ──────────────────────────────────────────────────────── */
function openModal(modal) {
  if (!modal) return;
  modal.style.display = 'flex';
  const bd = document.getElementById('modal-backdrop');
  if (bd) bd.style.display = 'block';
  document.body.classList.add('modal-open');
}

function closeModal(modal) {
  if (!modal) return;
  modal.style.display = 'none';
  const bd = document.getElementById('modal-backdrop');
  if (bd) bd.style.display = 'none';
  document.body.classList.remove('modal-open');
}

/* ─── Phone Dropdown ─────────────────────────────────────────────────────── */
function togglePhoneDropdown() {
  const dropdown = document.getElementById('phone-dropdown');
  const trigger  = document.getElementById('phone-country-trigger');
  if (!dropdown || !trigger) return;
  const isOpen = dropdown.classList.contains('open');
  dropdown.classList.toggle('open', !isOpen);
  trigger.classList.toggle('open', !isOpen);
  if (!isOpen) {
    const s = document.getElementById('phone-dropdown-search');
    if (s) { s.value = ''; s.focus(); filterPhoneList(''); }
  }
}

function selectPhoneCountry(country) {
  const codeEl   = document.getElementById('phone-code');
  const flagEl   = document.getElementById('phone-flag');
  const hiddenEl = document.getElementById('country-select');
  const phoneEl  = document.getElementById('phone-number');
  if (codeEl)   codeEl.textContent = country.code;
  if (flagEl)   flagEl.textContent = country.flag;
  if (hiddenEl) hiddenEl.value     = country.code;
  if (phoneEl)  phoneEl.placeholder = country.placeholder?.replace(/#/g, 'X') || '';
  document.getElementById('phone-dropdown')?.classList.remove('open');
  document.getElementById('phone-country-trigger')?.classList.remove('open');
}

function buildPhoneList() {
  const list = document.getElementById('phone-dropdown-list');
  if (!list || !window.PHONE_COUNTRIES) return;
  list.innerHTML = '';
  window.PHONE_COUNTRIES.forEach(function (c) {
    const li = document.createElement('li');
    li.className    = 'phone-dropdown-item';
    li.dataset.name = c.name.toLowerCase();
    li.dataset.code = c.code;
    li.innerHTML    = `<span class="pd-flag">${c.flag}</span><span class="pd-name">${c.name}</span><span class="pd-code">${c.code}</span>`;
    li.addEventListener('click', function () { selectPhoneCountry(c); });
    list.appendChild(li);
  });
}

function filterPhoneList(q) {
  const term = (q || '').toLowerCase().trim();
  document.querySelectorAll('.phone-dropdown-item').forEach(function (li) {
    li.style.display = (li.dataset.name.includes(term) || li.dataset.code.includes(term)) ? '' : 'none';
  });
}

document.addEventListener('click', function (e) {
  const trigger  = document.getElementById('phone-country-trigger');
  const dropdown = document.getElementById('phone-dropdown');
  if (trigger && dropdown && !trigger.contains(e.target) && !dropdown.contains(e.target)) {
    dropdown.classList.remove('open');
    trigger.classList.remove('open');
  }
});

function updateCountryCode(el) {
  const codeEl   = document.getElementById('phone-code');
  const hiddenEl = document.getElementById('country-select');
  if (codeEl)   codeEl.textContent = el.value;
  if (hiddenEl) hiddenEl.value     = el.value;
}

/* ─── Time Picker ────────────────────────────────────────────────────────── */
(function () {
  const tpState = {};

  function pad(n) { return String(n).padStart(2, '0'); }

  function buildTimePicker(id) {
    tpState[id] = { h: null, m: null };
    const hc = document.getElementById('tp-' + id + '-hours');
    const mc = document.getElementById('tp-' + id + '-mins');
    if (!hc || !mc) return;

    for (let i = 0; i < 24; i++) {
      (function (val) {
        const el = document.createElement('div');
        el.className = 'time-item';
        el.textContent = pad(val);
        el.addEventListener('click', function () { pickTime(id, 'h', val, el); });
        hc.appendChild(el);
      })(i);
    }
    for (let j = 0; j < 60; j++) {
      (function (val) {
        const el = document.createElement('div');
        el.className = 'time-item';
        el.textContent = pad(val);
        el.addEventListener('click', function () { pickTime(id, 'm', val, el); });
        mc.appendChild(el);
      })(j);
    }
  }

  function pickTime(id, type, val, el) {
    const col = document.getElementById('tp-' + id + '-' + (type === 'h' ? 'hours' : 'mins'));
    if (col) {
      col.querySelectorAll('.time-item').forEach(x => x.classList.remove('selected'));
      el.classList.add('selected');
      col.scrollTop = el.offsetTop - 8;
    }
    tpState[id][type] = val;

    const h = tpState[id].h;
    const m = tpState[id].m;
    if (h !== null && m !== null) {
      const txt  = pad(h) + ':' + pad(m);
      const disp = document.getElementById('tp-' + id + '-display');
      if (disp) { disp.textContent = txt; disp.style.color = ''; }
      document.getElementById('tp-' + id)?.classList.add('has-value');

      const hidden = id === 'arrival' ? document.getElementById('pickup-time') : document.getElementById('return-time');
      if (hidden) { hidden.value = txt; hidden.dispatchEvent(new Event('change', { bubbles: true })); }

      if (type === 'm') closeAllTimePickers();
    }
  }

  function closeAllTimePickers() {
    document.querySelectorAll('.time-panel').forEach(p  => p.classList.remove('open'));
    document.querySelectorAll('.time-trigger').forEach(t => t.classList.remove('open'));
  }

  window.toggleTimePicker = function (id) {
    const panel   = document.getElementById('tp-' + id + '-panel');
    const trigger = document.getElementById('tp-' + id);
    if (!panel || !trigger) return;
    const isOpen = panel.classList.contains('open');
    closeAllTimePickers();
    if (!isOpen) { panel.classList.add('open'); trigger.classList.add('open'); }
  };

  document.addEventListener('click', function (e) {
    if (!e.target.closest('[id^="wrap-arrival"]') && !e.target.closest('[id^="wrap-return"]')) {
      closeAllTimePickers();
    }
  });

  if (document.getElementById('tp-arrival-hours')) {
    buildTimePicker('arrival');
    buildTimePicker('return');
  }
})();