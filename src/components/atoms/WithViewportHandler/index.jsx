/*
 *
 * withViewportHandler - (High Order Component)
 -----------------------------------------------------------------------------------
  Descripción: High Order Component que maneja los estados de la vista para los
               dispositivos móbiles. El high order component actualiza sus valores
               dependiendo de la anchura de la pantalla.
  Propiedades:
    - viewport: {
        type:           Enum<String>  - Puede ser uno de los siguientes: mobile, tablet, desktop.
        isMobileView:   Boolean       - Indica si el componente cumple con la vista mobile
        isTabletView:   Boolean       - Indica si el componente cumple con la vista tablet
        isDesktopView:  Boolean       - Indica si el componente cumple con la vista desktop
    }
  > Las propiedades se actualizan cuando la pantalla se ajusta a los parámetros establecidos
    por el objeto BREAKPOINS (ver en archivo handlers.js).


  Modo de empleo:
  import { compose } from 'redux';
  import withViewportHandler from './withViewportHandler';
  // al final del archivo
  export default compose(
    withViewportHandler
  )(Component);
------------------------------------------------------------------------------------
 *
 */
import React, { Component } from 'react';
import { getViewPortState } from './handlers';

// import { getDisplayName } from 'recompose';
export const ViewPortController = WrappedComponent =>
  class ViewPortControllerInner extends Component {
    state = {
      windowWidth: window.innerWidth,
      viewportType: getViewPortState(),
    };

    // React methods
    componentDidMount() {
      window.addEventListener('resize', this.handleResizeWindow);
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.handleResizeWindow);
    }

    // -- end react methods
    handleResizeWindow = () => {
      const { viewportType } = this.state;
      const newViewPortType = getViewPortState();
      if (newViewPortType !== viewportType) {
        this.setState({
          windowWidth: window.innerWidth,
          viewportType: newViewPortType,
        });
      }
    };

    setWindowWidth = () => this.setState({ windowWidth: window.innerWidth });

    render() {
      const props = Object.assign({}, this.props, {
        viewport: {
          type: this.state.viewportType,
          isMobileView: this.state.viewportType === 'mobile',
          isTabletView: this.state.viewportType === 'tablet',
          isDesktopView: this.state.viewportType === 'desktop',
          isDesktopLargeView: this.state.viewportType === 'desktopLarge',
          windowWidth: this.state.windowWidth,
        },
      });
      return <WrappedComponent {...props} />;
    }
  };

export default ViewPortController;