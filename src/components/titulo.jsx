/**
 *Llaves: las propiedades s epasan a los componentes 
 *con llaves (en los parametros.) 
 *La parte izquierda es la que recibe las propiedades, es decir en este caso al children
 * Tambien, al usar jsx, las variables van entre llaves
 * titulo en este caso acepta a children
 */
function Titulo( {children} ) {
    return (
        <h1 className="text-blue-500 pb-2 border-b-4 border-blue-500 text-4xl ml-4">
            {children}
        </h1>
    );
}
export default Titulo;