# 🎁 Challenge - Amigo Secreto

Una aplicación web interactiva para organizar sorteos de amigo secreto de manera fácil y divertida.
<img width="1366" height="660" alt="image" src="https://github.com/user-attachments/assets/9853ff31-918f-4950-aa62-9f23fe03f3be" />


## 📋 Descripción

Amigo Secreto es una aplicación web que permite agregar nombres de amigos a una lista y realizar un sorteo aleatorio para determinar quién será el amigo secreto. La aplicación cuenta con una interfaz intuitiva y moderna, perfecta para organizar intercambios de regalos en cualquier ocasión.

## ✨ Características

- ✅ **Agregar amigos**: Interfaz simple para añadir nombres a la lista
- 📝 **Visualización en tiempo real**: Los nombres se muestran inmediatamente en pantalla
- 🎲 **Sorteo aleatorio**: Algoritmo que garantiza selección imparcial
- 🔍 **Validaciones**: Previene la adición de nombres vacíos
- 🎨 **Diseño responsivo**: Adaptable a diferentes dispositivos

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica y accesible
- **CSS3**: Diseño moderno con variables CSS y Flexbox
- **JavaScript (ES6)**: Lógica de la aplicación y manipulación del DOM
- **Google Fonts**: Tipografías Inter y Merriweather

## 📁 Estructura del Proyecto

```
amigo-secreto/
├── index.html          # Página principal
├── style.css           # Estilos de la aplicación
├── app.js              # Lógica de JavaScript
├── assets/             # Recursos multimedia
│   ├── amigo-secreto.png
│   └── play_circle_outline.png
└── README.md           # Documentación
```

## 🎯 Funcionalidades Principales

### Agregar Amigos
- Campo de entrada con validación de nombres vacíos
- Botón "Añadir" para confirmar la adición
- Limpieza automática del campo tras agregar

### Lista Dinámica
- Visualización instantánea de todos los amigos agregados
- Actualización automática de la lista
- Elementos de lista generados dinámicamente

### Sorteo Aleatorio
- Botón de sorteo con ícono visual
- Algoritmo `Math.random()` para selección imparcial
- Validación de lista vacía antes del sorteo
- Resultado destacado visualmente

## 💻 Instalación y Uso

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/amigo-secreto.git
   ```

2. **Navegar al directorio**
   ```bash
   cd amigo-secreto
   ```

3. **Abrir en navegador**
   ```bash
   # Opción 1: Abrir index.html directamente
   open index.html
   
   # Opción 2: Usar servidor local (recomendado)
   npx serve .
   ```

## 🎮 Cómo Usar

1. **Agregar amigos**: Escribe el nombre de un amigo en el campo de texto y haz clic en "Añadir"
2. **Repetir**: Continúa agregando todos los participantes
3. **Sortear**: Una vez que tengas al menos un nombre, haz clic en "Sortear amigo"
4. **Resultado**: El amigo secreto seleccionado aparecerá destacado

## 🔧 Funciones JavaScript Principales

### `agregarAmigo()`
Valida y agrega nuevos nombres a la lista de amigos.

### `actualizarListaAmigos()`
Actualiza la visualización de la lista en el DOM.

### `sortearAmigo()`
Realiza el sorteo aleatorio y muestra el resultado.

### `limpiarCaja()`
Limpia el campo de entrada tras agregar un nombre.

## 🎨 Características de Diseño

- **Paleta de colores moderna**: Azul primario, naranja para acciones
- **Tipografía legible**: Combinación de Inter y Merriweather
- **Interfaz intuitiva**: Botones con estados hover y feedback visual
- **Responsive**: Adaptable a diferentes tamaños de pantalla

## 📝 Posibles Mejoras

- [ ] Historial de sorteos anteriores
- [ ] Opción para eliminar amigos de la lista
- [ ] Exportar resultados a PDF
- [ ] Modo oscuro
- [ ] Animaciones de sorteo


## 👨‍💻 Autor

Desarrollado como proyecto de práctica en la plataforma de ALURA-LATAM para fortalecer habilidades en lógica de programación y manipulación del DOM.

---

⭐ ¡Gracias por tu atención!

## 🔗 Enlace

- [Repositorio](https://github.com/tu-usuario/amigo-secreto)

