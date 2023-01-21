import React from 'react'

export const FormularioComponent = () => {
  return (
    <div>
        <h1>
            Formularios con React
        </h1>

        <form>
            <input type="text" placeholder='Nombre'/>
            <input type="text" placeholder='Apellidos'/>
            <select>
                <option value='hombre'>Hombre</option>
                <option value='mujer'>Mujer</option>
            </select>
            <textarea placeholder='Biografía'></textarea>

            <input type='submit' value='Enviar'/>
        </form>
    </div>
  )
}
