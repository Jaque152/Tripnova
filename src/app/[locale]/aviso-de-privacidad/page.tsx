"use client";

import { useLocale } from 'next-intl';
import { LegalPage } from "@/components/LegalPage";

// 1. Textos en Español
const sectionsES = [
  {
    heading: "Introducción",
    content: `Aviso de Privacidad – ARNUG, S.A. DE C.V. (TRIP NOVA)
Última actualización: 23 de junio 2026.

Con fundamento en la Ley Federal de Protección de Datos Personales en Posesión de los Particulares y su Reglamento, ponemos a tu disposición el presente Aviso de Privacidad, mediante el cual explicamos de manera clara cómo recabamos, usamos, almacenamos, compartimos y protegemos tus datos personales cuando utilizas nuestro sitio web tripnova.com.mx (en adelante el “Sitio”), nos contactas, solicitas información, cotizas, contratas o utilizas cualquiera de nuestros servicios.`
  },
  {
    heading: "PRIMERA.- Identidad y domicilio del responsable",
    content: `Somos responsables del tratamiento de tus datos personales. Nuestra denominación social es ARNUG, S.A. DE C.V., con domicilio en Avenida Coyoacán 1878, Piso 14 Dep. 1405 – A, Colonia Del Valle Benito Juárez, Ciudad de Mexico, C.P. 03100 y correo de contacto info@tripnova.com.mx. Cualquier duda relacionada con el tratamiento de tus datos podrá ser canalizada a través de dicho correo o por los medios de contacto publicados en el sitio.`
  },
  {
    heading: "SEGUNDA.- Datos personales que recabamos",
    content: `Los datos que podemos recabar, de forma directa a través del sitio, formularios, correo electrónico, mensajería, llamadas o cualquier otro medio de contacto, incluyen de manera enunciativa más no limitativa:

Datos de identificación: nombre completo, en su caso apellido(s), alias o forma de tratamiento preferida.
Datos de contacto: correo electrónico, número telefónico, ciudad o entidad de residencia, y, en su caso, otros medios de contacto que tú nos proporciones.
Datos relacionados con el viaje: destinos de interés, fechas estimadas o tentativas, número de personas que viajan, rangos de edad, duración del viaje, tipo de experiencia buscada (aventura, cultural, gastronómica, bienestar, romántica, familiar, mochilera, etc.), preferencias generales de viaje y presupuesto aproximado.
Información relativa a servicios contratados: tipo de plan o experiencia, paquete seleccionado, modalidad de servicio (itinerario digital, itinerario personalizado, plan estratégico, travel planner, concierge, experiencia específica, entre otros), histórico de cotizaciones y comunicaciones relacionadas.
Datos de facturación: RFC, razón social, domicilio fiscal y datos requeridos para la emisión de comprobantes fiscales, cuando tú los proporciones con ese fin.
Datos de medios de pago: en la medida en que sea necesario, podremos recabar referencia del medio de pago utilizado; cuando el pago se procese por pasarelas o plataformas de terceros, los datos sensibles de tarjeta se tratarán directamente en dichas plataformas, de acuerdo con sus propias políticas.

En ciertos casos podríamos recabar información adicional relacionada con restricciones alimentarias, preferencias especiales o necesidades logísticas para efectos de planeación del viaje; no obstante, no solicitamos de forma habitual datos sensibles (como información de salud detallada, religión, orientación política o étnica) y, en caso de que voluntariamente los compartas, los trataremos con especial cuidado y solo para los fines que tú indiques o que resulten evidentes.`
  },
  {
    heading: "TERCERA.- Medios a través de los cuales recabamos tus datos",
    content: `Podemos obtener tus datos personales por las siguientes vías:

Directamente cuando tú los proporcionas al llenar formularios en el sitio (por ejemplo, “Cotiza tu experiencia de viaje” o formularios de contacto), al enviarnos un correo, mensaje o al comunicarnos por teléfono.
De manera indirecta cuando nos contactas a través de plataformas de mensajería, redes sociales, formularios de terceros o enlaces desde otros sitios, siempre dentro del contexto de los servicios que ofrecemos.
A través del uso del sitio, mediante ciertas tecnologías que nos permiten obtener datos técnicos o de navegación, como se explica en el apartado de cookies y tecnologías similares.`
  },
  {
    heading: "CUARTA.- Finalidades del tratamiento",
    content: `Utilizaremos tus datos personales para las siguientes finalidades primarias, necesarias para la prestación de nuestros servicios y la relación contigo:

Atender y dar seguimiento a tus solicitudes de información, cotizaciones y mensajes.
Diseñar, elaborar y enviarte propuestas personalizadas, itinerarios, guías, recomendaciones, planes estratégicos, experiencias y servicios relacionados con viajes y turismo.
Gestionar la contratación de servicios, incluyendo el registro de tu solicitud, identificación de pagos, seguimiento de entregables y atención de dudas operativas sobre los servicios contratados.
Mantener comunicación contigo antes, durante y, en su caso, después del viaje, para resolución de dudas, confirmaciones, ajustes de itinerario y cuestiones logísticas relacionadas.
Emitir comprobantes fiscales (facturas) cuando así lo solicites y nos proporciones la información necesaria.
Dar cumplimiento a obligaciones legales, administrativas, fiscales o de atención a autoridades competentes.

Adicionalmente, podremos utilizar tus datos para las siguientes finalidades secundarias, que no son estrictamente necesarias para la prestación del servicio, pero nos permiten mejorar y ampliar nuestra oferta:

Enviarte comunicaciones informativas, boletines, recomendaciones de destinos, novedades sobre nuestros servicios o contenidos relacionados con experiencias de viaje, siempre que así lo hayas autorizado o que la legislación aplicable lo permita.
Realizar encuestas de satisfacción, análisis internos, estadísticas y estudios sobre la calidad y uso de nuestros servicios.
Elaborar perfiles generales de preferencias turísticas y de viaje, de forma que podamos mejorar la personalización de futuras propuestas, sin que ello implique decisiones automatizadas que produzcan efectos jurídicos relevantes para ti.

Si no deseas que tus datos se utilicen para finalidades secundarias, podrás manifestarlo desde un inicio o en cualquier momento posterior, siguiendo el procedimiento descrito en el apartado de derechos ARCO y mecanismos de revocación.`
  },
  {
    heading: "QUINTA.- Transferencias de datos personales",
    content: `Podremos compartir tus datos personales con terceros únicamente en los siguientes supuestos y bajo las condiciones que establece la legislación aplicable:

Con prestadores de servicios turísticos, como operadores de tours, guías, hoteles, centros de bienestar, comunidades anfitrionas, empresas de transporte, agencias de renta de autos y otros proveedores, únicamente cuando sea necesario para gestionar, coordinar o confirmar servicios relacionados con la experiencia de viaje solicitada y siempre en la medida en que tú hayas autorizado dicha gestión o resulte evidente de la naturaleza del servicio.
Con proveedores de servicios tecnológicos, de procesamiento de pagos, alojamiento de información (“hosting”), herramientas de correo o mensajería y otras plataformas que nos apoyan en la operación del sitio y en la entrega de nuestros servicios, quienes tratarán la información en nuestro nombre y bajo nuestras instrucciones.
Con autoridades competentes cuando exista un requerimiento legal o administrativo debidamente fundado, o cuando sea necesario para la protección de nuestros derechos, la atención de procedimientos, auditorías o cumplimiento de obligaciones legales.

Salvo en los casos anteriores o aquellos en que la ley lo permita o exija, no venderemos, alquilaremos ni cederemos tus datos personales a terceros para fines distintos a los aquí señalados. En los casos en que se realicen transferencias que requieran tu consentimiento, lo recabaremos de forma previa y expresa.`
  },
  {
    heading: "SEXTA.- Cookies y tecnologías similares",
    content: `Nuestro sitio puede utilizar cookies, etiquetas u otras tecnologías similares para:

Recordar ciertas preferencias de navegación.
Analizar patrones de uso del sitio de forma agregada y anónima.
Mejorar la experiencia de usuario y el desempeño de nuestras páginas.

En la medida en que estas tecnologías permitan identificarte de manera directa o indirecta, se considerarán datos personales y las trataremos conforme a lo previsto en este Aviso. Podrás configurar tu navegador para rechazar o eliminar cookies; sin embargo, ello podría afectar algunas funcionalidades del sitio.`
  },
  {
    heading: "SÉPTIMA.- Plazo de conservación",
    content: `Conservaremos tus datos personales únicamente por el tiempo razonablemente necesario para cumplir con las finalidades descritas, mientras exista una relación vigente contigo, durante los plazos que establezca la legislación aplicable en materia fiscal, mercantil, de consumo o de protección de datos personales, y por el tiempo adicional que resulte necesario para atender responsabilidades u obligaciones pendientes.

Cuando los datos dejen de ser necesarios para las finalidades señaladas y no exista obligación legal de conservarlos, procederemos a su supresión, bloqueo o anonimización, según corresponda.`
  },
  {
    heading: "OCTAVA.- Medidas de seguridad",
    content: `Implementamos medidas de seguridad administrativas, técnicas y físicas razonables para proteger tus datos personales contra daño, pérdida, alteración, destrucción, uso indebido, acceso o tratamiento no autorizado, considerando el tipo de datos y el riesgo asociado.

Si bien ningún sistema es completamente infalible, estamos comprometidos en revisar y mejorar continuamente nuestras prácticas de seguridad para reducir al mínimo los riesgos.`
  },
  {
    heading: "NOVENA.- Derechos ARCO (Acceso, Rectificación, Cancelación y Oposición)",
    content: `Tienes derecho a:

Acceder a los datos personales que tenemos sobre ti y conocer los detalles de su tratamiento.
Rectificar tus datos cuando sean inexactos, incompletos o estén desactualizados.
Cancelar tus datos cuando consideres que no se requieren para alguna de las finalidades señaladas, hayan dejado de ser necesarios, o cuando quieras revocar tu consentimiento (en los casos en que proceda).
Oponerte al tratamiento de tus datos para fines específicos, particularmente aquellos que no sean necesarios para la relación jurídica que mantenemos.

Para ejercer cualquiera de estos derechos, podrás enviar una solicitud al correo info@tripnova.com.mx, indicando al menos:

Tu nombre completo y un medio de contacto (por ejemplo, correo electrónico) para comunicarte la respuesta.
Copia de un documento que acredite tu identidad (por ejemplo, identificación oficial).
Una descripción clara del derecho que deseas ejercer y de los datos personales respecto de los cuales solicitas el acceso, rectificación, cancelación u oposición.
En caso de rectificación, la información que deba actualizarse o corregirse.

Te responderemos en los plazos establecidos por la legislación aplicable, indicando las determinaciones adoptadas y, en su caso, las razones por las cuales no sea posible atender la solicitud en términos de ley.`
  },
  {
    heading: "DÉCIMA.- Revocación del consentimiento y limitación del uso o divulgación",
    content: `En los casos en que el tratamiento de tus datos se base en tu consentimiento, podrás revocarlo en cualquier momento, sin que ello tenga efectos retroactivos, mediante el envío de una solicitud al correo info@tripnova.com.mx, siguiendo un procedimiento similar al descrito para los derechos ARCO.

Asimismo, si deseas dejar de recibir comunicaciones informativas, boletines o material promocional, podrás utilizar los mecanismos de cancelación incluidos en dichos mensajes o escribirnos para solicitar la inscripción a listas de exclusión internas.

Debes considerar que, en algunos casos, la revocación o limitación del uso de tus datos puede implicar que no podamos seguir prestando ciertos servicios, en la medida en que la información sea necesaria para su ejecución.`
  },
  {
    heading: "DÉCIMA PRIMERA.- Menores de edad",
    content: `Nuestros servicios están dirigidos principalmente a personas mayores de edad con capacidad legal para contratar. No recabamos deliberadamente datos personales de menores sin el consentimiento de su madre, padre o tutor.

Si tenemos conocimiento de que hemos recabado datos de menores sin el consentimiento correspondiente, tomaremos las medidas razonables para eliminar dicha información de nuestros registros, salvo cuando debamos conservarla por obligación legal.`
  },
  {
    heading: "DÉCIMA SEGUNDA.- Cambios al presente Aviso de Privacidad",
    content: `Podremos modificar este Aviso de Privacidad en cualquier momento, derivado de cambios normativos, internos, operativos o de los servicios que ofrecemos. La versión vigente será la que se encuentre publicada en el sitio en la fecha de última actualización.

Si las modificaciones implican cambios sustanciales en las finalidades o en la manera en que tratamos tus datos, podremos notificarte por los medios de contacto que tengamos registrados, cuando ello sea razonablemente posible.`
  },
  {
    heading: "DÉCIMA TERCERA.- Aceptación del Aviso de Privacidad",
    content: `Al proporcionarnos tus datos por cualquiera de las vías mencionadas, utilizar el sitio, solicitar información, cotizar o contratar nuestros servicios, reconoces que has leído este Aviso de Privacidad y que comprendes la forma en que trataremos tus datos personales, de conformidad con la legislación mexicana aplicable.`
  }
];

// 2. Textos en Inglés integrados
const sectionsEN = [
  {
    heading: "Introduction",
    content: `Privacy Notice – ARNUG, S.A. DE C.V. (TRIP NOVA)
Last update: June 23, 2026.

Based on the Federal Law on Protection of Personal Data Held by Private Parties and its Regulations, we provide you with this Privacy Notice, through which we clearly explain how we collect, use, store, share, and protect your personal data when you use our website tripnova.com.mx (hereinafter the “Site”), contact us, request information, get a quote, hire, or use any of our services.`
  },
  {
    heading: "FIRST.- Identity and address of the responsible party",
    content: `We are responsible for processing your personal data. Our corporate name is ARNUG, S.A. DE C.V., with address at Avenida Coyoacán 1878, Piso 14 Dep. 1405 – A, Colonia Del Valle Benito Juárez, Mexico City, C.P. 03100 and contact email info@tripnova.com.mx. Any questions regarding the processing of your data can be channeled through said email or through the contact methods published on the site.`
  },
  {
    heading: "SECOND.- Personal data we collect",
    content: `The data we may collect, directly through the site, forms, email, messaging, calls or any other means of contact, includes but is not limited to:

Identification data: full name, where applicable surname(s), alias or preferred form of address.
Contact data: email, phone number, city or state of residence, and, where applicable, other contact methods you provide us.
Travel-related data: destinations of interest, estimated or tentative dates, number of people traveling, age ranges, length of trip, type of experience sought (adventure, cultural, gastronomic, wellness, romantic, family, backpacking, etc.), general travel preferences and approximate budget.
Information related to contracted services: type of plan or experience, selected package, service modality (digital itinerary, custom itinerary, strategic plan, travel planner, concierge, specific experience, among others), quote history and related communications.
Billing data: RFC, corporate name, fiscal address and data required to issue tax receipts, when provided for that purpose.
Payment method data: to the extent necessary, we may collect reference to the payment method used; when payment is processed through third-party gateways or platforms, sensitive card data will be handled directly on those platforms, according to their own policies.

In certain cases we may collect additional information related to dietary restrictions, special preferences or logistical needs for trip planning purposes; however, we do not regularly request sensitive data (such as detailed health information, religion, political or ethnic orientation) and, should you voluntarily share them, we will treat them with special care and only for the purposes you indicate or that are evident.`
  },
  {
    heading: "THIRD.- Means through which we collect your data",
    content: `We may obtain your personal data through the following ways:

Directly when you provide it by filling out forms on the site (for example, “Quote your travel experience” or contact forms), by sending us an email, message, or communicating by phone.
Indirectly when you contact us through messaging platforms, social networks, third-party forms or links from other sites, always within the context of the services we offer.
Through the use of the site, by means of certain technologies that allow us to obtain technical or browsing data, as explained in the cookies and similar technologies section.`
  },
  {
    heading: "FOURTH.- Purposes of the treatment",
    content: `We will use your personal data for the following primary purposes, necessary for the provision of our services and our relationship with you:

Attend and follow up on your requests for information, quotes, and messages.
Design, create, and send you personalized proposals, itineraries, guides, recommendations, strategic plans, experiences, and services related to travel and tourism.
Manage the contracting of services, including the registration of your request, payment identification, tracking of deliverables, and answering operational questions about the contracted services.
Maintain communication with you before, during, and, where appropriate, after the trip, to resolve questions, confirmations, itinerary adjustments, and related logistical issues.
Issue tax receipts (invoices) upon request when you provide the necessary information.
Comply with legal, administrative, fiscal, or competent authority obligations.

Additionally, we may use your data for the following secondary purposes, which are not strictly necessary for the provision of the service, but allow us to improve and expand our offer:

Send you informative communications, newsletters, destination recommendations, updates about our services, or content related to travel experiences, provided you have authorized it or applicable legislation permits it.
Conduct satisfaction surveys, internal analyses, statistics, and studies on the quality and use of our services.
Create general profiles of tourism and travel preferences, so we can improve the personalization of future proposals, without this implying automated decisions that produce relevant legal effects for you.

If you do not want your data to be used for secondary purposes, you can state this from the beginning or at any subsequent time, following the procedure described in the ARCO rights and revocation mechanisms section.`
  },
  {
    heading: "FIFTH.- Transfer of personal data",
    content: `We may share your personal data with third parties only in the following cases and under the conditions established by applicable law:

With tourism service providers, such as tour operators, guides, hotels, wellness centers, host communities, transportation companies, car rental agencies, and other suppliers, only when necessary to manage, coordinate, or confirm services related to the requested travel experience and always to the extent that you have authorized such management or it is evident from the nature of the service.
With technology service providers, payment processing, information hosting, email or messaging tools, and other platforms that support us in the operation of the site and the delivery of our services, who will process the information on our behalf and under our instructions.
With competent authorities when there is a duly founded legal or administrative requirement, or when necessary for the protection of our rights, handling procedures, audits, or compliance with legal obligations.

Except in the above cases or those permitted or required by law, we will not sell, rent, or transfer your personal data to third parties for purposes other than those indicated here. In cases where transfers require your consent, we will obtain it previously and expressly.`
  },
  {
    heading: "SIXTH.- Cookies and similar technologies",
    content: `Our site may use cookies, tags, or other similar technologies to:

Remember certain browsing preferences.
Analyze site usage patterns in an aggregated and anonymous manner.
Improve user experience and the performance of our pages.

To the extent these technologies allow direct or indirect identification, they will be considered personal data and treated as provided in this Notice. You can configure your browser to reject or delete cookies; however, this could affect some site functionalities.`
  },
  {
    heading: "SEVENTH.- Retention period",
    content: `We will retain your personal data only for the time reasonably necessary to fulfill the described purposes, while there is an active relationship with you, during the periods established by applicable legislation regarding tax, commercial, consumer, or personal data protection matters, and for the additional time necessary to address pending responsibilities or obligations.

When the data is no longer necessary for the indicated purposes and there is no legal obligation to retain it, we will proceed to delete, block, or anonymize it, as appropriate.`
  },
  {
    heading: "EIGHTH.- Security measures",
    content: `We implement reasonable administrative, technical, and physical security measures to protect your personal data against damage, loss, alteration, destruction, misuse, unauthorized access, or processing, considering the type of data and associated risk.

Although no system is completely infallible, we are committed to continuously reviewing and improving our security practices to minimize risks.`
  },
  {
    heading: "NINTH.- ARCO Rights (Access, Rectification, Cancellation and Opposition)",
    content: `You have the right to:

Access the personal data we hold about you and know the details of its processing.
Rectify your data when it is inaccurate, incomplete, or outdated.
Cancel your data when you consider it is not required for any of the indicated purposes, has ceased to be necessary, or when you wish to revoke your consent (where applicable).
Oppose the processing of your data for specific purposes, particularly those not necessary for the legal relationship we maintain.

To exercise any of these rights, you can send a request to the email info@tripnova.com.mx, indicating at least:

Your full name and a contact method (e.g., email) to communicate the response.
A copy of a document proving your identity (e.g., official ID).
A clear description of the right you wish to exercise and the personal data for which you request access, rectification, cancellation, or opposition.
In case of rectification, the information to be updated or corrected.

We will respond within the timeframes established by applicable law, indicating the determinations adopted and, where appropriate, the reasons why the request cannot be met under the law.`
  },
  {
    heading: "TENTH.- Revocation of consent and limitation of use or disclosure",
    content: `In cases where the processing of your data is based on your consent, you may revoke it at any time, without retroactive effects, by sending a request to the email info@tripnova.com.mx, following a procedure similar to that described for ARCO rights.

Likewise, if you wish to stop receiving informative communications, newsletters, or promotional material, you can use the cancellation mechanisms included in those messages or write to us to request inclusion in internal opt-out lists.

You should consider that, in some cases, revoking or limiting the use of your data may mean we can no longer provide certain services, to the extent the information is necessary for their execution.`
  },
  {
    heading: "ELEVENTH.- Minors",
    content: `Our services are primarily directed at adults with legal capacity to contract. We do not deliberately collect personal data from minors without the consent of their mother, father, or guardian.

If we become aware that we have collected data from minors without appropriate consent, we will take reasonable measures to delete such information from our records, except when we must retain it due to legal obligations.`
  },
  {
    heading: "TWELFTH.- Changes to this Privacy Notice",
    content: `We may modify this Privacy Notice at any time, due to regulatory, internal, operational changes, or changes to the services we offer. The current version will be the one published on the site as of the date of the last update.

If the modifications involve substantial changes in the purposes or the way we process your data, we may notify you through the contact methods we have registered, when reasonably possible.`
  },
  {
    heading: "THIRTEENTH.- Acceptance of the Privacy Notice",
    content: `By providing us with your data through any of the mentioned means, using the site, requesting information, getting a quote, or contracting our services, you acknowledge that you have read this Privacy Notice and understand how we will process your personal data, in accordance with applicable Mexican law.`
  }
];

export default function AvisoDePrivacidad() {
  const locale = useLocale();

  // 3. Seleccionamos el contenido y el título dependiendo del idioma actual
  const sections = locale === 'en' ? sectionsEN : sectionsES;
  const title = locale === 'en' ? "Privacy Notice" : "Aviso de Privacidad";

  return <LegalPage title={title} sections={sections} />;
}
