import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
const Iconcomponent = ({item, handleDelete,handleEdit}) => {
  return (
    <div>
        <FontAwesomeIcon icon={faEdit} className='icons ms-2 'onClick={() => handleEdit(item.id)} />
  
  <FontAwesomeIcon icon={faTrash} className='icons ms-2 ' onClick={() => handleDelete(item.id)} />
    </div>
  )
}

export default Iconcomponent