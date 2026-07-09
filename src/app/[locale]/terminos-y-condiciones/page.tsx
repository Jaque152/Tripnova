"use client";

import { useLocale } from 'next-intl';
import { LegalPage } from "@/components/LegalPage";

const sectionsES = [
  {
    heading: "Introducción",
    content: `Términos y Condiciones – ARNUG, S.A. DE C.V. (TRIP NOVA)
Última actualización: 23 de junio 2026.

Estos Términos y Condiciones regulan el acceso, navegación, cotización, contratación y uso del sitio web tripnova.com.mx (en adelante el “Sitio”), así como de los servicios, productos, itinerarios, experiencias, planes, asesorías, contenidos digitales y propuestas personalizadas que ponemos a disposición de las personas usuarias. Al ingresar, navegar, cotizar, enviar formularios, solicitar información, contratar o pagar cualquiera de nuestros servicios, aceptas estos Términos y Condiciones.`
  },
  {
    heading: "PRIMERA.- Identidad del prestador",
    content: `Somos una empresa dedicada al diseño, recomendación, comercialización, coordinación y, en su caso, gestión de experiencias turísticas, itinerarios, servicios de planeación de viaje, actividades de bienestar, experiencias culturales, gastronómicas, de aventura y servicios relacionados dentro de la República Mexicana. La denominación social, domicilio, correo electrónico y demás datos de identificación legal quedarán señalados como sigue:

Denominación: ARNUG, S.A. DE C.V.
Domicilio: Avenida Coyoacán 1878, Piso 14 Dep. 1405 – A, Colonia Del Valle Benito Juárez, Ciudad de Mexico, C.P. 03100.
Correo: info@tripnova.com.mx`
  },
  {
    heading: "SEGUNDA.- Alcance de nuestros servicios",
    content: `Nuestros servicios pueden incluir, según el plan o experiencia contratada: itinerarios digitales, itinerarios personalizados, recomendaciones de hospedaje, restaurantes, rutas, actividades, experiencias culturales o de bienestar, guías de viaje, propuestas a medida, asesoría previa al viaje, apoyo de coordinación, y servicios de concierge o acompañamiento. De acuerdo con la descripción publicada en el sitio, también ofrecemos experiencias específicas por persona, itinerarios temáticos, planes para viajeros solos, parejas, familias o grupos, y cotizaciones personalizadas conforme al destino, número de personas, duración, tipo de experiencia y presupuesto aproximado.

Algunos servicios consisten exclusivamente en planeación, diseño de ruta, entrega de información, recomendaciones o asesoría; otros pueden incluir coordinación de reservas o vinculación con terceros. En los casos en que una reserva, traslado, hospedaje, tour, entrada o actividad sea prestada materialmente por un tercero, nuestra participación podrá limitarse a la intermediación, recomendación, gestión o coordinación, según se indique en cada caso.`
  },
  {
    heading: "TERCERA.- Capacidad para contratar y uso permitido",
    content: `Solo podrán contratar nuestros servicios las personas con capacidad legal suficiente para obligarse conforme a la legislación aplicable. Si una persona contrata en nombre de un grupo, familia, pareja, empresa u otra persona, entendemos que cuenta con autorización suficiente para hacerlo y para aceptar estos Términos y Condiciones en representación de todas las personas viajeras incluidas en la solicitud.

Te comprometes a utilizar el sitio y nuestros servicios de manera lícita, veraz y acorde con su finalidad. Queda prohibido usar el sitio para realizar actos fraudulentos, suplantar identidades, proporcionar información falsa, intentar vulnerar su funcionamiento, copiar contenidos sin autorización o utilizar nuestras propuestas, materiales, itinerarios o documentos con fines comerciales no autorizados.`
  },
  {
    heading: "CUARTA.- Información proporcionada por la persona usuaria",
    content: `Para poder elaborar cotizaciones, itinerarios o propuestas personalizadas, podremos solicitar datos como destino o destinos de interés, número de personas, duración del viaje, tipo de experiencia buscada, presupuesto aproximado, nombre, correo electrónico, teléfono y cualquier otra información razonablemente necesaria para diseñar el servicio. La persona usuaria es responsable de que toda la información proporcionada sea exacta, completa y actualizada.

No seremos responsables por errores, omisiones, costos, afectaciones, propuestas inadecuadas o imposibilidad de prestar correctamente el servicio cuando estos deriven de información incompleta, inexacta o entregada fuera de tiempo por parte de la persona usuaria.`
  },
  {
    heading: "QUINTA.- Naturaleza de las propuestas, itinerarios y recomendaciones",
    content: `Nuestras propuestas, itinerarios, guías, mapas, listas de lugares, recomendaciones y documentos digitales se elaboran con base en información disponible al momento de su preparación, criterios de planeación, experiencia operativa y referencias consideradas confiables. Sin embargo, las condiciones de viaje pueden cambiar por causas ajenas a nosotros, incluyendo disponibilidad, clima, cierres temporales, restricciones de acceso, cambios de horario, saturación, decisiones de autoridades, prestadores locales o condiciones de seguridad.

Por ello, salvo que expresamente se indique como servicio confirmado con reserva formal, nuestros itinerarios y recomendaciones deben entenderse como una herramienta de planeación y orientación, no como garantía absoluta de disponibilidad, acceso, horario, tarifa, continuidad operativa o resultado específico.`
  },
  {
    heading: "SEXTA.- Servicios prestados por terceros",
    content: `En diversos casos, los servicios turísticos efectivos pueden ser proporcionados por terceros, tales como hoteles, anfitriones, guías, transportistas, operadores de tours, recintos, restaurantes, centros de bienestar, comunidades, artesanos, espacios naturales, agencias de renta de autos u otros proveedores. Cuando ello ocurra, dichos terceros serán responsables directos de sus propios servicios, instalaciones, disponibilidad, atención, seguridad, operación, permisos, pólizas, restricciones, reglas, calidad y cumplimiento.

Nosotros no sustituimos la responsabilidad legal de los terceros prestadores ni respondemos por actos, omisiones, incumplimientos, cancelaciones, cambios, accidentes, pérdidas, retrasos, cierres, lesiones, enfermedades, mala prestación del servicio, negativa de acceso o cualquier situación generada directamente por ellos, salvo en aquello que la ley expresamente nos imponga por nuestra intervención específica.`
  },
  {
    heading: "SÉPTIMA.- Precios, moneda e impuestos",
    content: `Los precios publicados en el sitio están expresados en pesos mexicanos y, conforme a la información del propio sitio, incluyen IVA. Asimismo, el sitio indica que el pago de ciertos planes es único por el plan seleccionado y que algunos servicios pueden requerir costos adicionales dependiendo de reservas de hoteles, tours o experiencias específicas.

Salvo que se indique expresamente lo contrario, el precio publicado corresponde únicamente al servicio descrito en cada ficha o propuesta y no incluye conceptos no mencionados, como transporte foráneo, vuelos, hospedaje, alimentos, propinas, seguros amplios, entradas no especificadas, gastos personales, impuestos locales adicionales, cambios solicitados después de la entrega o cualquier otro concepto extraordinario.

En servicios personalizados o de concierge, podremos emitir cotizaciones particulares con vigencia limitada. Toda cotización estará sujeta a cambios si la persona usuaria modifica el alcance, fechas, número de viajeros, destino, tipo de experiencia o servicios requeridos.`
  },
  {
    heading: "OCTAVA.- Formas de pago y confirmación",
    content: `El sitio indica que el pago puede realizarse en línea con tarjeta de forma segura. La contratación se considerará solicitada cuando recibamos la orden correspondiente, pero solo se tendrá por confirmada una vez que el pago haya sido autorizado, recibido y validado, y cuando además hayamos enviado confirmación expresa del servicio contratado, cuando ello resulte aplicable.

Nos reservamos el derecho de rechazar, suspender o cancelar solicitudes de compra o contratación cuando detectemos inconsistencias, errores manifiestos de precio, sospechas de fraude, cargos no reconocidos, datos incompletos, imposibilidad operativa o cualquier circunstancia que razonablemente justify una revisión. En esos casos, procederemos conforme corresponda con la aclaración, reprogramación o reembolso aplicable.`
  },
  {
    heading: "NOVENA.- Entrega de itinerarios, documentos y servicios digitales",
    content: `Los servicios digitales, como itinerarios, guías descargables, mapas, recomendaciones, propuestas o documentos personalizados, se entregarán por el medio que indiquemos al momento de la compra o confirmación, ya sea mediante correo electrónico, archivo digital, enlace de descarga, mensajería u otro canal acordado. Los tiempos de entrega podrán variar según la complejidad del servicio, el nivel de personalización y la oportunidad con la que la persona usuaria proporcione la información necesaria.

Cuando un servicio dependa de validación previa, videollamada, levantamiento de requerimientos o confirmación de destino, el plazo de entrega empezará a correr a partir de que contemos con todos los datos necesarios para desarrollarlo.`
  },
  {
    heading: "DÉCIMA.- Cambios solicitados por la persona usuaria",
    content: `Si la persona usuaria solicita modificaciones al destino, fechas, número de viajeros, enfoque del viaje, presupuesto, tipo de experiencia o cualquier otro elemento sustancial después de haber iniciado la elaboración del servicio, podremos ajustar tiempos de entrega, alcance y costo. Algunas modificaciones podrán considerarse una actualización menor, mientras que otras podrán implicar la contratación de un nuevo servicio o el cobro de diferencias.

En particular, cuando el servicio contratado sea un plan estratégico, itinerario personalizado, concierge, paquete armado o propuesta a medida, cualquier cambio relevante posterior a la confirmación podrá estar sujeto a nueva valoración operativa y económica.`
  },
  {
    heading: "DÉCIMA PRIMERA.- Reservas, disponibilidad y costos adicionales",
    content: `Cuando un servicio incluya o contemple apoyo con reservas, sugerencias de hospedaje, tours, renta de autos, actividades, entradas u otros componentes prestados por terceros, su disponibilidad dependerá de la oferta existente al momento de la gestión o contratación real. El hecho de que un servicio o precio aparezca en una propuesta, itinerario o recomendación no implica por sí mismo bloqueo de espacios ni garantía de disponibilidad futura.

Los costos adicionales por reservas, hoteles, tours, seguros, transportes, ajustes de temporada, tarifas dinámicas, políticas de terceros o requerimientos especiales correrán a cargo de la persona usuaria, salvo pacto expreso en contrario.`
  },
  {
    heading: "DÉCIMA SEGUNDA.- Obligaciones de la persona viajera",
    content: `Corresponde exclusivamente a cada persona viajera verificar y cumplir con los requisitos necesarios para realizar su viaje o participar en la experiencia contratada, incluyendo documentación personal, identificaciones, permisos, estado de salud, condición física, restricciones alimentarias, contraindicaciones médicas, requisitos de edad, reglas del operador, horarios de presentación y cualquier condición particular aplicable.

En actividades de aventura, naturaleza, bienestar, temazcal, trekking, cuevas, rafting, cenotes, recorridos comunitarios u otras actividades que impliquen exigencia física, contacto con entornos naturales o condiciones especiales, la persona usuaria reconoce que pueden existir riesgos inherentes y se obliga a seguir todas las instrucciones, advertencias y medidas de seguridad emitidas por el operador correspondiente.`
  },
  {
    heading: "DÉCIMA TERCERA.- Salud, seguridad y riesgos inherentes",
    content: `Algunas experiencias turísticas pueden implicar esfuerzo físico, exposición a condiciones climáticas variables, terrenos irregulares, agua, calor, altura, fauna, alimentos regionales, prácticas tradicionales, transporte terrestre o dinámicas grupales. La contratación de estos servicios implica el reconocimiento de que existen riesgos normales e inherentes a este tipo de actividades.

Será responsabilidad de cada persona viajera informar oportunamente sobre padecimientos, lesiones, embarazo, alergias, limitaciones de movilidad, requerimientos especiales o cualquier circunstancia que pueda afectar su participación segura. Nos reservamos el derecho de abstenernos de recomendar, gestionar o confirmar ciertas experiencias cuando advirtamos que pueden no ser adecuadas para el perfil de la persona viajera o cuando el proveedor tercero así lo determine.`
  },
  {
    heading: "DÉCIMA CUARTA.- Política de conducta y derecho de admisión de terceros",
    content: `Las personas usuarias y viajeras deberán conducirse con respeto hacia comunidades anfitrionas, personal operativo, guías, prestadores, artesanos, anfitriones, otros viajeros y entornos naturales o culturales. Cualquier conducta agresiva, discriminatoria, riesgosa, ilícita, abusiva o contraria a reglas básicas de convivencia podrá dar lugar a la suspensión del servicio, cancelación de actividades o negativa de acceso por parte nuestra o del tercero proveedor, sin responsabilidad para nosotros ni obligación de reembolso cuando la causa sea imputable a la persona usuaria.`
  },
  {
    heading: "DÉCIMA QUINTA.- Fuerza mayor y caso fortuito",
    content: `No seremos responsables por incumplimientos, retrasos, reprogramaciones, cancelaciones o modificaciones derivadas de eventos fuera de nuestro control razonable, tales como fenómenos naturales, contingencias sanitarias, actos de autoridad, bloqueos, conflictos sociales, inseguridad, accidentes, fallas de comunicaciones, cierres carreteros, restricciones operativas, desastres naturales, falta de disponibilidad sobrevenida o cualquier supuesto de caso fortuito o fuerza mayor.

En tales casos, podremos buscar alternativas razonables, reprogramar, emitir saldos a favor o aplicar las condiciones que resulten viables conforme a la naturaleza del servicio y las políticas de terceros involucrados.`
  },
  {
    heading: "DÉCIMA SEXTA.- Propiedad intelectual",
    content: `Todo el contenido del sitio, incluyendo textos, estructura, diseño, selección de destinos, descripciones, formatos, documentos, mapas, rutas, propuestas, metodología de planeación, materiales descargables, imágenes, logotipos, compilaciones y demás elementos, es de nuestra titularidad o se utiliza con autorización legítima.

La contratación de un servicio no transmite derechos de propiedad intelectual sobre nuestros materiales. La persona usuaria podrá utilizar el contenido entregado únicamente para fines personales y de uso propio vinculados con su viaje, y no podrá copiarlo, comercializarlo, reproducirlo, redistribuirlo, sublicenciarlo o explotarlo de manera distinta sin autorización previa y por escrito.`
  },
  {
    heading: "DÉCIMA SÉPTIMA.- Promociones, descuentos y vigencia de ofertas",
    content: `Cualquier promoción, descuento, beneficio, campaña temporal o precio especial estará sujeto a la vigencia, alcance, condiciones y disponibilidad que se indiquen en cada caso. Nos reservamos el derecho de modificar o retirar promociones cuando concluyan su vigencia, exista error manifiesto o se detecte uso indebido.`
  },
  {
    heading: "DÉCIMA OCTAVA.- Comunicaciones",
    content: `La persona usuaria acepta que podremos contactarla por correo electrónico, teléfono, mensajería o cualquier medio proporcionado para dar seguimiento a su solicitud, confirmar servicios, recabar información, compartir entregables, notificar cambios operativos o atender aclaraciones relacionadas con la contratación.`
  },
  {
    heading: "DÉCIMA NOVENA.- Limitación de responsabilidad",
    content: `En la máxima medida permitida por la legislación aplicable, nuestra responsabilidad total frente a la persona usuaria por cualquier reclamación derivada de la contratación o uso de nuestros servicios se limitará al monto efectivamente pagado por el servicio específico que haya dado origen a la reclamación.

No seremos responsables por daños indirectos, incidentales, consecuenciales, lucro cesante, pérdida de oportunidad, pérdida de disfrute del viaje, gastos imprevistos, pérdidas derivadas de decisiones personales de viaje ni por hechos atribuibles a terceros prestadores, autoridades o circunstancias fuera de nuestro control razonable.`
  },
  {
    heading: "VIGÉSIMA.- Cancelación o suspensión por nuestra parte",
    content: `Podremos cancelar o suspender servicios cuando exista imposibilidad material de cumplimiento, incumplimiento de la persona usuaria, falta de colaboración esencial, información falsa, conducta indebida, sospecha razonable de fraude, riesgo para la seguridad o cualquier situación que haga inviable continuar con la prestación. En su caso, procederemos conforme a la naturaleza del servicio ya ejecutado y a la política de reembolsos aplicable.`
  },
  {
    heading: "VIGÉSIMA PRIMERA.- Datos personales",
    content: `El tratamiento de datos personales se regirá por nuestro Aviso de Privacidad, disponible en nuestro Sitio. La persona usuaria reconoce que ciertos datos serán necesarios para cotizar, contratar, diseñar experiencias personalizadas, dar seguimiento a servicios y, en su caso, coordinar con terceros prestadores, siempre conforme a la normativa aplicable.`
  },
  {
    heading: "VIGÉSIMA SEGUNDA.- Nulidad parcial",
    content: `Si alguna disposición de estos Términos y Condiciones llegara a considerarse inválida, ilegal o inaplicable por autoridad competente, las demás disposiciones permanecerán vigentes y se interpretarán de forma que conserve, en la mayor medida posible, su finalidad original.`
  },
  {
    heading: "VIGÉSIMA TERCERA.- Modificaciones",
    content: `Podremos actualizar estos Términos y Condiciones en cualquier momento para reflejar cambios legales, operativos, comerciales o de funcionamiento del sitio. La versión vigente será la publicada en el sitio en la fecha de su última actualización. El uso posterior del sitio o la contratación posterior de servicios implicará la aceptación de la versión actualizada.`
  },
  {
    heading: "VIGÉSIMA CUARTA.- Legislación aplicable y jurisdicción",
    content: `Estos Términos y Condiciones se interpretarán conforme a las leyes aplicables en los Estados Unidos Mexicanos. Para la atención de cualquier controversia derivada de su interpretación, cumplimiento o ejecución, las partes se someterán a los Tribunales competentes de la Ciudad de México.

Al solicitar una cotización, contratar o pagar cualquiera de nuestros servicios, confirmas que has leído y aceptas los presentes Términos y Condiciones, así como nuestro Aviso de Privacidad y, en su caso, la Política de Reembolsos.`
  }
];

const sectionsEN = [
  {
    heading: "Introduction",
    content: `Terms and Conditions – ARNUG, S.A. DE C.V. (TRIP NOVA)
Last update: June 23, 2026.

These Terms and Conditions regulate the access, navigation, quoting, contracting, and use of the website tripnova.com.mx (hereinafter the "Site"), as well as the services, products, itineraries, experiences, plans, consulting, digital content, and personalized proposals that we make available to users. By entering, browsing, quoting, submitting forms, requesting information, contracting, or paying for any of our services, you accept these Terms and Conditions.`
  },
  {
    heading: "FIRST.- Identity of the provider",
    content: `We are a company dedicated to the design, recommendation, commercialization, coordination and, where appropriate, management of tourist experiences, itineraries, travel planning services, wellness activities, cultural, gastronomic, and adventure experiences, and related services within the Mexican Republic. The corporate name, address, email, and other legal identification data are as follows:

Name: ARNUG, S.A. DE C.V.
Address: Avenida Coyoacán 1878, Piso 14 Dep. 1405 – A, Colonia Del Valle Benito Juárez, Mexico City, C.P. 03100.
Email: info@tripnova.com.mx`
  },
  {
    heading: "SECOND.- Scope of our services",
    content: `Our services may include, depending on the plan or experience contracted: digital itineraries, personalized itineraries, recommendations for accommodation, restaurants, routes, activities, cultural or wellness experiences, travel guides, custom proposals, pre-trip consulting, coordination support, and concierge or accompaniment services. According to the description published on the site, we also offer specific per-person experiences, thematic itineraries, plans for solo travelers, couples, families or groups, and personalized quotes based on destination, number of people, duration, type of experience, and approximate budget.

Some services consist exclusively of planning, route design, information delivery, recommendations or advice; others may include reservation coordination or linking with third parties. In cases where a reservation, transfer, accommodation, tour, ticket, or activity is physically provided by a third party, our participation may be limited to intermediation, recommendation, management, or coordination, as indicated in each case.`
  },
  {
    heading: "THIRD.- Capacity to contract and permitted use",
    content: `Only persons with sufficient legal capacity to bind themselves according to applicable law may contract our services. If a person contracts on behalf of a group, family, couple, company or another person, we understand they have sufficient authorization to do so and to accept these Terms and Conditions on behalf of all travelers included in the request.

You agree to use the site and our services in a lawful, truthful manner and in accordance with their purpose. It is prohibited to use the site to commit fraudulent acts, impersonate identities, provide false information, attempt to breach its operation, copy content without authorization, or use our proposals, materials, itineraries, or documents for unauthorized commercial purposes.`
  },
  {
    heading: "FOURTH.- Information provided by the user",
    content: `In order to prepare quotes, itineraries, or personalized proposals, we may request data such as destination or destinations of interest, number of people, travel duration, type of experience sought, approximate budget, name, email, phone number, and any other information reasonably necessary to design the service. The user is responsible for ensuring that all provided information is accurate, complete, and up-to-date.

We will not be responsible for errors, omissions, costs, impacts, inadequate proposals, or the impossibility of providing the service correctly when these derive from incomplete, inaccurate, or untimely information provided by the user.`
  },
  {
    heading: "FIFTH.- Nature of proposals, itineraries, and recommendations",
    content: `Our proposals, itineraries, guides, maps, lists of places, recommendations, and digital documents are prepared based on information available at the time of their preparation, planning criteria, operational experience, and references considered reliable. However, travel conditions may change due to causes beyond our control, including availability, weather, temporary closures, access restrictions, schedule changes, saturation, decisions of authorities, local providers, or safety conditions.

Therefore, unless expressly indicated as a confirmed service with a formal reservation, our itineraries and recommendations should be understood as a planning and guidance tool, not as an absolute guarantee of availability, access, schedule, rate, operational continuity, or specific result.`
  },
  {
    heading: "SIXTH.- Services provided by third parties",
    content: `In many cases, the actual tourism services may be provided by third parties, such as hotels, hosts, guides, transporters, tour operators, venues, restaurants, wellness centers, communities, artisans, natural spaces, car rental agencies, or other suppliers. When this occurs, these third parties will be directly responsible for their own services, facilities, availability, attention, safety, operation, permits, policies, restrictions, rules, quality, and compliance.

We do not substitute the legal responsibility of third-party providers, nor are we liable for acts, omissions, breaches, cancellations, changes, accidents, losses, delays, closures, injuries, illnesses, poor service provision, denial of access, or any situation generated directly by them, except for what the law expressly imposes on us due to our specific intervention.`
  },
  {
    heading: "SEVENTH.- Prices, currency, and taxes",
    content: `The prices published on the site are expressed in Mexican pesos and, according to the information on the site itself, include VAT. Likewise, the site indicates that the payment for certain plans is a one-time fee for the selected plan and that some services may require additional costs depending on reservations for hotels, tours, or specific experiences.

Unless expressly stated otherwise, the published price corresponds only to the service described in each tab or proposal and does not include items not mentioned, such as long-distance transportation, flights, accommodation, meals, tips, comprehensive insurance, unspecified entrance fees, personal expenses, additional local taxes, changes requested after delivery, or any other extraordinary concept.

For personalized or concierge services, we may issue private quotes with limited validity. Any quote will be subject to changes if the user modifies the scope, dates, number of travelers, destination, type of experience, or required services.`
  },
  {
    heading: "EIGHTH.- Payment methods and confirmation",
    content: `The site indicates that payment can be made securely online by credit/debit card. Contracting will be considered requested when we receive the corresponding order, but it will only be considered confirmed once the payment has been authorized, received, and validated, and when we have sent express confirmation of the contracted service, when applicable.

We reserve the right to reject, suspend, or cancel purchase or contracting requests when we detect inconsistencies, manifest pricing errors, suspected fraud, unrecognized charges, incomplete data, operational impossibility, or any circumstance that reasonably justifies a review. In these cases, we will proceed accordingly with clarification, rescheduling, or applicable refund.`
  },
  {
    heading: "NINTH.- Delivery of itineraries, documents, and digital services",
    content: `Digital services, such as itineraries, downloadable guides, maps, recommendations, proposals, or custom documents, will be delivered through the method indicated at the time of purchase or confirmation, whether via email, digital file, download link, messaging, or another agreed channel. Delivery times may vary depending on the complexity of the service, the level of personalization, and the promptness with which the user provides the necessary information.

When a service depends on prior validation, video call, requirements gathering, or destination confirmation, the delivery period will begin once we have all the data necessary to develop it.`
  },
  {
    heading: "TENTH.- Changes requested by the user",
    content: `If the user requests modifications to the destination, dates, number of travelers, trip focus, budget, type of experience, or any other substantial element after the preparation of the service has begun, we may adjust delivery times, scope, and cost. Some modifications may be considered a minor update, while others may imply contracting a new service or charging differences.

In particular, when the contracted service is a strategic plan, personalized itinerary, concierge, bundled package, or custom proposal, any relevant change after confirmation may be subject to new operational and economic assessment.`
  },
  {
    heading: "ELEVENTH.- Reservations, availability, and additional costs",
    content: `When a service includes or involves assistance with reservations, suggestions for accommodation, tours, car rentals, activities, tickets, or other components provided by third parties, their availability will depend on the existing offer at the time of actual management or contracting. The fact that a service or price appears in a proposal, itinerary, or recommendation does not in itself imply blocking spaces or a guarantee of future availability.

Additional costs for reservations, hotels, tours, insurance, transportation, seasonal adjustments, dynamic pricing, third-party policies, or special requirements will be borne by the user, unless expressly agreed otherwise.`
  },
  {
    heading: "TWELFTH.- Obligations of the traveler",
    content: `It is exclusively up to each traveler to verify and comply with the necessary requirements to carry out their trip or participate in the contracted experience, including personal documentation, IDs, permits, health status, physical condition, dietary restrictions, medical contraindications, age requirements, operator rules, presentation times, and any specific applicable condition.

In adventure, nature, wellness, temazcal, trekking, caving, rafting, cenotes, community tours, or other activities that involve physical demands, contact with natural environments, or special conditions, the user acknowledges that there may be inherent risks and agrees to follow all instructions, warnings, and safety measures issued by the corresponding operator.`
  },
  {
    heading: "THIRTEENTH.- Health, safety, and inherent risks",
    content: `Some tourist experiences may involve physical effort, exposure to variable weather conditions, uneven terrain, water, heat, altitude, wildlife, regional foods, traditional practices, ground transportation, or group dynamics. Contracting these services implies the recognition that normal risks inherent to these types of activities exist.

It will be the responsibility of each traveler to provide timely information about illnesses, injuries, pregnancy, allergies, mobility limitations, special requirements, or any circumstance that could affect their safe participation. We reserve the right to refrain from recommending, managing, or confirming certain experiences when we notice they may not be suitable for the traveler's profile or when the third-party provider determines so.`
  },
  {
    heading: "FOURTEENTH.- Code of conduct and third-party right of admission",
    content: `Users and travelers must conduct themselves with respect toward host communities, operational staff, guides, providers, artisans, hosts, other travelers, and natural or cultural environments. Any aggressive, discriminatory, risky, illicit, abusive conduct, or behavior contrary to basic rules of coexistence may lead to suspension of the service, cancellation of activities, or denial of access by us or the third-party provider, without liability for us or obligation to refund when the cause is attributable to the user.`
  },
  {
    heading: "FIFTEENTH.- Force majeure and acts of God",
    content: `We will not be responsible for breaches, delays, rescheduling, cancellations, or modifications resulting from events beyond our reasonable control, such as natural phenomena, health contingencies, acts of authority, blockades, social conflicts, insecurity, accidents, communication failures, road closures, operational restrictions, natural disasters, sudden lack of availability, or any case of force majeure or acts of God.

In such cases, we may seek reasonable alternatives, reschedule, issue credits, or apply conditions that are viable according to the nature of the service and the policies of the third parties involved.`
  },
  {
    heading: "SIXTEENTH.- Intellectual Property",
    content: `All site content, including texts, structure, design, destination selection, descriptions, formats, documents, maps, routes, proposals, planning methodology, downloadable materials, images, logos, compilations, and other elements, is our property or used with legitimate authorization.

Contracting a service does not transfer intellectual property rights over our materials. The user may use the delivered content solely for personal purposes linked to their trip, and may not copy, commercialize, reproduce, redistribute, sublicense, or exploit it in any other way without prior written authorization.`
  },
  {
    heading: "SEVENTEENTH.- Promotions, discounts, and validity of offers",
    content: `Any promotion, discount, benefit, temporary campaign, or special price will be subject to the validity, scope, conditions, and availability indicated in each case. We reserve the right to modify or withdraw promotions when they expire, if there is a manifest error, or if misuse is detected.`
  },
  {
    heading: "EIGHTEENTH.- Communications",
    content: `The user agrees that we may contact them by email, phone, messaging, or any provided means to follow up on their request, confirm services, gather information, share deliverables, notify operational changes, or handle clarifications related to the contract.`
  },
  {
    heading: "NINETEENTH.- Limitation of liability",
    content: `To the maximum extent permitted by applicable law, our total liability to the user for any claim derived from the contracting or use of our services will be limited to the amount effectively paid for the specific service that gave rise to the claim.

We will not be liable for indirect, incidental, consequential damages, loss of profits, loss of opportunity, loss of travel enjoyment, unforeseen expenses, losses derived from personal travel decisions, nor for events attributable to third-party providers, authorities, or circumstances beyond our reasonable control.`
  },
  {
    heading: "TWENTIETH.- Cancellation or suspension by us",
    content: `We may cancel or suspend services when there is material impossibility of compliance, user breach, lack of essential collaboration, false information, misconduct, reasonable suspicion of fraud, security risk, or any situation that makes it unfeasible to continue with the provision. In such cases, we will proceed according to the nature of the service already executed and the applicable refund policy.`
  },
  {
    heading: "TWENTY-FIRST.- Personal Data",
    content: `The processing of personal data will be governed by our Privacy Notice, available on our Site. The user acknowledges that certain data will be necessary to quote, contract, design custom experiences, follow up on services, and, where appropriate, coordinate with third-party providers, always in accordance with applicable regulations.`
  },
  {
    heading: "TWENTY-SECOND.- Partial invalidity",
    content: `If any provision of these Terms and Conditions is considered invalid, illegal, or inapplicable by a competent authority, the remaining provisions will remain in full force and effect, and will be interpreted in a way that preserves their original purpose to the greatest extent possible.`
  },
  {
    heading: "TWENTY-THIRD.- Modifications",
    content: `We may update these Terms and Conditions at any time to reflect legal, operational, commercial, or functional changes to the site. The current version will be the one published on the site on its last update date. Subsequent use of the site or subsequent contracting of services will imply acceptance of the updated version.`
  },
  {
    heading: "TWENTY-FOURTH.- Applicable law and jurisdiction",
    content: `These Terms and Conditions will be interpreted in accordance with the applicable laws in the United Mexican States. To address any dispute arising from their interpretation, compliance, or execution, the parties will submit to the competent Courts of Mexico City.

By requesting a quote, contracting, or paying for any of our services, you confirm that you have read and accept these Terms and Conditions, as well as our Privacy Notice and, where applicable, the Refund Policy.`
  }
];

export default function TerminosYCondiciones() {
  const locale = useLocale();

  const sections = locale === 'en' ? sectionsEN : sectionsES;
  const title = locale === 'en' ? "Terms and Conditions" : "Términos y Condiciones";

  return <LegalPage title={title} sections={sections} />;
}
