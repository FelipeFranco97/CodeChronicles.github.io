import { Header } from '@/types/header.type'
import { HeroBannerIntroduction } from '@/types/introduction/hero-banner.type'
import { MiddleText } from '@/types/introduction/middle-text.type'
import { Information } from '@/types/introduction/information.type'
import { Nav } from '@/types/introduction/nav.type'
import Banner from '@/docs/assets/introduction_banner.jpg'

export const header: Header = {
  titulo: 'CodeChronicles',
}

export const heroBannerIntroduccion: HeroBannerIntroduction = {
  titulo: 'Introducción',
  url: './public/introduction-banner.JPG',
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

export const middleText: MiddleText = {
  titulo: '¡Hola Programador!',
  texto:
    'Este es el inicio de una guía que empecé como un proyecto para mi mismo, en el que quiero escribir y documentar todo lo que he aprendido a través de mis años como ingeniero. Está guía está enfocada en el desarrollo web y tocaré desde los temas más básicos hasta conceptos un poco más avanzados. Tal vez esta guía le llegue a alguien que esté aprendiendo o que quiera reforzar sus conocimientos, sea quien sea espero que lo disfrute y aprenda.',
}

export const nav: Nav = {
  titulo: 'Desarrollo Web',
  subtitulo: [
    {
      titulo: 'La Web',
    },
    {
      titulo: 'Internet',
    },
  ],
}

export const information: Information[] = [
  {
    titulo: 'Desarrollo Web',
    paragraph: (
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
  },
  {
    titulo: 'La Web',
    paragraph: (
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
  },
  {
    titulo: 'Internet',
    paragraph: (
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
  },
]
