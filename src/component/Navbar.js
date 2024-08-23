import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser, faX } from '@fortawesome/free-solid-svg-icons'
import { faGlobe, faMagnifyingGlass, faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";

const Navbar = ({sign, setSign}) => {
    const menuList = ['기종','시그니처 프린트','Co-Lab','커스텀','제품','최신 & 트렌딩']
    
    const [toogleSearch,setToogleSearch] = useState(false);
    const [sideOpen, setSideOpen] = useState(false);

    const openSide = () =>{
        setSideOpen(true);
    }

    const closeSide = () =>{
        setSideOpen(false);
    }

    const searchItem = () =>{
        setToogleSearch(!toogleSearch)
    }

    const navigate = useNavigate()
    const goToLogin = () =>{
        if(sign){
            setSign(false);
        } else{
            navigate("/login")
        }
    }

    const goToHome = () =>{
        navigate("/")
    }

    const search = (event) =>{
        if(event.key === "Enter"){
            // 입력한 검색어를 읽어와서
            let keyword = event.target.value;
            // url을 바꿔준다.
            navigate(`/?q=${keyword}`)
            event.target.value = '';
        }
    }

    const signInfo = sign === true? 'logout' : ""
    
  return (
    <div>
      <div className="header-section">
        <div className="banner-text">
            <a href="https://codingnoona.thinkific.com/pages/3c7ff4" target="blank">
                    같은 꿈을 꾸는 사람들을 모집합니다!🚀
                    <br />NodeJS 스터디 2기 2024.10.13 ~ 2024.11.24
            </a>
        </div>
      </div>
      <div className="nav-section">
      <div className="side-menubar">
            {sideOpen == true?
            <div onClick={closeSide} ><FontAwesomeIcon className="side-icon iconX" icon={faX}/>
            <ul className="side-menus">
                {menuList.map((menu)=>(<li className="side-menu-list" key={menu}>{menu}</li>))}
            </ul></div>  
            :  <div onClick={openSide} className="side-icon iconbar">
                <FontAwesomeIcon icon={faBars} />
            </div>}
        </div>
            <div className="logo-img" onClick={goToHome}>
                <img width={120} src="https://cdn.casetify.com/img/ui/casetify-logo.png" alt="" />
            </div>
            <div className="menu-list-section">
                <ul className="menu-list">
                    {menuList.map((menu)=>(<li key={menu}>{menu}</li>))}
                </ul>
        </div>
        <div className="menu-button">
            <FontAwesomeIcon className="menu-item" icon={faGlobe} />
            <FontAwesomeIcon className={`menu-item ${signInfo}`} icon={faUser} onClick={goToLogin} />
            <FontAwesomeIcon className="menu-item" icon={faMagnifyingGlass} onClick={searchItem}/>
            <FontAwesomeIcon className="menu-item" icon={faCartShopping} />
        </div>
      </div>
        {toogleSearch ? (
            <div className="search-section">
                <div className="search-area">
                    <FontAwesomeIcon className="input-icon" icon={faMagnifyingGlass} />
                    <input id="search-input" type="text" placeholder="SEARCH" onKeyPress={(event)=>search(event)}/>
                </div>
            </div>
        ) : null}


    </div>
  );
};

export default Navbar;
