import { Header } from '@/types/header.type'
import { Card } from '@/types/card.type'
import { HeroBanner } from '@/types/hero-banner.type'
import { MiddleText } from '@/types/middle-text.type'
import { Information } from '@/types/information.type'

// Info related to header //

export const header: Header = {
  titulo: 'CodeChronicles',
}

// Info related to cards //

export const cardRoot: Card[] = [
  {
    tag: 'CodeChronicles',
    titulo: 'Introducción',
    contenido: 'Información básica: la web, Internet, protocolos y más.',
    url: '/introduction',
  },
  {
    tag: 'CodeChronicles',
    titulo: 'Herramientas de Escritura de Código',
    contenido: 'Editores de texto, editores de código y extensiones.',
    url: '/tools',
  },
  {
    tag: 'CodeChronicles',
    titulo: 'Front End',
    contenido: 'Próximamente',
    url: '/frontend',
  },
  {
    tag: 'CodeChronicles',
    titulo: 'Control de Versiones',
    contenido: 'Próximamente',
    url: '/',
  },
  {
    tag: 'CodeChronicles',
    titulo: 'Backend',
    contenido: 'Próximamente',
    url: '/',
  },
]

export const cardFrontend: Card[] = [
  {
    tag: 'CodeChronicles',
    titulo: 'HTML',
    contenido: 'Elementos, Semántica, Estándares y más.',
    url: '/frontend/html',
  },
  {
    tag: 'CodeChronicles',
    titulo: 'CSS',
    contenido: 'Selectores, Responsive, Frameworks y más.',
    url: '/frontend/css',
  },
  {
    tag: 'CodeChronicles',
    titulo: 'JavaScript',
    contenido: '',
    url: '',
  },
]

// Info related to banners //

export const heroBannerRoot: HeroBanner = {
  titulo: '¡Bienvenido!',
  urlServer: '',
  urlLocal: '',
  credits: <></>,
}

export const heroBannerIntroduccion: HeroBanner = {
  titulo: 'Introducción',
  urlServer: '/CodeChronicles.github.io/introductionbanner.jpg',
  urlLocal: '/introductionbanner.jpg',
  credits: (
    <>
      Photo by{' '}
      <a
        href='https://unsplash.com/@euwars?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
        target='_blank'
        style={{ textDecoration: 'none', color: '#D3D4D6' }}
      >
        Farzad
      </a>{' '}
      on{' '}
      <a
        href='https://unsplash.com/photos/p-xSl33Wxyc?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
        target='_blank'
        style={{ textDecoration: 'none', color: '#D3D4D6' }}
      >
        Unsplash
      </a>
    </>
  ),
}

export const heroBannerTools: HeroBanner = {
  titulo: 'Herramientas de Escritura de Código',
  urlServer: '/CodeChronicles.github.io/toolbanner.jpg',
  urlLocal: '/toolbanner.jpg',
  credits: (
    <>
      Photo by{' '}
      <a
        href='https://unsplash.com/@pankajpatel?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
        target='_blank'
        style={{ textDecoration: 'none', color: '#D3D4D6' }}
      >
        Pankaj Patel
      </a>{' '}
      on{' '}
      <a
        href='https://unsplash.com/photos/u2Ru4QBXA5Q?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
        target='_blank'
        style={{ textDecoration: 'none', color: '#D3D4D6' }}
      >
        Unsplash
      </a>
    </>
  ),
}

export const heroBannerFrontend: HeroBanner = {
  titulo: 'Front End',
  urlServer: '/CodeChronicles.github.io/frontendbanner.jpg',
  urlLocal: '/frontendbanner.jpg',
  credits: (
    <>
      Photo by{' '}
      <a
        href='https://unsplash.com/@pankajpatel?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
        target='_blank'
        style={{ textDecoration: 'none', color: '#D3D4D6' }}
      >
        Pankaj Patel
      </a>{' '}
      on{' '}
      <a
        href='https://unsplash.com/photos/bYiw48KLbmw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
        target='_blank'
        style={{ textDecoration: 'none', color: '#D3D4D6' }}
      >
        Unsplash
      </a>
    </>
  ),
}

export const heroBannerHtml: HeroBanner = {
  titulo: 'HTML',
  urlServer: '/CodeChronicles.github.io/htmlbanner.jpg',
  urlLocal: '/htmlbanner.jpg',
  credits: (
    <>
      Photo by{' '}
      <a
        href='https://unsplash.com/@jacksonsophat?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
        target='_blank'
        style={{ textDecoration: 'none', color: '#D3D4D6' }}
      >
        Jackson Sophat
      </a>{' '}
      on{' '}
      <a
        href='https://unsplash.com/photos/wUbNvDTsOIc?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
        target='_blank'
        style={{ textDecoration: 'none', color: '#D3D4D6' }}
      >
        Unsplash
      </a>
    </>
  ),
}

export const heroBannerCss: HeroBanner = {
  titulo: 'CSS',
  urlServer: '/CodeChronicles.github.io/cssbanner.jpg',
  urlLocal: '/cssbanner.jpg',
  credits: (
    <>
      Photo by{' '}
      <a
        href='https://unsplash.com/@pankajpatel?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
        target='_blank'
        style={{ textDecoration: 'none', color: '#D3D4D6' }}
      >
        Pankaj Patel
      </a>{' '}
      on{' '}
      <a
        href='https://unsplash.com/photos/6JVlSdgMacE?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
        target='_blank'
        style={{ textDecoration: 'none', color: '#D3D4D6' }}
      >
        Unsplash
      </a>
    </>
  ),
}

// Info related to middle texts //

export const middleTextIntroduction: MiddleText = {
  titulo: '¡Hola Programador!',
  texto:
    'Comencé esta guía como un proyecto personal en el que quiero escribir y documentar todo lo que he aprendido a lo largo de mis años como ingeniero, centrándome en el desarrollo web. Cubriré una amplia gama de temas, desde los fundamentos hasta conceptos más avanzados. Espero que esta guía sea útil para aquellos que están aprendiendo o que desean reforzar sus conocimientos. Sea quien sea, ¡espero que disfrutes y aprendas!.',
}

// Info related to main information //

export const informationIntroduction: Information[] = [
  {
    titulo: {
      h1: 'Desarrollo Web',
    },
    parrafo: (
      <>
        El desarrollo web implica crear y mantener sitios en Internet. Esto
        abarca desde diseñar cómo se ven los sitios hasta hacer que funcionen
        correctamente. Se necesita programación y a veces se manejan bases de
        datos. El objetivo es hacer que los sitios sean interactivos y fáciles
        de usar para las personas que los visitan en sus navegadores web. Desde
        la idea inicial y el diseño hasta la parte técnica, todo esto se hace
        para que el sitio funcione bien, se vea bien y sea seguro. También, se
        adapta para que funcione en diferentes tipos de dispositivos y llegue a
        muchas personas en línea.
        <br />
        <br />
        Pero antes de continuar, vamos a hablar más en detalle sobre algunos
        términos importantes en el desarrollo web.
      </>
    ),
  },
  {
    titulo: {
      h2: 'La Web',
    },
    parrafo: (
      <>
        La web, abreviatura de World Wide Web, es un sistema de información
        global que permite ver y acceder documentos multimedia (texto, archivos,
        imágenes, videos, etc), se puede pensar como si fuera una biblioteca
        digital en la que se puede guardar todo tipo de información.
        <br />
        <br />
        ¿Cómo funciona esto? Bueno, en el mundo de la informática y las redes,
        hay algo llamado <strong>Protocolo</strong>, que básicamente son reglas
        que dicen cómo deben hablar y compartir información los dispositivos y
        programas cuando están conectados. En el caso de la web, hay dos
        protocolos muy importantes.
        <br />
        <br />
        El primero se llama <strong>TCP/IP</strong> y se usa principalmente para
        enviar y recibir datos. Puedes imaginarlo como buscar un libro en la
        biblioteca digital, donde el TCP/IP te ayuda a encontrarlo.
        <br />
        Luego, está el protocolo <strong>HTTP</strong>, que es como el lenguaje
        que la web utiliza para mostrarte el contenido que buscas. Así que
        cuando escribes la dirección de un sitio web, estás hablando en HTTP
        para que la web te muestre lo que necesitas.
      </>
    ),
  },
  {
    titulo: {
      h2: 'Internet',
    },
    parrafo: (
      <>
        Internet es como una red gigante que conecta millones de computadoras en
        todo el mundo. Para explorar esta red, usamos programas llamados{' '}
        <strong>navegadores</strong>, como Chrome, Firefox, Edge, Opera, Brave y
        otros. Estos navegadores nos permiten viajar por Internet. Además,
        dentro de estos, hay herramientas llamadas <strong>buscadores</strong>,
        como Google, Bing, Yahoo, DuckDuckGo y Ecosia, que nos ayudan a
        encontrar sitios web. Por último, tenemos los{' '}
        <strong>hipervínculos</strong> (o enlaces) que actúan como puentes entre
        diferentes páginas web.
      </>
    ),
  },
]

export const informationTools: Information[] = [
  {
    titulo: {
      h1: '¿Dónde escribo mi código?',
    },
    parrafo: (
      <>
        Escribir código es una parte esencial de la vida de cualquier
        programador, y cada uno tiene su propio estilo y preferencias para
        hacerlo.
        <br />
        <br />
        Para empezar, vamos a hablar de algunas herramientas básicas que quizás
        no se usen mucho en el mundo profesional, pero que son interesantes de
        mencionar.
      </>
    ),
  },
  {
    titulo: {
      h2: 'Editores de texto',
    },
    parrafo: (
      <>
        Los editores de texto son programas diseñados para crear, editar y
        trabajar con archivos de texto, generalmente en formato de texto plano
        (.txt). Estas herramientas son ideales para tareas generales de edición
        de texto y no están diseñadas específicamente para el desarrollo web
        avanzado.
        <br />
        <br />
        En el caso de Windows, contamos con el <strong>
          Bloc de notas
        </strong>{' '}
        como un editor de texto básico que no ofrece características avanzadas.
        En macOS, <strong>TextEdit</strong> funciona de manera similar, y en
        sistemas Unix y Linux, tenemos <strong>Nano</strong> que cumple una
        función similar.
        <br />
        <br />
        Además, me gustaría mencionar dos editores de texto adicionales. Aunque
        no cuentan con tantas funciones avanzadas y su popularidad ha disminuido
        con el tiempo, han dejado una huella importante en la historia de la
        programación:
        <strong>
          {' '}
          <a
            style={{ color: '#D3D4D6' }}
            href='https://www.vim.org'
            target='_blank'
          >
            Vim
          </a>
        </strong>{' '}
        y{' '}
        <strong>
          <a
            style={{ color: '#D3D4D6' }}
            href='https://www.gnu.org/software/emacs/'
            target='_blank'
          >
            Emacs
          </a>
        </strong>
        . Estos editores pueden utilizarse en diversos sistemas operativos y
        forman parte del proyecto GNU, un sistema operativo basado en Unix.
      </>
    ),
  },
  {
    titulo: {
      h2: 'Editores de código',
    },
    parrafo: (
      <>
        Los editores de código, a diferencia de los editores de texto, son
        programas diseñados especificamente para escribir, editar y gestionar
        código en diferentes lenguajes de programación. Estos editores vienen
        con características avanzadas de fábrica y herramientas útiles para
        desarrolladores, como el resaltado de sintaxis, la autocompletación de
        código y una amplia gama de extensiones y complementos que permiten
        personalizar y ampliar su funcionalidad.
        <br />
        <br />
        Uno de los editores de código más populares en la actualidad es
        <strong>
          {' '}
          <a
            style={{ color: '#D3D4D6' }}
            href='https://www.sublimetext.com'
            target='_blank'
          >
            Sublime Text
          </a>{' '}
        </strong>
        . De hecho, fue el editor que yo mismo usé cuando comencé en el mundo
        del desarrollo web. Sublime Text era uno de los más utilizados, si no el
        más usado.{' '}
        <strong>
          <a
            style={{ color: '#D3D4D6' }}
            href='https://github.blog/2022-06-08-sunsetting-atom/'
            target='_blank'
          >
            Atom
          </a>{' '}
        </strong>
        desarrollado por GitHub, también fue muy popular en su momento. Sin
        embargo, a pesar de tener una comunidad activa durante mucho tiempo,
        GitHub decidió poner fin a su desarrollo el 15 de diciembre de 2022.
        <br />
        <br />
        En el mercado existen otros editores como{' '}
        <strong>
          <a
            style={{ color: '#D3D4D6' }}
            href='https://notepad-plus-plus.org/downloads/'
            target='_blank'
          >
            Notepad++
          </a>
        </strong>
        ,
        <strong>
          {' '}
          <a
            style={{ color: '#D3D4D6' }}
            href='https://brackets.io/'
            target='_blank'
          >
            Brackets
          </a>
        </strong>
        . Pero uno de ellos destaca por encima de todos, y según la información
        del <strong>Stack Overflow Developer Survey 2023</strong>, es utilizado
        por más del 73% de las personas en todo el mundo (
        <a
          style={{ color: '#D3D4D6', textDecoration: 'underline' }}
          href='https://survey.stackoverflow.co/2023/#integrated-development-environment'
          target='_blank'
        >
          puedes encontrar el enlace aquí
        </a>
        ). Estoy hablando de{' '}
        <strong>
          <a
            style={{ color: '#D3D4D6' }}
            href='https://code.visualstudio.com/'
            target='_blank'
          >
            Visual Studio Code
          </a>
        </strong>
        , un editor de código multiplataforma que cuenta con una comunidad muy
        amplia que contribuye día a día a la creación de extensiones que
        permiten personalizar el software. Ofrece todas las características
        esenciales de un editor de código, como el resaltado de sintaxis, la
        autocompletación de código, la integración con sistemas de control de
        versiones, soporte para múltiples lenguajes de programación y
        actualizaciones frecuentes que traen mejoras constantes.
      </>
    ),
  },
  {
    titulo: {
      h3: 'Visual Studio Code y sus extensiones',
    },
    parrafo: (
      <>
        Visual Studio Code cuenta con miles de extensiones que pueden hacer que
        la experiencia de escribir código sea mucho más placentera. A
        continuación, mencionaré las extensiones que, en mi opinión, son las más
        útiles para el uso diario. Por razones prácticas y para no abrumar, solo
        listaré las que son útiles por el momento.
        <ul>
          <li>
            <strong>
              <a
                style={{ color: '#D3D4D6', textDecoration: 'underline' }}
                href='https://marketplace.visualstudio.com/items?itemName=MS-CEINTL.vscode-language-pack-es'
                target='_blank'
              >
                Spanish Language Pack for Visual Studio Code
              </a>
            </strong>
            : Esta extensión simplemente agrega el español como idioma en Visual
            Studio Code.
          </li>

          <li>
            <strong>
              <a
                style={{ color: '#D3D4D6', textDecoration: 'underline' }}
                href='https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode'
                target='_blank'
              >
                Prettier - Code formatter
              </a>
            </strong>
            : Esta extensión es como un asistente de estilo para tu código. La
            organiza según ciertas reglas internas para que sea más legible y
            siga buenas prácticas. Puedes seleccionar la parte que deseas
            formatear (puede ser todo el código o solo una sección) y hacer clic
            derecho, luego seleccionar la opción ‘Dar formato al documento’;, o
            simplemente presionar Shift + Alt + F y tendrá el mismo efecto.
          </li>

          <li>
            <strong>
              <a
                style={{ color: '#D3D4D6', textDecoration: 'underline' }}
                href='https://marketplace.visualstudio.com/items?itemName=zhuangtongfa.Material-theme'
                target='_blank'
              >
                One Dark Pro
              </a>
            </strong>
            : Esta extensión te permite cambiar el aspecto visual (colores) de
            tu editor de código. Una vez instalada, puedes hacer clic en el
            botón ‘Configurar tema de color’ en la sección de extensiones de
            Visual Studio Code y seleccionar el que más te guste.
          </li>

          <li>
            <strong>
              <a
                style={{ color: '#D3D4D6', textDecoration: 'underline' }}
                href='https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme'
                target='_blank'
              >
                Material Icon Theme
              </a>
            </strong>
            : Con esta extensión, obtendrás nuevos iconos para tus carpetas y
            archivos según su nombre o extensión. Es simplemente un cambio
            visual que puede ayudarte a encontrar archivos más fácilmente.
          </li>

          <li>
            <strong>
              <a
                style={{ color: '#D3D4D6', textDecoration: 'underline' }}
                href='https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer'
                target='_blank'
              >
                Live Server
              </a>
            </strong>
            : Esta es una de las extensiones más útiles en mi opinión. Te
            permite ver los cambios que haces en tu código en tiempo real.
            Después de instalarla, puedes hacer clic en el botón ‘Go Live’ que
            aparece en la esquina inferior derecha.
          </li>

          <li>
            <strong>
              <a
                style={{ color: '#D3D4D6', textDecoration: 'underline' }}
                href='https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens'
                target='_blank'
              >
                Error Lens
              </a>
            </strong>
            : Esta extensión resalta los errores, advertencias y otros problemas
            en tu código y ofrece posibles soluciones. Es como tener un
            asistente para detectar y solucionar problemas en tu código.
          </li>
        </ul>
        A medida que se toquen algunos temas, mencionare que otras extensiones
        que pueden ser útiles.
      </>
    ),
  },
]

export const informationFrontend: Information[] = [
  {
    titulo: {
      h1: 'Desarrollo Front end',
    },
    parrafo: (
      <>
        Cuando hablamos de Frontend, nos referimos a la parte del desarrollo web
        que se encarga de crear lo que las personas ven e interactúan en una
        página web, como textos, imágenes, colores, botones, animaciones y más.
        <br />
        <br />
        El front end utiliza tres lenguajes principales: <strong>HTML</strong>,
        que es un lenguaje de marcado; <strong>CSS</strong>, que es un lenguaje
        de hojas de estilo; y <strong>JavaScript</strong>, que es un lenguaje de
        programación. La información proporcionada por cada uno de estos
        lenguajes es tan amplia que se merece su propia sección.
        <br />
        <br />
        Sin embargo, antes de profundizar en estos lenguajes, es importante
        destacar un aspecto fundamental del desarrollo Frontend: nosotros no
        somos diseñadores web y generalmente no tenemos conocimientos en áreas
        como el <strong>diseño de la interfaz de usuario (UI)</strong> y la{' '}
        <strong>experiencia del usuario (UX)</strong>. En el primer caso, el
        diseñador gráfico se encarga de diseñar la apariencia de la página web,
        mientras que el desarrollador Frontend se encarga de hacer que ese
        diseño funcione. Ambos, el diseñador y el desarrollador, deben mantener
        una comunicación constante. Las herramientas que suelen compartir
        incluyen{' '}
        <strong>
          <a
            style={{ color: '#D3D4D6', textDecoration: 'underline' }}
            href='https://www.figma.com'
            target='_blank'
          >
            Figma
          </a>{' '}
        </strong>
        o{' '}
        <strong>
          <a
            style={{ color: '#D3D4D6', textDecoration: 'underline' }}
            href='https://helpx.adobe.com/es/xd/get-started.html'
            target='_blank'
          >
            Adobe XD
          </a>{' '}
        </strong>
        para la creación de las vistas de la página web y archivos con
        extensiones{' '}
        <strong>
          <a
            style={{ color: '#D3D4D6', textDecoration: 'underline' }}
            href='https://www.adobe.com/co/products/photoshop.html'
            target='_blank'
          >
            .psd (PhotoShop)
          </a>{' '}
        </strong>
        o{' '}
        <strong>
          <a
            style={{ color: '#D3D4D6', textDecoration: 'underline' }}
            href='https://www.adobe.com/co/products/illustrator.html'
            target='_blank'
          >
            .ai (Illustrator)
          </a>
        </strong>
        . Es importante recordar que no es necesario ser un diseñador gráfico
        para ser desarrollador Frontend, pero es útil tener al menos un
        conocimiento básico de herramientas como Figma o Adobe XD para facilitar
        el proceso de codificación.
        <br />
        <br />
        Generalmente, el diseñador gráfico también se encarga del diseño de UX,
        que se centra en crear una experiencia positiva, satisfactoria, fácil e
        intuitiva para el usuario, teniendo en cuenta sus necesidades,
        expectativas y comportamiento.
      </>
    ),
  },
]

export const informationHtml: Information[] = [
  {
    titulo: {
      h1: 'HTML: El lenguaje de la web',
    },
    parrafo: (
      <>
        HTML, o HyperText Markup Language (Lenguaje de Marcado de Hipertexto),
        como mencionamos anteriormente, es un lenguaje diseñado para mostrar
        documentos en un navegador web. Pero, ¿qué significa que sea un lenguaje
        de marcado? Es simplemente un código de texto que contiene información
        que describe cómo debe lucir una página web. Aunque existen otros
        lenguajes de marcado como{' '}
        <strong>XML (eXtensible Markup Language)</strong> o{' '}
        <strong>SGML (Standard Generalized Markup Language)</strong>, hoy en día
        se utilizan en contextos más específicos que no exploraremos en detalle
        aquí.
      </>
    ),
  },
  {
    titulo: {
      h2: 'Inicialización de proyecto y estructura básica',
    },
    parrafo: (
      <>
        Para comenzar a escribir código, primero debemos crear una carpeta en
        nuestro ordenador donde deseemos guardar nuestros archivos. Luego,
        abriremos esa carpeta en nuestro editor de código. En esta guía,
        utilizaré Visual Studio Code (VS Code).
        <br />
        <br />
        Nombraremos el archivo como: <pre>index.html</pre> Si tienes instalada
        la extensión{' '}
        <strong>
          <a
            style={{ color: '#D3D4D6', textDecoration: 'underline' }}
            href='https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme'
            target='_blank'
          >
            Material Icon Theme
          </a>
        </strong>
        , podrás notar cómo el ícono del archivo cambia automáticamente para una
        identificación visual más sencilla.
      </>
    ),
    urlLocal: '/create_file.jpg',
    urlServer: '/CodeChronicles.github.io/create_file.jpg',
  },
  {
    parrafo: (
      <>
        Visual Studio Code incluye una herramienta incorporada llamada{' '}
        <strong>Emmet</strong>, que permite generar código HTML y CSS de manera
        rápida y eficiente mediante abreviaciones. Aprender estas abreviaciones
        nos ayudará a escribir código de forma ágil. Por ejemplo, para crear la
        estructura básica de un archivo HTML, simplemente escribimos:{' '}
        <pre>html:5</pre> Lo que abrirá una ventana de Emmet con la abreviación
        correspondiente. Luego, podemos presionar Enter o seleccionarla con el
        puntero para obtener la estructura básica. Si por alguna razón la
        ventana no se abre, podemos abrirla manualmente presionando Ctrl +
        Space.
      </>
    ),
    urlLocal: '/emmet_html.jpg',
    urlServer: '/CodeChronicles.github.io/emmet_html.jpg',
  },
  {
    titulo: {
      h2: 'Elementos, Etiquetas y Atributos',
    },
    parrafo: (
      <>
        Los elementos, las etiquetas y los atributos son conceptos fundamentales
        en HTML que trabajan en conjunto. Utilizaré la estructura básica de HTML
        para explicar estos conceptos.
        <br />
        <br />
        Primero tenemos el <strong>elemento</strong>, que es una unidad de
        contenido que tiene una función específica en una página web. Por
        ejemplo, en la estructura básica tenemos al elemento{' '}
        <strong>&lt;title&gt;</strong>, que se utiliza para crear el título de
        nuestra página web.
        <br />
        <br />
        Lo siguiente son las <strong>etiquetas</strong>, que son un símbolo que
        se utiliza para marcar el inicio y el final de un elemento en HTML. Las
        etiquetas se colocan entre corchetes angulares (o también conocidos como
        mayor que y menor que) <strong>&lt;</strong> y <strong>&gt;</strong>.
        <br />
        <br />
        Por último, tenemos los <strong>atributos</strong>, los cuales
        proporcionan información adicional sobre un elemento y se especifica
        dentro de la etiqueta de apertura de un elemento. Los atributos tienen
        la forma ‘nombre=valor’.
        <br />
        Hay dos atributos importantes de los que tenemos que hablar, el primero
        es el atributo ‘id’ el cual se utiliza para identificar de manera única
        un elemento de una página HTML, por lo que no pueden haber dos elementos
        con el mismo id, el segundo atributo es ‘class’ y también funciona como
        un identificador pero a diferencia del id, dos o más elementos pueden
        tener la misma class, en el módulo de <strong>css</strong> se explicará
        uno de sus usos.
        <br />
        Por ejemplo, miremos todas las etiquetas y atributos de la estructura
        básica:
      </>
    ),
    codigo: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        
    </body>
    </html>
    `,
  },
  {
    parrafo: (
      <>
        <ul style={{ listStyleType: 'none' }}>
          <li>
            <strong>&lt;!DOCTYPE html&gt;</strong>: DOCTYPE no es una etiqueta
            como tal, se trata de una declaración que define la versión HTML que
            se usará en el documento, en esta caso indica que se está usando
            HTML5.
          </li>
          <br />
          <li>
            <strong>&lt;html lang=&quot;en&quot;&gt;</strong>: La etiqueta{' '}
            <strong>html</strong> marca el comienzo del documento HTML y
            contiene todo el contenido de la página. En este caso, tiene el
            atributo <strong>lang=&quot;en&quot;</strong>,para especificar que
            el idioma principal del documento es el inglés, esto viene por
            defecto. En este documento estamos usando el español como idioma
            pricipal, por lo que lo cambiaremmos a <strong>‘es’</strong>.
          </li>
          <br />
          <li>
            <strong>&lt;head&gt;</strong>: La etiqueda <strong>head</strong>{' '}
            contiene metadatos (información adicional sobre el documento web),
            los cuales no son visibles en la página web, y también contiene
            enlaces a recursos externos que afectan al documento.
            <ul style={{ listStyleType: 'none' }}>
              <br />
              <li>
                <strong>&lt;meta&gt;</strong>: Es la etiqueta que tiene
                información de los metadatos, en este caso tenemos varios, la
                primera tiene el atributo <strong>charset</strong> el cuál nos
                define la condificación de caracteres, es decir, el tipo de
                letras o símbolos que podemos usar, en este caso{' '}
                <strong>UTF-8</strong> puede representar una amplia gama de
                caraceteres de diferentes idiomas y símbolos, podemos usar los
                acentos (o tildes) del español (á, é, í, ó, ú) al igual que la
                ‘ñ’,tambien se puede usar letras o símbolos que no se utilizan
                en el español como la cedilla (ç), el alfabeto cirílico (б, г,
                д, ж), el alfabeto árabe (ﺏ ﺕ ﺱ) y muchos más.
                <br />
                Existen otras codificaciones como <strong>UTF-16</strong>,{' '}
                <strong>UTF-32</strong>, <strong>ISO-8859-1 (Latin-1)</strong>,{' '}
                <strong>ISO-8859-15 (Latin-9)</strong>, pero se utilizan muy
                pocas veces, ya que no tienen la misma cantidad de caracteres
                que UTF-8, y las que si tienen la misma cantidad ocupan más
                espacio en memoria, o sea, la página puede quedar más pesada por
                lo tanto se tardará más en abrir o cargar información.
                <br />
                El otro atributo que vemos es <strong>name</strong> y se utiliza
                para especificar el nombre o tipo de metadato, puede tener como
                valor ‘keywords’, ‘description’, ‘name’ o como en este caso
                ‘viewport’ y se utiliza para controlar como se debe de mostrar
                la página web en dispositivos móviles y tablets. En este caso
                estamos utilizando otros atributos para describir mejor el
                viewport, por ejemplo <strong>content</strong> complementa el
                atributo ‘name’ diciendole que el ancho de la página se ajustará
                automáticamente al ancho del dispositivo, es decir se adaptara
                al tamaño de la pantalla <strong>(width=device-width)</strong>,
                y además establaecera un zoom de la página en 1.0, es decir
                mostrará su tamaño real por defecto sin ningún aumento.
              </li>
              <br />
              <li>
                <strong>&lt;title&gt;</strong>: Lo último que encontramos en el
                head es la etiqueta <strong>title</strong> con la cual podemos
                establecer el título del documento. Este título se muestra en la
                pestaña del navegador, por defecto dice ‘Document’ pero se puede
                cambiar por lo que se quiera.
              </li>
            </ul>
            <br />
            <strong>&lt;body&gt;</strong>: Por último, la etiqueta{' '}
            <strong>body</strong>, marca el comienzo del contenido visible de la
            página web, como las imagenes, el texto, los enlaces y otros
            elementos.
          </li>
        </ul>
        Para ver todas las etiquetas de HTML, recomiendo visitar la web de{' '}
        <strong>
          <a
            style={{ color: '#D3D4D6', textDecoration: 'underline' }}
            href='https://www.w3schools.com/TAGS/default.asp'
            target='_blank'
          >
            w3schools
          </a>
        </strong>
        .
      </>
    ),
  },
  {
    titulo: {
      h2: 'HTML5, última versión.',
    },
    parrafo: (
      <>
        HTML5 fue lanzada en 2014 y trajo consigo muchas novedades en cuanto a
        sus novedades, no voy a nombrar todas pero si las más importantes:
        <ul style={{ listStyleType: 'none' }}>
          <li>
            <strong>&lt;header&gt;</strong> y <strong>&lt;footer&gt;</strong>:
            Se utilizan para definir el encabezado y pie de página de una
            website.
          </li>
          <br />
          <li>
            <strong>&lt;nav&gt;</strong>: Se utiliza para definir un bloque de
            navegación, algo así como un menú en el que puedes ir a distintas
            partes de la página web o enlaces externos. Normalmente va dentro
            del header o del footer.
          </li>
          <br />
          <li>
            <strong>&lt;section&gt;</strong>: Se utiliza para dividr el
            contenido de una página web en secciones temáticas.
          </li>
          <br />
          <li>
            <strong>&lt;article&gt;</strong>: Se utiliza para marca contenido
            independiente en una página web, normalmente va dentro de la
            etiqueta section.
          </li>
          <br />
          <li>
            <strong>&lt;video&gt;</strong> y <strong>&lt;audio&gt;</strong>:
            Permiten la inclusión de contenido multimedia enriquecido, como
            videos y audio, directamente en una página web sin necesidad de
            complementos de terceros.
          </li>
        </ul>
      </>
    ),
  },
  {
    titulo: {
      h2: 'HTML Semántico',
    },
    parrafo: (
      <>
        La semántica en el HTML es un tema del cual no se habla cuando se está
        aprendiendo y forma parte de las buenas prácticas, el HTML semántico es
        una forma de estructurar el documento de manera que cada etiqueta,
        elemento y atributo sea acorde a su función con el contenido.
        <br />
        El uso del HTML semántico nos ayuda a no usar etiquetas genéricas o no
        semánticas como <strong>&lt;div&gt;</strong> y{' '}
        <strong>&lt;span&gt;</strong>, ya que aunque visualmente la información
        se estructure de una misma manera, los motores de los buscadores van a
        entender mejor la información si la página web tiene un sentido claro y
        organizado, por lo que podemos evitar el uso de div y usar section y
        article en su lugar, y usar p en lugar de span.
      </>
    ),
  },
  {
    titulo: {
      h3: 'Accesibilidad',
    },
    parrafo: (
      <>
        El uso adecuado del HTML semántico tiene un impacto significativo en la{' '}
        <strong>accesibilidad</strong>. Ayuda a que las tecnologías de
        asistencia, diseñadas para personas con discapacidades visuales o
        cognitivas, puedan interpretar y presentar el contenido de manera
        precisa. Además, es importante destacar que el uso correcto de HTML
        semántico también contribuye a mejorar el{' '}
        <strong>SEO (Search Engine Optimization)</strong> que es el proceso de
        aumentar la visibilidad y el ranking de un sitio web en los resultados
        de búsqueda de motores como Google.
        <br />
        Por último, pero no menos importante, el HTML semántico mejora la{' '}
        <strong>legibilidad</strong> del código, lo que facilita la comprensión
        por parte de los desarrolladores. Además, prepara el contenido de manera
        más efectiva para futuras actualizaciones y garantiza la compatibilidad
        con los <strong>futuros estándares</strong>.
      </>
    ),
  },
  {
    titulo: {
      h2: 'Prácticas Recomendadas, las Reglas no Escritas',
    },
    parrafo: (
      <>
        Existen una serie de prácticas recomendadas al escribir código HTML. Una
        de ellas es el uso de etiquetas semánticas, tema que ya hemos abordado
        anteriormente. Aquí te presento algunas otras a tener en cuenta:
        <ul style={{ listStyleType: 'none' }}>
          <li>
            <strong>Utilizar rutas relativas</strong>: Es mejor usar rutas
            relativas en lugar de rutas absolutas cuando necesites enlazar
            imágenes, archivos de estilo (CSS) y scripts (JavaScript). Esto hace
            que mover tu sitio web a otro lugar sea más fácil.
          </li>
          <br />
          <li>
            <strong>Mantener la separación de contenido y presentación</strong>:
            Intenta mantener separado el contenido (HTML), el diseño (CSS) y las
            funciones (JavaScript). Esto hace que tu código sea más ordenado y
            fácil de manejar.
          </li>
          <br />
          <li>
            <strong>Carga JavaScript al final</strong>: Es mejor cargar los
            archivos JavaScript al final de la página para asegurarte de que el
            contenido se carga primero.
          </li>
          <br />
          <li>
            <strong>Comentar el código</strong>: Agrega notas en tu código para
            ayudarte a recordar qué hace cada parte, especialmente si estás
            trabajando con otras personas. Pero recuerda, no te pases con las
            notas.
          </li>
          <br />
          <li>
            <strong>Usar atributos alt en imágenes</strong>: Agrega una
            descripción a tus imágenes con el atributo ‘alt’. Esto ayuda a las
            personas que usan lectores de pantalla y también puede mejorar tu
            posicionamiento en los motores de búsqueda.
          </li>
        </ul>
      </>
    ),
  },
  {
    titulo: {
      h2: 'Internacionalización y Estándares',
    },
    parrafo: (
      <>
        La <strong>internacionalización (o i18n)</strong> es el proceso de
        adaptar software, sitios web o aplicaciones a diferentes idiomas y
        culturas. Esto implica separar el contenido que debe ser localizable
        (como texto, formatos de fecha y moneda) del código fuente de la
        aplicación para que puedan ser traducidos y adaptados para su uso en
        diferentes regiones o idiomas.
        <br />
        <br />
        Para que todos los desarrolladores en todo el mundo utilicen exactamente
        la misma i18n, se utiliza un <strong>estándar</strong>, que es una
        especificación técnica que establece un conjunto de reglas, directices y
        criterios. El estándar para la accesibilidad (lo que se mencionaba
        anteriormente con respecto al HTML semántico) se llama{' '}
        <strong>WCAG (Web Content Accessibility Guidelines)</strong>, creado por
        la <strong>W3C (World Wide Web Consortium)</strong> y actualmente está
        en la versión 2.1.
        <br />
        <br />
        Las <strong>WCAG 2.1</strong>, como se mencionaba anteriormente, son
        pautas desarrolladas que establecen estándares y cada vez que se vaya a
        desarrollar una aplicación, es muy recomendable visitar la documentación
        para seguir las pautas:
        <br />
        <br />
        Inglés:{' '}
        <strong>
          <a
            style={{ color: '#D3D4D6', textDecoration: 'underline' }}
            href='https://www.w3.org/TR/WCAG21/'
            target='_blank'
          >
            https://www.w3.org/TR/WCAG21/
          </a>
        </strong>
        <br />
        Español (traducción voluntaria no oficial):{' '}
        <strong>
          <a
            style={{ color: '#D3D4D6', textDecoration: 'underline' }}
            href='https://www.w3.org/WAI/standards-guidelines/wcag/glance/es'
            target='_blank'
          >
            https://www.w3.org/WAI/standards-guidelines/wcag/glance/es
          </a>
        </strong>
      </>
    ),
  },
]

export const informationCss: Information[] = [
  {
    titulo: {
      h1: 'CSS: El Pincel de la Web',
    },
    parrafo: (
      <>
        CSS (Cascading Style Sheets) es un lenguaje de hojas de estilo que se
        utiliza para dar apariencia y estilo a las páginas HTML. Una de las
        ventajas más significativas de CSS es su capacidad para separar la
        estructura (HTML) de la presentación (CSS). Esto significa que puedes
        modificar la apariencia de un sitio web sin necesidad de alterar su
        contenido o funcionalidad.
        <br />
        Las modificaciones de apariencia que podemos aplicar son muy variadas e
        incluyen cambios en el tamaño de la letra, la fuente, la posición,
        animaciones, colores de texto o de fondo de la página web, entre muchas
        otras. A continuación, explicaremos las más utilizadas en el día a día.
      </>
    ),
  },
  {
    titulo: {
      h3: '¿Cómo inicio mi archivo CSS y cómo lo conecto a mi documento HTML?',
    },
    parrafo: (
      <>
        Para crear y empezar un archivo CSS, simplemente sigue estos pasos:
        <ol>
          <li>
            Haz clic nuevamente en el botón ‘Nuevo Archivo’, como lo hiciste al
            crear el archivo HTML.
          </li>
          <br />
          <li>
            Luego, nómbralo como ‘styles.css’. Este nombre, al igual que el que
            le diste al archivo HTML, sigue buenas prácticas, pero en realidad,
            puedes elegir cualquier nombre que desees.
          </li>
        </ol>
      </>
    ),
    urlLocal: '/create_file_css.jpg',
    urlServer: '/CodeChronicles.github.io/create_file_css.jpg',
  },
  {
    parrafo: (
      <>
        Para enlazar tu archivo CSS a tu documento HTML, sigue estos pasos:
        <ol>
          <li>
            Abre la sección <strong>&lt;head&gt;</strong> de tu documento HTML.
          </li>
          <br />
          <li>
            Crea un elemento <strong>&lt;link&gt;</strong> dentro de{' '}
            <strong>&lt;head&gt;</strong>.
          </li>
          <br />
          <li>
            El elemento <strong>&lt;link&gt;</strong> debe tener dos atributos.
            El primero es <strong>rel</strong>, que se utiliza para especificar
            la relación entre el documento HTML y el recurso que se va a
            enlazar. En este caso, le damos el valor{' '}
            <strong>&quot;stylesheet&quot;</strong>, lo que significa que el
            recurso enlazado es una hoja de estilo CSS.
          </li>
          <br />
          <li>
            El segundo atributo es <strong>href</strong>, que se utiliza para
            especificar la ruta donde se encuentra el archivo a enlazar. En este
            caso, el valor que le damos es{' '}
            <strong>&quot;/styles.css&quot;</strong>.
          </li>
        </ol>
        <br />
        Así debe de quedar el archivo HTML:
      </>
    ),
    codigo: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="/styles.css">
    </head>
    <body>
        
    </body>
    </html>
    `,
  },
  {
    titulo: {
      h2: 'Sintaxsis, Selectores y Propiedades Básicas',
    },
    parrafo: (
      <>
        La sintaxsis de CSS se compone de reglas que indican cómo se debe
        aplicar el estilo a los elementos HTML. Cada regla consta de dos partes
        principales: el selector y el bloque de declaración (o bloque de
        estilos).
        <br />
        Pero, ¿qué es un selector? Simplemente, es el elemento HTML al que se le
        aplicará el estilo. Por ejemplo, si deseamos darle un diseño a un
        párrafo (un elemento <strong>&lt;p&gt;</strong>), se vería así:
      </>
    ),
    codigo: `
    p {

    }
    `,
  },
  {
    parrafo: (
      <>
        Pero, ¿qué pasa si tenemos varios elementos <strong>&lt;p&gt;</strong>{' '}
        en nuestro código y solo queremos estilizar uno de ellos? Para ello,
        debemos utilizar los atributos <strong>id</strong> o{' '}
        <strong>class</strong> de HTMLRecuerda que id es un identificador único
        y solo puede tener un elemento, mientras que class es un identificador
        múltiple que varios elementos pueden tener. Entonces, si tienes dos
        párrafos en tu documento HTML y solo deseas darle estilo a uno, puedes
        asignarle un <strong>id</strong>, como se muestra a continuación:
      </>
    ),
    codigo: `
    <body>
      <p id="parrafoEstilos">Párrafo de ejemplo</p>
    </body>
    `,
  },
  {
    parrafo: <>El selector CSS correspondiente sería:</>,
    codigo: `
    #parrafoEstilos {
    
    }
    `,
  },
  {
    parrafo: (
      <>
        Por otro lado, si tenemos tres párrafos y solo queremos darle estilo a
        dos de ellos, podemos usar una <strong>class</strong> de la siguiente
        manera:
      </>
    ),
    codigo: `
    <body>
      <p>Párrafo de ejemplo 1</p>
      <p class="parrafosEstilos">Párrafo de ejemplo 2</p>
      <p class="parrafosEstilos">Párrafo de ejemplo 3</p>
    </body>
    `,
  },
  {
    parrafo: <>Y su respectivo selector CSS se vería así:</>,
    codigo: `
    .parrafosEstilos {

    }
    `,
  },
  {
    parrafo: (
      <>
        Para aplicar estilos a estos selectores, utilizamos el bloque de
        declaración. Estos estilos contienen una o más propiedades junto con un
        valor asignado a cada propiedad, y cada declaración se separa por un
        punto y coma (;).
      </>
    ),
  },
  {
    titulo: {
      h3: 'Propiedades Básicas',
    },
    parrafo: (
      <>
        Existen algunas propiedades básicas en CSS que es importante conocer:
        <br />
        <br />
        <ul>
          <li>
            <strong>Color de Texto</strong>: Puedes cambiar el color del texto
            utilizando la propiedad
            <strong>color</strong>. Puedes especificar un valor de color
            utilizando nombres en inglés, códigos hexadecimales o valores RGB.
          </li>
        </ul>
      </>
    ),
    codigo: `
    p {
      color: red; /* Nombre en inglés */
      color: #FF0000; /* Hexadecimal */
      color: rgb(255, 0, 0); /* RGB */
    }
    `,
  },
  {
    parrafo: (
      <>
        <ul>
          <li>
            <strong>Tamaño de la fuente</strong>: Para ajustar el tamaño de la
            fuente, utiliza la propiedad <strong>font-size</strong> con unidades
            como píxeles (<strong>px</strong>) y otras que se explicarán más
            adelante.
          </li>
        </ul>
      </>
    ),
    codigo: `
    p {
      font-size: 20px;
    }
    `,
  },
  {
    parrafo: (
      <>
        <ul>
          <li>
            <strong>Fondo</strong>: La propiedad <strong>background</strong>se
            usa para especificar múltiples valores. Puedes establecer el color
            de fondo de la misma manera que el color del texto, utilizando
            valores hexadecimales, RGB o nombres en inglés. Si deseas utilizar
            una imagen de fondo, utiliza el valor <strong>url()</strong> y
            proporciona la ruta donde se encuentra la imagen. Esta propiedad se
            utiliza comúnmente con elementos como div, section o article.
          </li>
        </ul>
      </>
    ),
    codigo: `
    section {
      background: grey url('/rutaImagen');
    }
    `,
  },
  {
    parrafo: (
      <>
        <ul>
          <li>
            <strong>Tamaño del Elemento</strong>: Utiliza las propiedades
            <strong>width</strong> y <strong>height</strong> para especificar el
            ancho y la altura de un elemento, respectivamente. Al igual que el
            tamaño de la fuente, puedes expresar su valor en píxeles (px) Esto
            se utiliza frecuentemente con elementos como div, section o article.
          </li>
        </ul>
      </>
    ),
    codigo: `
    section {
      width: 50px;
      height: 40px;
    }
    `,
  },
  {
    parrafo: (
      <>
        <ul>
          <li>
            <strong>Posición del Elemento</strong>: La propiedad{' '}
            <strong>position</strong> se utiliza para mover un elemento. Puede
            tomar cinco valores diferentes y debe ir acompañada de las
            propiedades <strong>top</strong>, <strong>right</strong>,{' '}
            <strong>bottom</strong> y <strong>left</strong> para especificar en
            qué dirección deseas moverlo. Las mismas unidades en píxeles (px)
            que se han mencionado anteriormente se aplican aquí.
            <br />
            Los valores que puede tomar <strong>position</strong> son:
            <ul>
              <br />

              <li>
                <strong>static</strong>: Es el valor que tiene por defecto y las
                propiedades <strong>top</strong>, <strong>right</strong>,{' '}
                <strong>bottom</strong> y <strong>left</strong> no tienen
                efecto.
              </li>
              <br />
              <li>
                <strong>relative</strong>: El elemento se coloca normalmente y no
                afecta la posición de otros elementos, incluso si lo mueves.
              </li>
              <br />
              <li>
                <strong>absolute</strong>: El elemento se coloca fuera del flujo
                normal y se posiciona con respecto a su contenedor más cercano.
              </li>
              <br />
              <li>
                <strong>fixed</strong>: El elemento se coloca fuera del flujo
                normal y se posiciona con respecto a la ventana del navegador.
                Permanece en el mismo lugar incluso cuando se desplaza la
                página.
              </li>
              <br />
              <li>
                <strong>sticky</strong>: El elemento se coloca normalmente y
                luego se ‘pega’ a una posición específica mientras se desplaza
                por la página web.
              </li>
            </ul>
          </li>
        </ul>
        <br />
        <br />
        Recomiendo visitar{' '}
        <strong>
          <a
            style={{ color: '#D3D4D6', textDecoration: 'underline' }}
            href='https://www.freecodecamp.org/news/learn-the-basics-the-css-position-property/'
            target='_blank'
          >
            https://www.freecodecamp.org/news/learn-the-basics-the-css-position-property/
          </a>
        </strong>
        {' '}para ver ejemplos de los diferentes tipos de position.
      </>
    ),
  },
]
