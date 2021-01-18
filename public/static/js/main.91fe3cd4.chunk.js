(this['webpackJsonpmesto-react'] = this['webpackJsonpmesto-react'] || []).push([[0], {
  15(e, t, n) {},
  16(e, t, n) {
    n.r(t); const a = n(0); const c = n(1); const r = n.n(c); const o = n(6); const i = n.n(o); const s = (n(15), n(9)); const l = n(2); const u = `${n.p}static/media/logo.a307e1c4.svg`; const p = function () { return Object(a.jsx)('header', { className: 'header', children: Object(a.jsx)('img', { src: u, alt: '\u041b\u043e\u0433\u043e\u0442\u0438\u043f', className: 'header__logo' }) }); }; const d = r.a.createContext(); const m = function (e) {
      const t = r.a.useContext(d); const n = e.card.owner._id === t._id; const c = 'element__delete '.concat(n ? 'element__delete_shown' : ''); const o = e.card.likes.some(((e) => e._id === t._id)); const i = 'element__like '.concat(o ? 'element__like_active' : ''); return Object(a.jsxs)('div', {
        className: 'elements__element element',
        children: [Object(a.jsx)('img', {
          src: e.card.link, alt: '\u0424\u043e\u0442\u043e '.concat(e.card.name), className: 'element__image', onClick: e.onCardClick,
        }), Object(a.jsx)('button', { type: 'button', className: c, onClick: e.onCardDelete }), Object(a.jsx)('h3', { className: 'element__title', children: e.card.name }), Object(a.jsxs)('div', { className: 'element__like-container', children: [Object(a.jsx)('button', { type: 'button', className: i, onClick: e.onCardLike }), Object(a.jsx)('p', { className: 'element__like-counter', children: e.card.likes.length })] })],
      });
    }; const f = function (e) {
      const t = r.a.useContext(d); return Object(a.jsxs)('main', {
        className: 'main',
        children: [Object(a.jsxs)('section', { className: 'profile', children: [Object(a.jsxs)('div', { className: 'profile__form', children: [Object(a.jsxs)('div', { className: 'profile__image-container', onClick: e.onEditAvatar, children: [Object(a.jsx)('img', { src: t.avatar, alt: '\u0410\u0432\u0430\u0442\u0430\u0440 \u043f\u0440\u043e\u0444\u0438\u043b\u044f', className: 'profile__image' }), Object(a.jsx)('div', { className: 'profile__image-overlay' })] }), Object(a.jsxs)('div', { className: 'profile__info info', children: [Object(a.jsx)('h1', { className: 'info__title', children: t.name }), Object(a.jsx)('button', { type: 'button', className: 'info__edit-button', onClick: e.onEditProfile }), Object(a.jsx)('p', { className: 'info__subtitle', children: t.about })] })] }), Object(a.jsx)('button', { type: 'button', className: 'profile__add-button', onClick: e.onAddPlace })] }), Object(a.jsx)('section', {
          className: 'elements',
          children: e.cards.map(((t) => Object(a.jsx)(m, {
            card: t, onCardClick() { return e.onCardClick(t); }, onCardLike() { return e.onCardLike(t); }, onCardDelete() { return e.onCardDelete(t); },
          }, t._id))),
        })],
      });
    }; const h = function () { const e = (new Date()).getFullYear(); return Object(a.jsx)('footer', { className: 'footer', children: Object(a.jsxs)('p', { className: 'footer__text', children: ['\xa9 ', e, ' Mesto Russia'] }) }); }; const j = function (e) { return Object(a.jsx)('div', { className: 'popup popup-img popup-'.concat(e.name, ' ').concat(e.card && 'popup_opened'), children: Object(a.jsxs)('div', { className: 'popup-img__container', children: [Object(a.jsx)('button', { type: 'reset', className: 'popup__reset popup-img__reset', onClick: e.onClose }), Object(a.jsxs)('figure', { className: 'popup-img__figure', children: [Object(a.jsx)('img', { src: e.card && e.card.link, alt: e.card && '\u0424\u043e\u0442\u043e '.concat(e.card.name), className: 'popup-img__image' }), Object(a.jsx)('figcaption', { className: 'popup-img__caption', children: e.card && e.card.name })] })] }) }); }; const _ = function (e) {
      return Object(a.jsx)('div', {
        className: 'popup popup-form popup-'.concat(e.name, ' ').concat(e.isOpen ? 'popup_opened' : ''),
        children: Object(a.jsxs)('form', {
          onSubmit: e.onSubmit, method: 'get', action: 'index.html', name: e.name, className: 'popup-form__container popup-edit__container', noValidate: !0, children: [Object(a.jsx)('button', { type: 'reset', className: 'popup__reset popup-'.concat(e.name, '__reset'), onClick: e.onClose }), Object(a.jsx)('h2', { className: 'popup-form__header', children: e.title }), e.children, Object(a.jsx)('button', { type: 'submit', className: 'popup-form__submit', children: e.btnName })],
        }),
      });
    }; const b = function (e) {
      const t = r.a.useContext(d); const n = r.a.useState(''); const c = Object(l.a)(n, 2); const o = c[0]; const i = c[1]; const s = r.a.useState(''); const u = Object(l.a)(s, 2); const p = u[0]; const m = u[1]; return r.a.useEffect((() => { i(t.name), m(t.about); }), [t]), Object(a.jsx)(_, {
        onSubmit(t) { t.preventDefault(), e.onUpdateUser({ name: o, about: p }); },
        isOpen: e.isOpen,
        onClose: e.onClose,
        name: 'edit',
        title: '\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c',
        btnName: '\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c',
        children: Object(a.jsxs)(a.Fragment, {
          children: [Object(a.jsxs)('label', {
            className: 'popup-form__field',
            children: [Object(a.jsx)('input', {
              name: 'profile-change', type: 'text', minLength: '2', maxLength: '40', placeholder: '\u0418\u043c\u044f', value: o, onChange(e) { i(e.target.value); }, id: 'profile-name-input', className: 'popup-form__input popup-edit__input_name', required: !0,
            }), Object(a.jsx)('span', { className: 'popup-form__input-error', id: 'profile-name-input-error' })],
          }), Object(a.jsxs)('label', {
            className: 'popup-form__field',
            children: [Object(a.jsx)('input', {
              name: 'profile-change', type: 'text', minLength: '2', maxLength: '200', placeholder: '\u041f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u044f', value: p, onChange(e) { m(e.target.value); }, id: 'profile-job-input', className: 'popup-form__input popup-edit__input_job', required: !0,
            }), Object(a.jsx)('span', { className: 'popup-form__input-error', id: 'profile-job-input-error' })],
          })],
        }),
      });
    }; const O = function (e) {
      const t = r.a.useRef(); return Object(a.jsx)(_, {
        onSubmit(n) { n.preventDefault(), e.onUpdateAvatar(t.current.value); },
        isOpen: e.isOpen,
        onClose: e.onClose,
        name: 'edit-avatar',
        title: '\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440',
        btnName: '\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c',
        children: Object(a.jsx)(a.Fragment, {
          children: Object(a.jsxs)('label', {
            className: 'popup-form__field',
            children: [Object(a.jsx)('input', {
              name: 'profile-avatar-change', type: 'url', ref: t, placeholder: '\u0421\u0441\u044b\u043b\u043a\u0430', id: 'url-input', className: 'popup-form__input popup-edit-avatar__input', required: !0,
            }), Object(a.jsx)('span', { className: 'popup-form__input-error', id: 'url-input-error' })],
          }),
        }),
      });
    }; const x = function (e) {
      const t = r.a.useRef(); const n = r.a.useRef(); return Object(a.jsx)(_, {
        onSubmit(a) { a.preventDefault(), e.onUpdateCards(t.current.value, n.current.value); },
        isOpen: e.isOpen,
        onClose: e.onClose,
        name: 'add',
        title: '\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e',
        btnName: '\u0421\u043e\u0437\u0434\u0430\u0442\u044c',
        children: Object(a.jsxs)(a.Fragment, {
          children: [Object(a.jsxs)('label', {
            className: 'popup-form__field',
            children: [Object(a.jsx)('input', {
              name: 'card-add', type: 'text', ref: t, minLength: '2', maxLength: '30', placeholder: '\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435', id: 'card-title-input', className: 'popup-form__input popup-add__input_title', required: !0,
            }), Object(a.jsx)('span', { className: 'popup-form__input-error', id: 'card-title-input-error' })],
          }), Object(a.jsxs)('label', {
            className: 'popup-form__field',
            children: [Object(a.jsx)('input', {
              name: 'card-add', type: 'url', ref: n, placeholder: '\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443', id: 'card-url-input', className: 'popup-form__input popup-add__input_url', required: !0,
            }), Object(a.jsx)('span', { className: 'popup-form__input-error', id: 'card-url-input-error' })],
          })],
        }),
      });
    }; const v = n(7); const N = n(8); const g = function (e) { return e.ok ? e.json() : Promise.reject('\u041e\u0448\u0438\u0431\u043a\u0430: '.concat(e.status)); }; const C = function (e) { console.log(e); }; const k = new (function () { function e(t) { Object(v.a)(this, e), this._url = t.url, this._headers = t.headers; } return Object(N.a)(e, [{ key: 'getInitialCards', value() { return fetch(''.concat(this._url, '/cards'), { method: 'GET', headers: this._headers }).then(g).catch(C); } }, { key: 'getProfileInfo', value() { return fetch(''.concat(this._url, '/users/me'), { headers: this._headers }).then(g).catch(C); } }, { key: 'setProfileInfo', value(e, t) { return fetch(''.concat(this._url, '/users/me'), { method: 'PATCH', headers: this._headers, body: JSON.stringify({ name: e, about: t }) }).then(g).catch(C); } }, { key: 'setProfileAvatar', value(e) { return fetch(''.concat(this._url, '/users/me/avatar'), { method: 'PATCH', headers: this._headers, body: JSON.stringify({ avatar: e }) }).then(g).catch(C); } }, { key: 'createNewCard', value(e, t) { return fetch(''.concat(this._url, '/cards'), { method: 'POST', headers: this._headers, body: JSON.stringify({ name: e, link: t }) }).then(g).catch(C); } }, { key: 'deleteCard', value(e) { return fetch(''.concat(this._url, '/cards/').concat(e), { method: 'DELETE', headers: this._headers }).then(g).catch(C); } }, { key: 'changeLikeCardStatus', value(e, t) { return t ? fetch(''.concat(this._url, '/cards/likes/').concat(e), { method: 'PUT', headers: this._headers }).then(g).catch(C) : fetch(''.concat(this._url, '/cards/likes/').concat(e), { method: 'DELETE', headers: this._headers }).then(g).catch(C); } }]), e; }())({ url: 'https://mesto.nomoreparties.co/v1/cohort-17', headers: { authorization: '0f98b9d9-de6c-47c4-8011-fc8d2aa2d9ac', 'Content-Type': 'application/json' } }); const y = function () {
      const e = r.a.useState(!1); const t = Object(l.a)(e, 2); const n = t[0]; const c = t[1]; const o = r.a.useState(!1); const i = Object(l.a)(o, 2); const u = i[0]; const m = i[1]; const v = r.a.useState(!1); const N = Object(l.a)(v, 2); const g = N[0]; const C = N[1]; const y = r.a.useState(void 0); const S = Object(l.a)(y, 2); const P = S[0]; const E = S[1]; const L = r.a.useState({ name: '', about: '', avatar: '' }); const A = Object(l.a)(L, 2); const D = A[0]; const U = A[1]; const w = r.a.useState([]); const T = Object(l.a)(w, 2); const I = T[0]; const q = T[1]; const J = function () { m(!1), c(!1), C(!1), E(void 0); }; return r.a.useEffect((() => { k.getProfileInfo().then(((e) => { U(e); })).catch(((e) => { console.log(e); })); }), []), r.a.useEffect((() => { k.getInitialCards().then(((e) => { q(e); })).catch(((e) => { console.log(e); })); }), []), Object(a.jsx)(d.Provider, {
        value: D,
        children: Object(a.jsxs)('div', {
          className: 'page',
          children: [Object(a.jsx)(p, {}), Object(a.jsx)(f, {
            onEditProfile() { return c(!n); }, onAddPlace() { return m(!u); }, onEditAvatar() { return C(!g); }, onCardClick(e) { return E(e); }, cards: I, onCardLike(e) { return (function (e) { const t = e.likes.some(((e) => e._id === D._id)); k.changeLikeCardStatus(e._id, !t).then(((t) => { const n = I.map(((n) => (n._id === e._id ? t : n))); q(n); })).catch(((e) => { console.log(e); })); }(e)); }, onCardDelete(e) { return (function (e) { k.deleteCard(e._id).then((() => { const t = I.filter(((t) => t._id !== e._id)); q(t); })).catch(((e) => { console.log(e); })); }(e)); },
          }), Object(a.jsx)(h, {}), Object(a.jsx)(b, { isOpen: n, onClose: J, onUpdateUser(e) { k.setProfileInfo(e.name, e.about).then(((e) => { U(e), J(); })).catch(((e) => { console.log(e); })); } }), Object(a.jsx)(x, { isOpen: u, onClose: J, onUpdateCards(e, t) { k.createNewCard(e, t).then(((e) => { q([e].concat(Object(s.a)(I))), J(); })).catch(((e) => { console.log(e); })); } }), Object(a.jsx)(O, { isOpen: g, onClose: J, onUpdateAvatar(e) { k.setProfileAvatar(e).then(((e) => { U(e), J(); })).catch(((e) => { console.log(e); })); } }), Object(a.jsx)(j, { onClose: J, card: P }), Object(a.jsx)(_, { name: 'delete', title: '\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?', btnName: '\u0414\u0430' })],
        }),
      });
    }; i.a.render(Object(a.jsx)(r.a.StrictMode, { children: Object(a.jsx)(y, {}) }), document.getElementById('root'));
  },
}, [[16, 1, 2]]]);
// # sourceMappingURL=main.91fe3cd4.chunk.js.map
