import React from "react";
import menu from "../data.json";
class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: menu,
    };
  }

  handlecatageory = (e) => {
    let btn = e.target.innerText;
    let cat = menu.filter((e) => e.category === btn);
    console.log(cat, "lunch");

    if (btn === "All") {
      this.setState({
        menu: menu,
      });
    } else {
      this.setState({
        menu: cat,
      });
    }
  };
  render() {
    return (
      <>
        <div className="btns">
          <button
            onClick={(e) => {
              this.handlecatageory(e);
            }}
          >
            All
          </button>
          <button
            onClick={(e) => {
              this.handlecatageory(e);
            }}
          >
            Breakfast
          </button>
          <button
            onClick={(e) => {
              this.handlecatageory(e);
            }}
          >
            Lunch
          </button>

          <button
            onClick={(e) => {
              this.handlecatageory(e);
            }}
          >
            Shakes
          </button>
        </div>

        <div className="menus">
          {this.state.menu.map((m) => {
            return (
              <>
                <div className="menu-card">
                  <figure>
                    <img src={m.img} alt="img" />
                  </figure>

                  <div className="ms">
                    <div className="menu-title">
                      <h3>{m.title}</h3>
                      <small>{m.price} $</small>
                    </div>

                    <p>{m.desc}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </>
    );
  }
}

export default Menu;
