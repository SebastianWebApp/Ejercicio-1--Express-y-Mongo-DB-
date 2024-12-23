import express from "express";
import dotenv from "dotenv";
import connectToDB from "./database/db.js";
import {Todo} from "./modules/todo.model.js";

//Permite la comunicacion con el .env
dotenv.config();

const app = express();
const port = 4000;

//middReware
app.use(express.json());

connectToDB();

//Leer todos
app.get("/todos", async(req,res) => {
    try {
        
        const resultado = await Todo.find();
        res.send({
            success: true,
            mensaje: "Todo Listo",
            data: resultado
        });

    } catch (error) {
        res.send({
            success: false,
            mensaje: "Error",
        });
    }
})

//Crear uno nuevo
app.post("/create-todo", async (req,res) =>{
    const todoDetails  = req.body;
    try {
        const resultado = await Todo.create(todoDetails);
        res.send({
            success: true,
            mensaje: "Se subio correctamente",
            data: resultado
        })

    } catch (error) {
        res.send({
            success: false,
            mensaje: "Error"
        })
    }
})

//Leer por ID
app.get("/:todoId", async (req,res) => {
    const todoId = req.params.todoId;

    try {
        const Resultado = await Todo.findById(todoId);
        res.send({
            success: true,
            mensaje: "Listo",
            respuesta: Resultado
        })
    } catch (error) {
        res.send({
            success: false,
            mensaje: "error",
        })
    }
})


//Actualizar por medio del ID
app.patch("/:todoId", async (req,res) => {

    const todoId = req.params.todoId;
    const updatedTodo = req.body;

    try {
        
        const resultado = await Todo.findByIdAndUpdate(todoId,updatedTodo,{
            new: true
        });

        res.send({
            success: true,
            mensaje: "Se actualizo",
            data: resultado
        })


    } catch (error) {
        res.send({
            success: false,
            mensaje: "error",
            data: error
        })
    }


})

//Eliminar por ID
app.delete("/delete/:todoId", async (req, res) => {

    const TodoId = req.params.todoId;

    try {
        
        const Resultado = await Todo.findByIdAndDelete(TodoId);

        res.send({

            success: true,
            mensaje: "Se elimino",            

        })


    } catch (error) {
        res.send({

            success: false,
            mensaje: "Error",
            data: error


        })
    }

})

app.listen(port, () => {
    console.log(`Servidor corriendo http://localhost:${port}`)
})
