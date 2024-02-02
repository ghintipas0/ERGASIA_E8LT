import React, { useState } from "react";
import './Admin.css';


function Admin() {
    function show_sub_page(id){

    }
    return (
      <div>
          <div className="sticky_top"
               style={{background: "black", position: "sticky", top:"8em", display: "flex", height: "5vh", width: "100%"}}>
              <div style={{display: "grid", gridTemplateColumns: "auto auto auto auto",gridTemplateRows:"auto", width: "100%"}}>
                  <button id="add_user" onClick={show_sub_page(this)}>Add user</button>
                  <button id="remove_user" onClick={show_sub_page(this)}>Remove User</button>
                  <button id="add_product" onClick={show_sub_page(this)}>Add Product</button>
                  <button id="remove_product" onClick={show_sub_page(this)}>Remove Product</button>
              </div>

          </div>
          test<br/>test<br/>test<br/>test<br/>test<br/>test<br/>
          test<br/>test<br/>test<br/>test<br/>test<br/>test<br/>
          test<br/>test<br/>test<br/>test<br/>test<br/>test<br/>
          test<br/>test<br/>test<br/>test<br/>test<br/>test<br/>
          test<br/>test<br/>test<br/>test<br/>test<br/>test<br/>
          test<br/>test<br/>test<br/>test<br/>test<br/>test<br/>
          test<br/>test<br/>test<br/>test<br/>test<br/>test<br/>
          test<br/>test<br/>test<br/>test<br/>test<br/>test<br/>
          test<br/>test<br/>test<br/>test<br/>test<br/>test<br/>
          test<br/>test<br/>test<br/>test<br/>test<br/>test<br/>
          test<br/>test<br/>test<br/>test<br/>test<br/>test<br/>
          test<br/>test<br/>test<br/>test<br/>test<br/>test<br/>
          test<br/>test<br/>test<br/>test<br/>test<br/>test<br/>

      </div>
    );
}

export default Admin;
