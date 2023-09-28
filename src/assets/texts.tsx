import { Header } from '@/types/header.type'
import { Root } from '@/types/root.type'
import { HeroBanner } from '@/types/hero-banner.type'
import { MiddleText } from '@/types/middle-text.type'
import { Information } from '@/types/information.type'

export const header: Header = {
  titulo: 'CodeChronicles',
}

export const root: Root[] = [
  {
    tag: 'CodeChronicles',
    titulo: 'Introducción',
    contenido: 'Información básica: la web, Internet, protocolos y más.',
    url: '/introduction',
  },
  {
    tag: 'CodeChronicles',
    titulo: 'Herramientas de Escritura de Código',
    contenido: 'Próximamente',
    url: '/tools',
  },
  {
    tag: 'CodeChronicles',
    titulo: 'Control de Versiones',
    contenido: 'Próximamente',
    url: '/',
  },
  {
    tag: 'CodeChronicles',
    titulo: 'Front-End',
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

export const middleText: MiddleText = {
  titulo: '¡Hola Programador!',
  texto:
    'Este es el inicio de una guía que empecé como un proyecto para mi mismo, en el que quiero escribir y documentar todo lo que he aprendido a través de mis años como ingeniero. Está guía está enfocada en el desarrollo web y tocaré desde los temas más básicos hasta conceptos un poco más avanzados. Tal vez esta guía le llegue a alguien que esté aprendiendo o que quiera reforzar sus conocimientos, sea quien sea espero que lo disfrute y aprenda.',
}

export const informationIntroduction: Information[] = [
  {
    titulo: 'Desarrollo Web',
    parrafo: (
      <>
        El desarrollo web es el proceso de crear y mantener sitios web en
        Internet. Involucra la creación de contenido, diseño visual,
        programación, y gestión de bases de datos, con el objetivo de
        proporcionar una experiencia interactiva y accesible a los usuarios a
        través de navegadores web. Este proceso abarca desde la planificación y
        diseño inicial hasta la implementación técnica, garantizando la
        funcionalidad, rendimiento y seguridad del sitio, además de adaptarse a
        diversas plataformas y dispositivos para llegar a una audiencia amplia y
        diversa en línea.
        <br />
        <br />
        Pero antes de seguir avanzando, es mejor entrar en detalle sobre algunos
        términos.
      </>
    ),
    subtitulo: false,
    subtitulo_2: false,
  },
  {
    titulo: 'La Web',
    parrafo: (
      <>
        La web, abreviatura de World Wide Web, es un sistema de información
        global que permite ver y acceder documentos multimedia (texto, archivos,
        imagenes, videos, etc), se puede pensar como si fuera una biblioteca
        digital en la que se puede guardar todo tiempo de información.
        <br />
        <br />
        Ahora, ¿cómo funciona?, en el contexto de informática y las redes existe
        un término llamado <strong>Protocolo</strong> que en simples palabras es
        un conjunto de reglas que espcifica como se deben comunicar y
        comportarse los dispositivos y programas cuando intercambian datos entre
        si. Existen múltiples protocolos, pero la web está construida bajo dos
        muy importantes, el primero es <strong>TCP/IP</strong> que funciona
        principalmente para enviar y recibir datos y si seguimos con la analogía
        de la biblioteca digital podríamos decir que cuando yo escribo la
        dirección de un sitio web es como si estuviera buscando un libro en
        dicha biblioteca, pero para que me pueda mostrar el libro la web usa el
        protocolo <strong>HTTP</strong>.
      </>
    ),
    subtitulo: true,
    subtitulo_2: false,
  },
  {
    titulo: 'Internet',
    parrafo: (
      <>
        Internet es la red global que conecta a millones de computadores en todo
        el mundo. En esta red se utilizan los <strong>Navegadores</strong> tales
        como Chrome, Firefox, Edge, Opera, Brave, entre otros que nos ayudan a
        viajar por toda esta red, por otro lado tenemos los{' '}
        <strong>Buscadores</strong> los cuales están integrados dentro de los
        navegadores y nos ayudan a encontrar las páginas web, Google, Bing,
        Yahoo, DuckDuckGo o Ecosia son algunos ejemplos de buscadores. Por
        último podemos hablar sobre los <strong>Hipervinculos</strong> (o
        enlaces) que nos sirven como puentes entre las diferentes páginas web
        existentes.
      </>
    ),
    subtitulo: true,
    subtitulo_2: false,
  },
]

export const informationTools: Information[] = [
  {
    titulo: '¿Dónde escribo mi código?',
    parrafo: (
      <>
        Las herramientas de escritura de código cobran un papel fundamental en
        la vida de cada programador, cada quien lo personaliza a su gusto y lo
        ajusta hasta sentirse cómodo con él.
        <br />
        <br />
        Quisiera empezar por describir las herramientas más básicas y que
        normalmente no se usan en un ámbito profesional, pero que es bueno
        resaltar.
      </>
    ),
    subtitulo: false,
    subtitulo_2: false,
  },
  {
    titulo: 'Editores de texto',
    parrafo: (
      <>
        Los editores de texto son programas diseñados para crear, editar y
        manipular archivos de texto que generalmente son de texto plano (.txt).
        Se utilizan para tareas generales de edición de texto y no incluyen
        caraceterísitcas avanzadas de desarrollo web.
        <br />
        <br />
        En Windows encontramos al <strong>Bloc de notas</strong> como editor
        básico de texto que no nos proporciona funcionalidades avanzadas, su
        equivalente en macOS <strong>TextEdit</strong> funciona de la misma
        forma, al igual que <strong>Nano</strong> en sistemas Unix y Linux.
        <br />
        Me gustaría dar mención a otros dos editores de texto, que aunque no
        tengan tantas funcionalidades y puedan funcionar igualmente como editor
        de texto plano y que su uso ha ido disminuyendo a través de los años, se
        han hecho con un pedazo en la historia de la programación,
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
          </a>{' '}
        </strong>
        que aunque se pueda usar en distintos sistemas operativos, forma parte
        del proyecto GNU, un sistema operativo basado en Unix.
      </>
    ),
    subtitulo: true,
    subtitulo_2: false,
  },
  {
    titulo: 'Editores de Código',
    parrafo: (
      <>
        Los editores de código, a diferencia de los editores de texto, son
        programas diseñados especificamente para la escritura, edición y gestión
        de código en distintos lenguajes de programación. Estos editores traen
        por defecto caraceterísticas avanzadas y herramientas para
        desarrolladores tales como el resaltado de sintaxis, el autocompletado
        de código y una amplia variedad de extensiones y complementos que
        permiten personalizar y amplicar su funcionalidad.
        <br />
        <br />
        <strong>
          <a
            style={{ color: '#D3D4D6' }}
            href='https://www.sublimetext.com'
            target='_blank'
          >
            Sublime Text
          </a>{' '}
        </strong>
        es uno de los editores de código más famosos usado por muchas personas
        en la actualidad, de hecho era el editor de código que yo personalmente
        usaba cuando empecé en el mundo del desarrollo web ya que, si no era el
        más usado, era de uno de los más usados.{' '}
        <strong>
          <a
            style={{ color: '#D3D4D6' }}
            href='https://github.blog/2022-06-08-sunsetting-atom/'
            target='_blank'
          >
            Atom
          </a>{' '}
        </strong>
        desarrollado por GitHub, fue uno de los editores de código más usados en
        su momento, y a pesar de tener una comunidad activa por bastante tiempo,
        GitHub decidió darle fin de la vida útil el 15 de diciembre de 2022.
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
        , entre otros, pero hay uno de ellos que resalta por encima de
        cualquiera y que según información sobre el{' '}
        <strong>Stack Overflow Developer Survey 2023</strong> lo utiliza más del
        73% de las personas a nivel mundial (
        <a
          style={{ color: '#D3D4D6', textDecoration: 'underline' }}
          href='https://survey.stackoverflow.co/2023/#integrated-development-environment'
          target='_blank'
        >
          link
        </a>
        ), estoy hablando de{' '}
        <strong>
          <a
            style={{ color: '#D3D4D6' }}
            href='https://code.visualstudio.com/'
            target='_blank'
          >
            Visual Studio Code
          </a>
        </strong>
        , es un editor de código multiplataforma el cuál posee una comunidad
        bastante amplia que día tras día ayudan en la construcción de
        extensiones que permiten la personalización del software. Ofrece todas
        las características básicas de un editor de código tales como el
        resaltado de sintaxis y autocompletado de código, permite la integración
        con sistemas de control de versiones, oporte para multiples lenguajes de
        programación y actualizaciones frecuentes que traen mejoras constantes.
      </>
    ),
    subtitulo: true,
    subtitulo_2: false,
  },
  {
    titulo: 'Visual Studio Code y sus extensiones',
    parrafo: (
      <>
        Visual Studio Code cuenta con miles de extensiones que pueden hacer que
        la experiencia de escribir código sea mucho más placentera, a
        continuación voy a nombrar las que en mi opinión pueden ser las más
        útiles y que las aplico en mi día a día, aunque por efectos prácticos y
        para no confundir con temas que se tocarán más adelante, enlistaré solo
        las que sean utiles por el momento.
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
            : Es simplemente el paquede del idioma español para Visual Studio
            Code.
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
            : Se trata de una extensión que nos va a organizar nuestro código de
            acuerdo a unas reglas internas, los cambios que pueda hacer serán
            simplemente visuales, pero que harán que el código sea más legible y
            aplique buenas prácticas, para utilizarlo podemos seleccionar la
            parte que queramos que nos arregle (puede ser todo el código o solo
            una sección), dar clic derecho y seleccionar la opción &apos;Dar
            formato al documento&apos; o al presionar las teclas Shift + Alt + F
            también tendrá el mismo efecto.
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
            : Es simplemente una extensión que nos permite cambiar el tema
            (color) de nuestro editor de código, una vez instalado podemos dar
            clic en el botón &apos;Configurar tema de color&apos; que aparece en
            el apartado de extensiones de Visual Studio Code y seleccionar el
            que más guste.
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
            : Es una extensión que nos va dar unos nuevos iconos a nuestras
            carpetas y archivos según su nombre o su extensión, es simplemente
            un cambio visual.
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
            : A mi parecer es una de las extensiones más útiles que ha hecho la
            comunidad, nos da la posibilidad de mirar en tiempo real los cambios
            que vayamos haciendo en nuestro código. Una vez instalado podemos
            darle clic al botón que se nos creó en la parte inferior derecha que
            dice &apos;Go Live&apos;.
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
            : Es una extensión que resalta los errores, advertencias u otros
            diagnósticos en el código que escribamos y nos da una posible
            solución.
          </li>
        </ul>
        A medida que se toquen algunos temas, mencionare que otras extensiones
        que pueden ser útiles.
      </>
    ),
    subtitulo: true,
    subtitulo_2: true,
  },
]
