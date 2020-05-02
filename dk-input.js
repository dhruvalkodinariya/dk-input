import { LitElement, html ,css} from 'lit-element';
import { MDCTextField } from '@material/textfield'
import { MDCTextFieldCss } from './material-textfield-css';
import { classMap } from 'lit-html/directives/class-map';
import { ifDefined } from 'lit-html/directives/if-defined';
// import '@material/mwc-icon';
import '@dhruval/dk-icon-button';

export class DkInput extends LitElement {

  static get styles(){
    return[
      MDCTextFieldCss,
      css`
        :host {
          display: block;
          outline:none;
          position: relative;
          padding:6px 0;
        }

        :host[hidden] {
          display: none;
        }

        :host([disabled]),
        :host([readOnly]){
          pointer-events: none;
        }

        .input-container{
          width:var(--dk-input-width,300px);
        }

        .mdc-text-field{
          width:100%;
        }

        :host([shaped-filled]) .mdc-text-field:not(.mdc-text-field--outlined){
          border-radius: 16px 16px 0 0;
        }

        :host([shaped-left]) .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
          border-radius: var(--mdc-notched-outline-leading-border-radius,26px 0 0 26px);
          width: var(--mdc-notched-outline-leading-width,26px);
        }

        :host([shaped-right]) .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing{
          border-radius: var(--mdc-notched-outline-trailing-border-radius,0 26px 26px 0);
        }

        :host([shaped-right]) .mdc-text-field.mdc-text-field--outlined .mdc-text-field__input{
          margin: 0 10px 0 0;
        }

        :host([shaped-left][shaped-right]) .mdc-text-field.mdc-text-field--outlined .mdc-text-field__input{
          margin: 0 10px 0 10px;
        }

        :host([shaped-left]) .mdc-text-field.mdc-text-field--outlined .mdc-text-field__input{
          margin: 0 0 0 10px;
        }

        .mdc-text-field--invalid + .mdc-text-field-helper-line .mdc-text-field-helper-text--validation-msg {
          display: block;  
        }

        .mdc-text-field--invalid + .mdc-text-field-helper-line .helper-text {
          display: none;  
        }

        .mdc-text-field-helper-text--validation-msg{
          display: none;
        }


        .mdc-text-field--filled:not(.mdc-text-field--disabled) {
          background-color: var(--mdc-theme-divider);
        }
        .mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--invalid) .mdc-line-ripple::before {
          border-bottom-color: var(--mdc-theme-text-secondary,rgba(0, 0, 0, 0.42));
        }
        .mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--invalid):hover .mdc-line-ripple::before {
          border-bottom-color: var(--mdc-theme-text-primary,rgba(0, 0, 0, 0.87));
        }
        .mdc-text-field--filled .mdc-text-field__ripple::before,
        .mdc-text-field--filled .mdc-text-field__ripple::after {
          background-color: var(--mdc-theme-text-primary,rgba(0, 0, 0, 0.87));
        }


        .mdc-text-field:not(.mdc-text-field--disabled):not(.mdc-text-field--invalid) .mdc-floating-label {
          color: var(--mdc-theme-text-secondary,rgba(0, 0, 0, 0.6));
        }
        .mdc-text-field:not(.mdc-text-field--disabled):not(.mdc-text-field--invalid) .mdc-text-field__input {
          color: var(--mdc-theme-text-primary,rgba(0, 0, 0, 0.87));
        }
        .mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
          color: var(--mdc-theme-text-secondary,rgba(0, 0, 0, 0.54));
        }
        .mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input {
          color: var(--mdc-theme-text-primary,rgba(0, 0, 0, 0.87));
        }

        .mdc-text-field:not(.mdc-text-field--disabled):not(.mdc-text-field--invalid) .mdc-text-field__icon--leading,
        .mdc-text-field:not(.mdc-text-field--disabled):not(.mdc-text-field--invalid) .mdc-text-field__icon--trailing {
          --dk-icon-color:var(--mdc-theme-text-secondary);
          color: var(--mdc-theme-text-secondary,rgba(0, 0, 0, 0.54));
        }

        .mdc-text-field.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__icon--leading,
        .mdc-text-field.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__icon--trailing {
          --dk-icon-color:var(--mdc-theme-error);
        }


        .mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--invalid) .mdc-line-ripple::before {
          border-bottom-color: var(--mdc-theme-text-secondary,rgba(0, 0, 0, 0.42));
        }

        .mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-notched-outline__leading,
        .mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-notched-outline__notch,
        .mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-notched-outline__trailing,
        .mdc-text-field--textarea:not(.mdc-text-field--disabled):not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-notched-outline__leading,
        .mdc-text-field--textarea:not(.mdc-text-field--disabled):not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-notched-outline__notch,
        .mdc-text-field--textarea:not(.mdc-text-field--disabled):not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-notched-outline__trailing{
          border-color: var(--mdc-theme-text-secondary,rgba(0, 0, 0, 0.38));
        }

        .mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--invalid):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__leading,
        .mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--invalid):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__notch,
        .mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--invalid):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__trailing {
          border-color: var(--mdc-theme-text-primary,rgba(0, 0, 0, 0.87));
        }

        .mdc-text-field--focused:not(.mdc-text-field--disabled):not(.mdc-text-field--invalid) .mdc-floating-label {
          color: var(--mdc-theme-primary,rgba(98, 0, 238, 0.87));
        }

        .mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__affix--prefix,
        .mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__affix--suffix {
          color: var(--mdc-theme-text-secondary,rgba(0, 0, 0, 0.6));
        }

        .mdc-text-field--disabled.mdc-text-field--filled {
          background-color: var(--mdc-theme-disabled-field-background,#fafafa);
          /* background-color:rgba(255, 255, 255, 0.05); */
        }

        .mdc-text-field--disabled .mdc-text-field__input {
          color: var(--mdc-theme-text-disabled,rgba(0, 0, 0, 0.38));
        }

        

        .mdc-text-field--disabled .mdc-line-ripple::before {
          border-bottom-color: var(--mdc-theme-text-disabled,rgba(0, 0, 0, 0.06));
        }
        .mdc-text-field--disabled .mdc-notched-outline__leading,
        .mdc-text-field--disabled .mdc-notched-outline__notch,
        .mdc-text-field--disabled .mdc-notched-outline__trailing {
          border-color: var(--mdc-theme-text-disabled,rgba(0, 0, 0, 0.06));
        }

        .mdc-text-field--disabled .mdc-floating-label {
          color: var(--mdc-theme-text-disabled,rgba(0, 0, 0, 0.38));
        }
        .mdc-text-field--disabled + .mdc-text-field-helper-line .mdc-text-field-helper-text {
          color: var(--mdc-theme-text-disabled,rgba(0, 0, 0, 0.38));
        }
        .mdc-text-field--disabled .mdc-text-field-character-counter,
        .mdc-text-field--disabled + .mdc-text-field-helper-line .mdc-text-field-character-counter {
          color: var(--mdc-theme-text-disabled,rgba(0, 0, 0, 0.38));
        }

        .mdc-text-field--disabled .mdc-text-field__icon--leading,
        .mdc-text-field--disabled .mdc-text-field__icon--trailing{
          --dk-icon-color: var(--mdc-theme-text-disabled);
            color: var(--mdc-theme-text-disabled,rgba(0, 0, 0, 0.3));
        }
        
        .mdc-text-field--disabled .mdc-text-field__affix--prefix ,
        .mdc-text-field--disabled .mdc-text-field__affix--suffix{
          color: var(--mdc-theme-text-disabled,rgba(0, 0, 0, 0.38));
        }

        .prefix-text,
        .suffix-text{
          color: var(--mdc-theme-text-primary, rgba(0, 0, 0, 0.87));
        }

        .prefix-text{
          padding-right:10px;
        }  
      `
    ];
  }

  static get properties() {
    return {
      name: { type: String },
      type: { type: String },
      value: { type: String },
      prefix: { type: String },
      suffix: { type: String },
      outlined: { type: Boolean },
      autoSelect: { type: Boolean },
      invalid: { type: Boolean },
      disabled: { type: Boolean },
      readOnly: { type: Boolean },
      required: { type: Boolean },
      iconLeading: { type: String },
      iconTrailing: { type: String },
      helperText: { type: String },
      hintPersistent: { type: Boolean },
      errorMessage: { type: String },
      label: { type:String },
      placeholder: { type:String },
      pattern: { type:String },
      allowedPattern: { type: String },
      maxLength: { type: Number },
      minLength: { type: Number },
      tAreaRows: { type: Number },
      tAreaColumns: { type: Number },
      charCounter: { type: Boolean },
      multiline: { type: Boolean },
      shapedFilled: { type: Boolean, reflect: true, attribute:"shaped-filled"},
      shapedLeft: { type: Boolean, reflect: true, attribute:"shaped-left"},
      shapedRight: { type: Boolean, reflect: true, attribute:"shaped-right"},
      validator: { type: Object },
      clickableIcon: { type:Boolean }
    };
  }

  constructor(){
    super();
    this.required = false;
    this.readOnly = false;
    this.invalid = false;
    this.disabled = false;
    this.type = 'text';
    this._value = '';
    this.pattern = '(.*?)';
    this.autoSelect = false;
    this.errorMessage = '';
    this.hintPersistent = false;
    this.placeholder = '';
    this.maxLength = -1;
    this.minLength = -1;
    this.charCounter = false;
    this.multiline = false;
    this.truncateOnBlur = false;
    this.outlined = false;
    this.prefix = '';
    this.suffix = '';
    this.clickableIcon = false;
  }

  set value(value){
    this._setValue(value, false);
  }

  get value() {
    return this._value;
  }

  set multiline(val){
    let oldVal = this._multiline;

    if(val === oldVal){
      return;
    }

    this._multiline = val;

    if(this._multiline){
      this.outlined = true;
    }

    this.requestUpdate('multiline', oldVal);
  }

  get multiline(){
    return this._multiline;
  }

  set invalid(invalid){
    let oldVal = this.invalid;

    if(invalid === oldVal){
      return;
    }

    if (this._textFieldInstance) { 
      this._textFieldInstance.valid = !invalid;
    }

    this._invalid = invalid;

    this.requestUpdate('invalid', oldVal);
  }

  get invalid(){
    return this._invalid;
  }

  firstUpdated(){
    this._textFieldInstance = new MDCTextField(this.shadowRoot.querySelector('.mdc-text-field'));
    this._textFieldInstance.useNativeValidation = false;
    this._updateTextfieldValue();
    setTimeout(() => {
      this._textFieldInstance.layout();
    });
    this.formElement = this.shadowRoot.querySelector('#inputElement');
  }

  disconnectedCallback() {
    super.disconnectedCallback && super.disconnectedCallback();
    if (this._textFieldInstance) {
      this._textFieldInstance.destroy();
      this._textFieldInstance = null;
    }
  }

  render() {

    const MDCClasses = {
      'mdc-text-field--disabled': this.disabled,
      'mdc-text-field--no-label': !this.label ? true : false,
      'mdc-text-field--with-leading-icon': this.iconLeading ? true : false,
      'mdc-text-field--with-trailing-icon': this.iconTrailing ? true : false,
      'mdc-text-field--textarea': this.multiline,
      'mdc-text-field--outlined' : this.outlined,
      'mdc-text-field--filled' : !this.outlined,
    };

    const ripple =
        !this.outlined ? html`<div class="mdc-text-field__ripple"></div>` : '';

    const lineRipple =
        !this.outlined ? html`<div class="mdc-line-ripple"></div>` : '';
    

    return html`

    <div class="input-container">
      <label class="mdc-text-field ${classMap(MDCClasses)}">
        ${ripple}

        ${this.iconLeading ? this._renderIcon(this.iconLeading) : ''}

        ${this.prefix ? this._renderAffix(this.prefix) : ''}

        ${this.multiline ? this._renderCharCounter() : ''}

        ${this._renderInput()}

        ${this.suffix ? this._renderAffix(this.suffix) : ''}

        ${this.iconTrailing ? this._renderIcon(this.iconTrailing,true) : ''}

        ${!this.outlined ? this._renderLabel() : ''}

        ${this._renderOutlined()}

        ${lineRipple}
      </label>
      ${this. _renderHelperText()}
    </div>
    `;
  }


  _renderIcon(icon, isTrailingIcon = false) {
    const classes = {
      'mdc-text-field__icon--leading': !isTrailingIcon,
      'mdc-text-field__icon--trailing': isTrailingIcon
    };
    return !isTrailingIcon ? 
    //  html`<mwc-icon class="mdc-text-field__icon ${
    //     classMap(classes)}">${icon}</mwc-icon>`
    html`<dk-icon class="mdc-text-field__icon ${
      classMap(classes)}" name="${icon}"></dk-icon>`
    :
    html`
      <dk-icon-button class="mdc-text-field__icon ${
         classMap(classes)}"  icon="${icon}" @click="${this._iconClick}" tabindex="${this.clickableIcon?'':-1}"></dk-icon-button>
    `;
  }

  _renderAffix(content, isSuffix = false) {
    const classes = {
      'mdc-text-field__affix--prefix': !isSuffix,
      'mdc-text-field__affix--suffix': isSuffix,
      'prefix-text' : !isSuffix,
      'suffix-text' : isSuffix
    };

    return html`<span class="mdc-text-field__affix ${classMap(classes)}">
        ${content}</span>`;
  }

  _renderOutlined() {
    return this.outlined ?
    html`
      <div class="mdc-notched-outline">
        <div class="mdc-notched-outline__leading"></div>
        <div class="mdc-notched-outline__notch">
          ${this._renderLabel()}
        </div>
        <div class="mdc-notched-outline__trailing"></div>
      </div>` : '';

  }

  _renderLabel() {
    return this.label ? 
     html`<label for="inputField" class="mdc-floating-label">${this.label}</label>`:'';
  }

  _renderInput() {
    const minOrUndef = this.minLength === -1 ? undefined : this.minLength;
    const maxOrUndef = this.maxLength === -1 ? undefined : this.maxLength;
    return !this.multiline ?  
      html`
        <input
        id="inputElement"
        aria-labelledby="label"
        class="mdc-text-field__input"
        .name="${this.name}"
        .type="${this.type}"
        ?disabled="${this.disabled}"
        placeholder="${this.placeholder}"
        ?required="${this.required}"
        ?readonly="${this.readOnly}"
        minlength="${ifDefined(minOrUndef)}"
        maxlength="${ifDefined(maxOrUndef)}"
        pattern="${ifDefined(this.pattern ? this.pattern : undefined)}"
        @keypress="${this._preventInvalidInput}"
        @paste="${this._preventInvalidInput}"  
        @keydown="${this._onKeyDown}"
        @input="${this._onInput}"
        @blur="${this._onInputBlur}"
        @focus="${this._onFocus}">` :
    
      html`
        <textarea 
          id="inputElement"
          class="mdc-text-field__input" 
          aria-labelledby="label" 
          .name="${this.name}"
          .value="${this.value}"
          ?disabled="${this.disabled}"
          placeholder="${this.placeholder}"
          ?required="${this.required}"
          ?readonly="${this.readOnly}"
          minlength="${ifDefined(minOrUndef)}"
          maxlength="${ifDefined(maxOrUndef)}"
          rows="${ifDefined(this.tAreaRows)}" 
          cols="${ifDefined(this.tAreaColumns)}"
          @input="${this._onInput}"
          @blur="${this._onInputBlur}"
          @focus="${this._onFocus}">
        </textarea>
      `;
    
  }

  _renderHelperText(){
    const helperTextClasses = {
      'mdc-text-field-helper-text--persistent': this.hintPersistent
    };

    return html`
      <div class="mdc-text-field-helper-line">
        <div class="mdc-text-field-helper-text helper-text ${classMap(helperTextClasses)}" id="my-helper-id" aria-hidden="true">${this.helperText}</div>
        <div class="mdc-text-field-helper-text mdc-text-field-helper-text--validation-msg">${this.errorMessage}</div>
        ${this._renderCharCounter()}
      </div>`;
  }

  _renderCharCounter(){
    return this.charCounter ? html`<div class="mdc-text-field-character-counter"></div>` : html``;
  }

  focus() {
    const focusEvt = new CustomEvent('focus');
    this.formElement.dispatchEvent(focusEvt);
    this.formElement.focus();
  }

  blur() {
    const blurEvt = new CustomEvent('blur');
    this.formElement.dispatchEvent(blurEvt);
    this.formElement.blur();
  }

  select() {
    this._textFieldInstance.input_.select();
  }

  _onInput(){
    let value = this.parseValue(this._textFieldInstance.value);
    if(value!==undefined){
      this._setValue(value, true);
    }
  }

  _onFocus() { 
    if (this.autoSelect) {
      //Set timeout so that we can always get selected text when autoSelect is true
      setTimeout(() => {
        this.select();
      });
    }
  }

  _onInputBlur(e){
    this.validate();
  }

  checkValidity(){
    const isValid = this._getInputValidity();

    return isValid;
  }

  validate() {
    let isValid = this._getInputValidity();

    this.invalid = !isValid;

    if (!isValid) {
      const invalidEvent = new CustomEvent('invalid', { 
        detail: { val: this.value, invalid : !isValid },
        bubbles: true, 
        composed: true });
      this.dispatchEvent(invalidEvent);
    }

    return isValid;
  }

  _getInputValidity() {
    const isNativeValid = this.formElement.checkValidity();

    if (this.validator) {
      let customValidity = this.validator(this.value);
      return isNativeValid && customValidity;
    }

    return isNativeValid;
  }

  _setValue(value,internal){
    let oldVal = this._value;

    if(value === oldVal){
      return;
    }

    this._value = value === undefined || value === null ? '' : value;

    let valChangedEvt = new CustomEvent('value-changed', { 
      detail: { val : this._value },
      bubbles: true, 
      composed: true });
    this.dispatchEvent(valChangedEvt);
    
    if(value && this.invalid){
      this.validate();
    }

    if(!internal){
      this._updateTextfieldValue();
    }
  }

  _preventInvalidInput(event) {
    if (!this.allowedPattern) {
      return;
    }

    let isValid = this._isValidValue(event.key);

    if (!isValid) {
      event.preventDefault();
    }
  }

  _isValidValue(value) { 
    if(!this.allowedPattern) {
      return true;
    }

    return RegExp(this.allowedPattern).test(value);
  }

  formatText(value){
    return value;
  }

  parseValue(value){
    return value;
  }

  _updateTextfieldValue() {
    if (!this._textFieldInstance) {
      return;
    }
    
    if(this.truncateOnBlur && this.value){
      this.value = typeof this.value === 'string' ? this.value.trim() : this.value;
    }
    
    this._textFieldInstance.value = this.formatText(this.value);
  }

  _onKeyDown(e) {
    var keyCode = e.keyCode || e.which;
    if (keyCode === 13) {
      this._dispatchEnter(e);
      return;
    }

    if (keyCode === 27) {
      this._dispatchEsc(e);
    }
  }

  _dispatchEnter(e) {
    this.dispatchEvent(new CustomEvent('enter', {
      detail: { val: this.value, event: e }
    }));
  }

  _dispatchEsc(e) {
    this.dispatchEvent(new CustomEvent('esc', {
      detail: { val: this.value, event: e }
    }));
  }

  _iconClick(e){
    this.dispatchEvent(new CustomEvent('icon-click', {
      detail: { val: this.value, event: e }
    }));
  }


}
customElements.define('dk-input', DkInput);