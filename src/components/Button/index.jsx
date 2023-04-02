import { Link } from 'next/link';
import propTypes from 'prop-types';

export default function CustomButton(props) {
  const className = [props.className];
  if (props.isWidthAuto) className.push('w-auto');
  if (props.isBlock) className.push('block');
  if (props.hasShadow) className.push('shadow-sm');
  if (props.isTransparent)
    className.push(
      'border-primary border text-primary hover:bg-primary hover:text-white'
    );
  if (props.isPrimary)
    className.push(
      'bg-primary text-white hover:bg-transparent hover:border hover:border-primary hover:text-primary'
    );
  if (props.isSecondary)
    className.push(
      'bg-secondary text-white hover:bg-transparent hover:border hover:border-primary hover:text-primary'
    );
  if (props.isRounded) className.push('rounded-lg');
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
  className: propTypes.string,
  isLoading: propTypes.bool,
  isDisabled: propTypes.bool,
  isWidthAuto: propTypes.bool,
  isLight: propTypes.bool,
  isBlock: propTypes.bool,
  isFlex: propTypes.bool,
  isFull: propTypes.bool,
  isTransparent: propTypes.bool,
  isPrimary: propTypes.bool,
  isSecondary: propTypes.bool,
  isRounded: propTypes.bool,
  isRoundedFull: propTypes.bool,
  isExternal: propTypes.bool,
  hasShadow: propTypes.bool,
};
