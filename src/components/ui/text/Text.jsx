import React from "react"
import PropTypes from "prop-types"

const Text = ({ is: Is, children, ...props }) => <Is {...props}>{children}</Is>

Text.propTypes = {
  children: PropTypes.node.isRequired,
  is: PropTypes.string,
  isWhite: PropTypes.bool,
}

Text.defaultProps = {
  is: "p",
  isWhite: false,
}

export default Text
