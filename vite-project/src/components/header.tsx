import { useState } from "react";
import { CiSearch } from "react-icons/ci";

function Header() {
  const [cred, setCred] = useState(false);

  return (
    <div className="hedr">
      <div className="hedr__logo">Mr.Coder</div>
      <nav className="hedr__comps">
        <button type="button" className="hedr__comps__ele">
          Home
        </button>
        <button type="button" className="hedr__comps__ele">About</button>
        <button type="button" className="hedr__comps__ele">Contact</button>
        <search className="hedr__comps__srch">
          <CiSearch className="hedr__comps__icn" />
          <input className="hedr__comps__inpt" type="search" />
        </search>
        {
        cred ? <button className="hedr__comps__ele" type="button" onClick={():void => setCred(false)}>Login</button>
            : <button className="hedr__comps__ele" type="button" onClick={():void => setCred(true)}>Register</button>
        }
        
      </nav>
    </div>
  );
}

export default Header;
