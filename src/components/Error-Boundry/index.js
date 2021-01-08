import React from "react";
import * as actions from '../../actions'
import {connect} from 'react-redux'
import ErrorIndicator from "../Error-Indicator";

class ErrorBoundary extends React.Component {
  state = {
    hasError: false
  }

  static getDerivedStateFromError(error) {
    // Обновить состояние с тем, чтобы следующий рендер показал запасной UI.
    return {hasError: true};
  }

  componentDidCatch(error, errorInfo) {
    // Можно также сохранить информацию об ошибке в соответствующую службу журнала ошибок
    this.setState({hasError: true})

    console.log(JSON.stringify({error, errorInfo}));
  }

  render() {
    if (this.state.hasError) {
      // Можно отрендерить запасной UI произвольного вида
      return ErrorIndicator
    }
    return this.props.children;
  }
}

const mapStateToProps = (state) => {
  return {
    hasError: state.hasError
  }
}

export default connect(mapStateToProps, actions)(ErrorBoundary)
