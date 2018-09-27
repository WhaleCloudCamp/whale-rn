import { Component } from "react";
import ModalTarget from "../../rn/components/ModalTarget";

class App extends Component {
    componentDidMount() {
        console.log('mount');
      }
  render() {
    const { children } = this.props;
    return (
        <ModalTarget><div style={{height:'100%'}}>{children}</div></ModalTarget>
    );
  }
}

export default App;
