document.addEventListener('DOMContentLoaded', function () {
    const burgerIcon = document.getElementById('burger-icon');
    const mobileMenu = document.getElementById('mobile-menu');
    const body = document.body;

    burgerIcon.addEventListener('click', function () {
        mobileMenu.classList.toggle('open');
        burgerIcon.classList.toggle('active');
        body.classList.toggle('no-scroll');
    });

    const navLinks = document.querySelectorAll('.mobile-menu .main-nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            mobileMenu.classList.remove('open');
            burgerIcon.classList.remove('active');
            body.classList.remove('no-scroll');
        });
    });

    const langSelector = document.querySelector(".language-selector");

    document.getElementById("selected-lang").addEventListener("click", (e) => {
        e.preventDefault();
        langSelector.classList.toggle("open");
    });

    document.addEventListener("click", (e) => {
        if (!langSelector.contains(e.target)) {
            langSelector.classList.remove("open");
        }
    });

    const desktopNavLinks = document.querySelectorAll('.desktop-nav-links a');
    const sections = document.querySelectorAll('section[id], header');

    window.addEventListener('scroll', () => {
        let currentSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        desktopNavLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                const sectionId = href.substring(1);
                if (sectionId === currentSection) {
                    link.classList.add('active');
                }
            }
        });
    });

    desktopNavLinks.forEach(link => {
        link.addEventListener('click', function () {
            desktopNavLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    const faqItems = document.querySelectorAll('.faq-item');
    if (faqItems.length > 0) {
        faqItems[0].classList.add('active');
    }
    faqItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            if (index !== 0) {
                item.classList.toggle('active');
            }
        });
    });

    const tripTypeButtons = document.querySelectorAll('.trip-type-button');
    const formContents = document.querySelectorAll('.form-content');
    tripTypeButtons.forEach(button => {
        button.addEventListener('click', () => {
            tripTypeButtons.forEach(btn => btn.classList.remove('active'));
            formContents.forEach(content => content.classList.remove('active'));

            button.classList.add('active');
            const formId = button.dataset.form;
            const activeForm = document.getElementById(formId);
            if (activeForm) {
                activeForm.classList.add('active');
            }
        });
    });

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
            { title: "Hotel Mediterráneo", description: "From Alicante Airport to Hotel Mediterráneo", price: "65 EUR", image: "./assets/image/Guardamar/Hotel Mediterráneo.jpg" },
            { title: "Hotel Meridional", description: "From Alicante Airport to Hotel Meridional", price: "65 EUR", image: "./assets/image/Guardamar/Hotel Meridional.jpg" },
            { title: "Hotel Playas de Guardamar", description: "From Alicante Airport to Hotel Playas de Guardamar", price: "65 EUR", image: "./assets/image/Guardamar/Hotel Playas de Guardamar.jpg" },
            { title: "Ona Aldea del Mar", description: "From Alicante Airport to Ona Aldea del Mar", price: "65 EUR", image: "./assets/image/Guardamar/Ona Aldea del Mar.jpg" }
        ]
    };

    let currentLang = "en";
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
            why_card5_desc: "Don’t just take our word for it — read real customer reviews from travelers who trust ARMESP for dependable, private transfers in Alicante and beyond.",
            why_card5_cta: "Leave a Review",
            faq_title: "Frequently Asked Questions",
            faq_headline: "Need Help? Start Here",
            faq_desc: "Find quick, clear answers about booking, pricing, pickup process, and more. We've covered everything travelers ask before choosing a private transfer from Alicante Airport.",
            faq_q1: "1. How do I book a transfer with ARMESP?",
            faq_a1: "Booking with ARMESP is fast, simple, and always available. You can reserve your transfer anytime by filling out the booking form on our website, contacting us via WhatsApp, social media chat, direct call, or email. Choose the method that works best for you—our multilingual team is available 24/7 to confirm your ride and assist with any questions.",
            faq_q2: "2. How many passengers can travel with ARMESP Transfers?",
            faq_a2: "We accommodate all group sizes — from solo travelers to large groups. Whether you're traveling alone, with family, or with a large group, ARMESP offers the right vehicle for your needs. Just let us know the number of passengers during booking, and we’ll make sure you're matched with the most comfortable option.",
            faq_q3: "3. Can I bring extra luggage or special items?",
            faq_a3: "Yes, but please inform us in advance. ARMESP can accommodate extra bags, strollers, sports gear, or other special items — as long as we know ahead of time. This helps us assign the right vehicle for a safe and comfortable ride.",
            faq_q4: "4. What destinations does ARMESP Transfers cover?",
            faq_a4: "We provide private transfers across Spain — not just Alicante. While based at Alicante Airport, ARMESP offers reliable, door-to-door service to destinations throughout Spain, including popular cities, coastal resorts, and inland areas. Wherever you need to go, we’ll get you there comfortably and on time.",
            faq_q5: "5. Do you offer child seats or booster seats?",
            faq_a5: "Yes — and they’re free of charge. ARMESP provides child seats and booster seats upon request to ensure a safe and comfortable journey for families. Just let us know during booking, and we’ll have them ready at no extra cost.",
            faq_q6: "6. Can I make last-minute changes to my booking?",
            faq_a6: "Yes — but please let us know at least 24 hours in advance. ARMESP understands that travel plans may shift. If you need to change your pickup time, location, or passenger details, please contact us at least 24 hours before your scheduled transfer. We'll do our best to accommodate your request. Please note: cancellations are accepted, but prepayments are non-refundable.",
            faq_q7: "7. What if my flight is delayed? Will the driver wait?",
            faq_a7: "Yes — your driver tracks your flight in real-time. There’s no need to worry if your flight is delayed. ARMESP monitors all arrival times and adjusts the pickup accordingly. Your driver will be there, even if your flight is running late.",
            faq_q8: "8. How do I meet my driver at Alicante Airport?",
            faq_a8: "Your driver will meet you inside the arrivals hall. As soon as you exit the baggage area, look for your driver holding a sign with your name.",
            booking_title: "Book Your Private Transfer Now!",
            booking_headline: "Plan Your One-Way or Round-Trip Transfer in Seconds",
            booking_desc: "Choose your trip type and fill out the form to book a private airport transfer from Alicante to Benidorm, Torrevieja, Calpe, or any nearby destination. Whether you need a one-way ride or a return transfer, our quick booking system ensures instant confirmation, transparent pricing, and 24/7 reliable service.",
            trip_oneway: "One Way",
            trip_roundtrip: "Round Trip",
            contact_title: "Contact Us",
            contact_desc: "Ready to book or have questions? ARMESP Transfers’ team is available 24/7 to provide fast, friendly support. Contact us anytime — your reliable and on-time transfer starts here.",
            contact_whatsapp: "Contact us via WhatsApp",
            contact_email: "Contact us via Email",
            footer_desc: "Private Airport Transfers in Alicante. Motion Meets Comfort, Anytime, Over Local Roads!",
            first_transfer_info: "First Transfer Information",
            pickup_location: "Pick-up Location *",
            dropoff_location: "Drop-off Location *",
            pickup_date: "Pick-up Date *",
            pickup_time: "Pick-up Time * (24 hour format)",
            num_passengers: "Number of Passengers *",
            num_luggages: "Number of Luggages *",
            extra_items: "Extra Items",
            personal_info: "Personal Information",
            full_name: "Full Name *",
            phone_number: "Phone Number (with country code) *",
            email_address: "Email Address *",
            extra_requests: "Any Extra Requests or Notes",
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
            flight_number:"Flight Number"
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
            faq_q1: "1. ¿Cómo puedo reservar un traslado con ARMESP?",
            faq_a1: "Reservar con ARMESP es rápido, sencillo y siempre está disponible. Puedes solicitar tu traslado en cualquier momento completando el formulario de reserva en nuestra página web, o bien contactarnos por WhatsApp, chat en redes sociales, llamada directa o correo electrónico. Elige el método que te resulte más cómodo—nuestro equipo multilingüe está disponible las 24 horas para confirmar tu servicio y resolver cualquier consulta.",
            faq_q2: "2. ¿Cuántos pasajeros pueden viajar con ARMESP Transfers?",
            faq_a2: "Nos adaptamos a cualquier tamaño de grupo — desde viajeros solos hasta grupos grandes. Ya sea que viajes solo, en familia o con un grupo numeroso, ARMESP tiene el vehículo ideal para ti. Solo indícanos el número de pasajeros al hacer la reserva y nos encargaremos de asignarte la opción más cómoda.",
            faq_q3: "3. ¿Puedo llevar equipaje adicional o artículos especiales?",
            faq_a3: "Sí, pero te pedimos que nos informes con antelación. ARMESP puede transportar equipaje adicional, carritos de bebé, equipos deportivos u otros artículos especiales — siempre que lo sepamos con antelación. Esto nos permite asignar el vehículo adecuado para un viaje cómodo y seguro.",
            faq_q4: "4. ¿Qué destinos cubre ARMESP Transfers?",
            faq_a4: "Ofrecemos traslados privados en toda España — no solo en Alicante. Aunque nuestra base está en el Aeropuerto de Alicante, ARMESP ofrece un servicio puerta a puerta fiable hacia destinos en toda España, incluidas ciudades populares, zonas costeras y regiones del interior. Dondequiera que necesites ir, te llevamos con comodidad y puntualidad.",
            faq_q5: "5. ¿Ofrecen sillas infantiles o elevadores?",
            faq_a5: "Sí — y son totalmente gratis. ARMESP ofrece sillas infantiles y elevadores bajo solicitud para garantizar un viaje seguro y cómodo para las familias. Solo indícalo al hacer la reserva y las tendremos listas sin coste adicional.",
            faq_q6: "6. Can I make last-minute changes to my booking?",
            faq_a6: "Sí — but please let us know at least 24 hours in advance. ARMESP understands that travel plans may shift. If you need to change your pickup time, location, or passenger details, please contact us at least 24 hours before your scheduled transfer. We'll do our best to accommodate your request. Please note: cancellations are accepted, but prepayments are non-refundable.",
            faq_q7: "7. What if my flight is delayed? Will the driver wait?",
            faq_a7: "Sí — tu conductor sigue tu vuelo en tiempo real. No te preocupes si tu vuelo se retrasa. ARMESP monitoriza todas las llegadas y ajusta la recogida en consecuencia. Tu conductor estará allí, incluso si el vuelo llega con retraso.",
            faq_q8: "8. ¿Cómo encuentro a mi conductor en el Aeropuerto de Alicante?",
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
            first_transfer_info: "Información del Primer Traslado",
            pickup_location: "Lugar de Recogida *",
            dropoff_location: "Lugar de Destino *",
            pickup_date: "Fecha de Recogida *",
            pickup_time: "Hora de Recogida * (formato 24 horas)",
            num_passengers: "Número de Pasajeros *",
            num_luggages: "Número de Equipaje *",
            extra_items: "Artículos Adicionales",
            personal_info: "Información Personal",
            full_name: "Nombre Completo *",
            phone_number: "Número de Teléfono (con código de país) *",
            email_address: "Dirección de Correo Electrónico *",
            extra_requests: "Cualquier Solicitud o Nota Adicional",
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
            flight_number: "Número de vuelo"
        }
    };

    function renderHotels(destination) {
        const hotelGrid = document.getElementById('hotel-grid');
        hotelGrid.innerHTML = '';

        const hotels = destinationsData[destination];
        if (hotels) {
            hotels.forEach((hotel, index) => {
                const hotelCard = document.createElement('div');
                hotelCard.className = 'hotel-card';

                const descKey = `hotel_description_${destination}_${index}`;
                const priceKey = `hotel_price_${destination}_${index}`;
                const ctaKey = `hotel_cta_${destination}_${index}`;
                const titleKey = `hotel_title_${destination}_${index}`;

                if (!translations.en[titleKey]) {
                    translations.en[titleKey] = hotel.title;
                    translations.es[titleKey] = hotel.title;
                    translations.en[descKey] = `From Alicante Airport to ${hotel.title}`;
                    translations.es[descKey] = `Desde el Aeropuerto de Alicante hasta ${hotel.title}`;
                    translations.en[priceKey] = `Pricing starts from: ${hotel.price}`;
                    translations.es[priceKey] = `Precio desde: ${hotel.price}`;
                    translations.en[ctaKey] = "Get a Quote";
                    translations.es[ctaKey] = "Solicitar Cotización";
                }

                hotelCard.innerHTML = `
                    <div class="hotel-card-image-wrapper">
                        <img src="${hotel.image}" alt="${hotel.title}" class="hotel-card-image" onerror="this.onerror=null;this.src='';">
                    </div>
                    <div class="hotel-card-overlay"></div>
                    <div class="hotel-card-content">
                        <div>
                            <h4 class="hotel-card-title" data-translate="${titleKey}">${translations[currentLang][titleKey]}</h4>
                            <p class="hotel-card-description" data-translate="${descKey}">${translations[currentLang][descKey]}</p>
                        </div>
                        <p class="hotel-card-price" data-translate="${priceKey}">${translations[currentLang][priceKey]}</p>
                    </div>
                    <a href="#trip-form" class="hotel-card-hover-button" data-translate="${ctaKey}">${translations[currentLang][ctaKey]}</a>
                `;

                hotelGrid.appendChild(hotelCard);
            });
        }
    }

    function selectDestination(selectedButton) {
        const buttons = document.querySelectorAll('.destination-button');
        buttons.forEach(button => {
            button.classList.remove('selected');
        });
        selectedButton.classList.add('selected');
        const destination = selectedButton.dataset.destination;
        renderHotels(destination);
    }

    const destinationButtonsContainer = document.getElementById('destination-buttons');
    destinationButtonsContainer.addEventListener('click', (event) => {
        const button = event.target.closest('.destination-button');
        if (button) {
            selectDestination(button);
        }
    });

    function setLanguage(lang) {
        currentLang = lang;
        document.querySelectorAll("[data-translate]").forEach(el => {
            const key = el.getAttribute("data-translate");
            const text = translations[lang][key];

            if (text) {
                if (text.includes("<")) {
                    el.innerHTML = text;
                } else {
                    el.textContent = text;
                }
            }
        });
    }

    document.querySelectorAll(".dropdown li").forEach(item => {
        item.addEventListener("click", () => {
            const lang = item.getAttribute("data-lang");
            const short = item.getAttribute("data-short");
            const flag = item.querySelector("img").outerHTML;

            document.getElementById("selected-lang").innerHTML = `
                ${flag} ${short}
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <g clip-path="url(#clip0_3208_683)">
                    <path d="M8 12L16 20L24 12" stroke="#1F1F1F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                    <clipPath id="clip0_3208_683">
                    <rect width="32" height="32" fill="white"/>
                    </clipPath>
                </defs>
                </svg>
            `;

            setLanguage(lang);
            const activeDestinationButton = document.querySelector('.destination-button.selected');
            if (activeDestinationButton) {
                renderHotels(activeDestinationButton.dataset.destination);
            }
        });
    });

    const defaultButton = document.querySelector('.destination-button[data-destination="alicante"]');
    if (defaultButton) {
        selectDestination(defaultButton);
    }


    document.querySelectorAll(".transfer-form").forEach((form, index) => {
        const modalId = index === 0 ? "successModalOne" : "successModal";

        form.querySelectorAll("input, select, textarea, .custom-select input[type='hidden']").forEach(input => {
            ["input", "change"].forEach(evt => {
                input.addEventListener(evt, () => {
                    if (input.value.trim()) {
                        const group = input.closest(".form-group");
                        if (group && group.classList.contains("error")) {
                            group.classList.remove("error");
                            const msg = group.querySelector(".error-message");
                            if (msg) msg.remove();
                        }
                    }
                });
            });
        });
        
const timeInput = document.getElementById('oneway-pickup-time-1'); 
const timeInput1 = document.getElementById('roundtrip-pickup-time-2');
const timeInput2 = document.getElementById('roundtrip-pickup-time-return') 

function autoFormatTime(input) {
  if (!input) return;
  input.addEventListener('input', function(e) {
    let cleanValue = e.target.value.replace(/\D/g, '').substring(0, 4);
    if (cleanValue.length > 2) {
      e.target.value = `${cleanValue.slice(0, 2)}:${cleanValue.slice(2)}`;
    } else {
      e.target.value = cleanValue;
    }
  });
}

autoFormatTime(timeInput);
autoFormatTime(timeInput1);
autoFormatTime(timeInput2);

form.addEventListener("submit", async e => {
    e.preventDefault();
    let isValid = true;

    form.querySelectorAll(".error-message").forEach(el => el.remove());
    form.querySelectorAll(".form-group").forEach(el => el.classList.remove("error"));

    form.querySelectorAll("[required]").forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            const group = input.closest(".form-group");
            group.classList.add("error");
            const msg = document.createElement("div");
            msg.className = "error-message";
            msg.setAttribute("data-translate", "field_required");
            msg.textContent = translations[currentLang]['field_required'];
            group.appendChild(msg);
        }
    });

    form.querySelectorAll("input[type='email']").forEach(input => {
        const value = input.value.trim();
        if (value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
            isValid = false;
            const group = input.closest(".form-group");
            group.classList.add("error");
            const msg = document.createElement("div");
            msg.className = "error-message";
            msg.setAttribute("data-translate", "invalid_email");
            msg.textContent = translations[currentLang]['invalid_email'];
            group.appendChild(msg);
        }
    });

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth() + 1;
    const currentDay = today.getDate();

    form.querySelectorAll(".form-group.date-select").forEach(group => {
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const monthName = group.querySelector(".custom-select[data-type='month'] .selected-text").textContent;

        const day = parseInt(group.querySelector(".custom-select[data-type='day'] .selected-text").textContent) || 0;
        const month = monthNames.indexOf(monthName) + 1;
        const year = parseInt(group.querySelector(".custom-select[data-type='year'] .selected-text").textContent) || 0;

        const isLeapYear = y => (y % 4 === 0 && y % 100 !== 0) || (y % 400 === 0);

        let maxDay = 31;
        if ([4, 6, 9, 11].includes(month)) maxDay = 30;
        if (month === 2) maxDay = isLeapYear(year) ? 29 : 28;

        if (!day || month === 0 || !year || day > maxDay) {
            isValid = false;
            group.classList.add("error");
            const msg = document.createElement("div");
            msg.className = "error-message";
            msg.setAttribute("data-translate", "invalid_date");
            msg.textContent = translations[currentLang]['invalid_date'];
            group.appendChild(msg);
        }

        else if ((year < currentYear) ||
                 (year === currentYear && month < currentMonth) ||
                 (year === currentYear && month === currentMonth && day < currentDay)) {
            isValid = false;
            group.classList.add("error");
            const msg = document.createElement("div");
            msg.className = "error-message";
            msg.setAttribute("data-translate", "past_date_error");
            msg.textContent = translations[currentLang]['past_date_error'];
            group.appendChild(msg);
        }
    });

    if (isValid) {
        const formData = new FormData(form);
        let data = {};
        formData.forEach((value, key) => data[key] = value);

        let webhookUrl = form.id === "oneway-transfer-form" ?
            "https://discord.com/api/webhooks/1407413644882346128/Q6xf0205wHX_K7ATSo4itWvGKsIwmX51HKENTtXFsg6xNif_yQwp7y5-KMfpS0MguWZr" :
            "https://discord.com/api/webhooks/1407414660562681886/M5oZOGenN2eALTyxWrX5adda_1hJvVXgMqbdeVL_Q9IG73iS6TrLxvw_aTUXjlju3cXr";

        await fetch(webhookUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                content: "New Transfer Request",
                embeds: [{
                    title: "Transfer Form Submission",
                    color: 5814783,
                    fields: Object.entries(data).map(([key, value]) => ({
                        name: key,
                        value: value || "—",
                        inline: false
                    })),
                    timestamp: new Date().toISOString()
                }]
            })
        });

        document.getElementById(modalId).style.display = "block";
        document.getElementById("modalOverlay").style.display = "block";
        document.body.classList.add("modal-open");

        form.reset();
        form.querySelectorAll(".custom-select").forEach(sel => {
            const type = sel.dataset.type;
            sel.querySelector(".selected-text").textContent =
                type === "day" ? "Day" :
                type === "month" ? "Month" :
                type === "year" ? "Year" :
                sel.dataset.i18n || "Select";
        });
    }
});

        document.querySelectorAll(".close-btn").forEach(btn => {
            btn.addEventListener("click", (e) => {
                e.preventDefault();
                const modal = btn.closest(".modal, .modalone");
                if (modal) modal.style.display = "none";
                document.getElementById("modalOverlay").style.display = "none";
                document.body.classList.remove("modal-open");
            });
        });
    });

    const currentYear = new Date().getFullYear();

    document.querySelectorAll(".custom-select").forEach(select => {
        const optionsContainer = select.querySelector(".options");
        const type = select.dataset.type;

        let items = [];

        if(type === "day") {
            for(let d = 1; d <= 31; d++) items.push(d);
        }
        else if(type === "month") {
            items = [
                "January","February","March","April","May","June",
                "July","August","September","October","November","December"
            ];
        }
        else if(type === "year") {
            for(let y = currentYear; y <= currentYear + 2; y++) items.push(y);
        }

        items.forEach(item => {
            const li = document.createElement("li");
            li.textContent = item;
            optionsContainer.appendChild(li);
        });
    });

    document.querySelectorAll(".custom-select").forEach(select => {
        const selected = select.querySelector(".selected-text");
        const options = select.querySelector(".options");

        const selectedDiv = select.querySelector(".selected"); 
        selectedDiv.addEventListener("click", () => {
            select.classList.toggle("active");
        });

        options.querySelectorAll("li").forEach(option => {
            option.addEventListener("click", () => {
                const selectedText = select.querySelector(".selected-text");
                selectedText.textContent = option.textContent;
                selectedText.classList.add("active");
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
                if (group && group.classList.contains("error")) {
                    group.classList.remove("error");
                }
                select.querySelector(".selected").classList.remove("error");
                const msg = group.querySelector(".error-message");
                if (msg) msg.remove();
            });
        });
    });

    document.addEventListener("click", e => {
        document.querySelectorAll(".custom-select.active").forEach(select => {
            if(!select.contains(e.target)) select.classList.remove("active");
        });
    });

    const requestButtons = document.querySelectorAll(".another-request");

    requestButtons.forEach(button => {
        button.addEventListener("click", (e) => {
        e.preventDefault();

        const modal = button.closest(".modal, .modalone");
        if (modal) {
            modal.style.display = "none";
            document.body.classList.remove("modal-open");
            document.getElementById("modalOverlay").style.display = "none";
        }
        });
    });

});
