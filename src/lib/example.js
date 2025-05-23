class Component {
  $target;
  state;
  constructor($target) {
    this.$target = $target;
    this.setup();
    this.render();
  }

  setup() {}
  template() {
    return "";
  }
  render() {
    this.$target.innerHTML = this.template();
    this.setEvent();
  }
  setEvent() {}

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }
}

class App extends Component {
  setup() {
    this.state = { items: ["item1", "item2"] };
  }
  template() {
    const { items } = this.state;
    return `
        <ul>
          ${items.map((item) => `<li>${item}</li>`).join("")}
        </ul>
        <button>추가</button>
    `;
  }

  setEvent() {
    this.$target.querySelector("button").addEventListner("click", () => {
      const { items } = this.state;
      this.setState({ items: [...items, `item${items.length + 1}`] });
    });
  }
}

new App(document.querySelector("#app"));
