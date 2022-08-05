/* 
Importamos mongoose para poder crear modelos o schemas
*/
import mongoose from "mongoose";
const { Schema } = mongoose

/* 
creamos un nuevo schema con las propiedades

titulo : es requerido, es de tipo string y eliminamos espacios al inicio y final

description: es requerido, es de tipo string y eliminamos espacios al inicio y final

image : no es requerido, contendra una url y un id publico
*/

const postSchema = new Schema({ 
    title : {
        required : true, 
        type : String,
        trim: true
    },
    description :{
        type: String,
        required: true,
        trim: true

    },
    image: {
        url : String ,
        public_id : String
    }


})

/* 
Exportamos el schema convirtiendolo a un modelo de mongoose y le damos el nombre de 'Post'

 */

export default mongoose.model('Post', postSchema);