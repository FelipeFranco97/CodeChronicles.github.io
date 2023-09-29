export interface Information {
    titulo: Tamaño,
    parrafo: JSX.Element,
    urlServer?: string,
    urlLocal?: string,
    codigo?: string,
}

interface Tamaño {
    h1?: string,
    h2?: string,
    h3?: string,
}