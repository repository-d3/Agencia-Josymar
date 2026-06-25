const infoTours = {
    'bahia': {
        titulo: 'Parque Nacional Tayrona | Bahía Concha',
        desc: 'Conocido como el Mar de los Tres Colores, es el primer sector del Parque Tayrona. Realizaremos un recorrido de 40 minutos en un autobús con aire acondicionado hasta llegar a la entrada, donde realizaremos una caminata ecológica de 20 minutos por un sendero sombreado hasta llegar a esta hermosa playa. Si el cliente lo desea, tenemos la opción de un plan con snorkel, que consiste en subirnos a una lancha durante 10 minutos hasta llegar a la playa de Waikiki, donde podremos disfrutar de peces de diferentes colores durante una hora, para luego regresar a la playa y disfrutar de un delicioso almuerzo caribeño.'
    },
    'cristal': {
        titulo: 'Parque Nacional Tayrona | Playa Cristal',
        desc: 'Salimos desde su alojamiento y realizamos un recorrido de una hora hasta llegar a la entrada de palangana allí nos brindarán una charla ecológica ya que esta playa se encuentra bajo conservación, posteriormente haremos una parada en el mirador 7 Olas donde podremos tomar fotos y videos; una vez que estemos en la bahia de Neguanje tomaremos una lancha que nos llevara a Playa Cristal para disfrutar de estas maravillosas playa cristalina. Tenemos disponible una versión del servicio con transporte en lancha, puede preguntarnos vía Whatsapp si lo desea.'
    },
    'cabosan': {
        titulo: 'Cabo San Juan del Guía',
        desc: 'Saldremos de su alojamiento y haremos un recorrido de una hora hasta llegar a la entrada del zaino ahi nos colocarán dos manillas una representa la entrada y la otra un seguro obligatorio. Continuaremos nuestro viaje en buseta hasta llegar a Cañaveral, donde comenzaremos una caminata de dos horas por senderos naturales, observando monos, aves, mariposas y diferentes lagartijas hasta llegar a nuestro destino, Cabo San Juan. Aquí disfrutaremos de dos horas de estas deliciosas playas rodeadas de naturaleza y mucho color. A las 14:00 pm retomaremos nuestra caminata hasta llegar al estacionamiento, donde nuestro transporte nos espera. Este ecotour es realmente maravilloso, ya que combina la belleza de la naturaleza con la hospitalidad de los lugareños. Tenemos disponible una versión del servicio con transporte en lancha, puede preguntarnos vía Whatsapp si lo desea.'
    },
    'placu': {
        titulo: 'Playa Blanca - Acuario',
        desc: 'Salimos del rodadero en una lancha súper segura y responsable. Ingresamos al acuario durante una hora y media. Durante este tiempo, podemos disfrutar del espectáculo de delfines, el túnel submarino, el museo del mar, el Museo Tayrona y los diferentes estanques que se encuentran aquí. Al salir, una lancha nos buscará para llevarnos a Playa Blanca, donde pasaremos el resto del día disfrutando de una playa de aguas cálidas y cristalinas muy cerca del rodadero. Si desea mayor exclusividad, puede preguntar por nuestro servicio vip.'
    },
    'katamaran': {
        titulo: 'Tour Bahía Katamaran',
        desc: 'La hora de salida es a las 10:00 am, al llegar al embarcadero se les dará un coctel de bienvenida luego partiremos para hacer un recorrido de 2 horas por 14 playas todas visitadas de manera panorámica, terminaremos en la playa de inca inca para almorzar y disfrutar de un snorkel, luego nos brindaran una función privada de delfines en el acuario del rodadero; para luego retornar hasta el embarcadero nuevamente.'
    },
    'inca': {
        titulo: 'Inca Inca - Acuario',
        desc: 'Salimos del rodadero en una lancha súper segura y responsable. Ingresamos al acuario durante una hora y media. Durante este tiempo, podemos disfrutar del espectáculo de delfines, el túnel submarino, el museo del mar, el Museo Tayrona y los diferentes estanques que se encuentran aquí. Al salir, una lancha nos buscará para llevarnos a la playa de inca inca, donde pasaremos el resto del día disfrutando de una playa de aguas cálidas y cristalinas muy cerca del rodadero. Si desea mayor exclusividad, puede preguntar por nuestro servicio vip.'
    },
    'extra': {
        titulo: 'Actividades extra',
        desc: 'Canopy Playa Blanca o Calderon: Este es un servicio de actividades extras que pueden realizar si se animan por un costo adicional en playa blanca o inca inca. Encuentro con delfines: Este es un servicio de actividades extras que pueden realizar si se animan por un costo adicional en playa blanca o inca inca.'
    },
    'fiestabla': {
        titulo: 'Fiesta Blanca',
        desc: 'Salimos a las 6:00 pm; haremos un recorrido por la bahia de santa marta y el rodadero para luego llegar a la playa de inca inca; donde tendremos show folclóricos, musica en vivo y mucho mas. Dentro de la embarcacion llevamos cocteles preparados ilimitados. Esta fiesta esta hecha para toda la familia por tanto pueden asistir niños la hora de llegada nuevamente al rodadero es a las 10:00 pm.'
    },
    'sunset': {
        titulo: 'Atardecer en Velero',
        desc: 'Punto de encuentro 4:50 pm en el muelle charter, zarpamos de la marina en un recorrido a vela y motor disfrutando del hermoso paisaje, al llegar a la bahia de taganga anclamos para disfrutar del atardecer samario.'
    },
    'bahive': {
        titulo: 'Bahía Concha en Velero',
        desc: 'Salimos a las 9:00 AM, desde la marina internacional; haremos un recorrido en un hermoso velero viendo panorámicamente playas por toda la costa samaria hasta llegar a la primera playa del parque tayrona Bahia concha; ahí el capitán nos dará la orden de poder usar los flotadores y snorkell para llegar a la playa; disfrutaremos de un rico almuerzo, haremos la actividad de paddle. Este es un tour bastante completo lleno de muchas actividades y experiencias únicas.'
    },
    'tourci': {
        titulo: 'Tour por la Ciudad',
        desc: 'Salimos a las 14:30 en una Chiva Rumba (autobús de fiesta). El punto de encuentro es la agencia. Realizaremos un recorrido de tres horas y media, visitando los lugares más emblemáticos de Santa Marta, como la Hacienda San Pedro Alejandrino, el Museo del Oro, el Parque de los Novios, el Monumento al Pibe Valderrama, el Callejón de Correos, la Catedral Primada y, para finalizar, contemplaremos el atardecer en la Marina Internacional.'
    },
    'minta': {
        titulo: 'Minca - Taganga',
        desc: 'Saldremos de su hotel en una minivan con capacidad para 15 pasajeros. El viaje dura 40 minutos desde Santa Marta hasta Minca, la capital ecológica. Al llegar a este pueblo, nos desviaremos para caminar por un sendero durante 20 minutos hasta llegar a las cascadas de Pozo Azul, donde disfrutaremos de una hora y media de baño. Una vez en el mirador de Taganga, tendremos 10 minutos para tomar fotos y videos. Después, llegaremos a este pueblo pesquero para almorzar y luego, en bote, nos dirigiremos a Playa Grande, una hermosa playa a 8 minutos, donde podremos nadar.'
    },
    'cascama': {
        titulo: 'Cascadas de Marinka - Sierra Minca',
        desc: 'Saldremos de su hotel. Este tour se realiza en grupos de mínimo 2 personas y máximo 6. Visitaremos Marinka como primera parada. Allí se encuentran tres hermosas cascadas con agua proveniente de la Sierra Nevada, rodeadas de hermosas flores y montañas. Aquí podremos disfrutar de un delicioso baño, usar hamacas colgantes y mucho más. Al mediodía nos dirigiremos al albergue Sierra Minca para almorzar y disfrutar de sus atracciones, incluyendo: las manos del gigante, la escalera al cielo, las alas de Colombia, el corazón gigante y mucho más. Por la tarde, visitaremos el pueblo de Minca y visitaremos Caficosta, una pequeña cafetería ubicada en el pueblo. Degustaremos café orgánico y pan de chocolate, para finalmente llegar al hotel por la tarde.'
    },
    'rutaca': {
        titulo: 'Ruta del Café y Cacao',
        desc: 'Salida en mini van desde el hotel hacia el sector de Minca, nos trasladaremos en 4x4 hasta el punto máximo donde llega la mini van, realizaremos una caminata de 10 minutos hasta llegar a la finca artesanal y cafetera donde viviremos la experiencia de siembra, cosecha, producción, despulpe, tostado, descascarillado; aquí disfrutaremos de una taza de café orgánico. Finalizada la actividad iniciamos una caminata de 25 minutos hacia el pueblo de Minca para retomar el bus y esta vez dirigirnos hacia la cascada escondida con una caminata de 15 minutos pasando por el río aquí disfrutaremos de unas cascadas de 30 metros de altura. Almorzaremos y disfrutaremos de las áreas verdes y las hamacas. Por la tarde iniciaremos el taller de cacao, además de elaborar una mascarilla de chocolate y llevar tu propia barra de chocolate artesanal.'
    },
    'cerrok': {
        titulo: 'Cerro Kennedy',
        desc: 'Salida en 4x4 a las 2 de la mañana, iniciaremos nuestro recorrido pasando por el pueblo de Bella Vista, pasaremos por la estación de San Lorenzo hasta llegar a Moncho, iniciaremos una caminata de 15 minutos hasta llegar a la punta del Cerro Kennedy a 3000 m.s.n.m., aquí podrá disfrutar de una hermosa vista del amanecer viendo los picos Colón y Bolívar, así como la cresta de San Lorenzo rodeada de pinos y nubes, de retorno desayunaremos donde se encuentra Moncho para continuar nuestro recorrido hacia otro sendero donde podremos observar los arbustos de café, tomaremos un delicioso chocolate y disfrutaremos de un baño en una cascada escondida.'
    },
    'taironaka': {
        titulo: 'Taironaka - Don Diego',
        desc: 'Salimos desde su alojamiento, el transporte es personalizado dependiendo del número de personas, es un tour exclusivo y no se maneja en grupo. El tiempo de viaje hasta Tayronaca es de 1 hora y media, parando para desayunar. Al llegar a la orilla del río tomaremos una lancha que nos llevara a nuestro punto de llegada; aquí haremos una pequeña caminata rodeados de  naturaleza hasta llegar al hotel, aquí nos presentarán a nuestro indígena Kogi quien se encarga de realizar todo el recorrido, nuestro viaje inicia con la primera parada de tayronaca que es para limpiar todas las energías negativas que tengamos antes. Al ingresar a este lugar espiritual tendremos una caminata de 1 hora y en diferentes puntos haremos rituales para energías positivas hasta llegar a una casa Kogi donde nos darán una charla sobre la vida y nos pondrán unas pulseras protectoras. A mitad de camino almorzamos y pasamos la tarde tomando un delicioso baño en el río Don Diego.'
    },
     'cuidadp': {
        titulo: 'Ciudad Perdida',
        desc: 'El tour a Ciudad Perdida es una experiencia única, la aventura dura 4 o 5 días, partiendo desde Santa Marta y recorriendo un exuberante bosque tropical húmedo. A lo largo del camino, te adentrarás en senderos mágicos rodeados de naturaleza y aire puro. Durante el recorrido, tendrás la oportunidad de conocer comunidades indígenas locales, cruzar el río Buritaca en varias ocasiones y avistar una gran diversidad de aves, muchas de ellas endémicas. Este destino es ideal para los amantes del avistamiento de aves y quienes buscan una conexión profunda con la naturaleza. Sin duda, visitar Ciudad Perdida en Colombia es una de las experiencias más memorables que puedes vivir en el mundo. Considerada una de las caminatas más espectaculares, esta travesía transformará tu amor por la naturaleza y te dejará recuerdos imborrables.'
    },
     'playacal': {
        titulo: 'Playa Calderón',
        desc: 'Salimos a conveniencia del cliente; haremos un recorrido de 10 minutos en lanchas deportivas de lujo hasta llegar a este maravilloso lugar que es privado y exclusivo, perfecto para los amantes de la tranquilidad y lo diferente; este servicio incluye sillas asoleadoras, 50.000 pesos consumibles por persona, piscina frente al mar, playa privada, musica, atencion personalizada.'
    },
     'buceoc': {
        titulo: 'Buceo con Tanque',
        desc: 'Salida 9:00 am desde el rodadero nos vamos a dirigir a la playa del amor, ahí nos darán un mini curso teórico donde te enseñarán: técnicas de respiración, la estabilización, subir y bajar, signos de buceo ( gestos con las manos), siempre estarás acompañado de un buzo profesional que te ayudara a cumplir tu sueño. Durante la actividad te tomaran fotos para que guardes este hermoso recuerdo.'
    },
     'cartagena': {
        titulo: 'Pasadía en Cartagena',
        desc: 'Saldremos a las 3:30 a. m. y nos dirigiremos a Las Letras de Cartagena para tomar fotos y videos del lugar. Después, nos dirigiremos a Barú, una hermosa playa con aguas color cielo. Aquí almorzaremos y disfrutaremos de un baño. Más tarde, nos dirigiremos a la ciudad amurallada para un breve recorrido por la ciudad por la tarde. Regresaremos a Santa Marta, no sin antes visitar dos lugares emblemáticos de Barranquilla: la Ventana al Mundo y el Monumento a Shakira.'
    },
     'barranquilla': {
        titulo: 'Pasadía en Barranquilla',
        desc: 'Saldremos a las 8:30 am desde su hotel en buseta climatizada, iniciaremos un viaje de una 1 hora 30 minutos hasta llegar al puente pumarejo uno de los puentes mas importantes de Colombia; continuaremos nuestro viaje hasta el monumento a la aleta del tiburon haremos una parada de 10 minutos, partimos con rumbo hacia al malecón del rio para apreciar el monumento a shakira y sus alrededores. En el barrio las flores tomaremos un tren que nos llevara por una travesia maravillosa por el rio magdalena y el mar al llegar disfrutaremos de un almuerzo tipico; al retorno a la ciudad de santa marta visitaremos la ventana al mundo uno de los monumentos mas importantes de la ciudad.'
    },
     'buritaca': {
        titulo: 'Buritaca',
        desc: 'Saliendo a las 8:30 a. m., haremos un recorrido de una hora en un autobús con aire acondicionado hasta llegar a Guachaca, un río de aguas cristalinas donde tendremos tiempo para nadar hasta el mediodía. Luego, partiremos hacia Buriticá, uno de los balnearios más famosos de Colombia. Aquí almorzaremos y disfrutaremos de la tarde entre el río y el mar.'
    },
     'palomino': {
        titulo: 'Palomino',
        desc: 'Haremos un recorrido de aproximadamente una hora y media saliendo a las 7:30 am, con una parada en el sector de Buriticá para desayunar. Desde allí, llegaremos a un mirador para tomar fotos y videos. Esta parada durará 10 minutos para continuar nuestro viaje hasta el puente Palomino, donde el departamento del Magdalena se divide con el departamento de La Guajira. Allí nos darán una charla por si deseamos realizar tubing, una actividad que consiste en lanzarnos en una boya río abajo hasta que se encuentra con el mar. Si no deseamos realizar la actividad, caminaremos por un sendero durante 20 minutos. Al llegar, podremos disfrutar de un delicioso almuerzo y luego bañarnos en la unión del río con el mar.'
    },
     'cabode': {
        titulo: 'Cabo de la Vela',
        desc: 'Salimos a las 3:30 am; la primera para es en Buriticá para tomar el desayuno, luego seguimos hacia palomino para ver el amanecer. Seguimos nuestro recorrido hasta Riohacha donde haremos algunos suvenires para llevar la cabo de la vela, ya estando en Uribia nos encontraremos con un guía indigena que nos ayudara a ingresar al desierto de los espejos ahí pararemos a tomar fotos y videos, llegaremos a medio día al cabo donde almorzaremos, para continuar nuestro recorrido hasta el pilón de azúcar aquí podremos apreciar una hermosa vista; en la tarde tendremos un tiempo de baño en playa dorada. Terminaremos viendo el atardecer en el faro, esa noche dormiremos en el cabo de la vela; al despertar iremos hacia Riohacha pata conocer la ciudad y disfrutar de su cultura.'
    },
     'puntog': {
        titulo: 'Punto Gallina',
        desc: 'Día 1: Destino Cabo de la Vela- Salida en vehículo desde el lugar de hospedaje en Santa Marta a las 4:30 am con destino al departamento de LA GUAJIRA – RIOHACHA, donde podrá disfrutar de los platos típicos de la región. (lugar de desayuno) Continuamos hacia Uribia. Continuamos por URIBIA, importante poblado habitado por la etnia Wayuu, hacia las salinas de Manaure. Luego se inicia el recorrido hacia el Cabo de la Vela (Almuerzo) donde se visitarán los diferentes sitios turísticos naturales. El lugar para dormir será en las rancherías en hamacas. \nDía 2: Destino Punta Gallinas - Se inicia el viaje a Punta Gallinas durante 4 horas y 30 minutos en auto, pasando por Bahía Honda, Puerto Bolívar y la Laguna de los Patos. Al llegar a Punta Gallinas se iniciará un breve recorrido por el imponente DESIERTO DE TAROA. Continuamos hacia Punta Gallinas. El transporte a punta gallinas se puede realizar por vía terrestre o marítima desde PUERTO BOLÍVAR en lancha por 2 horas hasta PUNTA GAL LIN A S, acomodación en botes.\nDía 3: Regreso a Santa Marta - El retorno se inicia después del desayuno, recorriendo aproximadamente entre 8 a 10 horas de regreso.'
    },
     'baruis': {
        titulo: 'Playa blanca Baru - Islas del rosario',
        desc: 'Disfruta de aguas cristalinas , arena blanca y paisajes expectaculares con este maravilloso toursalida a las 7:00 am; la recogida depende del sector donde se hospeden iremos en buseta hasta la playa blanca baru al llegar ahi partiremos en lancha hacia las islas del rosario donde haremos un recorrido por varias de ellas.'
    },
     'barpla': {
        titulo: 'Playa blanca Baru - Aviario- planton',
        desc: 'Combina naturaleza y el relax con este tour, disfruta de una playa con aguas cristalinas, explora el aviario nacional donde podras ver aves de diferentes especies; experiencias unicas que te haran soñar'
    },
     'fives': {
        titulo: '5 Islas con Planton',
        desc: 'Haremos un recorrido en bote desde el muelle de la bodeguita, podremos apreciar el fuerte de bocachica y continuar este recorrido por las mas hermosas islas entre ellas visitaremos cholon, isla privada mulata, playa tranquila. El recorrido terminara con la actividad del placton que tendra una actividad con una duracion de 30 minutos.'
    },
     'cholon': {
        titulo: 'Cholon Forever',
        desc: 'Haremos un recorrido panoramico por las islas del rosario hasta llegar a cholon donde tendremos un tiempo de fiesta es un bajo muy exclusivo para las personas que les gusta combinar la buena fiesta y el mar.'
    },
     'sunbea': {
        titulo: 'Sunset Beach',
        desc: 'Vive una experiencia magica en el paraiso con el tour de sunset beach un club de playa en la isla de baru, disfruta de un entorno exclusivo y relajado; rodeado de las impresionantes vistas del caribe colombiano mientras el sol se oculta en el horizonte'
    },
     'platran': {
        titulo: 'Playa Tranquila',
        desc: 'Relajate en un paraiso alejado del suburbio con nuestro tour para playa tranquilaen la isla baru, disfruta de arenas blancas, aguas cristalinas y una serenidad inigualable.'
    },
     'cocoli': {
        titulo: 'Isla Cocoliso Open Bar Premiun',
        desc: 'Sumergete en la exclusividad que te brinda este tour, disfruta de playas cristalinas y un servicio de barra libre con bebidas premium.'
    },
     'islali': {
        titulo: 'Isla Lizamar',
        desc: 'Descubre la maravilla de este club de playa con tobogan que da directo hacia el mar, o disfruta de esta vista mientras te tomas un rico coctel de bienvenida , este es un entorno paradisiaco para los amantes de la tranquilidad.'
    },
     'borabo': {
        titulo: 'Bora Bora Club',
        desc: 'Descubre la exclusividad del caribe en este club de playa que te brinda confort y tropico al mismo tiempo, una isla solo para mayores de edad para que vivas una experiencia unica llena de color, musica y arte.'
    },
     'palmari': {
        titulo: 'Palmarito Beach',
        desc: 'Descubre una playa hermosa muy cerca de cartagena; donde podras disfrutar de una hermoso club privada con una piscina de agua dulce, reacreacion y mucho mas.'
    },
     'catama': {
        titulo: 'Atardecer en Catamarán flamante',
        desc: 'Embarcate en el catamaran flamante y vive un atardecer de ensueño. en las aguas de cartagena, disfrutando de un recorrido de 2 horas por esta hermosa bahia con dj en vivo, artistas.'
    },
     'islapal': {
        titulo: 'Isla Palma',
        desc: 'Esta es una de las islas que estan en el archipelago de san bernando, un paraiso tropical rodeado de mucha naturaleza, aguas cristalinas, arena blanca y una tranquilidad inigualable. Sin duda es de las mejores experiencias que puedes vivir.'
    },
     'Mutis': {
        titulo: 'Mucura - Tintipan - Islote de Santa cruz',
        desc: 'Explora el archipielago de san bernado, haciedo nuestra primera parada en la isla tintipan para que puedas disfrutar de estas aguas cristalinas, seguiremos nuestro recorrido llegando al islote de santa cruz la isla mas pequena y mas desanmente poblada del mundo; ya nuestra ultima parada sera mucura un paraiso tropical rodeado de naturaleza y mucho color.'
    },
     'islaros': {
        titulo: 'Islas del rosario en catamaran Flamante',
        desc: 'Zarpa hacia las islas del rosario haciendo una parada en la avioneta hundida y siguiendo nuestro rumbo hacia isla punta gigante y isla grande; relajate con musica suav, disfruta del sol y descubre las aguas cristalinas de este paraiso tropical.'
    },
     'volcato': {
        titulo: 'Volcán del Totumo',
        desc: 'Relajate en esta maravillosa experiencia donde podras disfrutar de un volcan de lodo que tiene propiedades curativas, salimos desde cartagena con rumbo a este hermoso lugar donde tendremos un baño de lodo medicinal durante un tiempo para luego darnos un baño y continuar nuestro viaja hasta el club de playa donde nos daran un coctel de bienvenida y un rico almuerzo y podremos disfrutar de las piscinas.'
    },
     'bahiarum': {
        titulo: 'Tour Bahía Rumbera',
        desc: 'Este es un recorrido por la bahia de cartagena a bordo de una lancha deportiva donde llevan un ambiente lleno de musica y tragos ilimitados; el tiempo es de 2 horas. Disfruta de esta experiencia donde podras hacer conocer muchas personas.'
    },

};

function cambiarDestino(evt, nombreDestino) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].classList.remove("active");
    }
    tablinks = document.getElementsByClassName("tab-btn");
    for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
    }
    document.getElementById(nombreDestino).classList.add("active");
    evt.currentTarget.classList.add("active");
}

function abrirModal(idTour) {
    const tour = infoTours[idTour];

    if (tour) {
        document.getElementById('modal-titulo').innerText = tour.titulo;
        document.getElementById('modal-descripcion').innerText = tour.desc;

        document.getElementById('modal-btn-reservar').onclick = function () {
            prepararReserva(tour.titulo);
        };

        document.getElementById('tourModal').style.display = 'flex';
    }
}

function cerrarModal() {
    document.getElementById('tourModal').style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('tourModal');

    if (event.target === modal) {
        cerrarModal();
    }
}

function prepararReserva(nombreTour) {
    cerrarModal();

    document.getElementById('tour-seleccionado').value = nombreTour;

    document.getElementById('reserva').scrollIntoView({
        behavior: 'smooth'
    });
}

let indexCarrusel = 0;
    function moverCarrusel() {
    const track = document.querySelector('.carrusel-track');
    const resenas = document.querySelectorAll('.resena-box');
    indexCarrusel++;
    if (indexCarrusel >= resenas.length) {
    indexCarrusel = 0;
    }
    track.style.transform = `translateX(-${indexCarrusel * 100}%)`;
}
setInterval(moverCarrusel, 5000);

const observador = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revelado');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animar-scroll').forEach((el) => observador.observe(el));

    function enviarAWhatsApp(event) {
    event.preventDefault();

    const numeroTelefono = "3122586313"; 

    const plan = document.getElementById('tour-seleccionado').value;
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const numero = document.getElementById('numero').value;
    const fecha = document.getElementById('fecha').value;

    const mensaje = `¡Hola, Agencia Josymar! 👋%0A` +
                    `Me gustaría solicitar una reserva para un viaje:%0A%0A` +
                    `📌 Plan: ${plan}%0A` +
                    `👤 Nombre: ${nombre}%0A` +
                    `✉️ Correo: ${correo}%0A` +
                    `👥 Número de personas: ${numero}%0A` +
                    `📅 Fecha Estimada: ${fecha}%0A%0A` +
                    `¿Me podrían confirmar la disponibilidad y los medios de pago, por favor?`;

    const urlWhatsApp = `https://api.whatsapp.com/send?phone=${numeroTelefono}&text=${mensaje}`;

    window.open(urlWhatsApp, '_blank');
}