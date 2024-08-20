import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faGlobe, faMagnifyingGlass, faCartShopping} from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    const menuList = ['기종','시그니처 프린트','Co-Lab','커스텀','제품','최신 & 트렌딩']
    
    const [toogleSearch,setToogleSearch] = useState(false);

    const searchItem = () =>{
        setToogleSearch(!toogleSearch)
    } 
  return (
    <div>
      <div className="header-section">
            <div>
                채워질 내용입니다
            </div>
      </div>
      <div className="nav-section">
        <div className="logo-img">
            <img width={120} src="https://cdn.casetify.com/img/ui/casetify-logo.png" alt="" />
        </div>
        <div>
            <ul className="menu-list">
                {menuList.map((menu)=>(<li>{menu}</li>))}
            </ul>
        </div>
        <div className="menu-button">
            <FontAwesomeIcon className="menu-item" icon={faGlobe} />
            <FontAwesomeIcon className="menu-item" icon={faUser} />
            <FontAwesomeIcon className="menu-item" icon={faMagnifyingGlass} onClick={searchItem}/>
            <FontAwesomeIcon className="menu-item" icon={faCartShopping} />
        </div>
      </div>
        {toogleSearch ? (
            <div className="search-area">
                <FontAwesomeIcon className="menu-item" icon={faMagnifyingGlass} />
                <input id="search-input" type="text" />
            </div>
        ) : null}


    </div>
  );
};

export default Navbar;
