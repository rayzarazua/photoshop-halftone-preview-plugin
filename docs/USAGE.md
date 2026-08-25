# Guía de Uso

## 📖 Introducción

El **Photoshop Halftone Preview Plugin** es una herramienta poderosa que permite previsualizar y ajustar efectos de tramado (halftone) en tiempo real sobre tus imágenes en Adobe Photoshop.

## 🎯 Características Principales

- **Previsualización en Tiempo Real**: Ve los cambios mientras ajustas los parámetros
- **Control Total del Radio**: Ajusta el tamaño de los puntos del tramado (1-100 píxeles)
- **Múltiples Patrones**: Elige entre diferentes estilos de tramado
- **Rotación del Patrón**: Gira el ángulo del tramado (0-360°)
- **Modo Escala de Grises**: Convierte la imagen a escala de grises antes de aplicar el efecto
- **Información en Tiempo Real**: Mensajes de estado y retroalimentación inmediata

## 🖼️ Interfaz del Plugin

### Panel Principal

El panel del plugin se divide en las siguientes secciones:

```
┌─────────────────────────────────┐
│   HALFTONE PREVIEW PLUGIN        │
├─────────────────────────────────┤
│                                  │
│  Radio del Tramado: [████░] 50   │
│                                  │
│  Patrón: [Circular ▼]            │
│                                  │
│  Ángulo: [████░] 45°             │
│                                  │
│  ☐ Escala de Grises              │
│                                  │
│  [Aplicar Efecto] [Restablecer]  │
│                                  │
│  Status: Documento cargado ✓     │
└─────────────────────────────────┘
```

### Componentes

#### 1. **Radio del Tramado (Halftone Radius)**
- **Rango**: 1 - 100 píxeles
- **Predeterminado**: 50
- **Efecto**: Controla el tamaño de los puntos del tramado
  - Valores bajos (1-20): Tramado fino y detallado
  - Valores medios (30-50): Balance entre detalle y efecto
  - Valores altos (60-100): Tramado grueso y artístico

#### 2. **Patrón (Pattern)**
- **Circular**: Puntos redondos clásicos
- **Diamond**: Puntos en forma de diamante
- **Square**: Puntos cuadrados
- **Line**: Patrón de líneas
- **Selección**: Dropdown menú con todas las opciones

#### 3. **Ángulo (Angle)**
- **Rango**: 0 - 360 grados
- **Predeterminado**: 0°
- **Efecto**: Rota la orientación del patrón de tramado
- **Casos de uso**: Crear efectos direccionales o corregir aliasing

#### 4. **Escala de Grises (Grayscale)**
- **Tipo**: Checkbox (Activar/Desactivar)
- **Predeterminado**: Desactivado
- **Efecto**: Convierte la imagen a escala de grises antes de aplicar el tramado
- **Tip**: Ideal para imágenes en color que necesitan efecto vintage

#### 5. **Botones de Acción**
- **Aplicar Efecto**: Aplica permanentemente los cambios a la imagen
- **Restablecer**: Vuelve a los valores predeterminados

#### 6. **Barra de Estado**
- Muestra el estado actual del plugin
- Mensajes informativos sobre acciones realizadas
- Indicador visual de carga

## 📋 Pasos Básicos de Uso

### 1. Abrir una Imagen

```
Archivo → Abrir
Selecciona tu imagen (JPG, PNG, PSD, etc.)
Haz clic en "Abrir"
```

### 2. Acceder al Plugin

**Opción A - Menú Plugins (Photoshop 2022-2023):**
```
Plugins → Development → Halftone Preview
```

**Opción B - Panel Plugins (Photoshop 2024+):**
```
Window → Plugins → Busca "Halftone Preview"
```

### 3. Ajustar Parámetros

Una vez que el plugin esté abierto:

1. **Ajusta el Radio**:
   - Arrastra el slider del radio
   - O escribe un valor directamente
   - Verás los cambios en tiempo real

2. **Selecciona un Patrón**:
   - Haz clic en el dropdown "Patrón"
   - Elige tu estilo favorito
   - La previsualización se actualiza inmediatamente

3. **Ajusta el Ángulo**:
   - Arrastra el slider del ángulo
   - O escribe un valor en grados
   - Útil para crear efectos direccionales

4. **Opcional - Escala de Grises**:
   - Marca la casilla si deseas convertir a B/N
   - Ideal para fotos antiguas o artísticas

### 4. Aplicar o Descartar

- **Para mantener los cambios**: Haz clic en "Aplicar Efecto"
- **Para empezar de nuevo**: Haz clic en "Restablecer"
- **Para descartar todo**: Cierra el plugin sin aplicar

## 💡 Ejemplos de Uso

### Ejemplo 1: Efecto Periódico Clásico

```
Radio: 30
Patrón: Circular
Ángulo: 0°
Escala de Grises: Desactivado
```
**Resultado**: Efecto tradicional de impresión de periódico

### Ejemplo 2: Arte Pop Moderno

```
Radio: 15
Patrón: Diamond
Ángulo: 45°
Escala de Grises: Desactivado
```
**Resultado**: Estilo pop art con ángulo diagonal

### Ejemplo 3: Fotografía Vintage B/N

```
Radio: 25
Patrón: Circular
Ángulo: 0°
Escala de Grises: Activado
```
**Resultado**: Efecto de fotografía antigua en blanco y negro

### Ejemplo 4: Efecto de Trama Fina

```
Radio: 8
Patrón: Line
Ángulo: 15°
Escala de Grises: Desactivado
```
**Resultado**: Efecto de impresión de alta resolución

### Ejemplo 5: Tramado Artístico Grueso

```
Radio: 80
Patrón: Square
Ángulo: 0°
Escala de Grises: Desactivado
```
**Resultado**: Efecto artístico muy evidente y llamativo

## ⚙️ Configuraciones Preestablecidas

### Perfil: Fotógrafo
- Radio: 20
- Patrón: Circular
- Ángulo: 0°
- Grayscale: No

### Perfil: Diseñador Gráfico
- Radio: 15
- Patrón: Diamond
- Ángulo: 45°
- Grayscale: No

### Perfil: Artista Vintage
- Radio: 35
- Patrón: Circular
- Ángulo: 0°
- Grayscale: Sí

### Perfil: Efecto Periódico
- Radio: 50
- Patrón: Circular
- Ángulo: 0°
- Grayscale: No

### Perfil: Arte Moderno
- Radio: 10
- Patrón: Line
- Ángulo: 30°
- Grayscale: No

## 🎨 Consejos y Trucos

### Para Mejores Resultados

1. **Elige el Radio Correcto**
   - Imágenes de alta resolución: radio 20-40
   - Imágenes medianas: radio 30-60
   - Imágenes pequeñas: radio 5-20

2. **Combina Parámetros**
   - Combina patrones diferentes con ángulos para evitar monotonía
   - El ángulo de 45° siempre funciona bien con cualquier patrón

3. **Usa Capas**
   - Crea una copia de tu imagen antes de aplicar
   - Así puedes comparar el antes y el después
   - O mezcla capas para un efecto más sutil

4. **Escala de Grises Inteligente**
   - Úsala solo cuando quieras efecto vintage
   - En imágenes a color, puede perder información importante
   - Prueba ambas opciones y elige la mejor

5. **Iteración y Ajuste**
   - No apliques los cambios de inmediato
   - Ajusta los parámetros varias veces
   - Usa "Restablecer" si no te gusta el resultado

### Casos de Uso Comunes

**Fotografía:**
- Crea efectos retro en fotos antiguas
- Simula técnicas de impresión clásica
- Convierte fotos a arte gráfico

**Diseño Gráfico:**
- Genera texturas para fondos
- Crea efectos de impresión profesional
- Diseña portadas de estilo vintage

**Arte Digital:**
- Transforma fotos en arte pop
- Crea efectos de ilustración
- Experimenta con estilos visuales

**Marketing/Social Media:**
- Destaca imágenes en redes sociales
- Crea contenido visualmente distintivo
- Genera efectos de póster atractivo

## 🔄 Flujo de Trabajo Recomendado

1. **Preparación**
   - Abre tu imagen en Photoshop
   - Asegúrate de que esté en modo RGB o Grayscale

2. **Exploración**
   - Abre el plugin
   - Prueba diferentes patrones
   - Experimenta con los ángulos

3. **Refinamiento**
   - Ajusta el radio para obtener el efecto deseado
   - Activa/desactiva la escala de grises
   - Compara resultados

4. **Aplicación**
   - Una vez satisfecho, haz clic en "Aplicar Efecto"
   - Guarda tu trabajo (Archivo → Guardar)

5. **Exportación**
   - Exporta en tu formato preferido (JPG, PNG, etc.)
   - O continúa editando en Photoshop

## ⚠️ Limitaciones y Consideraciones

### Limitaciones Conocidas

- El plugin funciona mejor con imágenes RGB
- Imágenes muy pequeñas pueden no mostrar bien el efecto
- Cambios muy drásticos pueden afectar el rendimiento
- El efecto se aplica a toda la imagen (no hay selecciones)

### Rendimiento

- Imágenes grandes (>4000px) pueden tardar más en procesar
- Si experimentas lentitud, reduce el radio o tamaño de imagen
- Cierra otras aplicaciones pesadas para mejor rendimiento

### Compatibilidad

- ✅ Photoshop 2022+
- ✅ Windows 10/11
- ✅ macOS 10.13+
- ✅ Imágenes RGB, Grayscale, CMYK*

*CMYK puede requerir conversión previa

## 🆘 Solución de Problemas

### El plugin no muestra cambios
- Verifica que hayas abierto una imagen
- Intenta mover los sliders manualmente
- Reinicia el plugin (cierra y reabre)

### El efecto es demasiado sutil
- Aumenta el valor del Radio
- Desactiva la escala de grises (si estaba activada)
- Prueba con un patrón más visible

### El plugin se congela
- Reduce el tamaño de la imagen
- Disminuye el valor del Radio
- Cierra otras aplicaciones

### Los colores se ven extraños
- Verifica el modo de color de tu imagen
- Intenta convertir a RGB
- Desactiva y reactiva el checkbox de Grayscale

## 📚 Recursos Adicionales

- [Documentación de Instalación](INSTALLATION.md)
- [FAQ y Preguntas Frecuentes](FAQ.md)
- [Solución de Problemas Avanzada](TROUBLESHOOTING.md)
- [GitHub Issues](https://github.com/rayzarazua/photoshop-halftone-preview-plugin/issues)

## 💬 Feedback y Sugerencias

¿Tienes ideas para mejorar el plugin?
- Abre un [Issue en GitHub](https://github.com/rayzarazua/photoshop-halftone-preview-plugin/issues)
- Participa en [Discussions](https://github.com/rayzarazua/photoshop-halftone-preview-plugin/discussions)
- Comparte tus creaciones con nosotros

---

**Última actualización**: 2026-08-25  
**Versión**: 1.0.0
