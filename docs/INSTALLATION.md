# Guía de Instalación

## 🚀 Instalación Rápida

### Requisitos Previos
- **Adobe Photoshop** 2022 o superior (versión 23.0.0+)
- **Sistema Operativo**: Windows 10+ o macOS 10.13+
- **Espacio en disco**: ~50 MB (mínimo recomendado)

### Paso 1: Descargar el Plugin

#### Opción A: Desde GitHub
1. Ve a [rayzarazua/photoshop-halftone-preview-plugin](https://github.com/rayzarazua/photoshop-halftone-preview-plugin)
2. Haz clic en el botón verde **"Code"**
3. Selecciona **"Download ZIP"**
4. Extrae el archivo ZIP en una carpeta de tu preferencia

#### Opción B: Con Git
```bash
git clone https://github.com/rayzarazua/photoshop-halftone-preview-plugin.git
cd photoshop-halftone-preview-plugin
```

### Paso 2: Localizar Manifest.json
Asegúrate de que tienes el archivo `manifest.json` en la carpeta raíz del proyecto.

Estructura esperada:
```
photoshop-halftone-preview-plugin/
├── manifest.json      ← Este archivo
├── index.html
├── index.js
├── package.json
└── ...
```

### Paso 3: Abrir Photoshop

Inicia **Adobe Photoshop** normalmente.

### Paso 4: Cargar el Plugin

#### En Photoshop 2022-2023:
1. Ve a **Plugins** en el menú superior
2. Selecciona **"Development"**
3. Haz clic en **"Load Plugin"**
4. Navega a la carpeta del plugin
5. Selecciona el archivo **`manifest.json`**
6. Haz clic en **"Open"**

#### En Photoshop 2024+:
1. Ve a **Window** en el menú superior
2. Selecciona **"Plugins"**
3. En el panel, busca el icono de engranaje ⚙️
4. Haz clic en **"Load Plugin"**
5. Navega a la carpeta del plugin
6. Selecciona el archivo **`manifest.json`**
7. Haz clic en **"Open"**

### Paso 5: Verificar la Instalación

Después de cargar el plugin:
- ✅ Deberías ver el panel del plugin en Photoshop
- ✅ Aparecerá un mensaje de bienvenida
- ✅ Los controles (sliders, botones) estarán disponibles

## 🔧 Instalación Avanzada

### Instalación en Carpeta del Sistema (Opcional)

Para hacer que el plugin se cargue automáticamente cada vez que abres Photoshop:

#### En Windows:
1. Copia la carpeta del plugin a:
   ```
   C:\Users\[TuUsuario]\AppData\Roaming\Adobe\UXP Plugins\
   ```
2. Reinicia Photoshop

#### En macOS:
1. Copia la carpeta del plugin a:
   ```
   ~/Library/Application Support/Adobe/UXP Plugins/
   ```
2. Reinicia Photoshop

### Instalación Múltiple

Puedes instalar varias versiones del plugin simultaneamente si están en carpetas diferentes. Simplemente repite el proceso de carga para cada versión.

## 📋 Verificación Post-Instalación

Para verificar que todo está funcionando correctamente:

1. **Abre una imagen** en Photoshop (Archivo → Abrir)
2. **Accede al plugin** (Plugins → Halftone Preview o Window → Plugins)
3. **Prueba los controles**:
   - Mueve el slider de Radio
   - Cambia el tipo de patrón
   - Ajusta el ángulo
   - Marca/desmarca la opción de Grayscale
4. **Verifica los mensajes**:
   - Debe mostrar "Documento cargado correctamente" ✓
   - Debe mostrar "Previsualizando cambios..." cuando ajustes parámetros

Si todo funciona, ¡la instalación fue exitosa! ✅

## 🆘 Solución de Problemas de Instalación

### El plugin no aparece después de cargarlo
**Posibles soluciones:**
1. Verifica que seleccionaste el archivo correcto (`manifest.json`)
2. Cierra y reabre Photoshop
3. Intenta cargar el plugin nuevamente
4. Comprueba que tienes Photoshop 2022 o superior

### "Manifest.json not found" error
**Posibles soluciones:**
1. Asegúrate de estar en la carpeta raíz del proyecto
2. Verifica que el archivo `manifest.json` existe
3. Comprueba que el nombre del archivo es exactamente `manifest.json` (sensible a mayúsculas)

### El plugin no responde o se congela
**Posibles soluciones:**
1. Cierra el documento actual
2. Descarga nuevamente el plugin
3. Asegúrate de que tienes suficiente memoria disponible
4. Intenta reiniciar Photoshop

### "Permission denied" al copiar archivos
**En Windows:**
- Ejecuta el Explorador de archivos como Administrador
- O copia los archivos usando línea de comandos con permisos elevados

**En macOS:**
- Abre Terminal
- Usa el comando `sudo` si necesitas permisos de administrador

## 📦 Requisitos del Sistema Detallados

### Mínimos
- Photoshop 2022 (23.0.0)
- 4 GB de RAM
- 50 MB de espacio en disco
- Windows 10 o macOS 10.13

### Recomendados
- Photoshop 2024+ (24.0.0+)
- 8 GB de RAM o superior
- 100 MB de espacio en disco
- Windows 11 o macOS 12+

## ✅ Checklist de Instalación

- [ ] Descargué el plugin desde GitHub
- [ ] Extraje el archivo ZIP correctamente
- [ ] Verifiqué que existe `manifest.json` en la carpeta raíz
- [ ] Abrí Adobe Photoshop
- [ ] Fui a Plugins → Development → Load Plugin (o Window → Plugins)
- [ ] Seleccioné el archivo `manifest.json`
- [ ] El plugin se cargó sin errores
- [ ] Abrí una imagen en Photoshop
- [ ] El panel del plugin está visible
- [ ] Los controles responden a mis cambios

Si todos los puntos están marcados, ¡tu instalación está completa! 🎉

## 🚀 Siguientes Pasos

Una vez instalado correctamente:
1. Consulta la [Guía de Uso](USAGE.md) para aprender cómo usar el plugin
2. Revisa los [Ejemplos](USAGE.md#-ejemplos-de-uso) para inspiración
3. Lee la [Solución de Problemas](TROUBLESHOOTING.md) si tienes dudas

## 📞 Soporte

Si tienes problemas durante la instalación:
- 📧 Abre un [Issue en GitHub](https://github.com/rayzarazua/photoshop-halftone-preview-plugin/issues)
- 📚 Consulta la [documentación oficial de UXP](https://developer.adobe.com/photoshop/uxp/)
- 💬 Revisa las [Discussions en GitHub](https://github.com/rayzarazua/photoshop-halftone-preview-plugin/discussions)

---

**Última actualización**: 2026-08-25  
**Versión**: 1.0.0
