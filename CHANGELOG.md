# Changelog

Todos los cambios importantes en este proyecto se documentarán en este archivo.

El formato se basa en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/),
y este proyecto sigue [Semantic Versioning](https://semver.org/lang/es/).

## [1.0.0] - 2026-08-25

### Added
- ✨ Versión inicial del plugin
- 🎯 Parámetros ajustables para Halftone (radio, tipo, ángulo)
- 🖼️ Opción de conversión a escala de grises
- 📊 Control avanzado de Levels (input black/white, gamma, output black/white)
- 🎨 Interfaz de usuario moderna y responsive
- ⚡ Previsualización en tiempo real
- 💾 Botones para aplicar filtro y reiniciar valores
- 📢 Mensajes de estado y feedback
- 📚 Documentación completa en README
- 🐛 Manejo básico de errores

### Technical Details
- UXP Manifest Version 4
- Compatibilidad con Photoshop 2022+ (versión 23.0.0+)
- Uso de `executeAsModal()` para operaciones seguras
- Integración con API de Action de Photoshop
- Estilos CSS3 personalizados con tema oscuro

### Features Planeadas para futuras versiones
- [ ] Guardado de presets personalizados
- [ ] Histograma en tiempo real
- [ ] Más tipos de patrones halftone (cross, square, line, circle)
- [ ] Soporte para múltiples capas simultáneamente
- [ ] Comparación antes/después (split view)
- [ ] Exportar configuración como JSON
- [ ] Importar configuración desde JSON
- [ ] Soporte para capas ajustables (Smart Objects)
- [ ] Historial de cambios mejorado (undo/redo local)
- [ ] Modo oscuro/claro automático según tema de Photoshop
- [ ] Animación de cambios de parámetros
- [ ] Ayuda contextual (tooltips)
- [ ] Accesos directos de teclado
- [ ] Integración con bibliotecas de Photoshop

## Notas de Desarrollo

### Dependencias
- Adobe Photoshop 2022 o superior
- UXP Runtime (incluido en Photoshop)
- No hay dependencias npm externas en la versión 1.0.0

### Archivos Principales
- `manifest.json`: Configuración y definición del plugin (1.3 KB)
- `index.html`: Interfaz de usuario (9.5 KB)
- `index.js`: Lógica y funcionalidad (10.8 KB)
- `package.json`: Metadatos del proyecto (489 B)
- `README.md`: Documentación (9.3 KB)
- `CHANGELOG.md`: Este archivo

### Estructura Recomendada de Directorios
```
project/
├── manifest.json
├── index.html
├── index.js
├── package.json
├── README.md
├── CHANGELOG.md
├── LICENSE
├── .gitignore
├── icons/
│   ├── plugin-icon.png (48x48)
│   ├── dark.png (23x23)
│   └── light.png (23x23)
└── docs/
    ├── INSTALLATION.md
    ├── USAGE.md
    └── TROUBLESHOOTING.md
```

## Cambios Conocidos

### Limitaciones Actuales
1. La previsualización requiere que el documento esté activo
2. No soporta múltiples capas en una sola operación
3. El historial de cambios depende de Photoshop (Ctrl+Z/Cmd+Z)
4. No hay persistencia de presets entre sesiones

### Comportamiento Esperado
- Los cambios en los sliders se aplican en tiempo real
- El botón "Aplicar" confirma los cambios permanentemente
- El botón "Reiniciar" revierte a valores por defecto
- Los mensajes de estado indican el progreso de operaciones

## Seguridad

### Cambios de Seguridad
- ✅ Uso de `executeAsModal()` para operaciones seguras en Photoshop
- ✅ Validación de entrada de parámetros
- ✅ Manejo de excepciones en operaciones críticas
- ✅ Sin acceso a archivos del sistema
- ✅ Sin conexión a internet requerida

## Performance

### Optimizaciones en v1.0.0
- Sliders con actualización eficiente de DOM
- Uso de `executeAsModal()` para evitar bloqueos
- Caché de referencias de elementos DOM
- Gestión eficiente de eventos

### Métricas Esperadas
- Tamaño total del plugin: ~50 KB
- Memoria base: ~5-10 MB
- Tiempo de carga inicial: < 2 segundos
- Tiempo de aplicación de filtro: 2-10 segundos (depende de tamaño de imagen)

## Testing

### Casos de Prueba Recomendados
- [ ] Abrir plugin con documento vacío
- [ ] Abrir plugin con imagen de 1000x1000px
- [ ] Abrir plugin con imagen de 5000x5000px
- [ ] Cambiar slider de radio de 1 a 20
- [ ] Cambiar tipo de patrón halftone
- [ ] Activar/desactivar grayscale
- [ ] Ajustar todos los levels simultáneamente
- [ ] Aplicar filtro y verificar resultado
- [ ] Reiniciar y verificar valores por defecto
- [ ] Probar en diferentes resoluciones de pantalla

## Compatibilidad

### Sistemas Operativos Soportados
- ✅ Windows 10 y superior
- ✅ Windows 11
- ✅ macOS 10.13 (High Sierra) y superior
- ✅ macOS 11, 12, 13, 14+

### Versiones de Photoshop Soportadas
- ✅ Photoshop 2022 (22.0+)
- ✅ Photoshop 2023 (23.0+)
- ✅ Photoshop 2024 (24.0+)
- ✅ Photoshop 2025+ (esperado)

### Resoluciones de Pantalla Soportadas
- ✅ 1024x768 (mínimo recomendado: 1366x768)
- ✅ 1366x768
- ✅ 1920x1080
- ✅ 2560x1440
- ✅ Pantallas 4K (3840x2160)

## Contribuyentes

### Versión 1.0.0
- **Desarrollador Principal**: rayzarazua
- **Diseño de UI**: rayzarazua
- **Documentación**: rayzarazua

## Licencia

Este proyecto está bajo licencia MIT. Ver `LICENSE` para más detalles.

---

## Preguntas Frecuentes

**P: ¿Por qué el plugin no aparece en Photoshop?**
R: Asegúrate de que has seleccionado correctamente el archivo `manifest.json` durante la instalación.

**P: ¿Puedo usar este plugin en Photoshop 2020?**
R: No, requiere Photoshop 2022 o superior debido a dependencias de UXP.

**P: ¿Cómo guardo mis presets?**
R: En la versión 1.0.0 no hay guardado de presets. Esto está planeado para versiones futuras.

**P: ¿Es seguro usar este plugin?**
R: Sí, el código fuente es completamente abierto y auditable en GitHub.

---

**Última actualización**: 2026-08-25  
**Versión actual**: 1.0.0  
**Estado**: Activo y en desarrollo continuo
