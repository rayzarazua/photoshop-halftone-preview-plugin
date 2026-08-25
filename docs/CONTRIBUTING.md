# Guía de Contribución

¡Gracias por tu interés en contribuir al **Photoshop Halftone Preview Plugin**! 🎉

Este documento proporciona directrices y instrucciones para contribuir al proyecto.

## 📋 Tabla de Contenidos

- [Código de Conducta](#-código-de-conducta)
- [Cómo Contribuir](#-cómo-contribuir)
- [Configuración del Entorno](#-configuración-del-entorno)
- [Proceso de Desarrollo](#-proceso-de-desarrollo)
- [Envío de Pull Requests](#-envío-de-pull-requests)
- [Reportar Bugs](#-reportar-bugs)
- [Sugerir Mejoras](#-sugerir-mejoras)
- [Estilo de Código](#-estilo-de-código)
- [Commits y Mensajes](#-commits-y-mensajes)

---

## 🤝 Código de Conducta

### Nuestro Compromiso

Nos comprometemos a proporcionar un ambiente acogedor y libre de acoso para todos, independientemente de:
- Edad, tamaño corporal, discapacidad
- Etnia, identidad y expresión de género
- Nivel de experiencia
- Nacionalidad, apariencia personal
- Raza, religión
- Identidad y orientación sexual

### Comportamiento Esperado

Se espera que los contribuyentes:

✅ **Sí:**
- Sean respetuosos con las opiniones de los demás
- Acepten críticas constructivas
- Enfoquen en lo que es mejor para la comunidad
- Muestren empatía hacia otros miembros

❌ **No:**
- Lenguaje o imágenes sexualizadas
- Ataques personales o insultos
- Acoso público o privado
- Publicar información privada sin consentimiento
- Conducta que podría considerarse inapropiada en un entorno profesional

### Aplicación

Los comportamientos inaceptables pueden ser reportados a los mantenedores del proyecto. Todas las quejas serán revisadas e investigadas.

---

## 📝 Cómo Contribuir

Hay muchas formas de contribuir:

### 1. Reportar Bugs 🐛

Encontraste un error que el plugin no debería tener:

```
1. Verifica que el bug no fue reportado antes
2. Ve a GitHub Issues
3. Haz clic "New Issue"
4. Describe el problema detalladamente
```

**Información necesaria:**
- Versión de Photoshop
- Sistema operativo
- Pasos para reproducir
- Comportamiento esperado vs. actual
- Capturas de pantalla/video si es posible

### 2. Sugerir Mejoras 💡

Tienes ideas para mejorar el plugin:

```
1. Ve a GitHub Discussions
2. Haz clic "New Discussion"
3. Selecciona "Ideas" como categoría
4. Describe tu idea
5. Explica por qué sería útil
```

### 3. Escribir Documentación 📚

¿Eres bueno documentando?

- Mejorar archivos README
- Crear tutoriales
- Traducir documentación
- Crear ejemplos visuales

### 4. Mejorar el Código 💻

Quieres hacer cambios al código:

```
1. Fork el repositorio
2. Crea una rama con tu feature
3. Haz cambios
4. Envía un Pull Request
```

### 5. Compartir y Promover 📢

¡Ayuda a otros a conocer el plugin!

- Comparte en redes sociales
- Escribe un blog post
- Crea videos tutoriales
- Menciona el proyecto en comunidades

---

## 🛠️ Configuración del Entorno

### Requisitos Previos

Necesitas tener instalado:

- **Node.js** 14.0.0 o superior
- **npm** 6.0.0 o superior
- **Adobe Photoshop** 2022+ (para testing)
- **Git** para control de versiones

### Verificar Instalación

```bash
# Verifica Node.js
node --version
# Debería mostrar v14.0.0 o superior

# Verifica npm
npm --version
# Debería mostrar 6.0.0 o superior

# Verifica Git
git --version
```

### Configuración Inicial

**Paso 1: Fork el repositorio**

```
1. Ve a: https://github.com/rayzarazua/photoshop-halftone-preview-plugin
2. Haz clic en "Fork" (arriba a la derecha)
3. Selecciona dónde quieres hacer el fork (generalmente tu cuenta)
```

**Paso 2: Clona tu fork**

```bash
git clone https://github.com/[TU-USUARIO]/photoshop-halftone-preview-plugin.git
cd photoshop-halftone-preview-plugin
```

**Paso 3: Agrega el repositorio upstream**

```bash
git remote add upstream https://github.com/rayzarazua/photoshop-halftone-preview-plugin.git
git fetch upstream
```

**Paso 4: Instala dependencias**

```bash
npm install
```

**Paso 5: Verifica que todo funciona**

```bash
npm run build
# O el comando que esté en package.json
```

---

## 🔄 Proceso de Desarrollo

### Estructura del Proyecto

```
photoshop-halftone-preview-plugin/
├── src/
│   ├── index.js          # Lógica principal del plugin
│   ├── index.html        # Interfaz del usuario
│   └── index.css         # Estilos
├── docs/
│   ├── INSTALLATION.md
│   ├── USAGE.md
│   ├── FAQ.md
│   └── TROUBLESHOOTING.md
├── manifest.json         # Configuración del plugin
├── package.json          # Dependencias y scripts
└── README.md             # Descripción del proyecto
```

### Creando una Rama para Tu Feature

```bash
# Asegúrate de estar en la rama principal
git checkout main

# Actualiza a la última versión
git pull upstream main

# Crea una rama nueva
git checkout -b feature/nombre-de-mi-feature
# O para bugfixes:
git checkout -b bugfix/nombre-del-bug
# O para documentación:
git checkout -b docs/nombre-de-la-documentacion
```

### Realizando Cambios

```bash
# Haz tus cambios en los archivos
# Prueba localmente
npm run dev

# Verifica que no hay errores
npm run lint
npm run test
```

### Commiteando Cambios

```bash
# Ve qué cambios hiciste
git status

# Agrega los cambios
git add .
# O archivos específicos:
git add src/index.js

# Haz commit con un mensaje descriptivo
git commit -m "Agregar feature: descripción clara"
```

---

## 🚀 Envío de Pull Requests

### Antes de Enviar

**Checklist:**

- [ ] Mi código sigue el estilo del proyecto
- [ ] He actualizado la documentación si es necesario
- [ ] He agregado pruebas para nuevas features
- [ ] He testeado en Photoshop 2022+ antes de enviar
- [ ] Mi rama está actualizada con `upstream/main`
- [ ] He compilado sin errores (`npm run build`)

### Crear el Pull Request

**Paso 1: Push tu rama a tu fork**

```bash
git push origin feature/nombre-de-mi-feature
```

**Paso 2: Abre un PR en GitHub**

```
1. Ve a: https://github.com/rayzarazua/photoshop-halftone-preview-plugin
2. Deberías ver un botón "Compare & pull request"
3. Si no lo ves, ve a "Pull Requests" → "New Pull Request"
4. Selecciona:
   - Base: rayzarazua/photoshop-halftone-preview-plugin (main)
   - Compare: [tu-fork]/photoshop-halftone-preview-plugin (tu-rama)
```

### Plantilla de PR

```markdown
## Descripción
Breve descripción de qué cambios hace este PR.

## Tipo de cambio
- [ ] Bug fix (cambio que arregla un problema)
- [ ] Nueva feature (cambio que agrega funcionalidad)
- [ ] Breaking change (cambio que causa incompatibilidad)
- [ ] Documentación

## ¿Cómo fue testeado?
Describe cómo testeaste tus cambios.

## Checklist
- [ ] Mi código sigue el estilo del proyecto
- [ ] He testeado en Photoshop 2022 y 2024
- [ ] No hay nuevas warnings/errores
- [ ] Actualicé la documentación

## Screenshots (si aplica)
Incluye capturas de pantalla de cambios visuales.
```

### Después de Enviar

- Los mantenedores revisarán tu PR
- Pueden solicitar cambios
- Una vez aprobado, será mergeado
- Aparecerás en la lista de contributors

---

## 🐛 Reportar Bugs

### Antes de Reportar

```
1. Busca en Issues existentes
2. Lee TROUBLESHOOTING.md
3. Intenta reproducer el bug de forma consistente
4. Recopila información sobre tu sistema
```

### Información Necesaria

**Por favor incluye:**

```markdown
### Describe el bug
Una descripción clara de qué está mal.

### Pasos para reproducir
1. Abre Photoshop
2. Carga una imagen de ejemplo
3. Haz clic en...
4. Observa el error

### Comportamiento esperado
Qué debería pasar (pero no pasa).

### Capturas/Videos
Adjunta pruebas visuales del problema.

### Información del sistema
- OS: Windows 10 / macOS 12
- Photoshop: 2024 (25.0.0)
- RAM: 16GB
- Tamaño de imagen: 3000x2000px
```

---

## 💡 Sugerir Mejoras

### Plantilla de Sugerencia

```markdown
### Resumen
Descripción breve de tu idea.

### Problema que resuelve
¿Qué problema actual está resolviendo esto?

### Solución propuesta
Describe tu idea en detalle.

### Alternativas consideradas
Otras formas de resolver esto.

### Contexto adicional
Información extra que podría ser útil.
```

---

## 🎨 Estilo de Código

### JavaScript

```javascript
// ✅ Bueno
function applyHalftoneEffect(image, radius) {
  // Implementación clara
  const result = processImage(image, radius);
  return result;
}

// ❌ Malo
function applyHE(i,r){return processImage(i,r);}
```

**Reglas:**

- Usa nombres descriptivos para variables y funciones
- Comenta código complejo
- Máximo 80 caracteres por línea
- Indentación de 2 espacios
- Usa `const` por defecto, `let` si necesitas reasignar
- Evita `var`

### HTML/CSS

```html
<!-- ✅ Bueno -->
<div class="plugin-panel">
  <label for="radius-input">Radio:</label>
  <input id="radius-input" type="range" min="1" max="100" />
</div>

<!-- ❌ Malo -->
<div class="panel">
  <label>Radio:</label>
  <input type="range" />
</div>
```

**Reglas:**

- IDs descriptivos
- Clases CSS en kebab-case
- Atributos en orden: id, class, type, etc.
- Cierra todos los tags correctamente

### Naming Conventions

```javascript
// Variables y funciones: camelCase
const imageRadius = 50;
function applyEffect() {}

// Constantes: UPPER_SNAKE_CASE
const MAX_RADIUS = 100;
const DEFAULT_PATTERN = 'circular';

// Clases: PascalCase
class HalftoneProcessor {}
```

---

## 📝 Commits y Mensajes

### Formato de Commits

```
[Tipo]: Descripción breve

Descripción más detallada si es necesaria.
Explica qué y por qué, no el cómo.

Fixes #123
```

### Tipos de Commits

```
feat:     Nueva feature
fix:      Arreglé un bug
docs:     Cambios a documentación
style:    Formato, semicolons, etc (no cambio lógica)
refactor: Reorganicé código (sin cambiar funcionalidad)
perf:     Mejora de rendimiento
test:     Agregué/cambié tests
chore:    Actualizaciones de dependencias, etc
```

### Ejemplos

```bash
# Feature nueva
git commit -m "feat: agregar soporte para patrón personalizado"

# Bug fix
git commit -m "fix: resolver congelación con imágenes grandes"

# Documentación
git commit -m "docs: actualizar guía de instalación"

# Con descripción detallada
git commit -m "feat: mejorar rendimiento del algoritmo

- Optimicé el cálculo de puntos
- Agregué caché para valores frecuentes
- Redujo tiempo en 40% para imágenes grandes

Fixes #456"
```

---

## 🔍 Revisión de Código

### Qué esperamos en un PR

**Calidad:**
- Código limpio y legible
- Sin duplicación
- Bien estructurado

**Testing:**
- Features nuevas incluyen tests
- Bugs tienen tests que los reproduzcan
- Todos los tests pasan

**Documentación:**
- README actualizado
- Cambios significativos documentados
- Comentarios en código complejo

**Comunicación:**
- Descripción clara del PR
- Responde a feedback profesionalmente
- Mantén la conversación constructiva

---

## 📚 Recursos Útiles

- [Adobe UXP Documentation](https://developer.adobe.com/photoshop/uxp/)
- [JavaScript Standards](https://standardjs.com/)
- [GitHub Flow Guide](https://guides.github.com/introduction/flow/)
- [Conventional Commits](https://www.conventionalcommits.org/)

---

## 🙋 Preguntas?

¿Necesitas ayuda?

1. Lee la [Documentación](README.md)
2. Busca en [GitHub Discussions](https://github.com/rayzarazua/photoshop-halftone-preview-plugin/discussions)
3. Abre una [Discussion](https://github.com/rayzarazua/photoshop-halftone-preview-plugin/discussions/new) si no encuentras respuesta

---

## 🎯 Roadmap y Oportunidades

### Áreas donde buscamos contribución:

**Frontend:**
- Mejorar interfaz de usuario
- Agregar más patrones de halftone
- Optimizar rendimiento

**Backend:**
- Mejorar algoritmo de procesamiento
- Agregar nuevas features
- Optimizar caché

**Documentación:**
- Traducir a otros idiomas
- Crear video tutoriales
- Escribir blog posts

**Testing:**
- Agregar test coverage
- Automatizar tests
- Testing en diferentes versiones de Photoshop

**DevOps:**
- Mejorar CI/CD
- Automatizar releases
- Mejorar herramientas de build

---

## 📈 Créditos

Todos los contribuyentes serán reconocidos en:
- Archivo CONTRIBUTORS.md
- Release notes
- GitHub contributors page

¡Gracias por contribuir! 🙏

---

**Última actualización**: 2026-08-25  
**Versión**: 1.0.0

¿Listo para contribuir? ¡Comienza con un issue o discussion! 🚀
