import { Link } from 'next/link';
import propTypes from 'prop-types';

export default function CustomButton(props) {
  const className = [props.className];
  if (props.isWidthAuto) className.push('w-auto');
  if (props.isBlock) className.push('block');
  if (props.hasShadow) className.push('shadow-sm');
  if (props.isTransparentOrange)
    className.push('border border-[#F2672E] hover:bg-[#F2672E]');
  if (props.isTransparentPurple)
    className.push(
      'border border-indigo-500 ring-1 transition-all hover:bg-indigo-500'
    );
  if (props.isGradientOrange) className.push('bg-gradient-orange');
  if (props.isGradientPurple) className.push('bg-gradient-purple');
  if (props.isSecondary) className.push('bg-gradient-purple');
  if (props.isRounded) className.push('rounded-md');
  if (props.isRoundedFull) className.push('rounded-full');
  if (props.isFlex) className.push('flex');
  if (props.isFull) className.push('w-full');
  const onClick = () => {
    if (props.onClick) props.onClick();
  };

  if (props.isLoading) {
    return (
      <span
        className={className.join(' ')}
        style={props.style}>
        {props.isLoading ? (
          <>
            <span className='spinner-border spinner-border-sm mx-5'></span>
            <span className='sr-only'>Loading....</span>
          </>
        ) : (
          props.children
        )}
      </span>
    );
  }
  if (props.type === 'link') {
    if (props.isExternal) {
      return (
        <a
          onClick={props.onClick}
          href={props.href}
          className={className.join(' ')}
          style={props.style}
          target={props.target === '_blank' ? '_blank' : undefined}
          rel={props.target === '_blank' ? 'noopener noreferrer' : undefined}>
          {props.children}
        </a>
      );
    } else {
      return (
        <Link
          href={props.href}
          className={className.join(' ')}
          style={props.style}
          onClick={onClick}>
          {props.children}
        </Link>
      );
    }
  } else if (props.isDisabled) {
    return (
      <button
        className={className.join(' ')}
        style={props.style}
        value={props.value}
        disabled
        onClick={onClick}>
        {props.children}
      </button>
    );
  }

  return (
    <button
      className={className.join(' ')}
      style={props.style}
      onClick={onClick}>
      {props.children}
    </button>
  );
}

CustomButton.propTypes = {
  type: propTypes.oneOf(['button', 'link']),
  onClick: propTypes.func,
  target: propTypes.string,
  href: propTypes.string,
  value: propTypes.string,
  className: propTypes.string,
  isLoading: propTypes.bool,
  isDisabled: propTypes.bool,
  isWidthAuto: propTypes.bool,
  isLight: propTypes.bool,
  isBlock: propTypes.bool,
  isFlex: propTypes.bool,
  isFull: propTypes.bool,
  isTransparentOrange: propTypes.bool,
  isTransparentPurple: propTypes.bool,
  isGradientOrange: propTypes.bool,
  isGradientPurple: propTypes.bool,
  isRounded: propTypes.bool,
  isRoundedFull: propTypes.bool,
  isExternal: propTypes.bool,
  hasShadow: propTypes.bool,
  onClick: propTypes.func,
};
