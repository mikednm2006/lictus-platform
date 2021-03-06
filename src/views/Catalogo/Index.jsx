import React, { Component } from "react";
import NavigationBar from "../../components/NavigationBar/Index";
import SideDrawer from "../../components/SideDrawer/Index";
import Backdrop from "../../components/Backdrop/Index";
import Catalog from "../../components/Catalog/Index";

class Catalogo extends Component {
  state = {
    sideDrawerOpen: false,
  };

  drawerToggleClickHandler = () => {
    this.setState((prevSate) => {
      return { sideDrawerOpen: !prevSate.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <div className="wrapper-container">
        <NavigationBar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <div className="general-wrapper">
          <Catalog />
        </div>
      </div>
    );
  }
}

export default Catalogo;
