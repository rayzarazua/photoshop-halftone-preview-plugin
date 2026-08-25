# Photoshop Halftone Preview Plugin

Plugin UXP para Adobe Photoshop que permite previsualizar en tiempo real el filtro **Halftone** con parámetros ajustables, conversión a escala de grises y control avanzado de niveles.

## ✨ Características Principales

### 🎯 Parámetros Halftone
- **Radio (Radius)**: Ajusta el tamaño de los puntos del halftone (1-20 píxeles)
- **Tipo de Patrón**: Selecciona entre Círculos, Líneas, Diamantes o Cuadrados
- **Ángulo**: Controla la rotación del patrón (0-360 grados)

### 🖼️ Procesamiento de Imagen
- **Convertir a Escala de Grises**: Opción checkbox para aplicar o no la conversión a blanco y negro
- Aplica automáticamente antes del halftone para mejor resultado

### 📊 Ajuste Avanzado de Levels
- **Punto Negro (Input)**: Rango 0-255 - Define qué valor se considera negro
- **Punto Blanco (Input)**: Rango 0-255 - Define qué valor se considera blanco
- **Gamma (Midtones)**: Ajuste de tonos medios (0.1-3.0)
- **Punto Negro (Output)**: Rango de salida negro (0-255)
- **Punto Blanco (Output)**: Rango de salida blanco (0-255)

### ⚡ Funcionalidades
- ✅ Previsualización en tiempo real
- ✅ Interfaz moderna y responsive
- ✅ Mensajes de estado informativos
- ✅ Botón para aplicar cambios permanentemente
- ✅ Botón para reiniciar todos los valores

## 🚀 Requisitos Técnicos

- **Adobe Photoshop**: 2022 o superior (versión 23.0.0+)
- **UXP Runtime**: Habilitado en Photoshop
- **Sistema Operativo**: Windows 10+ o macOS 10.13+

## 📦 Instalación

### Método 1: Desarrollo Local
1. **Clona este repositorio**:
   ```bash
   git clone https://github.com/rayzarazua/photoshop-halftone-preview-plugin.git
   cd photoshop-halftone-preview-plugin
   ```

2. **Abre Adobe Photoshop**

3. **Ve a**: `Plugins > Development > Load Plugin` (o `Window > Plugins` para versiones antiguas)

4. **Selecciona** el archivo `manifest.json` de este proyecto

### Método 2: Desde Panel de Plugins
1. En Photoshop: `Plugins > Plugins Panel`
2. Click en el icono de engranaje ⚙️
3. Selecciona `Load Plugin`
4. Navega a la carpeta del plugin y selecciona `manifest.json`

## 🎨 Guía de Uso

### Paso 1: Preparar la Imagen
1. Abre una imagen en Photoshop (archivo → abrir)
2. Selecciona la capa sobre la que quieres aplicar el efecto

### Paso 2: Acceder al Plugin
1. Ve a `Plugins > Halftone Preview` (si está instalado)
2. O abre el panel desde `Window > Plugins` y busca "Halftone Preview"

### Paso 3: Configurar Parámetros Halftone
- **Radio**: Mueve el slider entre 1-20 píxeles (valor por defecto: 4)
- **Tipo de Patrón**: Selecciona el patrón que prefieras
- **Ángulo**: Ajusta la rotación (0-360 grados, por defecto: 45°)

### Paso 4: Aplicar Conversión a Escala de Grises (Opcional)
- Marca el checkbox si deseas convertir la imagen a B/N

### Paso 5: Ajustar Levels
- **Punto Negro (Input)**: Para aumentar el contraste en las sombras
- **Punto Blanco (Input)**: Para aumentar el contraste en los tonos claros
- **Gamma**: Para ajustar los tonos medios (< 1 oscurece, > 1 aclara)
- **Salida (Output)**: Para controlar el rango final de tonos

### Paso 6: Aplicar o Cancelar
- **Aplicar Filtro**: Confirma y aplica todos los cambios permanentemente
- **Reiniciar**: Vuelve a los valores por defecto y deshace cambios

## 🔄 Flujo de Trabajo Recomendado

```
1. Abre imagen → 2. Ajusta Halftone → 3. Aplica Grayscale (si lo deseas)
    ↓                    ↓                      ↓
4. Afina Levels → 5. Visualiza cambios → 6. Aplica o Reinicia
```

## 📁 Estructura del Proyecto

```
photoshop-halftone-preview-plugin/
├── manifest.json              # Configuración y metadatos del plugin
├── index.html                 # Interfaz HTML del usuario
├── index.js                   # Lógica JavaScript y funcionalidad
├── package.json               # Información del proyecto
├── README.md                  # Este archivo
├── CHANGELOG.md               # Historial de cambios
├── .gitignore                 # Archivos ignorados por Git
├── LICENSE                    # Licencia MIT
└── icons/
    ├── plugin-icon.png        # Icono principal (48x48)
    ├── dark.png               # Icono tema oscuro (23x23)
    └── light.png              # Icono tema claro (23x23)
```

## ⚙️ Detalles Técnicos

### Tecnologías Utilizadas
- **UXP**: Unified Extensibility Platform de Adobe
- **JavaScript**: Lógica del plugin
- **HTML5**: Estructura de la interfaz
- **CSS3**: Estilos modernos

### APIs de Photoshop Usadas
- `app.activeDocument`: Acceso al documento activo
- `action.do()`: Ejecución de comandos de Photoshop
- `executeAsModal()`: Ejecución de operaciones modales
- `app.layers`: Acceso a las capas del documento

### Parámetros Internos
- **halftone**: Filtro de semitonos
- **levels**: Ajuste de niveles de tonalidad
- **convertMode**: Conversión de modo de color (a escala de grises)

## 🐛 Solución de Problemas

### El plugin no aparece en Photoshop
**Problema**: El plugin está instalado pero no aparece en el menú
- ✅ Verifica que tienes Photoshop 2022+ instalado
- ✅ Revisa que UXP está habilitado (`Edit > Preferences > Plugins`)
- ✅ Intenta recargar el plugin desde `Plugins > Development > Load Plugin`

### "No hay documento abierto" error
**Problema**: Aparece este mensaje aunque tienes un documento abierto
- ✅ Cierra y reabre el panel del plugin
- ✅ Asegúrate de tener al menos una capa en el documento
- ✅ Verifica que la capa no está bloqueada

### Los cambios no se aplican
**Problema**: El botón "Aplicar Filtro" no hace nada
- ✅ Verifica que la imagen no está en modo de lectura
- ✅ Selecciona una capa antes de aplicar
- ✅ Comprueba que hay suficiente memoria disponible
- ✅ Intenta con una imagen más pequeña como prueba

### La previsualización es lenta
**Problema**: El plugin tarda en actualizar la previsualización
- ✅ Reduce el tamaño de la imagen
- ✅ Cierra otros programas para liberar memoria
- ✅ Reduce la complejidad de los valores (menos cambios radicales)

## 📊 Ejemplos de Uso

### Efecto Vintage/Periódico
```
Radio: 4-6
Tipo: Círculos
Ángulo: 45°
Grayscale: ✓ Activado
Levels Input: Negro=20, Blanco=235
Gamma: 1.0
```

### Efecto Pop Art
```
Radio: 8-10
Tipo: Diamantes
Ángulo: 30°
Grayscale: ✗ Desactivado
Levels Input: Negro=0, Blanco=255
Gamma: 1.2
```

### Efecto Ilustración
```
Radio: 2-3
Tipo: Líneas
Ángulo: 0°
Grayscale: ✓ Activado
Levels Input: Negro=10, Blanco=245
Gamma: 0.8
```

## 🔐 Seguridad y Privacidad

- ✅ Este plugin **no** recopila datos personales
- ✅ **No** requiere conexión a internet
- ✅ Todos los procesos ocurren **localmente** en tu computadora
- ✅ Código fuente completamente **abierto** y auditable

## 📝 Licencia

MIT License - Eres libre de usar, modificar y distribuir este plugin según los términos de la licencia MIT.

Ver [LICENSE](LICENSE) para más detalles.

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Si tienes ideas para mejorar este plugin:

1. **Fork** el repositorio
2. **Crea** una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. **Push** a la rama (`git push origin feature/AmazingFeature`)
5. **Abre** un Pull Request

## 🐛 Reporte de Bugs

Si encuentras un bug:
1. Ve a [Issues](https://github.com/rayzarazua/photoshop-halftone-preview-plugin/issues)
2. Haz click en "New Issue"
3. Describe el problema en detalle
4. Incluye screenshots si es posible

## 📞 Soporte

Para soporte y preguntas:
- 📧 Abre un [Issue](https://github.com/rayzarazua/photoshop-halftone-preview-plugin/issues)
- 💬 Revisa las [Discussions](https://github.com/rayzarazua/photoshop-halftone-preview-plugin/discussions)
- 📚 Consulta la [documentación oficial de UXP](https://developer.adobe.com/photoshop/uxp/)

## 🙏 Agradecimientos

- **Adobe** por proporcionar la plataforma UXP y la API de Photoshop
- **Comunidad de desarrolladores** de Photoshop
- **Ejemplos oficiales** de AdobeDocs

## 📈 Roadmap Futuro

- [ ] Guardado de presets personalizados
- [ ] Histograma en tiempo real
- [ ] Más tipos de patrones halftone
- [ ] Soporte para múltiples capas
- [ ] Comparación antes/después (split view)
- [ ] Exportar configuración como JSON
- [ ] Importar configuración desde JSON
- [ ] Soporte para capas ajustables
- [ ] Historial de cambios (undo/redo mejorado)
- [ ] Modo oscuro/claro automático

## 📄 Información Adicional

| Aspecto | Detalles |
|---------|----------|
| **Versión** | 1.0.0 |
| **Fecha** | 2026-08-25 |
| **Autor** | rayzarazua |
| **Estado** | Activo y en desarrollo |
| **Compatibilidad** | Photoshop 2022+ (PS 23.0+) |
| **Tamaño** | ~50 KB |

## 📜 Historial de Versiones

### [1.0.0] - 2026-08-25
**Versión Inicial**
- ✨ Parámetros ajustables para Halftone
- 🎨 Opción de conversión a escala de grises
- 📊 Control avanzado de Levels
- 🎯 Interfaz moderna y responsive
- ⚡ Previsualización en tiempo real
- 💾 Aplicar y reiniciar funcionalidades

---

**Hecho con ❤️ para la comunidad de Photoshop**

¿Te gustó este plugin? ⭐ Dale una estrella en GitHub para apoyar el desarrollo.
