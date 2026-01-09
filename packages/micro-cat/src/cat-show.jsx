import React, {useState, useEffect} from "react";
import pic from '../public/cat.png';
import './styles.css';

const orqUrl = 'http://localhost:3013';

const CatShow = () => {

  const [isDisplay, setDisplay] = useState({show: false, msg: ''});

  useEffect(() => {
    window.addEventListener('message', (event) => {
      if(event.origin === orqUrl) {
        setDisplay({show: true, msg: `He escuchado: "${event.data}"`});
        setTimeout(() => setDisplay({show: false, msg: ''}), 1500);
      }
    });
    return () => window.removeEventListener('message');
  }, []);

  const showMsg = () => {
    setDisplay({show: true, msg: 'Miau!'});
    window.parent.postMessage('Miau!', 'http://localhost:3013');
    setTimeout(() => setDisplay({show: false, msg: ''}), 1500);
  }

  return (
    <div className="mainCont">
      {isDisplay.show && <div className="msg">{isDisplay.msg}</div>}
      <img 
        onClick={showMsg}
        src={pic}
        className="pic"
        alt="A cute cat"
      />
    </div>
  );
};

export default CatShow;