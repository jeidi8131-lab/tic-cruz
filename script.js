var pantallaPortada = document.getElementById("pantalla-portada");
var pantallaCategorias = document.getElementById("pantalla-categorias");
var pantallaGuia = document.getElementById("pantalla-guia");
var contenidoDinamico = document.getElementById("contenido-dinamico-guia");

var btnIngresar = document.getElementById("btn-ingresar");
var btnVolverPortada = document.getElementById("btn-volver-portada");
var btnVolverCategorias = document.getElementById("btn-volver-categorias");

btnIngresar.onclick = function() {
    pantallaPortada.classList.add("oculto");
    pantallaCategorias.classList.remove("oculto");
};

btnVolverPortada.onclick = function() {
    pantallaCategorias.classList.add("oculto");
    pantallaPortada.classList.remove("oculto");
};

btnVolverCategorias.onclick = function() {
    pantallaGuia.classList.add("oculto");
    pantallaCategorias.classList.remove("oculto");
};

var guias = {
    gns3: {
        titulo: "Guía Completa de GNS3",
        imagen: "contenido/gns31.jpg",
        nombreImagen: "gns31",
        enlaceDescarga: "https://www.gns3.com/",
        textoEnlace: "Descargar GNS3 en su web oficial (gns3.com)",
        introduccion: "GNS3 (Graphical Network Simulator-3) es un emulador de redes que permite ejecutar imágenes reales de sistemas operativos de routers y switches (Cisco IOS, MikroTik, Linux) en un entorno virtual.",
        funciones: [
            "Emulación de dispositivos reales: ejecuta el mismo software que corre en equipos físicos (Cisco IOS, Juniper, MikroTik, Arista, entre otros).",
            "Interfaz gráfica de arrastrar y soltar para diseñar topologías de red.",
            "Integración con máquinas virtuales (VirtualBox, VMware) y contenedores Docker para añadir servidores, firewalls y clientes.",
            "Captura de tráfico integrada: se puede abrir Wireshark directamente sobre cualquier enlace.",
            "Conexión de la topología virtual con la red real mediante nodos 'Cloud' y 'NAT'.",
            "Guardado de proyectos, capturas de pantalla y exportación de la topología."
        ],
        usos: [
            "Practicar configuración de OSPF, EIGRP, BGP, RIP y rutas estáticas en redes grandes.",
            "Crear y probar VLANs, trunking, STP y EtherChannel.",
            "Simular redes empresariales completas con firewalls, servidores DHCP, DNS y web.",
            "Probar VPNs (IPsec, GRE) y listas de control de acceso (ACL) antes de aplicarlas en producción.",
            "Preparar certificaciones como CCNA, CCNP y MikroTik MTCNA.",
            "Diagnosticar problemas de red capturando y analizando paquetes en cualquier enlace."
        ],
        pasos: [
            "Descargar e instalar GNS3 junto con GNS3 VM (en VirtualBox o VMware).",
            "Importar la imagen IOS del router o switch que vas a emular.",
            "Arrastrar los equipos al área de trabajo y unirlos con cables Ethernet o Seriales.",
            "Encender los nodos y abrir la consola CLI para configurar protocolos (OSPF, BGP, VLANs)."
        ],
        tabla: `
            <tr><th>Característica</th><th>Detalle Técnico</th></tr>
            <tr><td>Tipo</td><td>Emulador de red (usa imágenes reales)</td></tr>
            <tr><td>Consumo de RAM</td><td>Alto (requiere mínimo 8 GB - 16 GB)</td></tr>
            <tr><td>Conexión real</td><td>Permite conectar la topología virtual a tu tarjeta de red física</td></tr>
            <tr><td>Sistemas operativos</td><td>Windows, macOS y Linux</td></tr>
            <tr><td>Licencia</td><td>Gratuita y de código abierto (las imágenes IOS requieren licencia del fabricante)</td></tr>
            <tr><td>Nivel de dificultad</td><td>Intermedio - Avanzado</td></tr>
        `
    },
    gnuradio: {
        titulo: "Guía de Estudio: GNU Radio",
        imagen: "contenido/gnuradio1.jpg",
        nombreImagen: "gnuradio1",
        enlaceDescarga: "https://www.gnuradio.org/",
        textoEnlace: "Descargar GNU Radio en su web oficial",
        introduccion: "GNU Radio es un entorno de desarrollo de código abierto para implementar Radio Definida por Software (SDR) y procesamiento digital de señales (DSP) mediante bloques gráficos o Python.",
        funciones: [
            "GNU Radio Companion (GRC): programación visual mediante bloques conectados entre sí.",
            "Biblioteca amplia de bloques: filtros, moduladores, demoduladores, mezcladores, remuestreadores y más.",
            "Visualizadores integrados: espectro, cascada (waterfall), osciloscopio y diagrama de constelación.",
            "Soporte para hardware SDR real (RTL-SDR, HackRF, USRP, PlutoSDR) o trabajo 100% simulado con archivos.",
            "Creación de bloques propios en Python o C++.",
            "Procesamiento de señales en tiempo real, con variables y controles (sliders) ajustables mientras corre."
        ],
        usos: [
            "Construir un receptor de radio FM o AM desde cero.",
            "Implementar transmisores y receptores con modulaciones digitales (BPSK, QPSK, FSK, OFDM).",
            "Diseñar y aplicar filtros digitales (pasa-bajos, pasa-altos, pasa-banda).",
            "Analizar el espectro de señales reales capturadas con un dongle SDR.",
            "Decodificar protocolos como ADS-B (aviones), APRS o señales de satélites meteorológicos.",
            "Hacer prácticas de laboratorio de comunicaciones digitales y proyectos de investigación."
        ],
        pasos: [
            "Abrir GNU Radio Companion (GRC) para trabajar con diagramas de flujo.",
            "Añadir un bloque fuente (Signal Source o RTL-SDR Source).",
            "Conectar bloques de procesamiento: filtros pasa-bajos, moduladores AM/FM/QPSK.",
            "Conectar un bloque visualizador (QT GUI Frequency Sink) y ejecutar la simulación."
        ],
        tabla: `
            <tr><th>Característica</th><th>Detalle Técnico</th></tr>
            <tr><td>Tipo</td><td>Procesamiento Digital de Señales (SDR)</td></tr>
            <tr><td>Lenguajes base</td><td>C++ (rendimiento) y Python (flujo de bloques)</td></tr>
            <tr><td>Hardware compatible</td><td>RTL-SDR, HackRF One, USRP, PlutoSDR</td></tr>
            <tr><td>Sistemas operativos</td><td>Linux (ideal), Windows y macOS</td></tr>
            <tr><td>Licencia</td><td>Gratuita y de código abierto (GPL)</td></tr>
            <tr><td>Nivel de dificultad</td><td>Intermedio - Avanzado</td></tr>
        `
    },
    packet: {
        titulo: "Guía Básica: Cisco Packet Tracer",
        imagen: "contenido/packet1.jpg",
        nombreImagen: "packet1",
        enlaceDescarga: "https://www.netacad.com/",
        textoEnlace: "Acceder a Cisco Packet Tracer en Cisco NetAcad (netacad.com)",
        introduccion: "Cisco Packet Tracer es un simulador visual diseñado para aprender fundamentos de redes, direccionamiento IP y configuración de equipos Cisco sin consumir muchos recursos.",
        funciones: [
            "Biblioteca de dispositivos: routers, switches, PCs, servidores, access points, firewalls y dispositivos IoT.",
            "Modo Simulación: permite ver cómo viaja cada paquete (ICMP, ARP, TCP, DNS, HTTP) paso a paso.",
            "Consola CLI real de Cisco IOS en routers y switches simulados.",
            "Configuración gráfica de PCs y servidores (IP, DHCP, DNS, HTTP, FTP, correo).",
            "Soporte para redes inalámbricas, IoT y programación básica de dispositivos inteligentes.",
            "Actividades evaluables: crea ejercicios con puntuación automática para practicar."
        ],
        usos: [
            "Aprender direccionamiento IP, máscaras y subnetting (VLSM).",
            "Configurar VLANs, trunks y enrutamiento entre VLANs (router-on-a-stick).",
            "Practicar rutas estáticas y protocolos dinámicos como RIP, OSPF y EIGRP.",
            "Montar servicios de red: DHCP, DNS, servidor web y FTP.",
            "Configurar NAT, ACLs y seguridad básica de puertos.",
            "Diseñar redes de casa inteligente con sensores y dispositivos IoT."
        ],
        pasos: [
            "Seleccionar routers, switches y PCs desde la barra inferior izquierda.",
            "Conectar los dispositivos usando cable directo, cruzado o automático.",
            "Asignar direcciones IP estáticas o configurar un servidor DHCP.",
            "Usar el 'Modo Simulación' para ver viajar los paquetes ICMP, ARP y TCP paso a paso."
        ],
        tabla: `
            <tr><th>Característica</th><th>Detalle Técnico</th></tr>
            <tr><td>Tipo</td><td>Simulador de red (comportamiento modelado)</td></tr>
            <tr><td>Consumo de RAM</td><td>Muy bajo (funciona en cualquier PC)</td></tr>
            <tr><td>Ideal para</td><td>Certificación CCNA, subredes, VLANs y redes IoT</td></tr>
            <tr><td>Sistemas operativos</td><td>Windows, macOS y Linux</td></tr>
            <tr><td>Licencia</td><td>Gratuita, requiere cuenta de Cisco NetAcad</td></tr>
            <tr><td>Nivel de dificultad</td><td>Principiante - Intermedio</td></tr>
        `
    },
    wireshark: {
        titulo: "Guía Rápida: Wireshark",
        imagen: "contenido/wireshark1.jpg",
        nombreImagen: "wireshark1",
        enlaceDescarga: "https://www.wireshark.org/",
        textoEnlace: "Descargar Wireshark en su web oficial (wireshark.org)",
        introduccion: "Wireshark es el analizador de protocolos de red más utilizado del mundo. Permite capturar y examinar en tiempo real los paquetes que entran y salen de tu interfaz de red.",
        funciones: [
            "Captura de paquetes en vivo desde Wi-Fi, Ethernet, Bluetooth y otras interfaces.",
            "Filtros de captura y de visualización muy potentes (por IP, puerto, protocolo, etc.).",
            "Decodificación de cientos de protocolos (TCP, UDP, DNS, HTTP, TLS, DHCP, ARP, ICMP...).",
            "Seguir flujos (Follow TCP Stream) para reconstruir una conversación completa.",
            "Estadísticas y gráficos: jerarquía de protocolos, conversaciones, gráfico de E/S.",
            "Abrir y guardar capturas en formato .pcapng para analizarlas después."
        ],
        usos: [
            "Diagnosticar lentitud, pérdida de paquetes o fallos de conexión en una red.",
            "Ver cómo funciona el saludo de tres vías de TCP, ARP o la resolución DNS.",
            "Comprobar qué datos viajan sin cifrar (HTTP, FTP, Telnet) y por qué conviene usar HTTPS.",
            "Analizar tráfico generado en GNS3 o en laboratorios de redes.",
            "Detectar tráfico sospechoso o anómalo en auditorías de seguridad autorizadas.",
            "Aprender el modelo OSI y TCP/IP viendo los encabezados reales de cada capa."
        ],
        pasos: [
            "Seleccionar la interfaz de red activa (Wi-Fi o Ethernet).",
            "Aplicar filtros de visualización como 'icmp', 'tcp.port == 80' o 'dns'.",
            "Inspeccionar las capas del modelo OSI/TCP-IP en el panel intermedio."
        ],
        tabla: `
            <tr><th>Característica</th><th>Detalle Técnico</th></tr>
            <tr><td>Uso principal</td><td>Análisis de tráfico y diagnóstico de fallos</td></tr>
            <tr><td>Licencia</td><td>Gratuita y de código abierto</td></tr>
            <tr><td>Sistemas operativos</td><td>Windows, macOS y Linux</td></tr>
            <tr><td>Formato de captura</td><td>.pcapng / .pcap</td></tr>
            <tr><td>Filtros de ejemplo</td><td>ip.addr == 192.168.1.1, tcp.port == 443, http, arp</td></tr>
            <tr><td>Nivel de dificultad</td><td>Principiante - Avanzado</td></tr>
        `
    },
    matlab: {
        titulo: "Guía Rápida: MATLAB / Simulink",
        imagen: "contenido/matlab1.jpg",
        nombreImagen: "matlab1",
        enlaceDescarga: "https://la.mathworks.com/products/matlab.html",
        textoEnlace: "Ir a MATLAB en el sitio oficial de MathWorks",
        introduccion: "Herramienta matemática fundamental en ingeniería de telecomunicaciones para modelar canales de comunicación, modulación digital y análisis espectral mediante transformada de Fourier.",
        funciones: [
            "Cálculo numérico y manejo de matrices, vectores y números complejos.",
            "Gráficos 2D y 3D para visualizar señales, espectros y resultados.",
            "Lenguaje de programación propio con scripts, funciones y la App Designer para crear interfaces.",
            "Simulink: simulación de sistemas mediante diagramas de bloques.",
            "Toolboxes especializados: Communications, DSP System, Signal Processing, Antenna y 5G.",
            "Conexión con hardware (SDR, Arduino, Raspberry Pi) y generación de código C/C++."
        ],
        usos: [
            "Generar y graficar señales senoidales, cuadradas y moduladas (AM, FM, PM).",
            "Calcular la Transformada de Fourier (FFT) para ver el espectro de una señal.",
            "Diseñar y aplicar filtros digitales (FIR e IIR).",
            "Simular canales con ruido (AWGN) y calcular la tasa de error de bits (BER).",
            "Implementar modulaciones digitales como ASK, FSK, PSK y QAM.",
            "Simular antenas, enlaces de radio y sistemas de comunicaciones móviles."
        ],
        pasos: [
            "Definir vectores de tiempo y frecuencia de muestreo (Fs).",
            "Generar señales portadoras y moduladoras.",
            "Graficar en el dominio del tiempo (plot) y de la frecuencia (fft)."
        ],
        tabla: `
            <tr><th>Característica</th><th>Detalle Técnico</th></tr>
            <tr><td>Toolboxes clave</td><td>Communications Toolbox, DSP System Toolbox</td></tr>
            <tr><td>Uso principal</td><td>Cálculo numérico y simulación de sistemas</td></tr>
            <tr><td>Sistemas operativos</td><td>Windows, macOS y Linux</td></tr>
            <tr><td>Licencia</td><td>De pago (licencias universitarias y versión de prueba disponibles)</td></tr>
            <tr><td>Alternativa gratuita</td><td>GNU Octave (sintaxis muy similar)</td></tr>
            <tr><td>Nivel de dificultad</td><td>Principiante - Avanzado</td></tr>
        `
    },
    sdrsharp: {
        titulo: "Guía Rápida: SDR# (Airspy)",
        imagen: "contenido/sdrsharp1.jpg",
        nombreImagen: "sdrsharp1",
        enlaceDescarga: "https://airspy.com/download/",
        textoEnlace: "Descargar SDR# en la web oficial de Airspy",
        introduccion: "Software ligero para Windows que permite sintonizar y demodular señales de radiofrecuencia en vivo usando un receptor USB RTL-SDR.",
        funciones: [
            "Visualización del espectro y la cascada (waterfall) en tiempo real.",
            "Demodulación de varios modos: WFM, NFM, AM, USB, LSB, CW y RAW.",
            "Control de ganancia, ancho de banda, squelch y reducción de ruido.",
            "Grabación de audio y de señales en banda base (IQ) para analizarlas después.",
            "Sistema de plugins: añade herramientas como decodificadores y ayudas de frecuencia.",
            "Administrador de frecuencias para guardar tus emisoras y canales favoritos."
        ],
        usos: [
            "Escuchar radio FM comercial y emisoras AM.",
            "Monitorear la banda aérea (comunicaciones de aviación, en AM).",
            "Escuchar radioaficionados, bandas marinas y radio de servicios públicos.",
            "Observar visualmente señales de control remoto, sensores y otros dispositivos (en 433 MHz).",
            "Recibir imágenes de satélites meteorológicos con plugins y software adicional.",
            "Aprender de forma práctica cómo es el espectro radioeléctrico real."
        ],
        pasos: [
            "Conectar el dongle RTL-SDR e instalar los drivers con Zadig.",
            "Seleccionar 'RTL-SDR USB' como fuente en SDR#.",
            "Sintonizar frecuencias FM comercial (88-108 MHz) o banda aérea."
        ],
        tabla: `
            <tr><th>Característica</th><th>Detalle Técnico</th></tr>
            <tr><td>Modulaciones</td><td>WFM, NFM, AM, USB, LSB, CW</td></tr>
            <tr><td>Visualización</td><td>Espectro en tiempo real y cascada (Waterfall)</td></tr>
            <tr><td>Sistema operativo</td><td>Windows (principalmente)</td></tr>
            <tr><td>Hardware necesario</td><td>RTL-SDR, Airspy u otro receptor SDR compatible</td></tr>
            <tr><td>Licencia</td><td>Gratuita (software propietario)</td></tr>
            <tr><td>Nivel de dificultad</td><td>Principiante</td></tr>
        `
    }
};

function crearLista(arreglo) {
    var html = "";
    for (var i = 0; i < arreglo.length; i++) {
        html += "<li>" + arreglo[i] + "</li>";
    }
    return html;
}

function abrirGuia(claveTema) {
    var guia = guias[claveTema];

    var listaPasosHTML = crearLista(guia.pasos);
    var listaFuncionesHTML = crearLista(guia.funciones);
    var listaUsosHTML = crearLista(guia.usos);

    contenidoDinamico.innerHTML = `
        <h1>${guia.titulo}</h1>
        <p>${guia.introduccion}</p>

        <div class="caja-descarga">
            <strong>Enlace de descarga:</strong><br>
            <a href="${guia.enlaceDescarga}" target="_blank" rel="noopener noreferrer">${guia.textoEnlace}</a>
        </div>

        <h3>Imagen de referencia de la guía</h3>
        <div class="marco-imagen-guia">
            <img src="${guia.imagen}" alt="Imagen de referencia ${guia.nombreImagen}">
        </div>

        <h3>Funciones principales</h3>
        <ul class="lista-funciones">${listaFuncionesHTML}</ul>

        <h3>¿Qué puedes hacer con este programa?</h3>
        <ul class="lista-usos">${listaUsosHTML}</ul>

        <h3>Pasos recomendados de práctica</h3>
        <ol>${listaPasosHTML}</ol>

        <h3>Ficha Técnica</h3>
        <table class="tabla-guia">
            ${guia.tabla}
        </table>
    `;

    pantallaCategorias.classList.add("oculto");
    pantallaGuia.classList.remove("oculto");
    window.scrollTo(0, 0);
}