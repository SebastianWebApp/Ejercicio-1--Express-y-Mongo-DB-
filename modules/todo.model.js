// Importamos el módulo mongoose, que se utiliza para interactuar con bases de datos MongoDB.
import mongoose from 'mongoose';

// Extraemos los objetos necesarios desde mongoose:
// - model: para definir nuevos modelos de datos.
// - models: para acceder a modelos previamente definidos.
// - Schema: para definir la estructura de los documentos en una colección.
const { model, models, Schema } = mongoose;

// Definimos un esquema para la colección "Prueba". Este esquema define la estructura de los documentos.
const todoSchema = new Schema({
    // Campo `_id`: Identificador único para cada documento.
    // - Tipo: String.
    // - require: Indica que este campo es obligatorio.
    // - unique: Garantiza que no se repitan los valores.
    _id: { type: String, require: true, unique: true },

    // Campo `text`: El texto asociado a la tarea.
    // - Tipo: String.
    // - require: Campo obligatorio.
    text: { type: String, require: true },

    // Campo `priority`: Nivel de prioridad de la tarea.
    // - Tipo: String.
    // - require: Campo obligatorio.
    priority: { type: String, require: true },

    // Campo `deadline`: Fecha límite para completar la tarea.
    // - Tipo: String.
    // - require: Campo obligatorio.
    deadline: { type: String, require: true }
}, {
    // Opciones del esquema:
    // - collection: Especifica el nombre de la colección en MongoDB donde se almacenarán los documentos.
    collection: "Prueba"
});

// Exportamos el modelo `Todo`:
// - Si ya existe un modelo llamado "Todo" en `models`, lo reutilizamos.
// - Si no existe, creamos un nuevo modelo con el esquema `todoSchema`.
export const Todo = models.Todo || new model("Todo", todoSchema);
