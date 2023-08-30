import { connect } from "react-redux";
import { increment, decrement } from "../app/actions/CounterActions";
import CounterComponent from "../components/Counter/Counter/Counter";

const mapStateToProps = (state) => ({
  count: state.count,
});

const mapDispatchToProps = {
  increment,
  decrement,
};

const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterComponent);

export default CounterContainer;
