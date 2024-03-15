import React ,{useState} from 'react'

const BoxCard= ({children, result}) => {
  const [show ,setshow] =useState(true);
  return (
    <div className={show? "" : "hidden"}>
    <div className={`box${result}`}>
        {children}
    </div>
    <button onClick={() => (setshow(!show))}>hide</button>
    </div>
  )
}

export default BoxCard
