import React from 'react'
const Star1 = ({
  activeColor,
  className,
  color,
  desc,
  focusColor,
  height,
  hoverColor,
  title,
  width,
}) => {
  const css = `
    ${hoverColor ? `svg[data-hover="${hoverColor}"]:hover {
      fill: ${hoverColor};
    }` : ''}
    ${focusColor ? `svg[data-focus="${focusColor}"]:focus {
      fill: ${focusColor};
    }` : ''}
    ${activeColor ? `svg[data-active="${activeColor}"]:active {
      fill: ${activeColor};
    }` : ''}
  `
  return (
    <React.Fragment>
      <style>
        {css}
      </style>
      <svg
        {...{ className }}
        data-hover={hoverColor}
        data-focus={focusColor}
        data-active={activeColor}
        width={width ? width : height ? undefined : "42"}
        height={height ? height : undefined}
        viewBox="0 0 42 39" 
        fill={color || "#C4C4C4"}
        xmlns="http://www.w3.org/2000/svg"
      >
        {!!title && <title>{title}</title>}
        {!!desc && <desc>{desc}</desc>}
        <path d="M21 0L25.9393 14.8561H41.9232L28.992 24.0377L33.9313 38.8939L21 29.7123L8.06872 38.8939L13.008 24.0377L0.0767574 14.8561H16.0607L21 0Z" />
      </svg>
    </React.Fragment>
  )
}
export default Star1
