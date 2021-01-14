import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "../actions/items";

class MainComponent extends Component {
  constructor() {
    super();
    this.state = {
      image:
        "https://rukminim1.flixcart.com/image/707/848/jp780i80/jacket/f/h/h/6-7-years-926-kidjkt-hd-plain-green-aa-ad-av-original-imafbc9kxcg5ucww.jpeg?q=50",
      size: "select Size",
      colour: "Select Color",
      qty: 0,
    };
  }
  handleImage1 = () => {
    const { image } = this.state;
    this.setState({
      image:
        "https://rukminim1.flixcart.com/image/707/848/jp780i80/jacket/d/t/g/2-3-years-926-kidjkt-hd-plain-green-aa-ad-av-original-imafbc9kgwm5wbak.jpeg?q=50",
    });
  };
  handleImage2 = () => {
    const { image } = this.state;
    this.setState({
      image:
        "https://rukminim1.flixcart.com/image/707/848/jp780i80/jacket/f/h/h/3-4-years-926-kidjkt-hd-plain-green-aa-ad-av-original-imafbc9ksmvv9yrq.jpeg?q=50",
    });
  };
  handleImage3 = () => {
    const { image } = this.state;
    this.setState({
      image:
        "https://rukminim1.flixcart.com/image/707/848/jp780i80/jacket/d/t/g/2-3-years-926-kidjkt-hd-plain-green-aa-ad-av-original-imafbc9kgwm5wbak.jpeg?q=50",
    });
  };
  handleImage4 = () => {
    const { image } = this.state;
    this.setState({
      image:
        "https://rukminim1.flixcart.com/image/707/848/jp780i80/jacket/f/h/h/6-7-years-926-kidjkt-hd-plain-green-aa-ad-av-original-imafbc9kxcg5ucww.jpeg?q=50",
    });
  };

  handleColorChange = (e) => {
    const { colour } = this.state;
    this.setState({
      colour: e.target.value,
    });
  };
  handleQtyChange = (e) => {
    const { qty } = this.state;
    this.setState({
      qty: e.target.value,
    });
  };

  handleSizeChange = (e) => {
    const { size } = this.state;
    this.setState({
      size: e.target.value,
    });
  };

  handleAddToCart = () => {
    const { size, colour, qty, image } = this.state;
    let item = {
      name: "Full Sleeve Solid Girls Jacket",
      size: size,
      colour: colour,
      qty: qty,
      image: image,
    };
    //dispatch an action here
    if (size && colour && qty) {
      console.log("got all the values");
      this.props.dispatch(addToCart(item));
    } else {
      alert("more than one field is empty");
    }
  };
  handleClearSelection = () => {
    const { size, colour, qty } = this.state;

    this.setState({
      size: "select Size",
      qty: 0,
      colour: "Select Color",
    });
  };

  render() {
    const { size, colour, qty, image } = this.state;

    return (
      <div className="body-part">
        <div className="left-div">
          <img alt="icon" src={image} />
        </div>
        <div className="left-bottom-div">
          <img
            onClick={this.handleImage1}
            alt="icon"
            src="https://rukminim1.flixcart.com/image/707/848/jp780i80/jacket/d/t/g/2-3-years-926-kidjkt-hd-plain-green-aa-ad-av-original-imafbc9kgwm5wbak.jpeg?q=50"
          />
          <img
            onClick={this.handleImage2}
            alt="icon"
            src="https://rukminim1.flixcart.com/image/707/848/jp780i80/jacket/f/h/h/3-4-years-926-kidjkt-hd-plain-green-aa-ad-av-original-imafbc9ksmvv9yrq.jpeg?q=50"
          />
          <img
            onClick={this.handleImage3}
            alt="icon"
            src="https://rukminim1.flixcart.com/image/707/848/jp780i80/jacket/d/t/g/2-3-years-926-kidjkt-hd-plain-green-aa-ad-av-original-imafbc9kgwm5wbak.jpeg?q=50"
          />
          <img
            onClick={this.handleImage4}
            alt="icon"
            src="https://rukminim1.flixcart.com/image/707/848/jp780i80/jacket/f/h/h/6-7-years-926-kidjkt-hd-plain-green-aa-ad-av-original-imafbc9kxcg5ucww.jpeg?q=50"
          />
        </div>
        <div className="right-div">
          <div>
            <span>
              {" "}
              &lt; Back to <span className="blue-text">Women</span>{" "}
            </span>
          </div>
          <h2 id="item-name">Full Sleeve Solid Girls Jacket</h2>
          <div id="review-stars">
            <img
              src="data:image/png;base64,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"
              alt="rating-star"
            />{" "}
            <span>3 Review(s)</span> &nbsp; | &nbsp;
            <span id="review-box">ADD A REVIEW</span>
          </div>
          <div id="item-price" id="margin-area">
            $499.00
          </div>
          <div id="item-info" id="margin-area">
            <span className="bold-texts" id="margin-area">
              Availability:
            </span>
            <span className="blue-text" id="margin-area">
              In stock
            </span>
          </div>
          <div id="margin-area">
            <span className="bold-texts" id="margin-area">
              Product Code:
            </span>
            <span className="blue-text" id="margin-area">
              #46657
            </span>
          </div>
          <div id="last-info" id="margin-area">
            <span className="bold-texts" id="margin-area">
              Tags:
            </span>{" "}
            <span className="blue-text" id="margin-area">
              Fashion, Hood, Classic
            </span>
          </div>
          <div id="margin-area">
            <p id="para-style">
              By tailored, or constructed, jacket we mean the frame with which
              the jacket is put together. In a tailored jacket adhesives are not
              used, but the front parts of the garment are strengthened by using
              horse hair and with the use of a so-called canvas.
            </p>
          </div>
          <ul id="features-list">
            <li id="margin-area">Dark blue suit for a tone-on-tone lock.</li>
            <li id="margin-area">Regular Fit.</li>
            <li id="margin-area">100% Cotton.</li>
            <li id="margin-area">Free shipping with 4 days delivery.</li>
          </ul>
          <form>
            <div className="item-desc">
              {" "}
              <div id="colour">
                <h4>COLOUR</h4>
                <select
                  onChange={this.handleColorChange}
                  name="colour"
                  id="colour"
                  value={this.state.colour}
                >
                  <option>{colour}</option>
                  <option value="Black">Black</option>
                  <option value="Blue">Blue</option>
                  <option value="Grey">Grey</option>
                  <option value="Brown">Brown</option>
                </select>
              </div>
              <div id="size">
                <h4>SIZE</h4>
                <select
                  onChange={this.handleSizeChange}
                  value={this.state.size}
                  name="size"
                  id="size"
                >
                  <option>{size}</option>
                  <option value="32">32</option>
                  <option value="34">34</option>
                  <option value="36">36</option>
                  <option value="38">38</option>
                  <option value="40">40</option>
                </select>
              </div>
              <div id="qty">
                <h4>QTY</h4>
                <input
                  onChange={this.handleQtyChange}
                  type="number"
                  max={10}
                  min={1}
                  placeholder="1"
                  value={this.state.qty}
                />
              </div>
            </div>
          </form>
          <div id="clear-selection">
            {" "}
            <h4 onClick={this.handleClearSelection}>CLEAR SELECTION</h4>
          </div>

          <div className="buttons">
            <button id="cart-button" onClick={this.handleAddToCart}>
              ADD TO CART
            </button>
            <button>
              <img
                src="https://www.flaticon.com/svg/static/icons/svg/833/833300.svg"
                alt="icon"
              />
              <span id="wish-button">ADD TO WISHLIST</span>
            </button>
          </div>
          <div className="social-share-links">
            <h5>SHARE THIS</h5>
            <img
              src="data:image/png;base64,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"
              alt="pinterest-logo"
            />
            <img
              src="data:image/png;base64,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"
              alt="fb-logo"
            />
            <img
              src="data:image/jpeg;base64,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"
              alt="whatsup-logo"
            />
          </div>
          {/* </form> */}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    items: state.items,
  };
}
export default connect(mapStateToProps)(MainComponent);
