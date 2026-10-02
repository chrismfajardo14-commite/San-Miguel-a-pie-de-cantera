# San Miguel, a pie de cantera

Un recorrido por la vida diaria de San Miguel de Allende, colonia por colonia, hecho por jóvenes de Jóvenes con Rumbo (YouthBuild México).

## Qué hay en esta carpeta

```
index.html        La página: estructura y textos
css/style.css     Todo el diseño
js/script.js      Animaciones, datos de lugares, negocios, colonias y recetas
images/           Fotos (formato WebP) e imagen para compartir
favicon.svg       Ícono de la pestaña del navegador
_headers          Reglas de Cloudflare para que las fotos carguen más rápido
```

No necesita instalar nada ni compilar: es una página estática.

## Subirla a GitHub

1. Crea una cuenta en github.com, si no tienes.
2. Crea un repositorio nuevo (botón **New**). Ponle un nombre, por ejemplo `san-miguel-a-pie-de-cantera`, y déjalo como **Public**.
3. En el repositorio vacío, elige **uploading an existing file**.
4. Arrastra **todo el contenido de esta carpeta** (no la carpeta en sí): `index.html`, `css`, `js`, `images`, `favicon.svg`, `_headers` y este `README.md`.
5. Escribe un mensaje como "Primera versión" y presiona **Commit changes**.

## Publicarla en Cloudflare Pages

1. Crea una cuenta gratuita en cloudflare.com.
2. En el panel, entra a **Workers & Pages → Create → Pages → Connect to Git**.
3. Conecta tu cuenta de GitHub y elige el repositorio.
4. En la configuración de compilación:
   - **Framework preset:** None
   - **Build command:** déjalo vacío
   - **Build output directory:** `/`
5. Presiona **Save and Deploy**. En un minuto tendrás una dirección como `san-miguel-a-pie-de-cantera.pages.dev`.

Los nombres de los botones pueden cambiar un poco con el tiempo, pero los pasos son los mismos.

## Cómo hacer cambios

Cada vez que edites un archivo en GitHub y presiones **Commit changes**, Cloudflare vuelve a publicar la página sola, en uno o dos minutos.

- Textos de la página: `index.html`
- Lugares, negocios, colonias, recetas y fiestas: `js/script.js` (están escritos como listas al principio de cada sección)
- Colores, tamaños y tipografías: `css/style.css`
- Para agregar una foto: súbela a `images/` en formato `.webp` o `.jpg` y agrégala a la lista `IMG` al principio de `js/script.js`.

## Antes de compartirla

- **Vista previa en WhatsApp y redes:** cuando tengas tu dirección definitiva, en `index.html` cambia `content="images/og-portada.jpg"` por la dirección completa, por ejemplo `content="https://san-miguel-a-pie-de-cantera.pages.dev/images/og-portada.jpg"`. Si no, la imagen no aparece al compartir el enlace.
- **Formulario de Google:** si su descripción enlaza al aviso de privacidad, cambia el enlace a la nueva dirección terminada en `#aviso-de-privacidad`.
- **Avisos legales:** ya dicen que la página está alojada en Cloudflare Pages. Si la cambias de lugar, actualiza el aviso de privacidad y la política de cookies.
