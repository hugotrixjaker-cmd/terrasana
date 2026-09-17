# TERRASANA SOS IA

**Plataforma territorial de alerta geolocalizada, priorización de emergencia y recuperación psicosocial post-desastre.**

Aplicación web progresiva (PWA) desarrollada en el marco de la Convocatoria 001 de 2026 — Minciencias, Línea 1 Salud Mental y Rehabilitación (Modalidad 2 — Proyecto territorial).

**Investigador Principal:** Hugo Hernando Díaz Raga
**Institución:** Universidad Nacional Abierta y a Distancia (UNAD) — CEAD Florencia
**Grupo:** GIEPRONAL — Escuela ECBTI, Ingeniería Electrónica

---

## Enlace público de la app

**➡️ https://hugotrixjacker-cmd.github.io/terrasana-sos-ia/**

Abre el enlace desde cualquier celular (Android / iOS) y pulsa **"Añadir a pantalla de inicio"** para instalarla como app.

---

## Características

- ✅ Registro con nombre, apellido, correo, teléfono y contraseña
- ✅ Login persistente entre sesiones
- ✅ **Botón SOS siempre activo** con animación de pulso permanente
- ✅ **Geolocalización continua** (actualización cada 5 segundos con `watchPosition`)
- ✅ Última ubicación conocida cuando GPS falla bajo escombros
- ✅ Indicador de conexión, batería y estado GPS en tiempo real
- ✅ **Cola offline**: alertas sin señal quedan pendientes y se envían al recuperar red
- ✅ Vibración al pulsar SOS + confirmación antes de enviar
- ✅ Funciona offline (Service Worker + caché)
- ✅ Se actualiza automáticamente cuando publicas nuevos cambios en GitHub
- ✅ Instalable como app nativa (PWA) en Android e iOS

---

## Cómo activar GitHub Pages (una sola vez)

1. En este repositorio ve a **Settings** (Ajustes)
2. En el menú lateral pulsa **Pages** (Páginas)
3. En **Source** selecciona **Deploy from a branch**
4. En **Branch** elige **main** y carpeta **/ (root)**
5. Pulsa **Save**
6. Espera 1-2 minutos. Al recargar Settings → Pages verás:
   *"Your site is live at https://hugotrixjacker-cmd.github.io/terrasana-sos-ia/"*

Ese es el enlace que compartes.

---

## Estructura del proyecto

```
terrasana-sos-ia/
├── index.html          Aplicación completa (login, registro, SOS + GPS)
├── manifest.json       Metadatos para instalación PWA
├── sw.js               Service worker (offline + auto-actualización)
├── icon-192.png        Icono 192x192 (Android)
├── icon-512.png        Icono 512x512 (splash)
├── icon-maskable.png   Icono adaptable Android
├── .nojekyll           Evita procesamiento Jekyll en GitHub Pages
└── README.md
```

---

## Roadmap

- [x] **v0.1** — Registro, login, botón SOS con GPS continuo (PWA)
- [ ] **v0.2** — Cola offline con IndexedDB + reintentos exponenciales
- [ ] **v0.3** — Envío alternativo por SMS (Web Share API)
- [ ] **v0.4** — Integración con API FastAPI (`POST /sos`)
- [ ] **v0.5** — Notificaciones push a brigadas territoriales
- [ ] **v0.6** — Tablero territorial (mapa de alertas con MapLibre)
- [ ] **v0.7** — Seguimiento psicosocial post-alerta
- [ ] **v1.0** — Piloto territorial (Fase 4 del cronograma Minciencias)

---

## Cómo actualizar la app

Edita `index.html`, `sw.js` u otros archivos, súbelos por GitHub y **espera 1-2 minutos**. La PWA detecta la versión nueva y se actualiza sola en todos los celulares que la tengan instalada.

Para forzar limpieza de caché en un cambio grande, actualiza la constante `VERSION` en `sw.js` con la fecha del día (ej. `'2026.09.18'`).

---

## Aviso ético

Esta aplicación **no reemplaza** a los organismos oficiales de socorro (Bomberos, Defensa Civil, Cruz Roja, Policía Nacional). Es una herramienta de apoyo tecnológico para fortalecer rutas institucionales. Toda alerta alta o crítica requiere validación humana antes de cierre o remisión.

**Contacto de emergencia oficial en Colombia:** `123`

---

## Licencia

MIT — permite registro como producto de software CTeI ante la Dirección Nacional de Derecho de Autor (DNDA), condición contemplada en el rubro "Registros y certificaciones" del presupuesto Minciencias.
