import React, { PropTypes } from 'react';
import { variables } from 'cf-style-const';

import { rem } from 'polished';

var numberOrString = PropTypes.oneOfType([PropTypes.string, PropTypes.number]);

const pxToRem = value => {
  if (typeof value === 'number' || /\d+px/.test(value)) {
    return rem(value, variables.fontSize);
  }
  return value;
};

// The export of this module is a datastructuer containing metadata
// which powers:
//  - the creation of fela style rules
//  - the creation of the theme in BoxTheme
//  - a number of safety checks
//
// At a bare minimum, the propType must be specified to support a
// new style property
//
// In addition, several other properties can be specified in the spec.
//
// Conflicts with shows an error if the developer tries to use both props.
//
// For example, given the following spec:
//
//    foo: {
//      propType: numberOrString,
//      conflictsWith: [
//        'bar',
//      ]
//    },
//
//  passing the foo and bar props to the component will cause a warning.
//
//  Providing 'preprocessWith' will cause all the provided callbacks
//  to be invoked on the passed prop when building the components styles
//
//  For example, given the following spec:
//    foo: {
//      propType: number,
//      preprocessWith: [ 'pxToRem' ]
//   },
//
//  The value of the 'foo' prop will be transformed with pxToRem.
//
//  The default property is currently un-used. They're left in place
//  in case we arrive upon a performant solution to using them (like
//  generating the code for the Box component).
//
export default {
  margin: {
    propType: numberOrString,
    conflictsWith: ['marginTop', 'marginBottom', 'marginLeft', 'marginRight']
  },
  marginTop: {
    propType: numberOrString,
    default: 0,
    preprocessWith: [pxToRem]
  },
  marginBottom: {
    propType: numberOrString,
    default: 0,
    preprocessWith: [pxToRem]
  },
  marginLeft: {
    propType: numberOrString,
    default: 0,
    preprocessWith: [pxToRem]
  },
  marginRight: {
    propType: numberOrString,
    default: 0,
    preprocessWith: [pxToRem]
  },

  padding: {
    propType: numberOrString,
    conflictsWith: [
      'paddingTop',
      'paddingBottom',
      'paddingLeft',
      'paddingRight'
    ]
  },
  paddingTop: {
    propType: numberOrString,
    default: 0,
    preprocessWith: [pxToRem]
  },
  paddingBottom: {
    propType: numberOrString,
    default: 0,
    preprocessWith: [pxToRem]
  },
  paddingLeft: {
    propType: numberOrString,
    default: 0,
    preprocessWith: [pxToRem]
  },
  paddingRight: {
    propType: numberOrString,
    default: 0,
    preprocessWith: [pxToRem]
  },

  overflow: {
    propType: PropTypes.oneOf([
      'visible',
      'hidden',
      'scroll',
      'auto',
      'inherit',
      'initial',
      'unset'
    ])
  },

  border: {
    propType: PropTypes.string,
    conflictsWith: [
      'borderStyle',
      'borderColor',
      'borderWidth',
      'borderTopColor',
      'borderBottomColor',
      'borderLeftColor',
      'borderRightColor',
      'borderTopStyle',
      'borderBottomStyle',
      'borderLeftStyle',
      'borderRightStyle',
      'borderTopWidth',
      'borderBottomWidth',
      'borderLeftWidth',
      'borderRightWidth'
    ]
  },

  borderColor: {
    propType: PropTypes.string,
    conflictsWith: [
      'borderTopColor',
      'borderBottomColor',
      'borderLeftColor',
      'borderRightColor'
    ]
  },
  borderTopColor: {
    propType: PropTypes.string
  },
  borderBottomColor: {
    propType: PropTypes.string
  },
  borderLeftColor: {
    propType: PropTypes.string
  },
  borderRightColor: {
    propType: PropTypes.string
  },

  borderStyle: {
    propType: PropTypes.string,
    conflictsWith: [
      'borderTopStyle',
      'borderBottomStyle',
      'borderLeftStyle',
      'borderRightStyle'
    ]
  },
  borderTopStyle: {
    propType: PropTypes.string
  },
  borderBottomStyle: {
    propType: PropTypes.string
  },
  borderLeftStyle: {
    propType: PropTypes.string
  },
  borderRightStyle: {
    propType: PropTypes.string
  },

  borderWidth: {
    propType: PropTypes.number,
    conflictsWith: [
      'borderTopWidth',
      'borderBottomWidth',
      'borderLeftWidth',
      'borderRightWidth'
    ]
  },
  borderTopWidth: {
    propType: PropTypes.number
  },
  borderBottomWidth: {
    propType: PropTypes.number
  },
  borderLeftWidth: {
    propType: PropTypes.number
  },
  borderRightWidth: {
    propType: PropTypes.number
  },

  lineHeight: {
    propType: PropTypes.number,
    default: variables.lineHeight
  },
  fontSize: {
    propType: numberOrString,
    default: variables.fontSize
  },
  fontWeight: {
    propType: PropTypes.number,
    default: variables.fontWeight
  },
  fontFamily: {
    propType: PropTypes.string,
    default: variables.fontFamily
  },
  color: {
    propType: PropTypes.string,
    default: variables.fontColor
  },

  backgroundColor: {
    propType: PropTypes.string,
    default: 'transparent'
  },

  backgroundImage: {
    propType: PropTypes.string
  },

  backgroundPosition: {
    propType: PropTypes.string
  },

  backgroundPositionX: {
    propType: PropTypes.string
  },

  backgroundPositionY: {
    propType: PropTypes.string
  },

  display: {
    propType: PropTypes.oneOf([
      'inline',
      'block',
      'inline-block',
      'flex',
      'inline-flex'
    ]),
    default: 'block'
  },

  position: {
    propType: PropTypes.oneOf(['static', 'relative', 'absolute', 'fixed']),
    default: 'static'
  },

  float: {
    propType: PropTypes.oneOf([
      'left',
      'right',
      'none',
      'inline-start',
      'inline-end'
    ])
  },

  top: {
    propType: numberOrString,
    default: 'auto',
    preprocessWith: [pxToRem]
  },
  bottom: {
    propType: numberOrString,
    default: 'auto',
    preprocessWith: [pxToRem]
  },
  left: {
    propType: numberOrString,
    default: 'auto',
    preprocessWith: [pxToRem]
  },
  right: {
    propType: numberOrString,
    default: 'auto',
    preprocessWith: [pxToRem]
  },

  width: {
    propType: numberOrString,
    default: 'auto',
    preprocessWith: [pxToRem]
  },
  height: {
    propType: numberOrString,
    default: 'auto',
    preprocessWith: [pxToRem]
  },
  minWidth: {
    propType: numberOrString,
    default: 0,
    preprocessWith: [pxToRem]
  },
  minHeight: {
    propType: numberOrString,
    default: 0,
    preprocessWith: [pxToRem]
  },

  verticalAlign: {
    propType: numberOrString,
    default: 'baseline'
  },

  transform: {
    propType: PropTypes.string
  },

  flexDirection: {
    propType: PropTypes.oneOf([
      'row',
      'row-reverse',
      'column',
      'column-reverse'
    ]),
    default: 'row'
  },

  flexWrap: {
    propType: PropTypes.oneOf(['nowrap', 'wrap', 'wrap-reverse']),
    default: 'nowrap'
  },

  justifyContent: {
    propType: PropTypes.oneOf([
      'flex-start',
      'flex-end',
      'center',
      'space-between',
      'space-around'
    ]),
    default: 'flex-start'
  },

  alignItems: {
    propType: PropTypes.oneOf([
      'flex-start',
      'flex-end',
      'center',
      'baseline',
      'stretch'
    ]),
    default: 'stretch'
  },

  alignContent: {
    propType: PropTypes.oneOf([
      'flex-start',
      'flex-end',
      'center',
      'space-between',
      'space-around',
      'stretch'
    ]),
    default: 'stretch'
  },

  order: {
    propType: PropTypes.number,
    default: 0
  },

  flexGrow: {
    propType: PropTypes.number,
    default: 0
  },

  flexShrink: {
    propType: PropTypes.number,
    default: 1
  },

  flexBasis: {
    propType: numberOrString,
    default: 'auto'
  },

  flex: {
    propType: PropTypes.string
  },

  alignSelf: {
    propType: PropTypes.oneOf([
      'auto',
      'flex-start',
      'flex-end',
      'center',
      'baseline',
      'stretch'
    ]),
    default: 'auto'
  },

  zIndex: {
    propType: numberOrString,
    default: 'auto'
  },

  textAlign: {
    propType: PropTypes.oneOf([
      'left',
      'right',
      'center',
      'justify',
      'justify-all',
      'start',
      'end',
      'match-parent'
    ]),
    default: 'start'
  },

  opacity: {
    propType: numberOrString,
    default: 1.0
  },

  userSelect: {
    propType: PropTypes.oneOf(['none', 'auto', 'text', 'container', 'all']),
    default: 'auto'
  },

  wordWrap: {
    propType: PropTypes.oneOf([
      'normal',
      'break-word',
      'inherit',
      'initial',
      'unset'
    ]),
    default: 'normal'
  },

  wordWrap: {
    propType: PropTypes.string,
    default: 'normal'
  }
};

/*
 * Need support for:
   content
   outline
   border-radius
   box-shadow
   text-decoration
*/
