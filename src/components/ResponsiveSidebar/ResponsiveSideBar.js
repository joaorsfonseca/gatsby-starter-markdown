import React, { Component } from "react";
import Sidebar from "react-sidebar";
import { getHeaderHeightState, getSidebarDockedState, getContentOnPostPageState } from "../../store/selectors";
import { connect } from "react-redux";
import { onSetSidebarOpen, onSetSidebarDocked } from "../../actions/layout";
import MediaQuery from "react-responsive";
import { maxWidth, styles } from './sidebar-config';
import SidebarContents from "../SidebarContents";

class ResponsiveSidebar extends Component {

  render() {
    const { onSetSidebarDocked, headerHeight, sidebarDocked, onPostPage, root } = this.props
    return (
      <MediaQuery
        maxWidth={maxWidth}
        onChange={(matches) => {
          onSetSidebarDocked(!matches)
        }}
      >
        {(matches) => {
          if (!sidebarDocked || !onPostPage) return <></>
          return (
            <Sidebar
              styles={{
                ...styles,
                root: {
                  ...styles.root,
                  top: headerHeight + 30
                }
              }}
              sidebar={<SidebarContents root={root}/>}
              docked={!matches}
              shadow={false}
            >
              <b></b>
            </Sidebar>
          )
        }}
      </MediaQuery>
    );
  }
}

const mapStateToProps = (state) => {
  return { 
    headerHeight: getHeaderHeightState(state),
    sidebarDocked: getSidebarDockedState(state),
    onPostPage: getContentOnPostPageState(state),
  }
}

const mapDispatchToProps = {
  onSetSidebarOpen,
  onSetSidebarDocked
}

export default connect(mapStateToProps, mapDispatchToProps) (ResponsiveSidebar);