# Solución de Problemas Avanzada

## 🔍 Diagnóstico Inicial

Antes de intentar resolver un problema, responde estas preguntas:

1. **¿Qué versión de Photoshop tienes?** 
   - Ve a Help → About Photoshop
   - Debe ser 2022 o superior

2. **¿Qué sistema operativo usas?**
   - Windows 10/11 o macOS 10.13+

3. **¿Cuándo comenzó el problema?**
   - Después de instalar el plugin
   - Después de una actualización
   - De repente sin cambios

4. **¿Puedes reproducir el problema?**
   - ¿Siempre ocurre o es intermitente?
   - ¿Ocurre con todas las imágenes o solo algunas?

---

## 🆘 Problemas de Instalación

### El archivo manifest.json no se encuentra

**Síntomas:**
- Error: "Manifest.json not found"
- El plugin no carga

**Causas posibles:**
1. Carpeta incorrecta seleccionada
2. Archivo manifest.json corrupto o faltante
3. Nombre del archivo incorrecto (case-sensitive)

**Soluciones paso a paso:**

```
1. Abre el Explorador de archivos
2. Navega a la carpeta del plugin
3. Busca el archivo "manifest.json"
4. Verifica que el nombre sea exacto:
   ✓ manifest.json (correcto)
   ✗ Manifest.json (incorrecto)
   ✗ manifest.JSON (incorrecto)
   ✗ manifest.json.txt (incorrecto - tiene extensión adicional)

5. Si no existe, descarga nuevamente el plugin desde GitHub
6. Extrae el ZIP completo sin modificar la estructura de carpetas
7. Intenta cargar nuevamente
```

**Verificación:**
```bash
# En macOS/Linux (Terminal)
ls -la /ruta/al/plugin/manifest.json

# En Windows (PowerShell)
Test-Path "C:\ruta\al\plugin\manifest.json"
```

### El plugin no aparece en el menú de Photoshop

**Síntomas:**
- Cargaste el plugin pero no aparece en Plugins → Development
- No hay panel del plugin visible

**Soluciones:**

**Paso 1: Reinicia Photoshop**
```
1. Cierra Photoshop completamente
2. Cierra todas las ventanas de Photoshop
3. Espera 10 segundos
4. Reabre Photoshop
5. Intenta acceder a Plugins → Development
```

**Paso 2: Limpia la caché de Photoshop**
```
Windows:
1. Cierra Photoshop
2. Ve a: C:\Users\[TuUsuario]\AppData\Roaming\Adobe\Photoshop\[Version]\
3. Busca la carpeta "Cache"
4. Elimina el contenido de la carpeta Cache
5. Reabre Photoshop

macOS:
1. Cierra Photoshop
2. Abre Finder → Ir → Ir a la carpeta
3. Escribe: ~/Library/Application Support/Adobe/Photoshop/
4. Busca la carpeta "Cache"
5. Elimina el contenido
6. Reabre Photoshop
```

**Paso 3: Recarga el plugin**
```
1. Ve a Plugins → Development → Load Plugin
2. Navega a la carpeta del plugin
3. Selecciona manifest.json
4. Haz clic en Open
5. Espera a que cargue (puede tomar 5-10 segundos)
```

### Error "Permission Denied" al instalar

**Windows:**
```
Solución 1 - Ejecutar como Administrador:
1. Cierra Photoshop
2. Haz clic derecho en Photoshop → Ejecutar como administrador
3. Intenta cargar el plugin nuevamente

Solución 2 - Cambiar ubicación de la carpeta:
1. Mueve la carpeta del plugin a: C:\Users\[TuUsuario]\Documents\
2. Intenta cargar desde esta ubicación
```

**macOS:**
```
En Terminal:
1. sudo chmod -R 755 /ruta/al/plugin
2. Reabre Photoshop
3. Intenta cargar el plugin

Si pedimos permisos sudo, necesitarás tu contraseña de administrador
```

---

## ⚡ Problemas de Rendimiento

### El plugin se congela o es muy lento

**Síntomas:**
- El plugin no responde a clics
- La interfaz se congela
- Fotoshop se bloquea completamente

**Diagnóstico:**
```
1. ¿Cuál es el tamaño de tu imagen?
   - Ve a Image → Image Size
   - Anota las dimensiones en píxeles

2. ¿Cuál es tu valor de Radio actual?
   - Si es > 80, es probablemente la causa

3. ¿Cuánta RAM tiene tu computadora?
   - Windows: Configuración → Sistema → Acerca de
   - macOS: Manzana → Acerca de este Mac
```

**Soluciones por orden de efectividad:**

**Solución 1: Reduce el Radio**
```
Cambio recomendado:
Antes: Radio = 100
Después: Radio = 50

Explica: Radios muy altos (>80) requieren mucho procesamiento
```

**Solución 2: Reduce el tamaño de la imagen**
```
1. Ve a Image → Scale Image
2. Reduce el ancho/alto a 50% (ejemplo: 4000px → 2000px)
3. Intenta el plugin nuevamente
4. Una vez satisfecho con los resultados, vuelve a la imagen original
5. Aplica los mismos parámetros
```

**Solución 3: Cierra otras aplicaciones**
```
Windows:
1. Abre Task Manager (Ctrl+Shift+Esc)
2. Identifica aplicaciones que usan mucha RAM/CPU
3. Cierra las menos importantes
4. Reinicia Photoshop

macOS:
1. Abre Activity Monitor (Applications → Utilities)
2. Identifica procesos con alto uso de CPU/Memoria
3. Selecciona y haz clic en "X" para cerrar
4. Reinicia Photoshop
```

**Solución 4: Aumenta la memoria disponible para Photoshop**
```
Windows/macOS:
1. Cierra Photoshop
2. Ve a Edit → Preferences → Performance (o Photoshop → Preferences)
3. En "Memory Usage", aumenta el porcentaje asignado a Photoshop
4. Incrementa "GPU Memory" si tienes GPU potente
5. Haz clic OK
6. Reinicia Photoshop
```

### El plugin usa demasiada RAM

**Síntomas:**
- Photoshop usa mucha memoria
- La computadora va lenta
- Otros programas se cierran

**Causa raíz:**
El algoritmo de halftone requiere procesamiento intensivo. Esto es normal con:
- Imágenes grandes (>3000px)
- Radios altos (>60)
- Patrones complejos

**Soluciones:**
1. Usa imágenes más pequeñas
2. Reduce el Radio a < 50
3. Agrega más RAM a tu computadora (upgrade de hardware)
4. Cierra otros programas mientras usas el plugin

---

## 🎨 Problemas de Funcionalidad

### El plugin no aplica cambios / La imagen no cambia

**Síntomas:**
- Muevo los sliders pero la imagen no cambia
- El efecto no se ve
- El botón "Aplicar Efecto" no funciona

**Diagnóstico:**

```
1. ¿Hay una imagen abierta en Photoshop?
   - Archivo → Abrir
   - O arrastra una imagen a Photoshop

2. ¿Cuál es el modo de color de la imagen?
   - Image → Mode
   - Debería ser RGB o Grayscale

3. ¿Qué valor de Radio estoy usando?
   - Si es < 10, el efecto puede ser invisible
```

**Soluciones paso a paso:**

**Paso 1: Asegúrate de tener una imagen abierta**
```
1. Ve a File → Open
2. Selecciona una imagen (JPG, PNG, PSD, etc.)
3. Haz clic Open
4. Espera a que cargue
5. Verifica que ves la imagen en Photoshop
6. Abre el plugin nuevamente
```

**Paso 2: Convierte a RGB si es necesario**
```
1. Ve a Image → Mode → RGB
2. Si ya es RGB, este paso no es necesario
3. Intenta nuevamente con el plugin
```

**Paso 3: Aumenta el Radio para ver el efecto**
```
1. Abre el plugin
2. Cambia el Radio a 50 (valor medio)
3. Verifica que ves cambios
4. Si sigue sin cambios, hay un problema más profundo
```

**Paso 4: Prueba con una imagen de prueba**
```
1. Descarga una imagen de prueba: https://unsplash.com/
2. Copia y pega en Photoshop (File → Create → Image from Clipboard)
3. Intenta el plugin con esta imagen
4. Si funciona con la imagen de prueba, el problema es con tu imagen
```

### El efecto se ve mal / distorsionado

**Síntomas:**
- Los colores se ven extraños
- El efecto está parcialmente aplicado
- Partes de la imagen están sin efecto

**Causa más común:**
Modo de color incorrecto de la imagen

**Solución:**
```
1. Ve a Image → Mode
2. Anota el modo actual (RGB, CMYK, Grayscale, etc.)
3. Si no es RGB, convierte:
   - Image → Mode → RGB
4. Abre el plugin nuevamente
5. Aplica el efecto
```

### Los colores se ven invertidos o muy oscuros

**Síntomas:**
- La imagen se ve al revés de color
- Todo está muy oscuro o muy claro
- Los tonos son incorrectos

**Causa:**
Posiblemente un problema con la calibración de color o perfil ICC

**Soluciones:**

**Solución 1: Desactiva la gestión de color (temporal)**
```
1. Ve a Edit → Color Settings
2. Cambia de perfil a "sRGB"
3. Intenta nuevamente
```

**Solución 2: Reinicia el plugin**
```
1. Cierra el panel del plugin
2. Ve a Plugins → Development → Load Plugin
3. Selecciona manifest.json nuevamente
4. Intenta nuevamente
```

**Solución 3: Prueba con escala de grises**
```
1. Abre el plugin
2. Marca la casilla "Escala de Grises"
3. Si funciona en B/N, el problema es con color
4. Convierte tu imagen a RGB (Image → Mode → RGB)
```

### El slider de Radio no funciona

**Síntomas:**
- Hago clic pero el slider no se mueve
- Escribo un valor pero no cambia
- El slider está bloqueado

**Soluciones:**

**Solución 1: Haz clic en el campo de texto**
```
En lugar de arrastrar el slider:
1. Haz clic directamente en el campo de número
2. Borra el valor actual
3. Escribe un nuevo valor (ej: 50)
4. Presiona Enter
5. Debería actualizar
```

**Solución 2: Reinicia el plugin**
```
1. Cierra el panel del plugin (haz clic X)
2. Ve a Plugins → Development
3. Carga el plugin nuevamente
4. Intenta ajustar el slider
```

**Solución 3: Reinicia Photoshop**
```
1. Cierra Photoshop completamente
2. Espera 10 segundos
3. Reabre Photoshop
4. Abre una imagen
5. Carga el plugin
6. Intenta nuevamente
```

---

## 💾 Problemas de Guardado

### No puedo guardar la imagen después de aplicar el efecto

**Síntomas:**
- El botón Guardar está gris
- Obtengo error al guardar
- La imagen no se guarda

**Diagnóstico:**
```
1. ¿Aplicaste el efecto con "Aplicar Efecto"?
   - Si no, haz clic en ese botón primero

2. ¿Qué formato intentas guardar?
   - Algunos formatos especiales pueden tener problemas
```

**Soluciones:**

**Solución 1: Usa File → Export As**
```
En lugar de "Save":
1. Ve a File → Export As
2. Selecciona formato (JPG, PNG, etc.)
3. Elige ubicación
4. Haz clic Export
```

**Solución 2: Guarda como PSD primero**
```
1. File → Save As
2. Selecciona formato "Photoshop (*.psd)"
3. Guarda
4. Luego puedes exportar a otros formatos
```

**Solución 3: Guarda en una ubicación diferente**
```
Si tienes problemas de permisos:
1. Guarda en: C:\Users\[TuUsuario]\Desktop\
2. O en: /Users/[TuUsuario]/Desktop/

Las carpetas del escritorio generalmente tienen permisos completos
```

---

## 🖥️ Problemas Específicos por Sistema Operativo

### Windows - El plugin no carga

**Pasos específicos de Windows:**

```
1. Verifica que tienes Windows 10 o superior:
   - Settings → System → About
   - Mira "OS Build"

2. Asegúrate de que Adobe Photoshop es versión 2022+:
   - Help → About Photoshop

3. Instala/actualiza Visual C++ Redistributable:
   - Descarga desde: https://support.microsoft.com/en-us/help/2977003
   - Ejecuta el instalador
   - Reinicia Photoshop

4. Desactiva temporalmente el antivirus:
   - Algunos antivirus bloquean plugins
   - Intenta desactivar Kaspersky, McAfee, etc.
   - Si funciona, agrega Photoshop a la lista blanca del antivirus
```

### macOS - "Plugin not trusted" error

**Solución:**

```
Si obtienes error "not trusted" o similar:

1. Abre System Preferences → Security & Privacy
2. En la sección "General", busca un mensaje sobre el plugin
3. Haz clic en "Open Anyway"
4. Ingresa tu contraseña si se solicita
5. Reinicia Photoshop
6. Intenta cargar el plugin nuevamente

Alternativa - Línea de comandos:
xattr -d com.apple.quarantine /ruta/al/plugin/manifest.json
```

### macOS - Permiso denegado al copiar archivos

**Solución:**

```
1. Abre Terminal (Applications → Utilities → Terminal)
2. Ejecuta este comando:
   sudo chmod -R 755 /ruta/al/plugin

3. Ingresa tu contraseña cuando se solicite
4. Reabre Photoshop
5. Intenta cargar el plugin
```

---

## 🔧 Diagnóstico Avanzado

### Habilitar el modo de depuración

Si tienes conocimientos técnicos, puedes habilitar logs detallados:

**Windows:**
```
1. Abre regedit (presiona Win+R, escribe regedit)
2. Navega a: HKEY_CURRENT_USER\Software\Adobe\Photoshop\[Version]\
3. Crea una nueva entrada DWORD llamada "DebugLevel"
4. Establece el valor a 1
5. Reinicia Photoshop
6. Intenta reproducir el problema
7. Los logs estarán en: C:\Users\[TuUsuario]\AppData\Local\Temp\
```

**macOS:**
```
1. Abre Terminal
2. Ejecuta:
   defaults write com.adobe.Photoshop DebugLevel -int 1

3. Reinicia Photoshop
4. Los logs estarán en: /var/log/system.log
5. Busca líneas que contengan "Photoshop" o "Plugin"
```

### Crear un reporte de diagnóstico

Si necesitas ayuda profesional, prepara:

```
1. Versión de Photoshop: ___________
2. Sistema operativo: ___________
3. RAM disponible: ___________
4. Tamaño de imagen problemática: ___________
5. Pasos para reproducir el problema:
   -
   -
   -
6. Mensaje de error exacto (si hay):
   _________________________________

7. Captura de pantalla del error:
   [Adjunta archivo]

8. ¿Funcionaba antes o nunca funcionó?
   _________________________________
```

---

## 📞 Cuándo Buscar Ayuda

### Reporta un issue en GitHub si:

1. Encontraste un bug claramente reproducible
2. El plugin se congela o falla
3. Obtienes un mensaje de error específico
4. El problema persiste después de todos los pasos anteriores

**Cómo reportar:**
1. Ve a: https://github.com/rayzarazua/photoshop-halftone-preview-plugin/issues
2. Haz clic en "New Issue"
3. Describe el problema detalladamente
4. Incluye tu información de sistema
5. Adjunta captura de pantalla del error
6. Describe los pasos para reproducir

### Participa en Discussions si:

1. Tienes preguntas sobre cómo usar el plugin
2. Quieres compartir ejemplos de tu trabajo
3. Tienes sugerencias de mejora
4. Quieres conectar con otros usuarios

**Cómo participar:**
1. Ve a: https://github.com/rayzarazua/photoshop-halftone-preview-plugin/discussions
2. Haz clic en "New Discussion"
3. Elige la categoría apropiada
4. ¡Comparte tu pregunta o idea!

---

## ✅ Checklist de Solución de Problemas

Antes de reportar un issue, completa esto:

- [ ] Photoshop es versión 2022 o superior
- [ ] Tengo una imagen abierta en Photoshop
- [ ] La imagen está en modo RGB (o convertida a RGB)
- [ ] He cargado correctamente el archivo manifest.json
- [ ] He reiniciado Photoshop completamente
- [ ] He limpiado la caché de Photoshop
- [ ] He probado con una imagen diferente
- [ ] He reducido el valor del Radio a < 50
- [ ] He cerrado otras aplicaciones pesadas
- [ ] Mi computadora tiene al menos 4GB de RAM disponible

Si todos los puntos están marcados y el problema persiste, es momento de buscar ayuda.

---

**Última actualización**: 2026-08-25  
**Versión**: 1.0.0

¿Necesitas más ayuda? 
📧 Abre un [Issue en GitHub](https://github.com/rayzarazua/photoshop-halftone-preview-plugin/issues)
💬 Participa en [Discussions](https://github.com/rayzarazua/photoshop-halftone-preview-plugin/discussions)
