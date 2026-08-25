const { app, action } = require('photoshop');
const { executeAsModal } = require('photoshop').core;

// Variables globales para almacenar el estado
let originalImageData = null;
let isPreviewActive = false;
let currentDocument = null;

// Referencias a elementos del DOM
const radiusSlider = document.getElementById('radiusSlider');
const radiusValue = document.getElementById('radiusValue');
const halftoneType = document.getElementById('halftoneType');
const angleSlider = document.getElementById('angleSlider');
const angleValue = document.getElementById('angleValue');
const grayscaleToggle = document.getElementById('grayscaleToggle');
const inputBlackSlider = document.getElementById('inputBlackSlider');
const inputBlackValue = document.getElementById('inputBlackValue');
const inputWhiteSlider = document.getElementById('inputWhiteSlider');
const inputWhiteValue = document.getElementById('inputWhiteValue');
const gammaSlider = document.getElementById('gammaSlider');
const gammaValue = document.getElementById('gammaValue');
const outputBlackSlider = document.getElementById('outputBlackSlider');
const outputBlackValue = document.getElementById('outputBlackValue');
const outputWhiteSlider = document.getElementById('outputWhiteSlider');
const outputWhiteValue = document.getElementById('outputWhiteValue');
const applyButton = document.getElementById('applyButton');
const resetButton = document.getElementById('resetButton');
const statusMessage = document.getElementById('statusMessage');

// Event Listeners para los sliders
radiusSlider.addEventListener('input', (e) => {
    radiusValue.textContent = e.target.value;
    updatePreview();
});

halftoneType.addEventListener('change', updatePreview);

angleSlider.addEventListener('input', (e) => {
    angleValue.textContent = e.target.value + '°';
    updatePreview();
});

grayscaleToggle.addEventListener('change', updatePreview);

inputBlackSlider.addEventListener('input', (e) => {
    inputBlackValue.textContent = e.target.value;
    updatePreview();
});

inputWhiteSlider.addEventListener('input', (e) => {
    inputWhiteValue.textContent = e.target.value;
    updatePreview();
});

gammaSlider.addEventListener('input', (e) => {
    gammaValue.textContent = parseFloat(e.target.value).toFixed(1);
    updatePreview();
});

outputBlackSlider.addEventListener('input', (e) => {
    outputBlackValue.textContent = e.target.value;
    updatePreview();
});

outputWhiteSlider.addEventListener('input', (e) => {
    outputWhiteValue.textContent = e.target.value;
    updatePreview();
});

applyButton.addEventListener('click', applyFilter);
resetButton.addEventListener('click', resetToOriginal);

// Función para capturar la imagen original
async function captureOriginalImage() {
    try {
        await executeAsModal(async () => {
            const doc = app.activeDocument;
            if (!doc) {
                showStatus('❌ No hay documento abierto', 'error');
                return false;
            }
            currentDocument = doc;
            isPreviewActive = true;
            showStatus('✓ Documento cargado correctamente', 'success');
            return true;
        });
    } catch (error) {
        showStatus('❌ Error: ' + error.message, 'error');
        return false;
    }
}

// Función para actualizar la previsualización
async function updatePreview() {
    if (!isPreviewActive) {
        const success = await captureOriginalImage();
        if (!success) return;
    }

    try {
        await executeAsModal(async () => {
            const doc = app.activeDocument;
            if (!doc || !doc.layers || doc.layers.length === 0) {
                return;
            }

            // Obtener valores actuales
            const radius = parseInt(radiusSlider.value);
            const angle = parseInt(angleSlider.value);
            const useGrayscale = grayscaleToggle.checked;

            // Crear comando de halftone
            const halftoneCommand = {
                _obj: 'halftone',
                halftoneRadiusPixels: radius,
                angle: angle,
                _target: [{ _ref: 'layer', _enum: 'ordinal', _value: 'targetEnum' }]
            };

            // Aplicar halftone
            try {
                await action.do(halftoneCommand);
            } catch (e) {
                console.log('Halftone preview:', e.message);
            }

            // Aplicar levels
            try {
                const inputBlack = parseInt(inputBlackSlider.value);
                const inputWhite = parseInt(inputWhiteSlider.value);
                const gamma = parseFloat(gammaSlider.value);
                const outputBlack = parseInt(outputBlackSlider.value);
                const outputWhite = parseInt(outputWhiteSlider.value);

                const levelsCommand = {
                    _obj: 'levels',
                    inputBlack: inputBlack,
                    inputWhite: inputWhite,
                    gamma: gamma,
                    outputBlack: outputBlack,
                    outputWhite: outputWhite,
                    _target: [{ _ref: 'layer', _enum: 'ordinal', _value: 'targetEnum' }]
                };

                await action.do(levelsCommand);
            } catch (e) {
                console.log('Levels preview:', e.message);
            }

            // Aplicar grayscale si está habilitado
            if (useGrayscale) {
                try {
                    await action.do({
                        _obj: 'convertMode',
                        to: 'grayscale',
                        _target: [{ _ref: 'document', _enum: 'ordinal', _value: 'first' }]
                    });
                } catch (e) {
                    console.log('Grayscale preview:', e.message);
                }
            }
        });

        showStatus('🔄 Previsualizando cambios...', 'info');
    } catch (error) {
        console.log('Preview error:', error.message);
    }
}

// Función para aplicar el filtro definitivamente
async function applyFilter() {
    try {
        await executeAsModal(async () => {
            const doc = app.activeDocument;
            if (!doc || !doc.layers || doc.layers.length === 0) {
                showStatus('❌ No hay documento abierto o capas disponibles', 'error');
                return;
            }

            showStatus('⏳ Aplicando filtro...', 'info');

            // Obtener valores finales
            const radius = parseInt(radiusSlider.value);
            const angle = parseInt(angleSlider.value);
            const useGrayscale = grayscaleToggle.checked;
            const inputBlack = parseInt(inputBlackSlider.value);
            const inputWhite = parseInt(inputWhiteSlider.value);
            const gamma = parseFloat(gammaSlider.value);
            const outputBlack = parseInt(outputBlackSlider.value);
            const outputWhite = parseInt(outputWhiteSlider.value);

            try {
                // Paso 1: Aplicar grayscale si está habilitado
                if (useGrayscale) {
                    await action.do({
                        _obj: 'convertMode',
                        to: 'grayscale',
                        _target: [{ _ref: 'document', _enum: 'ordinal', _value: 'first' }]
                    });
                }

                // Paso 2: Aplicar Levels
                await action.do({
                    _obj: 'levels',
                    inputBlack: inputBlack,
                    inputWhite: inputWhite,
                    gamma: gamma,
                    outputBlack: outputBlack,
                    outputWhite: outputWhite,
                    _target: [{ _ref: 'layer', _enum: 'ordinal', _value: 'targetEnum' }]
                });

                // Paso 3: Aplicar Halftone
                await action.do({
                    _obj: 'halftone',
                    halftoneRadiusPixels: radius,
                    angle: angle,
                    _target: [{ _ref: 'layer', _enum: 'ordinal', _value: 'targetEnum' }]
                });

                showStatus('✓ Filtro aplicado exitosamente', 'success');
                isPreviewActive = false;
            } catch (e) {
                showStatus('⚠️ Filtros aplicados con limitaciones', 'info');
                console.log('Apply filter partial:', e.message);
            }
        });
    } catch (error) {
        showStatus('❌ Error al aplicar: ' + error.message, 'error');
    }
}

// Función para reiniciar a los valores por defecto
async function resetToOriginal() {
    try {
        // Reiniciar valores en la UI
        radiusSlider.value = 4;
        angleSlider.value = 45;
        grayscaleToggle.checked = false;
        inputBlackSlider.value = 0;
        inputWhiteSlider.value = 255;
        gammaSlider.value = 1;
        outputBlackSlider.value = 0;
        outputWhiteSlider.value = 255;
        halftoneType.value = 'circle';

        // Actualizar valores mostrados
        radiusValue.textContent = '4';
        angleValue.textContent = '45°';
        inputBlackValue.textContent = '0';
        inputWhiteValue.textContent = '255';
        gammaValue.textContent = '1.0';
        outputBlackValue.textContent = '0';
        outputWhiteValue.textContent = '255';

        // Deshacer en Photoshop
        await executeAsModal(async () => {
            try {
                await action.do({
                    _obj: 'undo'
                });
            } catch (e) {
                console.log('Undo:', e.message);
            }
        });

        showStatus('✓ Valores reiniciados', 'success');
    } catch (error) {
        showStatus('❌ Error al reiniciar: ' + error.message, 'error');
    }
}

// Función para mostrar mensajes de estado
function showStatus(message, type = 'info') {
    statusMessage.textContent = message;
    if (type === 'error') {
        statusMessage.style.color = '#ff7800';
    } else if (type === 'success') {
        statusMessage.style.color = '#4ec9b0';
    } else {
        statusMessage.style.color = '#0078d4';
    }
}

// Inicialización cuando se carga el panel
document.addEventListener('DOMContentLoaded', () => {
    showStatus('👋 Bienvenido. Abre una imagen para comenzar', 'info');
});

// Verificar si hay un documento activo al cargar
window.addEventListener('load', async () => {
    try {
        await executeAsModal(async () => {
            const doc = app.activeDocument;
            if (doc) {
                currentDocument = doc;
                isPreviewActive = true;
                showStatus('✓ Documento detectado', 'success');
            } else {
                showStatus('📷 Abre una imagen para comenzar', 'info');
            }
        });
    } catch (error) {
        showStatus('📷 Abre una imagen para comenzar', 'info');
    }
});
