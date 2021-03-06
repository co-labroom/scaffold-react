/**
 * 路由数据加载器(非权限数据)
 */
import React from "react";
import { withRouter } from "react-router-dom";
import { matchRoutes } from "react-router-config";

export const RouteDataLoader = withRouter(
  class extends React.Component {
    componentWillReceiveProps(nextProps) {
      if (nextProps.location !== this.props.location) {
        const matchedRoutes = matchRoutes(
          this.props.routes,
          nextProps.location.pathname
        );
        const { store } = this.props;
        matchedRoutes.forEach(({ route, match }) => {
          route.loadData ? route.loadData(match, store) : void 0;
        });
      }
    }

    render() {
      return this.props.children;
    }
  }
);
