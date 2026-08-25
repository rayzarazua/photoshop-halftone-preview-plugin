# Preguntas Frecuentes (FAQ)

## 🤔 Preguntas Generales

### ¿Qué es un efecto Halftone?
El **halftone** es una técnica de impresión clásica que simula tonos continuos usando patrones de puntos. El tamaño y la densidad de estos puntos crean la ilusión de diferentes tonos de gris o color. Este efecto es muy utilizado en:
- Impresión tradicional (periódicos, revistas)
- Arte pop (estilo Andy Warhol)
- Diseño gráfico moderno
- Fotografía artística

### ¿En qué versiones de Photoshop funciona el plugin?
El plugin es compatible con:
- ✅ **Photoshop 2022** (23.0.0 y superiores)
- ✅ **Photoshop 2023** (24.0.0 y superiores)
- ✅ **Photoshop 2024** (25.0.0 y superiores)
- ❌ Versiones anteriores a Photoshop 2022 no son soportadas

### ¿Es gratuito el plugin?
Sí, el plugin es **completamente gratuito** y de código abierto bajo licencia MIT. Puedes usar, modificar y distribuir el código libremente.

### ¿En qué sistemas operativos funciona?
- ✅ **Windows**: Windows 10 y posteriores
- ✅ **macOS**: macOS 10.13 (High Sierra) y posteriores
- ❌ **Linux**: No está soportado

### ¿Puedo usar el plugin en versiones portátiles o crack de Photoshop?
**No recomendamos** usar software pirata. El plugin está diseñado para versiones legales de Photoshop. Si tienes problemas con versiones no oficiales, no podemos proporcionar soporte.

---

## 📥 Instalación y Configuración

### ¿Cómo instalo el plugin?
Para instrucciones detalladas, consulta [INSTALLATION.md](INSTALLATION.md). En resumen:
1. Descarga el plugin desde GitHub
2. Abre Photoshop
3. Ve a Plugins → Development → Load Plugin
4. Selecciona el archivo `manifest.json`
5. ¡El plugin está listo para usar!

### ¿Puedo tener múltiples versiones del plugin instaladas?
**Sí**, puedes instalar varias versiones si las mantienes en carpetas diferentes y cargas cada una individualmente. Sin embargo, esto puede causar conflictos, así que **no se recomienda** para uso normal.

### El plugin no aparece después de cargarlo, ¿qué hago?
Prueba estas soluciones:
1. Verifica que seleccionaste el archivo correcto (`manifest.json`)
2. Cierra y reabre Photoshop completamente
3. Intenta cargar el plugin nuevamente
4. Verifica que tienes la versión de Photoshop 2022 o superior

### ¿Cómo desinstalo el plugin?
Simplemente elimina la carpeta del plugin. Si cargaste el plugin usando "Load Plugin", no necesitas hacer nada más. Si lo instalaste en la carpeta del sistema, elimina la carpeta de allí.

### ¿Necesito conexión a internet para usar el plugin?
**No**, el plugin funciona completamente offline. No requiere internet en absoluto.

---

## 🎨 Uso y Funcionalidad

### ¿Cuál es la diferencia entre los patrones disponibles?
- **Circular**: Puntos redondos clásicos, ideal para efectos tradicionales
- **Diamond**: Puntos en forma de diamante, crea efectos más dinámicos
- **Square**: Puntos cuadrados, proporciona un aspecto más geométrico
- **Line**: Patrón de líneas, simula impresión de periódico de alta calidad

### ¿Qué significa el "Ángulo" en el plugin?
El ángulo controla la rotación del patrón de tramado:
- **0°**: Patrón horizontal/vertical estándar
- **45°**: Patrón diagonal, evita moiré en ciertas imágenes
- **Otros ángulos**: Crea efectos direccionales únicos

### ¿Para qué sirve la opción "Escala de Grises"?
Esta opción convierte tu imagen a blanco y negro antes de aplicar el efecto halftone. Es útil para:
- Crear efectos vintage B/N
- Simular fotocopias antiguas
- Reducir complejidad en imágenes a color

### ¿Qué radio debería usar?
Depende de tu imagen y efecto deseado:
- **1-20**: Efecto fino y detallado
- **30-50**: Balance entre detalle y efecto (recomendado)
- **60-100**: Efecto dramático y artístico

### ¿Puedo aplicar el plugin parcialmente a mi imagen?
Actualmente, el plugin aplica el efecto a toda la imagen. Si quieres un efecto parcial:
1. Crea una selección en Photoshop antes de abrir el plugin
2. O aplica el efecto a una capa separada y ajusta la opacidad

### ¿Se puede deshacer el efecto después de aplicarlo?
Sí, usa **Ctrl+Z** (Windows) o **Cmd+Z** (macOS) en Photoshop para deshacer. También puedes hacer clic en "Restablecer" en el panel del plugin.

---

## ⚡ Rendimiento y Problemas

### El plugin se congela o es muy lento
**Causas posibles:**
- Imagen muy grande
- Valores de radio demasiado altos
- Computadora con recursos limitados

**Soluciones:**
1. Reduce el tamaño de la imagen (Image → Scale Image)
2. Reduce el valor del Radio a menos de 50
3. Cierra otras aplicaciones pesadas
4. Reinicia Photoshop

### ¿Por qué mi imagen se ve pixelada después del efecto?
Esto es **normal y esperado**. El efecto halftone deliberadamente crea puntos visibles. Si quieres un efecto más sutil:
1. Reduce el valor del Radio
2. Usa un patrón más fino como "Line"
3. Reduce la opacidad de la capa (si usas capas)

### El efecto no es visible en mi imagen
**Posibles razones:**
1. El Radio es demasiado pequeño (aumenta a 30-50)
2. La imagen es muy pequeña (zoom in para ver mejor)
3. El modo de color es incorrecto (usa RGB si es posible)

**Soluciones:**
- Aumenta el valor del Radio
- Zoom in en tu imagen (View → Zoom In)
- Convierte tu imagen a RGB (Image → Mode → RGB)

### ¿Por qué el efecto aparece diferente en pantalla vs. impresión?
Esto se debe a:
- Diferencias entre monitor y impresora
- Calibración de color
- Configuración de impresión

**Tip**: Previsualiiza siempre antes de imprimir usando Print Preview.

---

## 💾 Guardado y Exportación

### ¿En qué formatos puedo guardar mi imagen después del efecto?
Puedes guardar en cualquier formato que Photoshop soporta:
- ✅ PSD (Photoshop)
- ✅ JPG (recomendado para web)
- ✅ PNG (con transparencia)
- ✅ TIFF (para impresión)
- ✅ GIF (animado)
- ✅ WebP (web moderno)

### ¿Cómo guardo la imagen después de aplicar el efecto?
1. Ve a **File → Export As** (o Save As)
2. Selecciona tu formato preferido
3. Ajusta las opciones de calidad
4. Haz clic en **Export**

### ¿Puedo guardar los parámetros para usarlos después?
Actualmente, el plugin no tiene una función de "presets". Para reutilizar configuraciones:
1. Anota los valores que usaste
2. O toma una captura de pantalla del panel
3. Luego replica los mismos valores en futuras sesiones

---

## 🐛 Problemas Técnicos

### Me da un error "Manifest.json not found"
**Soluciones:**
1. Asegúrate de estar en la carpeta raíz del plugin
2. Verifica que el archivo `manifest.json` existe
3. Verifica el nombre exacto (sensible a mayúsculas): `manifest.json`
4. Intenta descargar nuevamente el plugin

### El plugin no responde a los clics en los sliders
**Soluciones:**
1. Reinicia el plugin
2. Cierra y reabre Photoshop
3. Intenta hacer clic directamente en el campo de texto e ingresa un valor
4. Asegúrate de que Photoshop tiene foco de ventana

### Ver un mensaje de error en la consola del navegador
Este es un problema de desarrollo. Por favor:
1. Toma una captura de pantalla del error
2. Abre un [Issue en GitHub](https://github.com/rayzarazua/photoshop-halftone-preview-plugin/issues)
3. Incluye detalles sobre tu sistema operativo y versión de Photoshop

### El plugin se cierra inesperadamente
**Causas posibles:**
- Plugin incompatible con tu versión de Photoshop
- Corrupted installation
- Conflicto con otro plugin

**Soluciones:**
1. Desinstala y reinstala el plugin
2. Asegúrate de que Photoshop está actualizado
3. Desactiva otros plugins para probar
4. Abre un Issue en GitHub si persiste

---

## 🔧 Características Técnicas

### ¿Qué lenguajes se utilizan en el plugin?
El plugin está construido con:
- **HTML5**: Interfaz de usuario
- **CSS3**: Estilos y diseño
- **JavaScript**: Lógica del plugin
- **UXP (Adobe UXP)**: API de Photoshop

### ¿Puedo modificar el código fuente?
**Sí**, el código es de código abierto bajo licencia MIT. Puedes:
- Descargarlo desde [GitHub](https://github.com/rayzarazua/photoshop-halftone-preview-plugin)
- Modificarlo para tus necesidades
- Crear tu propia versión
- Contribuir cambios de nuevo al proyecto

### ¿Dónde encuentro el código fuente?
El código completo está disponible en:
https://github.com/rayzarazua/photoshop-halftone-preview-plugin

### ¿Cómo reporte un bug o sugiero una mejora?
1. Ve a [GitHub Issues](https://github.com/rayzarazua/photoshop-halftone-preview-plugin/issues)
2. Haz clic en "New Issue"
3. Describe el problema o sugerencia detalladamente
4. Incluye capturas de pantalla si es posible

---

## 📊 Casos de Uso

### ¿Para qué puedo usar el plugin?
Algunos casos de uso populares:
- **Fotografía**: Crear efectos retro/vintage
- **Diseño Gráfico**: Generar texturas y patrones
- **Arte Digital**: Transformar fotos en arte
- **Marketing**: Crear contenido visual único
- **Educación**: Aprender sobre técnicas de impresión
- **Impresión**: Simular técnicas de impresión clásica

### ¿Puedo usar las imágenes generadas comercialmente?
**Sí**, puedes usar las imágenes procesadas con el plugin para propósitos comerciales sin restricciones, siempre que respetes los derechos de las imágenes originales.

### ¿Hay licencia Creative Commons o similar?
El plugin en sí está bajo licencia MIT (código abierto). Las imágenes que generes son totalmente tuyas para usar como desees.

---

## 💻 Compatibilidad

### ¿El plugin funciona en Photoshop para iPad?
**No**, actualmente el plugin solo funciona en Photoshop para Desktop (Windows/macOS). Photoshop para iPad tiene limitaciones diferentes.

### ¿Es compatible con Photoshop Elements?
**No**, Photoshop Elements no soporta plugins UXP. Solo funciona con Adobe Photoshop completo.

### ¿Funciona en Affinity Photo o GIMP?
**No**, este es un plugin específico de Adobe Photoshop. Otros editores de imágenes tienen sus propias APIs diferentes.

---

## 🤝 Soporte y Comunidad

### ¿Dónde puedo obtener ayuda?
Tienes varias opciones:
1. **Documentación**: Lee [INSTALLATION.md](INSTALLATION.md) y [USAGE.md](USAGE.md)
2. **GitHub Issues**: Para reportar bugs
3. **GitHub Discussions**: Para hacer preguntas
4. **Stack Overflow**: Etiqueta `photoshop-plugin`

### ¿Cómo contribuyo al proyecto?
¡Las contribuciones son bienvenidas!
1. Haz un fork del repositorio
2. Crea una rama para tu feature
3. Haz commit de tus cambios
4. Envía un Pull Request
5. ¡Esperamos tu contribution!

### ¿Dónde reporto información de seguridad?
Si encuentras una vulnerabilidad de seguridad:
1. **NO** la publiques públicamente
2. Envía un email a: [contacto o email del desarrollador]
3. Describe la vulnerabilidad detalladamente
4. Permitiremos un tiempo razonable para un fix

### ¿Hay un changelog o historial de versiones?
Sí, consulta el archivo `CHANGELOG.md` en el repositorio para ver todas las versiones y cambios.

---

## 📱 Otros

### ¿El plugin tiene interfaz móvil?
**No**, Photoshop en dispositivos móviles es diferente y no soporta plugins UXP de escritorio.

### ¿Puedo usar el plugin sin Photoshop?
**No**, el plugin está diseñado específicamente para funcionar dentro de Photoshop y depende de su API.

### ¿Hay versión premium o de pago?
**No**, y probablemente nunca la habrá. Creemos en software de código abierto y gratuito.

### ¿Cuál es el plan futuro del plugin?
Revisamos regularmente las sugerencias de usuarios para posibles mejoras:
- Más patrones de halftone
- Interfaz mejorada
- Mejor rendimiento
- Soporte para selecciones parciales

¡Mira el repositorio en GitHub para los últimos planes!

---

## ✨ Más Preguntas?

Si tu pregunta no aparece aquí:
1. Revisa la [documentación completa](USAGE.md)
2. Abre una [Discussion en GitHub](https://github.com/rayzarazua/photoshop-halftone-preview-plugin/discussions)
3. Reporta un [Issue en GitHub](https://github.com/rayzarazua/photoshop-halftone-preview-plugin/issues)

¡Estamos aquí para ayudarte! 😊

---

**Última actualización**: 2026-08-25  
**Versión**: 1.0.0
