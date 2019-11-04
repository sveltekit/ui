import { writable, readable } from 'svelte/store';
import _components from '../components/index.js';

export const components = readable(_components);
export const activeComponent = writable('');
