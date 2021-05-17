import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const TextElement = styled.p`
  --text-5xl: calc(64 / 16 * 1rem);
  --text-4xl: calc(48 / 16 * 1rem);
  --text-3xl: calc(36 / 16 * 1rem);
  --text-2xl: calc(30 / 16 * 1rem);
  --text-xl: calc(24 / 16 * 1rem);
  --text-lg: calc(20 / 16 * 1rem);
  --text-md: calc(18 / 16 * 1rem);
  --text-base: calc(16 / 16 * 1rem);
  --text-sm: calc(14 / 16 * 1rem);
  --text-xs: calc(12 / 16 * 1rem);
  --text-xxs: calc(10 / 16 * 1rem);

  line-height: ${(props) => (props.heading ? 1.3 : props.lineHeight)};
  font-weight: ${(props) => (props.heading ? 600 : props.weight)};
  font-family: ${(props) =>
    !props.heading && `"Helvetica Neue", Arial, sans-serif`};
  color: inherit;

  ${(props) =>
    props.heading &&
    css`
      font-family: 'HelveticaNeue-CondensedBold', 'HelveticaNeueBoldCondensed',
        'HelveticaNeue-Bold-Condensed', 'Helvetica Neue Bold Condensed',
        'HelveticaNeueBold', 'HelveticaNeue-Bold', 'Helvetica Neue Bold',
        'Helvetica Neue', 'Oswald', Arial, sans-serif;
      font-stretch: condensed;
      text-transform: uppercase;
      letter-spacing: 0.02em;
    `}

  ${(props) =>
    props.truncate &&
    css`
      display: -webkit-box;
      -webkit-line-clamp: ${props.truncate};
      -webkit-box-orient: vertical;
      overflow: hidden;
    `}
`;

export const Text = (props) => {
  const {
    element,
    children,
    size,
    align,
    heading,
    className,
    lineHeight,
    weight,
    spacing,
    truncate,
  } = props;

  return (
    <TextElement
      as={element}
      style={{ fontSize: `var(--text-${size})`, textAlign: align }}
      heading={heading}
      className={className}
      lineHeight={lineHeight}
      weight={weight}
      spacing={spacing}
      truncate={truncate}
    >
      {children}
    </TextElement>
  );
};

Text.propTypes = {
  /**
   * Boolean indicating whether the text should be a heading or not
   */
  heading: PropTypes.bool,
  /** What alignment should the text have? */
  align: PropTypes.oneOf(['left', 'center', 'right']),
  /** How large should the text be */
  size: PropTypes.oneOf([
    '5xl',
    '4xl',
    '3xl',
    '2xl',
    'xl',
    'lg',
    'md',
    'base',
    'sm',
    'xs',
    'xxs',
  ]),
  /** Semantically what element should be used */
  element: PropTypes.string,
  /** What weight should the font be (only use if defaults don't satify) */
  weight: PropTypes.number,
  /** Optional line height (only use if defaults don't satify) */
  lineHeight: PropTypes.number,
  /** Text contents */
  children: PropTypes.string,
  /** The number of lines you want to truncate to */
  truncate: PropTypes.number,
};

Text.defaultProps = {
  heading: false,
  element: 'p',
  size: 'base',
  align: 'left',
  weight: 500,
  lineHeight: 1.75,
};
