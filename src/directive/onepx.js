
const dpr = devicePixelRatio;
const DEFAULT_BORDER_COLOR = '#d9d9d9';
export default {
	'onepx': {
		inserted(el, binding) {
			onepx(el, binding);
		},
		update(el, binding) {
			onepx(el, binding);
		}
  },
  'onepx-b': {
    inserted(el, binding) {
			onepx(el, binding, '-bottom');
		},
		update(el, binding) {
			onepx(el, binding, '-bottom');
		}
  },
  'onepx-t': {
    inserted(el, binding) {
			onepx(el, binding, '-top');
		},
		update(el, binding) {
			onepx(el, binding, '-top');
		}
  },
  'onepx-l': {
    inserted(el, binding) {
			onepx(el, binding, '-left');
		},
		update(el, binding) {
			onepx(el, binding, '-left');
		}
  },
  'onepx-r': {
    inserted(el, binding) {
			onepx(el, binding, '-right');
		},
		update(el, binding) {
			onepx(el, binding, '-right');
		}
  }
};
function onepx(el, binding, side = '') {
	if (binding.value !== undefined && !binding.value) return;
	let id;
	let elId = el.getAttribute('id');
	if (elId) {
		id = elId;
	} else {
		id = `onepx_${parseInt(Math.random() * 10000000, 10)}`;
		el.setAttribute('id', id);
	}

	let elStyle = getComputedStyle(el);
	if (!(elStyle.width && elStyle.height && elStyle.borderRadius)) return;

  let cssBorderColor = elStyle.borderBottomColor;
	let borderColor = el.getAttribute('data-border-color') || cssBorderColor || DEFAULT_BORDER_COLOR;

	let computedBorder = '';
	elStyle.borderRadius.split(' ').map(v => {
		computedBorder += ' ' + (parseFloat(v) * dpr) + 'px';
	});
	let onepxStyle = `
                border-radius: ${computedBorder};
                width: ${getWidth(elStyle) * dpr}px;
                height: ${getHeight(elStyle) * dpr}px;
                position: absolute;
                left: 0;top: 0;
                transform: scale(${1 / dpr}, ${1 / dpr});
                transform-origin: 0 0;
                z-index: 1;
                pointer-events: none;
            `;

	let inset = el.getAttribute('data-border-outset') === 'true';
	onepxStyle += inset ? `box-shadow: 0 0 0 1px ${borderColor};` : `border${side}: 1px solid ${borderColor};`;


	let onepx = el.querySelector(`.${id}`);
	if (onepx) {
		onepx.setAttribute('style', onepxStyle);
	} else {
		onepx = document.createElement('div');
		onepx.setAttribute('class', id);
		onepx.setAttribute('style', onepxStyle);
		onepx.classList.add('onepx');
		el.appendChild(onepx);
  }
}

function getWidth(elStyle) {
  if (elStyle['boxSizing'] === 'content-box') {
    return parseFloat(elStyle['width']) + parseFloat(elStyle['padding-left']) + parseFloat(elStyle['padding-right'])
  }
  return parseFloat(elStyle.width)
}

function getHeight(elStyle) {
  if (elStyle['boxSizing'] === 'content-box') {
    return parseFloat(elStyle.height) + parseFloat(elStyle['padding-top']) + parseFloat(elStyle['padding-bottom'])
  }
  return parseFloat(elStyle.height)
}

function debug(el) {
	return el.getAttribute('data-border-debug');
}
