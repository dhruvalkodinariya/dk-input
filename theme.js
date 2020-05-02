import {css} from 'lit-element';

export const Theme = css`
:host{

  /* Light theme variable*/

  --mdc-theme-primary-on-light: #6200ee;
  --mdc-theme-secondary-on-light: #018786;
  --mdc-theme-background-on-light: #fff;
  --mdc-theme-surface-on-light: #fff;
  --mdc-theme-error-on-light: #b00020;
  --mdc-theme-on-primary-on-light: #fff;
  --mdc-theme-on-secondary-on-light: #fff;
  --mdc-theme-on-surface-on-light: #000;
  --mdc-theme-on-error-on-light: #fff;

  --mdc-theme-text-primary-on-light: rgba(0, 0, 0, 0.87);
  --mdc-theme-text-secondary-on-light: rgba(0, 0, 0, 0.6);
  --mdc-theme-text-hint-on-light: rgba(0, 0, 0, 0.38);
  --mdc-theme-text-disabled-on-light: rgba(0, 0, 0, 0.38);
  --mdc-theme-text-icon-on-light: rgba(0, 0, 0, 0.38);

  --mdc-theme-divider-on-light: rgba(0, 0, 0, 0.12);

  --mdc-theme-disabled-field-on-light: rgba(0, 0, 0, 0.05);

  --dk-icon-color-active-on-light: var(--mdc-theme-text-primary-on-light);
  --dk-icon-color-on-light: var(--mdc-theme-text-secondary-on-light);
  --dk-icon-color-disabled-on-light: var(--mdc-theme-text-disabled-on-light);

  /* Dark theme variables*/

  --mdc-theme-primary-on-dark: #BB86FC;
  --mdc-theme-secondary-on-dark: #03DAC6;
  --mdc-theme-background-on-dark: #121212;
  --mdc-theme-surface-on-dark: #121212;
  --mdc-theme-error-on-dark: #CF6679;
  --mdc-theme-on-primary-on-dark: #000;
  --mdc-theme-on-secondary-on-dark: #000;
  --mdc-theme-on-surface-on-dark: #fff;
  --mdc-theme-on-error-on-dark: #000;

  --mdc-theme-text-primary-on-dark: rgba(255, 255, 255, 0.87);
  --mdc-theme-text-secondary-on-dark: rgba(255, 255, 255, 0.6);
  --mdc-theme-text-hint-on-dark: rgba(255, 255, 255, 0.38);
  --mdc-theme-text-disabled-on-dark: rgba(255, 255, 255, 0.38);

  --mdc-theme-divider-on-dark: rgba(255, 255, 255, 0.12);

  --mdc-theme-disabled-field-on-dark: rgba(255, 255, 255, 0.05);

  --dk-icon-color-active-on-dark: var(--mdc-theme-text-primary-on-dark);
  --dk-icon-color-on-dark: var(--mdc-theme-text-secondary-on-dark);
  --dk-icon-color-disabled-on-dark: var(--mdc-theme-text-disabled-on-dark);

  /* Set theme on light theme*/

  --mdc-theme-primary: var(--mdc-theme-primary-on-light);
  --mdc-theme-secondary: var(--mdc-theme-secondary-on-light);
  --mdc-theme-background: var(--mdc-theme-background-on-light);
  --mdc-theme-surface: var(--mdc-theme-surface-on-light);
  --mdc-theme-error: var(--mdc-theme-error-on-light);
  --mdc-theme-on-primary: var(--mdc-theme-on-primary-on-light);
  --mdc-theme-on-secondary: var(--mdc-theme-on-secondary-on-light);
  --mdc-theme-on-surface: var(--mdc-theme-on-surface-on-light);
  --mdc-theme-on-error: var(--mdc-theme-on-error-on-light);


  --mdc-theme-text-primary: var(--mdc-theme-text-primary-on-light);
  --mdc-theme-text-secondary: var(--mdc-theme-text-secondary-on-light);
  --mdc-theme-text-hint: var(--mdc-theme-text-hint-on-light);
  --mdc-theme-text-disabled: var(--mdc-theme-text-disabled-on-light);

  --mdc-theme-divider: var(--mdc-theme-divider-on-light);

  --mdc-theme-disabled-field-background: var(--mdc-theme-disabled-field-on-light);

  --dk-icon-color-active: var(--dk-icon-color-active-on-light);
  --dk-icon-color: var(--dk-icon-color-on-light);
  --dk-icon-color-disabled: var(--dk-icon-color-disabled-on-light);

  background-color: var(--mdc-theme-background-on-light);

}

:host([dark-theme]){
  /* Set theme on dark theme*/

  --mdc-theme-primary: var(--mdc-theme-primary-on-dark);
  --mdc-theme-secondary: var(--mdc-theme-secondary-on-dark);
  --mdc-theme-background: var(--mdc-theme-background-on-dark);
  --mdc-theme-surface: var(--mdc-theme-surface-on-dark);
  --mdc-theme-error: var(--mdc-theme-error-on-dark);
  --mdc-theme-on-primary: var(--mdc-theme-on-primary-on-dark);
  --mdc-theme-on-secondary: var(--mdc-theme-on-secondary-on-dark);
  --mdc-theme-on-surface: var(--mdc-theme-on-surface-on-dark);
  --mdc-theme-on-error: var(--mdc-theme-on-error-on-dark);


  --mdc-theme-text-primary: var(--mdc-theme-text-primary-on-dark);
  --mdc-theme-text-secondary: var(--mdc-theme-text-secondary-on-dark);
  --mdc-theme-text-hint: var(--mdc-theme-text-hint-on-dark);
  --mdc-theme-text-disabled: var(--mdc-theme-text-disabled-on-dark);

  --mdc-theme-divider: var(--mdc-theme-divider-on-dark);

  --mdc-theme-disabled-field-background: var(--mdc-theme-disabled-field-on-dark);

  --dk-icon-color-active: var(--dk-icon-color-active-on-dark);
  --dk-icon-color: var(--dk-icon-color-on-dark);
  --dk-icon-color-disabled: var(--dk-icon-color-disabled-on-dark);


  /* surface overlay properties */
  --dk-surface-overlay-color: var(--mdc-theme-on-surface);
  --dk-surface-overlay-opacitiy-elevation-1: 0.05;
  --dk-surface-overlay-opacitiy-elevation-2: 0.07;
  --dk-surface-overlay-opacitiy-elevation-3: 0.08;
  --dk-surface-overlay-opacitiy-elevation-4: 0.09;
  --dk-surface-overlay-opacitiy-elevation-6: 0.11;
  --dk-surface-overlay-opacitiy-elevation-8: 0.12;
  --dk-surface-overlay-opacitiy-elevation-12: 0.14;
  --dk-surface-overlay-opacitiy-elevation-16: 0.15;
  --dk-surface-overlay-opacitiy-elevation-24: 0.16;

  background-color: var(--mdc-theme-background-on-dark);
}
  `;