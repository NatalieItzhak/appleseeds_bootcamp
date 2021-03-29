import React,{useState} from 'react';

function Readmore() {
  const [readMore,setReadMore]=useState(false);

  const extraContent=<div>
      <p >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, consectetur neque ab 
        porro quasi culpa nulla rerum quis minus voluptatibus sed hic ad quo sint, libero 
        commodi officia aliquam! Maxime.
      </p>
  </div>
  const linkName=readMore?'Read Less ':'Read More '
  return (
    <div ><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?
    <a  onClick={()=>{setReadMore(!readMore)}}>{linkName}</a></p>
      
      {readMore && extraContent}
    </div>
  );
}

export default Readmore;